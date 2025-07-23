
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyItWorks } from './components/WhyItWorks';
import { ServiceDetails } from './components/ServiceDetails';
import { HowToOrder } from './components/HowToOrder';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { HotNewBooks } from './components/HotNewBooks';

const App: React.FC = () => {
  return (
    <div className="bg-[#222327] text-gray-300 min-h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[#222327] bg-[linear-gradient(to_right,#c5c5c60a_1px,transparent_1px),linear-gradient(to_bottom,#c5c5c60a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-[#5368f5] opacity-20 blur-[100px]"></div>
      </div>
      <Header />
      <main>
        <Hero />
        <HotNewBooks />
        <WhyItWorks />
        <ServiceDetails />
        <HowToOrder />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;