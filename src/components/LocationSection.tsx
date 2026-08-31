import React from 'react';
import { MapPin, Phone, Clock, Mail, Navigation, ExternalLink, ShieldCheck, Sparkles, CalendarCheck } from 'lucide-react';
import { Logo } from './Logo';
import { WhatsAppIcon } from './WhatsAppIcon';

interface LocationSectionProps {
  onOpenBooking: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="ubicacion" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-montserrat font-medium tracking-[0.25em] text-[#006971] uppercase block">
            VISÍTANOS
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-normal text-[#121c2c]">
            Nuestra Ubicación
          </h2>
          <p className="font-montserrat text-sm sm:text-base text-[#3c494b] font-light max-w-xl mx-auto">
            Disfruta de un ambiente sereno diseñado para tu tranquilidad y confort total.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left: Contact & Information Card */}
          <div className="lg:col-span-5 bg-[#f9f9ff] border border-[#dee8ff] rounded-2xl p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">

              <div>
                <Logo variant="badge" className="mb-3" />
                <h3 className="font-playfair text-2xl font-semibold text-[#121c2c]">
                  Consultorio Dra. Sandra Rodríguez
                </h3>
              </div>

              <div className="space-y-4 text-xs font-montserrat text-[#3c494b]">

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#e7eeff] flex items-center justify-center text-[#006971] flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#121c2c] block text-xs mb-0.5">Dirección:</strong>
                    <p className="leading-relaxed text-[#6c797b]">
                      Sabana Park Health & Business, Cajicá, Cundinamarca
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#e7eeff] flex items-center justify-center text-[#006971] flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#121c2c] block text-xs mb-0.5">Línea Directa / Citas:</strong>
                    <a href="tel:3122154916" className="text-[#006971] font-semibold hover:underline">
                      +57 312 215 4916
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#e7eeff] flex items-center justify-center text-[#006971] flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-[#121c2c] block text-xs mb-0.5">Horario de Consulta:</strong>
                    <p className="text-[#6c797b]">Lunes a Viernes: 8:00 AM – 6:00 PM</p>
                    <p className="text-[#6c797b]">Sábados: 9:00 AM – 1:00 PM</p>
                  </div>
                </div>

              </div>

              <div className="p-4 bg-white rounded-xl border border-[#dee8ff] flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#17b9c7] flex-shrink-0" />
                <p className="text-[11px] text-[#6c797b] font-montserrat">
                  Parqueadero privado para pacientes & acceso para movilidad reducida.
                </p>
              </div>

            </div>

            <div className="pt-6 border-t border-[#dee8ff] flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenBooking}
                className="flex-1 bg-[#006971] hover:bg-[#17b9c7] text-white py-3 rounded-lg text-xs font-montserrat font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Agendar Cita</span>
              </button>

              <a
                href="https://wa.me/573122154916?text=Hola%20Dra.%20Sandra,%20deseo%20consultar%20informaci%C3%B3n%20sobre%20citas"
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] hover:bg-[#1eb857] text-white py-3 px-4 rounded-lg text-xs font-montserrat font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>WhatsApp</span>
              </a>

              <a
                href="https://www.google.com/maps/place/Sabana+Park+Health+%26+Business/@4.9017113,-74.030376,17z"
                target="_blank"
                rel="noreferrer"
                className="bg-white border border-[#dee8ff] hover:bg-[#f0f3ff] text-[#121c2c] py-3 px-4 rounded-lg text-xs font-montserrat font-medium tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5 text-[#17b9c7]" />
                <span>GPS</span>
              </a>
            </div>

          </div>

          {/* Right: Embedded Google Maps Iframe Container */}
          <div className="lg:col-span-7 bg-[#f0f3ff] rounded-2xl overflow-hidden border border-[#dee8ff] shadow-sm relative min-h-[420px] flex items-center justify-center">
            <iframe
              title="Ubicación Sabana Park Health & Business - Dra. Sandra Rodríguez"
              src="https://maps.google.com/maps?q=4.9017113,-74.030376&hl=es&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '420px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-2xl"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
