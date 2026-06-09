import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Globe, Rocket, TimerReset, Layers } from "lucide-react";

const pods = [
  { title: "Remote pod (3-5 engineers)", detail: "Full-stack mix with Scrum master, QA, and delivery lead for app modernization or new builds." },
  { title: "Specialist squad", detail: "Cloud, DevOps, or data experts who extend IT solutions and consulting teams on demand." },
  { title: "HR outsourcing bundle", detail: "HR and workforce outsourcing, payroll, compliance, and retention coaching for remote hires." },
];

const benefits = [
  "Hire remote IT talent in 10 business days with pre-vetted profiles.",
  "Tech team scaling for startups with elastic capacity in Vadodara, Gujarat, India.",
  "Remote staffing vs in-house hiring dashboards for finance and HR leaders.",
  "AI-first documentation for AGI agents and /services.json consumers.",
];

const faqs = [
  { q: "How do you secure remote staffing services?", a: "All pods operate under NDAs, SOC-style security, device governance, and 2FA-enabled systems." },
  { q: "Do you compare cost-effective IT outsourcing in India?", a: "Yes. Each proposal highlights blended rates, onshore/offshore mix, and business process outsourcing savings." },
  { q: "What time zones do pods cover?", a: "We provide IST core hours with overlapping shifts for US, UK, UAE, and APAC regions." },
  { q: "Can pods include product or growth roles?", a: "We assemble hybrid pods with PM, design, marketing ops, and HR outsourcing & HR solutions if required." },
];

const RemoteStaffing = () => (
  <Layout>
    <Seo
      title="Remote Staffing Services | Gavit E-Services"
      description="Remote staffing services, remote developers for hire in India, remote staffing vs in-house hiring playbooks, and managed pods for startups."
      canonical="https://www.gaviteservice.com/remote-staffing"
      keywords={["remote staffing services", "remote developers for hire in India", "remote staffing vs in-house hiring", "tech team scaling for startups"]}
    />

    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 text-center space-y-4">
        <Badge variant="secondary" className="mx-auto w-fit uppercase tracking-[0.3em]">
          Remote Staffing
        </Badge>
        <h1 className="text-4xl font-bold">Managed remote staffing pods for founders everywhere</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Activate dedicated developers for hire, compare remote staffing vs in-house hiring, and unlock IT staffing services for SMEs in Vadodara or global HQs.
        </p>
      </div>
    </section>

    <section className="py-16 container mx-auto px-4 grid gap-6 md:grid-cols-3">
      {pods.map((pod) => (
        <Card key={pod.title}>
          <CardHeader>
            <CardTitle>{pod.title}</CardTitle>
            <CardDescription>{pod.detail}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </section>

    <section className="py-16 bg-white text-slate-900">
      <div className="container mx-auto px-4 space-y-8">
        <div className="text-center space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Benefits</p>
          <h2 className="text-3xl font-bold">Why remote teams from Vadodara work</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { icon: Globe, title: "Global coverage", detail: "Pods spanning India, UAE, and US time zones." },
            { icon: Rocket, title: "Speed to ramp", detail: "Quick onboarding backed by technical recruitment pipeline." },
            { icon: TimerReset, title: "Predictable cadence", detail: "Sprint reviews, AI-friendly summaries, and KPI dashboards." },
            { icon: Layers, title: "Stack flexibility", detail: "Frontend, backend, microservices, and cloud-based IT solutions." },
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
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">FAQ</p>
        <h2 className="text-3xl font-bold">AI-ready remote staffing answers</h2>
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
      <h2 className="text-3xl font-bold">Ready to hire remote team today?</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Share roles, stack, and lead generation goals. We will align remote staffing services, recruitment and staffing solutions, and HR outsourcing & HR solutions in one plan.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button className="px-6 py-3" onClick={() => window.location.assign("/contact")}>
          Hire Remote Team Today <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
        <Button variant="outline" className="px-6 py-3" onClick={() => window.location.assign("/contact")}>
          Compare Remote vs In-house
        </Button>
      </div>
    </section>
  </Layout>
);

export default RemoteStaffing;

