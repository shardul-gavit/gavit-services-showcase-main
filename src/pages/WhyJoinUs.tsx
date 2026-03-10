import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Users, Code, TrendingUp, Shield, Heart, ArrowLeft, CheckCircle2 } from "lucide-react";

const WhyJoinUs = () => (
  <Layout>
    <Seo
      title="Why Join Us | Gavit E-Services"
      description="Discover why Gavit E-Services is the perfect place to grow your career. Work with cutting-edge technologies and be part of a dynamic team."
      canonical="https://www.gaviteservice.com/why-join-us"
      keywords={["career", "why join us", "company culture", "Gavit E-Services", "IT jobs"]}
    />

    <section className="py-16 bg-muted/30 text-center space-y-4">
      <div className="container mx-auto px-4">
        <Badge variant="secondary" className="mx-auto w-fit uppercase tracking-[0.3em]">
          Why Join Us
        </Badge>
        <h1 className="text-4xl font-bold mt-4">Why Join Gavit E-Services?</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Work with cutting-edge technologies, grow your skills, and be part of a dynamic team that's shaping the future of IT services.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4 space-y-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <Code className="w-10 h-10 mb-3 text-blue-600" />
              <CardTitle>Cutting-Edge Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Work with the latest technologies and frameworks. We stay ahead of industry trends and invest in modern tools and platforms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <TrendingUp className="w-10 h-10 mb-3 text-purple-600" />
              <CardTitle>Skill Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Continuous learning opportunities through training programs, workshops, and certifications to help you grow professionally.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="w-10 h-10 mb-3 text-emerald-600" />
              <CardTitle>Dynamic Team</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Collaborate with talented professionals in a supportive and inclusive environment that values innovation and creativity.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="w-10 h-10 mb-3 text-orange-600" />
              <CardTitle>Work-Life Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We believe in maintaining a healthy work-life balance with flexible working hours and remote work options.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Heart className="w-10 h-10 mb-3 text-pink-600" />
              <CardTitle>Competitive Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Attractive compensation packages, health insurance, and performance-based bonuses to reward your contributions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <TrendingUp className="w-10 h-10 mb-3 text-blue-600" />
              <CardTitle>Growth Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Clear career progression paths with opportunities to take on leadership roles and work on challenging projects.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold text-center">What Our Team Says</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  "Great learning environment with supportive colleagues and exciting projects."
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  "Opportunities to work on diverse projects and expand technical skills."
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  "Flexible work culture that respects work-life balance."
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  "Management is approachable and values employee feedback."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <Button asChild variant="outline">
            <Link to="/career">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Career
            </Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default WhyJoinUs;

