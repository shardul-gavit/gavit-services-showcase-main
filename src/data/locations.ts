export type LocationData = {
  slug: string;
  title: string;
  description: string;
  canonical: string;
  keywords: string[];
  badge: string;
  h1: string;
  hook: string;
  pain: string;
  benefits: string[];
  services: string[];
  timezone?: string;
};

export const locations: Record<string, LocationData> = {
  usa: {
    slug: "usa",
    title: "VA & Software Development Services for USA Businesses | Gavit E-Services",
    description:
      "Save 40–60% vs US developer rates. India-based VA, custom software, ERP & AI teams with timezone overlap for US businesses.",
    canonical: "https://gaviteservice.com/locations/usa",
    keywords: ["virtual assistant USA", "offshore software development India USA", "hire developers India"],
    badge: "United States",
    h1: "Affordable VA & Tech Services for US Businesses",
    hook: "Save 40–60% vs US developer rates. India's timezone overlap covers 4+ US business hours.",
    pain: "Custom software developers in the US cost $150–200/hr. Gavit E-Services delivers the same quality starting at $25–40/hr.",
    benefits: [
      "Dedicated VA and dev teams onboarded in 48 hours",
      "Async workflows with 4+ hours daily overlap",
      "Custom software, ERP, and AI built for US SMBs",
    ],
    services: ["Virtual Assistant", "Custom Software", "ERP Development", "AI Software", "Web Apps"],
    timezone: "IST overlaps US Eastern morning and US Pacific late evening",
  },
  uk: {
    slug: "uk",
    title: "VA & Software Development Services for UK Businesses | Gavit E-Services",
    description:
      "GDPR-aware development team from Vadodara, India. VA, ERP, and custom software for UK companies.",
    canonical: "https://gaviteservice.com/locations/uk",
    keywords: ["IT outsourcing UK India", "virtual assistant UK", "software development UK India"],
    badge: "United Kingdom",
    h1: "India-Based Tech & VA Partner for UK Companies",
    hook: "GDPR-aware development team. India-UK IT partnerships growing year on year.",
    pain: "Legacy ERP modernization and compliance software are costly to build in-house in the UK.",
    benefits: [
      "IST overlaps 4.5 hours with UK morning",
      "ERP and billing software for regulated industries",
      "Dedicated pods with English-first communication",
    ],
    services: ["ERP Development", "Custom Software", "Virtual Assistant", "IT Consultancy"],
    timezone: "4.5 hours overlap with UK business hours",
  },
  canada: {
    slug: "canada",
    title: "VA & Software Development for Canadian Businesses | Gavit E-Services",
    description:
      "Toronto and Vancouver startups offshore to India for affordable custom software, VA, and ERP teams.",
    canonical: "https://gaviteservice.com/locations/canada",
    keywords: ["IT outsourcing Canada India", "virtual assistant Canada", "custom software Canada"],
    badge: "Canada",
    h1: "Outsource VA & Dev Work to India — Trusted by Canadian SMBs",
    hook: "Toronto and Vancouver startups increasingly offshore to India post-COVID.",
    pain: "Growing Canadian SMBs need affordable custom software without sacrificing quality.",
    benefits: [
      "Scale dev and VA teams without Canadian payroll overhead",
      "Custom ERP and web apps for logistics and retail",
      "48-hour onboarding for urgent projects",
    ],
    services: ["Custom Software", "Virtual Assistant", "Web App Development", "AI Software"],
  },
  "new-zealand": {
    slug: "new-zealand",
    title: "Virtual Assistant & Software Development New Zealand | Gavit E-Services",
    description:
      "NZ businesses get India-based VA and software teams at a fraction of US/AU agency rates.",
    canonical: "https://gaviteservice.com/locations/new-zealand",
    keywords: ["virtual assistant New Zealand", "software development NZ India", "outsource IT NZ"],
    badge: "New Zealand",
    h1: "NZ Businesses: Your India-Based Tech & VA Team Awaits",
    hook: "NZ businesses can't afford US/AU agency rates. India gives you the same quality for a fraction.",
    pain: "Underserved market with few India-based partners — Gavit fills the gap.",
    benefits: [
      "Async-first delivery for NZ timezone",
      "GST billing for India ops + custom software for NZ",
      "Dedicated account manager in English",
    ],
    services: ["Virtual Assistant", "Custom Software", "ERP Development", "IT Consultancy"],
  },
  australia: {
    slug: "australia",
    title: "VA & Software Development for Australian Businesses | Gavit E-Services",
    description:
      "Australian businesses trust India-based VA, ERP, and software teams with async workflows.",
    canonical: "https://gaviteservice.com/locations/australia",
    keywords: ["virtual assistant Australia", "IT outsourcing Australia India", "ERP Australia"],
    badge: "Australia",
    h1: "Australian Businesses Love Our India-Based Teams",
    hook: "Australia's longest-running IT outsourcing partner. India-AU timezone gap solved with async workflows.",
    pain: "ERP for retail, logistics, and manufacturing is expensive to build locally.",
    benefits: [
      "Retail and manufacturing ERP expertise",
      "VA teams for admin, support, and operations",
      "Proven async handoff processes",
    ],
    services: ["ERP Development", "Virtual Assistant", "Custom Software", "Web Apps"],
  },
  vadodara: {
    slug: "vadodara",
    title: "Software Development & IT Company in Vadodara | Gavit E-Services",
    description:
      "Vadodara's complete IT, VA, ERP, AI & GST billing company. Local HQ with global delivery.",
    canonical: "https://gaviteservice.com/locations/vadodara",
    keywords: [
      "software development company Vadodara",
      "IT company Vadodara",
      "GST billing software Vadodara",
    ],
    badge: "Vadodara, Gujarat",
    h1: "Vadodara's Most Complete IT & VA Services Company",
    hook: "HQ in Vadodara with teams serving India and 5+ countries worldwide.",
    pain: "Local businesses need compliant GST billing and custom software without metro pricing.",
    benefits: [
      "On-site and hybrid engagement options",
      "GST billing software built for Indian SMBs",
      "ERP, AI, and staffing under one roof",
    ],
    services: [
      "GST Billing Software",
      "ERP Development",
      "Custom Software",
      "Virtual Assistant",
      "IT Consultancy",
    ],
  },
};
