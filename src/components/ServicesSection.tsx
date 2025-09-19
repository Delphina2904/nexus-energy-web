import React from "react";
import { Truck, Bike, Building2, Home } from "lucide-react";
import { Images } from "@/constants";
import { GlowCard } from "./GlowCard";
import { GlowEffect } from "./GlowEffect";

const services = [
  {
    title: "Quick Commerce",
    description: "Ultra-fast charging solutions for quick commerce vehicles",
    icon: Truck,
    image: Images.tempo,
    features: [
      "Rapid high charging compact form factor",
      "Suitable for diverse range of commercial fleet vehicles 24/7 charge",
      "Heavy duty connectivity with a single charge & function",
    ],
  },
  {
    title: "Mobility Solutions",
    description:
      "Efficient battery technology for electric mobility transformation and premium bus charging solutions",
    icon: Bike,
    image: Images.eMobility,
    features: [
      "Delivers High-range vehicle with easy battery swapping",
      "Solutions city two scooters",
      "Off road movement",
    ],
  },
  {
    title: "Grid Scale Energy Storage Systems (ESS)",
    description:
      "Industrial battery utility-operating renewable integration and powerSoft batteries & backup applications",
    icon: Building2,
    image: Images.rEnergy,
    features: [
      "Heavy duty bulk load capabilities",
      "Fast charge specifications",
      "Smart energy moving framework developed assistants for large utility",
    ],
  },
  {
    title: "Residential & Commercial Storage",
    description:
      "Self-contained and efficient solutions for homes and businesses with comprehensive products and functionality",
    icon: Home,
    image: Images.forkLifts,
    features: [
      "Intelligent energy use lead for specific environment",
      "Step working capabilities during power outages",
    ],
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-blue-600 mb-6 leading-tight">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From material handling to renewable energy storage, our cutting-edge battery solutions are transforming industries across the globe.
          </p>
        </div>

        <div className="space-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-stretch ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Image Side */}
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-52 md:h-64 object-contain bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  loading="lazy"
                />
              </div>

              {/* Text Card Side */}
              <div className={`h-full ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <GlowCard
                  glowColor="green"
                  customSize={true}
                  className="h-full bg-white border border-gray-100 shadow-sm p-4 md:p-5"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white font-semibold text-sm">
                      {index + 1}
                    </div>
                    <service.icon className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                    <h3 className="text-base md:text-lg font-semibold text-blue-600">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-3 text-sm md:text-base">
                    {service.description}
                  </p>

                  <div className="space-y-1.5">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <div className="mt-1.5 w-1 h-1 rounded-full bg-blue-600"></div>
                        <p className="text-gray-700 text-xs md:text-sm">{feature}</p>
                      </div>
                    ))}
                  </div>
                </GlowCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


