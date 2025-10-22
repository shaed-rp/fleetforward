import React from 'react';
import type { Topic } from '../types';

interface TopicCardProps {
  topic: Topic;
  isActive: boolean;
  onToggle: () => void;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic, isActive, onToggle }) => {
  return (
    <div className="group rounded-3xl apple-card dark:apple-card-dark overflow-hidden hover:border-apple-blue/50 transition-apple hover-lift">
      <button
        onClick={onToggle}
        className="w-full p-10 text-left hover:bg-apple-blue/5 dark:hover:bg-apple-blue/10 transition-apple focus:outline-none focus:ring-2 focus:ring-apple-blue/50 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-apple-gray-11"
        aria-expanded={isActive}
        aria-controls={`topic-${topic.id}-details`}
      >
        <div className="flex items-start gap-8">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-apple-blue/20 to-apple-green/20 flex items-center justify-center text-4xl group-hover:scale-110 transition-apple">
            {topic.icon}
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-3xl mb-4 text-apple-gray-11 dark:text-apple-gray-1 group-hover:text-apple-blue transition-apple font-apple">
              {topic.title}
            </h4>
            <p className="text-apple-gray-6 dark:text-apple-gray-5 text-xl leading-relaxed font-apple">{topic.description}</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-apple-gray-3/50 dark:bg-apple-gray-8/50 flex items-center justify-center text-apple-gray-6 dark:text-apple-gray-5 group-hover:bg-apple-blue/20 group-hover:text-apple-blue transition-apple">
            <span className="text-2xl font-light">
              {isActive ? '−' : '+'}
            </span>
          </div>
        </div>
      </button>
      
      {isActive && (
        <div 
          id={`topic-${topic.id}-details`}
          className="px-10 pb-10 border-t border-apple-gray-3/50 dark:border-apple-gray-8/50 pt-8 animate-slide-up"
          role="region"
          aria-labelledby={`topic-${topic.id}-title`}
        >
          <ul className="space-y-6">
            {topic.details.map((detail, index) => (
              <li 
                key={index} 
                className="flex items-start gap-6 text-apple-gray-7 dark:text-apple-gray-4 animate-fade-in group/item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-apple-blue to-apple-green mt-2 flex-shrink-0 group-hover/item:scale-125 transition-apple"></div>
                <span className="leading-relaxed text-lg font-apple">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TopicCard;
