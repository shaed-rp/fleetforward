import React from 'react';
import type { Stat } from '../types';

interface StatsGridProps {
  stats: Stat[];
}

const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-20">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="group relative p-10 rounded-3xl premium-card dark:premium-card-dark hover:border-accent-blue/50 transition-premium hover-lift animate-fade-in"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="relative">
            <div className="text-6xl font-bold gradient-text font-display mb-4">
              {stat.value}
            </div>
            <div className="text-lg text-gray-600 dark:text-gray-400 font-semibold font-inter">{stat.label}</div>
          </div>
          
          {/* Subtle glow effect on hover */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-blue/5 to-success-green/5 opacity-0 group-hover:opacity-100 transition-premium"></div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
