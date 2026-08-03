import {
  Wrench,
  Ship,
  PackageSearch,
  Anchor,
  Radar,
  Zap,
  ShieldCheck,
  Truck,
  FlaskConical,
  ClipboardList,
  LifeBuoy,
  Compass,
  Building2,
  Factory,
  Landmark,
  Fuel,
  Users,
  LucideIcon,
} from "lucide-react";

// ---------- Types ----------

export interface Service {
  slug: string;
  title: string;
  icon: LucideIcon;
  shortDescription: string;
  description: string;
  features: string[];
}

export interface ProductCategory {
  slug: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  category: string; // ProductCategory slug
  shortDescription: string;
  description: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  location: string;
  year: string;
  category: string;
}

export interface Industry {
  name: string;
  icon: LucideIcon;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface JobOpening {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  summary: string;
}

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  photo: string; // path under /public/images/team/
  email: string;
  phone: string;
  employeeId: string;
  certifications: string[];
}

// ---------- Company info ----------

export const company = {
  name: "BRINE SEA Marine Solutions",
  legalName: "BRINE SEA MARINE SOLUTIONS (PVT) LTD",
  registrationNumber: "PV 00272676",
  tagline: "Professional Marine Solutions for the Global Shipping Industry",
  subtagline: "Engineering Excellence | Marine Supply | Ship Repair | Offshore Support",
  email: "info@brineseamarine.com",
  phone: "+94 11 234 5678",
  whatsapp: "94112345678",
  address: "No. 24, Marine Drive, Colombo 03, Sri Lanka",
  hours: "Mon – Sat, 8:30 AM – 6:00 PM (24/7 Operations Desk)",
  social: {
    linkedin: "#",
    facebook: "#",
    instagram: "#",
    x: "#",
  },
};

// ---------- Stats ----------

export const stats: Stat[] = [
  { label: "Years of Experience", value: 20, suffix: "+" },
  { label: "Projects Delivered", value: 500, suffix: "+" },
  { label: "Global Clients", value: 100, suffix: "+" },
  { label: "Operations Support", value: 24, suffix: "/7" },
];

// ---------- Services ----------

export const services: Service[] = [
  {
    slug: "marine-engineering",
    title: "Marine Engineering",
    icon: Wrench,
    shortDescription: "Engineering support across the vessel lifecycle, from design review to commissioning.",
    description:
      "Our marine engineering team supports owners and yards with design review, structural assessment, and commissioning oversight, drawing on class society standards and decades of combined seagoing experience.",
    features: ["Structural assessment", "Class-compliant engineering review", "Commissioning support", "Retrofit design"],
  },
  {
    slug: "ship-repair",
    title: "Ship Repair",
    icon: Ship,
    shortDescription: "Hull, machinery, and systems repair coordinated across major regional yards.",
    description:
      "We coordinate hull, machinery, and systems repairs with vetted regional yards, managing scope, scheduling, and quality control so vessels return to service on time and within budget.",
    features: ["Hull and steel repair", "Machinery overhaul", "Dry-dock coordination", "Repair specification & quoting"],
  },
  {
    slug: "ship-maintenance",
    title: "Ship Maintenance",
    icon: ClipboardList,
    shortDescription: "Planned maintenance programs that keep vessels compliant and running.",
    description:
      "Planned maintenance system (PMS) support, condition monitoring, and scheduled servicing to reduce unplanned downtime and extend equipment life across your fleet.",
    features: ["PMS setup & auditing", "Condition-based monitoring", "Scheduled servicing", "Defect tracking"],
  },
  {
    slug: "ship-supply",
    title: "Ship Supply (Chandling)",
    icon: PackageSearch,
    shortDescription: "Provisions, stores, and spares delivered to port, on schedule.",
    description:
      "Reliable ship chandling across provisions, bonded stores, and technical spares, with transparent sourcing and delivery windows built around vessel port calls.",
    features: ["Provisions & bonded stores", "Technical spares", "Deck & engine stores", "Emergency supply runs"],
  },
  {
    slug: "marine-equipment",
    title: "Marine Equipment Supply",
    icon: Anchor,
    shortDescription: "Anchors, chains, pumps, valves, and deck machinery from trusted manufacturers.",
    description:
      "Sourcing and supply of deck and engine room equipment — anchors, chains, ropes, pumps, and valves — backed by manufacturer documentation and certification.",
    features: ["Anchors & mooring chain", "Pumps & valves", "Ropes & rigging", "Deck machinery"],
  },
  {
    slug: "marine-spare-parts",
    title: "Marine Spare Parts",
    icon: Factory,
    shortDescription: "OEM and equivalent spares sourced fast, with full traceability.",
    description:
      "A sourcing network covering OEM and certified equivalent spares for main engines, auxiliary machinery, and deck equipment, with documentation for class and flag-state records.",
    features: ["Main & auxiliary engine spares", "Deck equipment parts", "Sourcing & expediting", "Documentation & traceability"],
  },
  {
    slug: "marine-chemicals",
    title: "Marine Chemicals",
    icon: FlaskConical,
    shortDescription: "Lubricants, cleaning agents, and treatment chemicals for engine and deck.",
    description:
      "Supply of marine lubricants, tank cleaning agents, and water treatment chemicals, matched to manufacturer specifications and environmental requirements.",
    features: ["Marine lubricants", "Tank & hull cleaning agents", "Boiler & cooling water treatment", "MSDS documentation"],
  },
  {
    slug: "navigation-equipment",
    title: "Navigation Equipment",
    icon: Radar,
    shortDescription: "Bridge and navigation systems, supply, installation, and servicing.",
    description:
      "Supply, installation, and servicing of radar, GPS, ECDIS, and communication systems to keep bridge equipment current and fully operational.",
    features: ["Radar & ECDIS", "GPS & AIS systems", "GMDSS communication", "Servicing & calibration"],
  },
  {
    slug: "marine-electrical",
    title: "Marine Electrical Systems",
    icon: Zap,
    shortDescription: "Electrical installation, automation, and troubleshooting on board.",
    description:
      "On-board electrical installation, automation system support, and fault diagnosis, covering both new-build fit-out and in-service troubleshooting.",
    features: ["Electrical installation", "Automation & control systems", "Fault diagnosis", "Panel & switchboard work"],
  },
  {
    slug: "safety-equipment",
    title: "Safety Equipment",
    icon: LifeBuoy,
    shortDescription: "Firefighting, life-saving, and PPE supply and servicing.",
    description:
      "Supply and servicing of firefighting systems, life-saving appliances, and personal protective equipment, backed by certified inspection schedules.",
    features: ["Firefighting systems", "Life-saving appliances", "PPE supply", "Inspection & certification"],
  },
  {
    slug: "marine-logistics",
    title: "Marine Logistics",
    icon: Truck,
    shortDescription: "Port agency, customs coordination, and freight across the region.",
    description:
      "Local agency support, customs clearance, and freight coordination across regional ports, keeping cargo and spares moving without delay.",
    features: ["Port agency support", "Customs coordination", "Freight forwarding", "Husbandry services"],
  },
  {
    slug: "offshore-support",
    title: "Offshore Support",
    icon: Compass,
    shortDescription: "Logistics and technical support for offshore oil & gas operations.",
    description:
      "Supply and logistics support for offshore platforms and support vessels, covering equipment, spares, and personnel transfer coordination.",
    features: ["Platform supply runs", "Offshore equipment sourcing", "Crew transfer coordination", "Technical support"],
  },
  {
    slug: "consultancy",
    title: "Marine Consultancy",
    icon: ShieldCheck,
    shortDescription: "Independent technical and operational advice for owners and operators.",
    description:
      "Independent consultancy on vessel acquisition, technical audits, and operational efficiency, for owners entering new trades or vessel classes.",
    features: ["Technical audits", "Vessel acquisition support", "Operational efficiency review", "Compliance advisory"],
  },
];

// ---------- Products ----------

export const productCategories: ProductCategory[] = [
  { slug: "marine-equipment", name: "Marine Equipment" },
  { slug: "spare-parts", name: "Marine Spare Parts" },
  { slug: "anchors-chains", name: "Anchors & Chains" },
  { slug: "ropes", name: "Ropes & Rigging" },
  { slug: "valves-pumps", name: "Valves & Pumps" },
  { slug: "lubricants", name: "Marine Lubricants" },
  { slug: "chemicals", name: "Marine Chemicals" },
  { slug: "safety", name: "Safety Equipment" },
  { slug: "firefighting", name: "Fire Fighting Equipment" },
  { slug: "navigation", name: "Navigation Equipment" },
  { slug: "electrical", name: "Electrical Equipment" },
  { slug: "ppe", name: "Personal Protective Equipment" },
];

export const products: Product[] = [
  { id: "p1", name: "Stockless Bow Anchor", category: "anchors-chains", shortDescription: "Hot-dip galvanized, IACS certified.", description: "Heavy-duty stockless bow anchor available in multiple weight classes, hot-dip galvanized and supplied with IACS certification." },
  { id: "p2", name: "Stud-Link Anchor Chain", category: "anchors-chains", shortDescription: "Grade U2/U3, all diameters.", description: "Stud-link anchor chain in Grade U2 and U3, cut and certified to your vessel's chain locker specification." },
  { id: "p3", name: "8-Strand Mooring Rope", category: "ropes", shortDescription: "High-strength polypropylene, UV treated.", description: "8-strand mooring rope built for high working loads with UV-stabilized fiber for extended service life." },
  { id: "p4", name: "Marine Gate Valve", category: "valves-pumps", shortDescription: "Bronze body, DIN/JIS flange options.", description: "Bronze-bodied gate valve for sea water and ballast systems, available in DIN and JIS flange standards." },
  { id: "p5", name: "Centrifugal Ballast Pump", category: "valves-pumps", shortDescription: "Self-priming, corrosion-resistant housing.", description: "Self-priming centrifugal pump with corrosion-resistant housing, sized for ballast and general service applications." },
  { id: "p6", name: "Marine Cylinder Lubricant", category: "lubricants", shortDescription: "High-BN, two-stroke engine grade.", description: "High base-number cylinder lubricant formulated for two-stroke marine diesel engines running on varied fuel grades." },
  { id: "p7", name: "Boiler Water Treatment Chemical", category: "chemicals", shortDescription: "Scale & corrosion inhibitor.", description: "Boiler water treatment chemical formulated to inhibit scale build-up and corrosion in marine auxiliary boilers." },
  { id: "p8", name: "SOLAS Lifejacket", category: "safety", shortDescription: "SOLAS/MED approved, adult size.", description: "SOLAS and MED-approved adult lifejacket with retro-reflective tape and whistle, supplied with certification." },
  { id: "p9", name: "Portable Foam Fire Extinguisher", category: "firefighting", shortDescription: "9L capacity, marine-grade casing.", description: "9-litre foam fire extinguisher with marine-grade corrosion-resistant casing, supplied service-ready." },
  { id: "p10", name: "Marine Radar Display Unit", category: "navigation", shortDescription: "ARPA-capable, ECDIS-integrated.", description: "ARPA-capable radar display unit designed for integration with ECDIS and bridge navigation systems." },
  { id: "p11", name: "Explosion-Proof Deck Light", category: "electrical", shortDescription: "IP66-rated, LED retrofit.", description: "IP66-rated explosion-proof LED deck light suitable for hazardous area retrofits on tankers and gas carriers." },
  { id: "p12", name: "Marine PPE Kit", category: "ppe", shortDescription: "Coveralls, gloves, safety helmet, goggles.", description: "Standard marine PPE kit including flame-resistant coveralls, cut-resistant gloves, safety helmet, and goggles." },
];

// ---------- Projects ----------

export const projects: Project[] = [
  { id: "pr1", name: "Bulk Carrier Dry-Dock Overhaul", description: "Full hull blasting, machinery overhaul, and class renewal survey coordination for a 55,000 DWT bulk carrier.", location: "Colombo Dockyard, Sri Lanka", year: "2025", category: "Ship Repair" },
  { id: "pr2", name: "Fleet-Wide Spares Supply Program", description: "Established a standing spares supply agreement across an 18-vessel container fleet.", location: "Multiple Ports, South Asia", year: "2024", category: "Ship Supply" },
  { id: "pr3", name: "Offshore Platform Resupply Contract", description: "Ongoing logistics and equipment supply for an offshore gas platform support operation.", location: "Bay of Bengal", year: "2023 – Present", category: "Offshore Support" },
  { id: "pr4", name: "Navigation Systems Retrofit", description: "ECDIS and radar retrofit across a tanker fleet ahead of SOLAS compliance deadline.", location: "Colombo Port, Sri Lanka", year: "2023", category: "Navigation Equipment" },
  { id: "pr5", name: "Tanker Electrical System Upgrade", description: "Switchboard replacement and automation system upgrade for a mid-size product tanker.", location: "Galle, Sri Lanka", year: "2022", category: "Marine Electrical" },
  { id: "pr6", name: "Technical Audit for New Fleet Entry", description: "Independent technical audit and acquisition advisory for an owner entering the tanker trade.", location: "Colombo, Sri Lanka", year: "2022", category: "Consultancy" },
];

// ---------- Industries ----------

export const industries: Industry[] = [
  { name: "Shipping Companies", icon: Ship, description: "Ongoing technical and supply support for owned and chartered fleets." },
  { name: "Ship Owners", icon: Anchor, description: "Direct support for independent owners managing one or a small number of vessels." },
  { name: "Ship Management Companies", icon: Building2, description: "Partnering with management companies on technical and crewing-adjacent services." },
  { name: "Ports & Terminals", icon: Landmark, description: "Equipment and logistics support for port authorities and terminal operators." },
  { name: "Offshore Oil & Gas", icon: Fuel, description: "Supply chains and technical support for offshore platforms and support vessels." },
  { name: "Government Maritime Agencies", icon: Users, description: "Technical consultancy and equipment supply for public maritime bodies." },
  { name: "Marine Contractors", icon: Wrench, description: "Subcontracted engineering and repair support for marine construction projects." },
];

// ---------- Testimonials ----------

export const testimonials: Testimonial[] = [
  { id: "t1", name: "Captain R. Fernando", role: "Fleet Superintendent", company: "Regional Shipping Lines", quote: "BRINE SEA has been consistent and transparent on every supply request, even on tight port-call windows." },
  { id: "t2", name: "N. Weerasinghe", role: "Technical Manager", company: "Independent Ship Owner", quote: "Their dry-dock coordination saved us real time on our last overhaul — clear communication throughout." },
  { id: "t3", name: "A. Prakash", role: "Procurement Lead", company: "Offshore Logistics Group", quote: "Reliable sourcing and documentation on every spares order, which matters a lot for our compliance audits." },
];

// ---------- FAQs ----------

export const faqs: FaqItem[] = [
  { question: "Which ports do you operate in?", answer: "We are based in Colombo and actively cover major ports across Sri Lanka and the wider South Asia region, with offshore support extending into the Bay of Bengal." },
  { question: "Can you supply on short notice for a port call?", answer: "Yes — our operations desk works around vessel schedules and can arrange emergency supply runs for provisions, spares, and safety equipment." },
  { question: "Do you provide documentation for class and flag-state compliance?", answer: "All spares, chemicals, and equipment are supplied with manufacturer certification and traceability documentation suitable for class and flag-state records." },
  { question: "Do you work with independent owners as well as large fleets?", answer: "Both — our services scale from single-vessel independent owners to fleet-wide supply and technical management agreements." },
  { question: "How do I request a quote?", answer: "Use the contact form on this site or email us directly, and our team will respond with a scoped quote, typically within one business day." },
];

// ---------- Careers ----------

export const jobOpenings: JobOpening[] = [
  { id: "j1", title: "Marine Engineer", location: "Colombo, Sri Lanka", type: "Full-time", department: "Engineering", summary: "Support dry-dock projects and technical audits across our client fleet." },
  { id: "j2", title: "Procurement Officer – Marine Spares", location: "Colombo, Sri Lanka", type: "Full-time", department: "Supply Chain", summary: "Source and expedite marine spares and equipment for active supply contracts." },
  { id: "j3", title: "Port Operations Coordinator", location: "Galle, Sri Lanka", type: "Full-time", department: "Logistics", summary: "Coordinate husbandry, customs, and delivery logistics for port calls." },
];

// ---------- Crew / Team ----------

export const team: TeamMember[] = [
  {
    id: "tm1",
    name: "Capt. Ranil Perera",
    designation: "Managing Director",
    department: "Executive Management",
    photo: "/images/team/ranil-perera.jpg",
    email: "ranil.perera@brineseamarine.com",
    phone: "+94 77 100 0001",
    employeeId: "BSMS-001",
    certifications: ["Master Mariner (Unlimited)", "STCW III/2"],
  },
  {
    id: "tm2",
    name: "Eng. Nadeesha Silva",
    designation: "Chief Marine Engineer",
    department: "Technical",
    photo: "/images/team/nadeesha-silva.jpg",
    email: "nadeesha.silva@brineseamarine.com",
    phone: "+94 77 100 0002",
    employeeId: "BSMS-002",
    certifications: ["Chief Engineer Unlimited", "Class NK Approved"],
  },
  {
    id: "tm3",
    name: "Capt. Suresh Fernando",
    designation: "Port Captain",
    department: "Operations",
    photo: "/images/team/suresh-fernando.jpg",
    email: "suresh.fernando@brineseamarine.com",
    phone: "+94 77 100 0003",
    employeeId: "BSMS-003",
    certifications: ["Master Mariner", "Port State Control Certified"],
  },
  {
    id: "tm4",
    name: "Ms. Amaya Jayasuriya",
    designation: "Procurement Manager",
    department: "Supply Chain",
    photo: "/images/team/amaya-jayasuriya.jpg",
    email: "amaya.jayasuriya@brineseamarine.com",
    phone: "+94 77 100 0004",
    employeeId: "BSMS-004",
    certifications: ["CIPS Level 5"],
  },
  {
    id: "tm5",
    name: "Mr. Kasun Wickramasinghe",
    designation: "Technical Superintendent",
    department: "Technical",
    photo: "/images/team/kasun-wickramasinghe.jpg",
    email: "kasun.wickramasinghe@brineseamarine.com",
    phone: "+94 77 100 0005",
    employeeId: "BSMS-005",
    certifications: ["Marine Engineering Degree", "NDT Level II"],
  },
  {
    id: "tm6",
    name: "Ms. Dilini Rathnayake",
    designation: "HR & Careers Manager",
    department: "Human Resources",
    photo: "/images/team/dilini-rathnayake.jpg",
    email: "dilini.rathnayake@brineseamarine.com",
    phone: "+94 77 100 0006",
    employeeId: "BSMS-006",
    certifications: ["CHRM Certified"],
  },
];