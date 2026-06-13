import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type DpdpConsentFieldsProps = {
  privacyConsent: boolean;
  marketingConsent: boolean;
  onPrivacyChange: (checked: boolean) => void;
  onMarketingChange: (checked: boolean) => void;
  idPrefix?: string;
};

export const DpdpConsentFields = ({
  privacyConsent,
  marketingConsent,
  onPrivacyChange,
  onMarketingChange,
  idPrefix = "contact",
}: DpdpConsentFieldsProps) => (
  <div className="space-y-3 rounded-lg border border-border bg-muted/30 p-4">
    <p className="text-xs font-medium text-foreground">Data protection (DPDP Act, 2023)</p>
    <div className="flex items-start gap-3">
      <Checkbox
        id={`${idPrefix}-privacy-consent`}
        checked={privacyConsent}
        onCheckedChange={(c) => onPrivacyChange(!!c)}
        className="mt-0.5"
        required
      />
      <Label htmlFor={`${idPrefix}-privacy-consent`} className="text-xs font-normal leading-relaxed cursor-pointer">
        I consent to Gavit E-Services Private Limited collecting and processing my personal data (name, email, phone, and message) to respond to my inquiry, as described in the{" "}
        <Link to="/privacy-policy" className="text-blue-600 underline hover:text-blue-800" target="_blank">
          Privacy Policy
        </Link>
        . I understand I may withdraw consent or exercise my rights by contacting{" "}
        <a href="mailto:info@gaviteservice.com" className="text-blue-600 underline hover:text-blue-800">
          info@gaviteservice.com
        </a>
        . <span className="text-red-500">*</span>
      </Label>
    </div>
    <div className="flex items-start gap-3">
      <Checkbox
        id={`${idPrefix}-marketing-consent`}
        checked={marketingConsent}
        onCheckedChange={(c) => onMarketingChange(!!c)}
        className="mt-0.5"
      />
      <Label htmlFor={`${idPrefix}-marketing-consent`} className="text-xs font-normal leading-relaxed cursor-pointer">
        I agree to receive service updates, newsletters, and promotional communication via email or phone. I can opt out anytime.
      </Label>
    </div>
  </div>
);
