import React from 'react';
import { ArrowUp, Globe } from 'lucide-react';
import { GSELogo } from './GSELogo';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onOpenPDA: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPDA }) => {
  const { language, setLanguage } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-stone-600 border-t border-stone-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-10 pb-12 border-b border-stone-200">
          {/* Brand Column */}
          <div className="space-y-4 max-w-lg">
            <div className="space-y-2">
              <GSELogo size="lg" variant="light" showTagline={true} />
              <div className="text-lg font-extrabold text-stone-950 tracking-tight">
                PT GEMILANG SEGARA EMAS
              </div>
            </div>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
              &ldquo;Excellence at Every Port, Trust in Every Voyage.&rdquo; Premier General Ship Agency delivering integrated maritime husbandry, customs clearance, and stevedoring supervision across all Indonesian commercial gateways.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-900">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a href="#about" className="hover:text-amber-800 transition-colors">
                  About Us & Leadership
                </a>
              </li>
              <li>
                <a href="#vessels" className="hover:text-amber-800 transition-colors">
                  Vessel Handling & Fleet
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-800 transition-colors">
                  Port & Husbandry Services
                </a>
              </li>
              <li>
                <a href="#cargo" className="hover:text-amber-800 transition-colors">
                  PKE, Molasses & Liquid Cargo
                </a>
              </li>
              <li>
                <a href="#ports" className="hover:text-amber-800 transition-colors">
                  Port Coverage Network
                </a>
              </li>
              <li>
                <a href="#principals" className="hover:text-amber-800 transition-colors">
                  Valued Principals
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-800 transition-colors">
                  Corporate Directory
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-stone-500">
          <p>
            © {new Date().getFullYear()} PT Gemilang Segara Emas. All rights reserved. Ship Agency Indonesia.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs text-stone-500">
              <Globe className="w-3.5 h-3.5 text-stone-400" />
              {(['en', 'id', 'zh'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-1.5 py-0.5 rounded transition-colors cursor-pointer ${
                    language === lang
                      ? 'text-amber-800 font-bold bg-amber-50'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  {lang === 'en' ? 'English' : lang === 'id' ? 'Bahasa Indonesia' : '中文'}
                </button>
              ))}
            </div>
            <span className="text-stone-300">·</span>
            <button
              onClick={onOpenPDA}
              className="text-amber-800 hover:text-amber-900 font-bold cursor-pointer"
            >
              Request PDA
            </button>
            <span className="text-stone-300">·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-stone-600 hover:text-stone-950 transition-colors cursor-pointer font-medium"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
