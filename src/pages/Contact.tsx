import React from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import { ContactForm } from "@/components/ContactForm";

const Contact = () => {
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
      <div className="max-w-7xl mx-auto px-6 py-12 pb-4">
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
      {/* Main Content: Contact Form */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;