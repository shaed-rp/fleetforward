import React, { useState } from 'react';
import { topics } from '../data/topics';
import TopicCard from './TopicCard';

const TopicsSection: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <section id="topics" className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-3">What We'll Cover</h3>
            <p className="text-gray-400">
              Three critical areas shaping the future of the global fleet industry
            </p>
          </div>

          <div className="space-y-4">
            {topics.map((topic) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                isActive={activeSection === topic.id}
                onToggle={() => setActiveSection(activeSection === topic.id ? null : topic.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
