import React, { useEffect } from 'react';

interface SmoothScrollWrapperProps {
  children: React.ReactNode;
}

const SmoothScrollWrapper: React.FC<SmoothScrollWrapperProps> = ({ children }) => {
  useEffect(() => {
    // Add CSS for smooth scrolling optimization
    const style = document.createElement('style');
    style.textContent = `
      * {
        scroll-behavior: smooth;
      }
      
      html {
        scroll-padding-top: 80px; /* Account for fixed navbar */
      }
      
      body {
        scroll-behavior: smooth;
        overscroll-behavior: none; /* Prevents bounce effect */
      }
      
      /* Optimize scrolling performance */
      .scroll-container {
        will-change: scroll-position;
        transform: translateZ(0);
        backface-visibility: hidden;
        perspective: 1000px;
      }
      
      /* Optimize sections for smooth scrolling */
      section, div[class*="relative z-10"] {
        will-change: auto;
        transform: translateZ(0);
        backface-visibility: hidden;
      }
      
      /* Prevent layout shifts during scroll */
      img, video {
        will-change: auto;
        transform: translateZ(0);
        backface-visibility: hidden;
      }
      
      /* Smooth scrolling for webkit browsers */
      @supports (-webkit-overflow-scrolling: touch) {
        body {
          -webkit-overflow-scrolling: touch;
        }
      }
      
      /* Optimize text rendering during scroll */
      h1, h2, h3, h4, h5, h6, p {
        text-rendering: optimizeSpeed;
        will-change: auto;
      }
      
      /* Reduce motion for users who prefer it */
      @media (prefers-reduced-motion: reduce) {
        * {
          scroll-behavior: auto !important;
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `;
    
    document.head.appendChild(style);
    
    // Enhanced scroll performance with throttling
    let ticking = false;
    
    const updateScrollPosition = () => {
      // Update any scroll-dependent logic here
      ticking = false;
    };
    
    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    };
    
    const handleScroll = () => {
      requestTick();
    };
    
    // Use passive event listeners for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      document.head.removeChild(style);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="scroll-container">
      {children}
    </div>
  );
};

export default SmoothScrollWrapper;