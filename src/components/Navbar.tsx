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
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['about', 'vessels', 'cargo', 'ports', 'principals', 'contact'];
      const scrollPosition = window.scrollY + 160;

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
          ? 'bg-[#0c1c38]/95 backdrop-blur-md border-b border-sky-900/50 shadow-md'
          : 'bg-[#0c1c38] border-b border-sky-900/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Company Logo Lockup */}
          <a
            href="#"
            className="flex items-center gap-3 group text-left shrink-0"
            aria-label="PT Gemilang Segara Emas Home"
          >
            <GSELogo size="md" variant="light" showTagline={true} className="h-10 sm:h-12" />
            <div className="hidden sm:flex flex-col pl-3 border-l border-sky-800/80 justify-center">
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-white group-hover:text-amber-400 transition-colors whitespace-nowrap">
                PT GEMILANG SEGARA EMAS
              </span>
              <span className="text-xs font-semibold tracking-wider text-sky-200/80 uppercase">
                {t('nav.subTagline')}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-xl bg-[#071328]/80 border border-sky-900/60">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm lg:text-base font-semibold transition-all duration-150 whitespace-nowrap ${
                    isActive
                      ? 'bg-amber-400 text-slate-950 font-bold shadow-xs'
                      : 'text-slate-200 hover:text-white hover:bg-sky-950/60'
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
              className="p-2 text-slate-200 hover:text-white rounded-lg hover:bg-sky-950/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c1c38] border-b border-sky-900/60 px-5 pt-4 pb-6 space-y-4 shadow-2xl">
          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 text-base font-semibold rounded-lg transition-all ${
                    isActive
                      ? 'bg-amber-400 text-slate-950 font-bold'
                      : 'text-slate-200 hover:bg-sky-950/60 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-sky-900/60 flex flex-col gap-2.5">
            <a
              href={`https://wa.me/${KEY_CONTACTS[0].cleanPhone}?text=Hello%20PT%20Gemilang%20Segara%20Emas,%20I%20would%20like%20to%20inquire%20about%20ship%20agency%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 text-base font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-700/60 rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>{t('nav.whatsapp')}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
