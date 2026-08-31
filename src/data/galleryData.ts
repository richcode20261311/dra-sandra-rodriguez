import { BeforeAfterCase } from '../types';
import antesImg from '../../assets/antes.png';
import despuesImg from '../../assets/despues.png';
import antes2Img from '../../assets/antes2.png';
import despues2Img from '../../assets/despues2.png';

export const galleryCases: BeforeAfterCase[] = [
  {
    id: 'carillas-resina-1',
    title: 'Carillas en Resina de Alta Estética',
    category: 'carillas',
    categoryLabel: 'Carillas en Resina',
    beforeImage: antesImg,
    afterImage: despuesImg,
    patientAge: '32 años',
    treatment: 'Estratificación directa con microhíbridos nanotecnológicos',
    duration: '1 sesión (4 horas)',
    description: 'Cierre de diastemas, armonización de bordes incisales y corrección de tonalidad dental logrando un brillo natural.'
  },
  {
    id: 'diseno-porcelana-1',
    title: 'Diseño de Sonrisa en Cerámica E-Max',
    category: 'diseno',
    categoryLabel: 'Lentes Cerámicos',
    beforeImage: antes2Img,
    afterImage: despues2Img,
    patientAge: '28 años',
    treatment: 'Carillas ultrafinas de porcelana feldespática',
    duration: '2 citas',
    description: 'Alineación de proporciones estéticas, corrección de desgaste y cambio de 5 tonos en la escala de luminosidad.'
  },
  {
    id: 'blanqueamiento-led-1',
    title: 'Blanqueamiento Dental Láser Ultra-White',
    category: 'blanqueamiento',
    categoryLabel: 'Blanqueamiento',
    beforeImage: antesImg,
    afterImage: despuesImg,
    patientAge: '26 años',
    treatment: 'Fotocatalizador LED 38% peróxido con remineralizante',
    duration: '60 min',
    description: 'Aclaramiento de 6 tonos en una sola sesión clínica, sin dolor ni sensibilidad dental post-tratamiento.'
  },
  {
    id: 'ortodoncia-invisible-1',
    title: 'Ortodoncia Invisible con Alineadores 3D',
    category: 'ortodoncia',
    categoryLabel: 'Ortodoncia Invisible',
    beforeImage: antes2Img,
    afterImage: despues2Img,
    patientAge: '35 años',
    treatment: 'Alineadores transparentes computarizados',
    duration: '7 meses',
    description: 'Corrección completa de apiñamiento anteroinferior y nivelación de arcada superior de forma 100% discreta.'
  }
];
