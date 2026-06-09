export const SERVICE_OPTIONS = [
  "Virtual Assistant",
  "ERP Development",
  "Custom Software Development",
  "Web App Development",
  "AI Software Development",
  "IT Consultancy",
  "GST Billing Software",
  "Custom Billing Software",
  "IT Services & Consulting",
  "Web Development",
  "Mobile App Development",
  "Staffing & Recruitment",
  "Remote Staffing",
  "Digital Marketing",
  "Business Consulting",
  "E-Learning & Training",
  "Other",
] as const;

export type ServiceOption = (typeof SERVICE_OPTIONS)[number];
