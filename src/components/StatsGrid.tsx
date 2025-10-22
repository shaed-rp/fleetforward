import React from 'react';
import type { Stat } from '../types';

interface StatsGridProps {
  stats: Stat[];
}

const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-all duration-300 hover-lift animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-sm text-gray-400 mt-2 font-medium">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
