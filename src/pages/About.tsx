import React, { useState, useEffect, useRef } from 'react';
import { Zap, Target, Cpu, Recycle, ArrowRight } from 'lucide-react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import hero from "../assets/herosection.png"

// Export the main About content without Navbar/Footer for embedding
export const AboutContent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState<{ [key: string]: boolean }>({});
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
    <div id="about" ref={sectionRef} className="relative min-h-screen overflow-hidden bg-white py-12 md:py-20" style={{ zIndex: 10 }}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-12 md:mb-20">
          {/* Left Side - Image */}
          <div className="flex items-center justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Main image container */}
              <div className={`relative bg-gray-50 border border-gray-200 rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-0 opacity-100 scale-100'
                }`}>

                {/* Image */}
                <div className="aspect-[4/5] w-full bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center overflow-hidden relative">
                  <div className="flex items-center justify-center group">
                    <video
                      src="./images/video-vmake.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-[620px] object-cover transition-all duration-300 group-hover:brightness-110 group-hover:drop-shadow-lg rounded-lg"
                    />
                  </div>
                </div>


              </div>


            </div>
          </div>

          {/* Right Side - Innovation Section */}
          <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
            {/* Innovation section */}
            <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100'
              }`}>
              <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 text-center">
                Lorem ipsum dolor sit amet.
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {innovations.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className={`group flex flex-col p-4 md:p-6 bg-white rounded-3xl border border-gray-200 shadow-2xl hover:shadow-3xl transition-all duration-700 transform min-h-[180px] sm:min-h-[200px] md:min-h-[280px] translate-x-0 opacity-100 hover:scale-105 hover:bg-gray-50 hover:-translate-y-1`}
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

        {/* Centered Quote Section */}
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          {/* Quote */}
          <div className={`transform transition-all duration-1000 delay-1000 ${animatedItems.quote ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative bg-blue-50 rounded-2xl px-8 py-6 md:px-12 md:py-8 shadow-lg">
              {/* Top-left quotation marks */}
              <div className="absolute top-4 left-4 text-blue-600 text-2xl font-bold leading-none">
                "
              </div>

              {/* Bottom-right quotation marks */}
              <div className="absolute bottom-4 right-4 text-blue-600 text-2xl font-bold leading-none">
                "
              </div>

              {/* Quote text */}
              <div className="text-center px-6">
                <p className="text-slate-700 text-lg md:text-xl lg:text-2xl font-medium italic leading-relaxed">
                  We don't just build batteries—we architect energy ecosystems.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="max-w-6xl mx-auto mt-16 mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-lg border border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-800">Our Mission</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To accelerate the global transition to sustainable energy by delivering cutting-edge battery technology solutions that power the future of mobility, commerce, and energy storage. We are committed to creating innovative, reliable, and environmentally responsible energy systems that enable businesses and communities to thrive in a net-zero world.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 shadow-lg border border-indigo-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-indigo-800">Our Vision</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become the world's leading architect of energy ecosystems, where every battery we create serves as a building block for a sustainable future. We envision a world where clean energy is accessible, reliable, and seamlessly integrated into every aspect of human activity, from urban mobility to industrial operations.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mt-12 bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Our Core Values</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Innovation</h4>
                <p className="text-gray-600 text-sm">Pioneering breakthrough technologies that redefine energy storage capabilities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Reliability</h4>
                <p className="text-gray-600 text-sm">Delivering consistent, dependable energy solutions that businesses can trust</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Sustainability</h4>
                <p className="text-gray-600 text-sm">Committed to environmental responsibility and creating a cleaner future</p>
              </div>
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
    <div className="min-h-screen bg-white">
      <Navbar />
      <PageHero
        title="Nexus Energy Solutions"
        subtitle="Leading the convergence of electrochemical innovation and sustainable transformation, redefining energy storage paradigms for a decarbonized future."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About Us' }
        ]}
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
