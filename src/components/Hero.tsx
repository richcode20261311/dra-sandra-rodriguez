import React from 'react';
import { ArrowRight, Phone, ShieldCheck, Sparkles, Star, Award } from 'lucide-react';
import draSandraImg from '../../assets/dra-sandra.png';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenQuiz }) => {
  return (
    <section id="inicio" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-[#f9f9ff] via-[#f4f7fc] to-[#f9f9ff]">
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#17b9c7]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[450px] h-[450px] bg-[#dee8ff]/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-[#f5f1ea]/60 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tagline / Eyebrow Badge (Eliminates duplicated logo with navbar) */}
            <div className="inline-flex items-center gap-2 bg-[#e0f8fa] text-[#006971] px-3.5 py-1.5 rounded-full text-xs font-montserrat font-semibold tracking-wider uppercase border border-[#17b9c7]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#17b9c7]" />
              <span>ODONTOLOGÍA ESTÉTICA & SPA DENTAL</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-semibold text-[#121c2c] leading-[1.1] tracking-[-0.02em]">
              Conquista el mundo con tu{' '}
              <span className="text-[#17b9c7] italic font-normal tracking-tight">
                sonrisa
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-montserrat text-base sm:text-lg text-[#3c494b] font-light leading-relaxed max-w-xl">
              El más alto nivel de estética en tu sonrisa, combinando precisión técnica con una experiencia de spa relajante.
            </p>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <button
                onClick={onOpenBooking}
                className="bg-[#8ec7cd] hover:bg-[#17b9c7] text-white px-7 py-3.5 rounded-lg text-xs font-montserrat font-semibold tracking-[0.14em] uppercase transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>AGENDA TU CITA DE VALORACIÓN</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="tel:3122154916"
                className="flex items-center justify-center sm:justify-start gap-2.5 text-xs font-montserrat text-[#121c2c] hover:text-[#006971] transition-colors py-2 px-3 group"
              >
                <div className="w-8 h-8 rounded-full bg-[#e7eeff] flex items-center justify-center text-[#17b9c7] group-hover:bg-[#17b9c7] group-hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-[#6c797b] block font-light">O llámanos al</span>
                  <span className="font-semibold text-xs tracking-wider">312 215 4916</span>
                </div>
              </a>
            </div>

            {/* Trust highlights */}
            <div className="pt-6 border-t border-[#dee8ff]/80 flex flex-wrap items-center gap-6 text-xs text-[#6c797b]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#17b9c7]" />
                <span className="font-medium">100% Personalizado</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#17b9c7]" />
                <span className="font-medium">Tecnología Digital 3D</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-[#121c2c]">4.9/5</span>
                <span>(500+ pacientes)</span>
              </div>
            </div>

          </div>

          {/* Right Column: High Quality Dental Doctor Portrait in Modern Clinic */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Doctor Card Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-[#e7eeff] p-2 sm:p-3 transition-transform duration-500 hover:scale-[1.01]">
                <div className="relative rounded-xl overflow-hidden aspect-[4/4.8] bg-[#f0f3ff]">
                  <img
                    src={draSandraImg}
                    alt="Dra. Sandra Rodríguez - Odontóloga Especialista en Estética Dental"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Doctor signature overlay in card */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md px-4 py-3 rounded-lg border border-white/60 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-playfair text-base font-semibold text-[#121c2c]">
                          Dra. Sandra Rodríguez
                        </h4>
                        <p className="text-[11px] font-montserrat text-[#006971] font-medium tracking-wide">
                          Especialista en Estética Dental & Rehabilitación
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#17b9c7]/15 flex items-center justify-center text-[#17b9c7]">
                        <Award className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating aesthetic quote pill */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full shadow-lg border border-[#dee8ff] items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#17b9c7] animate-pulse" />
                <span className="text-[11px] font-montserrat font-medium text-[#121c2c]">
                  Atención odontológica sin dolor & relajante
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
