import React from "react";
import roomBattery from "@/assets/41.jpg";

const benefits: { title: string; points: string[] }[] = [
  {
    title: "Rapid Deployment",
    points: [
      "Standardized modules enable plug‑and‑play installs",
      "Factory pre‑commissioned for minimal site work",
    ],
  },
  {
    title: "Energy Savings",
    points: [
      "Peak‑shaving with smart scheduling",
      "Optimized charge cycles reduce operational costs",
    ],
  },
  {
    title: "Safety & Compliance",
    points: [
      "ASIL‑rated BMS and multi‑layer protection",
      "Meets international certifications and grid codes",
    ],
  },
  {
    title: "Scalable Architecture",
    points: [
      "Rack‑to‑container growth without downtime",
      "Cloud telemetry for fleet‑wide control",
    ],
  },
];

const EcosystemBenefits: React.FC = () => {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">Ecosystem Benefits</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <div key={i} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <h4 className="text-sm md:text-base font-semibold text-slate-900 mb-2">{b.title}</h4>
                  <ul className="space-y-1.5">
                    {b.points.map((p, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-[0_20px_35px_rgba(15,23,42,0.08)]">
              <img src={roomBattery} alt="Home and commercial storage" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemBenefits;


