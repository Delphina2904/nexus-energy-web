import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import trainImage from "../assets/0.png";
import batteryImage from "../assets/62.jpg";

// Export the main VandeBharat content without Navbar/Footer for embedding
export const VandeBharatContent = memo(() => {
  return (
    <motion.div 
      className="min-h-screen bg-black overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-xl"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-white tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Vande Bharat
              </motion.h1>
              <motion.p 
                className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-normal"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Discover how Nexus Energy's advanced thermal management solutions power critical railway applications
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Vande Bharat Application Section */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4 sm:mb-6 justify-center lg:justify-start">
                <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mr-3 sm:mr-4 rounded-full"></div>
                <span className="text-blue-600 font-medium text-base sm:text-lg bg-blue-50 px-4 py-2 rounded-full border border-blue-200">Railway Applications</span>
                <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 ml-3 sm:ml-4 rounded-full"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 sm:mb-8 max-w-5xl leading-tight tracking-tight">
                Vande Bharat (T-18) Train Coach{" "}
                <span className="relative font-normal">
                  Battery System
                  <motion.div
                    className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </span>
              </h2>
              
              {/* Vande Bharat Train Image */}
              <motion.div
                className="mb-8 rounded-3xl overflow-hidden shadow-2xl border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <img 
                    src={trainImage} 
                    alt="Vande Bharat (T-18) Train at railway station"
                    className="w-full h-auto object-cover max-h-[28rem] md:max-h-96 lg:max-h-[30rem]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 sm:p-12 border border-blue-200 shadow-xl">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8 font-light max-w-4xl mx-auto text-center">
                  T-18 Vande Bharat train's Onboard battery system is a mission-critical component, serving several essential functions:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <motion.div
                    className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <h4 className="font-medium text-gray-900 mb-3 text-lg">Startup Power</h4>
                    <p className="text-gray-600 text-sm font-light leading-relaxed">
                      Energizes the train's coach monitoring system, auxiliary systems, traction converters, and all electrical systems before main power is available.
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h12M12 6v12" /></svg>
                    </div>
                    <h4 className="font-medium text-gray-900 mb-3 text-lg">Pantograph Lift</h4>
                    <p className="text-gray-600 text-sm font-light leading-relaxed">
                      Provides power to raise the pantograph to connect to Overhead Equipment (OHE).
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-red-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" /><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
                    </div>
                    <h4 className="font-medium text-gray-900 mb-3 text-lg">Emergency Backup</h4>
                    <p className="text-gray-600 text-sm font-light leading-relaxed">
                      Ensures backup power for core systems during OHE failure or scheduled maintenance; crucial for passenger safety, lighting, communication, and basic operation until rescue or resolution.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Technical Features Mapping */}
            <motion.div
              className="mb-16 sm:mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-3xl p-8 sm:p-12 border border-gray-200">
                {/* Nexus Energy Battery Image */}
                <motion.div
                  className="mb-8 flex justify-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <img 
                    src={batteryImage} 
                    alt="Nexus Energy Battery Box Unit - Advanced Thermal Management System"
                    className="max-w-full h-auto object-contain rounded-xl shadow-lg"
                    style={{ maxHeight: '400px' }}
                  />
                </motion.div>
                
                <h3 className="text-2xl sm:text-3xl font-normal text-gray-900 mb-8 text-center tracking-tight">
                  Technical Features Mapped to Rail Needs
                </h3>
                
                <div className="overflow-x-auto">
                  <motion.table
                    className="w-full bg-white rounded-2xl shadow-sm overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-600 to-indigo-700">
                        <th className="px-6 py-4 text-left text-white font-semibold text-lg">Requirement</th>
                        <th className="px-6 py-4 text-left text-white font-semibold text-lg">Nexus Energy Solution</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        {
                          requirement: "Emergency backup (non-OHE)",
                          solution: "Long-duration, high-discharge batteries with safe chemistries",
                          color: "text-red-700 bg-red-50"
                        },
                        {
                          requirement: "Auxiliary/traction startup",
                          solution: "High power density, instantaneous output",
                          color: "text-blue-700 bg-blue-50"
                        },
                        {
                          requirement: "Maintenance support",
                          solution: "Fast recharge, robust cycle life",
                          color: "text-green-700 bg-green-50"
                        },
                        {
                          requirement: "Safety in transit",
                          solution: "Active thermal and AI-BMS safeguards; vibration resistant",
                          color: "text-purple-700 bg-purple-50"
                        },
                        {
                          requirement: "Remote diagnostics/monitoring",
                          solution: "Always-connected BMS platform, OTA update ability",
                          color: "text-indigo-700 bg-indigo-50"
                        }
                      ].map((row, index) => (
                        <motion.tr
                          key={index}
                          className="hover:bg-gray-50 transition-colors duration-200"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <td className="px-6 py-4 font-normal text-gray-900 bg-gray-50">
                            {row.requirement}
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-block px-3 py-1 rounded-lg text-sm font-normal ${row.color}`}>
                              {row.solution}
                            </span>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </motion.table>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Traction Application Section */}
        <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4 sm:mb-6 justify-center lg:justify-start">
                <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-green-400 to-green-600 mr-3 sm:mr-4 rounded-full"></div>
                <span className="text-green-600 font-medium text-base sm:text-lg bg-green-50 px-4 py-2 rounded-full border border-green-200">Industrial Applications</span>
                <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-green-400 to-green-600 ml-3 sm:ml-4 rounded-full"></div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 sm:mb-8 max-w-6xl leading-tight tracking-tight">
                Traction for Self-Propelled Inspection Train &{" "}
                <span className="relative font-normal">
                  Shunt Locomotive
                  <motion.div
                    className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 bg-green-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 sm:p-12 border border-green-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-normal text-gray-900 mb-6 tracking-tight">
                      Industry-Aligned Solution
                    </h3>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                      Nexus Energy's Liquid Cooled Battery system is industry-aligned, and fully capable of powering shunt locomotives under even demanding yard conditions.
                    </p>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-normal">
                      When combined with advanced management and safety technologies—Nexus Energy provides a future-ready, low-maintenance, and sustainable solution for rail operators pursuing emissions reduction and operational efficiency.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/50"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="11" width="18" height="6" rx="2" /><circle cx="7.5" cy="17.5" r="1.5" /><circle cx="16.5" cy="17.5" r="1.5" /><rect x="7" y="7" width="10" height="4" rx="1" /></svg>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Demanding Conditions</h4>
                      <p className="text-gray-600 text-sm">Robust performance in challenging yard environments</p>
                    </motion.div>

                    <motion.div
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/50"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-1.5a2.5 2.5 0 11-3.536 3.536l-7.071 7.071a2 2 0 102.828 2.828l7.071-7.071a2.5 2.5 0 013.536-3.536z" /></svg>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Low Maintenance</h4>
                      <p className="text-gray-600 text-sm">Advanced management reduces operational overhead</p>
                    </motion.div>

                    <motion.div
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/50"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3 0 2.5 3 7 3 7s3-4.5 3-7c0-1.657-1.343-3-3-3z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8V4m0 0C7.582 4 4 7.582 4 12c0 4.418 3.582 8 8 8s8-3.582 8-8c0-4.418-3.582-8-8-8z" /></svg>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Emissions Reduction</h4>
                      <p className="text-gray-600 text-sm">Sustainable solution for environmental goals</p>
                    </motion.div>

                    <motion.div
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/50"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Operational Efficiency</h4>
                      <p className="text-gray-600 text-sm">Optimized performance for rail operations</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        {/* <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Railway Operations?
              </h3>
              <p className="text-xl text-blue-100 mb-8">
                Discover how Nexus Energy's advanced thermal management solutions can power your critical railway applications.
              </p>
              <motion.button
                className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('contact-section');
                  if (element) {
                    const navHeight = 80;
                    const elementPosition = element.offsetTop - navHeight;
                    window.scrollTo({
                      top: elementPosition,
                      behavior: 'smooth'
                    });
                  } else {
                    window.location.href = '/#contact-section';
                  }
                }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </div>
        </section> */}
      </main>
    </motion.div>
  );
});

VandeBharatContent.displayName = 'VandeBharatContent';

const VandeBharat = () => {
  return (
    <>
      <Navbar />
      <VandeBharatContent />
      <Footer />
    </>
  );
};

export default VandeBharat;
