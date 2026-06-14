import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { GLOBAL_KEYWORDS } from "@/constants/seo";
import { BarChart3, Building2, Cog, Layers } from "lucide-react";

const ErpDevelopment = () => (
  <Layout>
    <Seo
      title="ERP Development Company in India | Custom ERP Solutions — Gavit E-Services"
      description="Affordable, scalable ERP systems built for manufacturing, retail, healthcare & more. Custom ERP development from Vadodara, India."
      canonical="https://gaviteservice.com/erp-development"
      keywords={[...GLOBAL_KEYWORDS.slice(0, 12), "ERP development company India"]}
    />
    <ServicePageLayout
      badge="ERP Development"
      h1="Custom ERP Development for Your Industry"
      description="Affordable, scalable ERP systems built for manufacturing, retail, healthcare & more. India's ERP market is doubling — from $1.8B to $3.6B by 2033. Replace Excel and outdated systems with software built for your workflow."
      highlights={[
        {
          title: "Industry-specific modules",
          detail: "Manufacturing, retail, trading, and services workflows mapped to your operations.",
        },
        {
          title: "Cloud ERP development",
          detail: "Secure, scalable deployments on AWS, Azure, or on-premise as you prefer.",
        },
        {
          title: "Affordable for SMBs",
          detail: "Enterprise-grade ERP without enterprise pricing — built for Indian and global SMBs.",
        },
      ]}
      capabilitiesTitle="Features"
      capabilitiesSubtitle="Everything your business needs in one system"
      capabilities={[
        { icon: Layers, title: "Inventory & SCM", detail: "Stock, procurement, and supply chain in real time." },
        { icon: BarChart3, title: "Finance & Reporting", detail: "GST-ready invoicing, ledgers, and dashboards." },
        { icon: Building2, title: "Multi-location", detail: "Branches, warehouses, and franchises unified." },
        { icon: Cog, title: "Integrations", detail: "Connect Tally, payment gateways, and third-party APIs." },
      ]}
      industries={["Manufacturing", "Retail", "Healthcare", "Trading", "Logistics", "E-Commerce"]}
      process={[
        "Discovery workshops to map your current Excel and legacy workflows.",
        "Module design with role-based access and compliance requirements.",
        "Agile build with weekly demos and UAT cycles.",
        "Training, migration, and ongoing support from Vadodara HQ.",
      ]}
      faqs={[
        {
          q: "How long does custom ERP development take?",
          a: "Typical SMB ERP projects launch in 8–16 weeks depending on modules and integrations.",
        },
        {
          q: "Can you migrate data from Excel or Tally?",
          a: "Yes. We handle data migration, validation, and parallel-run periods.",
        },
        {
          q: "Do you serve businesses outside India?",
          a: "We build ERP for US, UK, Canada, UAE, and Australian clients with local compliance needs.",
        },
        {
          q: "What does affordable ERP cost?",
          a: "Projects start based on scope — contact us for a fixed-price or phased roadmap.",
        },
      ]}
      ctaTitle="Ready to replace Excel with a custom ERP?"
      ctaDescription="Book a free consultation and get a module roadmap tailored to your industry."
    />
  </Layout>
);

export default ErpDevelopment;
