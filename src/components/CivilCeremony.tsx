import React from 'react';
import { Calendar, Clock, MapPin, Car, Train } from 'lucide-react';
import img9 from '../img/img9.jpg';
import img11 from '../img/img11.jpg';

const CivilCeremony: React.FC = () => {
  return (
    <section id="nikah" className="py-20 bg-gradient-to-br from-white/90 to-purple-50/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-rose-600 mb-4">
              Nikah Töreni
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-purple-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-rose-50 to-purple-50 rounded-lg shadow-sm">
                <Calendar className="w-8 h-8 text-rose-500" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Tarih</h3>
                  <p className="text-gray-600">31 Ağustos 2025</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-rose-50 to-purple-50 rounded-lg shadow-sm">
                <Clock className="w-8 h-8 text-rose-500" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Saat</h3>
                  <p className="text-gray-600">18:00</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-rose-50 to-purple-50 rounded-lg shadow-sm">
                <MapPin className="w-8 h-8 text-rose-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Mekan</h3>
                  <p className="text-gray-600 mb-2">Kadıköy Belediyesi Evlendirme Dairesi – B Salonu</p>
                  <p className="text-sm text-gray-500">Fahrettin Kerim Gökay Cad. No:14, Kadıköy, İstanbul</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-rose-50 p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <Car className="w-5 h-5 mr-2" />
                  Ulaşım Bilgileri
                </h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <Train className="w-4 h-4 mr-2" />
                    Metro: Kadıköy-Kartal Metro Hattı, Kadıköy Durağı
                  </li>
                  <li className="flex items-center">
                    <Car className="w-4 h-4 mr-2" />
                    Otopark: Kadıköy Belediyesi otoparklarını kullanabilirsiniz
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
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

              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                  <img
                    src= {img9}
                    alt="Engagement Photo 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                  <img
                    src={img11}
                    alt="Engagement Photo 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CivilCeremony;