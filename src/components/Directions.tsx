import React from 'react';
import { MapPin, Car, Navigation } from 'lucide-react';

const Directions: React.FC = () => {
  return (
    <section id="ulasim" className="py-20 bg-gradient-to-br from-purple-50 via-rose-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-purple-600 mb-4">
              Ulaşım
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-amber-400 mx-auto mb-6"></div>
            <p className="font-serif text-lg text-gray-600 italic max-w-2xl mx-auto">
              "Yollar uzak olsa da, siz yanımızdaysanız her yer bizim için yakındır."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Civil Ceremony Directions */}
            <div className="bg-white/90 rounded-lg shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="w-6 h-6 text-rose-500" />
                <h3 className="font-serif text-2xl text-gray-800">Nikah Töreni</h3>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Kadıköy Belediyesi Evlendirme Dairesi</h4>
                <p className="text-sm text-gray-600 mb-4">Fahrettin Kerim Gökay Cad. No:14, Kadıköy, İstanbul</p>
                
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.7834!2d29.0275!3d40.9897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9bd6570f725%3A0x9bbc0a0a0a0a0a0a!2sFahrettin%20Kerim%20G%C3%B6kay%20Cad.%20No%3A14%2C%20Kad%C4%B1k%C3%B6y%2C%20%C4%B0stanbul!5e0!3m2!1str!2str!4v1699999999999!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Car className="w-5 h-5 text-rose-500 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-gray-800">Araba ile</h5>
                    <p className="text-sm text-gray-600">Kadıköy merkez, Belediye binası yanı</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Navigation className="w-5 h-5 text-rose-500 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-gray-800">Toplu Taşıma</h5>
                    <p className="text-sm text-gray-600">Kadıköy Metro İstasyonu 5 dk yürüme</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Wedding Party Directions */}
            <div className="bg-white/90 rounded-lg shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="w-6 h-6 text-amber-500" />
                <h3 className="font-serif text-2xl text-gray-800">Düğün Töreni</h3>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Bergule Kır Bahçesi</h4>
                <p className="text-sm text-gray-600 mb-4">Yenibedir Köyü No:132, Lüleburgaz / Kırklareli</p>
                
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.123!2d27.123!3d41.456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDI3JzIxLjYiTiAyN8KwMDcnMjMuNCJF!5e0!3m2!1str!2str!4v1699999999999!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Car className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-gray-800">Araba ile</h5>
                    <p className="text-sm text-gray-600">İstanbul'dan yaklaşık 2 saat sürüş</p>
                  </div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-600">
                    ✓ Mekan bünyesinde ücretsiz otopark mevcuttur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directions;