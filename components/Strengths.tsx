import React from 'react';
import Accordion from './Accordion';
import { MANPOWER_ACCORDION_ITEMS, DOCUMENT_STRENGTHS } from '../constants';

const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" />
        <path d="M17.3333 8.5L10.4166 15.4167L7.5 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const Strengths: React.FC = () => {
  return (
    <section className="scroll-animate py-16 lg:py-24 container mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      {/* Manpower Strength Section */}
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Manpower Strength</h2>
            <p className="text-lg text-gray-700">
              At <strong className="font-semibold text-gray-900">Samsher Buildcon</strong>, we believe that the foundation of our success is our highly skilled and dedicated workforce. Our team is comprised of professionals who bring a wealth of experience and expertise to every project, ensuring <strong className="font-semibold text-gray-900">exceptional results</strong>.
            </p>
          </div>
          <div>
            <Accordion items={MANPOWER_ACCORDION_ITEMS} />
          </div>
        </div>
      </div>
      
      {/* Certified and Compliant Section */}
      <div className="bg-[#FBF9F6] rounded-2xl p-8 lg:p-12 shadow-md border border-[#EBE4DB]">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#022d42]">Certified and Compliant</h2>
           <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            We are fully registered and compliant with all necessary regulations, ensuring every project is built on a foundation of trust and legality.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOCUMENT_STRENGTHS.map((item, index) => (
            <div 
              key={index} 
              className="group flex items-center space-x-4 p-4 rounded-lg bg-[#F5F2EE] hover:bg-white hover:shadow-sm transition-all duration-300"
            >
              <CheckCircleIcon className="w-6 h-6 text-amber-600 flex-shrink-0" />
              <h4 className="text-md font-semibold text-slate-700">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
