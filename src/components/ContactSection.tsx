import React, { useState } from 'react';
import { Mail, MessageSquare, MapPin, Copy, Check, Building2 } from 'lucide-react';
import { COMPANY_INFO, KEY_CONTACTS } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

export const ContactSection: React.FC = () => {
  const [copiedWeChatId, setCopiedWeChatId] = useState<string | null>(null);
  const { t } = useLanguage();

  const handleCopyWeChat = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedWeChatId(id);
    setTimeout(() => setCopiedWeChatId(null), 2500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Bigger Font */}
        <div className="max-w-4xl mb-10 sm:mb-14">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-700 mb-2.5">
            <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
            <span>{t('contact.badge')}</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="text-stone-500">{t('contact.badgeSub')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-950 mb-3">
            {t('contact.title')}
          </h2>
          <p className="text-stone-600 text-base sm:text-xl leading-relaxed font-normal">
            {t('contact.desc')}
          </p>
        </div>

        {/* Key Contact Persons Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {KEY_CONTACTS.map((contact) => (
            <div
              key={contact.id}
              className="p-7 sm:p-8 rounded-3xl bg-white border border-stone-200/90 hover:border-amber-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header Lockup */}
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-950 leading-tight">
                    {contact.name}
                  </h3>
                  <div className="text-sm font-bold text-amber-700 mt-1">
                    {contact.title}
                  </div>
                </div>

                <p className="text-sm sm:text-base text-stone-600 mb-6 leading-relaxed font-normal">
                  {contact.bio || contact.roleDescription}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 border-t border-stone-200 space-y-2.5">
                <a
                  href={`https://wa.me/${contact.cleanPhone}?text=Hello%20${encodeURIComponent(contact.name)},%20I%20would%20like%20to%20inquire%20about%20ship%20agency%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm sm:text-base font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-xs transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>Direct WhatsApp</span>
                </a>

                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 text-xs sm:text-sm text-stone-700 hover:text-stone-950 bg-stone-100 hover:bg-stone-200 rounded-xl border border-stone-200 font-medium transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-stone-500" />
                    <span className="truncate">{contact.email}</span>
                  </a>
                  {contact.wechat && (
                    <button
                      onClick={() => handleCopyWeChat(contact.id, contact.wechat)}
                      title={`WeChat ID: ${contact.wechat} (Click to copy)`}
                      className="px-3 py-2.5 text-xs sm:text-sm bg-stone-100 hover:bg-stone-200 text-stone-700 hover:text-stone-950 rounded-xl border border-stone-200 font-medium transition-colors flex items-center gap-1.5"
                    >
                      {copiedWeChatId === contact.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-xs text-emerald-700 font-bold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-stone-500" />
                          <span className="text-xs">WeChat</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Headquarters */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-2.5">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-700 uppercase tracking-wider">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
                <span>{t('contact.headOffice')}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-950">
                {COMPANY_INFO.name}
              </h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
                {COMPANY_INFO.headOffice.addressLine1}, {COMPANY_INFO.headOffice.addressLine2},<br />
                {COMPANY_INFO.headOffice.cityProvince} {COMPANY_INFO.headOffice.postalCode}, {COMPANY_INFO.headOffice.country}
              </p>
            </div>

            <div className="md:col-span-5 flex flex-col gap-3 sm:border-l sm:border-stone-200 sm:pl-8">
              <div className="text-xs sm:text-sm font-bold text-stone-500 uppercase tracking-wider">
                {t('contact.officialEmails')}
              </div>
              <a
                href={`mailto:${COMPANY_INFO.emails.shipAgency}`}
                className="text-base sm:text-lg text-amber-800 hover:text-amber-900 font-bold flex items-center gap-2.5"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
                <span>{COMPANY_INFO.emails.shipAgency}</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.emails.operations}`}
                className="text-base sm:text-lg text-stone-700 hover:text-stone-950 font-medium flex items-center gap-2.5"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-stone-400" />
                <span>{COMPANY_INFO.emails.operations}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
