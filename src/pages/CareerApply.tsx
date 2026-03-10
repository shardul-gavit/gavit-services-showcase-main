import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, FileUp, Loader2 } from "lucide-react";
import {
  validateEmail,
  validatePhone,
  validateName,
  sanitizeInput,
  validateFormData,
  RateLimiter,
} from "@/utils/security";

const API_ENDPOINT = "/api/career-apply";

const INTERNSHIP_DEPARTMENTS = [
  "Human Resources",
  "Digital Marketing",
  "Web Development",
  "App Development",
  "SEO / SMM",
] as const;

type PositionType = "internship" | "bda";

interface FormData {
  positionType: PositionType;
  preferredDepartments: string[];
  departmentOther: string;
  fullName: string;
  email: string;
  mobile: string;
  currentCity: string;
  linkedIn: string;
  portfolio: string;
  highestQualification: string;
  degreeCourse: string;
  collegeUniversity: string;
  yearPassing: string;
  keySkills: string;
  technicalSkills: string;
  hasExperience: string;
  experienceDetails: string;
  hasSalesExperience: string;
  whyJoinBDA: string;
  careerGoals: string;
  availableStartDate: string;
  preferredDuration: string;
  workPreference: string;
  declaration: boolean;
  applicantName: string;
  declarationDate: string;
}

const initialFormData: FormData = {
  positionType: "internship",
  preferredDepartments: [],
  departmentOther: "",
  fullName: "",
  email: "",
  mobile: "",
  currentCity: "",
  linkedIn: "",
  portfolio: "",
  highestQualification: "",
  degreeCourse: "",
  collegeUniversity: "",
  yearPassing: "",
  keySkills: "",
  technicalSkills: "",
  hasExperience: "",
  experienceDetails: "",
  hasSalesExperience: "",
  whyJoinBDA: "",
  careerGoals: "",
  availableStartDate: "",
  preferredDuration: "",
  workPreference: "",
  declaration: false,
  applicantName: "",
  declarationDate: new Date().toISOString().split("T")[0],
};

const MAX_RESUME_SIZE_MB = 2;
const ACCEPTED_RESUME_TYPES = [".pdf", ".doc", ".docx"];

const CareerApply = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeBase64, setResumeBase64] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const rateLimiter = useState(() => new RateLimiter("career_apply", 3, 60000))[0];

  const update = (field: keyof FormData, value: string | string[] | boolean) => {
    if (typeof value === "string") {
      let sanitized = value.replace(/<[^>]*>/g, "").replace(/javascript:/gi, "").replace(/on\w+\s*=/gi, "").replace(/[<>'"&]/g, "");
      value = sanitized;
    }
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError("");
  };

  const toggleDepartment = (dept: string) => {
    setFormData((prev) => ({
      ...prev,
      preferredDepartments: prev.preferredDepartments.includes(dept)
        ? prev.preferredDepartments.filter((d) => d !== dept)
        : [...prev.preferredDepartments, dept],
    }));
    setError("");
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setResumeFile(null);
      setResumeBase64(null);
      return;
    }
    const ext = "." + file.name.split(".").pop()?.toLowerCase();
    if (!ACCEPTED_RESUME_TYPES.includes(ext)) {
      setError("Please upload a PDF or DOC/DOCX file.");
      setResumeFile(null);
      setResumeBase64(null);
      return;
    }
    if (file.size > MAX_RESUME_SIZE_MB * 1024 * 1024) {
      setError(`Resume must be under ${MAX_RESUME_SIZE_MB}MB.`);
      setResumeFile(null);
      setResumeBase64(null);
      return;
    }
    setResumeFile(file);
    setError("");
    const reader = new FileReader();
    reader.onload = () => setResumeBase64((reader.result as string) || null);
    reader.readAsDataURL(file);
  };

  const validate = (): boolean => {
    if (!formData.fullName?.trim()) {
      setError("Please enter your full name.");
      return false;
    }
    const nameCheck = validateName(formData.fullName);
    if (!nameCheck.valid) {
      setError("Please enter a valid full name (2-200 characters).");
      return false;
    }
    if (!formData.email?.trim()) {
      setError("Please enter your email address.");
      return false;
    }
    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (!formData.mobile?.trim()) {
      setError("Please enter your mobile number.");
      return false;
    }
    if (!validatePhone(formData.mobile)) {
      setError("Please enter a valid 10-digit Indian mobile number.");
      return false;
    }
    if (formData.positionType === "internship" && formData.preferredDepartments.length === 0 && !formData.departmentOther?.trim()) {
      setError("Please select at least one preferred department or specify Other.");
      return false;
    }
    if (!formData.highestQualification?.trim()) {
      setError("Please enter your highest qualification.");
      return false;
    }
    if (!formData.degreeCourse?.trim()) {
      setError("Please enter your degree/course.");
      return false;
    }
    if (!formData.collegeUniversity?.trim()) {
      setError("Please enter your college/university.");
      return false;
    }
    if (!formData.yearPassing?.trim()) {
      setError("Please enter year of passing or current year.");
      return false;
    }
    if (!formData.hasExperience) {
      setError("Please indicate if you have previous work or internship experience.");
      return false;
    }
    if (formData.positionType === "bda") {
      if (!formData.hasSalesExperience) {
        setError("Please indicate if you have experience in sales, lead generation, or business development.");
        return false;
      }
      if (!formData.whyJoinBDA?.trim()) {
        setError("Please tell us why you want to join as a Business Development Associate.");
        return false;
      }
    }
    if (formData.positionType === "internship" && !formData.careerGoals?.trim()) {
      setError("Please describe your career goals and what you expect from this internship.");
      return false;
    }
    if (!formData.availableStartDate?.trim()) {
      setError("Please enter your available start date.");
      return false;
    }
    if (!formData.workPreference) {
      setError("Please select work preference (Remote / On-site / Hybrid).");
      return false;
    }
    if (!formData.declaration) {
      setError("Please accept the declaration to proceed.");
      return false;
    }
    if (!formData.applicantName?.trim()) {
      setError("Please enter your name in the declaration.");
      return false;
    }
    const toValidate: Record<string, string> = {
      fullName: formData.fullName,
      email: formData.email,
      keySkills: formData.keySkills,
      technicalSkills: formData.technicalSkills,
      experienceDetails: formData.experienceDetails,
      whyJoinBDA: formData.whyJoinBDA,
      careerGoals: formData.careerGoals,
    };
    const validation = validateFormData(toValidate);
    if (!validation.valid) {
      setError("Invalid characters detected. Please check your input.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!rateLimiter.canProceed()) {
      setError("Too many submissions. Please wait a minute before trying again.");
      return;
    }
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const payload = {
        positionType: formData.positionType,
        preferredDepartments:
          formData.positionType === "internship" ? formData.preferredDepartments : [],
        departmentOther:
          formData.positionType === "internship" && formData.departmentOther?.trim()
            ? sanitizeInput(formData.departmentOther)
            : null,
        fullName: sanitizeInput(formData.fullName),
        email: formData.email.toLowerCase().trim(),
        mobile: formData.mobile.replace(/\D/g, ""),
        currentCity: sanitizeInput(formData.currentCity),
        linkedIn: sanitizeInput(formData.linkedIn),
        portfolio: sanitizeInput(formData.portfolio),
        highestQualification: sanitizeInput(formData.highestQualification),
        degreeCourse: sanitizeInput(formData.degreeCourse),
        collegeUniversity: sanitizeInput(formData.collegeUniversity),
        yearPassing: sanitizeInput(formData.yearPassing),
        keySkills: sanitizeInput(formData.keySkills),
        technicalSkills: sanitizeInput(formData.technicalSkills),
        hasExperience: formData.hasExperience,
        experienceDetails: sanitizeInput(formData.experienceDetails),
        hasSalesExperience: formData.hasSalesExperience,
        whyJoinBDA: sanitizeInput(formData.whyJoinBDA),
        careerGoals: sanitizeInput(formData.careerGoals),
        availableStartDate: formData.availableStartDate,
        preferredDuration: sanitizeInput(formData.preferredDuration),
        workPreference: formData.workPreference,
        resumeFileName: resumeFile?.name || null,
        resumeBase64: resumeBase64 || null,
        declaration: formData.declaration,
        applicantName: sanitizeInput(formData.applicantName),
        declarationDate: formData.declarationDate,
        timestamp: new Date().toISOString(),
      };

      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit application");
      }

      setIsSuccess(true);
      setFormData(initialFormData);
      setResumeFile(null);
      setResumeBase64(null);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to submit. Please try again or contact us."
      );
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Layout>
        <Seo
          title="Application Submitted | Gavit E-Services"
          description="Your internship or BDA application has been submitted successfully."
        />
        <section className="min-h-[70vh] flex items-center justify-center py-16">
          <div className="container mx-auto px-4 text-center space-y-6">
            <div className="rounded-full bg-green-100 dark:bg-green-900 p-4 inline-flex">
              <CheckCircle2 className="w-14 h-14 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-3xl font-bold">Application Submitted</h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Thank you for applying. We will review your application and get back to you soon.
            </p>
            <Button asChild>
              <Link to="/career">Back to Career</Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <Seo
        title="Apply – Internship & BDA | Gavit E-Services"
        description="Apply for internship or Business Development Associate position at Gavit E-Services."
        canonical="https://www.gaviteservice.com/career/apply"
        keywords={["internship", "BDA", "career", "apply", "Gavit E-Services"]}
      />

      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild>
            <Link to="/career" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Career
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-8 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold">Application Form</h1>
            <p className="text-muted-foreground mt-2">
              Internship & Business Development Associate (BDA)
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {error && (
              <div className="rounded-lg bg-destructive/10 text-destructive px-4 py-3 text-sm">
                {error}
              </div>
            )}

            {/* 1. Position Details */}
            <Card>
              <CardHeader>
                <CardTitle>1. Position Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-base font-medium">Position Applying For</Label>
                  <RadioGroup
                    value={formData.positionType}
                    onValueChange={(v) => update("positionType", v as PositionType)}
                    className="flex gap-6 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="internship" id="pos-internship" />
                      <Label htmlFor="pos-internship" className="font-normal cursor-pointer">
                        Internship
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="bda" id="pos-bda" />
                      <Label htmlFor="pos-bda" className="font-normal cursor-pointer">
                        Business Development Associate (BDA)
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {formData.positionType === "internship" && (
                  <div>
                    <Label className="text-base font-medium">Preferred Department (For Internship)</Label>
                    <div className="flex flex-wrap gap-4 mt-2">
                      {INTERNSHIP_DEPARTMENTS.map((dept) => (
                        <div key={dept} className="flex items-center space-x-2">
                          <Checkbox
                            id={`dept-${dept}`}
                            checked={formData.preferredDepartments.includes(dept)}
                            onCheckedChange={() => toggleDepartment(dept)}
                          />
                          <Label htmlFor={`dept-${dept}`} className="font-normal cursor-pointer">
                            {dept}
                          </Label>
                        </div>
                      ))}
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="dept-other"
                          checked={formData.preferredDepartments.includes("Other") || !!formData.departmentOther}
                          onCheckedChange={(checked) => {
                            if (!checked) {
                              update("departmentOther", "");
                              setFormData((p) => ({
                                ...p,
                                preferredDepartments: p.preferredDepartments.filter((d) => d !== "Other"),
                              }));
                            } else {
                              setFormData((p) => ({
                                ...p,
                                preferredDepartments: [...p.preferredDepartments, "Other"],
                              }));
                            }
                          }}
                        />
                        <Label htmlFor="dept-other" className="font-normal cursor-pointer">
                          Other:
                        </Label>
                        <Input
                          placeholder="Specify"
                          className="w-32 h-8"
                          value={formData.departmentOther}
                          onChange={(e) => update("departmentOther", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 2. Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle>2. Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => update("fullName", e.target.value)}
                      placeholder="Full name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="email@example.com"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="mobile">Mobile Number *</Label>
                    <Input
                      id="mobile"
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) => update("mobile", e.target.value)}
                      placeholder="10-digit mobile"
                      className="mt-1"
                      maxLength={10}
                    />
                  </div>
                  <div>
                    <Label htmlFor="currentCity">Current City / Location</Label>
                    <Input
                      id="currentCity"
                      value={formData.currentCity}
                      onChange={(e) => update("currentCity", e.target.value)}
                      placeholder="City"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="linkedIn">LinkedIn Profile</Label>
                    <Input
                      id="linkedIn"
                      type="url"
                      value={formData.linkedIn}
                      onChange={(e) => update("linkedIn", e.target.value)}
                      placeholder="https://linkedin.com/in/..."
                      className="mt-1"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="portfolio">Portfolio / Website (if any)</Label>
                    <Input
                      id="portfolio"
                      type="url"
                      value={formData.portfolio}
                      onChange={(e) => update("portfolio", e.target.value)}
                      placeholder="https://..."
                      className="mt-1"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 3. Educational Background */}
            <Card>
              <CardHeader>
                <CardTitle>3. Educational Background</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="highestQualification">Highest Qualification *</Label>
                  <Input
                    id="highestQualification"
                    value={formData.highestQualification}
                    onChange={(e) => update("highestQualification", e.target.value)}
                    placeholder="e.g. Bachelor's, Master's"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="degreeCourse">Degree / Course *</Label>
                  <Input
                    id="degreeCourse"
                    value={formData.degreeCourse}
                    onChange={(e) => update("degreeCourse", e.target.value)}
                    placeholder="e.g. B.Tech, MBA"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="collegeUniversity">College / University *</Label>
                  <Input
                    id="collegeUniversity"
                    value={formData.collegeUniversity}
                    onChange={(e) => update("collegeUniversity", e.target.value)}
                    placeholder="College or university name"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="yearPassing">Year of Passing / Current Year *</Label>
                  <Input
                    id="yearPassing"
                    value={formData.yearPassing}
                    onChange={(e) => update("yearPassing", e.target.value)}
                    placeholder="e.g. 2024 or Final Year"
                    className="mt-1"
                  />
                </div>
              </CardContent>
            </Card>

            {/* 4. Skills & Expertise */}
            <Card>
              <CardHeader>
                <CardTitle>4. Skills & Expertise</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="keySkills">Key Skills</Label>
                  <Textarea
                    id="keySkills"
                    value={formData.keySkills}
                    onChange={(e) => update("keySkills", e.target.value)}
                    placeholder="e.g. Communication, Sales, HR Management, SEO, Web Development"
                    className="mt-1 min-h-[80px]"
                  />
                </div>
                <div>
                  <Label htmlFor="technicalSkills">Technical Skills (if applicable)</Label>
                  <Textarea
                    id="technicalSkills"
                    value={formData.technicalSkills}
                    onChange={(e) => update("technicalSkills", e.target.value)}
                    placeholder="List technical skills"
                    className="mt-1 min-h-[80px]"
                  />
                </div>
              </CardContent>
            </Card>

            {/* 5. Work / Internship Experience */}
            <Card>
              <CardHeader>
                <CardTitle>5. Work / Internship Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Do you have previous work or internship experience? *</Label>
                  <RadioGroup
                    value={formData.hasExperience}
                    onValueChange={(v) => update("hasExperience", v)}
                    className="flex gap-6 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="exp-yes" />
                      <Label htmlFor="exp-yes" className="font-normal cursor-pointer">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="exp-no" />
                      <Label htmlFor="exp-no" className="font-normal cursor-pointer">No</Label>
                    </div>
                  </RadioGroup>
                </div>
                {formData.hasExperience === "yes" && (
                  <div>
                    <Label htmlFor="experienceDetails">Please provide details</Label>
                    <Textarea
                      id="experienceDetails"
                      value={formData.experienceDetails}
                      onChange={(e) => update("experienceDetails", e.target.value)}
                      placeholder="Company, role, duration, key responsibilities"
                      className="mt-1 min-h-[100px]"
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 6. Role Specific Questions */}
            <Card>
              <CardHeader>
                <CardTitle>6. Role Specific Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {formData.positionType === "bda" && (
                  <>
                    <div>
                      <Label>Do you have experience in sales, lead generation, or business development? *</Label>
                      <RadioGroup
                        value={formData.hasSalesExperience}
                        onValueChange={(v) => update("hasSalesExperience", v)}
                        className="flex gap-6 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="sales-yes" />
                          <Label htmlFor="sales-yes" className="font-normal cursor-pointer">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="sales-no" />
                          <Label htmlFor="sales-no" className="font-normal cursor-pointer">No</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div>
                      <Label htmlFor="whyJoinBDA">Why do you want to join Gavit E-Services as a Business Development Associate? *</Label>
                      <Textarea
                        id="whyJoinBDA"
                        value={formData.whyJoinBDA}
                        onChange={(e) => update("whyJoinBDA", e.target.value)}
                        placeholder="Your answer"
                        className="mt-1 min-h-[100px]"
                      />
                    </div>
                  </>
                )}
                {formData.positionType === "internship" && (
                  <div>
                    <Label htmlFor="careerGoals">What are your career goals and what do you expect from this internship? *</Label>
                    <Textarea
                      id="careerGoals"
                      value={formData.careerGoals}
                      onChange={(e) => update("careerGoals", e.target.value)}
                      placeholder="Your goals and expectations"
                      className="mt-1 min-h-[100px]"
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 7. Availability */}
            <Card>
              <CardHeader>
                <CardTitle>7. Availability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="availableStartDate">Available Start Date *</Label>
                    <Input
                      id="availableStartDate"
                      type="date"
                      value={formData.availableStartDate}
                      onChange={(e) => update("availableStartDate", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="preferredDuration">Preferred Internship Duration</Label>
                    <Input
                      id="preferredDuration"
                      value={formData.preferredDuration}
                      onChange={(e) => update("preferredDuration", e.target.value)}
                      placeholder="e.g. 3 months, 6 months"
                      className="mt-1"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-base font-medium">Work Preference *</Label>
                  <RadioGroup
                    value={formData.workPreference}
                    onValueChange={(v) => update("workPreference", v)}
                    className="flex gap-6 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="remote" id="wp-remote" />
                      <Label htmlFor="wp-remote" className="font-normal cursor-pointer">Remote</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="on-site" id="wp-onsite" />
                      <Label htmlFor="wp-onsite" className="font-normal cursor-pointer">On-site</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="hybrid" id="wp-hybrid" />
                      <Label htmlFor="wp-hybrid" className="font-normal cursor-pointer">Hybrid</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>

            {/* 8. Resume Upload */}
            <Card>
              <CardHeader>
                <CardTitle>8. Resume Upload</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">PDF or DOC/DOCX, max {MAX_RESUME_SIZE_MB}MB</p>
                <div className="flex flex-wrap items-center gap-2">
                  <Input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleResumeChange}
                    className="max-w-xs"
                  />
                  {resumeFile && (
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <FileUp className="h-4 w-4" />
                      {resumeFile.name}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* 9. Declaration */}
            <Card>
              <CardHeader>
                <CardTitle>9. Declaration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  I hereby declare that the information provided in this application form is true and accurate to the best of my knowledge.
                </p>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="declaration"
                    checked={formData.declaration}
                    onCheckedChange={(c) => update("declaration", !!c)}
                  />
                  <Label htmlFor="declaration" className="font-normal cursor-pointer">
                    I accept the above declaration *
                  </Label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="applicantName">Applicant Name *</Label>
                    <Input
                      id="applicantName"
                      value={formData.applicantName}
                      onChange={(e) => update("applicantName", e.target.value)}
                      placeholder="Full name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="declarationDate">Date *</Label>
                    <Input
                      id="declarationDate"
                      type="date"
                      value={formData.declarationDate}
                      onChange={(e) => update("declarationDate", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button type="submit" size="lg" disabled={isSubmitting} className="min-w-[200px]">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </Button>
              <Button type="button" variant="outline" asChild size="lg">
                <Link to="/career">Cancel</Link>
              </Button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default CareerApply;
