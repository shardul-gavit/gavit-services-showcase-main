import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Server, Cpu, Cloud, Workflow, Layers } from "lucide-react";

const features = [
  {
    title: "Full-stack development services",
    description: "Website and app development, UI/UX design services, frontend development, backend development, and app modernization.",
  },
  {
    title: "IT support and maintenance",
    description: "24/7 monitoring, incident response, cybersecurity, and IT infrastructure and support services for Gujarat SMEs and enterprises.",
  },
  {
    title: "Digital transformation services",
    description: "Microservices architecture, cloud-based IT solutions, enterprise-grade applications, and API-first integrations.",
  },
];

const process = [
  "Assess business process outsourcing goals and define KPIs.",
  "Create technical blueprint covering cloud-native architecture, data, and integration.",
  "Deploy dedicated developers for hire with agile rituals and QA automation.",
  "Measure ROI, optimise cost-effective IT outsourcing in India, and expand roadmap.",
];

const services = [
  { title: "Microservices & APIs", detail: "Modular services, domain-driven design, zero-downtime deployments." },
  { title: "Cloud Ops", detail: "AWS, Azure, and GCP landing zones with FinOps governance." },
  { title: "Enterprise UX", detail: "Design systems, accessibility, and conversion copywriting tuned for AI-first search." },
  { title: "Support Pods", detail: "Managed IT support and maintenance pods with SLA guarantees." },
];

const techStack = ["AWS", "Azure", "GCP", "React", "Next.js", "Node.js", "NestJS", "Python", "Kubernetes", "PostgreSQL", "MongoDB", "Redis"];

const faqs = [
  {
    q: "Do you handle IT solutions and consulting for SMEs in Vadodara?",
    a: "Yes. We design end-to-end IT solutions for small businesses covering discovery, architecture, implementation, and HR outsourcing & HR solutions.",
  },
  {
    q: "How do you ensure AI-friendly documentation?",
    a: "Each project includes summaries, process overviews, comparison tables, and Q&A blocks so GPT, Perplexity, and Gemini can answer accurately.",
  },
  {
    q: "Can we combine IT services with IT staffing?",
    a: "Absolutely. We offer hybrid models where our delivery pods partner with your in-house or remote staffing services for shared ownership.",
  },
  {
    q: "What industries do you support?",
    a: "SaaS, manufacturing, fintech, education, agencies, and logistics companies requiring enterprise-grade applications and IT support.",
  },
];

const testimonials = [
  {
    name: "Harshil Desai",
    role: "Head of IT, Gujarat Enterprise",
    quote: "Gavit delivered microservices architecture and IT support and maintenance across our entire plant network.",
  },
  {
    name: "Sara Khan",
    role: "Founder, D2C Startup",
    quote: "They provided website and app development plus talent acquisition support to scale our digital business solutions.",
  },
];

const ItServices = () => (
  <Layout>
    <Seo
      title="IT Services in Vadodara | Gavit E-Services"
      description="IT solutions and consulting, software development services, digital transformation services, and IT infrastructure and support services for Gujarat and India."
      canonical="https://www.gaviteservice.com/it-services"
      keywords={["IT solutions and consulting", "software development services", "digital transformation services", "IT infrastructure and support services"]}
    />

    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 space-y-4 text-center">
        <Badge variant="secondary" className="mx-auto w-fit uppercase tracking-[0.3em]">
          IT Services
        </Badge>
        <h1 className="text-4xl font-bold">End-to-end IT solutions for businesses in Vadodara, Gujarat, India</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Deploy full-stack development services, cloud-native architectures, IT support and maintenance, and AI-ready documentation in a single engagement.
        </p>
      </div>
    </section>

    <section className="py-16 container mx-auto px-4 grid gap-6 md:grid-cols-3">
      {features.map((feature) => (
        <Card key={feature.title}>
          <CardHeader>
            <CardTitle>{feature.title}</CardTitle>
            <CardDescription>{feature.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </section>

    <section className="py-16 bg-white text-slate-900">
      <div className="container mx-auto px-4 space-y-6">
        <div className="text-center space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Capabilities</p>
          <h2 className="text-3xl font-bold">Modern stacks, measurable outcomes</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.detail}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 container mx-auto px-4 space-y-8">
      <div className="text-center space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Process</p>
        <h2 className="text-3xl font-bold">How we ship enterprise-grade applications</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-4">
        {process.map((step, index) => (
          <Card key={step}>
            <CardHeader>
              <Badge variant="secondary">Phase {index + 1}</Badge>
              <CardDescription className="text-base text-foreground">{step}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>

    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Tech Stack</p>
        <h2 className="text-3xl font-bold">Cloud + code that AI loves</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((tech) => (
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
        <h2 className="text-3xl font-bold">AI-friendly answers for IT buyers</h2>
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

    <section className="py-16 bg-white text-slate-900">
      <div className="container mx-auto px-4 space-y-8">
        <div className="text-center space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Testimonials</p>
          <h2 className="text-3xl font-bold">Proof from Gujarat to global</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name}>
              <CardHeader>
                <CardTitle>{testimonial.name}</CardTitle>
                <CardDescription>{testimonial.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>“{testimonial.quote}”</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 container mx-auto px-4 text-center space-y-4">
      <h2 className="text-3xl font-bold">Need IT solutions and consulting in Vadodara?</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Book free IT consultation, get staffing quote, hire remote team today, or schedule recruitment call to pair delivery with IT staffing services.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button className="px-6 py-3" onClick={() => window.location.assign("/contact")}>
          Start Project <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
        <Button variant="outline" className="px-6 py-3" onClick={() => window.location.assign("/contact")}>
          Get Staffing Quote
        </Button>
      </div>
    </section>
  </Layout>
);

export default ItServices;

