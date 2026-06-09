import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/ShareButtons";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { ArrowRight } from "lucide-react";
import { SITE_URL } from "@/data/foresightPosts";

const quadrants = [
  {
    title: "Adopt Now",
    emoji: "🟢",
    subtitle: "Use in your business today",
    items: [
      "Custom Software over off-shelf tools",
      "AI-embedded applications",
      "Cloud ERP for SMBs",
      "Web Applications over static websites",
      "Virtual Assistants for operations",
    ],
    className: "border-green-200 bg-green-50/50 dark:bg-green-950/20",
  },
  {
    title: "Trial",
    emoji: "🟡",
    subtitle: "Experiment — early advantage",
    items: [
      "Agentic AI workflows",
      "World Model applications",
      "Low-code platforms for internal tools",
      "AI-powered CRM",
    ],
    className: "border-yellow-200 bg-yellow-50/50 dark:bg-yellow-950/20",
  },
  {
    title: "Assess",
    emoji: "🔵",
    subtitle: "Watch — coming in 1–2 years",
    items: [
      "Physical AI / Robotics for SMBs",
      "AI Agents replacing VAs",
      "Autonomous software development",
      "Real-time AI translation tools",
    ],
    className: "border-blue-200 bg-blue-50/50 dark:bg-blue-950/20",
  },
  {
    title: "Hold / Outdated",
    emoji: "🔴",
    subtitle: "Avoid or replace",
    items: [
      "Static websites (replace with web apps)",
      "On-premise software (move to cloud)",
      "Basic LLM chatbots (market saturated)",
      "Manual data entry systems",
      "Generic off-shelf ERP (too expensive, too rigid)",
    ],
    className: "border-red-200 bg-red-50/50 dark:bg-red-950/20",
  },
];

const TechRadar = () => (
  <Layout>
    <Seo
      title="Gavite Tech Radar Q2 2026 — What's Hot & What's Outdated | Gavit E-Services"
      description="Gavit E-Services quarterly tech radar for Indian and global SMBs. What AI, software, and IT trends to adopt, trial, or drop in 2026."
      canonical={`${SITE_URL}/tech-radar`}
      keywords={["tech radar 2026", "AI trends India", "software trends SMB"]}
    />

    <section className="py-16 bg-muted/30 text-center space-y-4">
      <div className="container mx-auto px-4">
        <Badge variant="secondary" className="mx-auto w-fit uppercase tracking-[0.3em]">
          Tech Radar
        </Badge>
        <h1 className="text-4xl font-bold mt-4">Gavite Tech Radar — Q2 2026</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Our honest take on what to adopt, what to watch, and what to drop.
        </p>
        <p className="text-sm text-muted-foreground">Updated: 9 June 2026</p>
      </div>
    </section>

    <section className="py-12 container mx-auto px-4 grid gap-6 md:grid-cols-2">
      {quadrants.map((q) => (
        <Card key={q.title} className={q.className}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <span>{q.emoji}</span>
              {q.title}
            </CardTitle>
            <p className="text-sm text-muted-foreground">{q.subtitle}</p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              {q.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-muted-foreground">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </section>

    <section className="py-12 container mx-auto px-4 space-y-6 text-center">
      <h2 className="text-2xl font-bold">Share this radar with your team</h2>
      <ShareButtons shareUrl={`${SITE_URL}/tech-radar`} title="Gavite Tech Radar Q2 2026" className="justify-center" />
    </section>

    <section className="py-16 container mx-auto px-4">
      <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 p-8 md:p-12 text-center text-white space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          Want to know where YOUR business should be in 2031?
        </h2>
        <p className="text-white/90 max-w-2xl mx-auto">
          Book a free 30-min call with our team. We'll map your tech stack to what actually matters next.
        </p>
        <Button
          className="bg-white text-slate-900 hover:bg-white/90"
          onClick={() => window.location.assign("/contact")}
        >
          Book a Call <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </section>

    <section className="py-16 container mx-auto px-4">
      <NewsletterSignup />
    </section>
  </Layout>
);

export default TechRadar;
