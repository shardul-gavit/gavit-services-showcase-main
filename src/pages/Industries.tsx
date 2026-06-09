import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const industries = [
  { name: "Manufacturing", detail: "ERP, inventory, and production billing for factories and job-work units." },
  { name: "Retail", detail: "POS, GST billing, and e-commerce integrations for stores and chains." },
  { name: "Healthcare", detail: "Patient billing, appointment systems, and compliant record workflows." },
  { name: "Legal", detail: "Case management, time billing, and document automation for law firms." },
  { name: "Real Estate", detail: "Lead management, commission tracking, and property billing systems." },
  { name: "E-Commerce", detail: "Custom storefronts, order management, and fulfillment integrations." },
];

const Industries = () => (
  <Layout>
    <Seo
      title="Industries We Serve | VA, ERP & Software — Gavit E-Services"
      description="Custom software, ERP, VA, and billing solutions for manufacturing, retail, healthcare, legal, real estate, and e-commerce."
      canonical="https://www.gaviteservice.com/industries"
      keywords={["ERP manufacturing India", "billing software retail", "custom software healthcare"]}
    />
    <section className="py-16 bg-muted/30 text-center space-y-4">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold">Industries We Serve</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Sector-specific VA, ERP, AI, and software solutions from Vadodara, India — for local and global clients.
        </p>
      </div>
    </section>
    <section className="py-16 container mx-auto px-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {industries.map((industry) => (
        <Card key={industry.name}>
          <CardHeader>
            <CardTitle>{industry.name}</CardTitle>
            <CardDescription>{industry.detail}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </section>
    <section className="py-16 container mx-auto px-4 text-center space-y-4">
      <Button onClick={() => window.location.assign("/contact")}>
        Discuss Your Industry Needs <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    </section>
  </Layout>
);

export default Industries;
