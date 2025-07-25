import React from 'react';
import { CLIENTS } from '../constants';
import { Client } from '../types';

const ClientLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 21V10.0833C4 9.53694 4.18128 9.01252 4.50934 8.61115L11.2093 0.611152C11.6441 0.0858179 12.3559 0.0858179 12.7907 0.611152L19.4907 8.61115C19.8187 9.01252 20 9.53694 20 10.0833V21H4Z" />
    <path d="M9 21V15C9 13.8954 9.89543 13 11 13H13C14.1046 13 15 13.8954 15 15V21" />
  </svg>
);

const MarqueeRow: React.FC<{
  clients: Client[];
  direction: 'left' | 'right';
}> = ({ clients, direction }) => {
  const animationClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';
  // Duplicate clients for a seamless loop effect
  const extendedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <div className="flex w-max items-center group-hover:[animation-play-state:paused]">
      <div className={`flex w-max ${animationClass}`}>
        {extendedClients.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="flex-shrink-0 w-64 h-32 mx-4 flex items-center justify-center bg-white p-6 rounded-lg shadow-sm border border-gray-200/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            {client.logo ? (
              <img src={client.logo} alt={`${client.name} logo`} className="max-h-20 w-auto object-contain" />
            ) : (
              <div className="text-center space-y-2">
                <ClientLogo className="h-8 w-8 text-amber-600 mx-auto" />
                <h3 className="text-md font-semibold text-gray-800 leading-tight">
                  {client.name}
                </h3>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Clients: React.FC = () => {
  // Split clients into two arrays for the two marquee rows
  const midPoint = Math.ceil(CLIENTS.length / 2);
  const clientsRow1 = CLIENTS.slice(0, midPoint);
  const clientsRow2 = CLIENTS.slice(midPoint);

  return (
    <>
      <style>{`
        @keyframes marqueeLeft {
          from { transform: translateX(0%); }
          to { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0%); }
        }
        .animate-marquee-left {
          animation: marqueeLeft 60s linear infinite;
        }
        .animate-marquee-right {
          animation: marqueeRight 60s linear infinite;
        }
      `}</style>
      <section id="clients" className="scroll-animate py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Our Valued Clients</h2>
            <p className="mt-4 text-lg text-gray-700">
              We are proud to have collaborated with a diverse range of industry leaders and esteemed organizations, building strong partnerships founded on trust and exceptional results.
            </p>
          </div>

          <div className="relative flex flex-col gap-8 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] group overflow-hidden">
            <MarqueeRow clients={clientsRow1} direction="left" />
            <MarqueeRow clients={clientsRow2} direction="right" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
