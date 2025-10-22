import React from 'react';
import { takeaways } from '../data/takeaways';

const TakeawaysSection: React.FC = () => {
  return (
    <section id="takeaways" className="py-12 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-3">Key Takeaways for Fleet Managers</h3>
            <p className="text-gray-400">
              Five strategic actions you can implement today
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {takeaways.map((takeaway, index) => (
              <div 
                key={index} 
                className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-primary/50 hover-lift transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{takeaway.title}</h4>
                    <p className="text-sm text-gray-400">{takeaway.description}</p>
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
