import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
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
  Plane
} from 'lucide-react';

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
      description: "Through a futuristic tech combination in software and hardware, and the material mechanism of self and external maintenance, CATL batteries achieve more cycles, longer life, better long-term performance and higher economic benefits."
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
      description: "Focusing on the high-frequency and high-stability requirements of road passenger transport, CATL provides multi-scenario solutions that are safe, reliable, durable, and widely used in various urban public transport scenarios, passenger line, tourism passenger transport, commuter, etc.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
      link: "/solutions/commercial/passenger-transport"
    },
    {
      icon: Package,
      title: "Urban Delivery Solutions",
      description: "CATL's traction batteries are suitable for light trucks, mini buses, and minivans, and are widely used in express delivery, supermarket delivery, fresh food delivery and other scenarios. CATL provides customers with safe, reliable and comprehensive battery solutions.",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=800",
      link: "/solutions/commercial/urban-delivery"
    },
    {
      icon: Truck,
      title: "Heavy-duty Transport Solutions",
      description: "CATL provides strong and clean power to heavy-duty vehicles for meeting the working conditions of mining areas, ports, short-haul transportation in urban areas and construction sites, to satisfy the requirements of industrialization and transport electrification.",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800",
      link: "/solutions/commercial/heavy-duty"
    },
    {
      icon: Trash2,
      title: "Urban Street Cleaning Solutions",
      description: "CATL provides customized solutions that meet the demands of various street cleaning vehicles. CATL's batteries feature great safety, long life and strong environmental adaptability, covering a variety of vehicle types including electric washing vehicles, electric washing and sweeping vehicles, electric garbage trucks.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7f2d?auto=format&fit=crop&q=80&w=800",
      link: "/solutions/commercial/street-cleaning"
    },
    {
      icon: Forklift,
      title: "Construction Machinery",
      description: "The battery product solution provided by CATL for the field of construction machinery are widely adapted to special vehicles such as forklifts and slag trucks. It's easy to adapt to specific working conditions and create a comfortable and safe working environment.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
      link: "/solutions/commercial/construction-machinery"
    },
    {
      icon: Bike,
      title: "Two-wheeled Vehicle Solutions",
      description: "CATL offers green, intelligent and safe battery solutions for two-wheeled vehicles which can be applied to multiple scenarios such as commuting, food delivery, express delivery, etc. The rechargeable and replaceable batteries make your travel experience easy and seamless.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7f2d?auto=format&fit=crop&q=80&w=800",
      link: "/solutions/commercial/two-wheeled"
    },
    {
      icon: Ship,
      title: "Vessel Solutions",
      description: "CATL provides safe, reliable, green and environmental friendly solutions for vessel electrification, assisting in the construction of water eco-civilization. CATL products have successfully passed the latest testing guidelines of the China Classification Society (CCS).",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=800",
      link: "/solutions/commercial/vessel"
    },
    {
      icon: Plane,
      title: "Special Vehicle Solutions",
      description: "CATL provides customized product solutions for special vehicles which can be easily adapted to specific working conditions, thereby improving economic benefits, reducing environmental pollution and creating a comfortable and safe working environment.",
      image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?auto=format&fit=crop&q=80&w=800",
      link: "/solutions/commercial/special-vehicle"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        title="Commercial Application Solutions - Nexus Energy"
        description="Comprehensive commercial battery solutions for electric vehicles, heavy-duty transport, urban delivery, and specialized applications. Earn more money with each mile."
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/solutions" className="hover:text-blue-600 transition-colors">Solution</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 font-medium">Commercial Application</span>
          </nav>

          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Commercial Application Solutions
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-blue-600 font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Earn more money with each mile
            </motion.p>
          </div>
        </div>
      </section>

      {/* Five Advantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Five Advantages</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <advantage.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{advantage.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="space-y-20">
            {solutions.map((solution, index) => (
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
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">{solution.description}</p>
                  <Link
                    to={solution.link}
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Learn More
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Commercial Fleet?</h2>
            <p className="text-xl mb-8 opacity-90">Discover how our battery solutions can increase efficiency and reduce costs</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Get Started Today
              </Link>
              <Link
                to="/technology"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
              >
                Learn About Our Technology
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Commercial;