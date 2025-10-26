// This file has been removed as it is not referenced in routes or imports.
import React, { useState, useEffect } from "react";
import { Zap, Shield, Thermometer, Cpu, Battery, Timer } from "lucide-react";

const features = [
  {
    icon: <Battery className="w-8 h-8" />,
    title: "Tab-less Cell Design",
    description:
      "Proprietary architecture enabling 40× accelerated charge transfer while enhancing thermal stability",
    highlight: "40× Faster",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Hyper-Charging Technology",
    description:
      "0-100% replenishment in 12-20 minutes (industry-leading temporal efficiency)",
    highlight: "12-20 Min",
  },
  {
    icon: <Timer className="w-8 h-8" />,
    title: "Extended Cycle Resilience",
    description:
      "25,000+ charge-discharge cycles with <20% capacity degradation",
    highlight: "25,000+ Cycles",
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Intelligent Power Management",
    description:
      "ASIL-D-rated BMS with IoT integration and geo-fencing capabilities",
    highlight: "ASIL-D Rated",
  },
  {
    icon: <Thermometer className="w-8 h-8" />,
    title: "Extreme Environment Proficiency",
    description:
      "Operational spectrum from -40°C to 65°C with ±1°C thermal monitoring precision",
    highlight: "-40°C to 65°C",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Military-Grade Safety",
    description:
      "Zero thermal runaway during nail penetration/overcharge scenarios (UN38.3 certified)",
    highlight: "UN38.3 Certified",
  },
];

const Features = () => {
  const [selectedIdx, setSelectedIdx] = useState(1);

  useEffect(() => {
    setSelectedIdx(selectedIdx);
  }, [selectedIdx]);

  const headers = ["Turbo X 14000", "Meteor 5000", "Meteor X 16000"];

  const rows = [
    ["Energy Density", "14.7kWh", "5.1kWh", "17kWh"],
    ["Cycle Life", "25,000", "3,000", "4,000"],
    ["Charging Velocity", "20 min", "Standard", "GB/T Fast DC"],
    ["Thermal Regulation", "Active Liquid", "Passive Air", "Passive Air"],
    ["Operational Range", "-40°C to 65°C", "-20°C to 60°C", "-10°C to 65°C"],
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight select-none">
            The Nexus Technological
            <span className="text-blue-600 select-none"> Vanguard</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our proprietary energy architectures embody quantum leaps in
            electrochemical performance, merging unprecedented safety protocols
            with groundbreaking efficiency.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon Container */}
              <div className="relative mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                {/* Highlight Badge */}
                <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold px-2 md:px-3 py-1 rounded-full whitespace-nowrap">
                  {feature.highlight}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-gray-50 rounded-3xl p-6 md:p-8 lg:p-12">
          <div className="text-center mb-8 md:mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              Advanced Capabilities Comparison
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              See how our technology stacks against the competition
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-full">
              <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                    <th className="p-4 md:p-6 text-left font-bold text-sm md:text-base">Parameter</th>
                    {headers.map((title, idx) => (
                      <th
                        key={idx}
                        onMouseOver={() => setSelectedIdx(idx + 1)}
                        className={`p-4 md:p-6 text-left font-bold cursor-pointer transition-all duration-200 text-sm md:text-base ${
                          selectedIdx === idx + 1
                            ? "bg-gray-800 text-white shadow text-base md:text-lg"
                            : "opacity-75"
                        }`}
                      >
                        {title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="border-b border-gray-100 hover:bg-blue-50/50 transition-colors duration-200"
                    >
                      {row.map((cell, colIndex) => (
                        <td
                          key={colIndex}
                          className={`p-4 md:p-6 text-sm md:text-base ${
                            colIndex === 0
                              ? "font-semibold text-gray-900"
                              : colIndex === selectedIdx
                              ? "font-bold text-blue-600 bg-blue-50/50"
                              : "text-gray-600"
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
