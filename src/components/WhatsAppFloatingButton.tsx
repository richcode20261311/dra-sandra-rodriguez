import React, { useState } from 'react';
import { X, Send, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const defaultPhone = '573122154916';

  const handleSendWhatsApp = (customText?: string) => {
    const textToSend = customText || userMsg || '¡Hola Dra. Sandra! Me gustaría agendar una cita de valoración en Estética Dental.';
    const encoded = encodeURIComponent(textToSend);
    window.open(`https://wa.me/${defaultPhone}?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  const quickMessages = [
    '✨ Deseo cotizar Diseño de Sonrisa',
    '🦷 Información sobre Blanqueamiento',
    '📅 Agendar cita de valoración',
    '📍 ¿Dónde están ubicados?',
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Quick Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border border-[#dee8ff] overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-[#006971] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#25D366]/20 border border-white/40 flex items-center justify-center text-white">
                  <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
                </div>
                <div className="w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#006971] absolute bottom-0 right-0" />
              </div>
              <div className="text-left">
                <h4 className="font-playfair text-sm font-semibold">Dra. Sandra Rodríguez</h4>
                <p className="text-[10px] text-[#88f3ff] font-montserrat flex items-center gap-1">
                  <span>WhatsApp Oficial</span>
                  <span>•</span>
                  <span className="text-emerald-300">En línea</span>
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-[#f9f9ff] space-y-3 text-left">
            <div className="bg-white p-3 rounded-xl rounded-tl-none border border-[#e7eeff] shadow-xs text-xs text-[#121c2c] font-montserrat space-y-1">
              <p className="font-semibold text-[#006971]">¡Hola! Bienvenida a Estética Dental ✨</p>
              <p className="text-[#3c494b] font-light">
                ¿En qué podemos ayudarte hoy? Selecciona una opción o escribe tu consulta:
              </p>
            </div>

            {/* Quick Option Pills */}
            <div className="space-y-1.5 pt-1">
              {quickMessages.map((msg, i) => (
                <button
                  key={i}
                  onClick={() => handleSendWhatsApp(msg)}
                  className="w-full text-left text-xs bg-white hover:bg-[#e7eeff] text-[#006971] p-2.5 rounded-lg border border-[#dee8ff] transition-colors font-montserrat flex items-center justify-between group cursor-pointer"
                >
                  <span className="truncate">{msg}</span>
                  <WhatsAppIcon className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#25D366]" />
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <div className="pt-2 flex items-center gap-2">
              <input
                type="text"
                value={userMsg}
                onChange={(e) => setUserMsg(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendWhatsApp()}
                placeholder="Escribe por WhatsApp..."
                className="flex-1 text-xs bg-white border border-[#dee8ff] rounded-lg px-3 py-2 text-[#121c2c] focus:outline-none focus:border-[#17b9c7] font-montserrat"
              />
              <button
                onClick={() => handleSendWhatsApp()}
                className="bg-[#25D366] hover:bg-[#1eb857] text-white p-2 rounded-lg transition-colors cursor-pointer flex items-center justify-center"
                title="Enviar por WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

        </div>
      )}

      {/* Floating Trigger Button matching screenshot with official WhatsApp icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 bg-[#25D366] hover:bg-[#1eb857] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
        aria-label="Abrir chat de WhatsApp"
      >
        <WhatsAppIcon className="w-8 h-8 text-white" />
        
        {/* Notification Badge */}
        <span className="absolute -top-1 -right-1 bg-[#ba1a1a] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-xs">
          1
        </span>
      </button>
    </div>
  );
};

