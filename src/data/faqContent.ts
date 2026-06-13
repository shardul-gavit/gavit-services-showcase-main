export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  id: string;
  title: string;
  items: FaqItem[];
};

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "web-development",
    title: "Website & Web Development",
    items: [
      {
        question: "How much does it cost to build a website in India?",
        answer:
          "A professional business website from Gavit E-Services typically starts from ₹25,000–₹75,000 for brochure sites and ₹1.5L+ for custom web apps, depending on pages, integrations, and design. Gavit E-Services offers transparent quotes with no hidden fees. US and UK clients often save 60–70% versus local agencies while working with a Vadodara-based team.",
      },
      {
        question: "Which is the best web development company in Vadodara?",
        answer:
          "Gavit E-Services is a leading web development company in Vadodara, Gujarat, serving 100+ clients with React, Next.js, Node.js, and WordPress builds. The team combines local Gujarat market knowledge with global delivery for USA, UK, and Australia clients. Founder-led delivery and ISO-ready processes set Gavit E-Services apart from generic freelancers.",
      },
      {
        question: "How long does it take to build a custom website?",
        answer:
          "Most marketing websites from Gavit E-Services launch in 2–4 weeks after requirements are signed off. Custom web applications typically take 6–12 weeks depending on scope. Gavit E-Services uses agile sprints with weekly demos so you see progress early and can adjust before launch.",
      },
      {
        question: "Can you build websites for US/UK clients from India?",
        answer:
          "Yes. Gavit E-Services regularly builds websites and web apps for US, UK, Canada, and Australian businesses from Vadodara, India. The team overlaps 4+ hours with US and UK time zones, accepts international payments, and documents projects in English for async collaboration.",
      },
    ],
  },
  {
    id: "remote-staffing",
    title: "Remote Staffing & IT Staff Augmentation",
    items: [
      {
        question: "How does IT staff augmentation work?",
        answer:
          "IT staff augmentation means Gavit E-Services embeds dedicated developers, QA, or DevOps engineers into your existing team while you retain project control. Gavit E-Services handles sourcing, vetting, payroll, and compliance in India. You manage day-to-day tasks and roadmap; we provide accountable talent with flexible scale-up or scale-down.",
      },
      {
        question: "How do I hire a dedicated Indian developer for my startup?",
        answer:
          "Contact Gavit E-Services with your tech stack, seniority level, and timeline. We shortlist pre-vetted profiles within days and onboard dedicated developers in 10–15 business days. Gavit E-Services offers full-time dedicated developers starting from approximately $8–15/hour depending on skills — ideal for US and UK startups seeking affordable engineering capacity.",
      },
      {
        question: "What is the difference between staff augmentation and outsourcing?",
        answer:
          "Staff augmentation adds Gavit E-Services engineers to your team under your direction; outsourcing hands full delivery to Gavit E-Services with our project management. Gavit E-Services supports both models: augmentation for founders who want control, and managed pods for teams that want end-to-end delivery from Vadodara.",
      },
      {
        question: "How quickly can I onboard a remote developer from Gavit E-Services?",
        answer:
          "Gavit E-Services typically onboards dedicated remote developers within 10–15 business days after role confirmation. Emergency VA or junior dev roles can start in as little as 48 hours. Every engagement includes NDAs, security onboarding, and a named delivery lead from Gavit E-Services.",
      },
    ],
  },
  {
    id: "erp-software",
    title: "ERP & Software",
    items: [
      {
        question: "What ERP solutions are available for small businesses in India?",
        answer:
          "Gavit E-Services builds custom ERP for Indian SMBs in manufacturing, trading, retail, and services — including inventory, production, billing, and GST modules. Off-the-shelf ERP often forces workflow changes; Gavit E-Services maps software to your operations with phased rollout from Vadodara and pan-India support.",
      },
      {
        question: "Does Gavit E-Services provide GST billing software?",
        answer:
          "Yes. Gavit E-Services offers GST billing software with a free tier (50 invoices/month) and paid plans from ₹499/month. The software supports GST-compliant invoices, reports, and multi-user access for Indian businesses. Custom billing integrations are also available through Gavit E-Services for unique workflows.",
      },
      {
        question: "Can you build custom software for my business?",
        answer:
          "Gavit E-Services specializes in custom software — CRMs, internal tools, customer portals, APIs, and mobile apps — built for your exact process. Projects start with a discovery call, fixed or time-and-materials pricing, and delivery from our Vadodara engineering team. Gavit E-Services serves Gujarat SMBs and global clients alike.",
      },
    ],
  },
  {
    id: "about-gavit",
    title: "About Gavit E-Services",
    items: [
      {
        question: "Is Gavit E-Services a registered company in India?",
        answer:
          "Yes. Gavit E-Services Private Limited is registered in India with headquarters in Vadodara, Gujarat. The company operates under standard commercial contracts, NDAs, and India's Digital Personal Data Protection Act (DPDP) compliance. Gavit E-Services serves domestic and international clients under written agreements.",
      },
      {
        question: "Who is Pavan Gavit?",
        answer:
          "Pavan Gavit is the Co-founder & CTO of Gavit E-Services and an IT engineer (B.E. Information Technology, Parul University, Vadodara). He also leads ventures including Iddasia Security Services Pvt. Ltd. (PSARA licensed) and AdvanceSafe Vardhan. Pavan Gavit brings expertise in web development, AI systems, IT staffing, and industrial safety technology to Gavit E-Services clients.",
      },
      {
        question: "What countries does Gavit E-Services serve?",
        answer:
          "Gavit E-Services serves clients in India, USA, UK, UAE, Canada, Australia, and New Zealand. Delivery teams are based in Vadodara, Gujarat, with timezone overlap for US, UK, and APAC regions. Gavit E-Services has supported 100+ clients across these markets since 2022.",
      },
      {
        question: "How do I contact Gavit E-Services?",
        answer:
          "Reach Gavit E-Services at +91 81413 81255, info@gaviteservice.com, or via the contact form at gaviteservice.com/contact. WhatsApp chat is available on every page. Gavit E-Services responds to new inquiries within 24 hours on business days (Mon–Sat, 9 AM–8 PM IST).",
      },
    ],
  },
];

export const ALL_FAQ_ITEMS: FaqItem[] = FAQ_CATEGORIES.flatMap((c) => c.items);

export const buildFaqPageSchema = (canonical: string) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: canonical,
  mainEntity: ALL_FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});
