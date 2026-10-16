export interface KeyContact {
  id: string;
  name: string;
  title: string;
  phone: string;
  cleanPhone: string; // for tel: and wa.me
  email: string;
  wechat: string;
  avatarInitials: string;
  roleDescription: string;
  yearsExperience?: string;
  specialties?: string[];
  keyRegions?: string;
  bio?: string;
}

export interface PortRegion {
  region: string;
  description: string;
  ports: string[];
}

export interface ClientPrincipal {
  name: string;
  country: string;
  description: string;
  flag: string;
  logo?: string;
  logoBg?: 'light' | 'dark';
}

export interface VesselCategory {
  title: string;
  subtitle: string;
  cargoTypes: string;
  description: string;
  operations: string[];
  image: string;
  highlightCargo: string[];
}

export const COMPANY_INFO = {
  name: "PT GEMILANG SEGARA EMAS",
  tagline: "Excellence at Every Port, Trust in Every Voyage.",
  shortDescription:
    "Premier General Agent delivering integrated ship agency services throughout Indonesia's key maritime gateways.",
  executiveSummary:
    "PT Gemilang Segara Emas is a premier General Agent delivering integrated ship agency services throughout Indonesia's key maritime gateways. Supported by an extensive network of local agency partners and strategically located joint offices, we provide seamless port call management, optimized vessel turnaround, and reliable operational support nationwide. Our centralized command and coordination framework ensures operational excellence, consistency, and accountability across all locations. By combining nationwide coverage with deep local knowledge, we offer tailored solutions to navigate Indonesia's complex maritime landscape, delivering efficiency, compliance, and value for our principals and stakeholders.",
  vision:
    "To be the most reliable, transparent, and preferred shipping agency partner in Indonesia, setting the benchmark for operational efficiency and port turnaround across the archipelago.",
  mission: [
    "Deliver seamless, 24/7 port agency and husbandry services with uncompromising compliance to Indonesian maritime regulations.",
    "Safeguard principals' interests through transparent disbursement accounting, prompt FDA closing, and proactive cost optimization.",
    "Ensure zero-delay vessel turnaround and maximum cargo custody integrity across all 25+ strategic port gateways.",
  ],
  coreValues: [
    {
      title: "Fiscal Transparency",
      description: "Itemized port tariff estimations without hidden markups, backed by official port vouchers.",
    },
    {
      title: "Archipelago Mastery",
      description: "Deep, on-the-ground familiarity with local port customs, harbor masters (KSOP), and terminal conditions nationwide.",
    },
    {
      title: "24/7 Operational Agility",
      description: "Direct access to authorized decision makers ready to resolve berthing and husbandry issues around the clock.",
    },
  ],
  headOffice: {
    company: "PT GEMILANG SEGARA EMAS",
    addressLine1: "Jl. Irigasi Persada VI Blok C8 No.18",
    addressLine2: "RT/RW: 012/011, Kel. Bekasi Jaya, Kec. Bekasi Timur",
    cityProvince: "Kota Bekasi, Jawa Barat",
    postalCode: "17112",
    country: "Indonesia",
  },
  emails: {
    general: "gemilang.segara.emas@gse-id.com",
    operations: "operation@gse-id.com",
    shipAgency: "ship-agency@gse-id.com",
  },
};

export const KEY_CONTACTS: KeyContact[] = [
  {
    id: "abdul-nasution",
    name: "ABDUL GAFUR NASUTION",
    title: "Head of General Agency & Commercial Operations",
    phone: "+62 852 9005 0025",
    cleanPhone: "6285290050025",
    email: "abdul.nasution@gse-id.com",
    wechat: "+6285290050025",
    avatarInitials: "AN",
    yearsExperience: "15+ Years Experience",
    specialties: [
      "General Agency Coordination",
      "Port Feasibility & Tariff Calculation",
      "Proforma Disbursement Account (PDA)",
      "KSOP & Authority Relations",
    ],
    keyRegions: "Nationwide Centralized Command (Sumatera, Jawa, Kalimantan, Sulawesi)",
    bio: "A seasoned maritime professionals with extensive expertise in managing shipping agency operations across Indonesia’s busiest maritime gateways. Renowned for navigating complex regulatory requirements, Inaportnet clearances, and stakeholder engagements, while delivering seamless support to global shipowners, operators, and charterers.",
    roleDescription:
      "General Agency Coordination, Port Disbursement (PDA), Commercial & Principal Relations",
  },
  {
    id: "arya-adiwidyo",
    name: "ARYA ADIWIDYO NUGROHO",
    title: "Marine Husbandry & Field Operations Lead",
    phone: "+62 877 5030 3775",
    cleanPhone: "6287750303775",
    email: "arya.adiwidyo@gse-id.com",
    wechat: "+6287750303775",
    avatarInitials: "AA",
    yearsExperience: "12+ Years Experience",
    specialties: [
      "Boarding Officer Supervision",
      "Bulk Cargo Quality & Hold Inspection",
      "Stevedoring Turnaround Management",
      "Crew Change & Offshore Husbandry",
    ],
    keyRegions: "Specialized in River & Open-Sea Anchorages (Kalimantan & Sumatera)",
    bio: "Actively engaged in frontline port operations, overseeing bulk cargo handling including PKE, coal, molasses, and CPO, as well as comprehensive crew husbandry services. Recognized for consistently enhancing vessel loading productivity while maintaining an exemplary zero-contamination record across both deepwater terminals and remote river anchorages.",
    roleDescription:
      "Port Operations, Berthing & Customs Clearance, Stevedoring & Turnaround Supervision",
  },
  {
    id: "santi",
    name: "WAHYU SUSANTI (Ms)",
    title: "Head of Agency Administration & Marine Finance",
    phone: "+62 812 8219 412",
    cleanPhone: "628128219412",
    email: "wahyu.susanti@gse-id.com",
    wechat: "+628128219412",
    avatarInitials: "WS",
    yearsExperience: "10+ Years Experience",
    specialties: [
      "Final Disbursement Account (FDA) Audits",
      "Pelindo Statutory Tariff Compliance",
      "Port Documentation & Inaportnet Billing",
      "Principal Financial Accounting",
    ],
    keyRegions: "Central Command Financial Reconciliation across 25+ Ports",
    bio: "A seasoned maritime professional with extensive expertise in shipping agency administration, financial controls, and port cost management. Recognized for delivering accurate, transparent, and dispute-free Final Disbursement Accounts (FDA) within demanding deadlines, ensuring complete cost transparency and confidence for international shipowners, operators, and charterers. With a strong commitment to operational excellence and financial integrity, consistently provides timely reconciliations, meticulous cost verification, and seamless coordination among principals, port authorities, terminals, and service providers throughout Indonesia.",
    roleDescription:
      "Finance Administration, Documentation, Port Billing, Husbandry Inquiries",
  },
];

export const PORT_REGIONS: PortRegion[] = [
  {
    region: "SUMATERA",
    description: "Western sea lanes, Malacca Strait terminals, agricultural & oil ports",
    ports: [
      "BELAWAN",
      "KUALA TANJUNG",
      "PADANG (TELUK BAYUR)",
      "DUMAI/PELINTUNG/LUBUK GAUNG",
      "TANJUNG BUTON",
      "FUTONG",
      "SUNGAI PAKNING ANCHORAGE",
      "JAMBI/MUARA SABAK ANCHORAGE",
      "PALEMBANG",
      "BATAM",
      "PANJANG",
      "TANJUNG KLUANG/BELITUNG",
    ],
  },
  {
    region: "JAWA",
    description: "Industrial hubs, major national gateway seaports & container terminals",
    ports: [
      "MERAK/CIGADING/CIWANDAN",
      "TANJUNG PRIOK",
      "PATIMBAN",
      "MARUNDA",
      "CILACAP",
      "SEMARANG",
      "GRESIK",
      "SURABAYA",
      "PROBOLINGGO",
    ],
  },
  {
    region: "KALIMANTAN",
    description: "Bulk loading terminals, river ports, coal & agro transshipment anchorages",
    ports: [
      "BANJARMASIN/TABONEO",
      "SAMARINDA",
      "BALIKPAPAN",
      "BONTANG",
      "SAMPIT",
      "TARJUN",
      "MUARA BERAU",
      "ADANG BAY",
      "KENDAWANGAN",
      "KIJING/PONTIANAK",
    ],
  },
  {
    region: "SULAWESI",
    description: "Eastern mineral gateways, nickel industrial ports & deepwater anchorages",
    ports: [
      "MAKASSAR",
      "KENDARI",
      "BITUNG",
      "BATU PUTIH/POMALAA",
      "BOMBANA",
      "ANGGREK",
      "MOROWALI",
      "BELANG-BELANG",
    ],
  },
  {
    region: "NUSA TENGGARA",
    description: "Strategic island transit points & dedicated mining processing ports",
    ports: ["BADAS", "OBI ISLAND", "BIMA"],
  },
  {
    region: "PAPUA",
    description: "Far-eastern commercial and regional natural resource gateways",
    ports: ["MANOKWARI", "SORONG"],
  },
];

export const VALUED_CLIENTS: ClientPrincipal[] = [
  {
    name: "Summit Trading SA",
    country: "Switzerland",
    description: "International commodity trading & global bulk chartering partner",
    flag: "🇨🇭",
    logo: "/logos/summit_trading.svg",
    logoBg: "dark",
  },
  {
    name: "ADM Asia",
    country: "Singapore",
    description: "ADM nourishes humans, animals, and industries sustainably.",
    flag: "🇸🇬",
    logo: "/logos/adm.svg",
    logoBg: "light",
  },
  {
    name: "H. BÖGEL GMBH & CO. KG",
    country: "Germany",
    description: "European feed ingredients, agricultural commodities & maritime shipping",
    flag: "🇩🇪",
    logo: "/logos/h_bogel.svg",
    logoBg: "light",
  },
  {
    name: "Peter Cremer Holding GmbH & Co. KG",
    country: "Germany",
    description: "Global agro-bulk, oleochemicals, molasses & worldwide ocean logistics",
    flag: "🇩🇪",
    logo: "/logos/cremer.svg",
    logoBg: "light",
  },
  {
    name: "Swire Bulk Pte Ltd",
    country: "Singapore",
    description: "Premier multinational dry bulk ship operator & modern vessel fleet",
    flag: "🇸🇬",
    logo: "/logos/swire_bulk_v2.svg",
    logoBg: "light",
  },
];

export const CORE_VESSEL_EXPERTISE: VesselCategory[] = [
  {
    title: "Bulk Carriers",
    subtitle: "Dry & Liquid Bulk Cargoes",
    cargoTypes: "PKE (Palm Kernel Expeller), Molasses, Coal, Grain, Fertilizer, Minerals, Clinker",
    description:
      "Expertise in managing Supramax, Ultramax, Panamax, and Handysize bulk vessels. We coordinate precise loading/discharging operations at deepwater berths and offshore transshipment anchorages.",
    operations: [
      "Conveyor & telescopic chute loading supervision",
      "Draft survey & bunker survey coordination",
      "Cargo moisture & temperature verification (PKE)",
      "Continuous hatch sealing & hold inspection",
    ],
    image: "/images/bulk_carrier_pke_loading_1790838107212.jpg",
    highlightCargo: ["PKE (Palm Kernel Expeller)", "Agricultural Pellets", "Coal & Nickel Ore", "Cement Clinker"],
  },
  {
    title: "Tankers",
    subtitle: "Oil, Chemicals, & Gas Products",
    cargoTypes: "Cane Molasses Loading, Beet Molasses Discharging, Other Liquid Cargo Loading & Discharging, CPO, Chemicals",
    description:
      "Specialized handling of chemical and product tankers. We coordinate terminal jetty protocols, flexible cargo hose connections, manifold alignment, and sampling procedures.",
    operations: [
      "Marine loading arm & hose manifold alignment",
      "Shore tank ullage, sounding & sampling protocol",
      "Pre-discharge inspection & heating coil management",
      "24/7 terminal coordination for zero-laytime delays",
    ],
    image: "/images/tanker_molasses_discharging_1790838118936.jpg",
    highlightCargo: ["Cane Molasses Loading", "Beet Molasses Discharging", "Other Liquid Cargo Loading & Discharging", "Crude Palm Oil (CPO)"],
  },
  {
    title: "Specialized Ships",
    subtitle: "Offshore, Tug & Barges, Project Cargo",
    cargoTypes: "Heavy Lift Machinery, Industrial Modules, Mining Equipment, Steel Structures",
    description:
      "Full agency coverage for non-conventional vessels, ocean-going tug and barge convoys, offshore support vessels (OSV/AHTS), and heavy-lift project cargo carriers.",
    operations: [
      "Specialized permit & security clearance (Hubla/TNI-AL)",
      "Towing and pilotage arrangement in narrow channels",
      "Transshipment alongside at open sea anchorages",
      "Heavy lift lashing inspection & clearance",
    ],
    image: "/images/tug_barge_project_cargo_1790838143294.jpg",
    highlightCargo: ["Heavy Lift Project Cargo", "Ocean Tug & Barges", "Offshore Support Equipment", "Steel Pipes & Beams"],
  },
];

export const AGENCY_SERVICES = [
  {
    title: "Port Clearance & Inward/Outward",
    description:
      "End-to-end statutory documentation with KSOP, Harbour Master (Syahbandar), Customs (Bea Cukai), Immigration (Imigrasi), and Quarantine (Karantina Kesehatan/Pertanian).",
    code: "01",
  },
  {
    title: "Stevedoring & Cargo Supervision",
    description:
      "On-site port captains and experienced boarding agents supervising loading/unloading rates for PKE, molasses, liquid bulk, and minerals, ensuring zero contamination.",
    code: "02",
  },
  {
    title: "Proforma Disbursement Account (PDA)",
    description:
      "Providing competitive port tariff estimations, precise dispatch and demurrage monitoring, and clean, on-time Final Disbursement Account (FDA) reconciliation.",
    code: "03",
  },
  {
    title: "Husbandry & Crew Change Services",
    description:
      "Seamless crew handling: OK-to-Board letters, airport transfers, hotel accommodations, transit visas, shore passes, and medical doctor assistance across all regions.",
    code: "04",
  },
  {
    title: "Bunkering, Fresh Water & Provisions",
    description:
      "Reliable procurement and delivery of marine fuels (VLSFO, MGO), certified fresh water, quality deck/engine ship stores, and fresh marine provisions.",
    code: "05",
  },
  {
    title: "Spare Parts Logistics & Technical Support",
    description:
      "Air-freight customs clearance for 'Ship Spares in Transit', fast delivery to anchorage or berth by launch boat, and coordination of qualified underwater diving & repair services.",
    code: "06",
  },
];
