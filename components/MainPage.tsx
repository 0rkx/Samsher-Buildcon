
import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Strengths from './Strengths';
import Works from './Works';
import Clients from './Clients';
import SEOHead from './SEOHead';

const MainPage: React.FC = () => {
  return (
    <>
      <SEOHead path="/" />
      <Hero />
      <Services />
      <Strengths />
      <Works />
      <Clients />
    </>
  );
};

export default MainPage;
