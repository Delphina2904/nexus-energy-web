import React, { useState, useEffect, useRef } from 'react';
import { Zap, Target, Cpu, Recycle, ArrowRight } from 'lucide-react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import hero from "../assets/herosection.png"

// Export the main About content without Navbar/Footer for embedding
export const AboutContent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState<{[key: string]: boolean}>({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger animations for innovation items
          setTimeout(() => setAnimatedItems(prev => ({ ...prev, item1: true })), 200);
          setTimeout(() => setAnimatedItems(prev => ({ ...prev, item2: true })), 400);
          setTimeout(() => setAnimatedItems(prev => ({ ...prev, item3: true })), 600);
          setTimeout(() => setAnimatedItems(prev => ({ ...prev, item4: true })), 800);
          setTimeout(() => setAnimatedItems(prev => ({ ...prev, quote: true })), 1200);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const innovations = [
    {
      icon: Zap,
      title: "Cell Architecture",
      description: "Tab-less designs enabling 40× charge transfer velocity",
      delay: "item1"
    },
    {
      icon: Target,
      title: "Thermodynamics",
      description: "Active liquid cooling for 500A continuous discharge",
      delay: "item2"
    },
    {
      icon: Cpu,
      title: "Digital Twins",
      description: "IoT-powered predictive maintenance algorithms",
      delay: "item3"
    },
    {
      icon: Recycle,
      title: "Circular Economy",
      description: "25,000-cycle batteries with 92% second-life utility",
      delay: "item4"
    }
  ];

  return (
    <div id="about" ref={sectionRef} className="relative min-h-screen overflow-hidden bg-white py-12 md:py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* Centered Header Section */}
        <div className={`transform transition-all duration-1000 delay-200 text-center max-w-4xl mx-auto mb-12 md:mb-20 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100'
          }`}>
          <div className="flex flex-col items-center mb-4 md:mb-6">
            <div className="relative mb-3 md:mb-4">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300">
                <Zap className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
            </div>
            <span className="select-none text-sm md:text-xl text-blue-600 uppercase tracking-widest font-semibold mb-2 md:mb-3 bg-blue-50 px-4 md:px-6 py-2 rounded-full border border-blue-200">
              About Us
            </span>
            <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 rounded-full shadow-lg"></div>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-7xl font-semibold text-gray-800 leading-tight mb-6 md:mb-8 select-none">
            {'Nexus Energy Solutions'.split(' ').map((word, index) => (
              <span
                key={index}
                className="inline-block animate-fade-in-up hover:scale-105 transition-transform duration-300 font-normal"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {word}{' '}
              </span>
            ))}
          </h2>

          <div className="relative">
            <p className="text-base md:text-lg lg:text-2xl text-gray-600 leading-relaxed mb-6 md:mb-8 max-w-4xl mx-auto font-medium">
              Nexus Energy Solutions stands at the convergence of electrochemical innovation and sustainable transformation,
              redefining energy storage paradigms since its inception. Born from a collective passion to decarbonize industrial
              ecosystems, we engineer power solutions that transcend conventional limitations—propelling humanity toward an
              emission-free future while honoring our Bharatiya roots in global impact.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start mb-12 md:mb-20">
          {/* Left Side - Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Main image container */}
              <div className={`relative bg-gray-50 border border-gray-200 rounded-3xl p-6 md:p-8 shadow-2xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-0 opacity-100 scale-100'
                }`}>

                {/* Image */}
                <div className="aspect-[4/5] w-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center overflow-hidden relative">
                  <img src={hero} alt="hero section" className='h-full w-full object-cover' />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-100/20 to-transparent rounded-2xl"></div>
                </div>

                <div className="absolute -bottom-4 -left-4 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full shadow-lg"></div>
                <div className="absolute -top-2 left-1/4 w-3 h-3 md:w-4 md:h-4 bg-blue-100 rounded-full shadow-sm"></div>
              </div>

              {/* Additional floating elements */}
              <div className="absolute top-8 md:top-10 -left-6 md:-left-8 bg-white p-2 md:p-3 rounded-xl shadow-xl border border-gray-200">
                <Zap className="w-5 h-5 md:w-6 md:h-6 text-blue-500" />
              </div>

              <div className="absolute bottom-16 md:bottom-20 -right-6 md:-right-8 bg-white p-2 md:p-3 rounded-xl shadow-xl border border-gray-200">
                <Target className="w-5 h-5 md:w-6 md:h-6 text-indigo-500" />
              </div>
            </div>
          </div>

          {/* Right Side - Innovation Section */}
          <div className="space-y-6 md:space-y-8">
            {/* Innovation section */}
            <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100'
              }`}>
              <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-6 md:mb-8 text-center">
                Our innovation hub houses India's foremost electrochemistry research facility, where cross-disciplinary teams pioneer breakthroughs in:
              </h3>

              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {innovations.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className={`group flex flex-col p-4 md:p-6 bg-white rounded-3xl border border-gray-200 shadow-2xl hover:shadow-3xl transition-all duration-700 transform min-h-[200px] md:min-h-[280px] translate-x-0 opacity-100 hover:scale-105 hover:bg-gray-50 hover:-translate-y-1`}
                    >
                      {/* Icon */}
                      <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Title */}
                      <h4 className="text-center text-lg md:text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 leading-snug mb-2">
                        <span className="font-semibold">{item.title}</span>
                      </h4>

                      {/* Description */}
                      <p className="text-center text-sm md:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex-1">
                        <span className="font-normal">{item.description}</span>
                      </p>

                      {/* Arrow */}
                      <div className="mt-4 flex justify-center">
                        <div className="group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-indigo-500 p-2 rounded-lg transition-all duration-300">
                          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-blue-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </div>
                    </div>

                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Centered Quote and CTA Section */}
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          {/* Quote */}
          <div className={`transform transition-all duration-1000 delay-1000 ${animatedItems.quote ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative p-6 md:p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl border border-blue-200 shadow-2xl">
              <div className="absolute top-3 md:top-4 left-3 md:left-4 text-3xl md:text-5xl text-blue-400 font-serif">"</div>
              <p className="text-lg md:text-2xl font-medium text-gray-800 italic text-center pt-4 md:pt-6 px-4 md:px-8 select-none">
                <span className="font-normal">We don't just build batteries—we architect energy ecosystems.</span>
              </p>
              <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4 text-3xl md:text-5xl text-blue-400 font-serif rotate-180">"</div>
            </div>
          </div>
        </div>

        {/* Product Ecosystem Section - now outside the quote card */}
        <div className="mt-10 text-left max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4 text-center">Nexus Energy Product Ecosystem</h3>
          <p className="text-base md:text-lg text-gray-700 mb-6 text-center max-w-4xl mx-auto font-normal">
            Nexus Energy's product ecosystem is engineered to accelerate the transition to a net-zero future, delivering next-generation battery-powered solutions across diverse sectors—including quick commerce, mobility, and scalable energy storage. Our integrated approach harnesses the power of our unique technological innovations:
          </p>
          
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200 mb-8">
            <h4 className="text-xl font-semibold text-indigo-700 mb-4">Core Technology Enablers</h4>
            <ul className="list-disc pl-6 space-y-3 font-normal text-gray-700">
              <li><span className="font-semibold text-gray-800">Active Thermal Management:</span> Precision control of battery temperatures ensures optimal performance and safety even during rapid charging or discharging.</li>
              <li><span className="font-semibold text-gray-800">AI-Powered Battery Management System (BMS):</span> Real-time data analytics optimize every cell for peak efficiency and longevity.</li>
              <li><span className="font-semibold text-gray-800">Life Extension Algorithm:</span> Smart software predicts and mitigates cell degradation, extending useful life to five years and beyond—all chemistries supported.</li>
              <li><span className="font-semibold text-gray-800">Ultra-Fast Charging:</span> Proprietary Liquid Immersion Technology enables reliable 20-minute ultra charging for all product categories.</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200">
              <h5 className="text-lg font-bold text-blue-700 mb-3">1. Quick Commerce</h5>
              <ul className="list-disc pl-6 space-y-2 font-normal text-gray-700">
                <li>Ultra-fast charging, compact form-factors.</li>
                <li>Rugged design for high throughput and reliability in last-mile delivery and logistics fleets.</li>
                <li>Plug-and-play compatibility with e-cargo Vehicles & Scooters</li>
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200">
              <h5 className="text-lg font-bold text-blue-700 mb-3">2. Mobility Solutions</h5>
              <ul className="list-disc pl-6 space-y-2 font-normal text-gray-700">
                <li>Swappable battery modules for electric two/three-wheelers and urban EVs.</li>
                <li>Seamless BMS integration for real-time health monitoring, range prediction, and OTA updates.</li>
                <li>Safety-first architecture exceeding global standards.</li>
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200">
              <h5 className="text-lg font-bold text-blue-700 mb-3">3. Grid-Scale Energy Storage Systems (ESS)</h5>
              <ul className="list-disc pl-6 space-y-2 font-normal text-gray-700">
                <li>Modular battery racks supporting renewable integration, grid balancing, and backup applications.</li>
                <li>Smart fleet management powered by AI for predictive maintenance and lifecycle optimization.</li>
                <li>Flexible configurations: from microgrid installations to large utility-scale storage.</li>
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200">
              <h5 className="text-lg font-bold text-blue-700 mb-3">4. Residential & Commercial Storage</h5>
              <ul className="list-disc pl-6 space-y-2 font-normal text-gray-700">
                <li>Wall-mounted and stackable systems for homes and businesses.</li>
                <li>Intelligent load-shifting and backup power management.</li>
                <li>Solar integration for full off-grid capability.</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200 mb-8">
            <h4 className="text-xl font-semibold text-indigo-700 mb-4">Ecosystem Benefits</h4>
            <ul className="list-disc pl-6 space-y-3 font-normal text-gray-700">
              <li><span className="font-semibold text-gray-800">Rapid Deployment:</span> Standardized, interoperable modules simplify installation and scaling.</li>
              <li><span className="font-semibold text-gray-800">Sustainability:</span> Prolonged cell life reduces waste and total lifecycle emissions.</li>
              <li><span className="font-semibold text-gray-800">Reliability:</span> Advanced BMS and thermal controls drastically reduce failure rates.</li>
              <li><span className="font-semibold text-gray-800">Versatility:</span> Solutions are chemistry-agnostic, supporting innovations from LFP to solid-state.</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-200 mb-8">
            <h4 className="text-xl font-semibold text-indigo-700 mb-4">End-to-End Platform</h4>
            <p className="text-base md:text-lg text-gray-700 mb-4 font-normal">
              From connected batteries feeding performance data to a unified cloud, to AI-driven optimization for operators and users, Nexus Energy's ecosystem delivers maximum value throughout the product lifecycle, supporting partners with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>API Access & Integration Tools</li>
              <li>Remote Diagnostics & Updates</li>
              <li>Circularity & Second-Life Programs</li>
            </ul>
          </div>
          
          <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-6 md:p-8 border border-blue-200">
            <p className="text-lg md:text-xl font-semibold text-blue-900">Nexus Energy ecosystem: innovating today, powering tomorrow's sustainable, electrified world.</p>
          </div>
        </div>
        
        <style>{`
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
    </div>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <AboutContent />
      <Footer />
    </>
  );
};

export default About;
