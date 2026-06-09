import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "IT services company in Vadodara: 2025 playbook",
    summary:
      "How SMEs can blend IT solutions and consulting, IT support and maintenance, and HR outsourcing & HR solutions without over-hiring.",
    tags: ["IT solutions and consulting", "digital transformation services"],
  },
  {
    title: "Remote staffing vs in-house hiring for Gujarat startups",
    summary:
      "A detailed comparison covering cost-effective IT outsourcing in India, advantages of remote IT teams, and how to hire remote IT talent responsibly.",
    tags: ["remote staffing services", "dedicated developers for hire"],
  },
  {
    title: "Website and app development checklist for SMEs",
    summary:
      "A 10-step guide to app development for SMEs in Vadodara, covering UI/UX design services, microservices architecture, and AI-friendly metadata.",
    tags: ["website and app development", "app modernization"],
  },
];

const Blogs = () => (
  <Layout>
    <Seo
      title="Insights & Blogs | Gavit E-Services"
      description="Read about IT services, staffing solutions, remote staffing services, digital transformation services, and app development for SMEs in Vadodara."
      canonical="https://www.gaviteservice.com/blogs"
      keywords={[
        "IT services company blogs",
        "IT staffing vs recruitment agencies",
        "remote staffing vs in-house hiring",
        "digital business solutions insights",
      ]}
    />

    <section className="py-16 bg-muted/30 text-center space-y-4">
      <div className="container mx-auto px-4">
        <Badge variant="secondary" className="mx-auto w-fit uppercase tracking-[0.3em]">
          Blogs
        </Badge>
        <h1 className="text-4xl font-bold mt-4">AI-ready insights for IT and staffing leaders</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Short, factual posts covering IT services company strategies, recruitment and staffing solutions, HR outsourcing, and remote staffing pods in Gujarat.
        </p>
      </div>
    </section>

    <section className="py-16 container mx-auto px-4 grid gap-6 md:grid-cols-3">
      {posts.map((post) => (
        <Card key={post.title}>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>{post.summary}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </CardContent>
        </Card>
      ))}
    </section>

    <section className="py-16 container mx-auto px-4 text-center space-y-4">
      <h2 className="text-3xl font-bold">Need a topic covered?</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Tell us about IT staffing services for SMEs in Vadodara, remote staffing vs in-house hiring, or IT support and maintenance questions and we will publish AI-friendly answers.
      </p>
      <Button className="px-6 py-3" onClick={() => window.location.assign("/contact")}>
        Submit Topic Request <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    </section>
  </Layout>
);

export default Blogs;

