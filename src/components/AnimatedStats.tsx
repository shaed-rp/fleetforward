import React, { useState, useEffect, useRef } from 'react';

interface AnimatedStat {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

interface AnimatedStatsProps {
  stats: AnimatedStat[];
}

const AnimatedStats: React.FC<AnimatedStatsProps> = ({ stats }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60; // 60fps
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(Math.floor(increment * currentStep), stat.value);
        
        setAnimatedValues(prev => {
          const newValues = [...prev];
          newValues[index] = newValue;
          return newValues;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [isVisible, stats]);

  return (
    <div ref={sectionRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-20">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="group relative p-10 rounded-3xl premium-card dark:premium-card-dark hover:border-accent-blue/50 transition-premium hover-lift animate-fade-in"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="relative">
            <div className="text-6xl font-bold gradient-text font-display mb-4 stat-counter">
              {stat.prefix}{animatedValues[index].toLocaleString()}{stat.suffix}
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

export default AnimatedStats;
