import React, { useState, useEffect, useRef } from "react";
import { Images } from "../constants";
import Slider from "react-slick";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

// Custom hook for mobile detection
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};


const services = [
  {
    title: "E-Mobility Revolution",
    offerings: [
      "High-density propulsion systems for L3/L5 EVs",
      "Ultra-fast charging infrastructure (0-100% in 12-20 mins)",
      "Battery-swapping networks for fleet operators",
    ],
    highlight:
      "ASIL-D-rated BMS with IoT telemetry enabling predictive maintenance and 99.8% operational uptime for last-mile delivery fleets.",
    applications: [
      "Electric buses",
      "Autonomous logistics vehicles",
      "Smart city transit",
    ],
    image: Images.eMobility,
    icon: "⚡",
    stats: "99.8% Uptime",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    title: "Renewable Energy Integration",
    offerings: [
      "Containerized BESS (Battery Energy Storage Systems)",
      "Solar-wind hybrid microgrid controllers",
      "Hydrogen fuel cell integration platforms",
    ],
    highlight:
      "20MWh modular BESS installations storing daytime solar energy to power nocturnal industrial operations.",
    applications: ["Solar farms", "Wind parks", "Off-grid communities"],
    image: Images.rEnergy,
    icon: "🌱",
    stats: "4,200 tons CO₂ saved",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    title: "Defense & Aerospace Power Systems",
    offerings: [
      "Extreme-temperature batteries (-40°C to 65°C)",
      "EMP-hardened power units for surveillance systems",
      "Lightweight energy packs for UAVs/VTOL drones",
    ],
    highlight:
      "Thermal-runaway-proof lithium-titanate systems powering high-altitude border logistics with 72-hour endurance.",
    applications: [
      "Military drones",
      "Satellite stations",
      "Submarine support",
    ],
    image: Images.dSecurity,
    icon: "🛡️",
    stats: "72h Endurance",
    gradient: "from-slate-600 to-gray-700",
  },
  {
    title: "Industrial Electrification",
    offerings: [
      "Heavy-machinery batteries for forklifts/stackers/BOPTs",
      "Smart energy controllers for manufacturing lines",
      "Peak-load shaving systems",
    ],
    highlight:
      "40% reduction in energy costs for automotive OEMs through regenerative braking integration in material handling.",
    applications: ["Warehousing", "Foundries", "Robotics"],
    image: Images.forkLifts,
    icon: "🏭",
    stats: "40% Cost Reduction",
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    title: "Agricultural Modernization",
    offerings: [
      "Solar-powered irrigation storage",
      "Electric tractor battery packs",
      "IoT-enabled crop monitoring systems",
    ],
    highlight:
      "Monsoon-resilient IP65 packs doubling crop yields through all-season precision farming.",
    applications: ["Smart greenhouses", "Dairy automation", "Grain storage"],
    image: Images.tempo,
    icon: "🌾",
    stats: "2x Crop Yields",
    gradient: "from-indigo-400 to-blue-500",
  },
];

// Export the main Services content without Navbar/Footer for embedding
export const ServicesContent = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const isMobile = useIsMobile();

  // Disable hover effects on mobile for better performance
  const handleCardInteraction = (index, isEntering) => {
    if (!isMobile) {
      setHoveredCard(isEntering ? index : null);
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    centerMode: false,
    centerPadding: '0px',
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    touchThreshold: 5,
    accessibility: true,
    focusOnSelect: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '0px',
          arrows: true,
          swipe: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '10px',
          arrows: false,
          dots: true,
          swipe: true,
          touchMove: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '0px',
          arrows: false,
          dots: true,
          swipe: true,
          touchMove: true,
          autoplay: true,
          autoplaySpeed: 4000,
          infinite: true,
          pauseOnHover: false,
          pauseOnFocus: false,
          pauseOnDotsHover: false,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '0px',
          arrows: false,
          dots: true,
          swipe: true,
          touchMove: true,
          autoplay: true,
          autoplaySpeed: 4000,
          speed: 300,
          infinite: true,
          pauseOnHover: false,
          pauseOnFocus: false,
          pauseOnDotsHover: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '0px',
          arrows: false,
          dots: true,
          swipe: true,
          touchMove: true,
          autoplay: true,
          autoplaySpeed: 4000,
          speed: 300,
          infinite: true,
          pauseOnHover: false,
          pauseOnFocus: false,
          pauseOnDotsHover: false,
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '0px',
          arrows: false,
          dots: true,
          swipe: true,
          touchMove: true,
          autoplay: true,
          autoplaySpeed: 4000,
          speed: 300,
          infinite: true,
          pauseOnHover: false,
          pauseOnFocus: false,
          pauseOnDotsHover: false,
        }
      }
    ],
  };

  return (
      <div id="services" ref={sectionRef} className="relative min-h-screen overflow-hidden bg-white pt-12 pb-6 sm:pt-16 sm:pb-8 md:pt-20 md:pb-10 lg:pt-24 lg:pb-12 xl:pt-32 xl:pb-20">
        {/* Enhanced Modern Background Elements */}
        <div className="absolute inset-0">
          {/* Modern gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-indigo-50/30 to-blue-50/50"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50/20 via-transparent to-blue-50/30"></div>

          {/* Responsive geometric shapes - optimized for mobile */}
          <div className="absolute top-4 sm:top-8 md:top-12 lg:top-16 right-2 sm:right-4 md:right-6 lg:right-8 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-gradient-to-br from-blue-200/25 to-indigo-300/20 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-pulse"></div>
          <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-24 left-2 sm:left-3 md:left-4 lg:left-6 w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-80 xl:h-80 bg-gradient-to-tr from-indigo-200/30 to-blue-300/25 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-blue-100/35 to-indigo-200/30 rounded-full blur-lg sm:blur-xl md:blur-2xl animate-pulse delay-500"></div>

          {/* Additional floating elements - reduced on mobile */}
          <div className="hidden sm:block absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-indigo-300/15 rounded-full blur-xl animate-pulse delay-1500"></div>
          <div className="hidden sm:block absolute bottom-1/3 left-1/5 w-40 h-40 bg-gradient-to-tl from-indigo-200/25 to-blue-300/20 rounded-full blur-2xl animate-pulse delay-2000"></div>

          {/* Modern grid pattern with enhanced opacity */}
          <div className="absolute inset-0 opacity-[0.02] sm:opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>

          {/* Floating orbs - reduced on mobile */}
          <div className="hidden sm:block absolute top-32 left-1/4 w-6 h-6 sm:w-8 sm:h-8 bg-blue-300/50 rounded-full animate-bounce delay-300"></div>
          <div className="hidden sm:block absolute bottom-48 right-1/3 w-4 h-4 sm:w-5 sm:h-5 bg-indigo-300/60 rounded-full animate-bounce delay-700"></div>
          <div className="hidden md:block absolute top-2/3 left-1/8 w-4 h-4 bg-blue-200/70 rounded-full animate-bounce delay-1000"></div>
          <div className="hidden md:block absolute top-1/3 right-1/6 w-6 h-6 bg-indigo-200/55 rounded-full animate-bounce delay-500"></div>
          <div className="hidden md:block absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-300/65 rounded-full animate-bounce delay-1200"></div>

          {/* Enhanced gradient overlays */}
          <div className="absolute top-0 left-0 w-full h-32 sm:h-40 bg-gradient-to-b from-white/90 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 sm:h-40 bg-gradient-to-t from-white/70 to-transparent"></div>

          {/* Subtle animated lines - hidden on mobile for performance */}
          <div className="hidden sm:block absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent animate-pulse"></div>
          <div className="hidden sm:block absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-300/30 to-transparent animate-pulse delay-1000"></div>

          {/* Modern mesh gradient effect */}
          <div className="absolute inset-0 opacity-15 sm:opacity-20" style={{
            background: `radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 40% 40%, rgba(147, 197, 253, 0.05) 0%, transparent 50%)`
          }}></div>
        </div>

      <div className="max-w-7xl mx-auto relative px-4 sm:px-3 md:px-4 lg:px-6 xl:px-8">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
          <h2 className="select-none text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-6 lg:mb-8 leading-tight py-1 sm:py-2 tracking-tight px-1 sm:px-2">
            Precision-Engineered Solutions
          </h2>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-sm xs:max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-4 md:px-6">
            Where Innovation Converges with Operational Excellence -
            <span className="block xs:block sm:inline"> Transforming Industries Through Advanced Energy Solutions</span>
          </p>
        </div>

        {/* Services Slider */}
        <div className="services-slider max-w-6xl mx-auto px-4 sm:px-2 md:px-0">
          <Slider {...sliderSettings}>
            {services.map((service, index) => (
              <div key={index} className="h-full px-0 xs:px-1 sm:px-2 md:px-3">
                <div
                  className="group relative bg-white rounded-xl sm:rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 sm:duration-500 overflow-hidden border border-gray-100 h-full flex flex-col mx-0 xs:mx-0 sm:mx-0"
                  onMouseEnter={() => handleCardInteraction(index, true)}
                  onMouseLeave={() => handleCardInteraction(index, false)}
                  onTouchStart={() => handleCardInteraction(index, true)}
                  onTouchEnd={() => handleCardInteraction(index, false)}
                >
                  {/* Card Content */}
                  <div className="flex flex-col h-full">
                    {/* Image Section */}
                    <div className="relative h-48 xs:h-52 sm:h-36 md:h-40 lg:h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-300 sm:duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                      {/* Floating Icon */}
                      <div className="absolute top-4 xs:top-4 sm:top-3 md:top-4 right-4 xs:right-4 sm:right-3 md:right-4 w-10 h-10 xs:w-10 xs:h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center text-xl xs:text-xl sm:text-lg md:text-xl shadow-lg">
                        {service.icon}
                      </div>

                      {/* Stats Badge */}
                      <div className="absolute bottom-4 xs:bottom-4 sm:bottom-3 md:bottom-4 left-4 xs:left-4 sm:left-3 md:left-4 bg-white/95 backdrop-blur-sm px-4 xs:px-4 sm:px-2 md:px-3 py-1.5 xs:py-1.5 rounded-full text-sm xs:text-sm sm:text-xs md:text-sm font-semibold text-gray-800 shadow-lg">
                        {service.stats}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 xs:p-5 sm:p-4 md:p-6 flex flex-col flex-grow">
                      <h3 className="text-xl xs:text-xl sm:text-lg md:text-xl font-bold text-gray-800 mb-4 xs:mb-4 sm:mb-3 md:mb-4 group-hover:text-blue-700 transition-colors duration-300 leading-snug">
                        {service.title}
                      </h3>

                      {/* Offerings */}
                      <div className="space-y-2.5 xs:space-y-2.5 sm:space-y-1.5 md:space-y-2 mb-4 xs:mb-4 sm:mb-3 md:mb-4 flex-grow">
                        {service.offerings.map((offering, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 xs:gap-2.5 sm:gap-2">
                            <div className="w-2 h-2 xs:w-2 xs:h-2 sm:w-1 sm:h-1 md:w-1.5 md:h-1.5 bg-blue-500 rounded-full mt-2 xs:mt-2 sm:mt-1.5 md:mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                            <p className="text-gray-600 text-base xs:text-base sm:text-xs md:text-sm leading-relaxed">
                              {offering}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Highlight Quote */}
                      <div className="relative mb-4 xs:mb-4 sm:mb-3 md:mb-4">
                        <blockquote className="text-base xs:text-base sm:text-xs md:text-sm italic text-blue-800 bg-blue-50/50 p-4 xs:p-4 sm:p-2 md:p-3 rounded-lg xs:rounded-lg sm:rounded-xl border-l-3 xs:border-l-3 sm:border-l-2 border-blue-500 leading-relaxed">
                          {service.highlight}
                        </blockquote>
                      </div>

                      {/* Applications */}
                      <div className="mt-auto pt-4 xs:pt-4 sm:pt-3 md:pt-4 border-t border-gray-100">
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 xs:mb-3 sm:mb-1.5 md:mb-2">
                          Applications
                        </p>
                        <div className="flex flex-wrap gap-2 xs:gap-2 sm:gap-1 md:gap-1.5">
                          {service.applications.map((app, idx) => (
                            <span
                              key={idx}
                              className="px-3 xs:px-3 sm:px-1.5 md:px-2 py-1.5 xs:py-1.5 sm:py-1 bg-gray-100 text-gray-700 text-sm xs:text-sm sm:text-xs rounded-full font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect Arrow - hidden on mobile for better UX */}
                    <div
                      className={`hidden sm:block absolute bottom-2 sm:bottom-3 md:bottom-4 right-2 sm:right-3 md:right-4 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-blue-500 rounded-full flex items-center justify-center text-white transition-all duration-300 ${hoveredCard === index
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-4"
                        }`}
                    >
                      <svg
                        className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Custom Slider Styles */}
      <style>{`
        .services-slider {
          padding: 15px 0 60px;
          position: relative;
          min-height: 550px;
        }
        
        .services-slider .slick-list {
          padding: 15px 0;
          overflow: hidden;
        }
        
        .services-slider .slick-track {
          display: flex;
          gap: 0;
          padding: 8px 0;
        }
        
        .services-slider .slick-slide {
          height: auto;
          opacity: 1;
          transform: scale(1);
          transition: all 0.3s ease;
        }
        
        .services-slider .slick-slide.slick-active {
          opacity: 1;
          transform: scale(1);
        }
        
        .services-slider .slick-slide > div {
          height: 100%;
        }
        
        .services-slider .slick-dots {
          bottom: 30px;
        }
        
        .services-slider .slick-dots li {
          margin: 0 4px;
        }
        
        .services-slider .slick-dots li button:before {
          font-size: 8px;
          color: #3b82f6;
          opacity: 0.4;
          transition: all 0.3s ease;
        }
        
        .services-slider .slick-dots li.slick-active button:before {
          opacity: 1;
          color: #3b82f6;
          transform: scale(1.3);
        }
        
        .services-slider .slick-prev,
        .services-slider .slick-next {
          z-index: 10;
          width: 36px;
          height: 36px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          border: 1px solid #e5e7eb;
          transition: all 0.3s ease;
        }
        
        .services-slider .slick-prev {
          left: -45px;
        }
        
        .services-slider .slick-next {
          right: -45px;
        }
        
        .services-slider .slick-prev:hover,
        .services-slider .slick-next:hover {
          background: #3b82f6;
          border-color: #3b82f6;
          transform: scale(1.1);
        }
        
        .services-slider .slick-prev:before,
        .services-slider .slick-next:before {
          font-size: 14px;
          color: #3b82f6;
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .services-slider .slick-prev:hover:before,
        .services-slider .slick-next:hover:before {
          color: white;
        }

        /* Mobile optimizations */
        @media (max-width: 640px) {
          .services-slider {
            padding: 20px 0 70px;
          }
          
          .services-slider .slick-list {
            padding: 20px 0;
            margin: 0;
          }
          
          .services-slider .slick-track {
            padding: 10px 0;
          }
          
          .services-slider .slick-slide {
            opacity: 1;
            transform: scale(1);
            padding: 0;
          }
          
          .services-slider .slick-slide > div {
            height: auto;
            min-height: 550px;
            padding: 0 16px;
          }
          
          .services-slider .slick-slide > div > div {
            margin: 0;
            width: 100%;
            max-width: 100%;
          }
          
          .services-slider .slick-dots {
            bottom: 30px;
          }
          
          .services-slider .slick-dots li {
            margin: 0 6px;
          }
          
          .services-slider .slick-dots li button:before {
            font-size: 12px;
            opacity: 0.5;
          }
          
          .services-slider .slick-dots li.slick-active button:before {
            opacity: 1;
            transform: scale(1.4);
          }
          
          .services-slider .slick-prev {
            display: none !important;
          }
          
          .services-slider .slick-next {
            display: none !important;
          }
        }

        @media (max-width: 768px) {
          .services-slider {
            padding: 20px 0 75px;
          }
          
          .services-slider .slick-list {
            padding: 20px 0;
            margin: 0;
          }
          
          .services-slider .slick-track {
            padding: 10px 0;
          }
          
          .services-slider .slick-slide {
            opacity: 1;
            transform: scale(1);
            padding: 0;
          }
          
          .services-slider .slick-slide > div {
            height: auto;
            min-height: 520px;
            padding: 0 12px;
          }
          
          .services-slider .slick-slide > div > div {
            margin: 0;
            width: 100%;
          }
          
          .services-slider .slick-dots {
            bottom: 35px;
          }
          
          .services-slider .slick-dots li {
            margin: 0 5px;
          }
          
          .services-slider .slick-dots li button:before {
            font-size: 11px;
          }
          
          .services-slider .slick-prev {
            display: none !important;
          }
          
          .services-slider .slick-next {
            display: none !important;
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .services-slider {
            padding: 15px 0 65px;
          }
          
          .services-slider .slick-dots {
            bottom: 35px;
          }
        }

        @media (min-width: 1025px) {
          .services-slider {
            padding: 20px 0 80px;
          }
          
          .services-slider .slick-dots {
            bottom: 40px;
          }
          
          .services-slider .slick-prev,
          .services-slider .slick-next {
            width: 40px;
            height: 40px;
          }
          
          .services-slider .slick-prev {
            left: -50px;
          }
          
          .services-slider .slick-next {
            right: -50px;
          }
          
          .services-slider .slick-prev:before,
          .services-slider .slick-next:before {
            font-size: 16px;
          }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .services-slider .slick-slide {
            transform: scale(1) !important;
            opacity: 1 !important;
          }
          
          .services-slider .slick-dots li button:before {
            font-size: 10px;
          }
        }

        /* Extra small devices */
        @media (max-width: 380px) {
          .services-slider {
            padding: 18px 0 65px;
            min-height: 580px;
          }
          
          .services-slider .slick-list {
            margin: 0;
            padding: 18px 0;
          }
          
          .services-slider .slick-slide {
            padding: 0;
          }
          
          .services-slider .slick-slide > div {
            min-height: 520px;
            padding: 0 12px;
          }
          
          .services-slider .slick-slide > div > div {
            margin: 0;
            width: 100%;
          }
          
          .services-slider .slick-dots {
            bottom: 25px;
          }
          
          .services-slider .slick-dots li {
            margin: 0 4px;
          }
          
          .services-slider .slick-dots li button:before {
            font-size: 10px;
          }
        }
      `}</style>
    </div>
  );
};

const Services = () => {
  return (
    <>
      <Navbar />
      <ServicesContent />
      <Footer />
    </>
  );
};

export default Services;
