import React, { useState } from 'react';
import { Award, Clock, Sparkles, CheckCircle2, CalendarCheck } from 'lucide-react';
import { Logo } from './Logo';
import draSandraImg from '../../assets/dra-sandra.png';

interface DoctorSectionProps {
  onOpenBooking: () => void;
}

export const DoctorSection: React.FC<DoctorSectionProps> = ({ onOpenBooking }) => {
  const [selectedImg, setSelectedImg] = useState(0);

  const clinicImages = [
    {
      url: draSandraImg,
      title: 'Dra. Sandra Rodríguez',
    },
    {
      url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80',
      title: 'Consultorio Odontológico',
    },
    {
      url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
      title: 'Tecnología Digital 3D',
    },
  ];

  return (
    <section id="sobre-mi" className="py-24 bg-gradient-to-b from-[#eef4ff] to-[#f9f9ff] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Clinic Image with Floating 15+ Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
              
              {/* Main Clinic Image */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-[#dee8ff]">
                <img
                  src={clinicImages[selectedImg].url}
                  alt="Clínica Estética Dental Dra. Sandra Rodríguez"
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                
                {/* Logo Watermark top left */}
                <div className="absolute top-3 left-3">
                  <Logo variant="watermark" />
                </div>
              </div>

              {/* Floating Badge: 15+ AÑOS TRANSFORMANDO SONRISAS */}
              <div className="absolute -bottom-4 -right-4 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-xl p-5 shadow-xl border border-[#dee8ff] max-w-[210px] text-center">
                <span className="font-playfair text-3xl sm:text-4xl font-semibold text-[#006971] block leading-none">
                  15+
                </span>
                <span className="text-[10px] sm:text-[11px] font-montserrat font-medium tracking-[0.16em] text-[#121c2c] uppercase block mt-1.5 leading-tight">
                  AÑOS TRANSFORMANDO SONRISAS
                </span>
              </div>
            </div>

            {/* Thumbnail selector */}
            <div className="flex items-center gap-3 mt-6">
              {clinicImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImg(idx)}
                  className={`relative rounded-lg overflow-hidden w-20 h-14 border-2 transition-all cursor-pointer ${
                    selectedImg === idx
                      ? 'border-[#17b9c7] ring-2 ring-[#17b9c7]/30 scale-105'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
              <span className="text-xs font-montserrat text-[#6c797b] pl-2 font-light hidden sm:inline">
                Nuestras instalaciones boutique
              </span>
            </div>
          </div>

          {/* Right Column: Bio Copy */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs font-montserrat font-medium tracking-[0.25em] text-[#006971] uppercase block">
                CONOCE A LA EXPERTA
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-medium text-[#121c2c]">
                Dra. Sandra Rodríguez
              </h2>
            </div>

            {/* Exact Copy from Screenshot */}
            <p className="font-montserrat text-sm sm:text-base text-[#3c494b] font-light leading-relaxed">
              Especialista en Estética Dental y Rehabilitación Oral con más de 15 años de experiencia creando sonrisas perfectas. Mi enfoque combina la precisión clínica con un agudo sentido estético para ofrecer resultados que no solo se ven increíbles, sino que cambian vidas.
            </p>

            <p className="font-montserrat text-sm sm:text-base text-[#3c494b] font-light leading-relaxed">
              Creemos que cada sonrisa es única y requiere un enfoque personalizado. Utilizamos los mejores materiales y tecnología de punta para asegurar resultados duraderos y naturales en un ambiente diseñado para tu total relajación y confort.
            </p>

            {/* Key Qualifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-[#121c2c] font-medium font-montserrat">
                <CheckCircle2 className="w-4 h-4 text-[#17b9c7] flex-shrink-0" />
                <span>Posgrado en Rehabilitación Oral</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#121c2c] font-medium font-montserrat">
                <CheckCircle2 className="w-4 h-4 text-[#17b9c7] flex-shrink-0" />
                <span>Certificación en Carillas de Alta Estética</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#121c2c] font-medium font-montserrat">
                <CheckCircle2 className="w-4 h-4 text-[#17b9c7] flex-shrink-0" />
                <span>Miembro Sociedad de Estética Dental</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#121c2c] font-medium font-montserrat">
                <CheckCircle2 className="w-4 h-4 text-[#17b9c7] flex-shrink-0" />
                <span>Protocolo Spa Dental Cero Dolor</span>
              </div>
            </div>

            {/* Schedule & Direct Action Card */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <div className="bg-white/80 backdrop-blur-sm border border-[#dee8ff] rounded-xl p-4 flex-1 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#e7eeff] flex items-center justify-center text-[#006971]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-montserrat tracking-wider text-[#6c797b] block font-medium">
                    Horario de Atención
                  </span>
                  <span className="text-xs font-montserrat text-[#121c2c] font-semibold block">
                    Lun - Vie: 8:00 AM - 6:00 PM | Sáb: 9:00 AM - 1:00 PM
                  </span>
                </div>
              </div>

              <a
                href="https://wa.me/573122154916?text=Hola%20Dra.%20Sandra,%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20los%20tratamientos%20disponibles"
                target="_blank"
                rel="noreferrer"
                className="bg-[#006971] hover:bg-[#17b9c7] text-white px-6 py-4 rounded-xl text-xs font-montserrat font-medium tracking-[0.14em] uppercase transition-all duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Hablar con la Doctora</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
