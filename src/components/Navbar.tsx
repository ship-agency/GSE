import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { KEY_CONTACTS } from '../data/companyData';
import { GSELogo } from './GSELogo';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onOpenPDA: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPDA }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      const sectionIds = ['about', 'vessels', 'cargo', 'ports', 'principals', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.vessels'), href: '#vessels' },
    { name: t('nav.cargo'), href: '#cargo' },
    { name: t('nav.ports'), href: '#ports' },
    { name: t('nav.principals'), href: '#principals' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs'
          : 'bg-white/90 backdrop-blur-sm border-b border-stone-150'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-22 gap-4">
          {/* Company Logo Lockup */}
          <a
            href="#"
            className="flex items-center gap-3.5 group text-left shrink-0"
            aria-label="PT Gemilang Segara Emas Home"
          >
            <GSELogo size="md" variant="light" showTagline={true} className="h-11 sm:h-13" />
            <div className="hidden sm:flex flex-col pl-3.5 border-l border-stone-200 justify-center">
              <span className="text-base sm:text-lg font-black tracking-tight text-stone-900 group-hover:text-amber-800 transition-colors whitespace-nowrap">
                PT GEMILANG SEGARA EMAS
              </span>
              <span className="text-xs sm:text-sm font-bold tracking-wider text-stone-500 uppercase">
                {t('nav.subTagline')}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links - Minimalist with bigger font & lighter colors */}
          <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-2xl bg-stone-50 border border-stone-200/80">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-xl text-base lg:text-lg font-medium transition-all duration-150 whitespace-nowrap ${
                    isActive
                      ? 'bg-white text-stone-950 font-bold shadow-xs border border-stone-200'
                      : 'text-stone-600 hover:text-stone-950 hover:bg-white/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-stone-700 hover:text-stone-950 rounded-xl hover:bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-6 pt-4 pb-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-lg font-semibold rounded-xl transition-all ${
                    isActive
                      ? 'bg-amber-50 text-amber-950 font-bold border border-amber-200'
                      : 'text-stone-700 hover:bg-stone-50 hover:text-stone-950'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2.5">
            <a
              href={`https://wa.me/${KEY_CONTACTS[0].cleanPhone}?text=Hello%20PT%20Gemilang%20Segara%20Emas,%20I%20would%20like%20to%20inquire%20about%20ship%20agency%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 text-base font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-emerald-600" />
              <span>{t('nav.whatsapp')}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
