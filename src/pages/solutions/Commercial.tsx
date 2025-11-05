import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import {
  Shield,
  Clock,
  Thermometer,
  Settings,
  BarChart3,
  Truck,
  Bus,
  Package,
  HardHat,
  Trash2,
  Forklift,
  Bike,
  Ship,
  Plane,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHero } from '@/components/PageHero';

const Commercial = () => {
  // Scroll to top on mount
  useEffect(() => {
    const lenis = (window as any).lenis;
    if (lenis && typeof lenis.scrollTo === 'function') {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, []);

  const advantages = [
    {
      icon: Clock,
      title: "Standing the Test of Time",
      description: "Through a futuristic tech combination in software and hardware, and the material mechanism of self and external maintenance, Nexus Energy batteries achieve more cycles, longer life, better long-term performance and higher economic benefits."
    },
    {
      icon: Shield,
      title: "Confidence Comes with Reliability",
      description: "Advanced safety systems and robust engineering ensure reliable performance in all commercial applications with industry-leading safety standards."
    },
    {
      icon: Thermometer,
      title: "Easy Drive in Cold and Heat",
      description: "Exceptional thermal management system enables consistent performance across extreme temperature ranges, from -30°C to +60°C operating conditions."
    },
    {
      icon: Settings,
      title: "Services Beyond Expectations",
      description: "Comprehensive support ecosystem including 24/7 monitoring, predictive maintenance, and global service network for maximum uptime."
    },
    {
      icon: BarChart3,
      title: "Smart, Instant Feedback",
      description: "Real-time battery management system with intelligent diagnostics provides instant feedback and optimization for peak performance."
    }
  ];

  const solutions = [
    {
      icon: Bus,
      title: "Road Passenger Transport Solutions",
      description: "Focusing on the high-frequency and high-stability requirements of road passenger transport, Nexus Energy provides multi-scenario solutions that are safe, reliable, durable, and widely used in various urban public transport scenarios, passenger line, tourism passenger transport, commuter, etc.",
      image: "/images/s1.png",
      link: "/solutions/commercial/passenger-transport"
    },
    {
      icon: Package,
      title: "Urban Delivery Solutions",
      description: "Nexus Energy's traction batteries are suitable for light trucks, mini buses, and minivans, and are widely used in express delivery, supermarket delivery, fresh food delivery and other scenarios. Nexus Energy provides customers with safe, reliable and comprehensive battery solutions.",
      image: "/images/s2.png",
      link: "/solutions/commercial/urban-delivery"
    },
    {
      icon: Truck,
      title: "Heavy-duty Transport Solutions",
      description: "Nexus Energy provides strong and clean power to heavy-duty vehicles for meeting the working conditions of mining areas, ports, short-haul transportation in urban areas and construction sites, to satisfy the requirements of industrialization and transport electrification.",
      image: "/images/s3.png",
      link: "/solutions/commercial/heavy-duty"
    },
    {
      icon: Trash2,
      title: "Urban Street Cleaning Solutions",
      description: "Nexus Energy provides customized solutions that meet the demands of various street cleaning vehicles. Nexus Energy's batteries feature great safety, long life and strong environmental adaptability, covering a variety of vehicle types including electric washing vehicles, electric washing and sweeping vehicles, electric garbage trucks.",
      image: "/images/s4.png",
      link: "/solutions/commercial/street-cleaning"
    },
    {
      icon: Forklift,
      title: "Construction Machinery",
      description: "The battery product solution provided by Nexus Energy for the field of construction machinery are widely adapted to special vehicles such as forklifts and slag trucks. It's easy to adapt to specific working conditions and create a comfortable and safe working environment.",
      image: "/images/s5.png",
      link: "/solutions/commercial/construction-machinery"
    },
    {
      icon: Bike,
      title: "Two-wheeled Vehicle Solutions",
      description: "Nexus Energy offers green, intelligent and safe battery solutions for two-wheeled vehicles which can be applied to multiple scenarios such as commuting, food delivery, express delivery, etc. The rechargeable and replaceable batteries make your travel experience easy and seamless.",
      image: "/images/s6.png",
      link: "/solutions/commercial/two-wheeled"
    },

    {
      icon: Plane,
      title: "Special Vehicle Solutions",
      description: "Nexus Energy provides customized product solutions for special vehicles which can be easily adapted to specific working conditions, thereby improving economic benefits, reducing environmental pollution and creating a comfortable and safe working environment.",
      image: "/images/s7.png",
      link: "/solutions/commercial/special-vehicle"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        title="Commercial Application Solutions - Nexus Energy"
        description="Comprehensive commercial battery solutions for electric vehicles, heavy-duty transport, urban delivery, and specialized applications. Earn more money with each mile."
      />
      {/* Removed old breadcrumb and hero section, now handled by PageHero */}


      <PageHero
        title="Commercial Application Solutions"
        subtitle="Comprehensive commercial battery solutions for electric vehicles, heavy-duty transport, urban delivery, and specialized applications."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Solutions', path: '/solutions' },
          { label: 'Commercial' }
        ]}
      />




      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="space-y-20">
            {solutions.map((solution, index) => {
              // Map solution titles to id anchors for smooth scroll
              const idMap = {
                "Road Passenger Transport Solutions": "road-passenger-transport",
                "Urban Delivery Solutions": "urban-delivery",
                "Heavy-duty Transport Solutions": "heavy-duty",
                "Urban Street Cleaning Solutions": "street-cleaning",
                "Construction Machinery": "construction-machinery",
                "Two-wheeled Vehicle Solutions": "two-wheeled",
                "Vessel Solutions": "vessel",
                "Special Vehicle Solutions": "special-vehicle"
              };
              const anchorId = idMap[solution.title] || undefined;
              return (
                <motion.div
                  key={solution.title}
                  id={anchorId}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row ' : 'lg:flex-row-reverse'} items-center gap-12`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative overflow-hidden rounded-2xl  group">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full  h-80 object-contain bg-transparent transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <solution.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{solution.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-8 text-lg">{solution.description}</p>
                    {/* Removed Learn More button as requested */}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default Commercial;