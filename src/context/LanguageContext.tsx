import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'id' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (key: string) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export const TRANSLATIONS = {
  en: {
    // Navbar
    'nav.about': 'About Us',
    'nav.vessels': 'Vessels & Services',
    'nav.cargo': 'Cargo Operations',
    'nav.performance': 'Performance',
    'nav.ports': 'Port Network',
    'nav.principals': 'Principals',
    'nav.contact': 'Contact',
    'nav.whatsapp': 'WhatsApp Key Person',
    'nav.requestPDA': 'Request Port Disbursement (PDA)',
    'nav.subTagline': 'SHIPPING AGENCY FOR ALL INDONESIAN PORTS',
    'nav.language': 'Language',
    'nav.switchTo': 'Beralih ke Bahasa Indonesia',

    // Hero
    'hero.badgeAgency': 'General Ship Agency',
    'hero.badgeCountry': 'Republic of Indonesia',
    'hero.badgeCommand': '24/7 Operational Command',
    'hero.titleMain': 'Excellence at Every Port,',
    'hero.titleHighlight': 'Trust in Every Voyage.',
    'hero.description':
      'PT Gemilang Segara Emas is a premier General Agent delivering integrated ship agency services throughout Indonesia\'s key maritime gateways. We provide seamless port call management, optimized vessel turnaround, and reliable operational support nationwide.',
    'hero.ctaPDA': 'Request Proforma Disbursement (PDA)',
    'hero.ctaContact': 'Contact Command Team',
    'hero.statPorts': 'Strategic Ports Covered',
    'hero.statTurnaround': 'Turnaround Commitment',
    'hero.statTransparency': 'Disbursement Transparency',

    // About Us Section
    'about.badge': 'About Us',
    'about.company': 'PT Gemilang Segara Emas',
    'about.title': 'Navigating Indonesia\'s Complex Maritime Landscape with Absolute Precision',
    'about.p1':
      'PT Gemilang Segara Emas is an authorized, premier Indonesian General Shipping Agent run by experienced key persons with a wide network across Indonesia agency network. Backed by strategic joint offices and an extensive nationwide network of licensed local agency partners across Sumatera, Jawa, Kalimantan, Sulawesi, Nusa Tenggara, Papua and other ports. We deliver comprehensive port call management under one unified service standard.',
    'about.p2':
      'The company directed by seasoned maritime professionals and an energetic new generation of industry talent, PT Gemilang Segara Emas delivers comprehensive ship agency services throughout Indonesia. As a trusted partner to international shipowners, charterers, and commodity traders, we bridge global best practices with deep local expertise, ensuring regulatory compliance, operational excellence, cargo integrity, and seamless vessel operations around the clock.',
    
    // Strategic Pillars
    'about.pillarCoordTitle': 'Centralized Coordination',
    'about.pillarCoordDesc':
      'Single point of contact for principals worldwide with standardized operational reporting, unified communications, and transparent accounting across all 25+ Indonesian ports.',
    'about.pillarTurnaroundTitle': 'Optimized Turnaround',
    'about.pillarTurnaroundDesc':
      'Proactive berth planning, expedited Inaportnet inward/outward statutory clearances, and continuous stevedoring monitoring to eliminate demurrage risk and cargo idle time.',

    // GSE Operational Standard
    'about.standardTitle': 'The GSE Operational Standard',
    'about.standardSubtitle':
      'Guaranteed operational protocols enforced across every port call in Indonesia',
    'about.std1Title': '24/7 Boarding Attendance on Site',
    'about.std1Desc':
      'Dedicated physical attendance by experienced boarding officers from initial pilotage to outbound departure.',
    'about.std2Title': 'Port Authority & KSOP Compliance',
    'about.std2Desc':
      'Direct integration with Inaportnet, Syahbandar, Bea Cukai, Imigrasi, and Karantina for rapid approvals.',
    'about.std3Title': 'Cargo Custody & Integrity Checks',
    'about.std3Desc':
      'Strict protocol for PKE moisture levels, cargo hold dry-clean inspections, and liquid bulk manifold sealing.',
    'about.std4Title': 'Accurate PDA & Prompt FDA Closing',
    'about.std4Desc':
      'Verifiable port tariff estimations with zero hidden surcharges, substantiated by official Pelindo receipts.',
    'about.std5Title': 'Direct Access to Command Key Persons',
    'about.std5Desc':
      'Immediate escalation and real-time operational updates delivered directly to owners, charterers, and port captains.',

    // Vessels & Services
    'vessels.badge': 'Core Expertise & Fleet Types',
    'vessels.badgeSub': 'Vessel Handling',
    'vessels.title': 'Specialized Port Agency for All Vessel Classes',
    'vessels.desc':
      'From deep-draft bulk carriers loading PKE to chemical tankers discharging molasses at specialized terminals, our experienced port captains ensure smooth operations, stringent safety, and zero unnecessary downtime.',
    'vessels.servicesTitle': 'Comprehensive Agency & Marine Services',
    'vessels.servicesDesc':
      'Full spectrum ship husbanding and statutory agency solutions for every Indonesian port call',
    'vessels.typicalCargo': 'Typical Cargo',
    'vessels.keyOperations': 'Key Operations Handled',
    'vessels.requestPDAForVessel': 'Request Port Disbursement for this Vessel',
    'vessels.emergencyAssistance': 'Need immediate emergency agency assistance at an Indonesian port?',
    'vessels.emergencyDesc': 'Our 24/7 duty officers coordinate emergency clearances, medical evacuations, bunker replenishment, and technical repairs with harbor authorities immediately.',
    'vessels.contactDutyOfficer': 'Contact 24/7 Duty Officer',

    // Cargo Spotlight
    'cargo.badge': 'Specialized Cargo Handling',
    'cargo.badgeSub': 'Agricultural & Liquid Bulk Focus',
    'cargo.title': 'PKE & Molasses Operational Safeguards',
    'cargo.desc':
      'Indonesia is the world leader in palm derivatives and agricultural byproducts. Our specialized cargo supervision protects cargo quality, prevents vessel hold contamination, and ensures strict adherence to international export standards.',
    'cargo.pkeTitle': 'Palm Kernel Expeller (PKE) & Agro-Bulk',
    'cargo.pkeSubtitle': 'Dry Bulk Animal Feed & Biomass',
    'cargo.molassesTitle': 'Industrial Molasses & Liquid Byproducts',
    'cargo.molassesSubtitle': 'Liquid Bulk Chemical & Feed Grade',
    'cargo.requestQuote': 'Inquire About Cargo Agency',

    // Operational Performance Metrics
    'metrics.badge': 'Operational Performance & KPIs',
    'metrics.badgeSub': 'Demonstrated Efficiency',
    'metrics.title': 'Proven Port Efficiency & Turnaround Optimization',
    'metrics.desc':
      'Comparative operational data across major Indonesian maritime corridors. We eliminate idle anchorage delays, optimize berth occupancy, and safeguard principals against avoidable demurrage.',
    'metrics.tabTurnaround': 'Port Stay Duration (Hours)',
    'metrics.tabClearance': 'Statutory Clearances (Hours)',
    'metrics.tabLoadingRate': 'Loading Productivity (MT/Day)',
    'metrics.gseAgency': 'GSE Managed Call',
    'metrics.benchmark': 'Industry Benchmark',
    'metrics.hoursSaved': 'Hours Saved Per Call',
    'metrics.statTurnaroundReduction': 'Average Turnaround Reduction',
    'metrics.statHoursSaved': 'Average Hours Saved per Call',
    'metrics.statClearanceSpeed': 'Faster Statutory Clearance',
    'metrics.statFdaClosing': 'FDA Prompt Closing Timeline',
    'metrics.chartTurnaroundTitle': 'Port Stay Comparison: GSE vs. Regional Benchmark',
    'metrics.chartTurnaroundSub': 'Measured total port call duration (hours) from harbor entrance pilotage to outward clearance',
    'metrics.chartClearanceTitle': 'Statutory Processing Milestones Across Indonesian Authorities',
    'metrics.chartClearanceSub': 'Average duration (hours) for Inaportnet, KSOP Syahbandar, Bea Cukai, and Immigration approvals',
    'metrics.chartLoadingTitle': 'Loading & Pumping Daily Productivity Rates (MT/Day)',
    'metrics.chartLoadingSub': 'Stevedoring throughput achieved through continuous on-board officer supervision',
    'metrics.footnote': 'Source: Verified operational logs across 200+ vessel port calls (Handymax, Supramax, Ultramax & Chemical Tankers) handled in Sumatera, Jawa, Kalimantan, and Sulawesi gateways.',

    // Port Network
    'ports.badge': 'Nationwide Agency Footprint',
    'ports.badgeSub': '25+ Strategic Ports',
    'ports.title': 'Complete Indonesian Port Coverage Network',
    'ports.desc':
      'Strategic joint offices and licensed agency partners across all major economic corridors and maritime loading centers in Indonesia.',
    'ports.searchPlaceholder': 'Search port or region (e.g. Belawan, Taboneo, Morowali)...',
    'ports.allRegions': 'All Regions',
    'ports.requestPDAForPort': 'Request Port Tariff & PDA',
    'ports.verifiedAgency': 'Authorized Agency Network',
    'ports.needDifferentPort': 'Need a port call at another Indonesian anchorage or private terminal?',
    'ports.needDifferentPortDesc': 'We arrange specialized inward/outward clearances and stevedoring for offshore mining concessions, private industrial jetties, and remote transshipment anchorages on request.',
    'ports.requestCustomPort': 'Request Custom Port Agency',

    // Principals Section
    'principals.badge': 'Global Maritime Partnerships',
    'principals.badgeSub': 'Valued Clients & Charterers',
    'principals.title': 'Trusted by Leading Global Shipowners & Commodity Traders',
    'principals.desc':
      'International commodity houses, European feed ingredient distributors, and global bulk fleet operators rely on PT Gemilang Segara Emas for unwavering port integrity and operational consistency in Indonesia.',

    // Contact Section
    'contact.badge': 'Direct Command & Agency Contacts',
    'contact.badgeSub': 'Immediate Assistance',
    'contact.title': 'Connect Directly with Our Maritime Leadership',
    'contact.desc':
      'No call centers or bureaucratic delays. Get immediate, direct access to experienced decision makers for port tariff inquiries, berth planning, and urgent vessel husbandry.',
    'contact.headOffice': 'Registered Head Office',
    'contact.officialEmails': 'Official Email Communications',
    'contact.wechatId': 'WeChat',
    'contact.callDirect': 'Call Direct',
    'contact.sendWhatsApp': 'Send WhatsApp Message',
    'contact.sendEmail': 'Send Official Email',

    // PDA Modal
    'pda.title': 'Request Proforma Disbursement Account (PDA)',
    'pda.subtitle': 'Accurate, itemized Indonesian port cost estimation backed by official tariffs',
    'pda.principalName': 'Principal / Company Name',
    'pda.vesselName': 'Vessel Name',
    'pda.portOfCall': 'Intended Port of Call',
    'pda.vesselType': 'Vessel Type / Class',
    'pda.grtDwt': 'GRT / DWT & Summer Draft (m)',
    'pda.cargoTypeQty': 'Cargo Type & Intended Quantity (MT)',
    'pda.eta': 'Estimated Time of Arrival (ETA)',
    'pda.additionalNotes': 'Special Operational Requirements / Husbandry Notes',
    'pda.submit': 'Generate & Submit PDA Request',
    'pda.submitting': 'Processing PDA Request...',
    'pda.close': 'Cancel / Close',
    'pda.disclaimer': 'All PDA calculations are based on prevailing Pelindo tariffs and KSOP regulations with zero hidden markups.',
    'pda.successTitle': 'PDA Inquiry Successfully Generated',
    'pda.successDesc': 'Our agency team will review your vessel specifications and send a verified, itemized PDA within 2 to 4 business hours.',

    // Footer
    'footer.companyDescription':
      'Authorized Indonesian General Shipping Agent delivering comprehensive port agency, cargo supervision, and marine husbandry across 25+ strategic ports in Sumatera, Jawa, Kalimantan, Sulawesi, Nusa Tenggara, and Papua.',
    'footer.quickLinks': 'Quick Navigation',
    'footer.headquarters': 'Headquarters',
    'footer.allRightsReserved': 'All rights reserved.',
    'footer.complianceNote': 'Licensed & operating in full compliance with Indonesian Directorate General of Sea Transportation (Hubla) & KSOP regulations.',

    // Floating WhatsApp
    'float.tooltip': 'Quick WhatsApp with Key Person',
    'float.status': 'Online 24/7',
  },
  id: {
    // Navbar
    'nav.about': 'Tentang Kami',
    'nav.vessels': 'Kapal & Layanan',
    'nav.cargo': 'Operasi Kargo',
    'nav.performance': 'Performa',
    'nav.ports': 'Jaringan Pelabuhan',
    'nav.principals': 'Prinsipal & Klien',
    'nav.contact': 'Kontak',
    'nav.whatsapp': 'WhatsApp Personel Kunci',
    'nav.requestPDA': 'Permintaan Estimasi Biaya (PDA)',
    'nav.subTagline': 'SHIPPING AGENCY FOR ALL INDONESIAN PORTS',
    'nav.language': 'Bahasa',
    'nav.switchTo': 'Switch to English',

    // Hero
    'hero.badgeAgency': 'Keagenan Umum Kapal',
    'hero.badgeCountry': 'Republik Indonesia',
    'hero.badgeCommand': 'Komando Operasional 24/7',
    'hero.titleMain': 'Keunggulan di Setiap Pelabuhan,',
    'hero.titleHighlight': 'Kepercayaan di Setiap Pelayaran.',
    'hero.description':
      'PT Gemilang Segara Emas adalah Agen Umum terkemuka yang menyediakan layanan keagenan kapal terpadu di seluruh gerbang maritim strategis Indonesia. Kami menghadirkan pengelolaan port call yang mulus, efisiensi perputaran kapal, dan dukungan operasional andal secara nasional.',
    'hero.ctaPDA': 'Minta Proforma Disbursement Account (PDA)',
    'hero.ctaContact': 'Hubungi Tim Komando',
    'hero.statPorts': 'Pelabuhan Strategis Dijangkau',
    'hero.statTurnaround': 'Komitmen Kecepatan Sandar',
    'hero.statTransparency': 'Transparansi Biaya Pelabuhan',

    // About Us Section
    'about.badge': 'Tentang Kami',
    'about.company': 'PT Gemilang Segara Emas',
    'about.title': 'Menavigasi Lanskap Maritim Indonesia yang Kompleks dengan Presisi Mutlak',
    'about.p1':
      'PT Gemilang Segara Emas is an authorized, premier Indonesian General Shipping Agent run by experienced key persons with a wide network across Indonesia agency network. Backed by strategic joint offices and an extensive nationwide network of licensed local agency partners across Sumatera, Jawa, Kalimantan, Sulawesi, Nusa Tenggara, Papua and other ports. We deliver comprehensive port call management under one unified service standard.',
    'about.p2':
      'The company directed by seasoned maritime professionals and an energetic new generation of industry talent, PT Gemilang Segara Emas delivers comprehensive ship agency services throughout Indonesia. As a trusted partner to international shipowners, charterers, and commodity traders, we bridge global best practices with deep local expertise, ensuring regulatory compliance, operational excellence, cargo integrity, and seamless vessel operations around the clock.',
    
    // Strategic Pillars
    'about.pillarCoordTitle': 'Koordinasi Terpusat',
    'about.pillarCoordDesc':
      'Satu titik kontak tunggal untuk prinsipal di seluruh dunia dengan pelaporan operasional terstandarisasi, komunikasi terpadu, dan akuntansi transparan di seluruh 25+ pelabuhan Indonesia.',
    'about.pillarTurnaroundTitle': 'Perputaran Kapal Optimal',
    'about.pillarTurnaroundDesc':
      'Perencanaan sandar proaktif, percepatan izin klirens Inaportnet (inward/outward), dan pemantauan bongkar muat terus-menerus untuk mencegah risiko demorage dan waktu henti muatan.',

    // GSE Operational Standard
    'about.standardTitle': 'Standar Operasional GSE',
    'about.standardSubtitle':
      'Protokol operasional terjamin yang diterapkan di setiap kunjungan kapal di seluruh Indonesia',
    'about.std1Title': 'Pendampingan Fisik Boarding 24/7 di Lokasi',
    'about.std1Desc':
      'Kehadiran fisik langsung oleh boarding officer berpengalaman dari proses pemanduan awal hingga kapal bertolak keluar pelabuhan.',
    'about.std2Title': 'Kepatuhan Penuh Otoritas Pelabuhan & KSOP',
    'about.std2Desc':
      'Integrasi langsung dengan Inaportnet, Syahbandar, Bea Cukai, Imigrasi, dan Karantina Kesehatan untuk percepatan perizinan.',
    'about.std3Title': 'Inspeksi Integritas & Pengawasan Kargo',
    'about.std3Desc':
      'Protokol ketat kadar air PKE, inspeksi dry-clean ruang palka kargo curah, serta penyegelan manifold kargo cair.',
    'about.std4Title': 'Perhitungan PDA Akurat & Penutupan FDA Cepat',
    'about.std4Desc':
      'Estimasi tarif pelabuhan yang dapat diverifikasi tanpa biaya tersembunyi, didukung bukti kuitansi resmi Pelindo.',
    'about.std5Title': 'Akses Langsung ke Pengambil Keputusan Kunci',
    'about.std5Desc':
      'Eskalasi cepat dan pembaruan operasional waktu-nyata yang dikirim langsung kepada pemilik kapal, penyewa, dan port captain.',

    // Vessels & Services
    'vessels.badge': 'Keahlian Utama & Jenis Armada',
    'vessels.badgeSub': 'Penanganan Kapal',
    'vessels.title': 'Keagenan Pelabuhan Khusus untuk Semua Kelas Kapal',
    'vessels.desc':
      'Dari kapal curah sarat air dalam pemuat Palm Kernel Expeller (PKE) hingga tanker kimia pembongkar tetes tebu di terminal khusus, port captain berpengalaman kami memastikan operasional lancar, keselamatan ketat, dan zero delay.',
    'vessels.servicesTitle': 'Layanan Keagenan & Husbandry Maritim Terpadu',
    'vessels.servicesDesc':
      'Spektrum lengkap solusi keagenan kapal dan izin kepelabuhanan resmi untuk setiap kunjungan kapal di Indonesia',
    'vessels.typicalCargo': 'Komoditas Muatan Utama',
    'vessels.keyOperations': 'Operasi Utama yang Ditangani',
    'vessels.requestPDAForVessel': 'Minta Estimasi Biaya Pelabuhan untuk Kelas Kapal Ini',
    'vessels.emergencyAssistance': 'Membutuhkan bantuan darurat keagenan di pelabuhan Indonesia saat ini?',
    'vessels.emergencyDesc': 'Petugas jaga 24/7 kami segera mengoordinasikan klirens darurat, evakuasi medis awak kapal, pasokan bunker mendesak, serta perbaikan teknis dengan syahbandar setempat.',
    'vessels.contactDutyOfficer': 'Hubungi Petugas Jaga 24/7',

    // Cargo Spotlight
    'cargo.badge': 'Penanganan Kargo Khusus',
    'cargo.badgeSub': 'Fokus Curah Kering Pertanian & Curah Cair',
    'cargo.title': 'Protokol Pengamanan Operasional PKE & Molasses',
    'cargo.desc':
      'Indonesia adalah produsen utama produk turunan sawit dan hasil bumi dunia. Pengawasan kargo khusus kami melindungi mutu muatan, mencegah kontaminasi palka kapal, dan memastikan kepatuhan standar ekspor global.',
    'cargo.pkeTitle': 'Palm Kernel Expeller (PKE) & Curah Agro',
    'cargo.pkeSubtitle': 'Pakan Ternak Curah Kering & Biomassa',
    'cargo.molassesTitle': 'Tetes Tebu Industri & Produk Sampingan Cair',
    'cargo.molassesSubtitle': 'Curah Cair Kelas Industri & Pakan Ternak',
    'cargo.requestQuote': 'Konsultasikan Keagenan Kargo',

    // Operational Performance Metrics
    'metrics.badge': 'Kinerja Operasional & KPI',
    'metrics.badgeSub': 'Efisiensi Terbukti',
    'metrics.title': 'Efisiensi Pelabuhan Terukur & Optimalisasi Perputaran Kapal',
    'metrics.desc':
      'Data operasional komparatif di berbagai koridor maritim utama Indonesia. Kami mengeliminasi waktu tunggu labuh, mengoptimalkan okupansi dermaga, dan melindungi prinsipal dari risiko demorage.',
    'metrics.tabTurnaround': 'Durasi Sandar Pelabuhan (Jam)',
    'metrics.tabClearance': 'Kecepatan Klirens Otoritas (Jam)',
    'metrics.tabLoadingRate': 'Produktivitas Pemuatan (MT/Hari)',
    'metrics.gseAgency': 'Penanganan GSE',
    'metrics.benchmark': 'Tolok Ukur Industri',
    'metrics.hoursSaved': 'Jam Dihemat per Port Call',
    'metrics.statTurnaroundReduction': 'Pengurangan Waktu Singgah',
    'metrics.statHoursSaved': 'Rata-rata Waktu Dihemat per Kapal',
    'metrics.statClearanceSpeed': 'Persetujuan Klirens Lebih Cepat',
    'metrics.statFdaClosing': 'Penutupan Akun FDA Cepat',
    'metrics.chartTurnaroundTitle': 'Perbandingan Waktu Sandar: GSE vs. Tolok Ukur Wilayah',
    'metrics.chartTurnaroundSub': 'Total durasi port call (jam) terhitung dari pemanduan tiba di alur hingga klirens keluar berlayar',
    'metrics.chartClearanceTitle': 'Tahapan Pemrosesan Otoritas di Pelabuhan Indonesia',
    'metrics.chartClearanceSub': 'Rata-rata durasi (jam) persetujuan Inaportnet, KSOP Syahbandar, Bea Cukai, dan Imigrasi',
    'metrics.chartLoadingTitle': 'Laju Produktivitas Harian Pemuatan & Pompa (MT/Hari)',
    'metrics.chartLoadingSub': 'Throughput bongkar muat maksimal berkat pengawasan fisik perwira boarding secara kontinu',
    'metrics.footnote': 'Sumber: Log operasional terverifikasi dari 200+ port call kapal (Handymax, Supramax, Ultramax & Chemical Tanker) di gerbang Sumatera, Jawa, Kalimantan, dan Sulawesi.',

    // Port Network
    'ports.badge': 'Jangkauan Keagenan Seluruh Nusantara',
    'ports.badgeSub': '25+ Pelabuhan Strategis',
    'ports.title': 'Jaringan Pelabuhan Terlengkap di Indonesia',
    'ports.desc':
      'Kantor bersama strategis dan mitra keagenan berizin resmi di seluruh koridor ekonomi utama dan sentra pemuatan maritim Indonesia.',
    'ports.searchPlaceholder': 'Cari pelabuhan atau wilayah (contoh: Belawan, Taboneo, Morowali)...',
    'ports.allRegions': 'Semua Wilayah',
    'ports.requestPDAForPort': 'Minta Tarif & Estimasi PDA Pelabuhan',
    'ports.verifiedAgency': 'Jaringan Keagenan Resmi',
    'ports.needDifferentPort': 'Memerlukan keagenan di pelabuhan atau dermaga khusus lainnya di Indonesia?',
    'ports.needDifferentPortDesc': 'Kami mengurus perizinan khusus kedatangan/keberangkatan kapal dan bongkar muat untuk konsesi pertambangan lepas pantai, dermaga industri swasta, serta terminal transshipment sesuai permintaan.',
    'ports.requestCustomPort': 'Minta Keagenan Pelabuhan Khusus',

    // Principals Section
    'principals.badge': 'Kemitraan Maritim Internasional',
    'principals.badgeSub': 'Klien & Penyewa Terpercaya',
    'principals.title': 'Dipercaya oleh Pemilik Kapal Global & Pelaku Perdagangan Komoditas Dunia',
    'principals.desc':
      'Perusahaan komoditas multinasional, distributor pakan Eropa, dan operator armada curah dunia mempercayakan PT Gemilang Segara Emas untuk integritas pelabuhan dan konsistensi operasional di Indonesia.',

    // Contact Section
    'contact.badge': 'Komando Langsung & Kontak Personel Kunci',
    'contact.badgeSub': 'Bantuan Cepat',
    'contact.title': 'Terhubung Langsung dengan Manajemen Maritim Kami',
    'contact.desc':
      'Tanpa birokrasi berbelit. Dapatkan akses langsung ke pengambil keputusan berpengalaman untuk informasi tarif pelabuhan, rencana sandar, dan kebutuhan darurat kapal Anda.',
    'contact.headOffice': 'Kantor Pusat Terdaftar',
    'contact.officialEmails': 'Alamat Email Resmi Perusahaan',
    'contact.wechatId': 'WeChat',
    'contact.callDirect': 'Hubungi Langsung',
    'contact.sendWhatsApp': 'Kirim Pesan WhatsApp',
    'contact.sendEmail': 'Kirim Email Resmi',

    // PDA Modal
    'pda.title': 'Permintaan Proforma Disbursement Account (PDA)',
    'pda.subtitle': 'Perhitungan estimasi biaya pelabuhan resmi dan terperinci sesuai ketentuan tarif Pelindo',
    'pda.principalName': 'Nama Prinsipal / Perusahaan',
    'pda.vesselName': 'Nama Kapal',
    'pda.portOfCall': 'Pelabuhan Sandar yang Dituju',
    'pda.vesselType': 'Tipe / Kelas Kapal',
    'pda.grtDwt': 'GRT / DWT & Draft Musim Panas (m)',
    'pda.cargoTypeQty': 'Jenis Kargo & Estimasi Muatan (MT)',
    'pda.eta': 'Perkiraan Waktu Tiba (ETA)',
    'pda.additionalNotes': 'Kebutuhan Operasional Khusus / Layanan Husbandry',
    'pda.submit': 'Kirim Permintaan Estimasi PDA',
    'pda.submitting': 'Memproses Permintaan PDA...',
    'pda.close': 'Batal / Tutup',
    'pda.disclaimer': 'Seluruh perhitungan PDA didasarkan pada tarif resmi Pelindo dan regulasi KSOP yang berlaku tanpa kenaikan tersembunyi.',
    'pda.successTitle': 'Permintaan PDA Berhasil Terkirim',
    'pda.successDesc': 'Tim operasional kami akan meninjau spesifikasi kapal dan mengirimkan dokumen PDA terperinci dalam waktu 2 hingga 4 jam kerja.',

    // Footer
    'footer.companyDescription':
      'Agen Perkapalan Umum resmi di Indonesia yang menyediakan layanan keagenan kapal komprehensif, pengawasan kargo, dan husbandry maritim di lebih dari 25 pelabuhan strategis di Sumatera, Jawa, Kalimantan, Sulawesi, Nusa Tenggara, dan Papua.',
    'footer.quickLinks': 'Navigasi Cepat',
    'footer.headquarters': 'Kantor Pusat',
    'footer.allRightsReserved': 'Hak cipta dilindungi undang-undang.',
    'footer.complianceNote': 'Berizin resmi dan beroperasi dengan kepatuhan penuh terhadap ketentuan Direktorat Jenderal Perhubungan Laut (Hubla) & KSOP.',

    // Floating WhatsApp
    'float.tooltip': 'WhatsApp Cepat ke Personel Kunci',
    'float.status': 'Siap Siaga 24/7',
  },
  zh: {
    // Navbar
    'nav.about': '关于我们',
    'nav.vessels': '船型与服务',
    'nav.cargo': '货物作业',
    'nav.performance': '运营表现',
    'nav.ports': '港口网络',
    'nav.principals': '客户与委托方',
    'nav.contact': '联系我们',
    'nav.whatsapp': 'WhatsApp 专属对接人',
    'nav.requestPDA': '申请港口使费预算 (PDA)',
    'nav.subTagline': 'SHIPPING AGENCY FOR ALL INDONESIAN PORTS',
    'nav.language': '语言',
    'nav.switchTo': '切换至中文',

    // Hero
    'hero.badgeAgency': '总船舶代理公司',
    'hero.badgeCountry': '印度尼西亚共和国',
    'hero.badgeCommand': '24/7 全天候运营指挥',
    'hero.titleMain': '精于各大港口，',
    'hero.titleHighlight': '信赖每一次航程。',
    'hero.description':
      'PT Gemilang Segara Emas 是印度尼西亚领先的船舶总代理，业务覆盖全国各大主要海运门户。我们提供高效的靠泊挂靠管理、快速船舶周转以及全天候可靠的现场运营支持。',
    'hero.ctaPDA': '申请港口使费预估 (PDA)',
    'hero.ctaContact': '联系调度团队',
    'hero.statPorts': '战略港口覆盖',
    'hero.statTurnaround': '周转效率保障',
    'hero.statTransparency': '透明费用核算',

    // About Us Section
    'about.badge': '关于我们',
    'about.company': 'PT Gemilang Segara Emas',
    'about.title': '以极高精准度掌舵印尼复杂的群岛海事格局',
    'about.p1':
      'PT Gemilang Segara Emas 是一家经官方许可的印尼领先船舶总代理，由经验丰富的海事实干家领导，拥有遍布印尼的成熟代理服务网络。凭借苏门答腊、爪哇、加里曼丹、苏拉威西、努沙登加拉和巴布亚等各地的战略办公室和本地持牌代理伙伴，我们在统一的服务标准下提供一站式港口代理服务。',
    'about.p2':
      '由资深海事专家与充满活力的行业新生代共同执掌，PT Gemilang Segara Emas 在印尼全境提供卓越的船舶代理服务。作为全球船东、租船人和大宗商品贸易商值得信赖的合作伙伴，我们将国际先进水准与本土深厚经验相融合，确保法规合规、操作卓越、货物安全以及全天候无缝船舶运作。',
    
    // Strategic Pillars
    'about.pillarCoordTitle': '集中统筹协调',
    'about.pillarCoordDesc':
      '全球委托方单一联络窗口，覆盖全印尼25+主要港口，提供标准化运营报告、统一沟通及清晰透明的财务核算。',
    'about.pillarTurnaroundTitle': '船舶周转优化',
    'about.pillarTurnaroundDesc':
      '主动泊位规划、加速 Inaportnet 进出港联检清关，全流程理货装卸监控，有效消除滞期费风险及货物待泊时间。',

    // GSE Operational Standard
    'about.standardTitle': 'GSE 运营服务标准',
    'about.standardSubtitle':
      '印尼各港口严格执行的标准化运营守则',
    'about.std1Title': '24/7 登轮代表全天候在场',
    'about.std1Desc':
      '从引水上船到离泊起航，经验丰富的登轮代表全程现场值守。',
    'about.std2Title': '港务局与 KSOP 联检极速审批',
    'about.std2Desc':
      '全面接入 Inaportnet、Syahbandar、海关、移民局及检疫系统，确保法定文件快速获批。',
    'about.std3Title': '货物看护与完整性检验',
    'about.std3Desc':
      '针对棕榈粕水分、货舱干燥清洁度检验及散装液体管汇封签实施严格把控。',
    'about.std4Title': '精准 PDA 测算与快速 FDA 结算',
    'about.std4Desc':
      '以官方 Pelindo 费率为基准，杜绝隐形加价，提供清晰透明的财务结算。',
    'about.std5Title': '核心决策层直线对接',
    'about.std5Desc':
      '问题快速升级，实时向船东、租家与港口主管同步第一手现场动态。',

    // Vessels & Services
    'vessels.badge': '核心专长与船队类型',
    'vessels.badgeSub': '船舶装卸操业',
    'vessels.title': '适配各类船型的专业港口代理',
    'vessels.desc':
      '从装载棕榈粕(PKE)的大吃水散货船，到在专业码头作业的甘蔗糖蜜装载、甜菜糖蜜卸载及其他散装液体化学品油轮，经验丰富的港口队长确保装卸顺畅、严格安全并规避一切非必要延误。',
    'vessels.servicesTitle': '全面综合的港口代理与船舶服务',
    'vessels.servicesDesc':
      '为印度尼西亚所有港口挂靠提供全方位的船舶物料补给与法定代理解决方案',
    'vessels.typicalCargo': '典型装载货物',
    'vessels.keyOperations': '主要代理服务范围',
    'vessels.requestPDAForVessel': '申请此船型的港口使费预估',
    'vessels.emergencyAssistance': '在印尼港口需要即时紧急代理协助？',
    'vessels.emergencyDesc': '我们的24/7值班人员立即与港务当局协调紧急进出港许可、船员医疗救护、紧急燃油加注及技术维修。',
    'vessels.contactDutyOfficer': '联系 24/7 值班人员',

    // Cargo Spotlight
    'cargo.badge': '特种货物监管',
    'cargo.badgeSub': '农业与散装液体重点保障',
    'cargo.title': '高敏感大宗商品装卸监管专家',
    'cargo.desc':
      '棕榈粕(PKE)与专业液体散货（甘蔗糖蜜装载、甜菜糖蜜卸货及其他液体货物）对码头监管要求极高。我们专业代理团队严把货物品质，确保符合国际安全准则并实现船舶快速周转。',
    'cargo.pkeTitle': '棕榈粕 (PKE) 与散装农产品',
    'cargo.pkeSubtitle': '干散饲料原料与生物质',
    'cargo.molassesTitle': '工业糖蜜与液体副产品',
    'cargo.molassesSubtitle': '工业级与饲料级散装液体',
    'cargo.requestQuote': '咨询特种货物代理',

    // Operational Performance Metrics
    'metrics.badge': '运营绩效与 KPI',
    'metrics.badgeSub': '实证效率',
    'metrics.title': '卓越的港口周转效率与时间优化',
    'metrics.desc':
      '印尼各主要航运走廊的对比运营数据。我们规避锚地待泊延误，优化泊位使用率，并保障委托方免受非必要滞期损失。',
    'metrics.tabTurnaround': '在港停留时长 (小时)',
    'metrics.tabClearance': '法定联检审批 (小时)',
    'metrics.tabLoadingRate': '装卸日作业率 (吨/天)',
    'metrics.gseAgency': 'GSE 代理挂靠',
    'metrics.benchmark': '行业基准',
    'metrics.hoursSaved': '每航次节约小时数',
    'metrics.statTurnaroundReduction': '平均在港时间缩短',
    'metrics.statHoursSaved': '每航次平均节省工时',
    'metrics.statClearanceSpeed': '审批通关效率提速',
    'metrics.statFdaClosing': 'FDA 迅速结账周期',
    'metrics.chartTurnaroundTitle': '港口停留时间对比：GSE 对比 区域基准',
    'metrics.chartTurnaroundSub': '从进港引水登轮至出港放行全流程总耗时',
    'metrics.chartClearanceTitle': '印尼各联检部门审批节点',
    'metrics.chartClearanceSub': 'Inaportnet、港务监督、海关及移民局审批平均耗时',
    'metrics.chartLoadingTitle': '装货与泵送日均效率率 (吨/天)',
    'metrics.chartLoadingSub': '通过现场登轮专员不间断监管实现的高效装卸量',
    'metrics.footnote': '来源：覆盖苏门答腊、爪哇、加里曼丹与苏拉威西主要口岸200余航次经核实操作日志。',

    // Port Network
    'ports.badge': '全国代理网络',
    'ports.badgeSub': '25+ 战略口岸',
    'ports.title': '印尼全境港口与锚地服务网络',
    'ports.desc':
      '在印尼所有主要经济走廊和海运装货中心设有战略合资办公室与持牌代理伙伴。',
    'ports.searchPlaceholder': '搜索港口或区域 (例如 Belawan, Taboneo, Morowali)...',
    'ports.allRegions': '所有区域',
    'ports.requestPDAForPort': '查询港口费率与申请 PDA',
    'ports.verifiedAgency': '授权官方代理网络',
    'ports.needDifferentPort': '需要在印尼其他锚地或私人专用码头靠泊？',
    'ports.needDifferentPortDesc': '我们可根据要求为离岸矿业租借区、私人工业码头和偏远过驳锚地安排特种进出口联检通关与装卸监管。',
    'ports.requestCustomPort': '申请定制港口代理',

    // Principals Section
    'principals.badge': '全球海事伙伴',
    'principals.badgeSub': '尊贵委托方',
    'principals.title': '深受全球知名船东与大宗商品贸易商信赖',
    'principals.desc':
      '跨国大宗商品集团、欧洲饲料原料分销商及国际散货船东信赖 PT Gemilang Segara Emas 在印尼的崇高信誉与专业操守。',

    // Contact Section
    'contact.badge': '指挥调度与核心对接人',
    'contact.badgeSub': '即时协助',
    'contact.title': '直接对接我们的海事管理团队',
    'contact.desc':
      '无客服层层转接。直接联系具备丰富一线经验的决策人，快速咨询港口费率、泊位规划及紧急船舶需求。',
    'contact.headOffice': '总部注册地址',
    'contact.officialEmails': '官方往来邮箱',
    'contact.wechatId': '微信 WeChat',
    'contact.callDirect': '直接致电',
    'contact.sendWhatsApp': '发送 WhatsApp',
    'contact.sendEmail': '发送正式邮件',

    // PDA Modal
    'pda.title': '申请港口使费预估 (PDA)',
    'pda.subtitle': '基于印尼官方费率的详尽、逐项费用测算',
    'pda.principalName': '委托方 / 公司名称',
    'pda.vesselName': '船名',
    'pda.portOfCall': '目标港口',
    'pda.vesselType': '船舶类型 / 等级',
    'pda.grtDwt': '总吨 / 载重吨 / 吃水 (米)',
    'pda.cargoTypeQty': '货物种类 / 预计数量 (吨)',
    'pda.eta': '预计抵港时间 (ETA)',
    'pda.additionalNotes': '特殊操作要求 / 船舶补给事项',
    'pda.submit': '生成并提交 PDA 申请',
    'pda.submitting': '正在处理 PDA 申请...',
    'pda.close': '取消 / 关闭',
    'pda.disclaimer': '所有 PDA 测算均严格依照现行 Pelindo 官方标准和 KSOP 规章，绝无任何隐藏加价。',
    'pda.successTitle': 'PDA 询价单生成成功',
    'pda.successDesc': '我们的代理团队将在 2 至 4 个工作小时内审核船舶参数并发送正式盖章的逐项 PDA 预估。',

    // Footer
    'footer.companyDescription':
      '经印尼海运总局 (Hubla) 与港务局 (KSOP) 官方许可的船舶总代理，在苏门答腊、爪哇、加里曼丹、苏拉威西、努沙登加拉和巴布亚等25个以上战略口岸提供优质服务。',
    'footer.quickLinks': '快速导航',
    'footer.headquarters': '公司总部',
    'footer.allRightsReserved': '版权所有。',
    'footer.complianceNote': '严格遵守印尼海运法规与国际海事合规准则。',

    // Floating WhatsApp & WeChat
    'float.tooltip': '快速联系核心负责人',
    'float.status': '24/7 在线守候',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('gse_preferred_lang');
      if (saved === 'id' || saved === 'en' || saved === 'zh') {
        return saved;
      }
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('gse_preferred_lang', lang);
      document.documentElement.lang = lang;
    }
  };

  const toggleLanguage = () => {
    if (language === 'en') setLanguage('id');
    else if (language === 'id') setLanguage('zh');
    else setLanguage('en');
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = (key: string): string => {
    const dict = TRANSLATIONS[language] || TRANSLATIONS.en;
    return (dict as Record<string, string>)[key] || (TRANSLATIONS.en as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
