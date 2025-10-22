import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-gray-700/50 bg-gradient-to-t from-gray-900/50 to-transparent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <div className="text-gray-400">
            © 2025 Fleet Forward Conference. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a 
              href="https://www.fleetforwardconference.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 hover:border-primary/40 text-gray-300 hover:text-white transition-all duration-300 hover-lift"
            >
              <span>Conference Website</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">↗</span>
            </a>
            <div className="flex items-center gap-2 text-gray-500">
              <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
              <span>#FleetForward #EVFleets</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
