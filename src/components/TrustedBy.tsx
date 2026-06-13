import { Building2 } from "lucide-react";

const CLIENTS = [
  { name: "US SaaS Startup", region: "USA" },
  { name: "Gujarat Manufacturer", region: "India" },
  { name: "UK Logistics Co.", region: "UK" },
  { name: "FinTech Scale-up", region: "Australia" },
] as const;

type TrustedByProps = {
  variant?: "dark" | "light";
  className?: string;
};

export const TrustedBy = ({ variant = "dark", className = "" }: TrustedByProps) => {
  const isDark = variant === "dark";

  return (
    <div className={`${className}`}>
      <p
        className={`text-center text-xs uppercase tracking-[0.25em] mb-4 ${
          isDark ? "text-white/60" : "text-muted-foreground"
        }`}
      >
        Trusted by 100+ clients worldwide
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
        {CLIENTS.map((client) => (
          <div
            key={client.name}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 border ${
              isDark
                ? "bg-white/5 border-white/15 text-white/90"
                : "bg-background border-border text-foreground"
            }`}
          >
            <Building2 className={`w-4 h-4 shrink-0 ${isDark ? "text-blue-300" : "text-blue-600"}`} />
            <div className="text-left">
              <p className="text-sm font-semibold leading-tight">{client.name}</p>
              <p className={`text-[10px] uppercase tracking-wider ${isDark ? "text-white/50" : "text-muted-foreground"}`}>
                {client.region}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;
