import React from 'react';
import type { Stat } from '../types';

interface StatsGridProps {
  stats: Stat[];
}

const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="p-4 rounded-lg bg-gray-900 border border-gray-800 hover-lift animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="text-3xl font-bold text-primary">{stat.value}</div>
          <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
