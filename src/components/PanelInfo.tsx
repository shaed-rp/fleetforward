import React from 'react';
import { panelists } from '../data/panelists';

const PanelInfo: React.FC = () => {
  return (
    <section id="panel" className="py-12 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-3">Panel Discussion</h3>
            <p className="text-gray-400">
              Join industry experts for an in-depth conversation on Chinese EV manufacturers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {panelists.map((panelist, index) => (
              <div key={index} className="p-6 rounded-lg bg-gray-900 border border-gray-800">
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-full ${panelist.color}/20 flex items-center justify-center flex-shrink-0`}>
                    <span className={`text-2xl font-bold text-${panelist.color.replace('bg-', '')}`}>
                      {panelist.initials}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg">{panelist.name}</h4>
                    <p className="text-sm text-gray-400 mb-2">{panelist.role}</p>
                    <p className="text-sm text-gray-300">{panelist.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 text-center">
            <p className="text-sm">
              <span className="font-semibold">Moderated by:</span> Charlie Vogelheim, Auction Academy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanelInfo;
