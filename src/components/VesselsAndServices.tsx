import React, { useState } from 'react';
import { Ship, CheckCircle2, ClipboardCheck, Container, Receipt, UserCheck, Fuel, Cog } from 'lucide-react';
import { CORE_VESSEL_EXPERTISE, AGENCY_SERVICES } from '../data/companyData';

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "01": ClipboardCheck,
  "02": Container,
  "03": Receipt,
  "04": UserCheck,
  "05": Fuel,
  "06": Cog,
};

interface VesselsAndServicesProps {
  onOpenPDA: () => void;
}

export const VesselsAndServices: React.FC<VesselsAndServicesProps> = ({ onOpenPDA }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="vessels" className="py-16 sm:py-24 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Bigger Font */}
        <div className="max-w-4xl mb-10 sm:mb-14">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-700 mb-2.5">
            <Ship className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
            <span>Core Expertise & Fleet Types</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="text-stone-500">Vessel Handling</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-950 mb-4">
            Specialized Port Agency for All Vessel Classes
          </h2>
          <p className="text-stone-600 text-base sm:text-xl leading-relaxed">
            From deep-draft bulk carriers loading PKE to chemical tankers handling Cane Molasses Loading, Beet Molasses Discharging, and Other Liquid Cargo Loading & Discharging at specialized terminals, our experienced port captains ensure smooth operations, stringent safety, and zero unnecessary downtime.
          </p>
        </div>

        {/* Vessel Category Interactive Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {CORE_VESSEL_EXPERTISE.map((category, index) => (
            <button
              key={category.title}
              onClick={() => setActiveTab(index)}
              className={`px-5 py-3 text-sm sm:text-base font-semibold rounded-xl transition-all duration-150 whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                activeTab === index
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-white text-stone-700 hover:text-stone-950 border border-stone-200/90 hover:bg-stone-50'
              }`}
            >
              <span>{category.title}</span>
              <span className={`text-xs ${activeTab === index ? 'opacity-80' : 'text-stone-400'}`}>
                ({category.subtitle})
              </span>
            </button>
          ))}
        </div>

        {/* Active Vessel Showcase Card */}
        {CORE_VESSEL_EXPERTISE[activeTab] && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl border border-stone-200/90 p-7 sm:p-10 mb-20 shadow-xs">
            {/* Visual Image Asset */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 border border-stone-200">
              <img
                src={CORE_VESSEL_EXPERTISE[activeTab].image}
                alt={`${CORE_VESSEL_EXPERTISE[activeTab].title} - ${CORE_VESSEL_EXPERTISE[activeTab].subtitle}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">
                  Active Handling Protocol
                </div>
                <div className="text-base sm:text-lg font-bold text-white">
                  {CORE_VESSEL_EXPERTISE[activeTab].title} · {CORE_VESSEL_EXPERTISE[activeTab].subtitle}
                </div>
              </div>
            </div>

            {/* Vessel Category Details */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs sm:text-sm font-bold tracking-wider text-amber-700 uppercase">
                  Cargo Handled
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-stone-950 mt-1 mb-3">
                  {CORE_VESSEL_EXPERTISE[activeTab].title}
                </h3>
                <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
                  {CORE_VESSEL_EXPERTISE[activeTab].description}
                </p>
              </div>

              {/* Highlight Cargoes */}
              <div>
                <div className="text-xs sm:text-sm font-semibold text-stone-500 mb-2.5">
                  Typical Handled Cargoes:
                </div>
                <div className="flex flex-wrap gap-2">
                  {CORE_VESSEL_EXPERTISE[activeTab].highlightCargo.map((cargo) => (
                    <span
                      key={cargo}
                      className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold bg-stone-100 text-stone-800 rounded-lg border border-stone-200"
                    >
                      {cargo}
                    </span>
                  ))}
                </div>
              </div>

              {/* Operations Checklist */}
              <div>
                <div className="text-xs sm:text-sm font-semibold text-stone-500 mb-2.5">
                  Agency & Operational Scope:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CORE_VESSEL_EXPERTISE[activeTab].operations.map((op, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-stone-700 font-medium leading-snug">{op}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Integrated Agency Services Grid */}
        <div className="pt-4">
          <div className="max-w-3xl mb-10">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-700">
              Complete Port Agency Scope
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-stone-950 mt-1">
              End-to-End Maritime Husbandry & Port Services
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {AGENCY_SERVICES.map((service) => {
              const IconComponent = SERVICE_ICONS[service.code] || ClipboardCheck;
              return (
                <div
                  key={service.code}
                  className="group p-6 sm:p-8 rounded-2xl bg-white border border-stone-200/90 hover:border-amber-500/70 transition-all duration-200 shadow-2xs hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 group-hover:scale-105 group-hover:bg-amber-500 group-hover:text-stone-950 transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-stone-100 text-stone-600 border border-stone-200 tracking-wider">
                      {service.code}
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-stone-950 group-hover:text-amber-800 transition-colors mb-2.5">
                    {service.title}
                  </h4>
                  <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Remark / Custom Service Request */}
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-amber-50/70 border border-amber-200/90 shadow-2xs flex items-start gap-4">
            <div className="w-3.5 h-3.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
            <p className="text-base sm:text-lg font-medium text-stone-800 leading-relaxed">
              We are committed to understanding and addressing the <strong className="text-stone-950 font-bold">unique operational needs and service requirements</strong> of our clients. Regardless of the scope or complexity of your requirements, our experienced team stands ready to deliver <strong className="text-stone-950 font-bold">comprehensive, reliable, and value-driven solutions</strong> tailored to support your business objectives and contribute to your long-term success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
