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
    <section className="relative z-10 bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">
          {/* Left visual panel */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative flex-1 mt-16">

              <GlowCard
                glowColor="blue"
                customSize={true}
                className="relative  shadow-[0_20px_40px_rgba(15,23,42,0.08)] border border-slate-100 bg-white p-2 h-auto transition-all duration-300 hover:shadow-[0_25px_50px_rgba(59,130,246,0.15)] hover:scale-105 hover:border-blue-200"
              >
                {/* Battery Image */}
                <div className="flex items-center justify-center group">
                    <video 
                      src="./images/video-vmake.mp4" 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-[620px] object-cover transition-all duration-300 group-hover:brightness-110 group-hover:drop-shadow-lg rounded-lg"
                    />
                </div>
              </GlowCard>
            </div>
          </div>

          {/* Right content and breakthrough cards */}
          <div className="lg:col-span-6">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-slate-900 leading-tight mb-6 text-left">
                Lorem ipsum dolor sit amet consectetur. 
              
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
                    <div className="flex justify-center">
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


