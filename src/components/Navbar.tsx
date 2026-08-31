import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Sparkles, ArrowRight, CalendarCheck } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenQuiz }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'INICIO', href: '#inicio' },
    { name: 'SERVICIOS', href: '#servicios' },
    { name: 'SOBRE MÍ', href: '#sobre-mi' },
    { name: 'ANTES Y DESPUÉS', href: '#casos' },
    { name: 'UBICACIÓN', href: '#ubicacion' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-[#e7eeff] py-3.5'
          : 'bg-white/70 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo matching the original visual header */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <Logo variant="navbar" className="group-hover:border-[#006971] transition-colors" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-montserrat tracking-[0.18em] font-medium text-[#2d3748] hover:text-[#17b9c7] transition-colors uppercase relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#17b9c7] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:3122154916"
              className="flex items-center gap-2 text-xs font-medium text-[#2d3748] hover:text-[#006971] tracking-wider transition-colors px-3 py-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#17b9c7]" />
              <span className="font-semibold">312 215 4916</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="bg-[#17b9c7] hover:bg-[#008ea0] text-white px-5 py-2.5 rounded-full text-xs font-montserrat font-medium tracking-[0.15em] uppercase transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
              <span>Agendar Cita</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="bg-[#17b9c7] text-white px-3 py-1.5 rounded-full text-[11px] font-medium tracking-wider uppercase"
            >
              Cita
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#2d3748] hover:text-[#17b9c7] hover:bg-[#f0f3ff] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-[#e7eeff] px-6 py-5 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-medium tracking-[0.2em] text-[#2d3748] hover:text-[#17b9c7] py-2 border-b border-gray-50 uppercase"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <a
                href="tel:3122154916"
                className="flex items-center justify-center gap-2 text-sm text-[#006971] py-2 bg-[#f0f3ff] rounded-lg font-medium"
              >
                <Phone className="w-4 h-4 text-[#17b9c7]" />
                Llamar: 312 215 4916
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#17b9c7] hover:bg-[#008ea0] text-white py-3 rounded-full text-xs font-montserrat font-medium tracking-[0.15em] uppercase flex items-center justify-center gap-2 shadow-sm"
              >
                <CalendarCheck className="w-4 h-4" />
                Agendar Cita de Valoración
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuiz();
                }}
                className="w-full border border-[#17b9c7] text-[#006971] py-2.5 rounded-full text-xs font-montserrat font-medium tracking-[0.12em] uppercase flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#17b9c7]" />
                Test de Sonrisa Online
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
