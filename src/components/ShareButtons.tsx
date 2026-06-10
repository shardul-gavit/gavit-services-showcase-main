import { useState } from "react";
import { Link2, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_URL } from "@/data/foresightPosts";

type ShareButtonsProps = {
  slug?: string;
  title: string;
  shareUrl?: string;
  className?: string;
};

export const ShareButtons = ({ slug, title, shareUrl, className = "" }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);

  const url = shareUrl ?? `${SITE_URL}/blog/${slug}`;
  const shareText = `${title} — Gavit E-Services Foresight`;

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText}\n${url}`)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}&via=gaviteservices`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const el = document.createElement("textarea");
      el.value = url;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <span className="text-sm font-medium text-muted-foreground">Share this article:</span>
      <Button variant="outline" size="sm" asChild>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp">
          WhatsApp
        </a>
      </Button>
      <Button variant="outline" size="sm" asChild>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
          <Linkedin className="w-4 h-4 mr-1" />
          LinkedIn
        </a>
      </Button>
      <Button variant="outline" size="sm" asChild>
        <a href={twitterUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter/X">
          Twitter / X
        </a>
      </Button>
      <Button variant="outline" size="sm" onClick={copyLink} aria-label="Copy link">
        <Link2 className="w-4 h-4 mr-1" />
        {copied ? "✓ Copied!" : "Copy Link"}
      </Button>
    </div>
  );
};
