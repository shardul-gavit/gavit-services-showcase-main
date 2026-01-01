import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Briefcase, ArrowRight, Users, TrendingUp } from "lucide-react";

const Career = () => (
  <Layout>
    <Seo
      title="Career at Gavit E-Services | Join Our Team"
      description="Explore career opportunities at Gavit E-Services. Join our team of IT professionals in Vadodara, Gujarat, India."
      canonical="https://www.gaviteservice.com/career"
      keywords={["career", "jobs", "IT jobs", "Vadodara jobs", "Gavit E-Services careers"]}
    />

    <section className="py-16 bg-muted/30 text-center space-y-4">
      <div className="container mx-auto px-4">
        <Badge variant="secondary" className="mx-auto w-fit uppercase tracking-[0.3em]">
          Career
        </Badge>
        <h1 className="text-4xl font-bold mt-4">Join Our Team</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Build your career with Gavit E-Services and be part of a growing IT services company in Vadodara, Gujarat.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <Briefcase className="w-8 h-8 mb-2 text-blue-600" />
              <CardTitle>Open Positions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Explore current job openings across IT services, development, and staffing roles.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/coming-soon">
                  View Openings <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="w-8 h-8 mb-2 text-purple-600" />
              <CardTitle>Why Join Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Work with cutting-edge technologies, grow your skills, and be part of a dynamic team.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/why-join-us">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <TrendingUp className="w-8 h-8 mb-2 text-emerald-600" />
              <CardTitle>Career Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Continuous learning opportunities and clear career progression paths.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/career-growth">
                  Explore <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  </Layout>
);

export default Career;

