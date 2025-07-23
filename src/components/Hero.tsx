import React from 'react';
import { ChevronDown } from 'lucide-react';
import img1 from "../img/img1.jpg";

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const nikahSection = document.getElementById('nikah');
    if (nikahSection) {
      nikahSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100/30 via-purple-100/30 to-amber-100/30"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Large Couple Photo */}
          <div className="mb-12 animate-fade-in">
            <div className="relative max-w-md mx-auto">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50">
                <img
                  src={img1}
                  alt="Berkay & Ecem"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-rose-200 to-purple-200 rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-amber-200 to-rose-200 rounded-full opacity-80"></div>
            </div>
          </div>
          
          <div className="mb-8 animate-fade-in">
            <h1 className="font-serif text-5xl md:text-7xl text-purple-600 mb-4">
              Berkay <span className="text-amber-500">&</span> Ecem
            </h1>
            <h2 className="font-serif text-xl md:text-2xl text-gray-700 mb-6">
              Güzel <span className="text-purple-400">♥</span> Çolak
            </h2>
          </div>
          
          <div className="mb-12 animate-fade-in-delay">
            <p className="font-serif text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              "Birlikte yazdığımız masalın sonsuza uzanan sayfasına hoş geldiniz."
            </p>
          </div>
          
          <div className="animate-fade-in-delay-2">
            <button
              onClick={scrollToNext}
              className="bg-gradient-to-r from-purple-500 to-rose-500 hover:from-purple-600 hover:to-rose-600 text-white px-8 py-4 rounded-full font-medium text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Davetiye'yi Gör
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-purple-400" />
      </div>
    </section>
  );
};

export default Hero;