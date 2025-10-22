import React from 'react';
import type { Stat } from '../types';

interface StatsGridProps {
  stats: Stat[];
}

const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="group relative p-8 rounded-3xl apple-card dark:apple-card-dark hover:border-apple-blue/50 transition-apple hover-lift animate-fade-in"
          style={{ animationDelay: `${index * 0.15}s` }}
        >
          <div className="relative">
            <div className="text-5xl font-bold bg-gradient-to-r from-apple-blue to-apple-green bg-clip-text text-transparent font-apple">
              {stat.value}
            </div>
            <div className="text-base text-apple-gray-6 dark:text-apple-gray-5 mt-3 font-medium font-apple">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
