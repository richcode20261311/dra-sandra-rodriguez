import React from 'react';
import { Phone, Clock, Instagram, MapPin, ExternalLink, Heart } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#f0f3ff] border-t border-[#dee8ff] pt-16 pb-8 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#dee8ff]">

          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            {/* Logo matching header */}
            <Logo variant="navbar" />

            <p className="font-montserrat text-xs text-[#3c494b] leading-relaxed max-w-sm font-light">
              Estética Dental de Lujo. Transformando sonrisas con arte y ciencia. Cuidamos cada detalle para brindarte una experiencia confortable y resultados radiantes.
            </p>

            {/* Instagram handle matching screenshot */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-montserrat text-[#3c494b] hover:text-[#006971] transition-colors group"
            >
              <div className="w-6 h-6 rounded-md bg-white border border-[#dee8ff] flex items-center justify-center text-[#17b9c7] group-hover:bg-[#17b9c7] group-hover:text-white transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium">@sandraesteticadental</span>
            </a>
          </div>

          {/* Column 2: Enlaces Rápidos */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-montserrat text-xs font-semibold tracking-[0.18em] text-[#121c2c] uppercase">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2 text-xs font-montserrat text-[#3c494b] font-light">
              <li>
                <a href="#inicio" className="hover:text-[#17b9c7] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#17b9c7] transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="hover:text-[#17b9c7] transition-colors">
                  Sobre Mí
                </a>
              </li>
              <li>
                <a href="#casos" className="hover:text-[#17b9c7] transition-colors">
                  Antes y Después
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="hover:text-[#17b9c7] transition-colors">
                  Ubicación
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contacto */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-montserrat text-xs font-semibold tracking-[0.18em] text-[#121c2c] uppercase">
              Contacto
            </h4>

            {/* Teléfono */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[10px] uppercase font-montserrat font-medium text-[#6c797b] tracking-wider">
                <Phone className="w-3 h-3 text-[#17b9c7]" />
                <span>TELÉFONO</span>
              </div>
              <a
                href="tel:3122154916"
                className="font-montserrat text-xs font-semibold text-[#121c2c] hover:text-[#006971] block pl-5"
              >
                312 215 4916
              </a>
            </div>

            {/* Horario */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[10px] uppercase font-montserrat font-medium text-[#6c797b] tracking-wider">
                <Clock className="w-3 h-3 text-[#17b9c7]" />
                <span>HORARIO</span>
              </div>
              <div className="text-xs font-montserrat text-[#3c494b] font-light pl-5 space-y-0.5">
                <p>Lun - Vie: 8:00 AM - 6:00 PM</p>
                <p>Sáb: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>

          {/* Column 4: Ubicación Map Mini Widget */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-montserrat text-xs font-semibold tracking-[0.18em] text-[#121c2c] uppercase">
              Ubicación
            </h4>

            <div className="rounded-xl overflow-hidden border border-[#dee8ff] shadow-sm" style={{height: '140px'}}>
              <iframe
                src="https://maps.google.com/maps?q=4.9017113,-74.030376&z=15&output=embed"
                width="100%"
                height="140"
                style={{border: 0, display: 'block'}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Sabana Park"
              />
            </div>

            <a
              href="https://www.google.com/maps/place/Sabana+Park+Health+%26+Business/@4.9017113,-74.030376,17z"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-montserrat font-semibold tracking-wider text-[#006971] hover:text-[#17b9c7] uppercase transition-colors"
            >
              <span>CÓMO LLEGAR</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Bottom Bar matching screenshot */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-montserrat text-[#6c797b]">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Dra. Sandra Rodríguez - Estética Dental de Lujo. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a href="#" className="hover:text-[#17b9c7] transition-colors">
              Privacidad
            </a>
            <span>•</span>
            <a href="#" className="hover:text-[#17b9c7] transition-colors">
              Términos
            </a>
            <span>•</span>
            <a href="#ubicacion" className="hover:text-[#17b9c7] transition-colors">
              Contacto
            </a>
            <span>•</span>
            <a href="#" onClick={(e) => { e.preventDefault(); onOpenBooking(); }} className="hover:text-[#17b9c7] transition-colors">
              Preguntas Frecuentes
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
