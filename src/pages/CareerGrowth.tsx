import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { TrendingUp, GraduationCap, Target, Award, ArrowLeft, CheckCircle2 } from "lucide-react";

const CareerGrowth = () => (
  <Layout>
    <Seo
      title="Career Growth | Gavit E-Services"
      description="Explore career growth opportunities at Gavit E-Services. Continuous learning and clear career progression paths for professional development."
      canonical="https://www.gaviteservice.com/career-growth"
      keywords={["career growth", "professional development", "career progression", "Gavit E-Services"]}
    />

    <section className="py-16 bg-muted/30 text-center space-y-4">
      <div className="container mx-auto px-4">
        <Badge variant="secondary" className="mx-auto w-fit uppercase tracking-[0.3em]">
          Career Growth
        </Badge>
        <h1 className="text-4xl font-bold mt-4">Career Growth & Development</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Continuous learning opportunities and clear career progression paths to help you achieve your professional goals.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4 space-y-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <GraduationCap className="w-10 h-10 mb-3 text-blue-600" />
              <CardTitle>Learning Programs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Access to online courses, workshops, and certification programs to enhance your skills.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Target className="w-10 h-10 mb-3 text-purple-600" />
              <CardTitle>Goal Setting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Regular performance reviews and goal-setting sessions to track your progress and plan your career path.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <TrendingUp className="w-10 h-10 mb-3 text-emerald-600" />
              <CardTitle>Career Progression</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Clear promotion paths and opportunities to advance within the organization based on performance.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Award className="w-10 h-10 mb-3 text-orange-600" />
              <CardTitle>Recognition</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Employee recognition programs and awards for outstanding performance and contributions.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Career Progression Paths</h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">Entry Level</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Junior Developer / Associate</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Trainee / Intern</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Support Specialist</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">Mid Level</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Senior Developer</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Team Lead</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Project Manager</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">Senior Level</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Technical Architect</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Department Head</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Director / VP</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-950 dark:to-blue-950 rounded-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold text-center">Development Opportunities</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Technical Training</p>
                  <p className="text-sm text-muted-foreground">Regular workshops on new technologies and best practices</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Mentorship Program</p>
                  <p className="text-sm text-muted-foreground">Guidance from experienced professionals</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Certification Support</p>
                  <p className="text-sm text-muted-foreground">Financial assistance for professional certifications</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Conference Attendance</p>
                  <p className="text-sm text-muted-foreground">Opportunities to attend industry conferences and events</p>
                </div>
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

export default CareerGrowth;

