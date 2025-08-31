import React, { useState, useEffect, useRef } from 'react';
import { Eye, Target, Lightbulb, Users, Leaf, Award, Heart, Zap } from 'lucide-react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Export the main VisionMission content without Navbar/Footer for embedding
export const VisionMissionContent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState<{[key: string]: boolean}>({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger animations for items
          setTimeout(() => setAnimatedItems(prev => ({ ...prev, vision: true })), 200);
          setTimeout(() => setAnimatedItems(prev => ({ ...prev, mission: true })), 400);
          setTimeout(() => setAnimatedItems(prev => ({ ...prev, values: true })), 600);
          setTimeout(() => setAnimatedItems(prev => ({ ...prev, future: true })), 800);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const visionPoints = [
    {
      icon: Zap,
      title: "Innovation Leadership",
      description: "Pioneering breakthrough technologies that redefine energy storage possibilities.",
      delay: "vision1"
    },
    {
      icon: Leaf,
      title: "Environmental Stewardship",
      description: "Creating solutions that protect and preserve our planet for future generations.",
      delay: "vision2"
    },
    {
      icon: Users,
      title: "Global Impact",
      description: "Empowering communities worldwide with accessible, reliable energy solutions.",
      delay: "vision3"
    }
  ];

  const missionPoints = [
    {
      number: "01",
      title: "Advanced Technology Development",
      description: "Continuously innovating cutting-edge energy storage technologies, including immersion cooling systems, smart battery management, and AI-driven optimization platforms."
    },
    {
      number: "02",
      title: "Sustainable Manufacturing",
      description: "Implementing eco-friendly production processes and circular economy principles to minimize environmental impact while maximizing product quality and performance."
    },
    {
      number: "03",
      title: "Strategic Partnerships",
      description: "Building collaborative relationships with industry leaders, research institutions, and communities to accelerate the adoption of clean energy solutions."
    }
  ];

  const coreValues = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly push boundaries to create groundbreaking solutions that transform industries.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Award,
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical practices in all our relationships.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest quality in everything we do, from products to customer service.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of partnerships and teamwork to achieve greater impact.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We are committed to environmental responsibility and creating a sustainable future.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "We prioritize our customers' needs and success in every decision we make.",
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <div id="vision-mission" ref={sectionRef} className="relative min-h-screen overflow-hidden bg-white py-12 md:py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header Section */}
        <div className={`transform transition-all duration-1000 delay-200 text-center max-w-4xl mx-auto mb-12 md:mb-20 translate-y-0 opacity-100`}>
          <div className="flex flex-col items-center mb-4 md:mb-6">
            <div className="relative mb-3 md:mb-4">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300">
                <Eye className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
            </div>
            <span className="select-none text-sm md:text-xl text-purple-600 uppercase tracking-widest font-semibold mb-2 md:mb-3 bg-purple-50 px-4 md:px-6 py-2 rounded-full border border-purple-200">
              Vision & Mission
            </span>
            <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full shadow-lg"></div>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-7xl font-semibold text-gray-800 leading-tight mb-6 md:mb-8 select-none">
            {'Powering Tomorrow\'s Sustainable World'.split(' ').map((word, index) => (
              <span
                key={index}
                className="inline-block animate-fade-in-up hover:scale-105 transition-transform duration-300 font-normal"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {word}{' '}
              </span>
            ))}
          </h2>

          <p className="text-base md:text-lg lg:text-2xl text-gray-600 leading-relaxed mb-6 md:mb-8 max-w-4xl mx-auto font-medium">
            Through Revolutionary Energy Solutions
          </p>
        </div>

        {/* Vision Section */}
        <div className={`mb-16 md:mb-24 translate-y-0 opacity-100 transform transition-all duration-1000 delay-400`}>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center mb-12">
            {/* Vision Content */}
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-1 bg-blue-500 mr-4"></div>
                <span className="text-blue-500 font-semibold text-lg">Vision</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Envisioning a{" "}
                <span className="relative">
                  Sustainable Future
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-blue-500 rounded-full"></div>
                </span>
              </h3>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 md:p-8 border border-blue-200 shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h4>
                <p className="text-gray-700 text-lg leading-relaxed mb-4 font-normal">
                  To be the global leader in advanced energy storage solutions, enabling a world where clean, efficient, and sustainable energy powers every aspect of human life.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed font-normal">
                  We envision a future where energy storage is seamlessly integrated into every facet of society—from personal mobility to industrial operations—creating a carbon-neutral world powered by innovation and responsibility.
                </p>
              </div>
            </div>

            {/* Vision Image */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-lg">
                <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 md:p-8 shadow-2xl border border-blue-200">
                  <div className="aspect-[4/3] w-full bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center overflow-hidden relative">
                    <div className="text-center p-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-10 h-10 text-white" />
                      </div>
                      <p className="text-blue-800 font-semibold">The future we're building: Smart cities powered by sustainable energy solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Points Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {visionPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{point.title}</h4>
                  <p className="text-gray-600 leading-relaxed font-normal">{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission Section */}
        <div className={`mb-16 md:mb-24 translate-y-0 opacity-100 transform transition-all duration-1000 delay-600`}>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Mission Points */}
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-1 bg-red-500 mr-4"></div>
                <span className="text-red-500 font-semibold text-lg">Mission</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
                Driving{" "}
                <span className="relative">
                  Innovation Forward
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-red-500 rounded-full"></div>
                </span>
              </h3>

              {missionPoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold text-lg">{point.number}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">{point.title}</h4>
                      <p className="text-gray-600 leading-relaxed font-normal">{point.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mission Content */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-6 md:p-8 border border-red-200 shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h4>
                <p className="text-gray-700 text-lg leading-relaxed mb-4 font-normal">
                  To revolutionize energy storage through innovative thermal management solutions, making clean energy more efficient, accessible, and reliable for all.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 font-normal">
                  We are committed to developing breakthrough technologies that solve real-world energy challenges while fostering sustainable growth and environmental responsibility.
                </p>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
                  <h5 className="text-xl font-bold text-gray-800 mb-4">Core Commitments</h5>
                  <ul className="space-y-3">
                    {[
                      "Delivering superior performance and safety",
                      "Reducing environmental footprint",
                      "Enabling energy independence",
                      "Supporting sustainable development goals"
                    ].map((commitment, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="font-normal">{commitment}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className={`translate-y-0 opacity-100 transform transition-all duration-1000 delay-800`}>
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-1 bg-purple-500 mr-4"></div>
              <span className="text-purple-500 font-semibold text-lg">Values</span>
              <div className="w-12 h-1 bg-purple-500 ml-4"></div>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Our Core{" "}
              <span className="relative">
                Values
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-purple-500 rounded-full"></div>
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-normal">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-200 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed font-normal">{value.description}</p>
                </div>
              );
            })}
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

const VisionMission = () => {
  return (
    <>
      <Navbar />
      <VisionMissionContent />
      <Footer />
    </>
  );
};

export default VisionMission;
