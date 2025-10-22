import React from 'react';
import { stats } from '../data/stats';
import StatsGrid from './StatsGrid';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-primary-navy dark:via-primary-midnight dark:to-gray-800"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/10 via-transparent to-success-green/10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-blue/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-success-green/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative container mx-auto px-8 py-20">
        <div className="max-w-6xl mx-auto text-center space-y-16">
          {/* Premium badge */}
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-2xl border border-gray-200/50 dark:border-gray-700/50 rounded-full shadow-xl">
            <div className="w-3 h-3 bg-success-green rounded-full animate-pulse"></div>
            <span className="text-gray-900 dark:text-gray-100 font-semibold">Fleet Forward Conference 2025 • October 21-23</span>
          </div>
          
          {/* Hero headline */}
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight text-primary-navy dark:text-gray-50 font-display">
              The Rise of{' '}
              <span className="gradient-text">
                Chinese Automakers
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 max-w-5xl mx-auto leading-relaxed font-inter">
              An insider's perspective on how Chinese EV manufacturers are reshaping 
              the global fleet industry—and what North American fleet managers need to know.
            </p>
          </div>

          {/* Premium CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="premium-button text-lg px-12 py-6">
              Watch Keynote
            </button>
            <button className="px-12 py-6 border-2 border-accent-blue text-accent-blue dark:text-accent-blue-light rounded-2xl font-semibold hover:bg-accent-blue hover:text-white transition-premium">
              Download Report
            </button>
          </div>

          <StatsGrid stats={stats} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
