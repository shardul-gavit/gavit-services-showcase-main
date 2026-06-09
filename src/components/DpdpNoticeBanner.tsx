import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const STORAGE_KEY = "gavit-dpdp-notice-accepted";

export const DpdpNoticeBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(STORAGE_KEY);
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, new Date().toISOString());
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9998] p-4 md:p-6 pointer-events-none">
      <div className="container mx-auto max-w-4xl pointer-events-auto">
        <div className="rounded-2xl border border-white/10 bg-slate-950/95 text-white shadow-2xl backdrop-blur-md p-4 md:p-5 flex flex-col md:flex-row md:items-center gap-4">
          <p className="text-sm text-white/90 flex-1">
            We use essential cookies and process personal data per India&apos;s{" "}
            <strong>Digital Personal Data Protection Act, 2023</strong>. By continuing, you acknowledge our{" "}
            <Link to="/privacy-policy" className="underline text-blue-300 hover:text-blue-200">
              Privacy Policy
            </Link>
            . You may manage preferences or withdraw consent anytime.
          </p>
          <div className="flex items-center gap-2 shrink-0">
            <Button size="sm" className="bg-white text-slate-900 hover:bg-white/90" onClick={accept}>
              Accept
            </Button>
            <Button size="icon" variant="ghost" className="text-white/70 hover:text-white" onClick={accept} aria-label="Dismiss notice">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
