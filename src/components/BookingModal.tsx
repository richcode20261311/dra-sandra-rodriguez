import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Sparkles, CheckCircle2, User, Phone, Mail, FileText, ChevronRight, CalendarCheck, Shield, Star } from 'lucide-react';
import { Logo } from './Logo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { servicesData } from '../data/servicesData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
}) => {
  const [selectedService, setSelectedService] = useState(
    initialServiceId || servicesData[0].id
  );
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('10:00 AM');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const timeSlots = [
    '08:30 AM',
    '10:00 AM',
    '11:30 AM',
    '02:00 PM',
    '03:30 PM',
    '05:00 PM',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleWhatsAppConfirmation = () => {
    const serviceObj = servicesData.find((s) => s.id === selectedService);
    const serviceTitle = serviceObj ? serviceObj.title : 'Valoración Estética';
    const message = `¡Hola Dra. Sandra! He solicitado una cita de valoración en la web:%0A%0A👤 *Nombre:* ${name}%0A📞 *Teléfono:* ${phone}%0A📧 *Email:* ${email}%0A✨ *Tratamiento:* ${serviceTitle}%0A📅 *Fecha:* ${date || 'Próxima disponibilidad'} a las ${time}%0A📝 *Notas:* ${notes || 'Sin comentarios adicionales'}`;

    window.open(`https://wa.me/573122154916?text=${message}`, '_blank');
    onClose();
    setIsSuccess(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl border border-[#dee8ff] w-full max-w-3xl max-h-[93vh] overflow-hidden flex flex-col sm:flex-row relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-3 right-3 z-30 w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-md border border-[#dee8ff] text-[#3c494b] hover:bg-[#006971] hover:text-white hover:border-[#006971] transition-all duration-200"
        >
          <X className="w-4 h-4" />
        </button>

        {/* ── LEFT PANEL: Branding gradient ── */}
        <div className="hidden sm:flex flex-col justify-between w-[42%] flex-shrink-0 p-8 relative overflow-hidden bg-gradient-to-b from-white via-[#d4f0f2] to-[#006971]">
          {/* Decorative soft circles */}
          <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-[#17b9c7]/10 pointer-events-none" />
          <div className="absolute bottom-24 -right-10 w-36 h-36 rounded-full bg-white/10 pointer-events-none" />

          {/* Logo at the top — always visible on white */}
          <div className="relative z-10">
            <Logo variant="badge" />
          </div>

          {/* Mid section: headline */}
          <div className="relative z-10 space-y-4">
            <h3 className="font-playfair text-2xl font-semibold text-[#006971] leading-snug">
              Tu sonrisa perfecta comienza aquí
            </h3>
            <p className="font-montserrat text-xs text-[#3c494b] font-light leading-relaxed">
              Reserva tu valoración sin costo con la Dra. Sandra Rodríguez y descubre el tratamiento ideal para ti.
            </p>

            {/* Trust pills */}
            <div className="space-y-2 pt-2">
              {[
                { icon: <Shield className="w-3.5 h-3.5" />, text: 'Valoración sin compromiso' },
                { icon: <CalendarCheck className="w-3.5 h-3.5" />, text: 'Confirmación inmediata' },
                { icon: <Star className="w-3.5 h-3.5" />, text: '4.9★ · 500+ pacientes felices' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-[11px] font-montserrat text-[#006971] font-medium">
                  <span className="w-6 h-6 rounded-full bg-white/80 flex items-center justify-center text-[#17b9c7] flex-shrink-0 shadow-sm">
                    {icon}
                  </span>
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom white-text tagline on dark green */}
          <p className="relative z-10 text-[10px] font-montserrat text-white/80 font-light tracking-wider">
            Estética Dental de Lujo · Cajicá, Cundinamarca
          </p>
        </div>

        {/* ── RIGHT PANEL: Form ── */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">

          {/* Mobile-only header */}
          <div className="sm:hidden mb-5 pb-4 border-b border-[#dee8ff]">
            <Logo variant="navbar" />
            <h3 className="font-playfair text-xl font-semibold text-[#121c2c] mt-3">
              Agenda tu Cita de Valoración
            </h3>
          </div>

          {/* Desktop header */}
          <div className="hidden sm:block mb-6">
            <h3 className="font-playfair text-2xl font-semibold text-[#121c2c]">
              Agenda tu Cita
            </h3>
            <p className="text-xs font-montserrat text-[#6c797b] font-light mt-1">
              Completa el formulario y te confirmamos en minutos.
            </p>
          </div>

          {isSuccess ? (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 mx-auto flex items-center justify-center text-emerald-600">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="font-playfair text-2xl font-semibold text-[#121c2c]">
                  ¡Solicitud Recibida con Éxito!
                </h4>
                <p className="font-montserrat text-xs text-[#3c494b] font-light mt-2 max-w-md mx-auto">
                  Gracias <strong className="text-[#121c2c]">{name}</strong>. Nuestro equipo confirmará tu cita para el tratamiento de{' '}
                  <strong className="text-[#006971]">
                    {servicesData.find((s) => s.id === selectedService)?.title}
                  </strong>.
                </p>
              </div>

              <div className="bg-[#f0f3ff] p-4 rounded-xl text-left text-xs font-montserrat text-[#3c494b] space-y-1.5 border border-[#dee8ff]">
                <p><strong>Horario tentativo:</strong> {date || 'A convenir'} — {time}</p>
                <p><strong>Teléfono de contacto:</strong> {phone}</p>
                <p><strong>Doctora:</strong> Dra. Sandra Rodríguez (Especialista en Estética)</p>
              </div>

              <div className="pt-3 space-y-3">
                <button
                  onClick={handleWhatsAppConfirmation}
                  className="w-full bg-[#25D366] hover:bg-[#1eb857] text-white py-3.5 px-6 rounded-xl text-xs font-montserrat font-bold tracking-wider uppercase transition-colors shadow-md flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                  <span>Confirmar por WhatsApp</span>
                </button>
                <button
                  onClick={() => { setIsSuccess(false); onClose(); }}
                  className="text-xs font-montserrat text-[#6c797b] hover:text-[#121c2c] underline"
                >
                  Cerrar ventana
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">

              {/* Treatment Selector */}
              <div>
                <label className="block text-[11px] font-montserrat font-semibold text-[#121c2c] uppercase tracking-wider mb-1.5">
                  Tratamiento de Interés *
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-[#f9f9ff] border border-[#dee8ff] rounded-xl px-4 py-3 text-xs font-montserrat text-[#121c2c] focus:outline-none focus:border-[#17b9c7] focus:ring-1 focus:ring-[#17b9c7]/30"
                  required
                >
                  {servicesData.map((s) => (
                    <option key={s.id} value={s.id}>{s.title}</option>
                  ))}
                </select>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-montserrat font-medium text-[#3c494b] mb-1">Nombre Completo *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#17b9c7] absolute left-3.5 top-3" />
                    <input
                      type="text" required value={name} onChange={(e) => setName(e.target.value)}
                      placeholder="Ej: Laura Morales"
                      className="w-full bg-[#f9f9ff] border border-[#dee8ff] rounded-xl pl-10 pr-4 py-2.5 text-xs font-montserrat text-[#121c2c] focus:outline-none focus:border-[#17b9c7] focus:ring-1 focus:ring-[#17b9c7]/30"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-montserrat font-medium text-[#3c494b] mb-1">Teléfono / WhatsApp *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#17b9c7] absolute left-3.5 top-3" />
                    <input
                      type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)}
                      placeholder="312 215 4916"
                      className="w-full bg-[#f9f9ff] border border-[#dee8ff] rounded-xl pl-10 pr-4 py-2.5 text-xs font-montserrat text-[#121c2c] focus:outline-none focus:border-[#17b9c7] focus:ring-1 focus:ring-[#17b9c7]/30"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-montserrat font-medium text-[#3c494b] mb-1">Correo Electrónico (opcional)</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#17b9c7] absolute left-3.5 top-3" />
                  <input
                    type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="tucorreo@ejemplo.com"
                    className="w-full bg-[#f9f9ff] border border-[#dee8ff] rounded-xl pl-10 pr-4 py-2.5 text-xs font-montserrat text-[#121c2c] focus:outline-none focus:border-[#17b9c7] focus:ring-1 focus:ring-[#17b9c7]/30"
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-montserrat font-medium text-[#3c494b] mb-1">Fecha Preferida</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#17b9c7] absolute left-3.5 top-3" />
                    <input
                      type="date" value={date} onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#f9f9ff] border border-[#dee8ff] rounded-xl pl-10 pr-4 py-2.5 text-xs font-montserrat text-[#121c2c] focus:outline-none focus:border-[#17b9c7] focus:ring-1 focus:ring-[#17b9c7]/30"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-montserrat font-medium text-[#3c494b] mb-1">Horario Preferido</label>
                  <select
                    value={time} onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-[#f9f9ff] border border-[#dee8ff] rounded-xl px-4 py-2.5 text-xs font-montserrat text-[#121c2c] focus:outline-none focus:border-[#17b9c7] focus:ring-1 focus:ring-[#17b9c7]/30"
                  >
                    {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-[11px] font-montserrat font-medium text-[#3c494b] mb-1">¿Tienes alguna duda o condición previa?</label>
                <textarea
                  value={notes} onChange={(e) => setNotes(e.target.value)} rows={2}
                  placeholder="Ej: Tengo manchas en los dientes frontales y busco una solución sin desgaste."
                  className="w-full bg-[#f9f9ff] border border-[#dee8ff] rounded-xl p-3 text-xs font-montserrat text-[#121c2c] focus:outline-none focus:border-[#17b9c7] focus:ring-1 focus:ring-[#17b9c7]/30 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#006971] hover:bg-[#17b9c7] text-white py-3.5 px-6 rounded-xl text-xs font-montserrat font-semibold tracking-[0.15em] uppercase transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Solicitar Cita de Valoración</span>
              </button>

              <p className="text-[10px] text-center text-[#6c797b] font-montserrat">
                🔒 Tus datos están 100% protegidos. No enviamos spam.
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

