import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

type NewsletterSignupProps = {
  heading?: string;
  subtext?: string;
  compact?: boolean;
};

export const NewsletterSignup = ({
  heading = "Get Gavite Foresight — Free",
  subtext = "Tech insights 5 years before they go mainstream. No spam. Unsubscribe anytime.",
  compact = false,
}: NewsletterSignupProps) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const subject = encodeURIComponent("Gavite Foresight Newsletter Subscribe");
      const body = encodeURIComponent(
        `Please subscribe this email to Gavite Foresight newsletter:\n\nEmail: ${email.trim()}\nSource: Website blog\nTimestamp: ${new Date().toISOString()}`
      );
      window.location.href = `mailto:info@gaviteservices.com?subject=${subject}&body=${body}`;
      toast.success("Thanks! Complete send in your email app, or we'll add you shortly.");
      setEmail("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`rounded-2xl border bg-muted/30 p-6 md:p-8 text-center space-y-4 ${compact ? "" : "max-w-2xl mx-auto"}`}>
      <div className="space-y-2">
        <h3 className="text-xl md:text-2xl font-bold">{heading}</h3>
        <p className="text-sm text-muted-foreground">{subtext}</p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <Input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-background"
        />
        <Button type="submit" disabled={loading} className="bg-gradient-to-r from-blue-600 to-purple-600 shrink-0">
          {loading ? "..." : "Subscribe Free"}
        </Button>
      </form>
      <p className="text-xs text-muted-foreground">Join 500+ business owners & developers</p>
    </div>
  );
};
