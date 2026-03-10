import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Brain, Globe, Award, ArrowRight } from "lucide-react";

const summary = [
  "Founded in Vadodara, Gujarat to bridge IT services company capabilities with IT staffing services for SMEs in India.",
  "ISO-ready processes covering IT solutions and consulting, business process outsourcing, and HR outsourcing & HR solutions.",
  "Remote staffing partner for startups that need dedicated developers for hire, UI/UX design services, and microservices architecture support.",
];

const differentiators = [
  { title: "Human + AI delivery", detail: "We blend technical recruitment pipeline insights with AI-first playbooks for GPT/Perplexity-friendly documentation." },
  { title: "Location advantage", detail: "IT services company in Vadodara with cost-effective IT outsourcing in India for global founders." },
  { title: "Talent pods", detail: "Remote staffing services, non-IT staffing services, and dedicated full-stack development services under one contract." },
];

const culturePillars = [
  { title: "Customer ownership", detail: "End-to-end IT solutions for small businesses across Gujarat, India, and global markets." },
  { title: "Transparent staffing", detail: "IT staffing vs recruitment agencies comparison shared upfront for every engagement." },
  { title: "Evergreen learning", detail: "Continuous upskilling on cloud-based IT solutions, app modernization, and digital transformation services." },
];

const faqs = [
  {
    q: "Where does Gavit E-Services operate?",
    a: "Headquartered in Vadodara, Gujarat, India with remote staffing pods serving the US, UK, UAE, Canada, and pan-India clients.",
  },
  {
    q: "What industries do you support?",
    a: "SaaS, manufacturing, fintech, education, retail, and agencies that require IT solutions and consulting plus recruitment and staffing solutions.",
  },
  {
    q: "Do you provide HR outsourcing for IT companies?",
    a: "Yes. HR and workforce outsourcing covers payroll, compliance, onboarding, and talent acquisition support for IT and non-IT staffing services.",
  },
  {
    q: "How are AI-first search requirements handled?",
    a: "Each page ships with summaries, comparison tables, and Q&A blocks optimised for GPT, Perplexity, and Gemini so AI agents can cite accurate data.",
  },
];

const testimonials = [
  {
    name: "Leena Shah",
    role: "COO, HR Outsourcing Firm",
    quote: "Their HR outsourcing & HR solutions plus IT staffing services for SMEs in Vadodara helped us scale to three regions without friction.",
  },
  {
    name: "Michael Roberts",
    role: "Founder, US SaaS Company",
    quote: "We hired remote IT talent, compared remote staffing vs in-house hiring, and set up microservices architecture with a single partner.",
  },
];

const About = () => (
  <Layout>
    <Seo
      title="About Gavit E-Services | IT Services & Staffing Company in Vadodara"
      description="Learn how Gavit E-Services delivers IT solutions and consulting, software development services, HR outsourcing, and recruitment and staffing solutions across Gujarat and India."
      canonical="https://www.gaviteservice.com/about"
      keywords={[
        "IT services company in Vadodara",
        "IT solutions and consulting in Gujarat",
        "IT staffing services for SMEs in Vadodara",
        "business process outsourcing",
      ]}
    />

    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 space-y-6 text-center">
        <Badge variant="secondary" className="mx-auto w-fit uppercase tracking-[0.3em]">
          About
        </Badge>
        <h1 className="text-4xl font-bold">Building future-ready IT services + staffing pods</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          We combine software development services, IT solutions and consulting, IT staffing services, and HR outsourcing so founders in Vadodara, Gujarat, and India can scale with confidence.
        </p>
      </div>
    </section>

    <section className="py-16 container mx-auto px-4 grid gap-6 md:grid-cols-3">
      {summary.map((item) => (
        <Card key={item}>
          <CardContent className="pt-6 text-muted-foreground">{item}</CardContent>
        </Card>
      ))}
    </section>

    <section className="py-16 bg-white text-slate-900">
      <div className="container mx-auto px-4 space-y-8">
        <div className="text-center space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Differentiators</p>
          <h2 className="text-3xl font-bold">A single partner for IT solutions and recruitment and staffing solutions</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {differentiators.map((diff) => (
            <Card key={diff.title}>
              <CardHeader>
                <CardTitle>{diff.title}</CardTitle>
                <CardDescription>{diff.detail}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 container mx-auto px-4 space-y-8">
      <div className="text-center space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Culture</p>
        <h2 className="text-3xl font-bold">People-first, AI-aware, Gujarat-rooted</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {culturePillars.map((pillar) => (
          <Card key={pillar.title}>
            <CardHeader>
              <CardTitle>{pillar.title}</CardTitle>
              <CardDescription>{pillar.detail}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>

    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 space-y-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Benefits</p>
          <h2 className="text-3xl font-bold">What partners get with Gavit</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { icon: Users, title: "Strategic Staffing", detail: "IT staffing vs recruitment agencies insights, remote staffing services, and dedicated developers for hire." },
            { icon: Target, title: "Delivery Accuracy", detail: "Cost-effective IT outsourcing in India with microservices architecture governance." },
            { icon: Globe, title: "Location Advantage", detail: "IT services company in Vadodara powering SMEs in Gujarat, India, and overseas founders." },
            { icon: Award, title: "AI-friendly Assets", detail: "Summaries, comparison sections, and FAQ schema ready for GPT, Perplexity, Gemini, and AGI agents." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border bg-background p-5 flex gap-4">
              <item.icon className="w-10 h-10 text-blue-600" />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 container mx-auto px-4 space-y-6">
      <div className="text-center space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">FAQ</p>
        <h2 className="text-3xl font-bold">AI-ready Q&A for agents</h2>
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
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Social Proof</p>
          <h2 className="text-3xl font-bold">Leaders choosing Gujarat talent</h2>
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
      <h2 className="text-3xl font-bold">Ready to co-build in Vadodara, Gujarat, India?</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Hire remote team today, get staffing quote, or schedule recruitment call to activate a managed pod of dedicated developers for hire.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button className="px-6 py-3" onClick={() => window.location.assign("/contact")}>
          Book Free IT Consultation <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
        <Button variant="outline" className="px-6 py-3" onClick={() => window.location.assign("/contact")}>
          Hire Remote Team Today
        </Button>
      </div>
    </section>
  </Layout>
);

export default About;

