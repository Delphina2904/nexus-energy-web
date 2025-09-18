import React from "react";
import nexus from "@/assets/NexusEnergy.png";
import battery from "@/assets/50.png";

const InnovationSection: React.FC = () => {
  return (
    <section className="relative z-10 bg-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
          {/* Left visual panel */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* background soft card */}
              <div className="absolute -left-2 -top-2 w-6 h-6 rounded-full bg-blue-500/90 shadow-[0_0_0_6px_rgba(59,130,246,0.2)]" />
              <div className="absolute -right-2 bottom-10 w-4 h-4 rounded-full bg-blue-500/90 shadow-[0_0_0_6px_rgba(59,130,246,0.15)]" />
              <div className="absolute -left-1 bottom-1 w-3 h-3 rounded-full bg-blue-500/90 shadow-[0_0_0_6px_rgba(59,130,246,0.15)]" />

              <div className="relative rounded-2xl shadow-[0_20px_40px_rgba(15,23,42,0.08)] border border-slate-100 bg-white p-4 md:p-6">
                <div className="grid grid-cols-2 gap-4 items-center">
                  <div className="rounded-xl overflow-hidden border border-slate-100 shadow-sm bg-slate-50">
                    <img src={nexus} alt="Nexus Energy" className="w-full h-28 md:h-36 object-contain p-3" loading="lazy" />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-slate-100 shadow-sm bg-slate-50">
                    <img src={battery} alt="Battery Module" className="w-full h-28 md:h-36 object-cover" loading="lazy" />
                  </div>
                </div>

                {/* floating action dots */}
                <button
                  aria-label="view"
                  className="absolute top-3 left-3 w-7 h-7 rounded-full bg-white border border-slate-200 shadow-md grid place-items-center text-blue-600"
                >
                  <span className="text-sm">⚡</span>
                </button>
                <button
                  aria-label="view"
                  className="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-white border border-slate-200 shadow-md grid place-items-center text-blue-600"
                >
                  <span className="text-sm">∘</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right content and feature cards */}
          <div className="lg:col-span-7">
            <div className="mb-6 md:mb-8">
              <p className="text-xs md:text-sm font-semibold tracking-wide uppercase text-blue-700">Our Innovation Hub</p>
              <h3 className="mt-2 text-[22px] md:text-3xl lg:text-[32px] font-semibold text-slate-900 leading-snug max-w-2xl">
                Our innovation hub houses India’s foremost electrochemistry research facility, where cross-disciplinary teams pioneer breakthroughs in:
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {[{
                title: "Active Thermal Management",
                desc: "Precision control of battery temperature ensures optimal performance.",
              },{
                title: "AI‑Powered Battery Management System (BMS)",
                desc: "Real‑time data analytics optimize energy delivery.",
              },{
                title: "Life Extension Algorithm",
                desc: "Smart predictive cycles and intelligent cell diagnostics.",
              },{
                title: "Ultra‑Fast Charging",
                desc: "Proprietary liquid immersion technology enables rapid charge.",
              }].map((card, idx) => (
                <div key={idx} className="relative group">
                  <div className="rounded-2xl border border-slate-200 bg-white shadow-[0_10px_24px_rgba(15,23,42,0.06)] p-4 md:p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-full bg-blue-600 text-white grid place-items-center shadow-sm">{idx + 1}</div>
                      <h4 className="text-base md:text-lg font-semibold text-slate-900">{card.title}</h4>
                    </div>
                    <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed">{card.desc}</p>
                    <div className="mt-4 text-right">
                      <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-blue-600 text-white">→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* quote bar */}
            <div className="mt-6 md:mt-8">
              <div className="relative rounded-2xl bg-blue-50 border border-blue-100 p-4 md:p-5 shadow-[0_12px_24px_rgba(59,130,246,0.15)]">
                <div className="absolute left-4 top-2 text-blue-400">“</div>
                <p className="text-blue-900 text-sm md:text-base text-center font-medium">
                  We don’t just build batteries—we architect energy ecosystems.
                </p>
                <div className="absolute right-4 bottom-2 text-blue-400">”</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;


