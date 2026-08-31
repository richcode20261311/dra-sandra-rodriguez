export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  duration: string;
  sessions: string;
  idealFor: string;
  iconName: 'sparkles' | 'droplet' | 'shield' | 'heart' | 'leaf' | 'smile' | 'child';
  badge?: string;
  image: string;
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  category: 'carillas' | 'blanqueamiento' | 'diseno' | 'ortodoncia';
  categoryLabel: string;
  beforeImage: string;
  afterImage: string;
  patientAge: string;
  treatment: string;
  duration: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  comment: string;
  treatment: string;
  rating: number;
  highlight: string;
}

export interface CampaignCard {
  id: string;
  title: string;
  subtitle: string;
  scriptText?: string;
  tagline: string;
  image: string;
  ctaText: string;
  actionType: 'booking' | 'quiz' | 'whatsapp';
}
