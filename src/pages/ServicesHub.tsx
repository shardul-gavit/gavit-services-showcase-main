import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Seo } from "@/components/Seo";
import { OptimizedImage } from "@/components/OptimizedImage";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code2,
  Users,
  Globe,
  Smartphone,
  Server,
  Briefcase,
  Sparkles,
  Zap,
  Shield,
  BarChart3,
  PenTool,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    id: "it-services",
    title: "IT Services & Consulting",
    tagline: "End-to-end IT solutions for digital transformation",
    description:
      "Custom software development, microservices architecture, cloud-based IT solutions, and enterprise-grade applications tailored for startups and enterprises.",
    icon: Code2,
    gradient: "from-blue-600 via-cyan-500 to-teal-400",
    features: [
      "Custom Software Development",
      "Cloud Migration & DevOps",
      "API & Microservices",
      "IT Support & Maintenance",
    ],
    link: "/it-services",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "staffing",
    title: "Staffing & Recruitment",
    tagline: "Talent acquisition for IT and non-IT roles",
    description:
      "IT staffing services, recruitment and staffing solutions, HR outsourcing, and dedicated developers for hire across Vadodara, Gujarat, and India.",
    icon: Users,
    gradient: "from-purple-600 via-fuchsia-500 to-pink-400",
    features: [
      "IT & Non-IT Staffing",
      "Contract & Permanent Hiring",
      "HR Outsourcing",
      "Talent Acquisition Support",
    ],
    link: "/staffing",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "remote-staffing",
    title: "Remote Staffing",
    tagline: "Build distributed teams with top remote talent",
    description:
      "Remote staffing services, dedicated remote developers, virtual assistant services, and workforce outsourcing for global clients.",
    icon: Globe,
    gradient: "from-emerald-600 via-green-500 to-lime-400",
    features: [
      "Remote Developer Teams",
      "Virtual Assistants",
      "Time-zone Aligned Pods",
      "Managed Remote Operations",
    ],
    link: "/remote-staffing",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "web-development",
    title: "Web Development",
    tagline: "Modern, responsive, and SEO-optimized websites",
    description:
      "Full-stack web development, UI/UX design services, frontend and backend development, and app modernization for businesses of all sizes.",
    icon: Server,
    gradient: "from-orange-500 via-amber-500 to-yellow-400",
    features: [
      "React / Next.js / Vue",
      "Node.js / Laravel / Django",
      "E-commerce Platforms",
      "CMS & Headless Solutions",
    ],
    link: "/web-development",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "app-development",
    title: "App Development",
    tagline: "Native & cross-platform mobile applications",
    description:
      "iOS and Android app development, React Native, Flutter, and cloud-native mobile solutions for SMEs and enterprises.",
    icon: Smartphone,
    gradient: "from-rose-600 via-red-500 to-orange-400",
    features: [
      "iOS & Android Native",
      "React Native / Flutter",
      "App Store Optimization",
      "Backend & API Integration",
    ],
    link: "/app-development",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    tagline: "SEO, social media, and growth strategies",
    description:
      "Search engine optimization, social media marketing, PPC advertising, and brand strategy to amplify your online presence.",
    icon: TrendingUp,
    gradient: "from-indigo-600 via-violet-500 to-purple-400",
    features: [
      "SEO & Content Marketing",
      "Social Media Management",
      "PPC & Paid Ads",
      "Analytics & Reporting",
    ],
    link: "/contact",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "graphic-branding",
    title: "Graphic & Branding",
    tagline: "Visual identity that stands out",
    description:
      "Logo design, brand identity systems, marketing collateral, and presentation design to elevate your brand.",
    icon: PenTool,
    gradient: "from-pink-600 via-rose-500 to-red-400",
    features: [
      "Logo & Brand Identity",
      "Marketing Materials",
      "UI/UX Design",
      "Presentation Design",
    ],
    link: "/contact",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "business-consulting",
    title: "Business Consulting",
    tagline: "Strategic insights for growth",
    description:
      "Financial analysis, market research, MSME consulting, and growth strategies to scale your business.",
    icon: Briefcase,
    gradient: "from-slate-600 via-gray-500 to-zinc-400",
    features: [
      "Financial Analysis",
      "Market Research",
      "Growth Strategies",
      "MSME Consulting",
    ],
    link: "/contact",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  },
];

const ServicesHub = () => {
  return (
    <Layout>
      <Seo
        title="Our Services | IT Solutions, Staffing & Digital Services | Gavit E-Services"
        description="Explore Gavit E-Services' comprehensive offerings: IT services and consulting, staffing and recruitment, remote staffing, web development, app development, digital marketing, branding, and business consulting in Vadodara, Gujarat, India."
        keywords={["IT services", "staffing solutions", "remote staffing", "web development", "app development", "digital marketing", "branding", "business consulting", "Vadodara", "Gujarat", "India"]}
        canonical="https://www.gaviteservice.com/services"
      />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm mb-8">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            Full-Spectrum IT & Staffing Solutions
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Services That{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Transform
            </span>{" "}
            Businesses
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10">
            From IT solutions and consulting to recruitment and staffing
            solutions, we deliver end-to-end services that accelerate growth
            for startups, SMEs, and enterprises across Vadodara, Gujarat, and
            India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Book Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <a href="tel:+918141381255">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Call +91 81413 81255
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid – Futuristic Panels */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Click any panel to dive deeper into how we can help your business
              thrive.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.id}
                to={service.link}
                className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <OptimizedImage
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80 group-hover:opacity-90 transition-opacity`}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-between min-h-[340px]">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/80 text-sm mb-4">
                      {service.tagline}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-white/90 text-xs"
                      >
                        <Zap className="w-3 h-3" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-white font-medium text-sm group-hover:gap-3 transition-all">
                    Explore <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-white/20 group-hover:ring-white/40 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Gavit E-Services?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We combine technical excellence with a client-first approach to
              deliver measurable results.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Zap,
                title: "Fast Delivery",
                description:
                  "Agile sprints and dedicated pods ensure rapid time-to-market.",
              },
              {
                icon: Shield,
                title: "ISO-Ready Processes",
                description:
                  "Enterprise-grade security, NDAs, and compliance-first workflows.",
              },
              {
                icon: BarChart3,
                title: "Transparent Reporting",
                description:
                  "Weekly updates, dashboards, and real-time project visibility.",
              },
              {
                icon: Users,
                title: "Scalable Teams",
                description:
                  "Ramp up or down with flexible staffing and remote pods.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <item.icon className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Book a free IT consultation, get a staffing quote, or schedule a
            recruitment call today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-white/90"
              >
                Book Free Consultation
              </Button>
            </Link>
            <a href="tel:+918141381255">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Hire Remote Team Today
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesHub;

