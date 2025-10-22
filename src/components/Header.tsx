import React from 'react';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center animate-float">
              <span className="text-2xl" role="img" aria-label="Car">🚗</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Chinese EV Insights
              </h1>
              <p className="text-sm text-gray-400 font-medium">Fleet Forward 2025</p>
            </div>
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
