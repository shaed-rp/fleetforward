import React from 'react';
import MobileMenu from './MobileMenu';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-apple-gray-11/80 backdrop-blur-xl border-b border-apple-gray-3/50 dark:border-apple-gray-8/50">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-apple-blue/20 to-apple-green/20 flex items-center justify-center animate-bounce-subtle">
              <span className="text-3xl" role="img" aria-label="Car">🚗</span>
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-apple-gray-11 dark:text-apple-gray-1 font-apple">
                Chinese EV Insights
              </h1>
              <p className="text-sm text-apple-gray-6 dark:text-apple-gray-5 font-medium">Fleet Forward 2025</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
