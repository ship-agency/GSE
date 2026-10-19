import React from 'react';
import { Award, Globe2 } from 'lucide-react';
import { VALUED_CLIENTS } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

export const PrincipalsSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="principals" className="py-10 sm:py-14 bg-white border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
            <Award className="w-4 h-4 text-amber-700" />
            <span>{t('principals.badge')}</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="text-stone-500">{t('principals.badgeSub')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-stone-950 mb-2 sm:mb-2.5">
            {t('principals.title')}
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-normal">
            {t('principals.desc')}
          </p>
        </div>

        {/* Unified Principals Frame - Compact */}
        <div className="rounded-2xl bg-stone-50 border border-stone-200/90 overflow-hidden shadow-xs">
          <div className="py-3 px-4 sm:py-3.5 sm:px-6 bg-stone-100/90 border-b border-stone-200">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-stone-950 tracking-wide uppercase">
                  {language === 'id' ? 'KLIEN & MITRA MARITIM TERPERCAYA KAMI' : 'OUR VALUED PRINCIPALS & MARITIME PARTNERS'}
                </h3>
                <p className="text-xs text-stone-600 font-normal mt-0.5">
                  {language === 'id'
                    ? 'Dipercaya oleh perusahaan pelayaran terkemuka, pemilik kapal, penyewa (charterers), dan pemangku kepentingan maritim di Indonesia.'
                    : 'Trusted by leading shipping companies, shipowners, charterers, and maritime stakeholders across Indonesia.'}
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-5 lg:p-6 grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
            {VALUED_CLIENTS.map((client, idx) => {
              const isHBogel = client.name.includes('BÖGEL');
              const isFifth = idx === 4;
              return (
                <div
                  key={idx}
                  className={`flex flex-col ${
                    isFifth
                      ? 'sm:flex-row sm:items-start justify-self-start w-full text-left'
                      : 'sm:flex-row sm:items-center text-left'
                  } gap-3.5 sm:gap-4.5 p-3.5 sm:p-4 rounded-xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all duration-200 text-left`}
                >
                  <div
                    className={`shrink-0 flex items-center ${
                      isFifth ? 'justify-start' : 'justify-center'
                    } p-2.5 sm:p-3 bg-stone-50 border border-stone-200/90 rounded-xl shadow-2xs ${
                      isFifth ? 'self-start' : 'self-start sm:self-center'
                    }`}
                  >
                    {client.logo ? (
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className={`${
                          isHBogel ? 'h-[74px] sm:h-[83px]' : 'h-[55px] sm:h-[65px]'
                        } w-auto max-w-[220px] sm:max-w-[260px] object-contain ${
                          isFifth ? 'object-left' : ''
                        }`}
                        loading="lazy"
                      />
                    ) : (
                      <Globe2 className="w-9 h-9 sm:w-10 sm:h-10 text-stone-400" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1 text-left">
                    <div className="flex items-center justify-start gap-2 text-left">
                      <h4 className="text-base sm:text-lg font-bold text-stone-950 leading-snug text-left">
                        {client.name}
                      </h4>
                      {client.flag && (
                        <span className="text-base" title={client.country} aria-label={client.country}>
                          {client.flag}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed text-left">
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
