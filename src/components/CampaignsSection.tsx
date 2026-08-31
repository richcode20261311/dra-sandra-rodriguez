import React from 'react';
import { Sparkles, Heart, ArrowRight, Star, Quote } from 'lucide-react';
import { Logo } from './Logo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { testimonialsData } from '../data/testimonialsData';
import draSandraImg from '../../assets/dra-sandra.png';

interface CampaignsSectionProps {
  onOpenBooking: () => void;
  onOpenQuiz: () => void;
}

export const CampaignsSection: React.FC<CampaignsSectionProps> = ({ onOpenBooking, onOpenQuiz }) => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#f9f9ff] via-[#f0f3ff] to-[#f9f9ff] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-montserrat font-medium tracking-[0.25em] text-[#006971] uppercase block">
            EXPERIENCIA & CONFIANZA
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-normal text-[#121c2c]">
            Vuelve a Sonreír sin Reservas
          </h2>
          <p className="font-montserrat text-sm sm:text-base text-[#3c494b] font-light max-w-xl mx-auto">
            Más que una clínica dental, somos tu espacio de cuidado estético y bienestar.
          </p>
        </div>

        {/* 3 Visual Campaign Posters matching user's uploaded images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          {/* Card 1: ¡Levanta la mano si también adoras a nuestra Doctora Sandra! */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg bg-[#e2e2e2] border border-[#dee8ff] aspect-[1/1] flex flex-col justify-between p-6 group transition-all duration-300 hover:shadow-2xl">
            {/* Background Patient Couple image */}
            <img
              src={draSandraImg}
              alt="Dra. Sandra Rodríguez con paciente"
              className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-95"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />

            {/* Top Text Typography */}
            <div className="relative z-10 text-center">
              <p className="text-white text-xs sm:text-sm font-montserrat font-bold tracking-tight mb-1 drop-shadow-md">
                ¡Levanta la mano si también adoras a nuestra
              </p>
              <h3 className="font-script text-4xl sm:text-5xl text-white drop-shadow-lg leading-tight">
                Doctora Sandra
              </h3>
            </div>

            {/* Bottom Card Content & Brand Watermark */}
            <div className="relative z-10 flex flex-col items-center">
              <Logo variant="watermark" className="mb-3 w-full max-w-[240px] justify-center" />

              <a
                href="https://wa.me/573122154916?text=Hola%20Dra.%20Sandra,%20quiero%20conocer%20m%C3%A1s%20sobre%20los%20tratamientos"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#1eb857] text-white py-2.5 px-4 rounded-lg text-xs font-montserrat font-semibold tracking-wider uppercase text-center transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Escríbenos por WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 2: Sonríe con Seguridad */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white border border-[#dee8ff] aspect-[1/1] flex flex-col justify-between p-6 group transition-all duration-300 hover:shadow-2xl">
            {/* Background Model Smile */}
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80"
              alt="Sonríe con Seguridad"
              className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent" />

            {/* Top Badge */}
            <div className="relative z-10">
              <span className="font-script text-5xl sm:text-6xl text-[#17b9c7] block leading-none drop-shadow-sm">
                Sonríe
              </span>
              <span className="font-montserrat font-extrabold text-2xl sm:text-3xl text-[#006876] tracking-tight uppercase block -mt-1">
                con Seguridad
              </span>
            </div>

            {/* Bottom CTA */}
            <div className="relative z-10 flex flex-col items-center">
              <Logo variant="watermark" className="mb-3 w-full max-w-[240px] justify-center" />

              <button
                onClick={onOpenQuiz}
                className="w-full bg-[#006876] hover:bg-[#17b9c7] text-white py-2 px-4 rounded-lg text-xs font-montserrat font-semibold tracking-wider uppercase text-center transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#88f3ff]" />
                <span>Test de Sonrisa Online</span>
              </button>
            </div>
          </div>

          {/* Card 3: Llegó el momento de tener la sonrisa de tus sueños */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white border border-[#dee8ff] aspect-[1/1] flex flex-col justify-between p-6 group transition-all duration-300 hover:shadow-2xl">
            {/* Background Happy Smile */}
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
              alt="Sonrisa de tus sueños"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#006971]/90 via-[#006971]/30 to-transparent" />

            {/* Top Text */}
            <div className="relative z-10">
              <span className="text-[11px] font-montserrat font-bold tracking-[0.2em] text-[#e7eeff] uppercase block">
                VALORACIÓN PERSONALIZADA
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 text-white text-center space-y-3">
              <Logo variant="watermark" className="mx-auto mb-1 max-w-[240px] justify-center" />

              <p className="text-xs font-montserrat font-medium text-[#88f3ff] uppercase tracking-wider">
                Llegó el momento de tener la
              </p>
              <h3 className="font-script text-3xl sm:text-4xl text-white font-normal leading-tight drop-shadow-md">
                sonrisa de tus sueños
              </h3>

              <div className="pt-1">
                <button
                  onClick={onOpenBooking}
                  className="w-full bg-white hover:bg-[#e7eeff] text-[#006971] py-2.5 px-4 rounded-lg text-xs font-montserrat font-bold tracking-wider uppercase text-center transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4 text-[#17b9c7]" />
                  <span>Agenda tu Cita Hoy</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Patient Testimonials Row */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#dee8ff] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Header & Stats */}
            <div className="lg:col-span-4 space-y-4 text-left">
              <div className="inline-flex items-center gap-1.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <h3 className="font-playfair text-2xl sm:text-3xl font-semibold text-[#121c2c]">
                Opiniones de Nuestros Pacientes
              </h3>
              <p className="font-montserrat text-sm text-[#3c494b] font-light leading-relaxed">
                Descubre cómo hemos transformado la autoestima y sonrisa de cientos de pacientes con tratamientos cómodos y duraderos.
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 text-xs font-montserrat font-semibold tracking-wider text-[#006971] hover:text-[#17b9c7] uppercase transition-colors"
                >
                  <span>Ver todas las reseñas</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Col: Testimonial Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {testimonialsData.slice(0, 2).map((t) => (
                <div
                  key={t.id}
                  className="bg-[#f9f9ff] border border-[#e7eeff] rounded-xl p-6 relative flex flex-col justify-between"
                >
                  <Quote className="w-8 h-8 text-[#17b9c7]/20 absolute top-4 right-4" />
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-11 h-11 rounded-full object-cover border border-[#17b9c7]/40"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="font-montserrat text-sm font-semibold text-[#121c2c]">
                          {t.name}
                        </h4>
                        <span className="text-[11px] text-[#006971] font-medium font-montserrat">
                          {t.treatment}
                        </span>
                      </div>
                    </div>

                    <p className="font-montserrat text-xs text-[#3c494b] font-light leading-relaxed mb-4 italic">
                      "{t.comment}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#dee8ff] text-[11px] text-[#6c797b]">
                    <span className="font-medium text-[#121c2c]">{t.highlight}</span>
                    <div className="flex text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
