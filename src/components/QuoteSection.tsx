import React from 'react';

const QuoteSection: React.FC = () => {
  return (
    <section className="relative z-10 bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="relative bg-blue-50 rounded-2xl px-8 py-6 md:px-12 md:py-8 shadow-lg max-w-4xl">
            {/* Top-left quotation marks */}
            <div className="absolute top-4 left-4 text-blue-600 text-2xl font-bold leading-none">
              "
            </div>
            
            {/* Bottom-right quotation marks */}
            <div className="absolute bottom-4 right-4 text-blue-600 text-2xl font-bold leading-none">
              "
            </div>
            
            {/* Quote text */}
            <div className="text-center px-6">
              <p className="text-slate-700 text-lg md:text-xl lg:text-2xl font-medium italic leading-relaxed">
                We don't just build batteries—we architect energy ecosystems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
