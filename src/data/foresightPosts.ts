import shardulAvatar from "@/assets/shardul-gavit.jpeg";
import pavanAvatar from "@/assets/pavan-gavit.jpeg";

export type ForesightCategory =
  | "tech-foresight"
  | "ai-insights"
  | "software-trends"
  | "india-tech"
  | "ceo-desk";

export type ForesightAuthor = {
  name: string;
  role: string;
  avatar: string;
  linkedin?: string;
  bio?: string;
};

export type ForesightPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: ForesightAuthor;
  category: ForesightCategory;
  categoryLabel: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  featured: boolean;
  featuredImage: string;
  content: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    ogImage: string;
    canonicalUrl: string;
  };
};

export const POSTS_PER_PAGE = 6;

export const FORESIGHT_CATEGORIES: {
  id: ForesightCategory | "all";
  label: string;
  description: string;
}[] = [
  { id: "all", label: "All", description: "Every Gavite Foresight article" },
  {
    id: "tech-foresight",
    label: "Tech Foresight",
    description: "Predictions and analysis on where technology is heading in the next 3–5 years.",
  },
  {
    id: "ai-insights",
    label: "AI Insights",
    description: "Deep dives into AI trends, tools, and what they mean for businesses in India and globally.",
  },
  {
    id: "software-trends",
    label: "Software Trends",
    description: "How software is evolving and why businesses need to adapt their tech stack now.",
  },
  {
    id: "india-tech",
    label: "India Tech",
    description: "Technology insights specifically for Indian SMBs, manufacturers, and entrepreneurs.",
  },
  {
    id: "ceo-desk",
    label: "CEO's Desk",
    description: "Personal thoughts from Gavit E-Services CEO on building a future-forward company.",
  },
];

export const SITE_URL = "https://www.gaviteservice.com";

export const shardulAuthor: ForesightAuthor = {
  name: "Shardul Gavit",
  role: "CEO, Gavit E-Services",
  avatar: shardulAvatar,
  linkedin: "https://www.linkedin.com/in/shardul-gavit-3b63091b8/",
  bio: "Shardul leads Gavit E-Services with a focus on building technology that's 5 years ahead of the market. He writes about AI, software trends, and the future of business technology.",
};

export const pavanAuthor: ForesightAuthor = {
  name: "Pavan Gavit",
  role: "Co-founder & CTO, Gavit E-Services",
  avatar: pavanAvatar,
  linkedin: "https://www.linkedin.com/in/pavan-gavit-1a8b94226/",
  bio: "Pavan drives product engineering, AI integrations, and delivery squads from Vadodara, India.",
};

const img = {
  llm: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&h=630&q=80",
  software: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630&q=80",
  world: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&h=630&q=80",
  aiBiz: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&h=630&q=80",
  erp: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=80",
  ceo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&h=630&q=80",
  blogOg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&h=630&q=80",
};

const rawForesightPosts: Omit<ForesightPost, "updatedAt" | "seo"> & { seo: Omit<ForesightPost["seo"], "canonicalUrl"> }[] = [
  {
    id: "001",
    slug: "why-llms-are-becoming-outdated",
    title: "Why LLMs Are Becoming Outdated — And What's Replacing Them",
    excerpt:
      "Large Language Models changed the world. But the next wave of AI — World Models and Agentic AI — will make today's LLMs look like calculators. Here's what's coming.",
    author: shardulAuthor,
    category: "tech-foresight",
    categoryLabel: "Tech Foresight",
    tags: ["AI", "LLMs", "World Models", "Future of Tech", "Agentic AI"],
    publishedAt: "2026-06-10",
    readTime: "6 min read",
    featured: true,
    featuredImage: img.llm,
    seo: {
      metaTitle: "Why LLMs Are Becoming Outdated | Gavit E-Services Foresight",
      metaDescription:
        "LLMs like ChatGPT are just the beginning. World Models and Agentic AI are coming. Find out what's next and how Indian businesses should prepare.",
      ogImage: img.llm,
    },
    content: `
      <p>When ChatGPT launched, it felt like the final form of AI. Text in, intelligence out. But if you study how technology cycles work — from mainframes to cloud to mobile — you'll notice a pattern: the first breakthrough is never the last.</p>
      <h2>LLMs hit a ceiling</h2>
      <p>Large Language Models are brilliant at language. They are weaker at <strong>planning</strong>, <strong>memory</strong>, <strong>tool use at scale</strong>, and <strong>understanding physical or visual worlds</strong>. Businesses that bolt a chatbot onto a website are discovering diminishing returns.</p>
      <blockquote>92% of companies now want AI clauses in outsourcing contracts — but generic LLM chatbots alone won't satisfy that demand.</blockquote>
      <h2>What's replacing them: World Models</h2>
      <p>World Models simulate environments — supply chains, factories, customer journeys — and let AI <em>act</em> inside them. Instead of guessing the next word, the system predicts consequences of actions. For ERP, logistics, and operations-heavy Indian SMBs, this is transformative.</p>
      <h2>Agentic AI: software that does work</h2>
      <p>Agentic systems chain tools, APIs, and human approvals into workflows. Think: invoice processing, lead qualification, inventory reorders — not just answers in a chat window.</p>
      <h3>What Indian businesses should do now</h3>
      <ul>
        <li>Audit workflows that are still manual despite having an LLM chatbot</li>
        <li>Invest in custom AI software embedded in ERP or billing — not standalone bots</li>
        <li>Partner with teams that build for 2031, not 2026 feature checklists</li>
      </ul>
      <p>At Gavit E-Services, we're building AI software and ERP systems with this next wave in mind — from Vadodara for clients in India, USA, UK, and beyond.</p>
    `,
  },
  {
    id: "002",
    slug: "death-of-the-website-rise-of-custom-software",
    title: "The Death of the Website: Why Every Business Will Run on Custom Software by 2028",
    excerpt:
      "Static brochure sites are dying. Businesses that win will run on web applications, custom ERP, and AI-embedded operations — not WordPress pages.",
    author: pavanAuthor,
    category: "software-trends",
    categoryLabel: "Software Trends",
    tags: ["Custom Software", "Web Apps", "Digital Transformation"],
    publishedAt: "2026-06-10",
    readTime: "7 min read",
    featured: false,
    featuredImage: img.software,
    seo: {
      metaTitle: "The Death of the Website | Custom Software by 2028 — Gavit Foresight",
      metaDescription:
        "Why brochure websites are outdated and every growing business will need custom web applications, ERP, and AI-embedded software by 2028.",
      ogImage: img.software,
    },
    content: `
      <p>We don't build brochure websites anymore — and neither should you. The global software outsourcing market is past $662B because businesses need <strong>applications</strong>, not pages.</p>
      <h2>Websites were built for an information era</h2>
      <p>A five-page site made sense when your goal was visibility. Today your goal is operations: billing, inventory, customer portals, partner dashboards, mobile field apps.</p>
      <h2>Web applications are the new default</h2>
      <p>Progressive web apps, SaaS portals, and custom internal tools deliver ROI that marketing sites never could. Indian manufacturers replacing Excel with custom ERP are the clearest example.</p>
      <h3>Signs you need software, not a site refresh</h3>
      <ul>
        <li>Staff export data from your website into Excel daily</li>
        <li>Customers call instead of self-serving online</li>
        <li>You pay for 5+ SaaS tools that don't talk to each other</li>
        <li>Compliance (GST, VAT) requires custom logic generic tools can't handle</li>
      </ul>
      <p>By 2028, the competitive line won't be "do you have a website?" — it will be "does your software run your business?"</p>
    `,
  },
  {
    id: "003",
    slug: "world-models-ai-india-businesses",
    title: "World Models: The AI Revolution Nobody in India Is Talking About",
    excerpt:
      "While everyone debates ChatGPT, World Models are quietly enabling AI that understands your factory, warehouse, and customer journey — before acting.",
    author: pavanAuthor,
    category: "ai-insights",
    categoryLabel: "AI Insights",
    tags: ["World Models", "AI", "India Tech", "Future"],
    publishedAt: "2026-06-10",
    readTime: "6 min read",
    featured: false,
    featuredImage: img.world,
    seo: {
      metaTitle: "World Models AI for India Businesses | Gavit Foresight",
      metaDescription:
        "World Models are the next AI wave after LLMs. How Indian manufacturers, retailers, and SMBs can prepare for simulation-based intelligent software.",
      ogImage: img.world,
    },
    content: `
      <p>India's AI market is racing toward $45B by 2031. Most headlines still focus on chatbots. World Models are the under-reported shift that will matter for operations-heavy businesses.</p>
      <h2>What is a World Model?</h2>
      <p>A World Model builds an internal simulation of your business environment — machines, stock levels, delivery routes — and tests decisions before executing them in the real world.</p>
      <h2>Why India is positioned to adopt fast</h2>
      <p>Manufacturing, trading, and logistics dominate Gujarat and pan-India SMBs. These sectors generate structured operational data — ideal fuel for World Model applications layered on custom ERP.</p>
      <h3>Practical use cases in 2026</h3>
      <ul>
        <li>Inventory optimisation before peak season</li>
        <li>Production scheduling with machine downtime prediction</li>
        <li>Dynamic pricing simulations for retail chains</li>
      </ul>
      <p>The winners won't be companies with the flashiest chatbot. They'll be the ones whose software <em>understands</em> their world.</p>
    `,
  },
  {
    id: "004",
    slug: "why-your-business-needs-ai-software-now",
    title: "Why Your Business Needs AI Software Now — Before Your Competitor Gets It First",
    excerpt:
      "40–50% of outsourcing deals in 2025 include AI automation requirements. Waiting another year means playing catch-up on cost, speed, and customer experience.",
    author: shardulAuthor,
    category: "ai-insights",
    categoryLabel: "AI Insights",
    tags: ["AI Software", "Business", "Competitive Advantage"],
    publishedAt: "2026-06-10",
    readTime: "5 min read",
    featured: false,
    featuredImage: img.aiBiz,
    seo: {
      metaTitle: "Why Your Business Needs AI Software Now | Gavit Foresight",
      metaDescription:
        "92% of companies want AI in vendor contracts. Why SMBs in India and globally should embed AI in custom software now — not later.",
      ogImage: img.aiBiz,
    },
    content: `
      <p>AI isn't a slide in your pitch deck anymore. It's a procurement requirement. If your competitor ships AI-assisted support, forecasting, or document processing first, they compound advantages monthly.</p>
      <h2>Off-the-shelf AI isn't enough</h2>
      <p>Generic tools don't know your GST rules, approval chains, or customer segments. AI software must be <strong>embedded</strong> in your billing, ERP, or CRM workflows.</p>
      <h2>Where to start (high ROI, low risk)</h2>
      <ul>
        <li>Document AI for invoices and purchase orders</li>
        <li>Support triage with human handoff</li>
        <li>Sales lead scoring from CRM history</li>
        <li>Internal copilots trained on your SOPs — not the public internet</li>
      </ul>
      <p>We help clients in Vadodara and worldwide ship phased AI roadmaps in weeks, not years — starting with one workflow, then expanding.</p>
    `,
  },
  {
    id: "005",
    slug: "erp-vs-custom-software-india-sme",
    title: "ERP vs Custom Software: What Does Your Indian SME Actually Need in 2026?",
    excerpt:
      "India's ERP market is doubling by 2033. But not every business needs a full ERP on day one. Here's how to choose between ERP, custom apps, and hybrid approaches.",
    author: pavanAuthor,
    category: "india-tech",
    categoryLabel: "India Tech",
    tags: ["ERP", "Custom Software", "India", "SME"],
    publishedAt: "2026-06-10",
    readTime: "8 min read",
    featured: false,
    featuredImage: img.erp,
    seo: {
      metaTitle: "ERP vs Custom Software for Indian SMEs 2026 | Gavit Foresight",
      metaDescription:
        "Affordable ERP vs bespoke software for Indian SMBs. A practical 2026 decision framework for manufacturing, retail, and services.",
      ogImage: img.erp,
    },
    content: `
      <p>Every Indian SMB founder hears the same advice: "Get on ERP." But Tally, Zoho, and custom builds each solve different problems. Choosing wrong costs lakhs and months.</p>
      <h2>Choose ERP when...</h2>
      <ul>
        <li>Multiple departments share inventory, finance, and HR data</li>
        <li>GST compliance and audit trails are non-negotiable</li>
        <li>You have 20+ users needing role-based access</li>
      </ul>
      <h2>Choose custom software when...</h2>
      <ul>
        <li>Your workflow is unique (job-work manufacturing, niche services)</li>
        <li>Generic ERP modules stay unused while Excel persists</li>
        <li>You need mobile-first or customer-facing portals alongside ops</li>
      </ul>
      <h2>The hybrid path (what we recommend most)</h2>
      <p>Start with GST billing + one operational module. Expand into full ERP as processes stabilise. India's ERP market growth rewards phased adoption — not big-bang installs.</p>
      <p>Gavit builds affordable ERP and custom software from Vadodara for manufacturers, retailers, and traders across Gujarat and India.</p>
    `,
  },
  {
    id: "006",
    slug: "ceo-desk-building-5-years-ahead",
    title: "Why We Build for 2031, Not 2026",
    excerpt:
      "Most IT vendors sell what's popular today. At Gavit E-Services, we ask: what will your business need five years from now — and how do we start building it now?",
    author: shardulAuthor,
    category: "ceo-desk",
    categoryLabel: "CEO's Desk",
    tags: ["Vision", "Leadership", "AI", "Future of Tech"],
    publishedAt: "2026-06-10",
    readTime: "5 min read",
    featured: false,
    featuredImage: img.ceo,
    seo: {
      metaTitle: "Why We Build for 2031, Not 2026 | CEO's Desk — Gavit Foresight",
      metaDescription:
        "Shardul Gavit on Gavit E-Services' vision: building VA, ERP, AI & software solutions 5 years ahead for India and global SMBs.",
      ogImage: img.ceo,
    },
    content: `
      <p>When we founded Gavit E-Services in 2020, we could have been another staffing agency with a website. We chose a harder path: become the partner that helps businesses adopt technology <em>before</em> their market forces them to.</p>
      <h2>Five years ahead means saying no</h2>
      <p>We don't sell brochure websites, manual data entry, or saturated LLM chatbot projects. We say yes to custom software, ERP, AI embeddings, GST billing, and VA teams that scale operations.</p>
      <h2>India-first, globally capable</h2>
      <p>Our HQ in Vadodara gives us cost discipline and engineering talent. Our clients in the USA, UK, Canada, NZ, and Australia get timezone-aware delivery and enterprise-grade governance.</p>
      <h2>What 2031 looks like for our clients</h2>
      <ul>
        <li>Software runs operations — humans oversee strategy</li>
        <li>AI agents handle repetitive decisions with audit trails</li>
        <li>ERP and billing are unified, GST/VAT-compliant, and mobile-native</li>
      </ul>
      <p>That's the future we're building toward — one sprint at a time. If that resonates, we'd love to talk.</p>
    `,
  },
];

export const foresightPosts: ForesightPost[] = rawForesightPosts.map((post) => ({
  ...post,
  updatedAt: "2026-06-10",
  seo: {
    ...post.seo,
    canonicalUrl: `${SITE_URL}/blog/${post.slug}`,
  },
}));

export const BLOG_OG_IMAGE = img.blogOg;

export const getPostBySlug = (slug: string) => foresightPosts.find((p) => p.slug === slug);

export const getPostsByCategory = (category: ForesightCategory) =>
  foresightPosts.filter((p) => p.category === category);

export const getFeaturedPost = () => foresightPosts.find((p) => p.featured) ?? foresightPosts[0];

export const getRelatedPosts = (post: ForesightPost, limit = 3) =>
  foresightPosts.filter((p) => p.slug !== post.slug && (p.category === post.category || p.tags.some((t) => post.tags.includes(t)))).slice(0, limit);

export const getCategoryMeta = (category: ForesightCategory) =>
  FORESIGHT_CATEGORIES.find((c) => c.id === category);

export const getPostsByTag = (tag: string) =>
  foresightPosts.filter((p) => p.tags.some((t) => t.toLowerCase() === tag.toLowerCase()));

export const getLatestPosts = (limit = 3) =>
  foresightPosts.toSorted((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, limit);
