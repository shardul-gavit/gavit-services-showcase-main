import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/OptimizedImage";
import EnrollmentForm from "@/components/EnrollmentForm";
import { Briefcase, Calculator, FileText, Users, TrendingUp, CheckCircle2, ArrowRight, DollarSign, BookOpen, MessageSquare } from "lucide-react";

const HrCertification = () => {
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);

  return (
    <Layout>
    <Seo
      title="HR Certification Programs | Gavit E-Services"
      description="Explore our HR certification programs including Payroll Management, Statutory Compliance, HR Outsourcing, Recruitment, and Performance Appraisal training."
      canonical="https://www.gaviteservice.com/hr-certification"
      keywords={["HR certification", "payroll management", "statutory compliance", "HR training", "recruitment training", "HR analytics"]}
    />

    <section className="py-16 bg-muted/30 text-center space-y-4">
      <div className="container mx-auto px-4">
        <Badge variant="secondary" className="mx-auto w-fit uppercase tracking-[0.3em]">
          HR Certification Programs
        </Badge>
        <h1 className="text-4xl font-bold mt-4">HR Certification Programs</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive HR training programs with practical hands-on experience and industry-recognized certifications
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4 space-y-12">
        {/* HR CERTIFICATION PROGRAMS Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">HR CERTIFICATION PROGRAMS</h2>
          
          <div className="space-y-8">
            {/* Payroll Management Certification */}
            <Card className="border-2 overflow-hidden">
              <div className="relative h-48 w-full">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
                  alt="Payroll Management Certification"
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 100vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3">
                    <Calculator className="w-8 h-8 text-white" />
                    <div>
                      <CardTitle className="text-2xl text-white">Payroll Management Certification</CardTitle>
                      <CardDescription className="text-base mt-1 text-white/90">Comprehensive training on Indian payroll systems and salary processing</CardDescription>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="space-y-6 pt-6">
                <div>
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    What You Will Learn:
                  </h3>
                  <div className="grid gap-3 md:grid-cols-2 ml-7">
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Salary structure & CTC breakup</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Payroll processing cycle</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>PF, ESIC, PT & Gratuity calculations</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Leave, attendance & arrears handling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Payslip generation & compliance reports</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Payroll software & Excel-based payroll</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-purple-600" />
                    Career Roles:
                  </h3>
                  <p className="text-muted-foreground ml-7">Payroll Executive | HR Executive | HR Operations Officer</p>
                </div>
              </CardContent>
            </Card>

            {/* Statutory Compliance & Labor Laws */}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <OptimizedImage
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80"
                    alt="Statutory Compliance & Labor Laws"
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <FileText className="w-8 h-8 text-emerald-600" />
                      <CardTitle className="text-2xl">Statutory Compliance & Labor Laws</CardTitle>
                    </div>
                    <CardDescription className="text-base mt-1">Practical understanding of Indian labor laws & compliance filing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Modules Covered:</h3>
                        <ul className="space-y-2 text-muted-foreground ml-4">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                            <span>EPF Act, ESIC Act, Payment of Wages Act</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                            <span>Bonus, Gratuity & Minimum Wages Act</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                            <span>Shops & Establishment Act</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                            <span>Compliance calendar & documentation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                            <span>Government portal handling (EPFO, ESIC)</span>
                          </li>
                        </ul>
                      </div>
                      <div className="pt-4 border-t">
                        <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-purple-600" />
                          Career Roles:
                        </h3>
                        <p className="text-muted-foreground ml-7">Compliance Officer | HR Compliance Executive</p>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>

            {/* HR Outsourcing & Shared Services */}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="order-2 md:order-1">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Users className="w-8 h-8 text-orange-600" />
                      <CardTitle className="text-2xl">HR Outsourcing & Shared Services</CardTitle>
                    </div>
                    <CardDescription className="text-base mt-1">Learn how HR services are delivered to multiple clients</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h3 className="font-semibold text-lg mb-3">Topics Included:</h3>
                      <ul className="space-y-2 text-muted-foreground ml-4">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>HR outsourcing models</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Payroll & compliance outsourcing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Vendor & client coordination</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>SLA management & reporting</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>HR documentation & audits</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </div>
                <div className="relative h-64 md:h-auto order-1 md:order-2">
                  <OptimizedImage
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
                    alt="HR Outsourcing & Shared Services"
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </Card>

            {/* Recruitment & Talent Acquisition */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-blue-600" />
                  <CardTitle className="text-2xl">Recruitment & Talent Acquisition</CardTitle>
                </div>
                <CardDescription className="text-base mt-1">End-to-end recruitment lifecycle training</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Job analysis & job description</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Sourcing through portals & LinkedIn</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Resume screening & interview coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Offer rollout & onboarding process</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Performance Appraisal & HR Analytics */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                  <CardTitle className="text-2xl">Performance Appraisal & HR Analytics</CardTitle>
                </div>
                <CardDescription className="text-base mt-1">Modern HR performance systems</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>KRA & KPI setting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Appraisal methods & rating systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>HR dashboards & analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Attrition & productivity analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FINANCE & ACCOUNTING CERTIFICATION PROGRAMS Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">💰 FINANCE & ACCOUNTING CERTIFICATION PROGRAMS</h2>
          
          <div className="space-y-8">
            {/* Tally Prime with GST */}
            <Card className="border-2 overflow-hidden">
              <div className="relative h-48 w-full">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80"
                  alt="Tally Prime with GST"
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 100vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-8 h-8 text-white" />
                    <div>
                      <CardTitle className="text-2xl text-white">Tally Prime with GST</CardTitle>
                      <CardDescription className="text-base mt-1 text-white/90">Hands-on accounting & taxation training</CardDescription>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="pt-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Modules:</h3>
                  <div className="grid gap-2 md:grid-cols-2 ml-4">
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>Company creation & accounting entries</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>GST configuration & returns</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>Inventory & ledger management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>Balance sheet & profit & loss</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>Practical GST filing cases</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Income Tax & GST Practical Filing */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <FileText className="w-8 h-8 text-emerald-600" />
                  <CardTitle className="text-2xl">Income Tax & GST Practical Filing</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Direct & indirect tax overview</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>ITR filing process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>GST returns (GSTR-1, GSTR-3B)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Tax computation & compliance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Financial Accounting & MIS Reporting */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                  <CardTitle className="text-2xl">Financial Accounting & MIS Reporting</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Financial statements preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>MIS & management reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Budgeting & forecasting basics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Excel-based finance reports</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* SOFT SKILLS & PROFESSIONAL DEVELOPMENT Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">🧠 SOFT SKILLS & PROFESSIONAL DEVELOPMENT</h2>
          
          <div className="space-y-8">
            {/* Advanced Excel */}
            <Card className="border-2 overflow-hidden">
              <div className="relative h-48 w-full">
                <OptimizedImage
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                  alt="Advanced Excel"
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 100vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-8 h-8 text-white" />
                    <div>
                      <CardTitle className="text-2xl text-white">Advanced Excel (Beginner to Advanced)</CardTitle>
                      <CardDescription className="text-base mt-1 text-white/90">Most in-demand corporate skill</CardDescription>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="pt-6">
                <div className="grid gap-2 md:grid-cols-2 ml-4">
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Formulas & functions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>VLOOKUP, XLOOKUP</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Pivot tables & dashboards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>Data validation & automation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span>HR & finance practical cases</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Business Communication & Email Writing */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-8 h-8 text-purple-600" />
                  <CardTitle className="text-2xl">Business Communication & Email Writing</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Corporate email formats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Client & internal communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Professional documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Workplace etiquette</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Interview Skills & Corporate Etiquette */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-blue-600" />
                  <CardTitle className="text-2xl">Interview Skills & Corporate Etiquette</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Resume building</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>HR & technical interview prep</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Body language & confidence building</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Mock interviews</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Presentation & Public Speaking */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                  <CardTitle className="text-2xl">Presentation & Public Speaking</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>PowerPoint design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Storytelling techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Corporate presentation skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Stage confidence</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold">Ready to Start Your HR Journey?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Join our HR certification programs and gain practical skills with real-world training.
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

export default HrCertification;

