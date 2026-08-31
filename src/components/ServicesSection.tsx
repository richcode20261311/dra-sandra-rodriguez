import React from 'react';
import { ArrowRight, Sparkles, Droplets, Shield, Heart, Flower2, Smile, SmilePlus } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onOpenBooking }) => {
  const getIcon = (iconName: string) => {
    const iconClasses = "w-5 h-5 text-[#006971] group-hover:text-white transition-colors duration-300";
    switch (iconName) {
      case 'sparkles':
        return <Sparkles className={iconClasses} />;
      case 'droplet':
        return <Droplets className={iconClasses} />;
      case 'shield':
        return <Shield className={iconClasses} />;
      case 'heart':
        return <Heart className={iconClasses} />;
      case 'leaf':
        return <Flower2 className={iconClasses} />;
      case 'smile':
        return <Smile className={iconClasses} />;
      case 'child':
        return <SmilePlus className={iconClasses} />;
      default:
        return <Sparkles className={iconClasses} />;
    }
  };

  return (
    <section id="servicios" className="py-24 bg-[#f9f9ff] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-montserrat font-medium tracking-[0.25em] text-[#006971] uppercase block">
            ESPECIALIDADES
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-normal text-[#121c2c]">
            Servicios de Élite
          </h2>
          <div className="w-12 h-0.5 bg-[#17b9c7] mx-auto mt-4" />
        </div>

        {/* Grid layout with enhanced luxury aesthetic cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {servicesData.map((service, index) => {
            const isLastOdd = index === servicesData.length - 1 && servicesData.length % 3 === 1;
            return (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className={`group relative bg-white rounded-2xl overflow-hidden border border-[#dee8ff] shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer${isLastOdd ? ' lg:col-start-2' : ''}`}
            >
              {/* Card Image Banner with Subtle Gradient Overlay */}
              <div className="relative h-48 w-full overflow-hidden bg-[#f0f3ff]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-[0.95] group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Badge Overlay */}
                {service.badge && (
                  <span className="absolute top-4 right-4 text-[10px] uppercase font-montserrat tracking-widest px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#006971] font-bold shadow-sm z-10">
                    {service.badge}
                  </span>
                )}

                {/* Floating Icon Box */}
                <div className="absolute -bottom-5 left-6 w-12 h-12 rounded-xl bg-white shadow-lg border border-[#dee8ff] flex items-center justify-center group-hover:bg-[#006971] group-hover:border-[#006971] transition-all duration-300 z-10">
                  {getIcon(service.iconName)}
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 pt-9 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-playfair text-xl sm:text-2xl font-semibold text-[#121c2c] mb-2.5 group-hover:text-[#006971] transition-colors">
                    {service.title}
                  </h3>

                  <p className="font-montserrat text-xs sm:text-sm text-[#3c494b] font-light leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Action Link */}
                <div className="pt-4 border-t border-[#f0f3ff] flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-xs font-montserrat font-bold tracking-widest text-[#006971] group-hover:text-[#17b9c7] uppercase transition-colors">
                    <span>CONOCER TRATAMIENTO</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </span>
                </div>
              </div>
            </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
