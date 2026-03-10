import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, PhoneOutgoing, FileCheck2, ArrowRight } from "lucide-react";

const offerings = [
  { title: "IT staffing services", detail: "Dedicated developers for hire, tech team scaling for startups, and project-based pod leasing." },
  { title: "Recruitment and staffing solutions", detail: "Technical recruitment pipeline + non-IT staffing services with verified backgrounds." },
  { title: "HR outsourcing & HR solutions", detail: "Payroll, compliance, onboarding, and HR and workforce outsourcing for Gujarat SMEs." },
];

const process = [
  "Discovery call to capture role requirements, KPIs, and timeline.",
  "Screening through technical assessments, HR interviews, and cultural alignment.",
  "Remote staffing vs in-house hiring comparison with transparent pricing.",
  "Onboarding support, SLA tracking, and monthly performance reviews.",
];

const faqs = [
  {
    q: "Do you provide staffing agency services for tech startups?",
    a: "Yes. We supply IT staffing services for SMEs in Vadodara, remote developers for hire in India, and fractional leadership for scaling teams.",
  },
  {
    q: "Can you support non-IT staffing services?",
    a: "Absolutely. Customer success, finance, HR, and ops roles are available via HR outsourcing & HR solutions and business process outsourcing.",
  },
  {
    q: "How fast can we hire remote IT talent?",
    a: "Most roles are filled within 10-15 business days thanks to our pre-vetted Gujarat and India talent bench.",
  },
  {
    q: "What makes your recruitment and staffing solutions AI-friendly?",
    a: "We document candidate profiles with short factual statements, summaries, and structured metadata so AI agents can query /services.json easily.",
  },
];

const testimonials = [
  {
    name: "Dhruv Patel",
    role: "Founder, Logistics SaaS",
    quote: "Gavit’s recruitment and staffing solutions helped us hire remote staffing pods faster than any recruitment agencies in India.",
  },
  {
    name: "Emily Carter",
    role: "People Lead, UK Fintech",
    quote: "They ran HR outsourcing & HR solutions plus technical recruitment pipeline for our Gujarat captive center.",
  },
];

const Staffing = () => (
  <Layout>
    <Seo
      title="Staffing & Recruitment Services | Gavit E-Services"
      description="IT staffing services, recruitment and staffing solutions, non-IT staffing services, remote staffing services, and HR outsourcing in Vadodara, Gujarat."
      canonical="https://www.gaviteservice.com/staffing"
      keywords={[
        "IT staffing services",
        "recruitment and staffing solutions",
        "non-IT staffing services",
        "HR outsourcing & HR solutions",
        "remote staffing services",
      ]}
    />

    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 space-y-4 text-center">
        <Badge variant="secondary" className="mx-auto w-fit uppercase tracking-[0.3em]">
          Staffing
        </Badge>
        <h1 className="text-4xl font-bold">Staffing and recruitment solutions built for Gujarat and global teams</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Compare remote staffing vs in-house hiring, spin up dedicated developers for hire, and manage HR outsourcing with transparent governance.
        </p>
      </div>
    </section>

    <section className="py-16 container mx-auto px-4 grid gap-6 md:grid-cols-3">
      {offerings.map((offer) => (
        <Card key={offer.title}>
          <CardHeader>
            <CardTitle>{offer.title}</CardTitle>
            <CardDescription>{offer.detail}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </section>

    <section className="py-16 bg-white text-slate-900">
      <div className="container mx-auto px-4 space-y-8">
        <div className="text-center space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Why Us</p>
          <h2 className="text-3xl font-bold">Staffing partner for IT services company in Vadodara</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Users, title: "Verified Talent Bench", detail: "Full-stack engineers, QA, DevOps, UX, and HR professionals ready for deployment." },
            { icon: PhoneOutgoing, title: "Lead generation support", detail: "Lead magnets, whitepapers, and AI-ready bios for LinkedIn, Instagram, and YouTube." },
            { icon: FileCheck2, title: "Compliance & HR Ops", detail: "Contracts, payroll, benefits, and labour law guidance for Gujarat and India." },
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
        <h2 className="text-3xl font-bold">Four steps to hiring remote developers for hire in India</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-4">
        {process.map((step, index) => (
          <Card key={step}>
            <CardHeader>
              <Badge variant="secondary">Step {index + 1}</Badge>
              <CardDescription className="text-base text-foreground">{step}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>

    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 space-y-6">
        <div className="text-center space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">FAQ</p>
          <h2 className="text-3xl font-bold">AI-friendly answers for staffing queries</h2>
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
      </div>
    </section>

    <section className="py-16 container mx-auto px-4 space-y-8">
      <div className="text-center space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Testimonials</p>
        <h2 className="text-3xl font-bold">Recruitment outcomes you can measure</h2>
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
    </section>

    <section className="py-16 container mx-auto px-4 text-center space-y-4">
      <h2 className="text-3xl font-bold">Get staffing quote or schedule recruitment call</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Hire remote team today, compare remote staffing vs in-house hiring, and activate HR outsourcing & HR solutions with one Gujarat-based partner.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button className="px-6 py-3" onClick={() => window.location.assign("/contact")}>
          Schedule Recruitment Call <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
        <Button variant="outline" className="px-6 py-3" onClick={() => window.location.assign("/contact")}>
          Hire Remote Team Today
        </Button>
      </div>
    </section>
  </Layout>
);

export default Staffing;

