import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Users, Layers, Brain, Briefcase, Receipt, CreditCard } from 'lucide-react';
import { OptimizedImage } from "@/components/OptimizedImage";

const SERVICES = [
    {
      icon: Users,
      title: "Virtual Assistant",
      description: "Dedicated VAs for admin, support, and operations — save 40–60% vs local hiring",
      features: ["Admin & Scheduling", "Customer Support", "Data Management", "Back-office Ops"],
      color: "from-purple-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: Layers,
      title: "ERP Development",
      description: "Custom ERP for manufacturing, retail, and trading — replace Excel with scalable systems",
      features: ["Inventory & SCM", "Finance & GST", "Multi-branch", "Industry Modules"],
      color: "from-blue-500 to-blue-600",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Bespoke software built exactly for your workflow — highest global demand segment",
      features: ["Workflow Automation", "Legacy Modernization", "API Integrations", "Cloud-native Apps"],
      color: "from-indigo-500 to-indigo-600",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: Smartphone,
      title: "Web App Development",
      description: "We build web applications, not just websites — PWAs, portals, and SaaS products",
      features: ["Progressive Web Apps", "SaaS Platforms", "Customer Portals", "Full-stack Delivery"],
      color: "from-cyan-500 to-cyan-600",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: Brain,
      title: "AI Software Development",
      description: "Custom AI, LLM integrations, and intelligent automation — 92% of companies want it",
      features: ["LLM Integration", "AI Assistants", "Process Automation", "Generative AI"],
      color: "from-violet-500 to-violet-600",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: Briefcase,
      title: "IT Consultancy",
      description: "Virtual CIO and digital transformation consulting for growing SMBs",
      features: ["Technology Roadmaps", "Architecture Review", "Vendor Selection", "Digital Strategy"],
      color: "from-orange-500 to-orange-600",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: Receipt,
      title: "GST Billing Software",
      description: "Affordable GST billing for Indian SMBs — invoices, payments, and compliance",
      features: ["GST Invoicing", "Payment Tracking", "GSTR Reports", "Free Plan Available"],
      color: "from-green-500 to-green-600",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: CreditCard,
      title: "Custom Billing Software",
      description: "Billing systems tailored to retail, manufacturing, and services industries",
      features: ["Custom Workflows", "Multi-currency", "ERP Integration", "Subscription Billing"],
      color: "from-teal-500 to-teal-600",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=400&q=80"
    }
] as const;

const Services = () => {
  return (
    <section id="services" className="py-20 relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <OptimizedImage
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1920&q=80" 
          alt="Services background – IT solutions and consulting"
          className="w-full h-full"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/95"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            VA, ERP, custom software, AI, and billing — one India-based partner for businesses worldwide
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
              <div className="relative h-48">
                <OptimizedImage
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className={`absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
