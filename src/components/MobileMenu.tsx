import React, { useState } from 'react';

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Overview', href: '#hero' },
    { label: 'Panel', href: '#panel' },
    { label: 'Topics', href: '#topics' },
    { label: 'Takeaways', href: '#takeaways' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative bg-gray-900 border-b border-gray-800">
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
