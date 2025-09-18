import React from "react";
import { GlowCard } from "./GlowCard";

const InnovationSection: React.FC = () => {
  const breakthroughs = [
    {
      icon: "⚡",
      title: "Active Thermal Management",
      description: "Precision control of battery temperatures ensures optimal performance and longevity across all operating conditions."
    },
    {
      icon: "◎",
      title: "AI-Powered Battery Management System (BMS)",
      description: "Real-time data analytics optimize every cell's performance, predicting failures before they occur."
    },
    {
      icon: "⊞",
      title: "Life Extension Algorithm",
      description: "Smart software predicts and mitigates cell degradation, extending battery life by up to 40%."
    },
    {
      icon: "🔄",
      title: "Ultra-Fast Charging",
      description: "Proprietary Liquid Immersion Technology enables 0-80% charge in under 15 minutes."
    }
  ];

  return (
    <section className="relative z-10 bg-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">
          {/* Left visual panel */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative flex-1">
              {/* Background decorative circles */}
              <div className="absolute -left-2 -top-2 w-6 h-6 rounded-full bg-blue-500/90 shadow-[0_0_0_6px_rgba(59,130,246,0.2)]" />
              <div className="absolute -right-2 bottom-10 w-4 h-4 rounded-full bg-blue-500/90 shadow-[0_0_0_6px_rgba(59,130,246,0.15)]" />
              <div className="absolute -left-1 bottom-1 w-3 h-3 rounded-full bg-blue-500/90 shadow-[0_0_0_6px_rgba(59,130,246,0.15)]" />

              <GlowCard
                glowColor="blue"
                customSize={true}
                className="relative shadow-[0_20px_40px_rgba(15,23,42,0.08)] border border-slate-100 bg-white p-3 h-full transition-all duration-300 hover:shadow-[0_25px_50px_rgba(59,130,246,0.15)] hover:scale-105 hover:border-blue-200"
              >
                {/* Battery Image */}
                <div className="flex items-center justify-center h-full group">
                  <div className="w-full max-w-lg transition-transform duration-300 group-hover:scale-110">
                    <img src="/battery.png" alt="Battery" className="w-full h-auto object-contain transition-all duration-300 group-hover:brightness-110 group-hover:drop-shadow-lg" loading="lazy" />
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>

          {/* Right content and breakthrough cards */}
          <div className="lg:col-span-7">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight mb-4 text-left">
                Our innovation hub houses India's foremost electrochemistry research facility, where cross-disciplinary teams pioneer breakthroughs in:
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {breakthroughs.map((breakthrough, idx) => (
                <GlowCard
                  key={idx}
                  glowColor="blue"
                  customSize={true}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 cursor-pointer"
                >
                  <div className="flex flex-col h-full">
                    {/* Icon - Top Center */}
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white text-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                      {breakthrough.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors duration-300 text-center">
                      {breakthrough.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow text-center">
                      {breakthrough.description}
                    </p>
                    
                    {/* Arrow */}
                    <div className="flex justify-end">
                      <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;


