import React from 'react';
import type { Topic } from '../types';

interface TopicCardProps {
  topic: Topic;
  isActive: boolean;
  onToggle: () => void;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic, isActive, onToggle }) => {
  return (
    <div className="rounded-lg bg-gray-900 border border-gray-800 overflow-hidden hover-lift">
      <button
        onClick={onToggle}
        className="w-full p-6 text-left hover:bg-gray-800/50 transition-smooth focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
        aria-expanded={isActive}
        aria-controls={`topic-${topic.id}-details`}
      >
        <div className="flex items-start gap-4">
          <div className="text-4xl" role="img" aria-label={topic.title}>
            {topic.icon}
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-xl mb-2">{topic.title}</h4>
            <p className="text-gray-400">{topic.description}</p>
          </div>
          <div className="text-gray-500 text-2xl font-light transition-transform duration-300">
            {isActive ? '−' : '+'}
          </div>
        </div>
      </button>
      
      {isActive && (
        <div 
          id={`topic-${topic.id}-details`}
          className="px-6 pb-6 border-t border-gray-800 pt-4 animate-slide-up"
          role="region"
          aria-labelledby={`topic-${topic.id}-title`}
        >
          <ul className="space-y-2">
            {topic.details.map((detail, index) => (
              <li 
                key={index} 
                className="flex items-start gap-2 text-gray-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-primary mt-1" aria-hidden="true">•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TopicCard;
