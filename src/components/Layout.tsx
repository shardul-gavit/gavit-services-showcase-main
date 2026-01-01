import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  ArrowUpRight,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Sparkles,
  ShieldCheck,
  Twitter,
  Youtube,
  Clock,
} from "lucide-react";
import gavitLogo from "@/assets/gavit-logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Career", path: "/career" },
  { label: "E-Learning", path: "/elearning" },
  { label: "Blogs", path: "/blogs" },
  { label: "Contact", path: "/contact" },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/gavit-e-services/" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com/gaviteservices" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@gaviteservices" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/gaviteservices" },
];

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleContactNav = () => {
    setMobileMenuOpen(false);
    // If on home page, scroll to contact section; otherwise navigate to contact page
    if (location.pathname === "/") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    navigate("/contact");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 w-full z-50 shadow-lg">
        <nav className="bg-background/95 backdrop-blur-xl border-b border-border/60">
          <div className="container mx-auto px-6 h-20 flex items-center justify-between gap-6">
            <Link to="/" className="flex items-center gap-2 sm:gap-3">
              <img src={gavitLogo} alt="Gavit E-Services" className="h-10 md:h-12 w-auto object-contain" loading="lazy" />
              <div className="flex flex-col">
                <p className="font-bold text-sm sm:text-lg md:text-xl tracking-tight">Gavit E-Services</p>
                <p className="text-[9px] sm:text-[10px] text-muted-foreground -mt-1 hidden sm:block">Accelerate your digital journey</p>
              </div>
            </Link>
            <div className="hidden lg:flex items-center space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    location.pathname === link.path ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="hidden xl:flex items-center gap-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-2 border px-3 py-1 rounded-full">
                <Globe className="w-4 h-4 text-blue-500" />
                5 Countries
              </div>
              <div className="flex items-center gap-2 border px-3 py-1 rounded-full">
                <Badge variant="secondary">80+ Projects</Badge>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/gavit-e-services/"
                target="_blank"
                rel="noreferrer"
                className="hidden md:inline-flex w-10 h-10 items-center justify-center rounded-full border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                aria-label="Gavit E-Services on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <Button onClick={handleContactNav} className="hidden md:inline-flex bg-gradient-to-r from-blue-600 to-purple-600">
                Get Started
              </Button>
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[320px] sm:w-[400px]">
                  <div className="space-y-6 mt-6">
                    <div className="grid gap-2">
                      {navLinks.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between rounded-xl border px-4 py-3 text-sm font-medium hover:bg-muted transition-colors"
                        >
                          {link.label}
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      ))}
                    </div>
                    <div className="rounded-2xl bg-muted p-4 space-y-3">
                      <p className="text-sm font-semibold">Need a proposal?</p>
                      <p className="text-sm text-muted-foreground">
                        Share timelines, tech stack, and hiring needs to receive a roadmap within 24 hours.
                      </p>
                      <Button onClick={handleContactNav} className="w-full">
                        Start Project
                      </Button>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p className="font-medium">Instant contact</p>
                      <a className="flex items-center gap-2 text-muted-foreground hover:text-foreground" href="tel:+918141381255">
                        <Phone className="w-4 h-4" />
                        +91 81413 81255
                      </a>
                      <a className="flex items-center gap-2 text-muted-foreground hover:text-foreground" href="mailto:info@gaviteservices.com">
                        <Mail className="w-4 h-4" />
                        info@gaviteservices.com
                      </a>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-[90px]">{children}</main>

      <footer className="bg-slate-950 text-white py-16 mt-10 relative overflow-hidden">
        {/* Moved top bar content into footer */}
        <div className="bg-slate-900/80 border-b border-white/10 mb-10">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between text-xs sm:text-sm">
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-2 text-white">
                <Sparkles className="h-4 w-4 text-emerald-300" />
                AI-assisted delivery squads now onboarding.
              </span>
              <span className="flex items-center gap-2 text-white/80">
                <ShieldCheck className="h-4 w-4 text-blue-200" />
                ISO-ready processes & NDAs
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-2 text-white/80">
                <Clock className="h-4 w-4" />
                Mon - Sat · 9:00 AM – 8:00 PM IST
              </span>
              <a className="flex items-center gap-2 text-white/80 hover:text-white transition-colors" href="tel:+918141381255">
                <Phone className="h-4 w-4" />
                +91 81413 81255
              </a>
              <a className="flex items-center gap-2 text-white/80 hover:text-white transition-colors" href="mailto:info@gaviteservices.com">
                <Mail className="h-4 w-4" />
                info@gaviteservices.com
              </a>
              <div className="hidden md:flex items-center gap-2">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    aria-label={label}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10 space-y-12">
          <div className="grid gap-6 lg:grid-cols-[2fr,1fr] items-stretch">
            <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-xl">
              <div>
                <p className="uppercase tracking-[0.3em] text-sm text-white/80 mb-3">Let’s Build the Next</p>
                <h3 className="text-3xl md:text-4xl font-semibold mb-3">
                  From MVPs to enterprise rollouts – we move fast & ship quality.
                </h3>
                <p className="text-white/80 text-sm max-w-2xl">
                  Drop us a line and we’ll turn your roadmap into a delivery plan with timelines, pods, and success metrics.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-white text-slate-900 hover:bg-white/90" onClick={handleContactNav}>
                  Get Started
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Avg. NPS", value: "72" },
                { label: "Talent Bench", value: "30+" },
                { label: "Countries", value: "5" },
                { label: "Pods Live", value: "12" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white/5 p-4 text-center border border-white/10">
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-xs text-white/70 uppercase tracking-[0.3em]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src={gavitLogo} alt="Gavit E-Services" className="h-12 w-auto" loading="lazy" />
                <div>
                  <p className="font-bold text-lg">Gavit E-Services</p>
                  <p className="text-xs text-white/60 -mt-1">Accelerate your digital journey</p>
                </div>
              </div>
              <p className="text-sm text-white/70">
                Gavit E-Services is a full-stack IT services and staffing company in Vadodara, Gujarat delivering IT solutions and consulting, remote staffing,
                website and app development, and HR outsourcing across India.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-white/60">
                {["#GavitEServices", "#ITServices", "#ITSolutions", "#ITConsulting", "#StaffingSolutions", "#RemoteStaffing", "#Vadodara", "#Gujarat", "#IndiaBusiness"].map(
                  (tag) => (
                    <span key={tag} className="px-2 py-1 bg-white/5 rounded-full">
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li>
                  <Link to="/about" className="hover:text-white transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/staffing" className="hover:text-white transition">
                    Leadership & Talent
                  </Link>
                </li>
                <li>
                  <a href="mailto:info@gaviteservices.com" className="hover:text-white transition">
                    Careers
                  </a>
                </li>
                <li>
                  <Link to="/blogs" className="hover:text-white transition">
                    Case Studies & Blogs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Solutions</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li>
                  <Link to="/it-services" className="hover:text-white transition">
                    Product Engineering
                  </Link>
                </li>
                <li>
                  <Link to="/remote-staffing" className="hover:text-white transition">
                    Remote Staffing Pods
                  </Link>
                </li>
                <li>
                  <Link to="/web-development" className="hover:text-white transition">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link to="/app-development" className="hover:text-white transition">
                    App Development
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Newsletter</h4>
              <p className="text-sm text-white/70">
                Monthly insights on IT staffing services, remote staffing vs in-house hiring, and digital transformation playbooks.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input placeholder="Email address" className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
                <Button className="bg-white text-slate-900 hover:bg-white/90">Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-xs text-white/60">
            <p>© {new Date().getFullYear()} Gavit E-Services. Built proudly in Vadodara, Gujarat, India.</p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="hover:text-white transition">Privacy</button>
              <button className="hover:text-white transition">Security</button>
              <button className="hover:text-white transition">SLA</button>
              <button className="hover:text-white transition">Support</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

