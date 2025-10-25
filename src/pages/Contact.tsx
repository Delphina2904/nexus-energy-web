import React, { useState } from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChevronRight, Send, RefreshCw } from 'lucide-react';

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
    media: {},
    activity: {
      exhibitionName: '',
      organizer: '',
      website: '',
      venue: '',
      registrationStart: '',
      registrationEnd: '',
      eventStart: '',
      eventEnd: '',
      name: '',
      tel: '',
      email: '',
      themeContents: '',
      purpose: ''
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
    { id: 'customer', label: 'Customer', description: 'For purchasing CATL\'s products, please leave a message' },
    { id: 'media', label: 'Media', description: 'Contact us' },
    { id: 'activity', label: 'Event Organizer', description: 'For exhibitions or conference invitations, please leave a message:' },
    { id: 'feedback', label: 'Suggestions and Feedbacks', description: 'If you have any questions or suggestions about CATL products, technical support, cooperation, etc., please contact us' }
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
      
      {/* Breadcrumb Hero Section */}
      <div className="bg-gray-50 py-12 border-b">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
            <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">Contact</span>
          </nav>
          
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Message</h1>
          
          {/* Tab Description */}
          <p className="text-lg text-gray-700 max-w-3xl">
            {tabs.find(tab => tab.id === activeTab)?.description}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Tab Navigation */}
        <div className="bg-[#001e5a] rounded-t-lg overflow-hidden mb-8">
          <div className="flex flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-6 py-4 font-medium text-sm transition-all duration-300 ${
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

          {/* Media Tab */}
          {activeTab === 'media' && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact us</h3>
              <div className="space-y-2">
                <p className="text-lg text-gray-700">
                  <a 
                    href="mailto:sales@nexusenergy.in" 
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    sales@nexusenergy.in
                  </a>
                </p>
                <p className="text-lg text-gray-700">
                  <a 
                    href="mailto:info@nexusenergy.in" 
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    info@nexusenergy.in
                  </a>
                </p>
              </div>
            </div>
          )}

          {/* Event Organizer Tab */}
          {activeTab === 'activity' && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full name of exhibition/conference*
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.activity.exhibitionName}
                    onChange={(e) => handleInputChange('activity', 'exhibitionName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organizer
                  </label>
                  <input
                    type="text"
                    value={formData.activity.organizer}
                    onChange={(e) => handleInputChange('activity', 'organizer', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    value={formData.activity.website}
                    onChange={(e) => handleInputChange('activity', 'website', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Exhibition/conference venue*
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.activity.venue}
                    onChange={(e) => handleInputChange('activity', 'venue', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start and end time of registration*
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="date"
                      required
                      value={formData.activity.registrationStart}
                      onChange={(e) => handleInputChange('activity', 'registrationStart', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="date"
                      required
                      value={formData.activity.registrationEnd}
                      onChange={(e) => handleInputChange('activity', 'registrationEnd', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start and end time of event*
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="date"
                      required
                      value={formData.activity.eventStart}
                      onChange={(e) => handleInputChange('activity', 'eventStart', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="date"
                      required
                      value={formData.activity.eventEnd}
                      onChange={(e) => handleInputChange('activity', 'eventEnd', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
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
                    value={formData.activity.name}
                    onChange={(e) => handleInputChange('activity', 'name', e.target.value)}
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
                    value={formData.activity.tel}
                    onChange={(e) => handleInputChange('activity', 'tel', e.target.value)}
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
                    value={formData.activity.email}
                    onChange={(e) => handleInputChange('activity', 'email', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Theme contents (core information, scale, influence, etc.)*
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.activity.themeContents}
                  onChange={(e) => handleInputChange('activity', 'themeContents', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Purpose of the letter
                </label>
                <div className="flex flex-wrap gap-4">
                  {purposeOptions.map((purpose) => (
                    <label key={purpose} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="purpose"
                        value={purpose}
                        checked={formData.activity.purpose === purpose}
                        onChange={(e) => handleInputChange('activity', 'purpose', e.target.value)}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{purpose}</span>
                    </label>
                  ))}
                </div>
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