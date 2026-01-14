import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2, Loader2 } from "lucide-react";
import { sanitizeInput, validateEmail, validatePhone, validateName, RateLimiter, validateFormData } from "@/utils/security";

interface EnrollmentFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// API endpoint for enrollment form submission
// This uses a Vercel serverless function as a proxy to handle CORS
const API_ENDPOINT = "/api/enrollment";

interface FormData {
  name: string;
  profession: string;
  contactNumber: string;
  emailId: string;
  gender: string;
  state: string;
  city: string;
  qualification: string;
  collegeUniversity: string;
  courseStream: string;
  selectCourse: string;
  hearAboutUs: string;
  declaration: boolean;
}

// Indian States List
const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

const EnrollmentForm = ({ open, onOpenChange }: EnrollmentFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    profession: "",
    contactNumber: "",
    emailId: "",
    gender: "",
    state: "",
    city: "",
    qualification: "",
    collegeUniversity: "",
    courseStream: "",
    selectCourse: "",
    hearAboutUs: "",
    declaration: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  
  // Rate limiter for form submissions (3 submissions per minute)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const rateLimiter = useState(() => new RateLimiter('enrollment_form', 3, 60000))[0];

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    // For string inputs, only sanitize dangerous characters but preserve spaces
    if (typeof value === 'string') {
      // Remove HTML tags and dangerous script patterns, but allow spaces
      let sanitized = value.replace(/<[^>]*>/g, ''); // Remove HTML tags
      sanitized = sanitized.replace(/javascript:/gi, ''); // Remove javascript: protocol
      sanitized = sanitized.replace(/on\w+\s*=/gi, ''); // Remove event handlers
      sanitized = sanitized.replace(/[<>'"&]/g, ''); // Remove dangerous characters but keep spaces
      value = sanitized;
      // Don't trim here - allow spaces during typing, trim only on submit
    }
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Rate limiting check
    if (!rateLimiter.canProceed()) {
      setError("Too many submission attempts. Please wait a minute before trying again.");
      return;
    }

    // Validation
    if (!formData.name || !formData.profession || !formData.contactNumber || !formData.emailId || 
        !formData.gender || !formData.state || !formData.city || !formData.qualification || 
        !formData.collegeUniversity || !formData.courseStream || !formData.selectCourse || 
        !formData.hearAboutUs || !formData.declaration) {
      setError("Please fill in all fields and accept the declaration");
      return;
    }

    // Enhanced name validation
    const nameValidation = validateName(formData.name);
    if (!nameValidation.valid) {
      setError("Please enter a valid name (2-200 characters, letters and spaces only)");
      return;
    }

    // Enhanced email validation
    if (!validateEmail(formData.emailId)) {
      setError("Please enter a valid email address");
      return;
    }

    // Enhanced phone validation
    if (!validatePhone(formData.contactNumber)) {
      setError("Please enter a valid 10-digit Indian mobile number");
      return;
    }

    // Validate form data for injection attacks
    const formValidation = validateFormData(formData);
    if (!formValidation.valid) {
      setError("Invalid characters detected. Please check your input and try again.");
      return;
    }

    if (!formData.declaration) {
      setError("Please accept the declaration to proceed");
      return;
    }

    setIsSubmitting(true);

    try {
      // Sanitize all string fields before submission
      const submissionData = {
        name: sanitizeInput(formData.name),
        profession: sanitizeInput(formData.profession),
        contactNumber: formData.contactNumber.replace(/\D/g, ''), // Only digits
        emailId: formData.emailId.toLowerCase().trim(),
        gender: sanitizeInput(formData.gender),
        state: sanitizeInput(formData.state),
        city: sanitizeInput(formData.city),
        qualification: sanitizeInput(formData.qualification),
        collegeUniversity: sanitizeInput(formData.collegeUniversity),
        courseStream: sanitizeInput(formData.courseStream),
        selectCourse: sanitizeInput(formData.selectCourse),
        hearAboutUs: sanitizeInput(formData.hearAboutUs),
        declaration: formData.declaration,
        timestamp: new Date().toISOString(),
      };

      // Send to Vercel API route (which proxies to Google Apps Script)
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit enrollment");
      }

      setIsSuccess(true);
      
      // Reset form after 3 seconds and close modal
      setTimeout(() => {
        setFormData({
          name: "",
          profession: "",
          contactNumber: "",
          emailId: "",
          gender: "",
          state: "",
          city: "",
          qualification: "",
          collegeUniversity: "",
          courseStream: "",
          selectCourse: "",
          hearAboutUs: "",
          declaration: false,
        });
        setIsSuccess(false);
        onOpenChange(false);
      }, 3000);
    } catch (err) {
      setError("Failed to submit enrollment. Please try again or contact us directly.");
      console.error("Enrollment error:", err);
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-blue-50 to-orange-50 dark:from-blue-950 dark:to-orange-950">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
            Enrollment Form
          </DialogTitle>
          <DialogDescription className="text-base">
            Fill in your details to enroll in our training programs
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <div className="rounded-full bg-green-100 dark:bg-green-900 p-4">
              <CheckCircle2 className="w-12 h-12 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-green-700 dark:text-green-400">
              Enrollment successful!
            </h3>
            <p className="text-center text-muted-foreground max-w-md">
              Our team will contact you shortly. This window will close automatically.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="grid gap-4 md:grid-cols-2">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base font-medium">
                  Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="bg-white dark:bg-slate-900 border-blue-200 dark:border-blue-800 focus:border-blue-500 focus:ring-blue-500"
                  maxLength={200}
                  required
                />
              </div>

              {/* Profession */}
              <div className="space-y-2">
                <Label htmlFor="profession" className="text-base font-medium">
                  Profession <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="profession"
                  type="text"
                  placeholder="Enter your profession"
                  value={formData.profession}
                  onChange={(e) => handleChange("profession", e.target.value)}
                  className="bg-white dark:bg-slate-900 border-blue-200 dark:border-blue-800 focus:border-blue-500 focus:ring-blue-500"
                  maxLength={200}
                  required
                />
              </div>

              {/* Contact Number */}
              <div className="space-y-2">
                <Label htmlFor="contactNumber" className="text-base font-medium">
                  Contact Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="contactNumber"
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={formData.contactNumber}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                    handleChange("contactNumber", value);
                  }}
                  className="bg-white dark:bg-slate-900 border-blue-200 dark:border-blue-800 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Email ID */}
              <div className="space-y-2">
                <Label htmlFor="emailId" className="text-base font-medium">
                  Email ID <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="emailId"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.emailId}
                  onChange={(e) => handleChange("emailId", e.target.value)}
                  className="bg-white dark:bg-slate-900 border-blue-200 dark:border-blue-800 focus:border-blue-500 focus:ring-blue-500"
                  maxLength={254}
                  required
                />
              </div>

              {/* Gender */}
              <div className="space-y-2">
                <Label htmlFor="gender" className="text-base font-medium">
                  Gender <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.gender}
                  onValueChange={(value) => handleChange("gender", value)}
                  required
                >
                  <SelectTrigger className="bg-white dark:bg-slate-900 border-blue-200 dark:border-blue-800 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                    <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* State */}
              <div className="space-y-2">
                <Label htmlFor="state" className="text-base font-medium">
                  State <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.state}
                  onValueChange={(value) => handleChange("state", value)}
                  required
                >
                  <SelectTrigger className="bg-white dark:bg-slate-900 border-blue-200 dark:border-blue-800 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[200px]">
                    {indianStates.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* City */}
              <div className="space-y-2">
                <Label htmlFor="city" className="text-base font-medium">
                  City <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="city"
                  type="text"
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                  className="bg-white dark:bg-slate-900 border-blue-200 dark:border-blue-800 focus:border-blue-500 focus:ring-blue-500"
                  maxLength={200}
                  required
                />
              </div>

              {/* Qualification */}
              <div className="space-y-2">
                <Label htmlFor="qualification" className="text-base font-medium">
                  Qualification <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.qualification}
                  onValueChange={(value) => handleChange("qualification", value)}
                  required
                >
                  <SelectTrigger className="bg-white dark:bg-slate-900 border-blue-200 dark:border-blue-800 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Select qualification" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="MBA">MBA</SelectItem>
                    <SelectItem value="BBA">BBA</SelectItem>
                    <SelectItem value="B.Com">B.Com</SelectItem>
                    <SelectItem value="Engineering">Engineering</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* College/University Name */}
              <div className="space-y-2">
                <Label htmlFor="collegeUniversity" className="text-base font-medium">
                  College / University Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="collegeUniversity"
                  type="text"
                  placeholder="Enter college/university name"
                  value={formData.collegeUniversity}
                  onChange={(e) => handleChange("collegeUniversity", e.target.value)}
                  className="bg-white dark:bg-slate-900 border-blue-200 dark:border-blue-800 focus:border-blue-500 focus:ring-blue-500"
                  maxLength={300}
                  required
                />
              </div>

              {/* Course/Stream */}
              <div className="space-y-2">
                <Label htmlFor="courseStream" className="text-base font-medium">
                  Course / Stream <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="courseStream"
                  type="text"
                  placeholder="Enter your course/stream"
                  value={formData.courseStream}
                  onChange={(e) => handleChange("courseStream", e.target.value)}
                  className="bg-white dark:bg-slate-900 border-blue-200 dark:border-blue-800 focus:border-blue-500 focus:ring-blue-500"
                  maxLength={200}
                  autoComplete="off"
                  spellCheck={false}
                  required
                />
              </div>

              {/* Select Course */}
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="selectCourse" className="text-base font-medium">
                  Select Course <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.selectCourse}
                  onValueChange={(value) => handleChange("selectCourse", value)}
                  required
                >
                  <SelectTrigger className="bg-white dark:bg-slate-900 border-blue-200 dark:border-blue-800 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Payroll Management (HR)">Payroll Management (HR)</SelectItem>
                    <SelectItem value="Statutory Compliance (HR)">Statutory Compliance (HR)</SelectItem>
                    <SelectItem value="Tally">Tally</SelectItem>
                    <SelectItem value="Programming & Development">Programming & Development</SelectItem>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="Power BI">Power BI</SelectItem>
                    <SelectItem value="Advance Excel">Advance Excel</SelectItem>
                    <SelectItem value="SEO">SEO</SelectItem>
                    <SelectItem value="Google Ads">Google Ads</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* How did you hear about us? */}
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="hearAboutUs" className="text-base font-medium">
                  How did you hear about us? <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.hearAboutUs}
                  onValueChange={(value) => handleChange("hearAboutUs", value)}
                  required
                >
                  <SelectTrigger className="bg-white dark:bg-slate-900 border-blue-200 dark:border-blue-800 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Google">Google</SelectItem>
                    <SelectItem value="Social Media">Social Media</SelectItem>
                    <SelectItem value="Friend">Friend</SelectItem>
                    <SelectItem value="College">College</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Declaration */}
              <div className="space-y-2 md:col-span-2 flex items-start gap-3 pt-2">
                <Checkbox
                  id="declaration"
                  checked={formData.declaration}
                  onCheckedChange={(checked) => handleChange("declaration", checked as boolean)}
                  className="mt-1"
                  required
                />
                <Label
                  htmlFor="declaration"
                  className="text-sm font-normal leading-relaxed cursor-pointer"
                >
                  I confirm that the above information is true and correct <span className="text-red-500">*</span>
                </Label>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 rounded-md bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="flex-1 border-blue-300 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Enrollment"
                )}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EnrollmentForm;
