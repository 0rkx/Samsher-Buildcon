import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  
  const handleScroll = () => {
    if (window.scrollY < window.innerHeight) {
        setOffsetY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="scroll-animate container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-12 lg:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative h-[400px] lg:h-[550px]">
          <img
            src="/images/glenov-brankovic-DWp5nUqTn6E-unsplash-scaled.jpg"
            alt="Construction site with a crane"
            className="absolute bottom-0 left-0 w-[80%] h-[80%] object-cover rounded-xl shadow-2xl"
          />
          <img
            src="/images/WhatsApp-Image-2024-07-25-at-12.57.21-PM-scaled.jpeg"
            alt="Interior of a building under construction"
            className="absolute top-0 right-0 w-[70%] h-[70%] object-cover rounded-xl shadow-2xl border-8 border-[#EDE8DF]"
            style={{ transform: `translateY(-${offsetY * 0.1}px)` }}
          />
        </div>
        <div className="space-y-6">
          <span className="text-sm font-bold uppercase tracking-wider text-gray-900">
            About Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            What Makes Us Different?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Since 2021, Samsher Buildcon has been delivering <strong className="font-semibold text-gray-900">top-notch</strong> civil and mechanical contracting services. We specialize in site analysis, feasibility studies, preliminary design, and permit/zoning applications. Serving Jharkhand, Bihar, West Bengal, and Odisha, we handle industrial, manufacturing, office, retail, recreational, healthcare, and commercial projects. Partner with us for exceptional construction services and experience <strong className="font-semibold text-gray-900">The Samsher Buildcon difference</strong>. Contact us today to start your project!
          </p>
          <div className="pt-4">
            <h4 className="text-xl font-semibold text-gray-900">Afroz Khan</h4>
            <h5 className="text-md text-gray-500">CEO, Founder</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
