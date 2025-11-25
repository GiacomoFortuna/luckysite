
import React from 'react';
import Hero from './Hero';
import TrustedBy from './TrustedBy';
import PainPoints from './PainPoints';
import Services from './Services';
import WorkProcess from './WorkProcess';
import Portfolio from './Portfolio';
import WhyUs from './WhyUs';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';
import FAQ from './FAQ';

type PageType = 'home' | 'websites' | 'ai-content';

interface HomeProps {
  navigateTo: (page: PageType) => void;
}

const Home: React.FC<HomeProps> = ({ navigateTo }) => {
  return (
    <>
      <Hero />
      <TrustedBy />
      {/* FLOW CHANGE: First identify the problem (PainPoints), then the solution (WhyUs + Services) */}
      <PainPoints />
      <WhyUs />
      <Services navigateTo={navigateTo} />
      <WorkProcess />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Newsletter />
    </>
  );
};

export default Home;
