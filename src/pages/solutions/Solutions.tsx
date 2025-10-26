import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Bus,
  TramFront,
  Truck,
  Zap,
  Plane,
  Package,
  Server,
  Home,
  Building,
  Car,
  Settings
} from 'lucide-react';

const Solutions = () => {
  // Scroll to top on mount
  useEffect(() => {
    const lenis = (window as any).lenis;
    if (lenis && typeof lenis.scrollTo === 'function') {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, []);

  const commercialSolutions = [
    {
      icon: Bus,
      title: "Commercial EVs – Electric Bus",
  description: "Focusing on the high-frequency and high-stability requirements of road passenger transport, Nexus Energy provides multi-scenario solutions that are safe, reliable, durable, and widely used in various urban public transport scenarios, passenger line, tourism passenger transport, commuter, etc.",
      image: "https://www.catl.com/en/uploads/1/image/public/202101/20210113152613_a5bukbvsgp.png"
    },
    {
      icon: TramFront,
      title: "Railways – Vande Bharat ",
  description: "Nexus Energy's traction batteries are suitable for light trucks, mini buses, and minivans, and are widely used in express delivery, supermarket delivery, fresh food delivery and other scenarios. Nexus Energy provides customers with safe, reliable and comprehensive battery solutions.",
      image: "https://t4.ftcdn.net/jpg/05/18/35/41/360_F_518354199_t3WVv6zkDC9nuGi9v2T9kMPUuG41G5nQ.jpg"
    },
    {
      icon: Truck,
      title: "LCVs (Light Commercial Electric Vehicles) ",
  description: "Nexus Energy provides strong and clean power to heavy-duty vehicles for meeting the working conditions of mining areas, ports, short-haul transportation in urban areas and construction sites, to satisfy the requirements of industrialization and transport electrification.",
      image: "https://www.catl.com/en/uploads/1/image/public/202009/20200922002526_p2a62ythil.png"
    },
    {
      icon: Zap,
      title: "BESS (Battery Energy Storage System)",
  description: "Nexus Energy provides customized solutions that meet the demands of various street cleaning vehicles. Nexus Energy's batteries feature great safety, long life and strong environmental adaptability, covering a variety of vehicle types including electric washing vehicles, electric washing and sweeping vehicles, electric garbage trucks.",
      image: "https://www.ess-news.com/wp-content/uploads/2025/06/agilitas.jpg"
    },
    {
      icon: Plane,
      title: "Drones Agri",
  description: "The battery product solution provided by Nexus Energy for the field of construction machinery are widely adapted to special vehicles such as forklifts and slag trucks. It's easy to adapt to specific working conditions and create a comfortable and safe working environment.",
      image: "https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/179e614f3edadd3d5c5b8f0db25a3139/large.jpg"
    },
    {
      icon: Package,
      title: "Material Handling Equipments",
  description: "Nexus Energy offers green, intelligent and safe battery solutions for two-wheeled vehicles which can be applied to multiple scenarios such as commuting, food delivery, express delivery, etc. The rechargeable and replaceable batteries make your travel experience easy and seamless.",
      image: "https://www.catl.com/en/uploads/1/image/public/202102/20210223123235_x6wkw3ieu8.png"
    },
    {
      icon: Server,
      title: "UPS – Energy Storage Solutions ",
  description: "Nexus Energy offers green, intelligent and safe battery solutions for two-wheeled vehicles which can be applied to multiple scenarios such as commuting, food delivery, express delivery, etc. The rechargeable and replaceable batteries make your travel experience easy and seamless.",
      image: "https://media.istockphoto.com/id/1430070088/photo/server-room-server-data-center-backup-mining-hosting-mainframe-farm-and-computer-rack-with.jpg?s=612x612&w=0&k=20&c=UwKrotQBmf80MIh2ACuNXPpQrszbnNLTrvzJNK99njw="
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        title="Battery Solutions - Nexus Energy"
        description="Comprehensive battery solutions for commercial, passenger, energy storage, and specialized applications. Powering the future of sustainable energy."
      />
      
      {/* Hero Section */}
      <PageHero
        title="Battery Solutions for Every Application"
        subtitle="Comprehensive energy storage solutions designed to power the future across diverse industries and applications"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Solutions' }
        ]}
      />

      {/* Commercial Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Commercial Application Solutions</h2>
            <p className="text-xl text-gray-600">Comprehensive battery solutions for commercial vehicles and specialized applications</p>
          </motion.div>

          <div className="space-y-20">
            {commercialSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                    <img 
                      src={solution.image} 
                      alt={solution.title}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
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
                  <p className="text-gray-600 leading-relaxed text-lg">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>





      <Footer />
    </div>
  );
};

export default Solutions;