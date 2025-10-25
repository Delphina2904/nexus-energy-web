import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PageHero } from "../components/PageHero";
import { GlowCard } from "../components/GlowCard";
import { Battery, Truck, Building2, Home, Factory } from "lucide-react";

// Helper function to handle image loading errors
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const img = e.target as HTMLImageElement;
  img.src = "/placeholder.svg"; // Fallback to placeholder
};

// Application data with images and details
const applications = [
  {
    id: 1,
    title: "High-Performance EV Battery Systems",
    description: "High-performance battery solutions for electric buses, delivery vehicles, and personal mobility",
    image: "/images/28e28757-0fbd-449b-a75c-0d3edd4dfda7.jpg",
    icon: <Truck className="w-8 h-8" />,
    category: "Transportation",
    features: ["Fast charging capability", "Long cycle life", "Temperature resilient"],
    stats: "99.8% Uptime",
    color: "blue"
  },
  {
    id: 3,
    title: "Industrial Equipment",
    description: "Robust battery solutions for forklifts, stackers, and material handling equipment",
    image: "/images/img1.png",
    icon: <Truck className="w-8 h-8" />,
    category: "Industrial",
    features: ["Heavy-duty design", "Quick swap capability", "IoT monitoring"],
    stats: "40% Cost Reduction",
    color: "orange"
  },
    {
    id: 7,
    title: "Commercial EVs – Electric Bus",
    description: "100% electric buses designed to reduce operational costs by 40% while promoting sustainable industrial transport",
    image: "/images/img2.jpeg",
    icon: <Truck className="w-8 h-8" />,
    category: "Industrial",
    features: ["Heavy-duty design", "Quick swap capability", "IoT monitoring"],
    stats: "40% Cost Reduction",
    color: "orange"
  },
  {
    id: 4,
    title: "Commercial Vehicles",
    description: "Reliable power systems for commercial trucks, tempo, and delivery fleets",
    image: "/images/58ba96ef-419a-4c7f-a912-0cb733dd1428.jpg",
    icon: <Factory className="w-8 h-8" />,
    category: "Commercial",
    features: ["High capacity", "Fast charging", "Fleet management"],
    stats: "80% Efficiency",
    color: "purple"
  },
  {
    id: 6,
    title: "Electric Carts",
    description: "Compact and efficient battery solutions for e-carts and light electric vehicles",
    image: "/images/95d59055-158c-494c-9b26-79a3d2e83544.jpg",
    icon: <Battery className="w-8 h-8" />,
    category: "Light Vehicles",
    features: ["Compact design", "Easy maintenance", "Cost effective"],
    stats: "2000+ Cycles",
    color: "green"
  },
  {
    id: 8,
    title: "Residential Solutions",
    description: "Home energy storage systems for backup power and solar integration",
    image: "/images/c085a098-c2c1-47b1-8445-ed1e2bed1895.jpg",
    icon: <Home className="w-8 h-8" />,
    category: "Residential",
    features: ["Smart monitoring", "Silent operation", "Space efficient"],
    stats: "10+ Years Life",
    color: "purple"
  },
  {
    id: 9,
    title: "Commercial Buildings",
    description: "Building energy management and backup power solutions for commercial spaces",
    image: "/images/c12777ab-8d37-48f7-9871-a1aa69edfe83.jpg",
    icon: <Building2 className="w-8 h-8" />,
    category: "Commercial",
    features: ["Load management", "Emergency backup", "Energy optimization"],
    stats: "30% Energy Savings",
    color: "orange"
  },
    {
    id: 8,
    title: "Smart Electric Mobility",
    description: "Robust battery solutions for forklifts, stackers, and material handling equipment",
    image: "/images/img3.jpeg",
    icon: <Truck className="w-8 h-8" />,
    category: "Industrial",
    features: ["Heavy-duty design", "Quick swap capability", "IoT monitoring"],
    stats: "40% Cost Reduction",
    color: "orange"
  },
];


const Application = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredApplications = selectedCategory === "All" 
    ? applications 
    : applications.filter(app => app.category === selectedCategory);

  const getGlowColor = (color: string) => {
    const colorMap = {
      blue: "blue",
      green: "green", 
      orange: "orange",
      purple: "purple",
      red: "red"
    };
    return colorMap[color] || "blue";
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <PageHero
        title="Advanced Battery Applications"
        subtitle="From electric mobility to industrial automation, our cutting-edge battery storage solutions drive innovation across multiple industries and applications."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Applications' }
        ]}
      />

      {/* Applications Grid */}
      <section className="nexus-section">
        <div className="nexus-container">
          <div className="nexus-grid-3">
            {filteredApplications.map((application, index) => (
              <GlowCard
                key={application.id}
                glowColor={getGlowColor(application.color)}
                customSize={true}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full"
              >
                <div className="h-full flex flex-col">
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={application.image}
                      alt={`${application.title} - ${application.description}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      onError={handleImageError}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Category Badge */}
                    {/* <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-800">
                      {application.category}
                    </div> */}
                    
                    {/* Stats Badge */}
                    <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {application.stats}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg bg-${application.color}-100 text-${application.color}-600`}>
                        {application.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {application.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                      {application.description}
                    </p>

                    {/* Features */}
                    {/* <div className="space-y-2 mb-4">
                      {application.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div> */}

                    {/* Learn More Button */}
                    {/* <button className="mt-auto w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                      Learn More
                    </button> */}
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Power Your Application?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our experts help you find the perfect battery solution for your specific needs.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
              Get Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              Download Brochure
            </button>
          </div> */}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Application;