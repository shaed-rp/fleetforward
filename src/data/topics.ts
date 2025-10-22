import type { Topic } from '../types';

export const topics: Topic[] = [
  {
    id: 'global-rise',
    title: 'Global Rise',
    icon: '📈',
    description: "What's fueling Chinese automakers' expansion in the fleet space worldwide",
    details: [
      'China produces 70% of global EVs (12.4M of 17.3M in 2024)',
      'BYD 2024 sales: 4.3 million vehicles (41% YoY growth)',
      'Massive vertical integration: BYD makes 75% of parts in-house',
      'Development speed: 18 months vs. 5-7 years for Western OEMs',
      'Government support and domestic competition driving innovation',
    ],
  },
  {
    id: 'innovation',
    title: 'Innovation Strategies',
    icon: '⚡',
    description: 'How Chinese EV strategies differ from Western models in innovation and deployment',
    details: [
      'Rapid iteration vs. perfection-first approach',
      'Battery-as-a-Service business model innovation',
      'Software-defined vehicles with continuous OTA updates',
      'Treating vehicles as smart devices, not just transportation',
      'Customer-centric features and aggressive pricing',
    ],
  },
  {
    id: 'us-market',
    title: 'U.S. Market',
    icon: '🛡️',
    description: 'What North American fleets should watch for as Chinese OEMs eye U.S. expansion',
    details: [
      '100% tariffs on Chinese EVs (finalized September 2024)',
      'Connected vehicle technology ban (software 2027, hardware 2029)',
      'Commercial vehicles >10,000 lbs exempt from ban',
      'Potential entry via Mexico manufacturing (USMCA)',
      'Component supply chains already established (75% of global EV batteries)',
    ],
  },
];
