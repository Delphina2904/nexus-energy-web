import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ChevronRight, Zap } from 'lucide-react';
import { PageHero } from '@/components/PageHero';

const subcategories = [
  {
    id: 'agri',
    title: 'Agricultural Drones',
    description: 'Advanced battery solutions for agricultural drones, enabling efficient crop monitoring, spraying, and mapping.',
    image: 'https://www.garudaaerospace.com/_next/image?url=%2Fimages%2Fagriculture%2Ffind-services%2Fplanting.png&w=750&q=75',
  },
  {
    id: 'defence',
    title: 'Defence Drones',
    description: 'Reliable and high-performance batteries for defence and surveillance drones, ensuring mission success.',
    image: 'https://th-i.thgim.com/public/sci-tech/technology/1ng9e5/article69191799.ece/alternates/FREE_1200/WhatsApp%20Image%202025-02-07%20at%2011.30.10%20AM.jpeg',
  },
];

const Drones = () => {
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
        title="Drone Battery Solutions - Nexus Energy"
        description="High-performance battery solutions for agricultural and defence drones."
      />
      <PageHero
        title="Drone Battery Solutions"
        subtitle="High-performance battery solutions for agricultural and defence drones."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Solutions', path: '/solutions' },
          { label: 'Drones' }
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
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                  <img 
                    src={sub.image} 
                    alt={sub.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Zap className="h-6 w-6 text-blue-600" />
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

export default Drones;
