import React, { useEffect } from 'react';
import { X, Check, Clock, Calendar, Sparkles, UserCheck, ArrowRight, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  useEffect(() => {
    if (!service) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl border border-[#dee8ff] max-w-2xl w-full max-h-[90vh] overflow-y-auto relative text-left">

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-3 right-3 z-30 w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-md border border-[#dee8ff] text-[#3c494b] hover:bg-[#006971] hover:text-white hover:border-[#006971] transition-all duration-200"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Top Header Banner with image */}
        <div className="relative h-56 sm:h-64 overflow-hidden rounded-t-2xl bg-[#006971]">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#006971] via-[#006971]/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-montserrat font-bold tracking-[0.2em] text-[#88f3ff] uppercase">
                {service.number} ESPECIALIDAD
              </span>
              {service.badge && (
                <span className="text-[10px] bg-white/20 backdrop-blur-sm px-2.5 py-0.5 rounded-full font-montserrat font-medium">
                  {service.badge}
                </span>
              )}
            </div>
            <h3 className="font-playfair text-2xl sm:text-3xl font-semibold">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Detailed description */}
          <div>
            <h4 className="font-montserrat text-xs font-semibold text-[#006971] uppercase tracking-wider mb-2">
              DESCRIPCIÓN DEL TRATAMIENTO
            </h4>
            <p className="font-montserrat text-sm text-[#3c494b] font-light leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Key Specs Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-[#f0f3ff] p-4 rounded-xl border border-[#dee8ff]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#006971] shadow-xs">
                <Clock className="w-4 h-4 text-[#17b9c7]" />
              </div>
              <div>
                <span className="text-[10px] font-montserrat text-[#6c797b] block uppercase">Duración</span>
                <span className="text-xs font-semibold text-[#121c2c]">{service.duration}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#006971] shadow-xs">
                <Calendar className="w-4 h-4 text-[#17b9c7]" />
              </div>
              <div>
                <span className="text-[10px] font-montserrat text-[#6c797b] block uppercase">Sesiones</span>
                <span className="text-xs font-semibold text-[#121c2c]">{service.sessions}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#006971] shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#17b9c7]" />
              </div>
              <div>
                <span className="text-[10px] font-montserrat text-[#6c797b] block uppercase">Garantía</span>
                <span className="text-xs font-semibold text-[#121c2c]">Certificada</span>
              </div>
            </div>
          </div>

          {/* Benefits list */}
          <div>
            <h4 className="font-montserrat text-xs font-semibold text-[#006971] uppercase tracking-wider mb-3">
              BENEFICIOS CLAVE
            </h4>
            <div className="space-y-2.5">
              {service.benefits.map((b, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#17b9c7]/20 flex items-center justify-center text-[#006971] mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 text-[#006971]" />
                  </div>
                  <span className="text-xs font-montserrat text-[#3c494b] font-normal leading-relaxed">
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal for */}
          <div className="bg-[#f9f9ff] p-4 rounded-xl border border-[#dee8ff]">
            <span className="text-[10px] font-montserrat font-bold text-[#006971] uppercase tracking-wider block mb-1">
              ¿PARA QUIÉN ESTÁ INDICADO?
            </span>
            <p className="text-xs font-montserrat text-[#3c494b]">
              {service.idealFor}
            </p>
          </div>

          {/* Actions */}
          <div className="pt-2">
            <button
              onClick={() => {
                onClose();
                onBookService(service.id);
              }}
              className="w-full bg-[#17b9c7] hover:bg-[#006971] text-white py-3 px-6 rounded-xl text-xs font-montserrat font-semibold tracking-[0.15em] uppercase transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Agendar Cita para {service.title}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
