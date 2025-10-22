import React from 'react';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <span className="text-2xl" role="img" aria-label="Car">🚗</span>
            </div>
            <div>
              <h1 className="text-lg font-bold">Chinese EV Insights</h1>
              <p className="text-xs text-gray-400">Fleet Forward 2025</p>
            </div>
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
