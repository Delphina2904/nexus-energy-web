import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Team from "./pages/Team";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Customers from "./pages/Customers";
import Application from "./pages/Application";
import Technology from "./pages/Technology";
import WebDevelopment from "./pages/services/web-development";
import VRARDevelopment from "./pages/services/vr-ar-development";
import ThreeDDevelopment from "./pages/services/3d-development";
import VideoEditing from "./pages/services/video-editing";
import DesignServices from "./pages/services/design-services";
import DigitalMarketing from "./pages/services/digital-marketing";
import MobileApps from "./pages/services/mobile-apps";
import UIUXDesign from "./pages/services/ui-ux-design";
import LenisSmoothScroll from "./components/LenisSmoothScroll";
import VisionMission from "./pages/VisionMission";
import { Navbar } from "./components/Navbar";
import Solutions from "./pages/solutions/Solutions";
import Commercial from "./pages/solutions/Commercial";
import Drones from "./pages/solutions/Drones";
import EnergyStorage from "./pages/solutions/EnergyStorage";
import Railways from "./pages/solutions/Railways";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
  {/* Global Lenis smooth scroll */}
  <LenisSmoothScroll />
      <BrowserRouter>
        <AnimatePresence mode="wait">
              <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/vision-mission" element={<VisionMission />} />
            <Route path="/team" element={<Team />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/solutions/commercial" element={<Commercial />} />
            <Route path="/solutions/drones" element={<Drones />} />
            <Route path="/solutions/energystorage" element={<EnergyStorage />} />
            <Route path="/solutions/railways" element={<Railways />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/application" element={<Application />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/customers" element={<Customers />} />
            
            {/* Solution Routes */}
            <Route path="/solutions/web-development" element={<WebDevelopment />} />
            <Route path="/solutions/vr-ar-development" element={<VRARDevelopment />} />
            <Route path="/solutions/3d-development" element={<ThreeDDevelopment />} />
            <Route path="/solutions/video-editing" element={<VideoEditing />} />
            <Route path="/solutions/design-services" element={<DesignServices />} />
            <Route path="/solutions/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/solutions/mobile-apps" element={<MobileApps />} />
            <Route path="/solutions/ui-ux-design" element={<UIUXDesign />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        
        {/* Global components available on all pages */}
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;