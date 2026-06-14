import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => (
  <Layout>
    <Seo
      title="Pricing | VA, ERP, Software & GST Billing — Gavit E-Services"
      description="Transparent pricing for VA services, custom software, ERP, AI development, and GST billing software. Free GST plan available."
      canonical="https://gaviteservice.com/pricing"
      keywords={["affordable ERP India", "GST billing software pricing", "virtual assistant pricing India"]}
    />
    <section className="py-16 bg-muted/30 text-center space-y-4">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold">Simple, Transparent Pricing</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          From free GST billing to enterprise ERP — plans that scale with your business.
        </p>
      </div>
    </section>
    <section className="py-16 container mx-auto px-4 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {[
        { name: "GST Billing — Free", price: "₹0/mo", note: "50 invoices/month" },
        { name: "GST Billing — Starter", price: "₹499/mo", note: "500 invoices/month" },
        { name: "GST Billing — Business", price: "₹999/mo", note: "Unlimited invoices" },
        { name: "VA & Dev Teams", price: "From $8–15/hr", note: "Custom scopes" },
        { name: "Custom Software", price: "Project-based", note: "Fixed or T&M" },
        { name: "ERP Development", price: "From ₹3L+", note: "Phased delivery" },
        { name: "AI Software", price: "From ₹2L+", note: "Prototype to production" },
        { name: "IT Consultancy", price: "Hourly / Retainer", note: "Virtual CIO model" },
      ].map((tier) => (
        <Card key={tier.name}>
          <CardHeader>
            <CardTitle className="text-lg">{tier.name}</CardTitle>
            <p className="text-2xl font-bold text-blue-600">{tier.price}</p>
            <p className="text-sm text-muted-foreground">{tier.note}</p>
          </CardHeader>
        </Card>
      ))}
    </section>
    <section className="py-16 container mx-auto px-4 text-center space-y-4">
      <div className="flex flex-wrap justify-center gap-4">
        <Button asChild>
          <Link to="/gst-billing-software">Try GST Billing Free <ArrowRight className="ml-2 w-4 h-4" /></Link>
        </Button>
        <Button variant="outline" onClick={() => window.location.assign("/contact")}>
          Get Custom Quote
        </Button>
      </div>
    </section>
  </Layout>
);

export default Pricing;
