import React from 'react';
import { Calendar, Clock, MapPin, Car, Music, Utensils } from 'lucide-react';

const WeddingParty: React.FC = () => {
  return (
      <section id="dugun" className="py-20 bg-gradient-to-br from-purple-50 via-rose-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-24">

            {/* DÜĞÜN PROGRAMI */}
            <div>
              <div className="text-center mb-12">
                <h2 className="font-serif text-4xl md:text-5xl text-purple-600 mb-4">
                  Düğün Töreni
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-amber-400 mx-auto" />
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Sol içerik */}
                <div className="space-y-8">
                  <div className="flex items-center space-x-4 p-6 bg-white/90 rounded-lg shadow-md">
                    <Calendar className="w-8 h-8 text-purple-500" />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">Tarih</h3>
                      <p className="text-gray-600">6 Eylül 2025</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-white/90 rounded-lg shadow-md">
                    <Clock className="w-8 h-8 text-purple-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">Program</h3>
                      <p className="text-gray-600">Alay: 18:00</p>
                      <p className="text-gray-600">Tören: 19:00</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-white/90 rounded-lg shadow-md">
                    <MapPin className="w-8 h-8 text-purple-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">Düğün Mekanı</h3>
                      <p className="text-gray-600 mb-2">Bergule Kır Bahçesi</p>
                      <p className="text-sm text-gray-500">
                        Yenibedir Köyü No:132, Lüleburgaz / Kırklareli
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-purple-50 p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <Car className="w-5 h-5 mr-2" />
                      Otopark Bilgisi
                    </h4>
                    <p className="text-sm text-gray-600">
                      Mekan bünyesinde ücretsiz otopark mevcuttur. Ayrıca otopark arama derdi yaşamayacaksınız.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center justify-center p-4 bg-gradient-to-r from-rose-100 to-purple-100 rounded-lg shadow-sm">
                      <Music className="w-6 h-6 text-rose-500 mr-2" />
                      <span className="text-sm font-medium text-gray-700">Canlı Müzik</span>
                    </div>
                    <div className="flex items-center justify-center p-4 bg-gradient-to-r from-amber-100 to-rose-100 rounded-lg shadow-sm">
                      <Utensils className="w-6 h-6 text-amber-500 mr-2" />
                      <span className="text-sm font-medium text-gray-700">Açık Büfe</span>
                    </div>
                  </div>
                </div>

                {/* Sağ harita ve açıklama */}
                <div className="space-y-6">
                  <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.6992357579865!2d27.4187337!3d41.3585434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b4bc6fb043373d%3A0x40c38221b644aaba!2sBergule%20K%C4%B1r%20Bah%C3%A7esi%20%26%20Restoran%20%26%20K%C4%B1r%20D%C3%BC%C4%9F%C3%BCn%20Bah%C3%A7esi!5e0!3m2!1str!2str!4v1721721111111!5m2!1str!2str"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Bergule Kır Bahçesi Harita"
                    ></iframe>
                  </div>

                  <div className="bg-white/90 p-6 rounded-lg shadow-md">
                    <h4 className="font-serif text-xl text-gray-800 mb-3">Düğün Eğlencesi</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Doğanın kucağında, sevdiklerimizle birlikte unutulmaz bir gece geçireceğiz.
                      Canlı müzik, dans ve neşe dolu anlarla dolu bir kutlama sizi bekliyor.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* GELİN EVİ */}
            <div>
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-pink-600 mb-2">
                  Gelin Evi (Alay Başlangıcı)
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto" />
              </div>

              <div className="grid md:grid-cols-2 gap-10 items-start">
                <div className="flex flex-col space-y-4 p-6 bg-white/90 rounded-lg shadow-md">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-8 h-8 text-pink-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">Adres</h3>
                      <p className="text-gray-600">İnönü Mahallesi, Arka Sokak</p>
                      <p className="text-gray-600">Umay Apartmanı No:4 Daire:1</p>
                      <p className="text-sm text-gray-500">Lüleburgaz / Kırklareli</p>
                    </div>
                  </div>

                  <a
                      href="https://www.google.com/maps/dir/?api=1&destination=41.3949627,27.3458056"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 underline font-semibold"
                  >
                    Yol Tarifi Al
                  </a>
                </div>

                <div className="aspect-video rounded-lg overflow-hidden shadow-lg cursor-pointer"
                     onClick={() => window.open(
                         "https://www.google.com/maps/dir/?api=1&destination=41.3949627,27.3458056",
                         "_blank"
                     )}
                >
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d304.7554486823346!2d27.36114991520304!3d41.40035114722501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b4bb4ca135d331%3A0xde66cf9dc6a73b1d!2s%C4%B0n%C3%B6n%C3%BC%2C%20Arka%20Sk.%20No%3A4%2C%2039750%20L%C3%BCleburgaz%2FK%C4%B1rklareli!5e0!3m2!1str!2str!4v1721737650000!5m2!1str!2str"
                      width="100%"
                      height="100%"
                      style={{border: 0}}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="İnönü Mahallesi Arka Sokak Haritası"
                  />

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
  );
};

export default WeddingParty;
