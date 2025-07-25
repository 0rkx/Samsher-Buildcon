import React from 'react';
import { SERVICES } from '../constants';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="group flex flex-col items-center cursor-pointer text-center p-4" aria-label={`Learn more about ${service.title}`}>
      <div className="relative h-40 mb-4 flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:scale-105">
        <img 
          src={service.imgSrc} 
          alt={service.title} 
          className="max-h-full w-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:-translate-y-2"
        />
      </div>
      
      <div className="relative w-full h-28 flex flex-col items-center justify-start text-center">
         <h4 className="text-xl font-bold text-gray-900 transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:-translate-y-2">
            {service.title}
         </h4>
        <div className="absolute inset-0 flex items-center justify-center p-2 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
          <p className="text-gray-700 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}

const Services: React.FC = () => {
  return (
    <section id="services" className="scroll-animate bg-[#EDE8DF] pt-8 pb-16 lg:pt-12 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Tools and Tackles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
          {SERVICES.map((service, index) => (
             <ServiceCard service={service} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
