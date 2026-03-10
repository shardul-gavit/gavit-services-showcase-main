import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Globe, Smartphone, ShoppingCart, GraduationCap, Heart, Building, Truck } from 'lucide-react';
import { OptimizedImage } from "@/components/OptimizedImage";

const Projects = () => {
  const projects = [
    {
      icon: ShoppingCart,
      title: "E-Commerce Platform - GlobalMart",
      description: "Complete e-commerce solution with payment integration, inventory management, and mobile app",
      client: "Retail Chain - India",
      technologies: ["React", "Node.js", "MongoDB", "React Native", "Stripe"],
      results: ["300% increase in online sales", "50k+ active users", "99.9% uptime"],
      category: "E-Commerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: GraduationCap,
      title: "Learning Management System - EduTech Pro",
      description: "Comprehensive LMS with video streaming, assessments, and progress tracking",
      client: "Education Institute - UK",
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS", "WebRTC"],
      results: ["10k+ students enrolled", "95% completion rate", "Multilingual support"],
      category: "Education",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Heart,
      title: "Healthcare Management System - MediCare",
      description: "Patient management, appointment scheduling, and telemedicine platform",
      client: "Healthcare Provider - UAE",
      technologies: ["Angular", "Django", "PostgreSQL", "Docker", "WebSocket"],
      results: ["5k+ patients managed", "40% faster appointments", "HIPAA compliant"],
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Building,
      title: "Real Estate CRM - PropManage",
      description: "Property management system with virtual tours and client management",
      client: "Real Estate Firm - Canada",
      technologies: ["Next.js", "Express.js", "MongoDB", "Three.js", "Cloudinary"],
      results: ["70% faster lead conversion", "Virtual tour feature", "Mobile-responsive"],
      category: "Real Estate",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Truck,
      title: "Logistics Tracking System - LogiTrack",
      description: "Real-time package tracking with GPS integration and delivery optimization",
      client: "Logistics Company - US",
      technologies: ["React Native", "Node.js", "Redis", "Google Maps API", "Socket.io"],
      results: ["Real-time tracking", "30% delivery optimization", "Customer satisfaction 98%"],
      category: "Logistics",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
    },
    {
      icon: Globe,
      title: "Digital Marketing Suite - BrandBoost",
      description: "Comprehensive digital marketing platform with analytics and automation",
      client: "Marketing Agency - India",
      technologies: ["React", "Python", "FastAPI", "Redis", "Chart.js"],
      results: ["500+ campaigns managed", "85% ROI improvement", "Automated reporting"],
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const handleCaseStudy = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewAllProjects = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-20 relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <OptimizedImage
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" 
          alt="Projects background – IT solutions portfolio"
          className="w-full h-full"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gray-50/95"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing our expertise through successful project deliveries across various industries
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="relative h-48">
                <OptimizedImage
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <project.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="text-sm">{project.description}</CardDescription>
                <p className="text-xs text-muted-foreground font-medium">{project.client}</p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-xs text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                    onClick={handleCaseStudy}
                  >
                    View Case Study <ExternalLink className="ml-2 w-3 h-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" onClick={handleViewAllProjects}>
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
