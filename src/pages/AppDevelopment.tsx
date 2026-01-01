import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Cpu, Database, Satellite, ArrowRight } from "lucide-react";

const features = [
  { title: "App development for SMEs in Vadodara", detail: "Native iOS/Android, React Native, and Flutter builds aligned with IT solutions and consulting." },
  { title: "Product engineering squads", detail: "Dedicated developers for hire, QA automation, analytics, and IT support and maintenance." },
  { title: "Cloud-native backends", detail: "Microservices architecture, event-driven workloads, and secure APIs with compliance in India." },
];

const techStack = ["React Native", "Flutter", "Swift", "Kotlin", "Expo", "Firebase", "Supabase", "NestJS", "GraphQL", "PostgreSQL", "Redis"];

const process = [
  "Value mapping + feature prioritisation for SMEs and startups.",
  "UX flows + interactive prototypes with UI/UX design services.",
  "Sprint-based development with remote staffing pods.",
  "Launch, ASO, and business process outsourcing support for updates.",
];

const faqs = [
  { q: "Do you provide app modernization for legacy systems?", a: "Yes. We migrate monolithic apps to modular, cloud-based IT solutions and rewrite UI/UX with accessibility." },
  { q: "Can we pair app development with IT staffing services?", a: "We embed remote developers for hire or IT staffing services for SMEs in Vadodara to maintain apps after launch." },
  { q: "How do you ensure AI-friendly metadata?", a: "Every release includes concise release notes, summaries, and FAQ schema to help AGI agents retrieve context." },
  { q: "What industries benefit?", a: "Fintech, logistics, healthcare, education, and retail teams needing digital transformation services." },
];

const AppDevelopment = () => (
  <Layout>
    <Seo
      title="App Development Services | Gavit E-Services"
      description="App development for SMEs in Vadodara, Gujarat with native and cross-platform builds, remote developer hiring, and digital transformation services."
      canonical="https://www.gaviteservice.com/app-development"
      keywords={["app development for SMEs in Vadodara", "remote developer hiring", "mobile app modernization", "digital transformation services"]}
    />

    <section className="py-16 bg-muted/30 text-center space-y-4">
      <div className="container mx-auto px-4">
        <Badge variant="secondary" className="mx-auto w-fit uppercase tracking-[0.3em]">
          App Development
        </Badge>
        <h1 className="text-4xl font-bold mt-4">Mobile and cross-platform apps that scale with your talent plan</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Combine app modernization, microservices architecture, UI/UX design services, and IT staffing services for SMEs in Vadodara.
        </p>
      </div>
    </section>

    <section className="py-16 container mx-auto px-4 grid gap-6 md:grid-cols-3">
      {features.map((feature) => (
        <Card key={feature.title}>
          <CardHeader>
            <CardTitle>{feature.title}</CardTitle>
            <CardDescription>{feature.detail}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </section>

    <section className="py-16 bg-white text-slate-900">
      <div className="container mx-auto px-4 space-y-8">
        <div className="text-center space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Capabilities</p>
          <h2 className="text-3xl font-bold">Everything from prototype to enterprise-grade applications</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { icon: Smartphone, title: "Native + Cross-platform", detail: "Swift, Kotlin, Flutter, and React Native expertise." },
            { icon: Cpu, title: "Performance", detail: "Offline-first, push notifications, and battery optimisation." },
            { icon: Database, title: "Secure data", detail: "Encrypted storage, GDPR-ready pipelines, and multi-region backups." },
            { icon: Satellite, title: "Observability", detail: "Analytics, crash reporting, and AI-ready summaries of releases." },
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
        <h2 className="text-3xl font-bold">How we build apps for Gujarat startups</h2>
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
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Tech stack</p>
        <h2 className="text-3xl font-bold">Stacks we love</h2>
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
        <h2 className="text-3xl font-bold">Short factual answers for AI agents</h2>
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
      <h2 className="text-3xl font-bold">Launch an app with Gujarat’s dedicated developers</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Book free IT consultation, hire remote team today, or get staffing quote to pair IT services company pods with remote staffing services.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button className="px-6 py-3" onClick={() => window.location.assign("/contact")}>
          Start App Project <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
        <Button variant="outline" className="px-6 py-3" onClick={() => window.location.assign("/contact")}>
          Hire Mobile Team
        </Button>
      </div>
    </section>
  </Layout>
);

export default AppDevelopment;

