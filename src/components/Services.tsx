import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Palette, Search, Users, BarChart3, PenTool, TrendingUp } from 'lucide-react';
import { OptimizedImage } from "@/components/OptimizedImage";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "IT & Software Solutions",
      description: "Custom web development, mobile apps, UI/UX design, and software testing",
      features: ["Custom Web Development", "Mobile App Development", "UI/UX Design", "Software Testing"],
      color: "from-blue-500 to-blue-600",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: Search,
      title: "Digital Marketing",
      description: "SEO, social media marketing, PPC advertising, and brand strategy",
      features: ["Search Engine Optimization", "Social Media Marketing", "PPC Advertising", "Brand Strategy"],
      color: "from-green-500 to-green-600",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: Users,
      title: "Staffing & Recruitment",
      description: "IT & non-IT staffing, virtual assistants, and HR outsourcing",
      features: ["IT & Non-IT Staffing", "Virtual Assistant Services", "HR Outsourcing", "Talent Acquisition"],
      color: "from-purple-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: PenTool,
      title: "Graphic & Branding",
      description: "Logo design, brand identity, marketing materials, and presentations",
      features: ["Logo Design", "Brand Identity", "Marketing Materials", "Presentations"],
      color: "from-pink-500 to-pink-600",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: BarChart3,
      title: "Business Consulting",
      description: "Financial analysis, market research, and growth strategies",
      features: ["Financial Analysis", "Market Research", "Growth Strategies", "MSME Consulting"],
      color: "from-orange-500 to-orange-600",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: TrendingUp,
      title: "Market Research",
      description: "Global market research and business intelligence solutions",
      features: ["Market Analysis", "Competitor Research", "Industry Reports", "Business Intelligence"],
      color: "from-teal-500 to-teal-600",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80"
    }
  ];

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
            Comprehensive solutions to drive your business forward with innovation and expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
              <div className="relative h-48">
                <OptimizedImage
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
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
