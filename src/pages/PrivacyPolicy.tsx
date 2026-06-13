import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sections = [
  {
    title: "1. Data Fiduciary",
    content:
      "Gavit E-Services Private Limited (“Gavit E-Services”, “we”, “us”) is the Data Fiduciary for personal data collected through www.gaviteservice.com and related services. Registered office: Vadodara, Gujarat, India.",
  },
  {
    title: "2. Personal Data We Collect",
    content:
      "We may collect: name, email address, phone number, company name, service interest, messages you submit, resume/CV (career applications), course enrollment details, IP address, browser type, and usage data via cookies/analytics.",
  },
  {
    title: "3. Purpose of Processing",
    content:
      "We process personal data to: respond to inquiries and provide services; process job and training applications; send service-related communication; improve our website; comply with legal obligations; and—with your separate consent—send marketing updates.",
  },
  {
    title: "4. Legal Basis & Consent",
    content:
      "Under the Digital Personal Data Protection Act, 2023 (DPDP Act), we rely on your consent for most processing. Where you submit a form, you must provide explicit consent before submission. You may withdraw consent at any time without affecting lawfulness of prior processing.",
  },
  {
    title: "5. Data Retention",
    content:
      "Inquiry data is retained for up to 3 years unless a longer period is required by law or ongoing engagement. Career and enrollment records are retained as needed for recruitment/training and statutory compliance, then securely deleted or anonymised.",
  },
  {
    title: "6. Your Rights (Data Principal)",
    content:
      "You have the right to: access your personal data; request correction of inaccurate data; request erasure when consent is withdrawn (subject to legal exceptions); nominate another person to exercise rights in case of death/incapacity; and raise grievances with us.",
  },
  {
    title: "7. Grievance Redressal",
    content:
      "For privacy requests, consent withdrawal, or complaints, contact our Grievance Officer at info@gaviteservice.com or write to Gavit E-Services Private Limited, Vadodara, Gujarat 390007, India. We will respond within timelines prescribed under applicable law.",
  },
  {
    title: "8. Data Sharing & Cross-Border Transfer",
    content:
      "We do not sell personal data. We may share data with trusted service providers (hosting, email, analytics) under contract and only as needed. Where data is processed outside India, we ensure appropriate safeguards as required by law.",
  },
  {
    title: "9. Security",
    content:
      "We implement reasonable technical and organisational measures including encryption in transit, access controls, and staff training to protect personal data against unauthorised access, loss, or misuse.",
  },
  {
    title: "10. Children's Data",
    content:
      "Our services are not directed at children under 18. We do not knowingly collect personal data from children without verifiable parental consent.",
  },
  {
    title: "11. Cookies",
    content:
      "We use essential cookies for site functionality and analytics cookies (e.g. Google Analytics) to understand usage. You may control cookies through your browser settings. Our site notice allows you to acknowledge our data practices on first visit.",
  },
  {
    title: "12. Updates",
    content:
      "We may update this Privacy Policy from time to time. The latest version will always be published on this page with a revised effective date. Continued use after changes constitutes acknowledgment where permitted by law.",
  },
];

const PrivacyPolicy = () => (
  <Layout>
    <Seo
      title="Privacy Policy | DPDP Act Compliance — Gavit E-Services"
      description="Privacy Policy for Gavit E-Services under India's Digital Personal Data Protection Act, 2023. Learn how we collect, use, and protect your personal data."
      canonical="https://www.gaviteservice.com/privacy-policy"
      keywords={["DPDP Act privacy policy", "Gavit E-Services data protection", "personal data India"]}
    />

    <section className="py-16 bg-muted/30 text-center space-y-4">
      <div className="container mx-auto px-4">
        <Badge variant="secondary" className="mx-auto w-fit uppercase tracking-[0.3em]">
          Privacy
        </Badge>
        <h1 className="text-4xl font-bold mt-4">Privacy Policy</h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Effective date: 29 May 2026 · Compliant with the Digital Personal Data Protection Act, 2023 (India)
        </p>
      </div>
    </section>

    <section className="py-16 container mx-auto px-4 max-w-3xl space-y-6">
      <p className="text-muted-foreground text-sm">
        This Privacy Policy explains how Gavit E-Services Private Limited processes personal data when you visit our website, submit forms, apply for careers, or enroll in training programmes.
      </p>
      {sections.map((section) => (
        <Card key={section.title}>
          <CardHeader>
            <CardTitle className="text-lg">{section.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-relaxed">{section.content}</p>
          </CardContent>
        </Card>
      ))}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Contact</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p>
            <strong>Grievance Officer:</strong> info@gaviteservice.com
          </p>
          <p>
            <strong>General inquiries:</strong> info@gaviteservice.com · +91 81413 81255
          </p>
          <p>
            <strong>Address:</strong> Vadodara, Gujarat 390007, India
          </p>
        </CardContent>
      </Card>
    </section>
  </Layout>
);

export default PrivacyPolicy;
