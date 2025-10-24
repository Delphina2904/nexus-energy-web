import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, Calendar } from "lucide-react";
import { HoverImageEffect } from "@/components/custom/HoverImageEffect";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Helmet } from "react-helmet-async";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Solutions", path: "/solutions" },
  { name: "Technology", path: "/technology" },
  { name: "Application", path: "/application" },
  // { name: "Customers", path: "/customers" },

  // { name: "Team", path: "/team" },
  { name: "Contact", path: "/contact" },
];

type NavbarProps = {
  title?: string;
  description?: string;
};

export const Navbar = ({
  title = "Nexus Energy - Advanced Battery Storage Solutions",
  description = "Leading provider of advanced battery storage solutions for residential, commercial, and industrial applications. Transform your energy future with our cutting-edge technology.",
}: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Check if we're on the home page
      const isHomePage = location.pathname === "/";

      if (isHomePage) {
        // On home page, check if we've scrolled past the hero section (3D model)
        // Hero section is typically 100vh, so we check if we've scrolled past that
        const heroHeight = window.innerHeight;
        setScrolled(window.scrollY > heroHeight - 100); // Start transition 100px before leaving hero
      } else {
        // On other pages, use the original behavior
        setScrolled(window.scrollY > 20);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Also trigger on location change to reset state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const openWhatsAppBooking = () => {
    const message =
      "Hello! I'd like to book a 15-minute free consultation call. Please let me know your available time slots. Thank you!";
    const phoneNumber = "918104796542";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  // Create page-specific metadata based on current path
  const getPageMetadata = () => {
    const path = location.pathname;
    let pageTitle = title;
    let pageDescription = description;
    let pageKeywords =
      "AI Agents, web development, digital solutions, business transformation";

    switch (path) {
      case "/solutions":
        pageTitle =
          "Solutions - Nexus Energy | Advanced Battery Storage Solutions";
        pageDescription =
          "Explore our comprehensive range of battery storage solutions including residential systems, commercial installations, and industrial energy storage";
        pageKeywords =
          "battery storage, energy solutions, residential batteries, commercial energy storage, industrial power systems";
        break;
      case "/portfolio":
        pageTitle = "Portfolio - Nexus Energy | Our Projects & Case Studies";
        pageDescription =
          "View our portfolio of successful battery storage installations and energy solutions delivered to residential and commercial clients";
        pageKeywords =
          "portfolio, projects, case studies, battery installations, energy projects, storage solutions";
        break;
      case "/about":
        pageTitle = "About Us - Nexus Energy | Our Story & Values";
        pageDescription =
          "Learn about our team of energy experts, mission, values and our journey to becoming a leading battery storage solutions provider";
        pageKeywords =
          "about us, company story, mission, values, team, energy company";
        break;
      case "/contact":
        pageTitle = "Contact Us - Nexus Energy | Get in Touch";
        pageDescription =
          "Contact our team for inquiries, quotes or to discuss your energy storage needs. Get expert consultation for your project.";
        pageKeywords =
          "contact, support, inquiry, consultation, energy consultation, project discussion";
        break;
      default:
        // Home page or fallback
        pageTitle = "Nexus Energy | Advanced Battery Storage Solutions";
        pageDescription =
          "Leading provider of advanced battery storage solutions for residential, commercial, and industrial applications. Transform your energy future with our cutting-edge technology.";
        pageKeywords =
          "battery storage, energy solutions, renewable energy, power systems, energy independence";
    }

    return { pageTitle, pageDescription, pageKeywords };
  };

  const { pageTitle, pageDescription, pageKeywords } = getPageMetadata();

  // Create structured data for organization
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nexus Energy",
    url: "https://nexusenergy.com",
    logo: "https://nexusenergy.com/nexuslogo.png",
    description: "Leading provider of advanced battery storage solutions",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+918104796542",
      contactType: "customer service",
      email: "deonmenezescodes@gmail.com",
    },
    sameAs: [
      "https://www.linkedin.com/company/nexusenergy",
      "https://www.instagram.com/nexusenergy",
    ],
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
        <link
          rel="canonical"
          href={`https://nexusenergy.com${location.pathname}`}
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://nexusenergy.com${location.pathname}`}
        />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta
          property="og:image"
          content="https://nexusenergy.com/nexuslogo-.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://nexusenergy.com${location.pathname}`}
        />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta
          property="twitter:image"
          content="https://nexusenergy.com/nexuslogo-.png"
        />

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
        style={{ position: "fixed" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
          location.pathname === "/" && !scrolled
            ? "py-4 bg-transparent"
            : "py-4 bg-white opacity-70 shadow-sm border-b border-gray-200"
        )}
        role="banner"
      >
        <nav
          className="container mx-auto px-4 flex items-center justify-between max-w-7xl"
          role="navigation"
          aria-label="Main Navigation"
        >
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label="Nexus Energy Homepage"
          >
            {/* Mobile view: Show Nexus Energy logo only */}
            {/* <img
              src="/nexuslogo.png"
              alt="Nexus Energy Logo"
              className="h-10 md:hidden"
              width="40"
              height="40"
            /> */}
            {/* Desktop view: Show Nexus Energy logo and text */}
            <span className="hidden md:flex items-center gap-3">
              {/* <img
                src="/nexuslogo.png"
                alt="Nexus Energy Logo"
                className="h-8"
                width="32"
                height="32"
              /> */}
              <span
                className={cn(
                  "text-xl font-semibold transition-colors duration-300",
                  scrolled ? "text-gray-900" : location.pathname === '/' ? "text-white" : "text-gray-900"
                )}
              >
                Nexus Energy
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-10" role="menubar">
            {navItems.map((item) => (
              <li key={item.name} role="none">
                <Link
                  to={item.path}
                  className={cn(
                    "text-sm font-normal transition-colors duration-300 hover:text-blue-600 relative py-2",
                    location.pathname === item.path
                      ? scrolled
                        ? "text-blue-600 font-medium"
                        : "text-blue-400 font-medium"
                      : scrolled
                      ? "text-gray-900 hover:text-gray-900"
                      : location.pathname === '/'
                      ? "text-gray-100 hover:text-gray-600"
                      : "text-gray-900 hover:text-gray-600"
                  )}
                  role="menuitem"
                  aria-current={
                    location.pathname === item.path ? "page" : undefined
                  }
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <Button
              asChild
              className={cn(
                "transition-all duration-300 px-6 py-2 text-sm font-medium rounded-full",
                scrolled
                  ? "bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white"
                  : "bg-gradient-to-r from-green-500/90 to-blue-600/90 hover:from-green-600 hover:to-blue-700 text-white backdrop-blur-sm"
              )}
              aria-label="Get in touch with us"
            >
              <Link to="/contact">Get Contact</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "md:hidden transition-colors duration-300 p-2",
                  scrolled
                    ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    : "text-white hover:text-gray-200 hover:bg-white/10"
                )}
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-white">
              <nav
                className="flex flex-col h-full pt-6"
                aria-label="Mobile Navigation"
              >
                <Link
                  to="/"
                  className="flex items-center gap-3 pb-6 border-b border-gray-200"
                  aria-label="Nexus Energy Homepage"
                >
                  <img
                    src="/nexuslogo.png"
                    alt="Nexus Energy Logo"
                    className="h-8"
                    width="32"
                    height="32"
                  />
                  <span className="text-lg font-semibold text-gray-900">Nexus Energy</span>
                </Link>
                <div className="flex flex-col gap-1 py-6" role="menu">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={cn(
                        "text-base py-3 px-4 rounded-md transition-colors",
                        location.pathname === item.path
                          ? "bg-blue-50 text-blue-600 font-medium"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      )}
                      role="menuitem"
                      aria-current={
                        location.pathname === item.path ? "page" : undefined
                      }
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="mt-auto pb-6">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 text-sm font-medium rounded-full transition-all duration-300"
                    aria-label="Get in touch with us"
                  >
                    <Link to="/contact">Get Contact</Link>
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
