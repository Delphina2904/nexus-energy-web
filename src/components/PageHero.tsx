import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  className?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  breadcrumbs = [{ label: 'Home', path: '/' }],
  className = ''
}) => {
  return (
    <section className={`pt-28 pb-12 bg-white ${className}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={index}>
              {item.path ? (
                <Link 
                  to={item.path} 
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900 font-medium">{item.label}</span>
              )}
              {index < breadcrumbs.length - 1 && (
                <ChevronRight className="h-4 w-4 text-gray-400" />
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Header Content */}
        <div className="max-w-4xl">
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p 
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;