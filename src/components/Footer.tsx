import { Link } from "react-router-dom";
import { Mail, Phone, User, Home, Info, Briefcase, MessageSquare } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-2">
                <img src="/nexuslogo-.png" alt="Nexus Energy Solutions Logo" className="h-12" />
                <div>
                  <h2 className="text-xl font-bold text-white">Nexus Energy</h2>
                  <p className="text-sm text-slate-400">Solutions</p>
                </div>
              </div>
            </div>
            <p className="text-slate-300 mb-6">
              Powering the future with innovative energy storage solutions. We deliver cutting-edge battery systems that transform how businesses manage and store energy.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[

                { name: "Home", url: "/", icon: Home },
                { name: "About Us", url: "/about", icon: Info },
                { name: "Services", url: "/services", icon: Briefcase },
                { name: "Customers", url: "/customers", icon: User },
                { name: "Contact", url: "/contact", icon: Mail },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.url}
                    className="flex items-center text-slate-300 hover:text-slate-100 transition-colors duration-300"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    <link.icon className="w-4 h-4 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-slate-300">
                <Home className="w-5 h-5 mr-3 mt-1 text-blue-500" />
                
                <a
                  href="https://maps.google.com/?q=508+Rosa+Bella+Towers+Waghbil+Ghodbunder+Road+Thane+West+Mumbai+400815"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-100 transition-colors duration-300"
                >
                  508, Rosa Bella Towers, Waghbil, Thane West, Mumbai - 400815
                </a>
              </li>
              <li className="flex items-center text-slate-300">
                <Phone className="w-5 h-5 mr-3 text-blue-500" />
                <span>+91 6280 602 341</span>
              </li>
              <li className="flex items-center text-slate-300">
                <Phone className="w-5 h-5 mr-3 text-blue-500" />
                <span>+91 9650661636</span>
              </li>
              <li className="flex items-center text-slate-300">
                <Mail className="w-5 h-5 mr-3 text-blue-500" />
                <a
                  href="mailto:sales@nexusenergy.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-100 transition-colors duration-300"
                >
                  sales@nexusenergy.in
                </a>
              </li>
              <li className="flex items-center text-slate-300">
                <Mail className="w-5 h-5 mr-3 text-blue-500" />
                <a
                  href="mailto:info@nexusenergy.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-100 transition-colors duration-300"
                >
                  info@nexusenergy.in
                </a>
              </li>
              <li className="flex items-center text-slate-300">
                <MessageSquare className="w-5 h-5 mr-3 text-blue-500" />
                <a 
                  href={`https://wa.me/916280602341`}
                  className="hover:text-slate-100 transition-colors duration-300"
                >
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Battery Energy Storage Systems",
                "Solar Energy Solutions", 
                "Grid Integration Services",
                "Energy Management Systems",
                "Maintenance & Support",
                "Custom Energy Solutions"
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-slate-300 hover:text-slate-100 transition-colors duration-300 block"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">&copy; 2025 Nexus Energy Solutions. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="text-slate-400 hover:text-slate-200 text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#terms" className="text-slate-400 hover:text-slate-200 text-sm transition-colors duration-300">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
