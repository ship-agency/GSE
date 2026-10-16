import React from 'react';
import {
  Compass,
  CheckCircle2,
  Clock,
  Network,
  Shield,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const operationalStandards = [
    {
      title: t('about.std1Title'),
      desc: t('about.std1Desc'),
    },
    {
      title: t('about.std2Title'),
      desc: t('about.std2Desc'),
    },
    {
      title: t('about.std3Title'),
      desc: t('about.std3Desc'),
    },
    {
      title: t('about.std4Title'),
      desc: t('about.std4Desc'),
    },
    {
      title: t('about.std5Title'),
      desc: t('about.std5Desc'),
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-y border-stone-200/80 relative">
      <span id="overview" className="absolute -top-24" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Bigger Font */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-700 mb-3">
            <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
            <span>{t('about.badge')}</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="text-stone-500">{t('about.company')}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-950 leading-[1.15] mb-5">
            {t('about.title')}
          </h2>

          <p className="text-base sm:text-xl text-stone-600 leading-relaxed font-normal mb-4">
            {t('about.p1')}
          </p>
          <p className="text-base sm:text-xl text-stone-600 leading-relaxed font-normal">
            {t('about.p2')}
          </p>
        </div>

        {/* Strategic Pillars & Operational Standard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Strategic Pillars */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-7 sm:p-8 rounded-2xl bg-stone-50 border border-stone-200/80 shadow-2xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Network className="w-5 h-5" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-stone-950">{t('about.pillarCoordTitle')}</h4>
              </div>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
                {t('about.pillarCoordDesc')}
              </p>
            </div>

            <div className="p-7 sm:p-8 rounded-2xl bg-stone-50 border border-stone-200/80 shadow-2xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-stone-950">{t('about.pillarTurnaroundTitle')}</h4>
              </div>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
                {t('about.pillarTurnaroundDesc')}
              </p>
            </div>
          </div>

          {/* Right Column: The GSE Operational Standard */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-stone-50 border border-stone-200/80 shadow-2xs">
              <div className="flex items-center gap-2.5 mb-2">
                <Shield className="w-6 h-6 text-amber-700" />
                <h3 className="text-xl sm:text-2xl font-bold text-stone-950">
                  {t('about.standardTitle')}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-stone-500 mb-6">
                {t('about.standardSubtitle')}
              </p>

              <div className="space-y-4">
                {operationalStandards.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-stone-900">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
