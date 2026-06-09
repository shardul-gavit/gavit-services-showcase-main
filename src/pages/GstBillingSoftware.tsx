import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { GLOBAL_KEYWORDS } from "@/constants/seo";
import { FileText, IndianRupee, Receipt, ShieldCheck } from "lucide-react";

const GstBillingSoftware = () => (
  <Layout>
    <Seo
      title="GST Billing Software India | Free & Affordable Plans — Gavit E-Services"
      description="Simple, affordable GST billing software for Indian SMBs. Generate invoices, track payments, stay compliant. Free plan available."
      canonical="https://www.gaviteservice.com/gst-billing-software"
      keywords={[...GLOBAL_KEYWORDS.slice(24, 30), "GST invoice software India"]}
    />
    <ServicePageLayout
      badge="GST Billing"
      h1="GST Billing Software Built for Indian SMBs"
      description="Simple, affordable GST billing software. Generate invoices, track payments, stay compliant. Every Indian business filing GST needs compliant billing — generic apps lack customization."
      highlights={[
        {
          title: "GST-compliant invoices",
          detail: "GSTR-ready formats, HSN/SAC codes, and e-invoice support.",
        },
        {
          title: "Payment tracking",
          detail: "Track receivables, reminders, and customer ledgers in one place.",
        },
        {
          title: "Affordable plans",
          detail: "Start free and upgrade as your business grows — no hidden fees.",
        },
      ]}
      capabilitiesTitle="Features"
      capabilitiesSubtitle="Billing made simple for Indian businesses"
      capabilities={[
        { icon: Receipt, title: "Invoicing", detail: "GST, proforma, and credit/debit notes." },
        { icon: IndianRupee, title: "Payments", detail: "UPI, bank, and cash reconciliation." },
        { icon: FileText, title: "Reports", detail: "GSTR summaries, sales, and tax reports." },
        { icon: ShieldCheck, title: "Compliance", detail: "Updated GST rules and audit trails." },
      ]}
      pricing={[
        {
          name: "Free",
          price: "₹0/mo",
          features: ["50 invoices/month", "Basic GST reports", "1 user"],
        },
        {
          name: "Starter",
          price: "₹499/mo",
          features: ["500 invoices/month", "Payment reminders", "3 users"],
        },
        {
          name: "Business",
          price: "₹999/mo",
          features: ["Unlimited invoices", "Multi-branch", "10 users"],
        },
        {
          name: "Custom",
          price: "Contact us",
          features: ["Custom workflows", "API integrations", "Dedicated support"],
        },
      ]}
      process={[
        "Sign up and configure your business GST details.",
        "Import customers and products from Excel or Tally.",
        "Start invoicing with compliant templates.",
        "Generate GSTR reports and scale with paid plans.",
      ]}
      faqs={[
        {
          q: "Is the free plan really free?",
          a: "Yes — 50 invoices per month with core GST features at no cost.",
        },
        {
          q: "Can I migrate from Tally?",
          a: "We support data import from Tally and Excel for a smooth switch.",
        },
        {
          q: "Do you support e-invoicing?",
          a: "Yes — e-invoice generation is available on Business and Custom plans.",
        },
        {
          q: "Is this only for Vadodara businesses?",
          a: "No — any Indian GST-registered business can use our billing software.",
        },
      ]}
      ctaTitle="Try GST Billing Software Free"
      ctaDescription="Start invoicing in minutes. No credit card required for the free plan."
      primaryCta="Start Free Trial"
      primaryCtaLink="/contact"
    />
  </Layout>
);

export default GstBillingSoftware;
