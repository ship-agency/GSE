import React, { useState } from 'react';
import { X, ArrowRight, Copy, Check } from 'lucide-react';
import { KEY_CONTACTS } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.13 8.13 0 0 1-1.25-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.02 2.6c.12.16 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.18-.47-.3z" />
  </svg>
);

export const WeChatIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M8.691 2.188C3.891 2.188 0 5.478 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.62.62 0 0 1 .213.665l-.534 1.974c-.062.228.167.426.376.326l2.366-1.141a.63.63 0 0 1 .45-.04c.895.244 1.84.377 2.818.377.345 0 .685-.02 1.02-.053a6.83 6.83 0 0 1-.223-1.731c0-4.045 3.864-7.324 8.63-7.324.316 0 .627.016.934.043C18.067 5.617 13.824 2.188 8.691 2.188zm-2.48 4.298c.61 0 1.107.496 1.107 1.108 0 .612-.497 1.108-1.107 1.108-.612 0-1.108-.496-1.108-1.108 0-.612.496-1.108 1.108-1.108zm4.962 0c.612 0 1.108.496 1.108 1.108 0 .612-.496 1.108-1.108 1.108-.611 0-1.107-.496-1.107-1.108 0-.612.496-1.108 1.107-1.108zm4.35 4.545c-4.148 0-7.51 2.87-7.51 6.41 0 1.933 1.018 3.673 2.624 4.849.117.086.183.228.168.372l-.466 1.725c-.055.2.146.373.33.286l2.067-.997a.55.55 0 0 1 .394-.035c.782.213 1.608.328 2.463.328 4.148 0 7.51-2.87 7.51-6.41 0-3.54-3.362-6.528-7.51-6.528h-.07zm-2.172 3.76c.535 0 .97.435.97.97 0 .536-.435.97-.97.97-.536 0-.97-.434-.97-.97 0-.535.434-.97.97-.97zm4.35 0c.535 0 .97.435.97.97 0 .536-.435.97-.97.97-.536 0-.97-.434-.97-.97 0-.535.435-.97.97-.97z" />
  </svg>
);

export const FloatingWhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'whatsapp' | 'wechat'>('whatsapp');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { language } = useLanguage();

  const handleCopyWeChat = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const isZh = language === 'zh';
  const isId = language === 'id';

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-4 w-84 sm:w-96 rounded-3xl bg-white border border-stone-200 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200 text-stone-900">
          {/* Header */}
          <div
            className={`p-5 text-white flex items-center justify-between transition-colors duration-200 ${
              activeTab === 'whatsapp' ? 'bg-emerald-600' : 'bg-[#07c160]'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                {activeTab === 'whatsapp' ? (
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                ) : (
                  <WeChatIcon className="w-5 h-5 text-white" />
                )}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">
                  {isZh
                    ? activeTab === 'whatsapp' ? 'WhatsApp 全天候服务' : '微信 WeChat 快速对接'
                    : isId
                    ? activeTab === 'whatsapp' ? 'Layanan Bantuan WhatsApp 24/7' : 'Kontak Cepat WeChat'
                    : activeTab === 'whatsapp' ? 'Maritime WhatsApp Desk 24/7' : 'WeChat Direct Channel'}
                </h4>
                <p className="text-xs text-white/90 flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  {isZh ? '核心负责人实时在线' : isId ? 'Personel Kunci Siaga' : 'Key Persons Available Now'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Channel Switcher Tabs */}
          <div className="p-2 bg-stone-100/90 border-b border-stone-200 grid grid-cols-2 gap-1.5">
            <button
              onClick={() => setActiveTab('whatsapp')}
              className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'whatsapp'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-white/70'
              }`}
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>

            <button
              onClick={() => setActiveTab('wechat')}
              className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'wechat'
                  ? 'bg-[#07c160] text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-white/70'
              }`}
            >
              <WeChatIcon className="w-4 h-4" />
              <span>{isZh ? '微信 WeChat' : 'WeChat'}</span>
            </button>
          </div>

          {/* Contact Person Selector */}
          <div className="p-4 space-y-2.5 max-h-80 overflow-y-auto">
            {activeTab === 'whatsapp' ? (
              // WhatsApp Direct List
              KEY_CONTACTS.map((person) => (
                <a
                  key={person.id}
                  href={`https://wa.me/${person.cleanPhone}?text=Hello%20${encodeURIComponent(
                    person.name
                  )},%20I%20would%20like%20to%20inquire%20about%20ship%20agency%20services%20with%20PT%20Gemilang%20Segara%20Emas.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="group p-3.5 rounded-2xl bg-stone-50 hover:bg-stone-100 border border-stone-200 hover:border-emerald-500/50 transition-all flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-amber-100 border border-amber-200 text-amber-800 font-bold text-xs flex items-center justify-center shrink-0">
                      {person.avatarInitials}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-stone-900 group-hover:text-emerald-700 transition-colors truncate">
                        {person.name}
                      </div>
                      <div className="text-xs text-stone-500 truncate">
                        {person.title}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>
              ))
            ) : (
              // WeChat Contacts with 1-Click Copy
              KEY_CONTACTS.map((person) => (
                <div
                  key={person.id}
                  className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-[#07c160]/15 border border-[#07c160]/30 text-[#07c160] font-bold text-xs flex items-center justify-center shrink-0">
                      {person.avatarInitials}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-stone-900 truncate">
                        {person.name}
                      </div>
                      <div className="text-xs text-stone-500 truncate">
                        ID: <strong className="text-stone-800 font-semibold">{person.wechat}</strong>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopyWeChat(person.id, person.wechat)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-xl bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 transition-all cursor-pointer shrink-0 shadow-2xs"
                  >
                    {copiedId === person.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">{isZh ? '已复制' : 'Copied'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-stone-500" />
                        <span>{isZh ? '复制' : 'Copy'}</span>
                      </>
                    )}
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Bottom helper info */}
          <div className="p-3 bg-stone-50 border-t border-stone-200 text-center text-xs text-stone-500">
            {activeTab === 'whatsapp'
              ? isZh
                ? '直接接入官方验证 WhatsApp 对话'
                : isId
                ? 'Tersambung langsung ke obrolan WhatsApp terverifikasi'
                : 'Direct connection to verified WhatsApp business chat'
              : isZh
              ? '点击一键复制微信号，在微信搜索添加好友'
              : isId
              ? 'Salin ID WeChat untuk menambahkan kontak langsung'
              : 'Copy WeChat ID to connect with our port officers directly'}
          </div>
        </div>
      )}

      {/* Trigger FABs: WhatsApp & WeChat Side by Side */}
      <div className="flex items-center gap-2.5">
        {/* WeChat Button */}
        <button
          onClick={() => {
            setActiveTab('wechat');
            setIsOpen(true);
          }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#07c160] hover:bg-[#06ad56] text-white font-medium text-[15px] shadow-lg shadow-[#07c160]/25 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Open WeChat Contact Desk"
          title="WeChat 微信"
        >
          <WeChatIcon className="w-5 h-5 text-white" />
          <span className="hidden sm:inline">
            {isZh ? '微信咨询' : 'WeChat'}
          </span>
        </button>

        {/* WhatsApp Button */}
        <button
          onClick={() => {
            setActiveTab('whatsapp');
            setIsOpen(true);
          }}
          className="flex items-center gap-2.5 px-4.5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-[15.5px] shadow-lg shadow-emerald-600/25 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Open 24/7 WhatsApp Key Person Desk"
        >
          <WhatsAppIcon className="w-5 h-5 text-white" />
          <span className="hidden sm:inline leading-tight">
            {isZh ? 'WhatsApp 咨询' : 'WhatsApp Us'}
          </span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
        </button>
      </div>
    </div>
  );
};
