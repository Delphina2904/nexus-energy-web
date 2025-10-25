import React, { useState } from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { ChevronRight, Send, RefreshCw, MapPin, Phone, Mail, MessageSquare, Clock, Building } from 'lucide-react';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('customer');
  const [captchaCode, setCaptchaCode] = useState('A8B2C');
  const [formData, setFormData] = useState({
    customer: {
      companyName: '',
      website: '',
      name: '',
      tel: '',
      email: '',
      applicationScenario: [],
      applicationArea: '',
      requirements: ''
    },
    feedback: {
      name: '',
      tel: '',
      email: '',
      title: '',
      details: ''
    },
    captcha: '',
    agreePrivacy: false
  });

  const tabs = [
    { id: 'customer', label: 'Customer', description: 'For purchasing Nexus Energy\'s products, please leave a message' },
    { id: 'feedback', label: 'Suggestions and Feedbacks', description: 'If you have any questions or suggestions about Nexus Energy products, technical support, cooperation, etc., please contact us' }
  ];

  const applicationScenarios = [
    'Passenger vehicles',
    'Private vehicles',
    'Operating vehicles',
    'Commercial vehicles',
    'Bus & Coach',
    'Logistics vehicles',
    'Heavy trucks',
    'Sanitation vehicles',
    'Energy storage',
    'Generation side',
    'Transmission & Distribution (T&D)',
    'Commercial & Industrial (C&I)',
    'Residential',
    'UPS',
    'Telecoms base station',
    'Microgrid',
    'Others (charge station…)',
    'New businesses',
    'Vessels',
    'Application in ports',
    'Application in airports',
    'Rail traffic',
    'Forklifts',
    'Two- or three-wheeled vehicles',
    'Engineering machinery',
    'Others'
  ];

  const applicationAreas = [
    'Chinese mainland',
    'Hong Kong, Macao and Taiwan',
    'Asia Pacific',
    'Europe',
    'North America',
    'South America',
    'Africa',
    'Others'
  ];

  const purposeOptions = [
    'Advertising',
    'Conference',
    'Forum',
    'Association'
  ];

  const handleInputChange = (tab, field, value) => {
    setFormData(prev => ({
      ...prev,
      [tab]: {
        ...prev[tab],
        [field]: value
      }
    }));
  };

  const handleScenarioChange = (scenario) => {
    const currentScenarios = formData.customer.applicationScenario;
    const newScenarios = currentScenarios.includes(scenario)
      ? currentScenarios.filter(s => s !== scenario)
      : [...currentScenarios, scenario];
    
    handleInputChange('customer', 'applicationScenario', newScenarios);
  };

  const refreshCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Message sent successfully!');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our team for inquiries, quotes, or to discuss your energy storage needs."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Contact' }
        ]}
      />

      {/* Contact Information Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch With Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to power your future? Connect with our energy experts through any of these channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Address Card */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl border border-blue-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full -mr-10 -mt-10"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Visit Our Office</h3>
              <a
                href="https://maps.google.com/?q=508+Rosa+Bella+Towers+Waghbil+Ghodbunder+Road+Thane+West+Mumbai+400815"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 block"
              >
                508, Rosa Bella Towers,<br />
                Waghbil, Thane West,<br />
                Mumbai - 400815
              </a>
            </div>
          </div>

          {/* Phone Numbers Card */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl border border-green-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/10 rounded-full -mr-10 -mt-10"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Call Us Directly</h3>
              <div className="space-y-2">
                <a
                  href="tel:+916280602341"
                  className="block text-gray-600 hover:text-green-600 transition-colors duration-300 font-medium"
                >
                  +91 6280 602 341
                </a>
                <a
                  href="tel:+919650661636"
                  className="block text-gray-600 hover:text-green-600 transition-colors duration-300 font-medium"
                >
                  +91 9650661636
                </a>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-violet-100 p-8 rounded-2xl border border-purple-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-full -mr-10 -mt-10"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Us</h3>
              <div className="space-y-2">
                <a
                  href="mailto:sales@nexusenergy.in"
                  className="block text-gray-600 hover:text-purple-600 transition-colors duration-300 font-medium"
                >
                  sales@nexusenergy.in
                </a>
                <a
                  href="mailto:info@nexusenergy.in"
                  className="block text-gray-600 hover:text-purple-600 transition-colors duration-300 font-medium"
                >
                  info@nexusenergy.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Support Banner */}
        <div className="relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-6">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Need Instant Support?</h3>
                <p className="text-green-100">Chat with us on WhatsApp for quick assistance</p>
              </div>
            </div>
            <a
              href="https://wa.me/916280602341"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start WhatsApp Chat
            </a>
          </div>
        </div>

       
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Tab Navigation */}
        <div className="bg-[#001e5a] rounded-t-lg overflow-hidden h-20 mb-8">
          <div className="flex flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-6 py-4 font-medium text-sm transition-all duration-300 h-20 ${
                  activeTab === tab.id
                    ? 'bg-[#0028AA] text-white'
                    : 'bg-[#001e5a] text-blue-100 hover:bg-[#0028AA] hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white border border-gray-200 rounded-b-lg p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
          {/* Customer Tab */}
          {activeTab === 'customer' && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company name*
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.customer.companyName}
                    onChange={(e) => handleInputChange('customer', 'companyName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Official website
                  </label>
                  <input
                    type="url"
                    value={formData.customer.website}
                    onChange={(e) => handleInputChange('customer', 'website', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name*
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.customer.name}
                    onChange={(e) => handleInputChange('customer', 'name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tel.*
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.customer.tel}
                    onChange={(e) => handleInputChange('customer', 'tel', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail*
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.customer.email}
                    onChange={(e) => handleInputChange('customer', 'email', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Application scenario*
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {applicationScenarios.map((scenario) => (
                    <label key={scenario} className="flex items-center space-x-2 text-sm">
                      <input
                        type="checkbox"
                        checked={formData.customer.applicationScenario.includes(scenario)}
                        onChange={() => handleScenarioChange(scenario)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{scenario}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Application areas
                </label>
                <select
                  value={formData.customer.applicationArea}
                  onChange={(e) => handleInputChange('customer', 'applicationArea', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select an area</option>
                  {applicationAreas.map((area) => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Detailed requirements ( estimated order requirements, expected delivery date, other special requirements, etc. )*
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.customer.requirements}
                  onChange={(e) => handleInputChange('customer', 'requirements', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none"
                />
              </div>
            </div>
          )}

          {/* Feedback Tab */}
          {activeTab === 'feedback' && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name*
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.feedback.name}
                    onChange={(e) => handleInputChange('feedback', 'name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tel.*
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.feedback.tel}
                    onChange={(e) => handleInputChange('feedback', 'tel', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail*
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.feedback.email}
                    onChange={(e) => handleInputChange('feedback', 'email', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Suggested Title*
                </label>
                <input
                  type="text"
                  required
                  value={formData.feedback.title}
                  onChange={(e) => handleInputChange('feedback', 'title', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Suggested Details*
                </label>
                <textarea
                  required
                  rows={8}
                  value={formData.feedback.details}
                  onChange={(e) => handleInputChange('feedback', 'details', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none"
                />
              </div>
            </div>
          )}

          {/* Common Form Footer */}
          {activeTab !== 'media' && (
            <div className="border-t pt-6 space-y-4">
              {/* Captcha */}
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">Please enter the verification code</span>
                <div className="flex items-center space-x-2">
                  <div className="bg-gray-100 px-4 py-2 border rounded font-mono text-lg tracking-wider">
                    {captchaCode}
                  </div>
                  <button
                    type="button"
                    onClick={refreshCaptcha}
                    className="p-2 text-gray-500 hover:text-gray-700"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>
                <input
                  type="text"
                  value={formData.captcha}
                  onChange={(e) => setFormData(prev => ({ ...prev, captcha: e.target.value }))}
                  placeholder="Enter code"
                  className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {/* Privacy Agreement */}
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={formData.agreePrivacy}
                  onChange={(e) => setFormData(prev => ({ ...prev, agreePrivacy: e.target.checked }))}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5"
                  required
                />
                <label htmlFor="privacy" className="text-sm text-gray-700">
                  I agree to comply with{' '}
                  <a href="/privacy" className="text-blue-600 hover:text-blue-800 underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded transition-colors font-medium flex items-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit</span>
              </button>
            </div>
          )}
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;