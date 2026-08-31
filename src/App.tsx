import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsRibbon } from './components/StatsRibbon';
import { ServicesSection } from './components/ServicesSection';
import { DoctorSection } from './components/DoctorSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { CampaignsSection } from './components/CampaignsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { BookingModal } from './components/BookingModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { SmileQuizModal } from './components/SmileQuizModal';
import { ServiceItem } from './types';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [selectedDetailService, setSelectedDetailService] = useState<ServiceItem | null>(null);
  const [preselectedBookingService, setPreselectedBookingService] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceId?: string) => {
    setPreselectedBookingService(serviceId);
    setIsBookingOpen(true);
  };

  const handleOpenDetail = (service: ServiceItem) => {
    setSelectedDetailService(service);
  };

  const handleBookFromDetail = (serviceId: string) => {
    setSelectedDetailService(null);
    handleOpenBooking(serviceId);
  };

  const handleBookFromResult = (serviceId: string) => {
    setIsQuizOpen(false);
    handleOpenBooking(serviceId);
  };

  return (
    <div className="min-h-screen bg-[#f9f9ff] text-[#121c2c] selection:bg-[#17b9c7]/20 selection:text-[#006971]">
      {/* Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenQuiz={() => setIsQuizOpen(true)}
        />

        {/* Stats Ribbon */}
        <StatsRibbon />

        {/* Elite Services Section (01 to 07) */}
        <ServicesSection
          onSelectService={handleOpenDetail}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Doctor Bio & Clinic Section */}
        <DoctorSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Interactive Before & After Smile Slider */}
        <BeforeAfterSlider
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Social Campaigns & Patient Wall */}
        <CampaignsSection
          onOpenBooking={() => handleOpenBooking()}
          onOpenQuiz={() => setIsQuizOpen(true)}
        />

        {/* Location & Schedule */}
        <LocationSection
          onOpenBooking={() => handleOpenBooking()}
        />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloatingButton />

      {/* Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialServiceId={preselectedBookingService}
      />

      <ServiceDetailModal
        service={selectedDetailService}
        onClose={() => setSelectedDetailService(null)}
        onBookService={handleBookFromDetail}
      />

      <SmileQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onBookResult={handleBookFromResult}
      />

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}
