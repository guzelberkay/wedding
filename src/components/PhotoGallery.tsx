import React, { useState } from 'react';
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.jpg';
import img5 from '../img/img5.jpg';
import img6 from '../img/img6.jpg';
import img7 from '../img/img7.jpg';
import img8 from '../img/img8.jpg';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const PhotoGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: img1,
      alt: "Engagement moment 1"
    },
    {
      src: img3,
      alt: "Engagement moment 2"
    },
    {
      src: img4,
      alt: "Couple portrait 1"
    },
    {
      src: img5,
      alt: "Couple portrait 2"
    },
    {
      src: img6,
      alt: "Together moment 1"
    },
    {
      src: img7,
      alt: "Together moment 2"
    },
    {
      src: img8,
      alt: "Love story 1"
    },
    {
      src: img2,
      alt: "Love story 2"
    }
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="galeri" className="py-20 bg-gradient-to-br from-white via-purple-50/30 to-rose-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-purple-600 mb-4">
              Fotoğraf Galerisi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-rose-400 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Birlikte geçirdiğimiz güzel anların fotoğrafları
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="aspect-square cursor-pointer group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 text-white p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 text-white p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <img
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;