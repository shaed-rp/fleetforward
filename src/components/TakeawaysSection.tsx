import React from 'react';
import { takeaways } from '../data/takeaways';

const TakeawaysSection: React.FC = () => {
  return (
    <section id="takeaways" className="py-20 bg-gradient-to-b from-gray-800/30 to-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Key Takeaways for Fleet Managers
            </h3>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Five strategic actions you can implement today
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {takeaways.map((takeaway, index) => (
              <div 
                key={index} 
                className="group p-8 rounded-3xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 hover-lift transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-3 text-white group-hover:text-primary transition-colors">
                      {takeaway.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">{takeaway.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TakeawaysSection;
