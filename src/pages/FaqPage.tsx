import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ALL_FAQ_ITEMS, FAQ_CATEGORIES, buildFaqPageSchema } from "@/data/faqContent";
import { SITE_URL } from "@/constants/seo";
import { ArrowRight, MessageCircle } from "lucide-react";

const CANONICAL = `${SITE_URL}/faq`;

const FaqPage = () => (
  <Layout>
    <Seo
      title="FAQ | Web Development, Staffing & ERP — Gavit E-Services"
      description="Answers about web development costs in India, hiring remote developers, ERP, GST billing, and working with Gavit E-Services in Vadodara, Gujarat."
      canonical={CANONICAL}
      keywords={[
        "web development company Vadodara FAQ",
        "hire Indian developers FAQ",
        "ERP small business India",
        "Gavit E-Services contact",
      ]}
    >
      <script type="application/ld+json">{JSON.stringify(buildFaqPageSchema(CANONICAL))}</script>
    </Seo>

    <section className="py-16 bg-muted/30 text-center space-y-4">
      <div className="container mx-auto px-4">
        <Badge variant="secondary" className="mx-auto w-fit uppercase tracking-[0.3em]">
          FAQ
        </Badge>
        <h1 className="text-4xl font-bold mt-4">Frequently Asked Questions</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Clear answers about web development, remote staffing, ERP, and working with Gavit E-Services —
          written the way you would ask an AI assistant.
        </p>
      </div>
    </section>

    <section className="py-16 container mx-auto px-4 max-w-3xl space-y-12">
      {FAQ_CATEGORIES.map((category) => (
        <div key={category.id} id={category.id} className="space-y-4 scroll-mt-24">
          <h2 className="text-2xl font-bold">{category.title}</h2>
          <div className="space-y-3">
            {category.items.map((item) => (
              <details
                key={item.question}
                className="group rounded-lg border bg-background open:shadow-sm"
              >
                <summary className="cursor-pointer list-none px-4 py-4 font-medium flex items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <span className="text-muted-foreground text-sm shrink-0 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="px-4 pb-4 text-muted-foreground text-sm leading-relaxed border-t pt-3">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      ))}
    </section>

    {/* Plain-text block for crawlers that skip accordion UI */}
    <section className="sr-only" aria-hidden="true">
      <h2>Full FAQ text index</h2>
      {ALL_FAQ_ITEMS.map((item) => (
        <article key={item.question}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </article>
      ))}
    </section>

    <section className="py-16 container mx-auto px-4 text-center space-y-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Still have questions?</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap justify-center gap-4">
          <Button asChild>
            <Link to="/contact">
              Contact Gavit E-Services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://wa.me/918141381255" target="_blank" rel="noreferrer">
              <MessageCircle className="mr-2 w-4 h-4" />
              WhatsApp Us
            </a>
          </Button>
        </CardContent>
      </Card>
    </section>
  </Layout>
);

export default FaqPage;
