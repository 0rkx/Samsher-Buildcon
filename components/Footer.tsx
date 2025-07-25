import React from 'react';
import { CONTACT_INFO } from '../constants';

const PhoneIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.759a11.024 11.024 0 00.416 2.599c1.558 3.42 4.045 5.908 7.465 7.465a11.023 11.023 0 002.599.416l.759-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
);

const MailIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
);

const HomeIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
);


const Footer: React.FC = () => {
  return (
    <footer id="contact" className="scroll-animate bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Find Us</h2>
            <div className="space-y-4">
              <a href={`tel:${CONTACT_INFO.phone1}`} className="flex items-center space-x-3 group">
                <PhoneIcon className="w-5 h-5 text-amber-500" />
                <span className="group-hover:text-amber-500 transition-colors">{CONTACT_INFO.phone1}</span>
              </a>
              <a href={`tel:${CONTACT_INFO.phone2}`} className="flex items-center space-x-3 group">
                <PhoneIcon className="w-5 h-5 text-amber-500" />
                <span className="group-hover:text-amber-500 transition-colors">{CONTACT_INFO.phone2}</span>
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center space-x-3 group">
                <MailIcon className="w-5 h-5 text-amber-500" />
                <span className="group-hover:text-amber-500 transition-colors">{CONTACT_INFO.email}</span>
              </a>
              <div className="flex items-start space-x-3">
                <HomeIcon className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </div>
            </div>
            <div className="pt-8">
              <img 
                src="/buildcon header.svg" 
                alt="Samsher Buildcon Logo" 
                className="w-60"
              />
            </div>
          </div>
          <div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe
                src={CONTACT_INFO.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Samsher Buildcon Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
          <p>©{new Date().getFullYear()} Samsher Buildcon Copyright All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
