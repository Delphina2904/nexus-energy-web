import React, { useState, useRef, useEffect } from "react";
import { Images } from "../constants";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PageHero } from "../components/PageHero";
import { GlowCard } from "../components/GlowCard";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const services = [
  {
    id: 'bess',
    title: 'Energy Storage on Power Generation',
    description: 'Nexus Energy’s energy storage systems provide energy storage and output management in power generation. The electrochemical technology and renewable energy power generation technology form a joint system. Through the high-level consistency of cells and the powerful computing of BMS, Nexus Energy enables the power generation to restore a stable power grid, optimize the power output curve, reduce solar and wind curtailment, provide system inertia and the functions of frequency and peak modulation, increase the proportion of renewable energy in total power generation, and optimize the energy structure.',
    image: '/images/s8.png',
  },
  {
    id: 'ups',
    title: 'Energy Storage on Power Transmission and Distribution',
    description: 'Nexus Energy’s energy storage systems provide smart load management for power transmission and distribution, and modulate frequency and peak in time according to power grid loads. The Nexus Energy electrochemical energy storage system has the functions of capacity increasing and  expansion, backup power supply, etc. It can adopt more renewable energy in power transmission and distribution in order to ensure the safe, stable, efficient and low-cost operation of the power grid.',
    image: '/images/s9.png',
  },
  {
    id: 'ups',
    title: 'Energy Storage on Power Consumption',
    description: 'Nexus Energy’s energy storage systems provide users with a  peak-valley electricity price arbitrage mode and stable power quality management. Nexus Energy’s electrochemical energy storage products have been successfully applied in large-scale industrial, commercial and residential areas, and been expanded to emerging scenarios such as base stations, UPS backup power, off-grid and island/isolate systems, intelligent charging stations for optical storage charging and testing, etc. Such applications help regions that have a lack of power grids to have access to electricity, reduce electricity costs, ensure a  stable power network, and achieve maximum social and economic benefits by using renewable energy to its greatest extent.',
    image: '/images/s10.png',
  }, {
    title: "Road Passenger Transport Solutions",
    description: "Focusing on the high-frequency and high-stability requirements of road passenger transport, Nexus Energy provides multi-scenario solutions that are safe, reliable, durable, and widely used in various urban public transport scenarios, passenger line, tourism passenger transport, commuter, etc.",
    image: "/images/s1.png",
    link: "/solutions/commercial/passenger-transport"
  },
  {
    title: "Urban Delivery Solutions",
    description: "Nexus Energy's traction batteries are suitable for light trucks, mini buses, and minivans, and are widely used in express delivery, supermarket delivery, fresh food delivery and other scenarios. Nexus Energy provides customers with safe, reliable and comprehensive battery solutions.",
    image: "/images/s2.png",
    link: "/solutions/commercial/urban-delivery"
  },
  {
    title: "Heavy-duty Transport Solutions",
    description: "Nexus Energy provides strong and clean power to heavy-duty vehicles for meeting the working conditions of mining areas, ports, short-haul transportation in urban areas and construction sites, to satisfy the requirements of industrialization and transport electrification.",
    image: "/images/s3.png",
    link: "/solutions/commercial/heavy-duty"
  },
  {
    title: "Urban Street Cleaning Solutions",
    description: "Nexus Energy provides customized solutions that meet the demands of various street cleaning vehicles. Nexus Energy's batteries feature great safety, long life and strong environmental adaptability, covering a variety of vehicle types including electric washing vehicles, electric washing and sweeping vehicles, electric garbage trucks.",
    image: "/images/s4.png",
    link: "/solutions/commercial/street-cleaning"
  },
  {
    title: "Construction Machinery",
    description: "The battery product solution provided by Nexus Energy for the field of construction machinery are widely adapted to special vehicles such as forklifts and slag trucks. It's easy to adapt to specific working conditions and create a comfortable and safe working environment.",
    image: "/images/s5.png",
    link: "/solutions/commercial/construction-machinery"
  },
  {
    title: "Two-wheeled Vehicle Solutions",
    description: "Nexus Energy offers green, intelligent and safe battery solutions for two-wheeled vehicles which can be applied to multiple scenarios such as commuting, food delivery, express delivery, etc. The rechargeable and replaceable batteries make your travel experience easy and seamless.",
    image: "/images/s6.png",
    link: "/solutions/commercial/two-wheeled"
  },

  {
    title: "Special Vehicle Solutions",
    description: "Nexus Energy provides customized product solutions for special vehicles which can be easily adapted to specific working conditions, thereby improving economic benefits, reducing environmental pollution and creating a comfortable and safe working environment.",
    image: "/images/s7.png",
    link: "/solutions/commercial/special-vehicle"
  }
];

// Export the main Services content without Navbar/Footer for embedding
export const ServicesContent = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  // Get slides to show based on screen size
  const getSlidesToShow = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // lg and above
      if (window.innerWidth >= 768) return 2;  // md and above
      return 1; // mobile
    }
    return 3; // default
  };

  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxSlides = Math.max(0, services.length - slidesToShow);

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => {
          const nextSlide = prev + 1;
          return nextSlide > maxSlides ? 0 : nextSlide;
        });
      }, 4000); // Change slide every 4 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, maxSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlides));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index) => {
    setCurrentSlide(Math.min(index, maxSlides));
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <div
      id="services"
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-200/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-200/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100/80 backdrop-blur-sm border border-blue-200/50 px-6 py-3 rounded-full shadow-lg mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-blue-700 font-semibold text-sm tracking-wide uppercase">Technology Applications</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Powering Innovation
            </span>
            <br />
            <span className="text-gray-800">Across Industries</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our advanced battery solutions drive transformation across diverse sectors,
            delivering exceptional performance and reliability that powers the future.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Carousel Wrapper */}
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-in-out gap-3"
              style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
            >
              {services.map((service, index) => {
                // Assign different gradient colors based on service type
                const getGradientStyle = (title: string) => {
                  if (title.includes("E-Mobility")) return "from-blue-400/20 to-cyan-400/20";
                  if (title.includes("Renewable Energy")) return "from-green-400/20 to-emerald-400/20";
                  if (title.includes("Agricultural")) return "from-orange-400/20 to-yellow-400/20";
                  if (title.includes("Defense")) return "from-red-400/20 to-pink-400/20";
                  if (title.includes("Industrial")) return "from-purple-400/20 to-indigo-400/20";
                  return "from-indigo-400/20 to-blue-400/20";
                };

                const getGlowColor = (title: string) => {
                  if (title.includes("E-Mobility")) return "blue";
                  if (title.includes("Renewable Energy")) return "green";
                  if (title.includes("Agricultural")) return "orange";
                  if (title.includes("Defense")) return "red";
                  if (title.includes("Industrial")) return "purple";
                  return "blue";
                };

                return (
                  <div
                    key={index}
                    className="flex-shrink-0"
                    style={{ width: `${100 / slidesToShow}%` }}
                  >
                    <div
                      className="group cursor-pointer h-full"
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className={`relative bg-gradient-to-br ${getGradientStyle(service.title)} backdrop-blur-sm rounded-2xl p-1 h-full transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20`}>
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col">
                          {/* Image Section */}
                          <div className="relative h-48 md:h-52 overflow-hidden rounded-xl mb-6">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                            {/* Stats Badge */}
                            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full text-sm font-bold text-gray-800 shadow-lg border border-white/20">
                              {service.stats}
                            </div>


                          </div>

                          {/* Content Section */}
                          <div className="flex flex-col flex-grow">
                            <h3 className="text-xl md:text-2xl mb-0 font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                              {service.title}
                            </h3>


                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          {currentSlide > 0 && (
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white shadow-xl hover:shadow-2xl rounded-full p-4 transition-all duration-300 group z-10 backdrop-blur-sm border border-white/20"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
            </button>
          )}

          {currentSlide < maxSlides && (
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white shadow-xl hover:shadow-2xl rounded-full p-4 transition-all duration-300 group z-10 backdrop-blur-sm border border-white/20"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
            </button>
          )}

          {/* Dot Indicators */}
          <div className="flex justify-center space-x-3 mt-12">
            {Array.from({ length: maxSlides + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${index === currentSlide
                    ? "w-8 h-3 bg-blue-600 rounded-full"
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-6">
            <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-gray-600 shadow-lg border border-white/20">
              <span className="font-semibold text-blue-600">{currentSlide + 1}</span>
              <span>of</span>
              <span className="font-semibold">{maxSlides + 1}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <PageHero
        title="Precision-Engineered Solutions"
        subtitle="Where innovation converges with operational excellence - transforming industries through advanced energy solutions"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Services' }
        ]}
      />
      <ServicesContent />
      <Footer />
    </div>
  );
};

export default Services;