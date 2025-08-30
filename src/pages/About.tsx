"use client";
import { useState, useEffect, useRef } from 'react';
import { Zap, Target, Cpu, Recycle, ArrowRight } from 'lucide-react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const observer = new window.IntersectionObserver(
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
    <>
      <Navbar />
      <div id="about" ref={sectionRef} className="relative min-h-screen overflow-hidden bg-white py-12 md:py-20">
        {/* Enhanced Modern Background Elements */}
        <div className="absolute inset-0">
          {/* Modern gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-indigo-50/30 to-blue-50/50"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50/20 via-transparent to-blue-50/30"></div>
          
          {/* Large animated gradient blobs */}
          <div className="absolute top-16 right-8 w-96 h-96 bg-gradient-to-br from-blue-200/25 to-indigo-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-24 left-6 w-80 h-80 bg-gradient-to-tr from-indigo-200/30 to-blue-300/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-100/35 to-indigo-200/30 rounded-full blur-2xl animate-pulse delay-500"></div>
          
          {/* Medium floating elements */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-indigo-300/15 rounded-full blur-xl animate-pulse delay-1500"></div>
          <div className="absolute bottom-1/3 left-1/5 w-40 h-40 bg-gradient-to-tl from-indigo-200/25 to-blue-300/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
          
          {/* Small bouncing elements */}
          <div className="absolute top-32 left-1/4 w-8 h-8 bg-blue-300/50 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-48 right-1/3 w-5 h-5 bg-indigo-300/60 rounded-full animate-bounce delay-700"></div>
          <div className="absolute top-2/3 left-1/8 w-4 h-4 bg-blue-200/70 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute top-1/3 right-1/6 w-6 h-6 bg-indigo-200/55 rounded-full animate-bounce delay-500"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-300/65 rounded-full animate-bounce delay-1200"></div>
          
          {/* Subtle gradient overlays for depth */}
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white/90 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white/70 to-transparent"></div>
          
          {/* Horizontal flowing lines */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent animate-pulse"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-300/30 to-transparent animate-pulse delay-1000"></div>
          
          {/* Complex radial gradients for organic feel */}
          <div className="absolute inset-0 opacity-20" style={{
            background: `radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 40% 40%, rgba(147, 197, 253, 0.05) 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          {/* Header Section */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-sm text-blue-600 uppercase tracking-wider font-medium select-none">Our Story</span>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-1"></div>
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-6 select-none">
              {'Powering Tomorrow\'s World'.split(' ').map((word, index) => (
                <span
                  key={index}
                  className="inline-block animate-fade-in-up mx-1"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {word}
                </span>
              ))}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nexus Energy Solutions stands at the forefront of India's renewable energy revolution, 
              engineering advanced battery systems and energy storage solutions that power sustainable growth.
            </p>
          </div>

          {/* Company Overview */}
          <div className={`mb-20 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-12 border border-blue-100 shadow-xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-6">About Nexus Energy Solutions</h3>
                  <div className="space-y-4 text-gray-600">
                    <p className="leading-relaxed">
                      Founded with a vision to accelerate India's transition to clean energy, Nexus Energy Solutions 
                      specializes in designing and manufacturing cutting-edge lithium-ion battery systems and 
                      comprehensive energy storage solutions.
                    </p>
                    <p className="leading-relaxed">
                      Our team of expert engineers and researchers work tirelessly to develop innovative 
                      technologies that meet the evolving demands of renewable energy integration, 
                      electric mobility, and industrial energy storage.
                    </p>
                    <p className="leading-relaxed">
                      From residential solar installations to large-scale grid storage projects, 
                      we provide reliable, efficient, and sustainable energy solutions that power 
                      homes, businesses, and communities across India.
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-800">Our Mission</h4>
                    </div>
                    <p className="text-gray-600">
                      To democratize access to clean energy through innovative battery technologies 
                      and energy storage systems that enable a sustainable future for all.
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-800">Our Vision</h4>
                    </div>
                    <p className="text-gray-600">
                      To be India's leading innovator in energy storage solutions, 
                      powering the nation's renewable energy transformation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Innovation Highlights */}
          <div className={`mb-20 transform transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Innovation at Our Core</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover the cutting-edge technologies that set our energy solutions apart
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {innovations.map((innovation, index) => {
                const Icon = innovation.icon;
                return (
                  <div
                    key={index}
                    className={`group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 hover:scale-105 transform ${
                      animatedItems[innovation.delay] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {innovation.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {innovation.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Product Ecosystem */}
          <div className={`mb-20 transform transition-all duration-1000 delay-900 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-xl">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Product Ecosystem</h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Comprehensive energy solutions tailored for diverse applications
                </p>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Residential Systems</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-blue-500" />
                      <span>Solar battery backup systems</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-blue-500" />
                      <span>Home energy management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-blue-500" />
                      <span>Smart grid integration</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Commercial Solutions</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-blue-500" />
                      <span>Industrial energy storage</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-blue-500" />
                      <span>Peak shaving systems</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-blue-500" />
                      <span>Backup power solutions</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Utility Scale</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-blue-500" />
                      <span>Grid stabilization systems</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-blue-500" />
                      <span>Renewable integration</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-blue-500" />
                      <span>Frequency regulation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div className={`text-center transform transition-all duration-1000 delay-1200 ${
            animatedItems.quote ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
              <blockquote className="text-2xl lg:text-3xl font-light italic leading-relaxed mb-6">
                "Every battery we design, every system we deploy, brings us one step closer to a 
                world powered entirely by clean, renewable energy."
              </blockquote>
              <div className="text-blue-100">
                <p className="font-semibold">Nexus Energy Solutions Team</p>
                <p className="text-sm opacity-90">Engineering Tomorrow's Energy Today</p>
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

export default About;
