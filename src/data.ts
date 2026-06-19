import { ServiceItem, ProcessStep, ProjectItem, SuccessStory, TeamMember, ContactInfo } from './types';

export const BRAND = {
  name: "FOCUS",
  companyName: "Focus Group",
  tagline: "STAY FOCUSED — Get it DONE",
  logoPlaceholder: "FOCUS",
  aboutText: "Focus is your industrial, commercial, and technological partner. If your business involves specialized engineering supplies, Focus is your best source for products directly from manufacturers — not just sourcing, but also product development and custom modifications to perfectly match your target applications. We have the experience to study required products, select the right solutions for your projects, and offer an unmatched network of relationships and accumulated partnerships in a fast-moving world. Our service network spans global cities: Cairo, Damietta, Mansoura, Riyadh, Mecca, Guangzhou, Hong Kong, and Istanbul — serving you from the Far East to the Mediterranean.",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "logistics",
    title: "Business & Integrated Logistics",
    description: "Full door-to-door supply chain management, sea/air/land shipping, customs handling, product tracking & insurance.",
    iconName: "Truck"
  },
  {
    id: "packaging",
    title: "Design & Packaging Services",
    description: "Heritage-inspired visual identity designs, innovative packaging solutions, premium materials and techniques.",
    iconName: "Palette"
  },
  {
    id: "procurement",
    title: "Procurement Consulting & Project Resources",
    description: "Connecting clients with top suppliers for materials and products, tendering support for commercial scales.",
    iconName: "Handshake"
  },
  {
    id: "engineering",
    title: "Specialized Engineering & Technical Solutions",
    description: "Smart irrigation systems, auto parts & industrial materials supply, industrial efficiency consulting.",
    iconName: "Cpu"
  },
  {
    id: "financial",
    title: "Safe & Flexible Financial Solutions",
    description: "Acting as a secondary bank for managing purchases and international payments, with balanced payment scheduling.",
    iconName: "ShieldCheck"
  },
  {
    id: "licensing",
    title: "International Licensing",
    description: "Export licenses in China and Hong Kong, import cards in Egypt, One-Stop Consulting platform, facilitating market access.",
    iconName: "Globe"
  },
  {
    id: "urban-design",
    title: "Cultural Studies & Urban Design",
    description: "Heritage and contemporary city designs, innovative lighting solutions for public spaces, and cityscape design contributions.",
    iconName: "Compass"
  },
  {
    id: "product-dev",
    title: "Product Development & Simplification",
    description: "Analyzing and improving existing products for easier use, reducing maintenance complexity and extending product life.",
    iconName: "Zap"
  }
];

export const BOTTOM_CALLOUT_TEXT = "WE ARE NOT JUST AN EXPORTING COMPANY, NOT JUST CARGO HANDLING — WE ARE POWERING TRADE CONNECTIONS, BUILDING TRUST BRIDGES ACROSS THE GLOBE";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "Process 01",
    title: "Analyze and Partner",
    description: "Let us help build an image of your business scope and understand the challenges you face."
  },
  {
    step: "Process 02",
    title: "Innovate and Optimize",
    description: "We find multiple solutions and alternatives, racing against time to find the best choices for your upcoming decisions."
  },
  {
    step: "Process 03",
    title: "Deliver and Scale",
    description: "We start your order and keep you updated on all parameters for close follow-up of your investment."
  }
];

export const CURRENT_PROJECTS: ProjectItem[] = [
  { id: "p1", title: "Vitamins Gummy Candy", partnership: "Granty Food" },
  { id: "p2", title: "Capsule Blistering", partnership: "Eva Pharma" },
  { id: "p3", title: "Tunnel Fan", partnership: "Alarkan Alkhaliejie" },
  { id: "p4", title: "Mekkah Street Light" },
  { id: "p5", title: "Mekkah Urban Light Decoration" },
  { id: "p6", title: "Jeddah IoT SCADA Light Control" },
  { id: "p7", title: "Irrigation Systems for Sons Valley" },
  { id: "p8", title: "Geogrid for Public Project at Saudi" },
  { id: "p9", title: "Safety Special Products for Dabaa Roseatom" },
  { id: "p10", title: "Dehumidifier for Surgery Rooms" },
  { id: "p11", title: "Dental Labs Machinery" },
  { id: "p12", title: "Pet Block Board", partnership: "Almottahida Wood" }
];

export const UPCOMING_PROJECTS: ProjectItem[] = [
  { id: "u1", title: "Dabaa Nuclear Supply" },
  { id: "u2", title: "Al Qurayyat Park Scape Water Jet Project" },
  { id: "u3", title: "Damietta Port Twist Locking Systems" },
  { id: "u4", title: "Agricultural Machinery and Irrigation Systems" },
  { id: "u5", title: "Jeddah High Power LED Bay Light" },
  { id: "u6", title: "Riyadh Pole Light Decoration Project" },
  { id: "u7", title: "Electric Utility Vehicle Multi Use", partnership: "Industrial & Agriculture" },
  { id: "u8", title: "Police Academy Safety Wearable Products" },
  { id: "u9", title: "Dangerous Goods Transport from Dallas to Alexandria" },
  { id: "u10", title: "High Rise Building Safety Equipment" }
];

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: "s1",
    title: "Holy City Mecca Gate",
    location: "Mecca Gate Entrance, Saudi Arabia",
    description: "Designed, sourced, and supervised the installation of premium high-output LED wall washers at the iconic Mecca Gate entrance, creating a pristine nightscape that honors the holy city's cultural heritage.",
    imageUrl: "/mekka_gate.jpg"
  },
  {
    id: "s2",
    title: "Dawarik Square, Mecca City",
    location: "Mecca City Center",
    description: "Created comprehensive urban lighting decoration proposals for a major city square. Contributed structural blueprints and highly specialized illuminated fountain structures that operate with smart flow-control systems.",
    imageUrl: "/dawarik_square.jpg"
  },
  {
    id: "s3",
    title: "Gummy Vitamin Production",
    location: "Granty Food Facility",
    description: "Engineered and custom-manufactured a specialized desiccant dehumidifier system for vitamin gummy candy production lines. This solution ensured highly precise humidity and moisture boundaries critical for the delicate packaging phase.",
    imageUrl: "/gummy.jpg"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "t1",
    name: "Mohamed Youssef",
    role: "CEO of Focus Group",
    experience: "24 years of experience",
    contactUrl: "linkedin.com/in/focusautotrade",
    type: "linkedin",
    imageUrl: "/my.jpeg"
  },
  {
    id: "t2",
    name: "Ahmed Youssef",
    role: "Director of Focus Group",
    experience: "24 years of experience",
    contactUrl: "linkedin.com/in/focusmco",
    type: "linkedin",
    imageUrl: "/ay.jpeg"
  },
  {
    id: "t3",
    name: "Pancy Ho",
    role: "Export Manager",
    experience: "14 years of experience",
    contactUrl: "pancy@focusmco.com.hk",
    type: "email",
    imageUrl: "/ph.jpg"
  },
  {
    id: "t4",
    name: "Eissa",
    role: "Auto Parts Supply Chain Specialist",
    experience: "12 years of experience",
    contactUrl: "eissa@focusmco.com.hk",
    type: "email",
    imageUrl: "/eissa.jpg"
  },
  {
    id: "t5",
    name: "Abdelrahman",
    role: "Relations Manager",
    experience: "7 years of experience",
    contactUrl: "Rm@focusautotrade.com",
    type: "email",
    imageUrl: "/abdo.jpg"
  }
];

export const VALUES = [
  "Integrity",
  "Accountability",
  "Customer Commitment",
  "Innovation",
  "Teamwork",
  "Respect"
];

export const VALUES_QUOTE = {
  quote: "CHANCES LOVE READY",
  subtext: "Our company is ready to serve your difficult and complicated projects. We love challenges and thrive under pressure."
};

export const CONTACT_HEAD_OFFICE: ContactInfo = {
  phone: "+01020279999",
  email: "INFO@FOCUSMCO.COM",
  website: "WWW.FOCUSAUTOTRADE.COM",
  address: "EL Akhbar St., No. 1258 Square, Building No. 2, Apartment No. 4, Egypt"
};

export const CONTACT_CHINA_BRANCH: ContactInfo = {
  phone: "+8613533334309",
  email: "SALES@FOCUSMCO.COM.HK",
  address: "No. 906, Crowne Plaza, No. 399 Huanshi E Road, Guangzhou, China, 510098"
};
