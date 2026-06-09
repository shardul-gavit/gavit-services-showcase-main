import { useParams } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { locations } from "@/data/locations";

const LocationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = slug ? locations[slug] : undefined;

  if (!location) {
    return <NotFound />;
  }

  return (
    <Layout>
      <Seo
        title={location.title}
        description={location.description}
        canonical={location.canonical}
        keywords={location.keywords}
      />

      <section className="py-16 bg-muted/30 text-center space-y-4">
        <div className="container mx-auto px-4">
          <Badge variant="secondary" className="mx-auto w-fit uppercase tracking-[0.3em]">
            {location.badge}
          </Badge>
          <h1 className="text-4xl font-bold mt-4">{location.h1}</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">{location.hook}</p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>The challenge</CardTitle>
            <CardDescription className="text-base text-foreground">{location.pain}</CardDescription>
          </CardHeader>
        </Card>
        {location.timezone && (
          <Card>
            <CardHeader>
              <CardTitle>Timezone advantage</CardTitle>
              <CardDescription className="text-base text-foreground">{location.timezone}</CardDescription>
            </CardHeader>
          </Card>
        )}
      </section>

      <section className="py-16 bg-white text-slate-900">
        <div className="container mx-auto px-4 space-y-8">
          <div className="text-center space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Why Gavit</p>
            <h2 className="text-3xl font-bold">What you get</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3 max-w-4xl mx-auto">
            {location.benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Services</p>
          <h2 className="text-3xl font-bold">Available for {location.badge}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {location.services.map((service) => (
              <span key={service} className="px-4 py-2 rounded-full border text-sm bg-background">
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 text-center space-y-4">
        <h2 className="text-3xl font-bold">Start in 48 hours</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          HQ in Vadodara, Gujarat — serving {location.badge} and worldwide. Book a free consultation today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="px-6 py-3" onClick={() => window.location.assign("/contact")}>
            Hire Your VA or Dev Team <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button variant="outline" className="px-6 py-3" onClick={() => window.location.assign("/services")}>
            View All Services
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default LocationPage;
