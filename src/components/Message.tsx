import React from 'react';
import { Heart } from 'lucide-react';

const Message: React.FC = () => {
  return (
      <section id="mesaj" className="py-20 bg-gradient-to-br from-purple-100 via-rose-100 to-amber-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-sans text-4xl md:text-5xl font-semibold text-purple-700 mb-4 tracking-tight">
                Mesajımız Sizlere
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-rose-500 mx-auto rounded"></div>
            </div>

            <div className="bg-white/95 rounded-lg shadow-lg p-12 text-center">
              <Heart className="w-12 h-12 text-purple-500 mx-auto mb-8" />

              <blockquote className="font-sans text-lg md:text-xl text-gray-800 leading-relaxed mb-10 italic max-w-3xl mx-auto">
                "Bu özel günümüzde bizimle olmanız, sevincimizi paylaşmanız bizim için tarif edilemez bir mutluluk.
                Her bir gülüşünüzle daha da güzelleşecek bir gün hayal ediyoruz. Hepinizi bekliyoruz!"
              </blockquote>

              <div className="flex items-center justify-center space-x-6">
                <p className="font-sans text-2xl font-semibold text-purple-700">Ecem</p>
                <Heart className="w-6 h-6 text-purple-400" />
                <p className="font-sans text-2xl font-semibold text-purple-700">Berkay</p>
              </div>
            </div>

            <div className="mt-14 text-center">
              <p className="text-gray-700 text-base space-y-3">
                <a href="tel:+905334346485" className="block hover:text-purple-700 underline font-medium">
                  Turgut GÜZEL (Damadın Babası) | 0533 434 64 85
                </a>
                <a href="tel:+905426134057" className="block hover:text-purple-700 underline font-medium">
                  Turan ÇOLAK (Gelinin Babası) | 0542 613 40 57
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Message;
