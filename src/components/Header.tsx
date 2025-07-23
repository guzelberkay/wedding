import React from 'react';
import { Heart } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Ana Sayfa' },
    { id: 'nikah', label: 'Nikah' },
    { id: 'dugun', label: 'Düğün' },
    { id: 'galeri', label: 'Galeri' },
    { id: 'ulasim', label: 'Ulaşım' },
    { id: 'mesaj', label: 'Mesajımız' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="w-6 h-6 text-rose-400" />
              <span className="font-romantic text-3xl text-rose-500 tracking-wide">E & B</span>
            </div>

            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                  <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`relative px-2 py-1 text-base transition duration-300 ease-in-out
                  ${
                          activeSection === item.id
                              ? 'text-rose-600 font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-rose-400'
                              : 'text-gray-600 hover:text-rose-500'
                      }`}
                  >
                    {item.label}
                  </button>
              ))}
            </nav>

            <div className="md:hidden">
              <button className="p-2 text-gray-600">
                <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
                <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
                <div className="w-6 h-0.5 bg-gray-600"></div>
              </button>
            </div>
          </div>
        </div>
      </header>
  );
};

export default Header;
