import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/OptimizedImage";
import EnrollmentForm from "@/components/EnrollmentForm";
import { Code, Globe, Database, TrendingUp, Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";

const TechnicalCertification = () => {
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);

  return (
    <Layout>
    <Seo
      title="Technical Certification Programs | Gavit E-Services"
      description="Explore our technical certification programs including Full Stack Web Development, Frontend Developer Program, Backend Developer Program, and Digital Marketing Certification."
      canonical="https://www.gaviteservice.com/technical-certification"
      keywords={["technical certification", "web development training", "full stack development", "frontend developer", "backend developer", "digital marketing certification"]}
    />

    <section className="py-16 bg-muted/30 text-center space-y-4">
      <div className="container mx-auto px-4">
        <Badge variant="secondary" className="mx-auto w-fit uppercase tracking-[0.3em]">
          Technical Certification Programs
        </Badge>
        <h1 className="text-4xl font-bold mt-4">Technical Certification Programs</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive training programs with live projects and industry-recognized certifications
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4 space-y-8">
        {/* Full Stack Web Development */}
        <Card className="border-2 overflow-hidden">
          <div className="relative h-48 w-full">
            <OptimizedImage
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80"
              alt="Full Stack Web Development"
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-3">
                <Code className="w-8 h-8 text-white" />
                <div>
                  <CardTitle className="text-2xl text-white">Full Stack Web Development</CardTitle>
                  <CardDescription className="text-base mt-1 text-white/90">Live development training with real projects</CardDescription>
                </div>
              </div>
            </div>
          </div>
          <CardContent className="space-y-6 pt-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Frontend:
                </h3>
                <ul className="space-y-2 text-muted-foreground ml-7">
                  <li>• HTML, CSS, JavaScript</li>
                  <li>• React.js</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Backend:
                </h3>
                <ul className="space-y-2 text-muted-foreground ml-7">
                  <li>• Node.js / PHP</li>
                  <li>• REST APIs</li>
                  <li>• Database (MySQL / MongoDB)</li>
                </ul>
              </div>
            </div>
            <div className="pt-4 border-t">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Project:
              </h3>
              <p className="text-muted-foreground ml-7">Live website or web application</p>
            </div>
          </CardContent>
        </Card>

        {/* Frontend Developer Program */}
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80"
                alt="Frontend Developer Program"
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Globe className="w-8 h-8 text-purple-600" />
                  <CardTitle className="text-2xl">Frontend Developer Program</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Responsive web design</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>UI/UX fundamentals</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>JavaScript & React</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Portfolio creation</span>
              </li>
            </ul>
              </CardContent>
            </div>
          </div>
        </Card>

        {/* Backend Developer Program */}
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="order-2 md:order-1">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Database className="w-8 h-8 text-emerald-600" />
                  <CardTitle className="text-2xl">Backend Developer Program</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Server-side logic</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>API development</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Authentication & security</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Database management</span>
              </li>
            </ul>
              </CardContent>
            </div>
            <div className="relative h-64 md:h-auto order-1 md:order-2">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
                alt="Backend Developer Program"
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </Card>

        {/* Digital Marketing Certification */}
        <Card className="overflow-hidden">
          <div className="relative h-48 w-full">
            <OptimizedImage
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
              alt="Digital Marketing Certification"
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-white" />
                <div>
                  <CardTitle className="text-2xl text-white">Digital Marketing Certification</CardTitle>
                  <CardDescription className="text-base mt-1 text-white/90">Result-driven marketing training</CardDescription>
                </div>
              </div>
            </div>
          </div>
          <CardContent className="pt-6">
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Search Engine Optimization (SEO)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Social Media Marketing (SMM)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Google Ads & Analytics</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Content & brand strategy</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Live campaign execution</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* LIVE PROJECT & INTERNSHIP PROGRAM */}
        <Card className="border-2 border-blue-500 bg-blue-50/50 dark:bg-blue-950/20 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Live Project & Internship Program"
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-transparent" />
            </div>
            <div>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Briefcase className="w-8 h-8 text-blue-600" />
                  <div>
                    <CardTitle className="text-2xl">🧪 LIVE PROJECT & INTERNSHIP PROGRAM</CardTitle>
                    <CardDescription className="text-base mt-1">Final-year students can complete academic projects with Gavit E-Services</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Features:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Real-time industry projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Mentor-guided development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Project documentation & viva support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Internship + experience certificate</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Resume & portfolio building</span>
                </li>
              </ul>
            </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>

    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold">Ready to Start Your Journey?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Join our technical certification programs and gain hands-on experience with real-world projects.
        </p>
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          onClick={() => setEnrollmentOpen(true)}
        >
          Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>

    <EnrollmentForm open={enrollmentOpen} onOpenChange={setEnrollmentOpen} />
  </Layout>
  );
};

export default TechnicalCertification;

