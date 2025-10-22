import React from 'react';
import TypewriterText from './TypewriterText';
import AnimatedStats from './AnimatedStats';
import { useParallax } from '../hooks/useParallax';

const HeroSection: React.FC = () => {
  const parallaxOffset = useParallax(0.3);

  // Enhanced statistics with animated values
  const animatedStats = [
    { value: 70, label: 'Global EV Production', suffix: '%' },
    { value: 18, label: 'Development Time', suffix: 'mo' },
    { value: 100, label: 'U.S. Tariff Rate', suffix: '%' },
    { value: 85, label: 'Thailand Market Share', suffix: '%' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 hero-gradient dark:hero-gradient hero-gradient-light"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/10 via-transparent to-success-green/10"></div>
      
      {/* Floating background elements with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-accent-blue/20 rounded-full blur-3xl floating-element"
          style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
        ></div>
        <div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-success-green/20 rounded-full blur-3xl floating-element-delayed"
          style={{ transform: `translateY(${parallaxOffset * -0.3}px)` }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 w-60 h-60 bg-accent-blue/10 rounded-full blur-2xl floating-element"
          style={{ 
            transform: `translate(-50%, -50%) translateY(${parallaxOffset * 0.2}px)`,
            animationDelay: '1s'
          }}
        ></div>
      </div>
      
      <div className="relative container mx-auto px-8 py-20">
        <div className="max-w-6xl mx-auto text-center space-y-16">
          {/* Premium badge with floating animation */}
          <div 
            className="inline-flex items-center gap-4 px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-2xl border border-gray-200/50 dark:border-gray-700/50 rounded-full shadow-xl floating-element"
            style={{ transform: `translateY(${parallaxOffset * -0.1}px)` }}
          >
            <div className="w-3 h-3 bg-success-green rounded-full animate-pulse"></div>
            <span className="text-gray-900 dark:text-gray-100 font-semibold">Fleet Forward Conference 2025 • October 21-23</span>
          </div>
          
          {/* Hero headline with typewriter effect */}
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight text-primary-navy dark:text-gray-50 font-display">
              <TypewriterText 
                text="The Rise of Chinese Automakers"
                speed={80}
                className="block"
              />
            </h1>
            
            <p 
              className="text-2xl md:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 max-w-5xl mx-auto leading-relaxed font-inter"
              style={{ transform: `translateY(${parallaxOffset * 0.1}px)` }}
            >
              An insider's perspective on how Chinese EV manufacturers are reshaping 
              the global fleet industry—and what North American fleet managers need to know.
            </p>
          </div>

          {/* Premium CTA buttons with floating animation */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 floating-element"
            style={{ transform: `translateY(${parallaxOffset * -0.05}px)` }}
          >
            <button className="premium-button text-lg px-12 py-6">
              Watch Keynote
            </button>
            <button className="px-12 py-6 border-2 border-accent-blue text-accent-blue dark:text-accent-blue-light rounded-2xl font-semibold hover:bg-accent-blue hover:text-white transition-premium">
              Download Report
            </button>
          </div>

          {/* Animated statistics */}
          <AnimatedStats stats={animatedStats} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
