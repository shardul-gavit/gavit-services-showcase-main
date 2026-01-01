import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Clock, ArrowLeft, Mail } from "lucide-react";

const ComingSoon = () => (
  <Layout>
    <Seo
      title="Coming Soon | Gavit E-Services"
      description="Job openings page coming soon. Check back later for exciting career opportunities at Gavit E-Services."
      canonical="https://www.gaviteservice.com/coming-soon"
      keywords={["career", "jobs", "coming soon", "Gavit E-Services"]}
    />

    <section className="min-h-[70vh] flex items-center justify-center py-16">
      <div className="container mx-auto px-4 text-center space-y-8">
        <div className="flex justify-center">
          <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-6">
            <Clock className="w-16 h-16 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
        
        <div className="space-y-4">
          <Badge variant="secondary" className="uppercase tracking-[0.3em]">
            Coming Soon
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold">Job Openings Coming Soon</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're working on something exciting! Our job openings page will be available soon. 
            Check back later for new career opportunities at Gavit E-Services.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600">
            <Link to="/career">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Career
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <a href="mailto:info@gaviteservices.com">
              <Mail className="mr-2 h-4 w-4" />
              Contact Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default ComingSoon;

