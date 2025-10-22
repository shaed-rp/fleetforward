import React from 'react';
import { stats } from '../data/stats';
import StatsGrid from './StatsGrid';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative py-24 md:py-40 overflow-hidden">
      {/* Apple-style background */}
      <div className="absolute inset-0 bg-gradient-to-br from-apple-gray-1 via-white to-apple-gray-2 dark:from-apple-gray-11 dark:via-apple-gray-10 dark:to-apple-gray-9"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-apple-blue/5 via-transparent to-apple-green/5"></div>
      
      <div className="relative container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/60 dark:bg-apple-gray-10/60 backdrop-blur-xl border border-apple-gray-3/50 dark:border-apple-gray-8/50 rounded-full text-sm font-medium shadow-lg">
            <span className="w-3 h-3 bg-apple-green rounded-full animate-pulse"></span>
            <span className="text-apple-gray-11 dark:text-apple-gray-1">Fleet Forward Conference 2025 • October 21-23</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-bold leading-tight text-apple-gray-11 dark:text-apple-gray-1 font-apple">
            The Rise of{' '}
            <span className="bg-gradient-to-r from-apple-blue to-apple-green bg-clip-text text-transparent">
              Chinese Automakers
            </span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-apple-gray-7 dark:text-apple-gray-4 max-w-4xl mx-auto leading-relaxed font-apple">
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
