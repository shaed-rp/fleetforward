import { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const stats = [
    { value: '70%', label: 'Global EV Production' },
    { value: '18mo', label: 'Development Time' },
    { value: '100%', label: 'U.S. Tariff Rate' },
    { value: '85%', label: 'Thailand Market Share' },
  ];

  const topics = [
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

  const panelists = [
    {
      name: 'Dr. Leo Cai',
      role: 'Former CEO, eHi Car Services',
      initials: 'LC',
      color: 'bg-primary',
      description: 'Firsthand experience from leading one of China\'s largest car rental and mobility providers.',
    },
    {
      name: 'Ryan Pritchard',
      role: 'SHAED.ai & Pritchard Companies',
      initials: 'RP',
      color: 'bg-secondary',
      description: 'Multiple trips to China, 50+ factory visits, and international partnerships.',
    },
  ];

  const takeaways = [
    {
      title: 'Diversify Supplier Relationships',
      description: 'Build relationships across multiple regions to reduce supply chain risk',
    },
    {
      title: 'Start Electrification Pilots Now',
      description: 'Don\'t wait for perfect solutions—begin testing and learning',
    },
    {
      title: 'Evaluate Total Cost of Ownership',
      description: 'Look beyond purchase price to maintenance, fuel, and lifecycle costs',
    },
    {
      title: 'Monitor Global Developments',
      description: 'Watch Europe, Latin America, and Asia for emerging trends',
    },
    {
      title: 'Prepare for Software-Defined Vehicles',
      description: 'Future fleets will require data management and OTA update capabilities',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <span className="text-2xl">🚗</span>
              </div>
              <div>
                <h1 className="text-lg font-bold">Chinese EV Insights</h1>
                <p className="text-xs text-gray-400">Fleet Forward 2025</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary rounded-full text-sm font-medium">
              Fleet Forward Conference 2025 • October 21-23
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              The Rise of{' '}
              <span className="text-primary">Chinese Automakers</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              An insider's perspective on how Chinese EV manufacturers are reshaping 
              the global fleet industry—and what North American fleet managers need to know.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="p-4 rounded-lg bg-gray-900 border border-gray-800">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Panel Info */}
      <section className="py-12 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold mb-3">Panel Discussion</h3>
              <p className="text-gray-400">
                Join industry experts for an in-depth conversation on Chinese EV manufacturers
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {panelists.map((panelist, index) => (
                <div key={index} className="p-6 rounded-lg bg-gray-900 border border-gray-800">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 rounded-full ${panelist.color}/20 flex items-center justify-center flex-shrink-0`}>
                      <span className={`text-2xl font-bold text-${panelist.color.replace('bg-', '')}`}>
                        {panelist.initials}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg">{panelist.name}</h4>
                      <p className="text-sm text-gray-400 mb-2">{panelist.role}</p>
                      <p className="text-sm text-gray-300">{panelist.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 text-center">
              <p className="text-sm">
                <span className="font-semibold">Moderated by:</span> Charlie Vogelheim, Auction Academy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-12">
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
                <div key={topic.id} className="rounded-lg bg-gray-900 border border-gray-800 overflow-hidden">
                  <button
                    onClick={() => setActiveSection(activeSection === topic.id ? null : topic.id)}
                    className="w-full p-6 text-left hover:bg-gray-800/50 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{topic.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-xl mb-2">{topic.title}</h4>
                        <p className="text-gray-400">{topic.description}</p>
                      </div>
                      <div className="text-gray-500">
                        {activeSection === topic.id ? '−' : '+'}
                      </div>
                    </div>
                  </button>
                  
                  {activeSection === topic.id && (
                    <div className="px-6 pb-6 border-t border-gray-800 pt-4">
                      <ul className="space-y-2">
                        {topic.details.map((detail, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-300">
                            <span className="text-primary mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Takeaways Section */}
      <section className="py-12 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold mb-3">Key Takeaways for Fleet Managers</h3>
              <p className="text-gray-400">
                Five strategic actions you can implement today
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {takeaways.map((takeaway, index) => (
                <div key={index} className="p-6 rounded-lg bg-gray-900 border border-gray-800">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{takeaway.title}</h4>
                      <p className="text-sm text-gray-400">{takeaway.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              © 2025 Fleet Forward Conference. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.fleetforwardconference.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Conference Website ↗
              </a>
              <span>•</span>
              <span>#FleetForward #EVFleets</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

