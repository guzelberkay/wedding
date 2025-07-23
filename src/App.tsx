import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CivilCeremony from './components/CivilCeremony';
import WeddingParty from './components/WeddingParty';
import PhotoGallery from './components/PhotoGallery';
import Directions from './components/Directions';
import Message from './components/Message';
import FloatingLeaves from './components/FloatingLeaves';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'nikah', 'dugun', 'galeri', 'ulasim', 'mesaj'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-amber-50">
      <FloatingLeaves />
      <MusicPlayer />
      <Header activeSection={activeSection} />
      
      <main>
        <Hero />
        <CivilCeremony />
        <WeddingParty />
        <PhotoGallery />
        <Directions />
        <Message />
      </main>
    </div>
  );
}

export default App;