import { SITE_URL } from "@/constants/seo";

type AliasSeo = {
  title: string;
  description: string;
  canonical: string;
  keywords?: string[];
};

const SITE = SITE_URL;

export const ALIAS_ROUTE_SEO = {
  virtualAssistant: {
    title: "Virtual Assistant Services India | Gavit E-Services",
    description:
      "Affordable virtual assistant services from India for USA, UK, Canada & Australia. Admin, research, customer support & back-office — onboarded in 48 hours.",
    canonical: `${SITE}/virtual-assistant`,
    keywords: [
      "virtual assistant services India",
      "hire virtual assistant India",
      "offshore VA services",
      "remote admin support India",
    ],
  },
  customSoftware: {
    title: "Custom Software Development Vadodara | Gavit E-Services",
    description:
      "Custom software development for SMEs and enterprises in Vadodara, Gujarat. Web apps, APIs, integrations & modernization — built for your workflow.",
    canonical: `${SITE}/custom-software`,
    keywords: [
      "custom software development Vadodara",
      "custom software development India",
      "bespoke software Gujarat",
      "software development company Vadodara",
    ],
  },
  itConsultancy: {
    title: "IT Consultancy Vadodara | Gavit E-Services",
    description:
      "IT consultancy and virtual CIO services for Gujarat SMEs. Architecture reviews, cloud strategy, digital transformation & managed IT support.",
    canonical: `${SITE}/it-consultancy`,
    keywords: [
      "IT consultancy Vadodara",
      "IT consulting Gujarat",
      "virtual CIO India",
      "IT solutions consulting India",
    ],
  },
  webAppDevelopment: {
    title: "Web App Development India | Gavit E-Services",
    description:
      "Custom web application development for startups and enterprises. React, Node.js, cloud-native builds & API integrations from Vadodara, India.",
    canonical: `${SITE}/web-app-development`,
    keywords: [
      "web app development India",
      "custom web application development",
      "web application development Vadodara",
      "hire web developers India",
    ],
  },
} satisfies Record<string, AliasSeo>;
