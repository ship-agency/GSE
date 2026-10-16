import React, { useState } from 'react';
import { Layers, CheckCircle2, Sparkles } from 'lucide-react';

interface CargoOperationsSpotlightProps {
  onOpenPDA: () => void;
}

export const CargoOperationsSpotlight: React.FC<CargoOperationsSpotlightProps> = () => {
  const [activeCargo, setActiveCargo] = useState<'pke' | 'cane-beet-molasses' | 'other-liquid-cargo'>('pke');

  return (
    <section id="cargo" className="py-16 sm:py-24 bg-white border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-10 sm:mb-14">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-700 mb-2.5">
            <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
            <span>Specialized Cargo Protocols</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="text-stone-500">Loading & Discharging Supervision</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-950 mb-4">
            Mastery in High-Sensitivity Bulk Commodities
          </h2>
          <p className="text-stone-600 text-base sm:text-xl leading-relaxed">
            Agricultural commodities like Palm Kernel Expeller (PKE) and specialized liquid bulk cargoes (Cane Molasses Loading, Beet Molasses Discharging, Other Liquid Cargo Loading & Discharging) demand stringent port oversight. Our dedicated port agency teams safeguard cargo quality, ensure strict adherence to international safety standards, and maintain rapid turnaround times.
          </p>
        </div>

        {/* Cargo Selector Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <button
            onClick={() => setActiveCargo('pke')}
            className={`px-5 py-3 text-sm sm:text-base font-semibold rounded-xl transition-all duration-150 cursor-pointer flex items-center gap-2 ${
              activeCargo === 'pke'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:text-stone-950 border border-stone-200/90 hover:bg-stone-200/70'
            }`}
          >
            <span>PKE (Palm Kernel Expeller) Bulk Loading</span>
          </button>

          <button
            onClick={() => setActiveCargo('cane-beet-molasses')}
            className={`px-5 py-3 text-sm sm:text-base font-semibold rounded-xl transition-all duration-150 cursor-pointer flex items-center gap-2 ${
              activeCargo === 'cane-beet-molasses'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:text-stone-950 border border-stone-200/90 hover:bg-stone-200/70'
            }`}
          >
            <span>Cane Molasses Loading, Beet Molasses Discharging</span>
          </button>

          <button
            onClick={() => setActiveCargo('other-liquid-cargo')}
            className={`px-5 py-3 text-sm sm:text-base font-semibold rounded-xl transition-all duration-150 cursor-pointer flex items-center gap-2 ${
              activeCargo === 'other-liquid-cargo'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:text-stone-950 border border-stone-200/90 hover:bg-stone-200/70'
            }`}
          >
            <span>Other Liquid Cargo Loading & Discharging</span>
          </button>
        </div>

        {/* Unified Cargo Operations Card */}
        <div className="bg-stone-50 rounded-3xl border border-stone-200/90 overflow-hidden shadow-xs">
          {/* Content Panel for PKE */}
          {activeCargo === 'pke' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-7 sm:p-10">
              <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 border border-stone-200">
                <img
                  src="/images/bulk_carrier_pke_loading_1790838107212.jpg"
                  alt="Bulk carrier loading Palm Kernel Expeller PKE pellets at port conveyor"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                    Bulk Terminal Operations
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    Dry Bulk Carrier PKE Loading & Trimming
                  </h4>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <div>
                  <span className="text-xs sm:text-sm font-bold text-amber-700 uppercase tracking-wider">
                    Agricultural Bulk Specialization
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-stone-950 mt-1 mb-2">
                    Palm Kernel Expeller (PKE/Palm Kernel Meal)
                  </h3>
                  <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
                    PKE is one of Indonesia&apos;s leading export commodities for animal feed. Because it is susceptible to self-heating and moisture condensation during ocean transit, our boarding agents strictly supervise every phase of the loading process.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {[
                    {
                      title: "Cargo Hold Cleanliness Survey",
                      desc: "Rigorous pre-loading inspection ensuring holds are grain-clean, rust-free, completely dry, and certified free of previous cargo residues or pest infestation.",
                    },
                    {
                      title: "Moisture & Temperature Control",
                      desc: "Continuous monitoring of PKE temperature and moisture levels before and during loading via telescopic chutes and conveyor loaders.",
                    },
                    {
                      title: "Even Trimming & Hatch Sealing",
                      desc: "Ensuring proper cargo trimming to prevent shifting at sea, followed by immediate hatch sealing with Ram-Nek tape upon completion.",
                    },
                    {
                      title: "Draft Survey & Tally Coordination",
                      desc: "Close collaboration between vessel chief officer, independent surveyor, and terminal weighbridges for exact bill of lading tally.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-stone-950">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Content Panel for Cane Molasses Loading & Beet Molasses Discharging */}
          {activeCargo === 'cane-beet-molasses' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-7 sm:p-10">
              <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 border border-stone-200">
                <img
                  src="/images/tanker_molasses_discharging_1790838118936.jpg"
                  alt="Product chemical tanker discharging molasses at marine jetty terminal"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                    Molasses Jetty Operations
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    Cane Molasses Loading & Beet Molasses Discharging
                  </h4>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <div>
                  <span className="text-xs sm:text-sm font-bold text-amber-700 uppercase tracking-wider">
                    Specialized Viscous Liquid Bulk
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-stone-950 mt-1 mb-2">
                    Cane Molasses Loading, Beet Molasses Discharging
                  </h3>
                  <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
                    Specialized tanker agency protocols for high-viscosity cane and beet molasses. Supervised by seasoned port captains, handling temperature-regulated pumping, manifold line-ups, brix density sampling, and line-blowing to guarantee zero contamination and uninterrupted discharge flow.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {[
                    {
                      title: "Marine Loading Arm & Cargo Hose Manifold",
                      desc: "Verifying hydrostatic test certificates of flexible transfer hoses, proper gasket seating, and pressure testing prior to valve opening.",
                    },
                    {
                      title: "Brix Density & Temperature Sampling",
                      desc: "Coordinating joint surveyor sampling (manifold, ship tanks, and shore tanks) to record precise brix levels and specific gravity.",
                    },
                    {
                      title: "Heating Coils & Viscosity Flow Optimization",
                      desc: "Monitoring steam heating coil temperature to maintain optimal flow rates without scorching or viscosity breakdown.",
                    },
                    {
                      title: "Air/Nitrogen Line Blowing & Zero-Spill Safety",
                      desc: "Adherence to MARPOL Annex II and national environmental regulations with containment boom placement and complete line flushing upon operation completion.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-stone-950">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Content Panel for Other Liquid Cargo Loading & Discharging */}
          {activeCargo === 'other-liquid-cargo' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-7 sm:p-10">
              <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100 border border-stone-200">
                <img
                  src="/images/liquid_cargo_tanker.jpg"
                  alt="Chemical and product tanker vessel docked at specialized liquid bulk port terminal handling liquid cargo loading and discharging"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                    Liquid Bulk Terminal Operations
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    Other Liquid Cargo Loading & Discharging
                  </h4>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <div>
                  <span className="text-xs sm:text-sm font-bold text-amber-700 uppercase tracking-wider">
                    Industrial & Chemical Liquid Bulk
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-stone-950 mt-1 mb-2">
                    Other Liquid Cargo Loading & Discharging
                  </h3>
                  <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
                    Comprehensive tanker agency services across Indonesia&apos;s dedicated liquid bulk terminals for industrial chemical, agricultural, and oleochemical liquid products. Ensuring rigorous compliance with ISGOTT, MARPOL Annex II, and statutory terminal safety standards.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {[
                    {
                      title: "Specialized Tanker Berth & Terminal Coordination",
                      desc: "Pre-arrival berthing clearance with KSOP and terminal operators for product tankers, chemical carriers, and specialized liquid barges.",
                    },
                    {
                      title: "Closed-Loop Transfer & Vapor Return Line-Up",
                      desc: "Vapor balancing line verification, nitrogen purging, and closed loading protocols for sensitive liquid bulk products.",
                    },
                    {
                      title: "Manifold Pressure & Pumping Rate Management",
                      desc: "Real-time monitoring of manifold pressure, emergency shutdown system (ESD) testing, and shore tank line-up validation.",
                    },
                    {
                      title: "Safety, Oil Boom Deployment & Environmental Custody",
                      desc: "Full ISGOTT safety checklists, spill containment boom deployment, and strict environmental custody throughout the transfer.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-stone-950">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Integrated Notable Cargoes Bar */}
          <div className="border-t border-stone-200 bg-stone-100/90 px-7 py-6 sm:px-10 sm:py-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-3 shrink-0">
                <Sparkles className="w-5 h-5 text-amber-700 shrink-0" />
                <h4 className="text-base sm:text-lg font-bold text-stone-950 tracking-wide">
                  Comprehensive Handling of Indonesian Commodities:
                </h4>
              </div>
              <p className="text-sm sm:text-base font-medium text-stone-700 leading-relaxed">
                Crude Palm Oil (CPO), RBD Palm Olein, Stearin, Coal & Minerals, Nickel Ore, Heavy Lift & Offshore Modules.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
