import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { VesselsAndServices } from './components/VesselsAndServices';
import { CargoOperationsSpotlight } from './components/CargoOperationsSpotlight';
import { PortNetworkSection } from './components/PortNetworkSection';
import { PrincipalsSection } from './components/PrincipalsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PDAModal } from './components/PDAModal';
import { FloatingWhatsAppWidget } from './components/FloatingWhatsAppWidget';

export default function App() {
  const [isPDAModalOpen, setIsPDAModalOpen] = useState(false);
  const [selectedPortForPDA, setSelectedPortForPDA] = useState<string | undefined>(undefined);
  const [quotaExceeded, setQuotaExceeded] = useState(false);

  useEffect(() => {
    const handleQuotaExceeded = () => setQuotaExceeded(true);
    window.addEventListener('gmp-quota-exceeded', handleQuotaExceeded);
    return () => {
      window.removeEventListener('gmp-quota-exceeded', handleQuotaExceeded);
    };
  }, []);

  const handleOpenPDA = (portName?: string) => {
    setSelectedPortForPDA(portName);
    setIsPDAModalOpen(true);
  };

  const handleClosePDA = () => {
    setIsPDAModalOpen(false);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#fafaf9] text-stone-900 flex flex-col font-sans selection:bg-amber-200 selection:text-amber-950">
        {/* Google Maps Platform Quota Exceeded Defense Banner */}
        {quotaExceeded && (
          <div className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2.5 text-sm md:text-base text-center sticky top-0 z-50 shadow-sm">
            <span>
              Google Maps Platform quota reached. If you are the app owner, visit{' '}
              <a
                href="https://developers.google.com/maps/ai/ai-studio?utm_campaign=gmp_mcp_codeassist_v1_aistudio#quota_exceeded_errors"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold text-amber-950 hover:text-amber-800"
              >
                maps developer site
              </a>{' '}
              for instructions to update your account.
            </span>
          </div>
        )}

        {/* Top Navigation Bar */}
        <Navbar onOpenPDA={() => handleOpenPDA()} />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* Hero Section */}
          <Hero onOpenPDA={() => handleOpenPDA()} />

          {/* Executive Summary & About Us */}
          <AboutSection />

          {/* Core Expertise & Vessel Handling */}
          <VesselsAndServices onOpenPDA={() => handleOpenPDA()} />

          {/* Specialized Cargo Operations Spotlight (PKE & Molasses) */}
          <CargoOperationsSpotlight onOpenPDA={() => handleOpenPDA()} />

          {/* Nationwide Port Coverage Network */}
          <PortNetworkSection onSelectPortForPDA={(port) => handleOpenPDA(port)} />

          {/* Valued Clients & Principals */}
          <PrincipalsSection />

          {/* Corporate Directory & Key Contact Persons */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer onOpenPDA={() => handleOpenPDA()} />

        {/* Interactive Proforma Disbursement Account (PDA) Modal */}
        <PDAModal
          isOpen={isPDAModalOpen}
          onClose={handleClosePDA}
          initialPort={selectedPortForPDA}
        />

        {/* Floating 24/7 WhatsApp Widget */}
        <FloatingWhatsAppWidget />
      </div>
    </LanguageProvider>
  );
}
