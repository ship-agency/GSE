import React, { useState } from 'react';
import { Anchor } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenPDA?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[55vh] sm:min-h-[65vh] flex items-center justify-center pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-[#fafaf9]">
      {/* Background Hero Image with Luminous Light Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_cargo_ship_sailing_1790838091790.jpg"
          alt="Modern ocean bulk carrier cargo ship sailing through Indonesian archipelago waters"
          referrerPolicy="no-referrer"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover object-center transition-opacity duration-700 ${
            imageLoaded ? 'opacity-20 scale-100' : 'opacity-0 scale-105'
          }`}
        />
        {/* Luminous Light Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#fafaf9] via-[#fafaf9]/80 to-white/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fafaf9] via-[#fafaf9]/75 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          {/* Unboxed Metadata/Kicker following Zero-Pill Discipline */}
          <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm md:text-base font-bold tracking-wider uppercase text-amber-700 mb-4">
            <span className="flex items-center gap-2">
              <Anchor className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
              {t('hero.badgeAgency')}
            </span>
            <span aria-hidden="true" className="text-stone-400">·</span>
            <span className="text-stone-600">{t('hero.badgeCountry')}</span>
            <span aria-hidden="true" className="text-stone-400">·</span>
            <span className="text-emerald-700 font-semibold">{t('hero.badgeCommand')}</span>
          </div>

          {/* Slogan & Main Display Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-stone-950 leading-[1.1] mb-5 [text-wrap:balance]">
            {t('hero.titleMain')}{' '}
            <span className="text-amber-600">
              {t('hero.titleHighlight')}
            </span>
          </h1>

          {/* Value Proposition */}
          <p className="text-base sm:text-xl text-stone-600 leading-relaxed max-w-3xl font-normal">
            {t('hero.description')}
          </p>
        </div>
      </div>
    </section>
  );
};
