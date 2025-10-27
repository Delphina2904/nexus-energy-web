import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ChevronRight, Server } from 'lucide-react';
import { PageHero } from '@/components/PageHero';

const subcategories = [
  {
    id: 'bess',
    title: 'Energy Storage on Power Generation',
  description: 'Nexus Energy’s energy storage systems provide energy storage and output management in power generation. The electrochemical technology and renewable energy power generation technology form a joint system. Through the high-level consistency of cells and the powerful computing of BMS, Nexus Energy enables the power generation to restore a stable power grid, optimize the power output curve, reduce solar and wind curtailment, provide system inertia and the functions of frequency and peak modulation, increase the proportion of renewable energy in total power generation, and optimize the energy structure.',
    image: '/images/s8.png',
  },
  {
    id: 'ups',
    title: 'Energy Storage on Power Transmission and Distribution',
  description: 'Nexus Energy’s energy storage systems provide smart load management for power transmission and distribution, and modulate frequency and peak in time according to power grid loads. The Nexus Energy electrochemical energy storage system has the functions of capacity increasing and  expansion, backup power supply, etc. It can adopt more renewable energy in power transmission and distribution in order to ensure the safe, stable, efficient and low-cost operation of the power grid.',
    image: '/images/s9.png',
  },
  {
    id: 'ups',
    title: 'Energy Storage on Power Consumption',
  description: 'Nexus Energy’s energy storage systems provide users with a  peak-valley electricity price arbitrage mode and stable power quality management. Nexus Energy’s electrochemical energy storage products have been successfully applied in large-scale industrial, commercial and residential areas, and been expanded to emerging scenarios such as base stations, UPS backup power, off-grid and island/isolate systems, intelligent charging stations for optical storage charging and testing, etc. Such applications help regions that have a lack of power grids to have access to electricity, reduce electricity costs, ensure a  stable power network, and achieve maximum social and economic benefits by using renewable energy to its greatest extent.',
    image: '/images/s10.png',
  },
  
];

const EnergyStorage = () => {
  useEffect(() => {
    const lenis = (window as any).lenis;
    if (lenis && typeof lenis.scrollTo === 'function') {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        title="Energy Storage Systems - Nexus Energy"
        description="Flexible, scalable, and safe battery energy storage systems for grid, commercial, and industrial applications."
      />
      <PageHero
        title="Energy Storage Systems"
        subtitle="Flexible, scalable, and safe battery energy storage systems for grid, commercial, and industrial applications."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Solutions', path: '/solutions' },
          { label: 'Energy Storage Systems' }
        ]}
      />
      {/* Subcategory Sections */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl space-y-20">
          {subcategories.map((sub, idx) => (
            <div
              key={sub.id}
              id={sub.id}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-2xl group">
                  <img 
                    src={sub.image} 
                    alt={sub.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Server className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{sub.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">{sub.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EnergyStorage;
