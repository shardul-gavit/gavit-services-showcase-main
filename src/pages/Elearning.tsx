import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import EnrollmentForm from "@/components/EnrollmentForm";
import { Code, ArrowRight, GraduationCap, Users } from "lucide-react";

const Elearning = () => {
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);

  return (
    <Layout>
    <Seo
      title="E-Learning at Gavit E-Services | Online Courses & Training"
      description="Access comprehensive e-learning courses and training programs from Gavit E-Services. Enhance your IT skills with our online learning platform."
      canonical="https://www.gaviteservice.com/elearning"
      keywords={["e-learning", "online courses", "IT training", "online learning", "skill development"]}
    />

    <section className="py-16 bg-muted/30 text-center space-y-4">
      <div className="container mx-auto px-4">
        <Badge variant="secondary" className="mx-auto w-fit uppercase tracking-[0.3em]">
          E-Learning
        </Badge>
        <h1 className="text-4xl font-bold mt-4">Enhance Your Skills</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Access comprehensive online courses and training programs to advance your IT career.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <Code className="w-8 h-8 mb-2 text-blue-600" />
              <CardTitle>Technical</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Browse our library of IT courses covering web development, cloud services, and more.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/technical-certification">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="w-8 h-8 mb-2 text-purple-600" />
              <CardTitle>Non Technical</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Learn at your own pace with our comprehensive video tutorials and hands-on projects.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/hr-certification">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <GraduationCap className="w-8 h-8 mb-2 text-emerald-600" />
              <CardTitle>CERTIFICATION & CAREER SUPPORT</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Earn industry-recognized certificates upon completion of our training programs.
              </p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setEnrollmentOpen(true)}
              >
                Enrollment Form <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <EnrollmentForm open={enrollmentOpen} onOpenChange={setEnrollmentOpen} />
  </Layout>
  );
};

export default Elearning;

