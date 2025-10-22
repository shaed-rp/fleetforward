import React from 'react';
import { stats } from '../data/stats';
import StatsGrid from './StatsGrid';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative py-20 md:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-secondary/20 to-primary/20 border border-secondary/30 rounded-full text-sm font-medium backdrop-blur-sm">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
            Fleet Forward Conference 2025 • October 21-23
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            The Rise of{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Chinese Automakers
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
