import React, { useState, useEffect, useRef } from 'react';
import { Heart, X, Menu } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null); // Menü panelini referansla takip et

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
      setIsMenuOpen(false);
    }
  };

  // Dışarı tıklanınca menüyü kapat
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
          isMenuOpen &&
          menuRef.current &&
          !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Heart className="w-6 h-6 text-rose-400" />
              <span className="font-romantic text-3xl text-rose-500 tracking-wide">E & B</span>
            </div>

            {/* Masaüstü Menü */}
            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                  <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`relative px-2 py-1 text-base transition duration-300 ease-in-out ${
                          activeSection === item.id
                              ? 'text-rose-600 font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-rose-400'
                              : 'text-gray-600 hover:text-rose-500'
                      }`}
                  >
                    {item.label}
                  </button>
              ))}
            </nav>

            {/* Mobil Menü Düğmesi */}
            <div className="md:hidden">
              <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 text-gray-600"
                  aria-label="Menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobil Menü Paneli */}
        {isMenuOpen && (
            <div
                ref={menuRef}
                className="md:hidden bg-white border-t border-gray-200 shadow-md"
            >
              <div className="px-4 py-3 space-y-2">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="block w-full text-left text-gray-700 py-2 hover:text-rose-500"
                    >
                      {item.label}
                    </button>
                ))}
              </div>
            </div>
        )}
      </header>
  );
};

export default Header;
