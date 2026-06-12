import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/OptimizedImage";
import {
  Users,
  Target,
  Globe,
  Award,
  ArrowRight,
  Brain,
  Layers,
  Sparkles,
  MapPin,
  CheckCircle2,
  Shield,
  Clock,
  ExternalLink,
} from "lucide-react";
import shardulPhoto from "@/assets/shardul-gavit.jpeg";
import pavanPhoto from "@/assets/pavan-gavit.jpeg";

const clientSolutions = [
  {
    client: "US/UK startup needing a dev team",
    problem: "US agency quotes are too high and hiring locally takes months.",
    solution:
      "Gavit E-Services provides affordable dedicated Indian developers with 10–15 day onboarding, timezone overlap, and direct founder involvement — no big-agency markup.",
  },
  {
    client: "Indian SMB needing ERP",
    problem: "Excel and generic software cannot handle GST, inventory, and production together.",
    solution:
      "Gavit E-Services builds GST-compliant custom ERP with local Vadodara support, phased delivery, and modules mapped to your manufacturing or trading workflow.",
  },
  {
    client: "Company needing virtual assistants",
    problem: "Admin, finance, and support tasks are eating founder time.",
    solution:
      "Gavit E-Services supplies trained Indian VAs for admin, finance, HR, and customer support — onboarded in as little as 48 hours at 40–60% lower cost than local hires.",
  },
  {
    client: "Business needing AI in existing software",
    problem: "You want LLM features but lack in-house AI engineering capacity.",
    solution:
      "Gavit E-Services integrates OpenAI, Claude, and open-source models into your apps — chatbots, automation, and custom AI software built for production.",
  },
];

const stats = [
  { value: "100+", label: "Clients served" },
  { value: "5+", label: "Countries" },
  { value: "48hr", label: "Team onboarding" },
  { value: "5+ Years", label: "Since 2020" },
];

const summary = [
  {
    icon: MapPin,
    title: "HQ in Vadodara",
    detail: "Founded in 2020 in Gujarat to bridge VA, ERP, custom software, and staffing for Indian SMBs and global founders.",
  },
  {
    icon: Layers,
    title: "Full-stack delivery",
    detail: "ISO-ready processes across IT consulting, AI software, GST billing, web apps, and remote staffing pods.",
  },
  {
    icon: Globe,
    title: "India + global",
    detail: "Serving USA, UK, Canada, NZ, Australia & UAE with timezone-aware squads from Vadodara.",
  },
];

const differentiators = [
  {
    icon: Brain,
    title: "Human + AI delivery",
    detail: "We blend engineering squads with AI-first playbooks — building for 2031, not just 2026.",
  },
  {
    icon: Target,
    title: "Location advantage",
    detail: "Cost-effective outsourcing from Vadodara without compromising enterprise-grade quality.",
  },
  {
    icon: Users,
    title: "Talent pods",
    detail: "VA teams, developers, and consultants under one contract — scale in 48 hours.",
  },
];

const culturePillars = [
  { title: "Customer ownership", detail: "End-to-end solutions for manufacturing, retail, SaaS, and services across India and abroad." },
  { title: "Transparent delivery", detail: "Clear timelines, fixed scopes, and honest comparisons — no surprise invoices." },
  { title: "Evergreen learning", detail: "Continuous upskilling in cloud, AI, ERP, and modern web application stacks." },
];

const milestones = [
  { year: "2020", event: "Gavit E-Services founded in Vadodara, Gujarat" },
  { year: "2022", event: "Expanded remote staffing & custom software for global clients" },
  { year: "2024", event: "Launched GST billing & ERP modules for Indian SMBs" },
  { year: "2026", event: "Gavite Foresight — thought leadership on AI & World Models" },
];

const faqs = [
  {
    q: "Where does Gavit E-Services operate?",
    a: "Headquartered in Vadodara, Gujarat, India with remote pods serving the US, UK, UAE, Canada, NZ, and Australia.",
  },
  {
    q: "What industries do you support?",
    a: "Manufacturing, retail, SaaS, fintech, education, healthcare, legal, and e-commerce.",
  },
  {
    q: "Do you provide HR outsourcing for IT companies?",
    a: "Yes — payroll, compliance, onboarding, and talent acquisition for IT and non-IT roles.",
  },
  {
    q: "What makes you different from other IT vendors?",
    a: "One partner for VA, ERP, AI software, GST billing, and dev teams — built 5 years ahead of market trends.",
  },
];

const testimonials = [
  {
    name: "Leena Shah",
    role: "COO, HR Outsourcing Firm",
    quote: "Their staffing and HR solutions helped us scale to three regions without friction.",
  },
  {
    name: "Michael Roberts",
    role: "Founder, US SaaS Company",
    quote: "We hired a remote dev pod and cut delivery time in half — same quality, fraction of US cost.",
  },
];

const About = () => (
  <Layout>
    <Seo
      title="About Gavit E-Services | Founder Pavan Gavit — IT Company Vadodara"
      description="Gavit E-Services is an IT services and remote staffing company founded in 2020 by Pavan Gavit in Vadodara, Gujarat. 100+ clients across India, USA, UK, UAE, Canada & Australia."
      canonical="https://www.gaviteservice.com/about"
      keywords={[
        "IT services company in Vadodara",
        "Pavan Gavit Gavit E-Services",
        "software company Gujarat",
        "VA ERP software India",
      ]}
    />

    {/* Hero */}
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <OptimizedImage
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
          alt="Gavit E-Services office"
          className="w-full h-full"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-blue-950/90 to-purple-950/85" />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center text-white space-y-6">
        <Badge className="bg-white/10 text-white border-white/20 uppercase tracking-[0.3em]">
          About Us
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto leading-tight">
          One partner for VA, ERP, AI &{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            software that scales
          </span>
        </h1>
        <p className="text-white/80 text-lg max-w-3xl mx-auto">
          Gavit E-Services is an IT services and remote staffing company based in Vadodara, Gujarat, India.
          Founded in 2020 by Pavan Gavit, we serve 100+ clients across India, USA, UK, UAE, Canada, and Australia.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600" onClick={() => window.location.assign("/contact")}>
            Work With Us <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
            <Link to="/services">Explore Services</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-12 bg-slate-950 text-white border-y border-white/10">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl bg-white/5 p-5 text-center border border-white/10">
            <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {stat.value}
            </p>
            <p className="text-xs text-white/60 uppercase tracking-[0.25em] mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Founder — Pavan Gavit (EEAT) */}
    <section className="py-16 container mx-auto px-4">
      <div className="grid gap-10 lg:grid-cols-2 items-center max-w-5xl mx-auto">
        <Card className="overflow-hidden border-0 shadow-xl">
          <div className="relative h-72 sm:h-80">
            <img src={pavanPhoto} alt="Pavan Gavit, Founder of Gavit E-Services" className="w-full h-full object-cover object-top" width={640} height={720} loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <p className="text-sm text-white/70 uppercase tracking-[0.2em]">Founder</p>
              <p className="text-2xl font-bold">Pavan Gavit</p>
              <p className="text-sm text-white/80">Founder, Gavit E-Services</p>
            </div>
          </div>
          <CardContent className="p-6 space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              B.E. Information Technology &amp; Diploma IT, Parul University, Vadodara. Multi-venture entrepreneur
              behind Iddasia Security Services Pvt. Ltd. (PSARA licensed) and AdvanceSafe Vardhan.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Expertise: web development, AI systems, IT staffing, and industrial safety technology. Pavan Gavit
              leads Gavit E-Services with hands-on involvement in client projects and team onboarding.
            </p>
            <a
              href="https://www.linkedin.com/in/pavan-gavit-1a8b94226/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline font-medium"
            >
              Pavan Gavit on LinkedIn <ExternalLink className="w-4 h-4" />
            </a>
          </CardContent>
        </Card>
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Why clients trust us</p>
          <h2 className="text-3xl font-bold leading-snug">Built by a founder who ships — not just sells</h2>
          <p className="text-muted-foreground leading-relaxed">
            Gavit E-Services combines PSARA-linked business credibility with fast-moving tech delivery. Clients get
            direct access to leadership, transparent pricing, and teams that onboard in days — not months.
          </p>
          <ul className="space-y-3">
            {[
              "10–15 day onboarding for dedicated developer pods",
              "Response to new inquiries within 24 hours",
              "ISO-ready processes, NDAs, and secure delivery",
              "Specialists in web, ERP, AI, VA, and remote staffing",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Problem → Solution */}
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 space-y-10">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Why Gavit E-Services</p>
          <h2 className="text-3xl font-bold">If you are facing this — here is how we solve it</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {clientSolutions.map((item) => (
            <Card key={item.client} className="h-full">
              <CardHeader>
                <Badge variant="secondary" className="w-fit text-xs">{item.client}</Badge>
                <CardTitle className="text-base text-muted-foreground font-normal mt-2">
                  Problem: {item.problem}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold text-foreground">Solution: </span>
                  {item.solution}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Trust signals */}
    <section className="py-12 border-y border-border/60">
      <div className="container mx-auto px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl">
        {[
          { icon: Shield, label: "Clutch verified", detail: "Reviewed IT services profile on Clutch.co" },
          { icon: Clock, label: "24-hour response", detail: "New inquiries answered within one business day" },
          { icon: Users, label: "10+ specialists", detail: "Developers, VAs, designers & project leads" },
          { icon: Award, label: "100+ clients", detail: "India, USA, UK, UAE, Canada & Australia" },
        ].map((signal) => (
          <div key={signal.label} className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950 flex items-center justify-center shrink-0">
              <signal.icon className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="font-semibold text-sm">{signal.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{signal.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Summary cards */}
    <section className="py-16 container mx-auto px-4">
      <div className="grid gap-6 md:grid-cols-3">
        {summary.map((item) => (
          <Card
            key={item.title}
            className="group border-border/60 hover:border-blue-300/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription className="text-base leading-relaxed">{item.detail}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>

    {/* Mission + CEO */}
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 grid gap-10 lg:grid-cols-2 items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Our mission</p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            We build technology{" "}
            <span className="text-blue-600">5 years ahead</span> of the industry
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Most vendors sell what's popular today. We help Indian and global SMBs adopt custom software, ERP, AI, and VA teams
            before competitors catch up — from our HQ in Vadodara, Gujarat.
          </p>
          <ul className="space-y-3">
            {["Custom software over off-the-shelf tools", "Web apps over static websites", "AI embedded in operations, not bolted on"].map(
              (point) => (
                <li key={point} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  {point}
                </li>
              )
            )}
          </ul>
          <Button variant="outline" asChild>
            <Link to="/blog">
              Read Gavite Foresight <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
        <Card className="overflow-hidden border-0 shadow-xl">
          <div className="relative h-64">
            <img src={shardulPhoto} alt="Shardul Gavit, CEO" className="w-full h-full object-cover object-top" width={640} height={720} loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <p className="text-sm text-white/70 uppercase tracking-[0.2em]">CEO's Desk</p>
              <p className="text-xl font-bold">Shardul Gavit</p>
              <p className="text-sm text-white/80">CEO & Director, Gavit E-Services</p>
            </div>
          </div>
          <CardContent className="p-6 bg-slate-950 text-white">
            <p className="text-sm text-white/80 italic">
              "We don't chase trends — we build what businesses will need in 2031. That's why our clients stay ahead."
            </p>
          </CardContent>
        </Card>
      </div>
    </section>

    {/* Differentiators */}
    <section className="py-16 container mx-auto px-4 space-y-10">
      <div className="text-center space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Why Gavit</p>
        <h2 className="text-3xl font-bold">What sets us apart</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {differentiators.map((diff) => (
          <div
            key={diff.title}
            className="rounded-2xl border bg-background p-6 space-y-4 hover:shadow-md transition-shadow"
          >
            <diff.icon className="w-10 h-10 text-blue-600" />
            <h3 className="text-lg font-semibold">{diff.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{diff.detail}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Timeline */}
    <section className="py-16 bg-slate-950 text-white">
      <div className="container mx-auto px-4 space-y-10">
        <div className="text-center space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Our journey</p>
          <h2 className="text-3xl font-bold">Growing since 2020</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {milestones.map((m) => (
            <div key={m.year} className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-2">
              <p className="text-2xl font-bold text-blue-400">{m.year}</p>
              <p className="text-sm text-white/80">{m.event}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Culture */}
    <section className="py-16 container mx-auto px-4 space-y-10">
      <div className="text-center space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Culture</p>
        <h2 className="text-3xl font-bold">People-first, AI-aware, Gujarat-rooted</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {culturePillars.map((pillar, i) => (
          <Card key={pillar.title} className="relative overflow-hidden">
            <div className="absolute top-4 right-4 text-6xl font-bold text-muted/30 select-none">{i + 1}</div>
            <CardHeader>
              <CardTitle>{pillar.title}</CardTitle>
              <CardDescription className="text-base">{pillar.detail}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>

    {/* Benefits */}
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 space-y-10">
        <div className="text-center space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Benefits</p>
          <h2 className="text-3xl font-bold">What partners get with Gavit</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { icon: Users, title: "Strategic Staffing", detail: "VA teams, dedicated developers, and HR outsourcing in one engagement." },
            { icon: Target, title: "Delivery Accuracy", detail: "Agile sprints, clear KPIs, and proactive communication every week." },
            { icon: Globe, title: "Global Reach", detail: "India-based delivery with overlap for US, UK, Canada, and Australia." },
            { icon: Award, title: "Future-ready builds", detail: "ERP, AI, GST billing, and web apps designed to scale with you." },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border bg-background p-6 flex gap-4 hover:border-blue-200 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-16 container mx-auto px-4 space-y-8">
      <div className="text-center space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">FAQ</p>
        <h2 className="text-3xl font-bold">Common questions</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 max-w-4xl mx-auto">
        {faqs.map((faq) => (
          <Card key={faq.q} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-base">{faq.q}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">{faq.a}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 space-y-10">
        <div className="text-center space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Social proof</p>
          <h2 className="text-3xl font-bold">Trusted by leaders worldwide</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-l-4 border-l-blue-600">
              <CardContent className="pt-6">
                <p className="text-muted-foreground italic mb-4">"{t.quote}"</p>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 container mx-auto px-4">
      <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 p-8 md:p-12 text-center text-white space-y-6 shadow-xl">
        <Sparkles className="w-10 h-10 mx-auto text-white/80" />
        <h2 className="text-3xl font-bold">Ready to build with us?</h2>
        <p className="text-white/90 max-w-xl mx-auto">
          Book a free consultation — VA, ERP, AI software, or dev teams onboarded in 48 hours.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-white text-slate-900 hover:bg-white/90" onClick={() => window.location.assign("/contact")}>
            Book Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button variant="outline" className="border-white/40 text-white hover:bg-white/10" asChild>
            <Link to="/blog">Read Our Insights</Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
