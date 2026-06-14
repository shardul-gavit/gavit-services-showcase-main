import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { GLOBAL_KEYWORDS } from "@/constants/seo";
import { Calculator, CreditCard, Factory, Store } from "lucide-react";

const CustomBillingSoftware = () => (
  <Layout>
    <Seo
      title="Custom Billing Software Development India | Gavit E-Services"
      description="Custom billing solutions for retail, services, manufacturing & more. Built exactly for your business workflow from Vadodara, India."
      canonical="https://gaviteservice.com/custom-billing-software"
      keywords={[...GLOBAL_KEYWORDS.slice(30, 36), "billing software for manufacturing India"]}
    />
    <ServicePageLayout
      badge="Custom Billing"
      h1="Billing Software Built Exactly for Your Business"
      description="Custom billing solutions for any industry — retail, services, manufacturing & more. Off-the-shelf billing apps rarely match how you actually invoice and collect."
      highlights={[
        {
          title: "Workflow-fit design",
          detail: "Billing flows mapped to how your team actually works — not generic templates.",
        },
        {
          title: "Multi-currency & tax rules",
          detail: "GST, VAT, or custom tax logic for India and international clients.",
        },
        {
          title: "System integrations",
          detail: "Connect ERP, CRM, payment gateways, and accounting tools.",
        },
      ]}
      capabilitiesTitle="Features"
      capabilitiesSubtitle="Billing tailored to your operations"
      capabilities={[
        { icon: Store, title: "Retail billing", detail: "POS, barcode, and loyalty integrations." },
        { icon: Factory, title: "Manufacturing", detail: "Job-work, batch, and material billing." },
        { icon: CreditCard, title: "Subscriptions", detail: "Recurring billing and auto-debit." },
        { icon: Calculator, title: "Custom logic", detail: "Complex pricing, discounts, and approvals." },
      ]}
      industries={["Retail", "Manufacturing", "Services", "Healthcare", "Logistics", "E-Commerce"]}
      process={[
        "Audit your current billing pain points and compliance needs.",
        "Design invoices, approvals, and payment flows.",
        "Build and integrate with your existing stack.",
        "Train staff and provide ongoing enhancements.",
      ]}
      faqs={[
        {
          q: "How is this different from GST billing software?",
          a: "GST billing is for standard Indian tax invoicing. Custom billing handles unique workflows, industries, and integrations.",
        },
        {
          q: "Can you build for UAE VAT compliance?",
          a: "Yes — we build VAT-compliant billing for UAE trading and logistics businesses.",
        },
        {
          q: "What's the typical project timeline?",
          a: "Most custom billing projects launch in 6–12 weeks depending on complexity.",
        },
        {
          q: "Do you offer maintenance?",
          a: "Yes — SLA-backed support and feature updates post-launch.",
        },
      ]}
      ctaTitle="Get a custom billing quote"
      ctaDescription="Tell us your industry and billing rules — we'll propose a fixed-scope plan."
    />
  </Layout>
);

export default CustomBillingSoftware;
