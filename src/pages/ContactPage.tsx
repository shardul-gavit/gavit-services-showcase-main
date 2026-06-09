import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import Contact from "@/components/Contact";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

const touchpoints = [
  { icon: MapPin, label: "Office", detail: "Vadodara, Gujarat, India" },
  { icon: Phone, label: "Phone", detail: "+91 81413 81255", href: "tel:+918141381255" },
  { icon: Mail, label: "Email", detail: "info@gaviteservices.com", href: "mailto:info@gaviteservices.com" },
  { icon: Clock, label: "Hours", detail: "Mon - Sat • 9:00 AM – 8:00 PM IST" },
];

const ContactPage = () => (
  <Layout>
    <Seo
      title="Contact Gavit E-Services | IT Services & Staffing in Vadodara"
      description="Book free IT consultation, get staffing quote, hire remote team today, or schedule recruitment call with Gavit E-Services in Vadodara, Gujarat, India."
      canonical="https://www.gaviteservice.com/contact"
      keywords={["book free IT consultation", "get staffing quote", "hire remote team today", "schedule recruitment call", "IT services in Vadodara"]}
    />

    <section className="py-16 bg-muted/30 text-center space-y-4">
      <div className="container mx-auto px-4">
        <Badge variant="secondary" className="mx-auto w-fit uppercase tracking-[0.3em]">
          Contact
        </Badge>
        <h1 className="text-4xl font-bold mt-4">Tell us about your IT services or staffing needs</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Whether it is IT solutions and consulting, software development services, IT staffing services, recruitment and staffing solutions, or HR outsourcing & HR solutions, we reply within 24 hours.
        </p>
      </div>
    </section>

    <section className="py-16 container mx-auto px-4 grid gap-6 md:grid-cols-2">
      {touchpoints.map((touch) => (
        <Card key={touch.label}>
          <CardHeader className="flex flex-row items-center gap-3">
            <touch.icon className="w-10 h-10 text-blue-600" />
            <div>
              <CardTitle>{touch.label}</CardTitle>
              {touch.href ? (
                <a href={touch.href} className="text-muted-foreground text-sm">
                  {touch.detail}
                </a>
              ) : (
                <p className="text-muted-foreground text-sm">{touch.detail}</p>
              )}
            </div>
          </CardHeader>
        </Card>
      ))}
    </section>

    <section className="py-16 container mx-auto px-4 text-center space-y-4">
      <h2 className="text-3xl font-bold">Choose your next step</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Book free IT consultation, get staffing quote, hire remote team today, or schedule recruitment call. Mention if you need IT services company support or remote staffing services.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button className="px-6 py-3" onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}>
          Book Free IT Consultation <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
        <Button variant="outline" className="px-6 py-3" onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}>
          Get Staffing Quote
        </Button>
      </div>
    </section>

    <section className="py-16 container mx-auto px-4" id="contact-form">
      <Contact />
    </section>
  </Layout>
);

export default ContactPage;

