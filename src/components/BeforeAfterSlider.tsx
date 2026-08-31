import React, { useState } from 'react';
import { Sparkles, Check, ArrowLeftRight, ChevronRight, Eye } from 'lucide-react';
import { Logo } from './Logo';
import { galleryCases } from '../data/galleryData';
import { BeforeAfterCase } from '../types';

interface BeforeAfterSliderProps {
  onOpenBooking: () => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedCase, setSelectedCase] = useState<BeforeAfterCase>(galleryCases[0]);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const categories = [
    { id: 'all', label: 'Todos los Casos' },
    { id: 'carillas', label: 'Carillas en Resina' },
    { id: 'diseno', label: 'Diseño en Porcelana' },
    { id: 'blanqueamiento', label: 'Blanqueamiento' },
    { id: 'ortodoncia', label: 'Ortodoncia Invisible' },
  ];

  const filteredCases = activeCategory === 'all'
    ? galleryCases
    : galleryCases.filter(c => c.category === activeCategory);

  const handleSliderMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging && e.buttons !== 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.clientX, rect);
  };

  return (
    <section id="casos" className="py-24 bg-[#ffffff] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-montserrat font-medium tracking-[0.25em] text-[#006971] uppercase block">
            RESULTADOS REALES
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-normal text-[#121c2c]">
            Transformaciones de Sonrisa
          </h2>
          <p className="font-montserrat text-sm sm:text-base text-[#3c494b] font-light max-w-xl mx-auto">
            Descubre el cambio antes y después de nuestros pacientes. Cada tratamiento es diseñado a la medida de su armonía facial.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                const first = cat.id === 'all' ? galleryCases[0] : galleryCases.find(c => c.category === cat.id);
                if (first) setSelectedCase(first);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-montserrat tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#006971] text-white shadow-md font-medium'
                  : 'bg-[#f0f3ff] text-[#3c494b] hover:bg-[#dee8ff] hover:text-[#121c2c]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Main Interactive Comparison Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#f9f9ff] border border-[#dee8ff] rounded-2xl p-4 sm:p-8 shadow-sm">
          
          {/* Left / Center: Interactive Before-After Stack Slider */}
          <div className="lg:col-span-7">
            <div className="relative rounded-xl overflow-hidden shadow-xl bg-white border border-[#e7eeff] select-none">
              
              {/* Top Banner Tag matching the user's reference image */}
              <div className="bg-[#17b9c7] text-white py-2 px-4 text-center font-montserrat font-bold text-sm tracking-wider uppercase shadow-inner">
                {selectedCase.categoryLabel}
              </div>

              {/* Slider Viewport Container */}
              <div
                className="relative h-80 sm:h-96 md:h-[420px] w-full overflow-hidden cursor-ew-resize touch-none"
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
              >
                {/* AFTER IMAGE (Background / Right) */}
                <img
                  src={selectedCase.afterImage}
                  alt={`Después - ${selectedCase.title}`}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  referrerPolicy="no-referrer"
                />

                {/* Tag "DESPUÉS" */}
                <div className="absolute top-4 right-4 bg-[#006971]/90 backdrop-blur-md text-white text-[11px] font-montserrat font-semibold tracking-wider px-3 py-1 rounded-full pointer-events-none z-10 shadow-sm">
                  DESPUÉS
                </div>

                {/* BEFORE IMAGE (Clipped / Left) */}
                <div
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={selectedCase.beforeImage}
                    alt={`Antes - ${selectedCase.title}`}
                    className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
                    style={{ width: '100%', minWidth: '100%' }}
                    referrerPolicy="no-referrer"
                  />
                  {/* Tag "ANTES" */}
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-[11px] font-montserrat font-semibold tracking-wider px-3 py-1 rounded-full z-10 shadow-sm">
                    ANTES
                  </div>
                </div>

                {/* Slider Handle Divider Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none z-20"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white border-2 border-[#17b9c7] shadow-lg flex items-center justify-center text-[#17b9c7]">
                    <ArrowLeftRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Estética Dental Brand Stamp Overlay in Corner matching uploaded image */}
                <div className="absolute bottom-3 left-3 pointer-events-none z-10">
                  <Logo variant="watermark" />
                </div>
              </div>

              {/* Slider instruction */}
              <div className="py-2.5 px-4 bg-[#f0f3ff] text-center text-xs text-[#6c797b] font-montserrat flex items-center justify-center gap-2">
                <ArrowLeftRight className="w-3.5 h-3.5 text-[#17b9c7]" />
                <span>Desliza la barra horizontal para comparar el cambio</span>
              </div>
            </div>
          </div>

          {/* Right Column: Case Study Details & Quick Switcher */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <div>
              <span className="text-xs font-montserrat font-medium tracking-[0.2em] text-[#17b9c7] uppercase block mb-1">
                CASO CLÍNICO DETALLADO
              </span>
              <h3 className="font-playfair text-2xl sm:text-3xl font-semibold text-[#121c2c]">
                {selectedCase.title}
              </h3>
            </div>

            <p className="font-montserrat text-sm text-[#3c494b] font-light leading-relaxed">
              {selectedCase.description}
            </p>

            <div className="space-y-2.5 py-3 border-y border-[#dee8ff]">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#6c797b] font-montserrat">Tratamiento Realizado:</span>
                <span className="font-semibold text-[#121c2c] text-right max-w-[200px]">{selectedCase.treatment}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#6c797b] font-montserrat">Tiempo Total:</span>
                <span className="font-semibold text-[#17b9c7]">{selectedCase.duration}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#6c797b] font-montserrat">Edad Paciente:</span>
                <span className="font-semibold text-[#121c2c]">{selectedCase.patientAge}</span>
              </div>
            </div>

            {/* Other Cases Mini-Grid */}
            <div className="space-y-2">
              <span className="text-[11px] font-montserrat font-semibold tracking-wider text-[#6c797b] uppercase block">
                Ver otros casos:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {filteredCases.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      setSelectedCase(c);
                      setSliderPosition(50);
                    }}
                    className={`p-2.5 rounded-lg text-left border transition-all cursor-pointer ${
                      selectedCase.id === c.id
                        ? 'border-[#17b9c7] bg-[#f0fbfb] shadow-xs'
                        : 'border-[#dee8ff] bg-white hover:border-[#17b9c7]/50'
                    }`}
                  >
                    <span className="text-xs font-montserrat font-semibold text-[#121c2c] block truncate">
                      {c.title}
                    </span>
                    <span className="text-[10px] text-[#006971] block mt-0.5">
                      {c.duration}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full bg-[#17b9c7] hover:bg-[#006971] text-white py-3 px-6 rounded-lg text-xs font-montserrat font-semibold tracking-[0.15em] uppercase transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span>QUIERO UN RESULTADO ASÍ</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
