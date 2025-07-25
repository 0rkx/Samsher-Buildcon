import React, { useState, useMemo } from 'react';
import { WORKS } from '../constants';
import { Work } from '../types';

const WorkCard: React.FC<{ work: Work }> = ({ work }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white transition-all duration-500 hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={work.imgSrc} 
          alt={work.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-amber-600 text-white text-sm font-medium rounded-full">
            {work.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
          {work.title}
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          {work.description}
        </p>
      </div>
    </div>
  );
};

const Works: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Industrial');

  const categories = useMemo(() => {
    const allCategories = WORKS.map(work => work.category);
    return ['All', ...Array.from(new Set(allCategories))];
  }, []);

  const filteredWorks = useMemo(() => {
    if (activeCategory === 'All') {
      return WORKS;
    }
    return WORKS.filter(work => work.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="works" className="scroll-animate py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Our Works</h2>
          <p className="mt-4 text-lg text-gray-700">
            Explore our diverse portfolio of successful projects across various sectors, 
            showcasing our expertise and commitment to excellence.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 font-medium rounded-full text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 ${
                activeCategory === category
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-amber-200 hover:text-amber-800'
              }`}>
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work, index) => (
            <WorkCard key={index} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;