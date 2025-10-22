import React from 'react';
import { panelists } from '../data/panelists';

const PanelInfo: React.FC = () => {
  return (
    <section id="panel" className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-800/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Panel Discussion
            </h3>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Join industry experts for an in-depth conversation on Chinese EV manufacturers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {panelists.map((panelist, index) => (
              <div key={index} className="group p-8 rounded-3xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-all duration-300 hover-lift">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-bold text-primary">
                      {panelist.initials}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-2xl mb-2 text-white group-hover:text-primary transition-colors">
                      {panelist.name}
                    </h4>
                    <p className="text-lg text-gray-400 mb-4 font-medium">{panelist.role}</p>
                    <p className="text-gray-300 leading-relaxed">{panelist.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 text-center backdrop-blur-sm">
            <p className="text-lg">
              <span className="font-bold text-primary">Moderated by:</span> 
              <span className="text-white ml-2">Charlie Vogelheim, Auction Academy</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanelInfo;
