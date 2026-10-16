import React, { useState, useEffect } from 'react';
import { X, ArrowRight, MessageCircle, Mail } from 'lucide-react';
import { PORT_REGIONS, KEY_CONTACTS } from '../data/companyData';
import { GSELogo } from './GSELogo';

interface PDAModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPort?: string;
}

export const PDAModal: React.FC<PDAModalProps> = ({ isOpen, onClose, initialPort }) => {
  const [port, setPort] = useState(initialPort || 'Belawan');
  const [vesselType, setVesselType] = useState('Bulk Carrier');
  const [cargoType, setCargoType] = useState('PKE (Palm Kernel Expeller)');
  const [grt, setGrt] = useState('28000');
  const [dwt, setDwt] = useState('53000');
  const [loa, setLoa] = useState('189');
  const [cargoQuantity, setCargoQuantity] = useState('25000 MT');
  const [daysAtPort, setDaysAtPort] = useState('4');
  const [targetContactId, setTargetContactId] = useState(KEY_CONTACTS[0].id);
  const [additionalServices, setAdditionalServices] = useState<string[]>([
    'Stevedoring Supervision',
    'Fresh Water Supply',
  ]);
  const [clientName, setClientName] = useState('');
  const [clientCompany, setClientCompany] = useState('');

  useEffect(() => {
    if (initialPort) {
      setPort(initialPort);
    }
  }, [initialPort]);

  if (!isOpen) return null;

  // Flatten all ports
  const allPorts = PORT_REGIONS.flatMap((r) => r.ports);

  const toggleService = (service: string) => {
    if (additionalServices.includes(service)) {
      setAdditionalServices(additionalServices.filter((s) => s !== service));
    } else {
      setAdditionalServices([...additionalServices, service]);
    }
  };

  const selectedContact = KEY_CONTACTS.find((c) => c.id === targetContactId) || KEY_CONTACTS[0];

  const generateSummaryText = () => {
    return (
      `*PORT DISBURSEMENT ACCOUNT (PDA) INQUIRY*\n` +
      `*To:* PT Gemilang Segara Emas (${selectedContact.name})\n` +
      `*From:* ${clientName || 'Principal'}/${clientCompany || 'Commercial Shipping'}\n\n` +
      `*Port of Call:* ${port}, Indonesia\n` +
      `*Vessel Type:* ${vesselType}\n` +
      `*Cargo:* ${cargoType} (${cargoQuantity})\n` +
      `*Particulars:* GRT: ${grt} | DWT: ${dwt} | LOA: ${loa}m\n` +
      `*Est. Port Stay:* ${daysAtPort} Days\n` +
      `*Services Requested:* ${additionalServices.join(', ')}\n\n` +
      `Please provide formal PDA breakdown and current port berthing conditions.`
    );
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(generateSummaryText());
    const waUrl = `https://wa.me/${selectedContact.cleanPhone}?text=${text}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`PDA Inquiry - ${port} - ${vesselType} - ${cargoType}`);
    const body = encodeURIComponent(generateSummaryText());
    window.location.href = `mailto:${selectedContact.email}?cc=operation@gse-id.com&subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white border border-stone-200 rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden my-8 text-stone-900">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-stone-200 bg-stone-50">
          <div className="flex items-center gap-3.5">
            <GSELogo size="sm" variant="light" showTagline={false} className="h-9" />
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-stone-950 leading-tight">
                Request Proforma Disbursement Account (PDA)
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                PT Gemilang Segara Emas · Indonesia Nationwide Ship Agency
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 rounded-xl hover:bg-stone-200/60 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[72vh] overflow-y-auto">
          {/* Client Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-stone-700 mb-1.5">
                Your Name/Designation
              </label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Capt./Mr./Ms."
                className="w-full px-3.5 py-2.5 bg-stone-50 text-sm text-stone-900 rounded-xl border border-stone-300 focus:outline-none focus:border-amber-600 focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-stone-700 mb-1.5">
                Company/Principal
              </label>
              <input
                type="text"
                value={clientCompany}
                onChange={(e) => setClientCompany(e.target.value)}
                placeholder="Shipowner/Charterer/Operator"
                className="w-full px-3.5 py-2.5 bg-stone-50 text-sm text-stone-900 rounded-xl border border-stone-300 focus:outline-none focus:border-amber-600 focus:bg-white"
              />
            </div>
          </div>

          {/* Port and Vessel Class */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-stone-700 mb-1.5">
                Target Port or Anchorage *
              </label>
              <select
                value={port}
                onChange={(e) => setPort(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-stone-50 text-sm text-stone-900 rounded-xl border border-stone-300 focus:outline-none focus:border-amber-600 focus:bg-white"
              >
                {allPorts.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-stone-700 mb-1.5">
                Vessel Category *
              </label>
              <select
                value={vesselType}
                onChange={(e) => setVesselType(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-stone-50 text-sm text-stone-900 rounded-xl border border-stone-300 focus:outline-none focus:border-amber-600 focus:bg-white"
              >
                <option value="Bulk Carrier (Dry Bulk)">Bulk Carrier (Dry Bulk)</option>
                <option value="Tanker (Liquid Bulk/Molasses/CPO)">Tanker (Liquid Bulk/Molasses/CPO)</option>
                <option value="Tug and Barge Convoy">Tug and Barge Convoy</option>
                <option value="Heavy Lift/Project Carrier">Heavy Lift/Project Carrier</option>
              </select>
            </div>
          </div>

          {/* Cargo Specifics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-stone-700 mb-1.5">
                Cargo Commodity *
              </label>
              <select
                value={cargoType}
                onChange={(e) => setCargoType(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-stone-50 text-sm text-stone-900 rounded-xl border border-stone-300 focus:outline-none focus:border-amber-600 focus:bg-white"
              >
                <option value="PKE (Palm Kernel Expeller)">PKE (Palm Kernel Expeller)</option>
                <option value="Cane Molasses Loading, Beet Molasses Discharging, Other Liquid Cargo Loading & Discharging">
                  Cane Molasses Loading, Beet Molasses Discharging, Other Liquid Cargo Loading & Discharging
                </option>
                <option value="CPO/Refined Palm Oil">CPO/Refined Palm Oil</option>
                <option value="Coal/Nickel Ore">Coal/Nickel Ore</option>
                <option value="Grain/Fertilizer">Grain/Fertilizer</option>
                <option value="Containers/ISO Tanks">Containers/ISO Tanks</option>
                <option value="Project Cargo/Machinery">Project Cargo/Machinery</option>
                <option value="Bunkering/Crew Change Only">Bunkering/Crew Change Only</option>
              </select>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-stone-700 mb-1.5">
                Cargo Quantity/Volume
              </label>
              <input
                type="text"
                value={cargoQuantity}
                onChange={(e) => setCargoQuantity(e.target.value)}
                placeholder="e.g. 25,000 MT"
                className="w-full px-3.5 py-2.5 bg-stone-50 text-sm text-stone-900 rounded-xl border border-stone-300 focus:outline-none focus:border-amber-600 focus:bg-white"
              />
            </div>
          </div>

          {/* Vessel Particulars */}
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-stone-600 mb-1">
                GRT (Tons)
              </label>
              <input
                type="text"
                value={grt}
                onChange={(e) => setGrt(e.target.value)}
                className="w-full px-3 py-2 bg-stone-50 text-sm text-stone-900 rounded-lg border border-stone-300 focus:outline-none focus:border-amber-600 focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-600 mb-1">
                DWT (Tons)
              </label>
              <input
                type="text"
                value={dwt}
                onChange={(e) => setDwt(e.target.value)}
                className="w-full px-3 py-2 bg-stone-50 text-sm text-stone-900 rounded-lg border border-stone-300 focus:outline-none focus:border-amber-600 focus:bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-600 mb-1">
                LOA (Meters)
              </label>
              <input
                type="text"
                value={loa}
                onChange={(e) => setLoa(e.target.value)}
                className="w-full px-3 py-2 bg-stone-50 text-sm text-stone-900 rounded-lg border border-stone-300 focus:outline-none focus:border-amber-600 focus:bg-white"
              />
            </div>
          </div>

          {/* Husbandry & Port Services Checklist */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-stone-700 mb-2.5">
              Required Port Husbandry & Services:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                'Full Port Clearance (CIQP)',
                'Stevedoring Supervision',
                'Fresh Water Supply',
                'Bunker Coordination (VLSFO/MGO)',
                'Crew Change (OK-to-Board)',
                'Ship Spares Customs Clearance',
                'Draft/Ullage Survey',
                'Garbage/Sludge Disposal',
              ].map((svc) => (
                <label
                  key={svc}
                  className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-700 cursor-pointer select-none bg-stone-50 p-2.5 rounded-xl border border-stone-200 hover:border-stone-300 hover:bg-stone-100 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={additionalServices.includes(svc)}
                    onChange={() => toggleService(svc)}
                    className="rounded border-stone-300 text-amber-600 focus:ring-amber-500 w-4 h-4"
                  />
                  <span>{svc}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Target Key Contact */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-stone-700 mb-1.5">
              Designated Key Contact Person:
            </label>
            <select
              value={targetContactId}
              onChange={(e) => setTargetContactId(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-stone-50 text-sm text-stone-900 rounded-xl border border-stone-300 focus:outline-none focus:border-amber-600 focus:bg-white"
            >
              {KEY_CONTACTS.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} — {c.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-stone-200 bg-stone-50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 text-sm font-semibold text-stone-600 hover:text-stone-950 cursor-pointer"
          >
            Cancel
          </button>

          <div className="w-full sm:w-auto flex items-center gap-3">
            <button
              onClick={handleSendEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-stone-700 bg-white hover:bg-stone-100 rounded-xl border border-stone-300 transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4 text-stone-600" />
              <span>Send by Email</span>
            </button>

            <button
              onClick={handleSendWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-stone-950 bg-amber-500 hover:bg-amber-600 rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send to WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
