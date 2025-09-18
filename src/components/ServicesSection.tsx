import React from "react";
import { Truck, Bike, Building2, Home } from "lucide-react";
import { Images } from "@/constants";

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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 bg-clip-text text-transparent mb-4">
            Our Services
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            From material handling to renewable energy storage, our cutting-edge battery solutions are transforming industries.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition-shadow bg-white border border-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 md:h-80 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className={`h-full ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div className="h-full bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-sm p-5 md:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-semibold">
                      {index + 1}
                    </div>
                    <service.icon className="h-6 w-6 md:h-7 md:w-7 text-blue-600" />
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                        <p className="text-gray-700 text-sm md:text-base">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


