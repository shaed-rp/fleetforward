import React from 'react';
import type { Topic } from '../types';

interface TopicCardProps {
  topic: Topic;
  isActive: boolean;
  onToggle: () => void;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic, isActive, onToggle }) => {
  return (
    <div className="group rounded-3xl premium-card dark:premium-card-dark overflow-hidden hover:border-accent-blue/50 transition-premium hover-lift">
      <button
        onClick={onToggle}
        className="w-full p-12 text-left hover:bg-accent-blue/5 dark:hover:bg-accent-blue/10 transition-premium focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-primary-navy"
        aria-expanded={isActive}
        aria-controls={`topic-${topic.id}-details`}
      >
        <div className="flex items-start gap-10">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-accent-blue/20 to-success-green/20 flex items-center justify-center text-5xl group-hover:scale-110 transition-premium shadow-lg">
            {topic.icon}
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-4xl mb-6 text-primary-navy dark:text-gray-50 group-hover:text-accent-blue transition-premium font-display">
              {topic.title}
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-xl leading-relaxed font-inter">{topic.description}</p>
          </div>
          <div className="w-16 h-16 rounded-2xl bg-gray-100/50 dark:bg-gray-800/50 flex items-center justify-center text-gray-600 dark:text-gray-400 group-hover:bg-accent-blue/20 group-hover:text-accent-blue transition-premium">
            <span className="text-3xl font-light">
              {isActive ? '−' : '+'}
            </span>
          </div>
        </div>
      </button>
      
      {isActive && (
        <div 
          id={`topic-${topic.id}-details`}
          className="px-12 pb-12 border-t border-gray-200/50 dark:border-gray-700/50 pt-10 animate-slide-up"
          role="region"
          aria-labelledby={`topic-${topic.id}-title`}
        >
          <ul className="space-y-8">
            {topic.details.map((detail, index) => (
              <li 
                key={index} 
                className="flex items-start gap-8 text-gray-700 dark:text-gray-300 animate-fade-in group/item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-accent-blue to-success-green mt-2 flex-shrink-0 group-hover/item:scale-125 transition-premium"></div>
                <span className="leading-relaxed text-xl font-inter">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TopicCard;
