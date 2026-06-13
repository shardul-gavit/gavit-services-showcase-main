import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, LucideIcon } from "lucide-react";
import { PRIMARY_CTA_LABEL } from "@/constants/cta";

type Highlight = { title: string; detail: string };
type Capability = { icon: LucideIcon; title: string; detail: string };
type Faq = { q: string; a: string };
type PricingTier = { name: string; price: string; features: string[] };

type ServicePageLayoutProps = {
  badge: string;
  h1: string;
  description: string;
  highlights: Highlight[];
  capabilitiesTitle: string;
  capabilitiesSubtitle: string;
  capabilities: Capability[];
  process: string[];
  processTitle?: string;
  industries?: string[];
  pricing?: PricingTier[];
  faqs: Faq[];
  ctaTitle: string;
  ctaDescription: string;
  primaryCta?: string;
  secondaryCta?: string;
  primaryCtaLink?: string;
};

export const ServicePageLayout = ({
  badge,
  h1,
  description,
  highlights,
  capabilitiesTitle,
  capabilitiesSubtitle,
  capabilities,
  process,
  processTitle = "From discovery to delivery",
  industries,
  pricing,
  faqs,
  ctaTitle,
  ctaDescription,
  primaryCta = PRIMARY_CTA_LABEL,
  secondaryCta = "View Services",
  primaryCtaLink = "/contact",
}: ServicePageLayoutProps) => (
  <>
    <section className="py-16 bg-muted/30 text-center space-y-4">
      <div className="container mx-auto px-4">
        <Badge variant="secondary" className="mx-auto w-fit uppercase tracking-[0.3em]">
          {badge}
        </Badge>
        <h1 className="text-4xl font-bold mt-4">{h1}</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">{description}</p>
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
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{capabilitiesTitle}</p>
          <h2 className="text-3xl font-bold">{capabilitiesSubtitle}</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {capabilities.map((item) => (
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

    {industries && industries.length > 0 && (
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Industries</p>
          <h2 className="text-3xl font-bold">Built for your sector</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <span key={industry} className="px-4 py-2 rounded-full border text-sm bg-background">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>
    )}

    <section className="py-16 container mx-auto px-4 space-y-6">
      <div className="text-center space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Process</p>
        <h2 className="text-3xl font-bold">{processTitle}</h2>
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

    {pricing && pricing.length > 0 && (
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 space-y-8">
          <div className="text-center space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Pricing</p>
            <h2 className="text-3xl font-bold">Plans that scale with you</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {pricing.map((tier) => (
              <Card key={tier.name}>
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <p className="text-2xl font-bold text-blue-600">{tier.price}</p>
                  <ul className="space-y-2 mt-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="text-sm text-muted-foreground">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )}

    <section className="py-16 container mx-auto px-4 space-y-6">
      <div className="text-center space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">FAQ</p>
        <h2 className="text-3xl font-bold">Common questions</h2>
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
      <h2 className="text-3xl font-bold">{ctaTitle}</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">{ctaDescription}</p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button className="px-6 py-3" onClick={() => window.location.assign(primaryCtaLink)}>
          {primaryCta} <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
        <Button variant="outline" className="px-6 py-3" onClick={() => window.location.assign("/contact")}>
          {secondaryCta}
        </Button>
      </div>
    </section>
  </>
);
