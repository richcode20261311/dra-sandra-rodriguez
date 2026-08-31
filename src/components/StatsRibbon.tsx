import React, { useState, useEffect, useRef } from 'react';
import { Award, Sparkles, Heart, Smile } from 'lucide-react';

interface StatItemProps {
  targetValue: number;
  suffix: string;
  label: string;
  icon?: React.ReactNode;
  duration?: number;
}

const AnimatedCounter: React.FC<StatItemProps> = ({ targetValue, suffix, label, icon, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || targetValue === 0) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function outExpo for smooth deceleration
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * targetValue));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, targetValue, duration]);

  return (
    <div
      ref={ref}
      className="group relative flex flex-col items-center justify-center text-center p-5 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-[#006971]/5 hover:-translate-y-1 border border-transparent hover:border-[#dee8ff] cursor-pointer"
    >
      <div className="h-12 flex items-center justify-center mb-1 transition-transform duration-300 group-hover:scale-110">
        {icon ? (
          <div className="w-12 h-12 rounded-2xl bg-[#006971]/10 flex items-center justify-center text-[#006971] group-hover:bg-[#006971] group-hover:text-white transition-colors duration-300">
            {icon}
          </div>
        ) : (
          <span className="font-playfair text-3xl sm:text-4xl md:text-[42px] font-medium text-[#006971] tracking-tight group-hover:text-[#17b9c7] transition-colors duration-300">
            {count}{suffix}
          </span>
        )}
      </div>
      
      <span className="text-[11px] sm:text-xs font-montserrat font-semibold tracking-[0.18em] text-[#3c494b] uppercase mt-2 group-hover:text-[#121c2c] transition-colors duration-300">
        {label}
      </span>
      
      <div className="w-6 h-0.5 bg-transparent group-hover:bg-[#17b9c7] transition-all duration-300 mt-2 rounded-full" />
    </div>
  );
};

export const StatsRibbon: React.FC = () => {
  const stats = [
    {
      targetValue: 15,
      suffix: '+',
      label: 'AÑOS DE EXPERIENCIA',
      icon: <Award className="w-6 h-6" />,
    },
    {
      targetValue: 2000,
      suffix: '+',
      label: 'SONRISAS TRANSFORMADAS',
      icon: <Smile className="w-6 h-6" />,
    },
    {
      targetValue: 98,
      suffix: '%',
      label: 'PACIENTES SATISFECHOS',
      icon: <Heart className="w-6 h-6" />,
    },
    {
      targetValue: 100,
      suffix: '%',
      label: 'TECNOLOGÍA DE VANGUARDIA',
      icon: <Sparkles className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-r from-[#f9f9ff] via-[#f0f3ff]/80 to-[#f9f9ff] border-y border-[#dee8ff]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, idx) => (
            <AnimatedCounter
              key={idx}
              targetValue={stat.targetValue}
              suffix={stat.suffix}
              label={stat.label}
              icon={undefined} // displays numeric targetValue with count-up animation
            />
          ))}
        </div>
      </div>
    </section>
  );
};
