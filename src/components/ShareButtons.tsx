import { Link2, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { SITE_URL } from "@/data/foresightPosts";

type ShareButtonsProps = {
  slug?: string;
  title: string;
  shareUrl?: string;
  className?: string;
};

export const ShareButtons = ({ slug, title, shareUrl, className = "" }: ShareButtonsProps) => {
  const url = shareUrl ?? `${SITE_URL}/blog/${slug}`;
  const encoded = encodeURIComponent(url);
  const titleEncoded = encodeURIComponent(title);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard!");
    } catch {
      toast.error("Could not copy link. Please copy manually.");
    }
  };

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <span className="text-sm font-medium text-muted-foreground">Share this article:</span>
      <Button variant="outline" size="sm" asChild>
        <a
          href={`https://wa.me/?text=${titleEncoded}%20${encoded}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </Button>
      <Button variant="outline" size="sm" asChild>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-4 h-4 mr-1" />
          LinkedIn
        </a>
      </Button>
      <Button variant="outline" size="sm" asChild>
        <a
          href={`https://twitter.com/intent/tweet?text=${titleEncoded}&url=${encoded}&via=gaviteservices`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter/X
        </a>
      </Button>
      <Button variant="outline" size="sm" onClick={copyLink}>
        <Link2 className="w-4 h-4 mr-1" />
        Copy Link
      </Button>
    </div>
  );
};
