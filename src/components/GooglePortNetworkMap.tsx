// Source: Google Maps Platform Code Assist
import React, { useEffect, useState, useMemo } from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
  useMap,
} from '@vis.gl/react-google-maps';
import { Waves, ShieldCheck } from 'lucide-react';

export interface PortGeoData {
  id: string;
  name: string;
  region: 'SUMATERA' | 'JAWA' | 'KALIMANTAN' | 'SULAWESI' | 'NUSA TENGGARA' | 'PAPUA';
  lat: number;
  lng: number;
  type: string;
  isMajorHub?: boolean;
}

export const PORT_LOCATIONS: PortGeoData[] = [
  // Sumatera
  { id: 'belawan', name: 'BELAWAN', region: 'SUMATERA', lat: 3.784, lng: 98.685, type: 'Container & Liquid Bulk Terminal', isMajorHub: true },
  { id: 'kuala-tanjung', name: 'KUALA TANJUNG', region: 'SUMATERA', lat: 3.360, lng: 99.450, type: 'Multi-Purpose Deep Sea Port' },
  { id: 'padang', name: 'PADANG (TELUK BAYUR)', region: 'SUMATERA', lat: -0.998, lng: 100.375, type: 'West Coast Agro-Bulk Gateway', isMajorHub: true },
  { id: 'dumai', name: 'DUMAI/PELINTUNG/LUBUK GAUNG', region: 'SUMATERA', lat: 1.678, lng: 101.445, type: 'Major CPO & Liquid Oleo Port', isMajorHub: true },
  { id: 'tanjung-buton', name: 'TANJUNG BUTON', region: 'SUMATERA', lat: 0.950, lng: 102.300, type: 'General Cargo & Industrial Terminal' },
  { id: 'futong', name: 'FUTONG', region: 'SUMATERA', lat: 0.720, lng: 102.130, type: 'Private Agro & Woodchip Terminal' },
  { id: 'sungai-pakning', name: 'SUNGAI PAKNING ANCHORAGE', region: 'SUMATERA', lat: 1.340, lng: 102.150, type: 'STS & Crude Transshipment' },
  { id: 'jambi', name: 'JAMBI/MUARA SABAK ANCHORAGE', region: 'SUMATERA', lat: -1.130, lng: 103.850, type: 'River & Agro Bulk Anchorage' },
  { id: 'palembang', name: 'PALEMBANG', region: 'SUMATERA', lat: -2.975, lng: 104.770, type: 'Musi River Agro & Coal Gateway', isMajorHub: true },
  { id: 'batam', name: 'BATAM', region: 'SUMATERA', lat: 1.135, lng: 104.030, type: 'Free Trade Zone & Shipyard Hub', isMajorHub: true },
  { id: 'panjang', name: 'PANJANG', region: 'SUMATERA', lat: -5.460, lng: 105.315, type: 'Southern Gateway & Bulk Terminal' },
  { id: 'belitung', name: 'TANJUNG KLUANG/BELITUNG', region: 'SUMATERA', lat: -2.750, lng: 107.630, type: 'Mining & Offshore Transshipment' },

  // Jawa
  { id: 'merak', name: 'MERAK/CIGADING/CIWANDAN', region: 'JAWA', lat: -5.990, lng: 105.990, type: 'Heavy Bulk, Steel & Grain Port', isMajorHub: true },
  { id: 'priok', name: 'TANJUNG PRIOK', region: 'JAWA', lat: -6.105, lng: 106.885, type: 'National Hub & Premier Gateway', isMajorHub: true },
  { id: 'marunda', name: 'MARUNDA', region: 'JAWA', lat: -6.100, lng: 106.960, type: 'Domestic Bulk & Tug Barge Jetty' },
  { id: 'patimban', name: 'PATIMBAN', region: 'JAWA', lat: -6.240, lng: 107.900, type: 'New Deep Sea Automotive Hub' },
  { id: 'cilacap', name: 'CILACAP', region: 'JAWA', lat: -7.740, lng: 109.015, type: 'Refinery & South Java Deep Port', isMajorHub: true },
  { id: 'semarang', name: 'SEMARANG', region: 'JAWA', lat: -6.955, lng: 110.425, type: 'Central Java Industrial Port' },
  { id: 'gresik', name: 'GRESIK', region: 'JAWA', lat: -7.155, lng: 112.660, type: 'Chemical & Bulk Industrial Port' },
  { id: 'surabaya', name: 'SURABAYA', region: 'JAWA', lat: -7.195, lng: 112.735, type: 'Eastern Java Commercial Gateway', isMajorHub: true },
  { id: 'probolinggo', name: 'PROBOLINGGO', region: 'JAWA', lat: -7.735, lng: 113.220, type: 'Deepwater Industrial Port' },

  // Kalimantan
  { id: 'pontianak', name: 'KIJING/PONTIANAK', region: 'KALIMANTAN', lat: 0.510, lng: 108.920, type: 'West Kalimantan Deep Sea Port', isMajorHub: true },
  { id: 'kendawangan', name: 'KENDAWANGAN', region: 'KALIMANTAN', lat: -2.585, lng: 110.200, type: 'Alumina & Bauxite Smelter Port' },
  { id: 'sampit', name: 'SAMPIT', region: 'KALIMANTAN', lat: -2.535, lng: 112.955, type: 'Mentaya River Agro & CPO Hub' },
  { id: 'banjarmasin', name: 'BANJARMASIN/TABONEO', region: 'KALIMANTAN', lat: -3.615, lng: 114.475, type: 'Premier Coal Transshipment Hub', isMajorHub: true },
  { id: 'tarjun', name: 'TARJUN', region: 'KALIMANTAN', lat: -3.250, lng: 116.035, type: 'Dedicated Agro & Cement Terminal' },
  { id: 'adang-bay', name: 'ADANG BAY', region: 'KALIMANTAN', lat: -1.780, lng: 116.480, type: 'Offshore Coal Anchorage' },
  { id: 'balikpapan', name: 'BALIKPAPAN', region: 'KALIMANTAN', lat: -1.265, lng: 116.825, type: 'Major Oil & Energy Gateway', isMajorHub: true },
  { id: 'samarinda', name: 'SAMARINDA', region: 'KALIMANTAN', lat: -0.505, lng: 117.150, type: 'Mahakam River Bulk Terminal' },
  { id: 'muara-berau', name: 'MUARA BERAU', region: 'KALIMANTAN', lat: -0.450, lng: 117.550, type: 'Deepwater Transshipment Anchorage', isMajorHub: true },
  { id: 'bontang', name: 'BONTANG', region: 'KALIMANTAN', lat: 0.135, lng: 117.500, type: 'LNG & Fertilizer Industrial Port' },

  // Sulawesi
  { id: 'makassar', name: 'MAKASSAR', region: 'SULAWESI', lat: -5.120, lng: 119.410, type: 'Eastern Indonesia Commercial Gateway', isMajorHub: true },
  { id: 'belang-belang', name: 'BELANG-BELANG', region: 'SULAWESI', lat: -2.450, lng: 119.300, type: 'West Sulawesi Agro & CPO Jetty' },
  { id: 'anggrek', name: 'ANGGREK', region: 'SULAWESI', lat: 0.850, lng: 122.800, type: 'North Sulawesi Agricultural Port' },
  { id: 'bitung', name: 'BITUNG', region: 'SULAWESI', lat: 1.440, lng: 125.190, type: 'International Gateway & Fisheries Hub', isMajorHub: true },
  { id: 'morowali', name: 'MOROWALI', region: 'SULAWESI', lat: -2.825, lng: 121.940, type: 'Major Nickel Smelter & Industrial Park', isMajorHub: true },
  { id: 'batu-putih', name: 'BATU PUTIH/POMALAA', region: 'SULAWESI', lat: -4.180, lng: 121.600, type: 'Nickel Ore & Industrial Port' },
  { id: 'kendari', name: 'KENDARI', region: 'SULAWESI', lat: -3.970, lng: 122.520, type: 'Southeast Sulawesi Gateway' },
  { id: 'bombana', name: 'BOMBANA', region: 'SULAWESI', lat: -4.600, lng: 121.800, type: 'Mining & Bulk Loading Anchorage' },

  // Nusa Tenggara
  { id: 'badas', name: 'BADAS', region: 'NUSA TENGGARA', lat: -8.480, lng: 117.380, type: 'Sumbawa Agro Terminal' },
  { id: 'bima', name: 'BIMA', region: 'NUSA TENGGARA', lat: -8.455, lng: 118.720, type: 'East Sumbawa Commercial Port' },
  { id: 'obi-island', name: 'OBI ISLAND', region: 'NUSA TENGGARA', lat: -1.540, lng: 127.600, type: 'HPAL Nickel Smelter & Mining Terminal', isMajorHub: true },

  // Papua
  { id: 'sorong', name: 'SORONG', region: 'PAPUA', lat: -0.865, lng: 131.250, type: 'Western Papua Marine Gateway', isMajorHub: true },
  { id: 'manokwari', name: 'MANOKWARI', region: 'PAPUA', lat: -0.860, lng: 134.065, type: 'Regional Natural Resource Terminal' },
];

/**
 * Controller to smoothly pan/zoom the map based on the active port filters
 */
function MapBoundsController({
  selectedRegion,
  activePorts,
}: {
  selectedRegion: string;
  activePorts: PortGeoData[];
}) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    if (selectedRegion === 'ALL') {
      map.setCenter({ lat: -2.2, lng: 118.0 });
      map.setZoom(5);
    } else if (activePorts.length > 0) {
      if (activePorts.length === 1) {
        map.setCenter({ lat: activePorts[0].lat, lng: activePorts[0].lng });
        map.setZoom(8);
      } else {
        const bounds = new google.maps.LatLngBounds();
        activePorts.forEach((port) => bounds.extend({ lat: port.lat, lng: port.lng }));
        map.fitBounds(bounds, { top: 50, right: 50, bottom: 50, left: 50 });
      }
    }
  }, [map, selectedRegion, activePorts]);

  return null;
}

interface GooglePortNetworkMapProps {
  selectedRegion: string;
}

export const GooglePortNetworkMap: React.FC<GooglePortNetworkMapProps> = ({ selectedRegion }) => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'AIzaSyAcAis51rvs9gNK29HJV0bBolvIs5yY9YA';
  const [selectedPort, setSelectedPort] = useState<PortGeoData | null>(null);

  // Filter ports based on active region
  const activePorts = useMemo(() => {
    return PORT_LOCATIONS.filter(
      (port) => selectedRegion === 'ALL' || port.region === selectedRegion
    );
  }, [selectedRegion]);

  return (
    <div className="relative w-full rounded-2xl bg-white border border-stone-200 overflow-hidden shadow-xs mb-2">
      {/* Top Header & Info Bar - Minimalist Light */}
      <div className="px-5 py-3.5 border-b border-stone-200 bg-stone-50 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
          <h3 className="text-sm font-bold text-stone-900 tracking-wide uppercase flex items-center gap-2">
            <span>Google Maps Port Network Coverage</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-stone-200/80 text-stone-700">
              Satellite Hybrid
            </span>
          </h3>
        </div>

        <div className="flex items-center gap-4 text-xs font-medium text-stone-600">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 border border-white shadow-2xs" />
            <span>Major Hub</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500 border border-white shadow-2xs" />
            <span>Commercial Port</span>
          </div>
        </div>
      </div>

      {/* Google Map Container with @vis.gl/react-google-maps */}
      <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[480px] bg-stone-100">
        <APIProvider apiKey={apiKey} libraries={['marker']}>
          <Map
            mapId="DEMO_MAP_ID"
            defaultCenter={{ lat: -2.2, lng: 118.0 }}
            defaultZoom={5}
            minZoom={4}
            maxZoom={18}
            mapTypeId="hybrid"
            gestureHandling="greedy"
            disableDefaultUI={false}
            internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
            className="w-full h-full"
          >
            <MapBoundsController selectedRegion={selectedRegion} activePorts={activePorts} />

            {/* Modern AdvancedMarker and Pin components */}
            {activePorts.map((port) => (
              <AdvancedMarker
                key={port.id}
                position={{ lat: port.lat, lng: port.lng }}
                title={port.name}
                onClick={() => setSelectedPort(port)}
              >
                <Pin
                  background={port.isMajorHub ? '#d97706' : '#0284c7'}
                  borderColor="#ffffff"
                  glyphColor="#ffffff"
                  scale={port.isMajorHub ? 1.05 : 0.85}
                />
              </AdvancedMarker>
            ))}

            {/* InfoWindow for Clicked Port */}
            {selectedPort && (
              <InfoWindow
                position={{ lat: selectedPort.lat, lng: selectedPort.lng }}
                onCloseClick={() => setSelectedPort(null)}
              >
                <div className="font-sans p-1.5 text-stone-900 max-w-[260px]">
                  <div className="text-[11px] font-bold text-amber-700 uppercase tracking-wider mb-0.5">
                    {selectedPort.region} {selectedPort.isMajorHub ? '· MAJOR HUB' : ''}
                  </div>
                  <div className="text-sm font-bold text-stone-950 leading-tight mb-1">
                    {selectedPort.name}
                  </div>
                  <div className="text-xs text-stone-600 leading-snug">
                    {selectedPort.type}
                  </div>
                </div>
              </InfoWindow>
            )}
          </Map>
        </APIProvider>

        {/* Selected Port Bottom Card Overlay */}
        {selectedPort && (
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-10 bg-white/95 border border-stone-200 rounded-2xl p-4 shadow-xl backdrop-blur-md">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                    {selectedPort.region}
                  </span>
                  {selectedPort.isMajorHub && (
                    <span className="text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">
                      Major Hub
                    </span>
                  )}
                </div>
                <h4 className="text-base font-bold text-stone-950 leading-tight">
                  {selectedPort.name}
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  {selectedPort.type}
                </p>
              </div>
              <button
                onClick={() => setSelectedPort(null)}
                className="text-stone-400 hover:text-stone-700 text-sm p-1 cursor-pointer"
                title="Close"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Status Summary */}
      <div className="px-5 py-3.5 bg-stone-50 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-stone-600">
        <div className="flex items-center gap-2">
          <Waves className="w-4 h-4 text-sky-600 shrink-0" />
          <span>
            Displaying active port locations in{' '}
            <strong className="text-stone-950 font-bold">
              {selectedRegion === 'ALL' ? 'Nationwide Network' : selectedRegion}
            </strong>
            . Click any pinpoint to view port specifications.
          </span>
        </div>

        <div className="flex items-center gap-1.5 font-medium text-stone-700">
          <ShieldCheck className="w-4 h-4 text-amber-600" />
          <span>Full Nationwide Inaportnet & KSOP Clearance</span>
        </div>
      </div>
    </div>
  );
};
