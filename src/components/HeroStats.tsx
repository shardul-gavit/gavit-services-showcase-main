const STATS = [
  { value: "100+", label: "Clients" },
  { value: "5+", label: "Countries" },
  { value: "48hr", label: "Onboarding" },
  { value: "4+", label: "Years" },
] as const;

export const HeroStats = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto mb-8 animate-fade-in">
    {STATS.map((stat) => (
      <div
        key={stat.label}
        className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3 text-center"
      >
        <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
        <p className="text-[10px] md:text-xs text-white/70 uppercase tracking-[0.2em] mt-1">{stat.label}</p>
      </div>
    ))}
  </div>
);

export default HeroStats;
