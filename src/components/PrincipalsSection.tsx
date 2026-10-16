import React from 'react';
import { Award, Globe2 } from 'lucide-react';
import { VALUED_CLIENTS } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

export const PrincipalsSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="principals" className="py-16 sm:py-24 bg-white border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Bigger Font */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-700 mb-3">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
            <span>{t('principals.badge')}</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="text-stone-500">{t('principals.badgeSub')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-950 mb-4">
            {t('principals.title')}
          </h2>
          <p className="text-stone-600 text-base sm:text-xl leading-relaxed font-normal">
            {t('principals.desc')}
          </p>
        </div>

        {/* Unified Principals Frame */}
        <div className="rounded-3xl bg-stone-50 border border-stone-200/90 overflow-hidden shadow-xs">
          <div className="p-5 sm:p-6 bg-stone-100/90 border-b border-stone-200">
            <div className="flex items-start sm:items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-amber-500 shrink-0 mt-1 sm:mt-0" />
              <div>
                <h3 className="text-base sm:text-lg font-bold text-stone-950 tracking-wide">
                  {language === 'id' ? 'KLIEN & MITRA MARITIM TERPERCAYA KAMI' : 'OUR VALUED PRINCIPALS & MARITIME PARTNERS'}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-0.5 font-normal">
                  {language === 'id'
                    ? 'Dipercaya oleh perusahaan pelayaran terkemuka, pemilik kapal, penyewa (charterers), dan pemangku kepentingan maritim di Indonesia.'
                    : 'Trusted by leading shipping companies, shipowners, charterers, and maritime stakeholders across Indonesia.'}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {VALUED_CLIENTS.map((client, idx) => {
              const isHBogel = client.name.includes('BÖGEL');
              return (
                <div
                  key={idx}
                  className="flex flex-col items-start gap-4 p-6 sm:p-7 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all duration-200"
                >
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className={`${
                        isHBogel ? 'h-[64px] sm:h-[72px]' : 'h-12 sm:h-14'
                      } w-auto max-w-full sm:max-w-[280px] object-contain rounded-xl p-2 bg-stone-50 border border-stone-200 shadow-2xs`}
                      loading="lazy"
                    />
                  ) : (
                    <Globe2 className="w-8 h-8 text-stone-400" />
                  )}

                  <div className="min-w-0 flex-1">
                    <h4 className="text-lg sm:text-xl font-bold text-stone-950">
                      {client.name}
                    </h4>
                    <p className="text-sm sm:text-base text-stone-600 mt-1.5 leading-relaxed">
                      {client.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
