import React, { useState, useMemo } from 'react';
import { Navigation, Calculator } from 'lucide-react';
import { PORT_REGIONS } from '../data/companyData';
import { GooglePortNetworkMap } from './GooglePortNetworkMap';

interface PortNetworkSectionProps {
  onSelectPortForPDA?: (portName?: string) => void;
}

export const PortNetworkSection: React.FC<PortNetworkSectionProps> = ({ onSelectPortForPDA }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('ALL');

  // Total port count calculation
  const totalPortsCount = useMemo(() => {
    return PORT_REGIONS.reduce((acc, curr) => acc + curr.ports.length, 0);
  }, []);

  return (
    <section id="ports" className="py-16 sm:py-24 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Bigger Font */}
        <div className="max-w-4xl mb-8 sm:mb-12">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-700 mb-2.5">
            <Navigation className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
            <span>Nationwide Coverage</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span className="text-stone-500">Archipelago Network</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-950 mb-3">
            Indonesian Port & Anchorage Network
          </h2>
          <p className="text-stone-600 text-base sm:text-xl leading-relaxed font-normal">
            Direct and partner representation spanning {totalPortsCount}+ commercial ports, specialized industrial jetties, and deepwater offshore anchorages across all major Indonesian island regions and specialized terminals.
          </p>
        </div>

        {/* Region Filter Bar - Minimalist Light Tabs */}
        <div className="bg-white border border-stone-200/90 rounded-2xl p-2 sm:p-2.5 mb-6 shadow-xs">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setSelectedRegion('ALL')}
              className={`px-4 py-2.5 text-sm sm:text-base rounded-xl transition-colors whitespace-nowrap cursor-pointer ${
                selectedRegion === 'ALL'
                  ? 'bg-stone-900 text-white font-bold shadow-xs'
                  : 'bg-stone-50 text-stone-700 hover:text-stone-950 hover:bg-stone-100 font-medium'
              }`}
            >
              All Regions ({totalPortsCount})
            </button>
            {PORT_REGIONS.map((item) => (
              <button
                key={item.region}
                onClick={() => setSelectedRegion(item.region)}
                className={`px-4 py-2.5 text-sm sm:text-base rounded-xl transition-colors whitespace-nowrap cursor-pointer ${
                  selectedRegion === item.region
                    ? 'bg-stone-900 text-white font-bold shadow-xs'
                    : 'bg-stone-50 text-stone-700 hover:text-stone-950 hover:bg-stone-100 font-medium'
                }`}
              >
                {item.region}
              </button>
            ))}
          </div>
        </div>

        {/* Unified Map Frame */}
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-xs p-5 sm:p-7">
          {/* Interactive Google Maps Port Network Coverage */}
          <GooglePortNetworkMap selectedRegion={selectedRegion} />

          {/* Single Unified Information Bar */}
          <div className="mt-6 pt-5 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-stone-50 p-5 rounded-2xl border border-stone-200/80">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-stone-950">
                  Port Disbursement & Berthing Feasibility
                </h4>
                <p className="text-sm text-stone-600 mt-0.5">
                  Comprehensive port operations and agency services across all Indonesian commercial gateways.
                </p>
              </div>
            </div>

            {onSelectPortForPDA && (
              <button
                onClick={() => onSelectPortForPDA()}
                className="px-5 py-2.5 text-sm font-bold bg-stone-900 hover:bg-stone-800 text-white rounded-xl shadow-xs transition-colors shrink-0 cursor-pointer"
              >
                Request Port PDA
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
