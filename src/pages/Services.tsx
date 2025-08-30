import React, { useState, useEffect, useRef } from "react";
import { Images } from "../constants";
import Slider from "react-slick";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";


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

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

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
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: '0px',
          arrows: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '60px',
          arrows: true,
          dots: true,
        }
      }
    ],
  };

  return (
    <>
      <Navbar />
      <div id="services" ref={sectionRef} className="relative min-h-screen overflow-hidden bg-white pt-24 pb-12 md:pt-32 md:pb-20">
        {/* Enhanced Modern Background Elements */}
        <div className="absolute inset-0">
          {/* Modern gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-indigo-50/30 to-blue-50/50"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50/20 via-transparent to-blue-50/30"></div>

          {/* Larger, more vibrant geometric shapes */}
          <div className="absolute top-16 right-8 w-96 h-96 bg-gradient-to-br from-blue-200/25 to-indigo-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-24 left-6 w-80 h-80 bg-gradient-to-tr from-indigo-200/30 to-blue-300/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-blue-100/35 to-indigo-200/30 rounded-full blur-2xl animate-pulse delay-500"></div>

          {/* Additional floating elements */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-indigo-300/15 rounded-full blur-xl animate-pulse delay-1500"></div>
          <div className="absolute bottom-1/3 left-1/5 w-40 h-40 bg-gradient-to-tl from-indigo-200/25 to-blue-300/20 rounded-full blur-2xl animate-pulse delay-2000"></div>

          {/* Modern grid pattern with enhanced opacity */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>

          {/* More floating orbs with varied sizes and colors */}
          <div className="absolute top-32 left-1/4 w-8 h-8 bg-blue-300/50 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-48 right-1/3 w-5 h-5 bg-indigo-300/60 rounded-full animate-bounce delay-700"></div>
          <div className="absolute top-2/3 left-1/8 w-4 h-4 bg-blue-200/70 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute top-1/3 right-1/6 w-6 h-6 bg-indigo-200/55 rounded-full animate-bounce delay-500"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-300/65 rounded-full animate-bounce delay-1200"></div>

          {/* Enhanced gradient overlays */}
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white/90 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white/70 to-transparent"></div>

          {/* Subtle animated lines */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent animate-pulse"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-300/30 to-transparent animate-pulse delay-1000"></div>

          {/* Modern mesh gradient effect */}
          <div className="absolute inset-0 opacity-20" style={{
            background: `radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 40% 40%, rgba(147, 197, 253, 0.05) 0%, transparent 50%)`
          }}></div>
        </div>

      <div className="max-w-7xl mx-auto relative px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="select-none text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent mb-8 leading-tight py-2">
            Precision-Engineered Solutions
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Where Innovation Converges with Operational Excellence -
            Transforming Industries Through Advanced Energy Solutions
          </p>
        </div>

        {/* Services Slider */}
        <div className="services-slider max-w-6xl mx-auto">
          <Slider {...sliderSettings}>
            {services.map((service, index) => (
              <div key={index} className="h-full px-2 md:px-3">
                <div
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full flex flex-col"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Card Content */}
                  <div className="flex flex-col h-full">
                    {/* Image Section */}
                    <div className="relative h-40 md:h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                      {/* Floating Icon */}
                      <div className="absolute top-3 md:top-4 right-3 md:right-4 w-8 h-8 md:w-10 md:h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-lg md:text-xl shadow-lg">
                        {service.icon}
                      </div>

                      {/* Stats Badge */}
                      <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 bg-white/95 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-semibold text-gray-800 shadow-lg">
                        {service.stats}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-4 md:p-6 flex flex-col flex-grow">
                      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 group-hover:text-blue-700 transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Offerings */}
                      <div className="space-y-1.5 md:space-y-2 mb-3 md:mb-4 flex-grow">
                        {service.offerings.map((offering, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-blue-500 rounded-full mt-1.5 md:mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                              {offering}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Highlight Quote */}
                      <div className="relative mb-3 md:mb-4">
                        <blockquote className="text-xs md:text-sm italic text-blue-800 bg-blue-50/50 p-2 md:p-3 rounded-xl border-l-2 border-blue-500">
                          {service.highlight}
                        </blockquote>
                      </div>

                      {/* Applications */}
                      <div className="mt-auto pt-3 md:pt-4 border-t border-gray-100">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 md:mb-2">
                          Applications
                        </p>
                        <div className="flex flex-wrap gap-1 md:gap-1.5">
                          {service.applications.map((app, idx) => (
                            <span
                              key={idx}
                              className="px-1.5 md:px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect Arrow */}
                    <div
                      className={`absolute bottom-3 md:bottom-4 right-3 md:right-4 w-6 h-6 md:w-8 md:h-8 bg-blue-500 rounded-full flex items-center justify-center text-white transition-all duration-300 ${hoveredCard === index
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 translate-x-4"
                        }`}
                    >
                      <svg
                        className="w-3 h-3 md:w-4 md:h-4"
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
          padding: 20px 0 80px;
          position: relative;
        }
        
        .services-slider .slick-list {
          padding: 20px 0;
          overflow: hidden;
        }
        
        .services-slider .slick-track {
          display: flex;
          gap: 0;
          padding: 10px 0;
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
          bottom: 40px;
        }
        
        .services-slider .slick-dots li {
          margin: 0 6px;
        }
        
        .services-slider .slick-dots li button:before {
          font-size: 10px;
          color: #3b82f6;
          opacity: 0.3;
          transition: all 0.3s ease;
        }
        
        .services-slider .slick-dots li.slick-active button:before {
          opacity: 1;
          color: #3b82f6;
          transform: scale(1.2);
        }
        
        .services-slider .slick-prev,
        .services-slider .slick-next {
          z-index: 10;
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border: 1px solid #e5e7eb;
          transition: all 0.3s ease;
        }
        
        .services-slider .slick-prev {
          left: -50px;
        }
        
        .services-slider .slick-next {
          right: -50px;
        }
        
        .services-slider .slick-prev:hover,
        .services-slider .slick-next:hover {
          background: #3b82f6;
          border-color: #3b82f6;
        }
        
        .services-slider .slick-prev:before,
        .services-slider .slick-next:before {
          font-size: 16px;
          color: #3b82f6;
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .services-slider .slick-prev:hover:before,
        .services-slider .slick-next:hover:before {
          color: white;
        }

        @media (max-width: 768px) {
          .services-slider {
            padding: 10px 0 60px;
          }
          
          .services-slider .slick-dots {
            bottom: 30px;
          }
          
          .services-slider .slick-slide {
            opacity: 1;
            transform: scale(1);
          }
          
          .services-slider .slick-prev {
            left: -20px;
            width: 35px;
            height: 35px;
          }
          
          .services-slider .slick-next {
            right: -20px;
            width: 35px;
            height: 35px;
          }
          
          .services-slider .slick-prev:before,
          .services-slider .slick-next:before {
            font-size: 14px;
          }
          
          .services-slider .slick-list {
            padding: 10px 0;
          }
          
          .services-slider .slick-track {
            padding: 5px 0;
          }
        }
      `}</style>
    </div>
    <Footer />
    </>
  );
};

export default Services;
