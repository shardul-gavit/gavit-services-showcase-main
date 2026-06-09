export type BlogPost = {
  title: string;
  summary: string;
  tags: string[];
  category: string;
  readTime: string;
};

export const blogCategories = [
  {
    id: "india",
    label: "India — High Demand",
    description: "GST billing, ERP, custom software, and manufacturing insights for Indian SMBs.",
  },
  {
    id: "global",
    label: "Global VA & Software",
    description: "Outsourcing, virtual assistants, AI, and custom software for international businesses.",
  },
  {
    id: "country",
    label: "Country Guides",
    description: "Location-specific guides for USA, UK, Canada, NZ, UAE, and Australia.",
  },
  {
    id: "insights",
    label: "IT & Staffing Insights",
    description: "Practical playbooks for IT services, remote staffing, and digital transformation.",
  },
];

export const blogPosts: BlogPost[] = [
  // Tier 1 — India
  {
    title: "GST Billing Software vs Tally: Complete Comparison for Indian SMBs 2025",
    summary:
      "Compare features, pricing, compliance, and customization — when to use Tally vs affordable GST billing software built for growing Indian businesses.",
    tags: ["GST billing software India", "Tally alternative", "Indian SMB"],
    category: "india",
    readTime: "8 min read",
  },
  {
    title: "Top 5 Signs Your Business Needs Custom ERP Software",
    summary:
      "Still running on Excel? Here are five clear signals that manufacturing, retail, and trading businesses should invest in custom ERP development.",
    tags: ["custom ERP India", "ERP for small business", "manufacturing ERP"],
    category: "india",
    readTime: "6 min read",
  },
  {
    title: "How Much Does Custom Software Development Cost in India? (2025 Guide)",
    summary:
      "A transparent breakdown of project-based, hourly, and dedicated-team pricing for custom software in Vadodara and across India.",
    tags: ["custom software cost India", "software development pricing", "hire developers India"],
    category: "india",
    readTime: "10 min read",
  },
  {
    title: "Website vs Web Application: What Does Your Business Actually Need?",
    summary:
      "Brochure sites are dying. Learn when your business needs a web application — portals, SaaS, PWAs — instead of a static website.",
    tags: ["web app development India", "website vs web app", "progressive web app"],
    category: "india",
    readTime: "7 min read",
  },
  {
    title: "Why Indian Manufacturers Are Switching from Excel to Custom ERP",
    summary:
      "India's ERP market is doubling by 2033. See why factories and job-work units are replacing spreadsheets with industry-specific ERP systems.",
    tags: ["ERP development India", "manufacturing software", "Excel to ERP"],
    category: "india",
    readTime: "6 min read",
  },
  // Tier 2 — Global
  {
    title: "How US Small Businesses Save 40% by Hiring Virtual Assistants from India",
    summary:
      "US businesses pay $150–200/hr locally. India-based VAs deliver the same quality at $8–15/hr — here's how to start with timezone overlap.",
    tags: ["virtual assistant USA", "hire VA India", "remote staffing savings"],
    category: "global",
    readTime: "7 min read",
  },
  {
    title: "Custom Software vs Off-the-Shelf: Which Is Right for Your Business?",
    summary:
      "Off-the-shelf tools don't fit every workflow. Compare cost, flexibility, and time-to-value for bespoke vs generic software solutions.",
    tags: ["custom software development", "bespoke software India", "off-the-shelf vs custom"],
    category: "global",
    readTime: "8 min read",
  },
  {
    title: "Top 7 Tasks to Outsource to an Indian VA in 2025",
    summary:
      "Admin, customer support, data entry, scheduling, social media, bookkeeping prep, and lead research — the highest-ROI tasks to delegate first.",
    tags: ["virtual assistant tasks", "outsource to India", "VA services"],
    category: "global",
    readTime: "5 min read",
  },
  {
    title: "How to Hire a Software Development Team in India (Step-by-Step)",
    summary:
      "From discovery to onboarding in 48 hours — a practical guide for founders hiring remote dev teams from Vadodara and across India.",
    tags: ["hire developers India", "offshore development", "software team India"],
    category: "global",
    readTime: "9 min read",
  },
  {
    title: "AI Software for Small Business: What's Actually Possible in 2025",
    summary:
      "92% of companies want AI in outsourcing contracts. Explore realistic AI use cases: chatbots, document AI, automation, and LLM integrations for SMBs.",
    tags: ["AI software development", "AI for small business", "LLM integration India"],
    category: "global",
    readTime: "8 min read",
  },
  // Tier 3 — Country-specific
  {
    title: "Why New Zealand Businesses Are Outsourcing to India in 2025",
    summary:
      "NZ companies can't afford US/AU agency rates. India delivers the same quality for a fraction — an underserved market with low competition.",
    tags: ["outsourcing New Zealand", "virtual assistant NZ", "India NZ partnership"],
    category: "country",
    readTime: "6 min read",
  },
  {
    title: "IT Outsourcing for Canadian Startups: Complete Guide",
    summary:
      "Toronto and Vancouver startups increasingly offshore to India post-COVID. A guide to affordable custom software and VA teams for Canadian SMBs.",
    tags: ["IT outsourcing Canada", "software development Canada India", "Canadian startups"],
    category: "country",
    readTime: "8 min read",
  },
  {
    title: "Building Custom Software for UAE Businesses: VAT, Arabic & More",
    summary:
      "VAT-compliant billing, Arabic UI, and ERP for construction, trading, and logistics — what UAE businesses need from an India-based dev partner.",
    tags: ["UAE software development", "VAT billing UAE", "ERP UAE"],
    category: "country",
    readTime: "7 min read",
  },
  {
    title: "UK Companies Guide to Outsourcing Software Development to India",
    summary:
      "GDPR-aware development, legacy ERP modernization, and 4.5 hours of timezone overlap — why UK–India IT partnerships keep growing.",
    tags: ["UK outsourcing India", "software development UK", "GDPR development"],
    category: "country",
    readTime: "8 min read",
  },
  // Existing insights
  {
    title: "IT services company in Vadodara: 2025 playbook",
    summary:
      "How SMEs can blend IT solutions and consulting, IT support and maintenance, and HR outsourcing without over-hiring.",
    tags: ["IT solutions and consulting", "digital transformation services"],
    category: "insights",
    readTime: "6 min read",
  },
  {
    title: "Remote staffing vs in-house hiring for Gujarat startups",
    summary:
      "A detailed comparison covering cost-effective IT outsourcing in India, advantages of remote IT teams, and how to hire remote IT talent responsibly.",
    tags: ["remote staffing services", "dedicated developers for hire"],
    category: "insights",
    readTime: "7 min read",
  },
  {
    title: "Website and app development checklist for SMEs",
    summary:
      "A 10-step guide to app development for SMEs in Vadodara, covering UI/UX design services, microservices architecture, and AI-friendly metadata.",
    tags: ["website and app development", "app modernization"],
    category: "insights",
    readTime: "6 min read",
  },
];
