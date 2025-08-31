import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Phone, Mail, MapPin, Send, Clock, MessageSquare, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger animations
          setTimeout(() => setAnimatedItems(prev => ({ ...prev, header: true })), 200);
          setTimeout(() => setAnimatedItems(prev => ({ ...prev, info: true })), 400);
          setTimeout(() => setAnimatedItems(prev => ({ ...prev, form: true })), 600);
          setTimeout(() => setAnimatedItems(prev => ({ ...prev, map: true })), 800);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create email content
    const subject = encodeURIComponent("New Contact Form Submission - Nexus Energy Solutions");
    const body = encodeURIComponent(`
Dear Nexus Energy Solutions Team,

I would like to get in touch regarding your energy solutions.

Contact Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone || 'Not provided'}
- Company: ${formData.company || 'Not provided'}

Message:
${formData.message}

Best regards,
${formData.name}
    `);
    
    // Create mailto link
    const mailtoLink = `mailto:sales@nexusenergy.in?subject=${subject}&body=${body}`;
    
    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      
      // Show success message
      alert('Thank you for your message! Your email client will open with a pre-filled message to our team.');
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "+91 6280 602 341",
        "+91 9650661636"
      ],
      action: "tel:+916280602341"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "sales@nexusenergy.in",
        "info@nexusenergy.in"
      ],
      action: "mailto:sales@nexusenergy.in"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "508, Rosa Bella Towers",
        "Waghbil, Ghodbunder Road",
        "Thane West (Mumbai)-400815"
      ],
      action: "https://maps.google.com/?q=508+Rosa+Bella+Towers+Waghbil+Ghodbunder+Road+Thane+West+Mumbai+400815"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed"
      ],
      action: null
    }
  ];

  return (
    <>
      <Navbar />
      {/* ...existing Contact page content... */}
      <div id="contact" ref={sectionRef} className="relative min-h-screen overflow-hidden bg-white py-12 sm:py-16 md:py-20">
        {/* Enhanced Modern Background Elements */}
        <div className="absolute inset-0">
          {/* Modern gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-indigo-50/30 to-blue-50/50"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50/20 via-transparent to-blue-50/30"></div>
          <div className="absolute top-16 right-8 w-96 h-96 bg-gradient-to-br from-blue-200/25 to-indigo-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-24 left-6 w-80 h-80 bg-gradient-to-tr from-indigo-200/30 to-blue-300/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-100/35 to-indigo-200/30 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-indigo-300/15 rounded-full blur-xl animate-pulse delay-1500"></div>
          <div className="absolute bottom-1/3 left-1/5 w-40 h-40 bg-gradient-to-tl from-indigo-200/25 to-blue-300/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
          <div className="absolute top-32 left-1/4 w-8 h-8 bg-blue-300/50 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-48 right-1/3 w-5 h-5 bg-indigo-300/60 rounded-full animate-bounce delay-700"></div>
          <div className="absolute top-2/3 left-1/8 w-4 h-4 bg-blue-200/70 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute top-1/3 right-1/6 w-6 h-6 bg-indigo-200/55 rounded-full animate-bounce delay-500"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-300/65 rounded-full animate-bounce delay-1200"></div>
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white/90 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white/70 to-transparent"></div>
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent animate-pulse"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-300/30 to-transparent animate-pulse delay-1000"></div>
          <div className="absolute inset-0 opacity-20" style={{
            background: `radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),\n                      radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),\n                      radial-gradient(circle at 40% 40%, rgba(147, 197, 253, 0.05) 0%, transparent 50%)`
          }}></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
          {/* Header Section */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            animatedItems.header ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-sm text-blue-600 uppercase tracking-wider font-medium select-none">Get In Touch</span>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-1"></div>
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-6 select-none">
              {'Let\'s Build The Future'.split(' ').map((word, index) => (
                <span
                  key={index}
                  className="inline-block animate-fade-in-up mx-1"
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  {word}
                </span>
              ))}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to transform your energy infrastructure? Connect with our experts 
              and discover how Nexus Energy Solutions can power your success.
            </p>
          </div>
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Side - Contact Information */}
            <div className={`transform transition-all duration-1000 delay-400 order-2 lg:order-1 ${
              animatedItems.info ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="space-y-6 md:space-y-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="group">
                      {info.action ? (
                        <a
                          href={info.action}
                          target={info.action.startsWith('http') ? "_blank" : "_self"}
                          rel={info.action.startsWith('http') ? "noopener noreferrer" : ""}
                          className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:border-blue-200 touch-friendly"
                        >
                          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                              {info.title}
                            </h3>
                            <div className="space-y-1">
                              {info.details.map((detail, idx) => (
                                <p key={idx} className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300 break-words">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-2" />
                        </a>
                      ) : (
                        <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white rounded-2xl border border-gray-200 shadow-lg">
                          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                              {info.title}
                            </h3>
                            <div className="space-y-1">
                              {info.details.map((detail, idx) => (
                                <p key={idx} className="text-sm sm:text-base text-gray-600 break-words">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Right Side - Contact Form */}
            <div className={`transform transition-all duration-1000 delay-600 order-1 lg:order-2 ${
              animatedItems.form ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl p-6 sm:p-8 lg:p-12">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Send us a Message</h3>
                  <p className="text-sm sm:text-base text-gray-600">We'd love to hear from you</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white text-base mobile-focus"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white resize-none"
                      placeholder="Tell us about your project or requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-4 px-8 rounded-xl font-bold transition-all duration-500 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* Map Section */}
          <div className={`mt-20 transform transition-all duration-1000 delay-800 ${
            animatedItems.map ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden">
              <div className="aspect-[3/1] w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7533.197327261816!2d72.96338617771!3d19.256315100000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bb9521c93a83%3A0x8fa1127a7492c44e!2sRosa%20Bella!5e0!3m2!1sen!2sin!4v1750221978789!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nexus Energy Solutions Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
};

export default Contact;