import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ChevronRight, TramFront } from 'lucide-react';
import { PageHero } from '@/components/PageHero';


const subcategories = [
  {
    id: 'vande-bharat-coach',
    title: 'Application: Vande Bharat (T-18) Train Coach Battery System',
    descriptionIntro: "T-18 Vande Bharat train's Onboard battery system is a mission-critical component, serving several essential functions:",
    descriptionBullets: [
      'Startup Power: Energizes the train’s coach monitoring system, auxiliary systems, traction converters, and all electrical systems before main power is available.',
      'Pantograph Lift: Provides power to raise the pantograph to connect to Overhead Equipment (OHE).',
      'Emergency Backup: Ensures backup power for core systems during OHE failure or scheduled maintenance; crucial for passenger safety, lighting, communication, and basic operation until rescue or resolution.'
    ],
    image: 'https://www.ireeindia.com/data12/images/1.jpg',
  },
  {
    id: 'shunt-locomotive',
    title: 'Traction for Self-Propelled Inspection Train & Shunt Locomotive',
    description: 'Nexus Energy’s Liquid Cooled Battery system is industry-aligned, and fully capable of powering shunt locomotives under even demanding yard conditions. When combined with advanced management and safety technologies—Nexus Energy provides a future-ready, low-maintenance, and sustainable solution for rail operators pursuing emissions reduction and operational efficiency.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/JRF-HD300-901-00.jpg',
  },
];

const Railways = () => {
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
        title="Railway Battery Solutions - Nexus Energy"
        description="Advanced battery solutions for high-speed railways and modern train systems."
      />
      <PageHero
        title="Railway Battery Solutions"
        subtitle="Advanced battery solutions for high-speed railways and modern train systems."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Solutions', path: '/solutions' },
          { label: 'Railways' }
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
                <div className="relative overflow-hidden rounded-2xl  group">
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
                    <TramFront className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{sub.title}</h3>
                </div>
                {sub.descriptionBullets ? (
                  <>
                    <p className="text-gray-600 leading-relaxed text-lg mb-2">{sub.descriptionIntro}</p>
                    <ul className="list-disc pl-6 text-gray-600 text-lg space-y-1">
                      {sub.descriptionBullets.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p className="text-gray-600 leading-relaxed text-lg">{sub.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Railways;
