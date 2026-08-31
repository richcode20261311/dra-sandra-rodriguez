import React, { useState, useEffect } from 'react';
import { X, Sparkles, Check, ArrowRight, ArrowLeft, HeartHandshake } from 'lucide-react';
import { servicesData } from '../data/servicesData';

interface SmileQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookResult: (serviceId: string) => void;
}

export const SmileQuizModal: React.FC<SmileQuizModalProps> = ({
  isOpen,
  onClose,
  onBookResult,
}) => {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState('');
  const [concern, setConcern] = useState('');
  const [timeline, setTimeline] = useState('');
  const [calculatedServiceId, setCalculatedServiceId] = useState('diseno-de-sonrisa');

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step === 1) {
      if (goal === 'blanquear') setCalculatedServiceId('blanqueamiento');
      else if (goal === 'alinear') setCalculatedServiceId('ortodoncia-invisible');
      else if (goal === 'reemplazar') setCalculatedServiceId('implantes-dentales');
      else setCalculatedServiceId('diseno-de-sonrisa');
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const calculatedService = servicesData.find((s) => s.id === calculatedServiceId) || servicesData[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl border border-[#dee8ff] max-w-lg w-full overflow-hidden relative text-left">

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-3 right-3 z-30 w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-md border border-[#dee8ff] text-[#3c494b] hover:bg-[#006971] hover:text-white hover:border-[#006971] transition-all duration-200"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="bg-[#006971] text-white p-6 relative">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-[#88f3ff]" />
            <span className="text-[10px] font-montserrat tracking-[0.2em] text-[#88f3ff] uppercase font-bold">
              DIAGNÓSTICO ESTÉTICO ONLINE
            </span>
          </div>

          <h3 className="font-playfair text-2xl font-semibold">
            Test: Diseña tu Sonrisa Ideal
          </h3>
          <p className="text-xs font-montserrat text-[#e7eeff] font-light mt-1">
            Paso {step} de 3 — Descubre el tratamiento recomendado para ti.
          </p>

          {/* Progress Bar */}
          <div className="w-full bg-white/20 h-1 rounded-full mt-4 overflow-hidden">
            <div
              className="bg-[#17b9c7] h-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Quiz Steps */}
        <div className="p-6 sm:p-8">
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="font-playfair text-lg text-[#121c2c] font-medium">
                1. ¿Cuál es tu principal objetivo estético?
              </h4>

              <div className="space-y-2.5">
                {[
                  { id: 'diseno', title: 'Transformación Total (Forma, tamaño y color)', desc: 'Carillas o lentes cerámicos' },
                  { id: 'blanquear', title: 'Aclarar el tono de mis dientes', desc: 'Eliminar manchas y devolver brillo' },
                  { id: 'alinear', title: 'Corregir dientes chuecos o espacios', desc: 'Sin brackets tradicionales' },
                  { id: 'reemplazar', title: 'Reemplazar piezas dentales ausentes', desc: 'Implantes fijos y naturales' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setGoal(item.id)}
                    className={`w-full p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                      goal === item.id
                        ? 'border-[#17b9c7] bg-[#f0fbfb] ring-2 ring-[#17b9c7]/20'
                        : 'border-[#dee8ff] bg-white hover:border-[#17b9c7]/50'
                    }`}
                  >
                    <span className="text-xs font-montserrat font-semibold text-[#121c2c] block">
                      {item.title}
                    </span>
                    <span className="text-[11px] font-montserrat text-[#6c797b] font-light">
                      {item.desc}
                    </span>
                  </button>
                ))}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  disabled={!goal}
                  onClick={handleNext}
                  className="bg-[#17b9c7] disabled:opacity-40 hover:bg-[#006971] text-white px-6 py-2.5 rounded-lg text-xs font-montserrat font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Siguiente</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h4 className="font-playfair text-lg text-[#121c2c] font-medium">
                2. ¿Tienes alguna sensibilidad o molestia actual?
              </h4>

              <div className="space-y-2.5">
                {[
                  { id: 'none', label: 'Ninguna, mis dientes y encías están sanos' },
                  { id: 'sensitivity', label: 'Sensibilidad leve con alimentos fríos o calientes' },
                  { id: 'gums', label: 'Mis encías sangran o están inflamadas' },
                  { id: 'bruxism', label: 'Aprieto o rechino los dientes al dormir (Bruxismo)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setConcern(item.id)}
                    className={`w-full p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                      concern === item.id
                        ? 'border-[#17b9c7] bg-[#f0fbfb] ring-2 ring-[#17b9c7]/20'
                        : 'border-[#dee8ff] bg-white hover:border-[#17b9c7]/50'
                    }`}
                  >
                    <span className="text-xs font-montserrat text-[#121c2c] font-medium block">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs font-montserrat text-[#6c797b] hover:text-[#121c2c] flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Atrás</span>
                </button>

                <button
                  disabled={!concern}
                  onClick={handleNext}
                  className="bg-[#17b9c7] disabled:opacity-40 hover:bg-[#006971] text-white px-6 py-2.5 rounded-lg text-xs font-montserrat font-semibold uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Ver Recomendación</span>
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5 text-center">
              <div className="w-12 h-12 rounded-full bg-[#17b9c7]/15 border border-[#17b9c7] mx-auto flex items-center justify-center text-[#006971]">
                <Sparkles className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[11px] font-montserrat font-bold tracking-wider text-[#006971] uppercase block mb-1">
                  RESULTADO SUGERIDO
                </span>
                <h4 className="font-playfair text-2xl font-semibold text-[#121c2c]">
                  {calculatedService.title}
                </h4>
                <p className="font-montserrat text-xs text-[#3c494b] font-light mt-2 max-w-sm mx-auto">
                  {calculatedService.shortDesc}
                </p>
              </div>

              <div className="bg-[#f0f3ff] p-4 rounded-xl text-left border border-[#dee8ff] space-y-2 text-xs font-montserrat text-[#3c494b]">
                <div className="flex items-center justify-between">
                  <span className="text-[#6c797b]">Tiempo estimado:</span>
                  <strong className="text-[#121c2c]">{calculatedService.duration}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#6c797b]">Especialista:</span>
                  <strong className="text-[#006971]">Dra. Sandra Rodríguez</strong>
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <button
                  onClick={() => {
                    onClose();
                    onBookResult(calculatedService.id);
                  }}
                  className="w-full bg-[#17b9c7] hover:bg-[#006971] text-white py-3.5 px-6 rounded-xl text-xs font-montserrat font-bold tracking-[0.15em] uppercase transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#88f3ff]" />
                  <span>Agendar Valoración para este Tratamiento</span>
                </button>

                <button
                  onClick={() => setStep(1)}
                  className="text-xs font-montserrat text-[#6c797b] hover:text-[#121c2c] underline block mx-auto"
                >
                  Repetir test
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
