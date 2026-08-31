import { Testimonial, CampaignCard } from '../types';

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    name: 'Carolina Gómez',
    role: 'Paciente de Diseño de Sonrisa',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    comment: 'La Dra. Sandra transformó no solo mis dientes sino mi seguridad total al hablar en público. La atención es como un spa, cero estrés o dolor.',
    treatment: 'Carillas en Resina de Alta Estética',
    rating: 5,
    highlight: '¡La mejor experiencia dental de mi vida!'
  },
  {
    id: '2',
    name: 'Alejandro Martínez',
    role: 'Paciente de Implantes & Rehabilitación',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    comment: 'La precisión y delicadeza con la que trabaja el equipo es increíble. Los implantes se sienten exactamente como mis dientes naturales.',
    treatment: 'Implantes Dentales Guiados 3D',
    rating: 5,
    highlight: 'Resultados 100% naturales'
  },
  {
    id: '3',
    name: 'Valentina Restrepo',
    role: 'Paciente de Ortodoncia Invisible',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    comment: 'Nadie notó que llevaba alineadores y en solo 6 meses mis dientes quedaron perfectamente alineados. La clínica es hermosa y relajante.',
    treatment: 'Alineadores Invisibles',
    rating: 5,
    highlight: 'Comodidad y discreción absoluta'
  }
];

export const campaignCards: CampaignCard[] = [
  {
    id: 'dra-sandra-love',
    title: 'Nuestra Comunidad',
    subtitle: '¡Levanta la mano si también adoras a nuestra Doctora Sandra!',
    scriptText: 'Doctora Sandra',
    tagline: 'El más alto nivel de estética en tu sonrisa',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    ctaText: 'Conocer Testimonios',
    actionType: 'whatsapp'
  },
  {
    id: 'sonrie-seguridad',
    title: 'Confianza y Libertad',
    subtitle: 'Sonríe con Seguridad',
    scriptText: 'Sonríe',
    tagline: '¡El más alto nivel de estética en tu sonrisa!',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    ctaText: 'Test de Sonrisa Online',
    actionType: 'quiz'
  },
  {
    id: 'sonrisa-suenos',
    title: 'Transformación Total',
    subtitle: 'Llegó el momento de tener la sonrisa de tus sueños',
    scriptText: 'sonrisa de tus sueños',
    tagline: '¡El más alto nivel de estética en tu sonrisa!',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    ctaText: 'Agendar Cita de Valoración',
    actionType: 'booking'
  }
];
