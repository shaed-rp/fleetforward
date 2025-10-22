import React from 'react';
import { stats } from '../data/stats';
import StatsGrid from './StatsGrid';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary rounded-full text-sm font-medium">
            Fleet Forward Conference 2025 • October 21-23
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            The Rise of{' '}
            <span className="text-primary">Chinese Automakers</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            An insider's perspective on how Chinese EV manufacturers are reshaping 
            the global fleet industry—and what North American fleet managers need to know.
          </p>

          <StatsGrid stats={stats} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
