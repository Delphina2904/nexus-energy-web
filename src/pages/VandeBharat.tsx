// This file has been removed as it is not referenced in routes or imports.
import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import trainImage from "../assets/vande.png";
import batteryImage from "../assets/62.jpg";

// Export the main VandeBharat content without Navbar/Footer for embedding
export const VandeBharatContent = memo(() => {
  return (
    <motion.div 
      className="min-h-screen bg-black overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
    </motion.div>
  );
});

VandeBharatContent.displayName = 'VandeBharatContent';

const VandeBharat = () => {
  return (
    <>
      <Navbar />
      <VandeBharatContent />
      <Footer />
    </>
  );
};

export default VandeBharat;
