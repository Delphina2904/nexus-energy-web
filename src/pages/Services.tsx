import React, { useState, useRef } from "react";
import { Images } from "../constants";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PageHero } from "../components/PageHero";
import { GlowCard } from "../components/GlowCard";

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
      "Delivery vehicles",
      "Fleet operations",
    ],
    image: Images.mobility2,
    stats: "99.8% Uptime",
    gradient: "from-blue-400 to-cyan-500",
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
    applications: [
      "Solar farms",
      "Wind parks",
      "Off-grid communities",
    ],
    image: Images.rEnergy,
    stats: "4,200 tons CO₂ saved",
    gradient: "from-green-400 to-emerald-500",
  },
  {
    title: "Agricultural Electrification",
    offerings: [
      "Solar-powered irrigation systems",
      "Electric tractor battery packs",
      "Smart farming energy management",
    ],
    highlight:
      "Solar-powered irrigation systems reducing diesel consumption by 80% while increasing crop yield by 25%.",
    applications: [
      "Irrigation systems",
      "Electric tractors",
      "Smart farming",
    ],
    image: Images.truck,
    stats: "80% Diesel Reduction",
    gradient: "from-orange-400 to-yellow-500",
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
    stats: "72h Endurance",
    gradient: "from-red-400 to-pink-500",
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
    applications: [
      "Warehousing",
      "Foundries",
      "Robotics",
    ],
    image: Images.industrial2,
    stats: "40% Cost Reduction",
    gradient: "from-purple-400 to-indigo-500",
  },
  {
    title: "Grid-Scale Energy Storage",
    offerings: [
      "Utility-scale battery storage systems",
      "Grid stabilization and frequency regulation",
      "Renewable energy time-shifting solutions",
    ],
    highlight:
      "100MW/400MWh grid-scale installations providing 99.9% reliability for critical infrastructure backup power.",
    applications: [
      "Power grids",
      "Data centers",
      "Critical infrastructure",
    ],
    image: Images.tempo2,
    stats: "99.9% Reliability",
    gradient: "from-indigo-400 to-blue-500",
  },
];

// Export the main Services content without Navbar/Footer for embedding
export const ServicesContent = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  return (
    <div
      id="services"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden nexus-gradient-blue nexus-section"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>

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
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 40% 40%, rgba(147, 197, 253, 0.05) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative px-4 sm:px-6 lg:px-8 py-12">

        {/* Services Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              // Assign different glow colors based on service type
              const getGlowColor = (title: string) => {
                if (title.includes("E-Mobility")) return "blue";
                if (title.includes("Renewable Energy")) return "green";
                if (title.includes("Agricultural")) return "orange";
                if (title.includes("Defense")) return "red";
                if (title.includes("Industrial")) return "purple";
                return "blue";
              };

              return (
                <div key={index} className="h-full">
                  <GlowCard
                    glowColor={getGlowColor(service.title)}
                    customSize={true}
                    className="group relative bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full flex flex-col"
                  >
                  {/* Card Content */}
                  <div className="flex flex-col h-full">
                    {/* Image Section */}
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>


                      {/* Stats Badge */}
                      <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 bg-white/95 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium text-gray-800 shadow-lg">
                        {service.stats}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-4 md:p-6 flex flex-col flex-grow">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4 group-hover:text-blue-700 transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Offerings */}
                      {/* <div className="space-y-1.5 md:space-y-2 mb-3 md:mb-4 flex-grow">
                        {service.offerings.map((offering, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-blue-500 rounded-full mt-1.5 md:mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                              {offering}
                            </p>
                          </div>
                        ))}
                      </div> */}

                      {/* Highlight Quote */}
                      {/* <div className="relative mb-3 md:mb-4">
                        <blockquote className="text-xs md:text-sm italic text-blue-800 bg-blue-50/50 p-2 md:p-3 rounded-xl border-l-2 border-blue-500">
                          {service.highlight}
                        </blockquote>
                      </div> */}

                      {/* Applications */}
                      {/* <div className="mt-auto pt-3 md:pt-4 border-t border-gray-100">
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5 md:mb-2">
                          Applications
                        </p>
                        <div className="flex flex-wrap gap-1 md:gap-1.5">
                          {service.applications.map((app, idx) => (
                            <span
                              key={idx}
                              className="px-1.5 md:px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full font-normal hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div> */}
                    </div>

                    {/* Hover Effect Arrow */}
                    <div
                      className={`absolute bottom-3 md:bottom-4 right-3 md:right-4 w-6 h-6 md:w-8 md:h-8 bg-blue-500 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
                        hoveredCard === index
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
                  </GlowCard>
                </div>
              );
            })}
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