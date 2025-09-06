import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, Calendar } from "lucide-react";
import { HoverImageEffect } from "@/components/custom/HoverImageEffect";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Helmet } from "react-helmet-async";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Customers", path: "/customers" },
  
  // { name: "Team", path: "/team" },
  { name: "Contact", path: "/contact" },
];

type NavbarProps = {
  title?: string;
  description?: string;
};

export const Navbar = ({ title = "Nexus Energy - Advanced Battery Storage Solutions", description = "Leading provider of advanced battery storage solutions for residential, commercial, and industrial applications. Transform your energy future with our cutting-edge technology." }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openWhatsAppBooking = () => {
    const message = "Hello! I'd like to book a 15-minute free consultation call. Please let me know your available time slots. Thank you!";
    const phoneNumber = "918104796542";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Create page-specific metadata based on current path
  const getPageMetadata = () => {
    const path = location.pathname;
    let pageTitle = title;
    let pageDescription = description;
    let pageKeywords = "AI Agents, web development, digital solutions, business transformation";
    
    switch(path) {
      case "/services":
        pageTitle = "Services - Nexus Energy | Advanced Battery Storage Solutions";
        pageDescription = "Explore our comprehensive range of battery storage solutions including residential systems, commercial installations, and industrial energy storage";
        pageKeywords = "battery storage, energy solutions, residential batteries, commercial energy storage, industrial power systems";
        break;
      case "/portfolio":
        pageTitle = "Portfolio - Nexus Energy | Our Projects & Case Studies";
        pageDescription = "View our portfolio of successful battery storage installations and energy solutions delivered to residential and commercial clients";
        pageKeywords = "portfolio, projects, case studies, battery installations, energy projects, storage solutions";
        break;
      case "/about":
        pageTitle = "About Us - Nexus Energy | Our Story & Values";
        pageDescription = "Learn about our team of energy experts, mission, values and our journey to becoming a leading battery storage solutions provider";
        pageKeywords = "about us, company story, mission, values, team, energy company";
        break;
      case "/contact":
        pageTitle = "Contact Us - Nexus Energy | Get in Touch";
        pageDescription = "Contact our team for inquiries, quotes or to discuss your energy storage needs. Get expert consultation for your project.";
        pageKeywords = "contact, support, inquiry, consultation, energy consultation, project discussion";
        break;
      default:
        // Home page or fallback
        pageTitle = "Nexus Energy | Advanced Battery Storage Solutions";
        pageDescription = "Leading provider of advanced battery storage solutions for residential, commercial, and industrial applications. Transform your energy future with our cutting-edge technology.";
        pageKeywords = "battery storage, energy solutions, renewable energy, power systems, energy independence";
    }
    
    return { pageTitle, pageDescription, pageKeywords };
  };
  
  const { pageTitle, pageDescription, pageKeywords } = getPageMetadata();

  // Create structured data for organization
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nexus Energy",
    "url": "https://nexusenergy.com",
    "logo": "https://nexusenergy.com/nexuslogo.png",
    "description": "Leading provider of advanced battery storage solutions",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+918104796542",
      "contactType": "customer service",
      "email": "deonmenezescodes@gmail.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/nexusenergy",
      "https://www.instagram.com/nexusenergy"
    ]
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://nexusenergy.com${location.pathname}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://nexusenergy.com${location.pathname}`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="https://nexusenergy.com/nexuslogo-.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://nexusenergy.com${location.pathname}`} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content="https://nexusenergy.com/nexuslogo-.png" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="Virelity.com" />
        <meta name="revisit-after" content="7 days" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-black",
          scrolled
            ? "py-2 shadow-md border-b border-blue-500/20"
            : "py-4"
        )}
        role="banner"
      >
        <nav className="container flex items-center justify-between" role="navigation" aria-label="Main Navigation">
          <Link
            to="/"
            className="flex items-center gap-2 font-bold"
            aria-label="Nexus Energy Homepage"
          >
            {/* Mobile view: Show Nexus Energy logo only */}
            <img src="/nexuslogo.png" alt="Nexus Energy Logo" className="h-12 md:hidden" width="48" height="48" />
            {/* Desktop view: Show Nexus Energy logo and text */}
            <span className="hidden md:flex items-center gap-2">
              <img src="/nexuslogo.png" alt="Nexus Energy Logo" className="h-10" width="40" height="40" />
              <span className="text-white text-2xl font-bold tracking-wide">Nexus Energy</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8" role="menubar">
            {navItems.map((item) => (
              <li key={item.name} role="none">
                <Link
                  to={item.path}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-blue-400 relative animated-underline",
                    location.pathname === item.path
                      ? "text-blue-500"
                      : "text-muted-foreground"
                  )}
                  role="menuitem"
                  aria-current={location.pathname === item.path ? "page" : undefined}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <Button 
              asChild
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/50 rounded-full px-6 py-2 font-medium"
              aria-label="Get in touch with us"
            >
              <Link to="/contact">
                Get Contact
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col h-full" aria-label="Mobile Navigation">
                <Link to="/" className="flex items-center gap-2 font-bold py-4 border-b" aria-label="Nexus Energy Homepage">
                  <img src="/nexuslogo.png" alt="Nexus Energy Logo" className="h-6" width="24" height="24" />
                  <span className="text-lg font-bold">Nexus Energy</span>
                </Link>
                <div className="flex flex-col gap-3 py-4" role="menu">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={cn(
                        "text-lg py-2 px-4 rounded-lg transition-colors",
                        location.pathname === item.path
                          ? "bg-blue-500/20 text-blue-500 font-medium"
                          : "text-muted-foreground hover:bg-muted"
                      )}
                      role="menuitem"
                      aria-current={location.pathname === item.path ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-auto">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full px-6 py-2 font-medium shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                    aria-label="Get in touch with us"
                  >
                    <Link to="/contact">
                      Get Contact
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </header>
    </>
  );
};
