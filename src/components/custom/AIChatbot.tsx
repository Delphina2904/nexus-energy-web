import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";

// Debug logging
console.log('=== ENVIRONMENT VARIABLE DEBUG ===');
console.log('import.meta.env:', import.meta.env);
console.log('import.meta.env.VITE_GEMINI_API_KEY:', import.meta.env.VITE_GEMINI_API_KEY);
console.log('typeof import.meta.env.VITE_GEMINI_API_KEY:', typeof import.meta.env.VITE_GEMINI_API_KEY);
console.log('All VITE_ variables:', Object.keys(import.meta.env).filter(key => key.startsWith('VITE_')));
console.log('=== END DEBUG ===');

const GEMINI_API_KEY =import.meta.env.VITE_GEMINI_API_KEY;
const MODEL = 'gemini-1.5-flash'; 

// Check if API key is available
if (!GEMINI_API_KEY || GEMINI_API_KEY === 'your_gemini_api_key_here') {
  console.warn('Gemini API key not found. Please add VITE_GEMINI_API_KEY to your .env file');
}

const COMPANY_CONTEXT = `You are an assistant for Nexus Energy Solutions, a leading provider of advanced battery energy storage systems and sustainable energy solutions based in Thane West, Mumbai, India. 

Company Information:
- Nexus Energy Solutions specializes in precision-engineered energy storage solutions
- We offer solutions across 5 key sectors: E-Mobility, Renewable Energy, Defense & Aerospace, Industrial, and Agricultural
- Our solutions provide 99.8% uptime, 40% cost reduction, and zero emissions
- We use cutting-edge battery technology for sustainable energy infrastructure

Key Services:
1. E-Mobility Revolution: High-density propulsion systems, ultra-fast charging infrastructure, battery-swapping networks
2. Renewable Energy Integration: Containerized BESS, solar-wind hybrid microgrid controllers, hydrogen fuel cell integration
3. Defense & Aerospace: Extreme-temperature batteries, EMP-hardened power units, lightweight energy packs for UAVs
4. Industrial Electrification: Heavy-machinery batteries, smart energy controllers, peak-load shaving systems
5. Agricultural Modernization: Solar-powered irrigation storage, electric tractor battery packs, IoT-enabled crop monitoring

Contact Information:
Phone: +91 6280 602 341, +91 9650661636
Email: sales@nexusenergy.in, info@nexusenergy.in
Address: 508, Rosa Bella Towers, Waghbil, Ghodbunder Road, Thane West (Mumbai)-400815

Always be helpful, professional, and knowledgeable about energy storage technology. Keep responses concise but informative. If asked about anything unrelated to Nexus Energy Solutions, politely redirect to our services.`;

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      from: 'bot', 
      text: "Hello! I'm Nexus Energy's AI assistant. How can I help you with our energy storage solutions today? Ask me about our services, technology, or contact information." 
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = { from: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      // Check if API key is available
      if (!GEMINI_API_KEY || GEMINI_API_KEY === 'your_gemini_api_key_here') {
        throw new Error('API_KEY_MISSING');
      }

      const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: MODEL });

      const chat = model.startChat({
        history: [
          { role: 'user', parts: [{ text: COMPANY_CONTEXT }] },
        ],
        generationConfig: {
          maxOutputTokens: 500,
          temperature: 0.7,
        },
      });

      const result = await chat.sendMessage(userMsg.text);
      const response = await result.response.text();

      setMessages((prev) => [...prev, { from: 'bot', text: response }]);
    } catch (error) {
      console.error('Chatbot Error:', error);
      
      let errorMessage = "I'm sorry, I'm having trouble connecting right now. Please try again later or contact our support team at sales@nexusenergy.in";
      
      if (error.message === 'API_KEY_MISSING') {
        errorMessage = "Chatbot is not configured. Please add your Gemini API key to the .env file. Contact support for assistance.";
      } else if (error.message.includes('API_KEY_INVALID')) {
        errorMessage = "Invalid API key. Please check your Gemini API key configuration. Contact support for assistance.";
      } else if (error.message.includes('400')) {
        errorMessage = "API request failed. Please try again later or contact our support team.";
      }
      
      setMessages((prev) => [...prev, { 
        from: 'bot', 
        text: errorMessage
      }]);
    }

    setLoading(false);
  };

  const formatTime = () => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <motion.button
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white p-4 rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(true)}
          aria-label="Open Chatbot"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          </AnimatePresence>
          {/* Notification Badge */}
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          />
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 z-30"
              onClick={() => setOpen(false)}
            />
            
            {/* Chat Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed right-4 md:right-6 z-40 w-[calc(100vw-2rem)] max-w-sm h-[calc(100vh-120px)] md:h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
              style={{ top: '100px', maxHeight: 'calc(100vh - 120px)' }}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Nexus AI Assistant</h3>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-white/80 hover:text-white transition-colors p-1"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50" style={{ maxHeight: '350px', overflowY: 'scroll' }}>
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.from === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-2 max-w-[80%] ${message.from === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.from === 'user' 
                          ? 'bg-gradient-to-r from-blue-500 to-indigo-600' 
                          : 'bg-gradient-to-r from-gray-500 to-gray-600'
                      }`}>
                        {message.from === 'user' ? (
                          <User size={16} className="text-white" />
                        ) : (
                          <Bot size={16} className="text-white" />
                        )}
                      </div>
                      <div className={`rounded-2xl px-4 py-2 ${
                        message.from === 'user'
                          ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white'
                          : 'bg-white text-gray-800 shadow-sm border border-gray-200'
                      }`}>
                        <p className="text-sm leading-relaxed text-inherit">{message.text}</p>
                        <p className={`text-xs mt-1 ${
                          message.from === 'user' ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {formatTime()}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {/* Loading Indicator */}
                {loading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="flex items-start space-x-2 max-w-[80%]">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-500 to-gray-600 flex items-center justify-center">
                        <Bot size={16} className="text-white" />
                      </div>
                      <div className="bg-white rounded-2xl px-4 py-2 shadow-sm border border-gray-200">
                        <div className="flex items-center space-x-2">
                          <Loader2 size={16} className="animate-spin text-blue-500" />
                          <span className="text-sm text-gray-600">Typing...</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-200">
                <div className="flex items-end space-x-2">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type your message..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 bg-white placeholder-gray-500"
                      disabled={loading}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={!input.trim() || loading}
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white p-3 rounded-xl transition-all duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send size={18} />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export const AIChatbot = Chatbot;