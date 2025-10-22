import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div>
            © 2025 Fleet Forward Conference. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://www.fleetforwardconference.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950 rounded"
            >
              Conference Website ↗
            </a>
            <span aria-hidden="true">•</span>
            <span>#FleetForward #EVFleets</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
