import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type NewsletterSignupProps = {
  heading?: string;
  subtext?: string;
  compact?: boolean;
  id?: string;
};

export const NewsletterSignup = ({
  heading = "Get Gavite Foresight — Free",
  subtext = "Tech insights before they go mainstream. No spam. Unsubscribe anytime.",
  compact = false,
  id = "newsletter",
}: NewsletterSignupProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes("@")) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      id={id}
      className={`rounded-2xl border bg-muted/30 p-6 md:p-8 text-center space-y-4 scroll-mt-24 ${compact ? "" : "max-w-2xl mx-auto"}`}
    >
      <div className="space-y-2">
        <h3 className="text-xl md:text-2xl font-bold">{heading}</h3>
        <p className="text-sm text-muted-foreground">{subtext}</p>
      </div>

      {status === "success" ? (
        <p className="text-sm text-green-600 font-medium">✓ You&apos;re in! Watch your inbox.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <Input
            id="newsletter-email"
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email address for newsletter"
            className="bg-background"
          />
          <Button
            type="submit"
            disabled={status === "loading"}
            className="bg-gradient-to-r from-blue-600 to-purple-600 shrink-0"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe Free"}
          </Button>
        </form>
      )}

      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      )}

      <p className="text-xs text-muted-foreground">Join our growing community of business owners & developers</p>
    </div>
  );
};
