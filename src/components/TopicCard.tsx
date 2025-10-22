import React from 'react';
import type { Topic } from '../types';

interface TopicCardProps {
  topic: Topic;
  isActive: boolean;
  onToggle: () => void;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic, isActive, onToggle }) => {
  return (
    <div className="group rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 dark:from-gray-900/90 dark:to-gray-800/90 light:from-white/90 light:to-gray-50/90 backdrop-blur-sm border border-gray-700/50 dark:border-gray-700/50 light:border-gray-200/50 overflow-hidden hover:border-primary/50 transition-all duration-300 hover-lift">
      <button
        onClick={onToggle}
        className="w-full p-8 text-left hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-gray-950 dark:focus:ring-offset-gray-950 light:focus:ring-offset-white"
        aria-expanded={isActive}
        aria-controls={`topic-${topic.id}-details`}
      >
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
            {topic.icon}
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-2xl mb-3 text-white dark:text-white light:text-gray-900 group-hover:text-primary transition-colors">
              {topic.title}
            </h4>
            <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-lg leading-relaxed">{topic.description}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-700/50 dark:bg-gray-700/50 light:bg-gray-300/50 flex items-center justify-center text-gray-400 dark:text-gray-400 light:text-gray-600 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">
            <span className="text-xl font-light">
              {isActive ? '−' : '+'}
            </span>
          </div>
        </div>
      </button>
      
      {isActive && (
        <div 
          id={`topic-${topic.id}-details`}
          className="px-8 pb-8 border-t border-gray-700/50 dark:border-gray-700/50 light:border-gray-200/50 pt-6 animate-slide-up"
          role="region"
          aria-labelledby={`topic-${topic.id}-title`}
        >
          <ul className="space-y-4">
            {topic.details.map((detail, index) => (
              <li 
                key={index} 
                className="flex items-start gap-4 text-gray-300 dark:text-gray-300 light:text-gray-700 animate-fade-in group/item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary mt-3 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200"></div>
                <span className="leading-relaxed">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TopicCard;
