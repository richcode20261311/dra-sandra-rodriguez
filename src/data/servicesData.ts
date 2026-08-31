import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'diseno-de-sonrisa',
    number: '01.',
    title: 'Diseño de Sonrisa',
    shortDesc: 'Armonización dental personalizada utilizando carillas de porcelana o resina de alta estética para lograr la sonrisa ideal.',
    fullDesc: 'El diseño de sonrisa es un procedimiento integral que combina análisis facial, proporción áurea y tecnología digital 3D para proyectar y confeccionar carillas de resina o porcelana de máxima naturalidad y armonía.',
    benefits: [
      'Alineación y forma dental personalizada a tus rasgos faciales',
      'Materiales biocompatibles de máxima durabilidad y translucidez',
      'Simulación digital previa para visualizar el resultado final',
      'Procedimiento mínimamente invasivo sin dolor'
    ],
    duration: '2 a 3 citas',
    sessions: 'Personalizado',
    idealFor: 'Dientes desgastados, manchas severas, espacios interdentales o desarmonía de forma',
    iconName: 'sparkles',
    badge: 'Tratamiento Estrella',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blanqueamiento',
    number: '02.',
    title: 'Blanqueamiento',
    shortDesc: 'Tratamientos profesionales de última generación para aclarar el tono de tus dientes de forma segura, rápida y sin sensibilidad.',
    fullDesc: 'Utilizamos tecnología de fotocatalizadores LED en frío y geles con desensibilizantes de grado médico para lograr de 4 a 8 tonos más claros en una sola sesión en clínica, protegiendo al 100% el esmalte dental.',
    benefits: [
      'Resultados visibles inmediatos desde la primera sesión',
      'Tecnología cero sensibilidad con agentes remineralizantes',
      'Protocolo combinado de clínica + mantenimiento en casa',
      'Brillo natural y duradero'
    ],
    duration: '60 minutos',
    sessions: '1 a 2 sesiones',
    idealFor: 'Dientes manchados por café, té, tabaco o envejecimiento natural',
    iconName: 'droplet',
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'implantes-dentales',
    number: '03.',
    title: 'Implantes Dentales',
    shortDesc: 'Reemplazo permanente y natural de piezas dentales perdidas, restaurando la funcionalidad y estética completa de tu boca.',
    fullDesc: 'Sustitución de raíces dentales con titanio o zirconio biocompatible de la más alta pureza. Guiados por tomografía computarizada 3D para una colocación milimétrica, indolora y con cicatrización acelerada.',
    benefits: [
      'Fijación permanente idéntica a un diente natural',
      'Preservación ósea y de la estructura facial',
      'Recuperación total de la capacidad masticatoria',
      'Coronas personalizadas en cerámica de alta resistencia'
    ],
    duration: 'Planificado en fases',
    sessions: 'Cirugía guiada + rehabilitación',
    idealFor: 'Pérdida de una o varias piezas dentales',
    iconName: 'shield',
    badge: 'Alta Precisión',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ortodoncia-invisible',
    number: '04.',
    title: 'Ortodoncia Invisible',
    shortDesc: 'Alineación dental discreta y cómoda mediante alineadores transparentes removibles, sin brackets metálicos.',
    fullDesc: 'Secuencia de alineadores transparentes termoplásticos de grado médico fabricados a medida mediante escáner intraoral 3D. Removibles para comer y cepillarse con total comodidad.',
    benefits: [
      '100% invisibles y estéticos',
      'Removibles: sin restricciones alimenticias',
      'Higiene bucal impecable y sin llagas',
      'Monitoreo digital del progreso mes a mes'
    ],
    duration: '6 a 18 meses',
    sessions: 'Revisiones cada 4-6 semanas',
    idealFor: 'Apiñamiento, mordidas cruzadas o espacios no deseados',
    iconName: 'heart',
    badge: 'Sin Brackets',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'periodoncia',
    number: '05.',
    title: 'Periodoncia',
    shortDesc: 'Cuidado especializado de las encías y estructuras de soporte del diente para asegurar una salud oral a largo plazo.',
    fullDesc: 'Diagnóstico temprano y tratamiento avanzado de gingivitis y periodontitis mediante raspado ultrasónico, terapia láser y microcirugía plástica periodontal (gingivoplastia y recubrimiento radicular).',
    benefits: [
      'Eliminación de inflamación, sangrado y mal aliento',
      'Contorneo gingival estético para corregir sonrisas gingivales',
      'Protección duradera del soporte óseo dental',
      'Tecnología láser mínimamente invasiva'
    ],
    duration: '45 a 90 minutos',
    sessions: 'Según diagnóstico periodontal',
    idealFor: 'Encías inflamadas, retracción gingival o preparación para diseño estético',
    iconName: 'leaf',
    badge: 'Salud Integral',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rehabilitacion-oral',
    number: '06.',
    title: 'Rehabilitación Oral',
    shortDesc: 'Restauración integral de la función masticatoria y estética en casos complejos de desgaste o pérdida dental múltiple.',
    fullDesc: 'Tratamiento multidisciplinario que reconstruye la oclusión, dimensión vertical y armonía dental mediante prótesis fijas, incrustaciones cerámicas e implantes combinados.',
    benefits: [
      'Recuperación anatómica y funcional de la masticación',
      'Alivio de dolores articulares de mandíbula (ATM) y cabeza',
      'Rejuvenecimiento del tercio inferior del rostro',
      'Materiales cerámicos de última generación E-Max y Zirconia'
    ],
    duration: 'Plan personalizado',
    sessions: 'Fases secuenciales',
    idealFor: 'Desgaste dental severo por bruxismo o piezas múltiples comprometidas',
    iconName: 'smile',
    badge: 'Integral',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'odontopediatria',
    number: '07.',
    title: 'Odontopediatría',
    shortDesc: 'Atención dental especializada para niños en un ambiente amigable, previniendo problemas futuros desde temprana edad.',
    fullDesc: 'Enfoque lúdico y sin miedos para el cuidado preventivo y curativo de la dentición infantil y mixta, enseñando hábitos de higiene dental que duran toda la vida.',
    benefits: [
      'Ambiente cálido, sin traumas ni estrés para los más pequeños',
      'Selladores de fosas, fluorización y control de caries temprana',
      'Guía y corrección temprana de hábitos miofuncionales',
      'Atención cariñosa con psicopedagogía dental'
    ],
    duration: '30 a 45 minutos',
    sessions: 'Revisiones semestrales',
    idealFor: 'Bebés, niños y adolescentes',
    iconName: 'child',
    badge: 'Familiar',
    image: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=800&q=80'
  }
];
