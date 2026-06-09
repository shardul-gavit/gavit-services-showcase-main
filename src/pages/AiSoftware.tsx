import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { GLOBAL_KEYWORDS } from "@/constants/seo";
import { Bot, Brain, Sparkles, Workflow } from "lucide-react";

const AiSoftware = () => (
  <Layout>
    <Seo
      title="AI Software Development Company India | Gavit E-Services"
      description="Custom AI software, LLM integrations, and intelligent automation built for your business. 92% of companies now want AI in outsourcing contracts."
      canonical="https://www.gaviteservice.com/ai-software"
      keywords={[...GLOBAL_KEYWORDS.slice(18, 24), "AI development company India"]}
    />
    <ServicePageLayout
      badge="AI Software"
      h1="We Don't Just Use AI — We Build It For You"
      description="Custom AI software, LLM integrations, and intelligent automation built for your business. Businesses that don't integrate AI by 2026 risk falling behind competitors."
      highlights={[
        {
          title: "LLM integrations",
          detail: "Connect GPT, Claude, and open-source models to your existing apps securely.",
        },
        {
          title: "Intelligent automation",
          detail: "Automate document processing, support tickets, and repetitive workflows.",
        },
        {
          title: "Custom AI products",
          detail: "Build AI-first features into your ERP, CRM, or customer portals.",
        },
      ]}
      capabilitiesTitle="What We Build"
      capabilitiesSubtitle="AI solutions for real business outcomes"
      capabilities={[
        { icon: Brain, title: "AI Assistants", detail: "Internal copilots trained on your docs and data." },
        { icon: Bot, title: "Chatbots", detail: "Customer support bots with human handoff." },
        { icon: Workflow, title: "Automation", detail: "RPA + AI pipelines for ops and finance teams." },
        { icon: Sparkles, title: "Generative AI", detail: "Content, code, and report generation tools." },
      ]}
      process={[
        "Use-case discovery and ROI mapping for AI adoption.",
        "Prototype with your data in a secure sandbox.",
        "Production deployment with monitoring and guardrails.",
        "Iterate with model updates and performance tuning.",
      ]}
      processTitle="Our AI delivery process"
      faqs={[
        {
          q: "Can you integrate AI into our existing ERP?",
          a: "Yes. We add AI modules to ERP, billing, and custom software without full rebuilds.",
        },
        {
          q: "Is our data kept private?",
          a: "We use private deployments, NDAs, and data isolation per client requirements.",
        },
        {
          q: "Do you hire AI developers on staff augmentation?",
          a: "Yes — dedicated AI/ML engineers available via our remote staffing pods.",
        },
        {
          q: "What's possible for small businesses?",
          a: "Document AI, support bots, sales assistants, and workflow automation are high-ROI starting points.",
        },
      ]}
      ctaTitle="Start your AI roadmap today"
      ctaDescription="Get a free AI readiness assessment and phased implementation plan."
    />
  </Layout>
);

export default AiSoftware;
