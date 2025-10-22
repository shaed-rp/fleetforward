import React from 'react';
import MobileMenu from './MobileMenu';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-primary-navy/95 backdrop-blur-2xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg">
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-blue/20 to-success-green/20 flex items-center justify-center animate-float shadow-lg">
              <span className="text-3xl" role="img" aria-label="Electric Vehicle">⚡</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-primary-navy dark:text-gray-50 font-display">
                Chinese EV Insights
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Fleet Forward Conference 2025</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-8">
              <a href="#overview" className="text-gray-700 dark:text-gray-300 hover:text-accent-blue transition-premium font-medium">Overview</a>
              <a href="#insights" className="text-gray-700 dark:text-gray-300 hover:text-accent-blue transition-premium font-medium">Insights</a>
              <a href="#speakers" className="text-gray-700 dark:text-gray-300 hover:text-accent-blue transition-premium font-medium">Speakers</a>
              <a href="#schedule" className="text-gray-700 dark:text-gray-300 hover:text-accent-blue transition-premium font-medium">Schedule</a>
            </nav>
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
