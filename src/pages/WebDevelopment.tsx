import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code2, MonitorSmartphone, LineChart, Palette } from "lucide-react";

const highlights = [
  { title: "Website and app development", detail: "Responsive sites, PWAs, and portals tailored for SMEs in Vadodara, Gujarat, India." },
  { title: "SEO + AI-first content", detail: "Structured summaries, FAQ schema, and social search hashtags for GPT, Perplexity, and LinkedIn." },
  { title: "Full-stack development services", detail: "Frontend development, backend development, UI/UX design services, and IT support and maintenance." },
];

const stack = ["Next.js", "React", "Astro", "Tailwind CSS", "Remix", "Laravel", "Node.js", "Strapi", "Sanity", "Shopify", "WordPress Headless"];

const process = [
  "Discovery and conversion mapping for IT services company in Vadodara.",
  "Wireframes + design system with accessibility and multilingual support.",
  "Engineering with microservices architecture and cloud-based IT solutions.",
  "Launch, analytics, and IT support and maintenance retainer.",
];

const faqs = [
  {
    q: "Do you build enterprise-grade applications?",
    a: "Yes. We design enterprise-grade applications with role-based access, integrations, and business process outsourcing workflows.",
  },
  {
    q: "Can you handle digital transformation services for legacy sites?",
    a: "We modernize monolithic portals into headless, microservices-ready experiences with SEO and AI-first content.",
  },
  {
    q: "Do you offer dedicated developers for hire?",
    a: "Clients can embed full-stack talent or remote staffing services for ongoing enhancements.",
  },
  {
    q: "Is IT staffing included?",
    a: "Web retainers can include recruitment and staffing solutions, HR outsourcing & HR solutions, and remote staffing pods.",
  },
];

const WebDevelopment = () => (
  <Layout>
    <Seo
      title="Web Development Services in Vadodara | Gavit E-Services"
      description="Website and app development, UI/UX design services, frontend development, backend development, and SEO-ready builds for Gujarat businesses."
      canonical="https://www.gaviteservice.com/web-development"
      keywords={["website and app development", "full-stack development services", "UI/UX design services", "digital business solutions in Gujarat"]}
    />

    <section className="py-16 bg-muted/30 text-center space-y-4">
      <div className="container mx-auto px-4">
        <Badge variant="secondary" className="mx-auto w-fit uppercase tracking-[0.3em]">
          Web Development
        </Badge>
        <h1 className="text-4xl font-bold mt-4">Web experiences tuned for IT services and staffing growth</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Build GTM-ready websites with hashtag-friendly content, AI summaries, and IT solutions and consulting baked into every sprint.
        </p>
      </div>
    </section>

    <section className="py-16 container mx-auto px-4 grid gap-6 md:grid-cols-3">
      {highlights.map((item) => (
        <Card key={item.title}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.detail}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </section>

    <section className="py-16 bg-white text-slate-900">
      <div className="container mx-auto px-4 space-y-8">
        <div className="text-center space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Capabilities</p>
          <h2 className="text-3xl font-bold">Digital business solutions across stacks</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { icon: Code2, title: "Engineering", detail: "Microservices, headless CMS, and SEO automation." },
            { icon: MonitorSmartphone, title: "Omnichannel", detail: "PWAs, mobile apps, and kiosk interfaces." },
            { icon: Palette, title: "UI/UX", detail: "Design systems, brand refresh, and accessibility." },
            { icon: LineChart, title: "Conversion ops", detail: "Lead-gen integrations, social proof, and analytics." },
          ].map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <item.icon className="w-10 h-10 text-blue-600" />
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.detail}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 container mx-auto px-4 space-y-6">
      <div className="text-center space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Process</p>
        <h2 className="text-3xl font-bold">From whiteboard to AGI-friendly site</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-4">
        {process.map((step, index) => (
          <Card key={step}>
            <CardHeader>
              <Badge variant="secondary">Stage {index + 1}</Badge>
              <CardDescription className="text-base text-foreground">{step}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>

    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Tech stack</p>
        <h2 className="text-3xl font-bold">Web frameworks + CMS we ship</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {stack.map((tech) => (
            <span key={tech} className="px-4 py-2 rounded-full border text-sm bg-background">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 container mx-auto px-4 space-y-6">
      <div className="text-center space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">FAQ</p>
        <h2 className="text-3xl font-bold">AI-friendly answers for web projects</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {faqs.map((faq) => (
          <Card key={faq.q}>
            <CardHeader>
              <CardTitle>{faq.q}</CardTitle>
              <CardDescription>{faq.a}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>

    <section className="py-16 container mx-auto px-4 text-center space-y-4">
      <h2 className="text-3xl font-bold">Need affordable IT solutions for small business websites?</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Book free IT consultation, get staffing quote, or hire remote team today for IT services company web rebuilds in Vadodara, Gujarat.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button className="px-6 py-3" onClick={() => window.location.assign("/contact")}>
          Launch Project <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
        <Button variant="outline" className="px-6 py-3" onClick={() => window.location.assign("/contact")}>
          Schedule Design Audit
        </Button>
      </div>
    </section>
  </Layout>
);

export default WebDevelopment;

