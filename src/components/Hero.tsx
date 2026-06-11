import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Code, Users } from 'lucide-react';
import { OptimizedImage } from "@/components/OptimizedImage";
import { scrollToElementId } from "@/lib/scroll";

const HERO_FEATURES = [
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving clients across India, US, UAE, UK & Canada",
    color: "text-blue-400",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80"
  },
  {
    icon: Code,
    title: "Tech Excellence",
    description: "Cutting-edge solutions in web, mobile & cloud",
    color: "text-purple-400",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Industry professionals delivering quality results",
    color: "text-green-400",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80"
  }
] as const;

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0">
        <OptimizedImage
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80" 
          alt="Technology background – IT services company in Vadodara"
          className="w-full h-full"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-purple-900/80"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-blue-100/90 text-blue-700 rounded-full text-sm font-medium mb-6">
              🚀 Founded in 2020 • Growing Rapidly
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
            One Partner for VA, ERP, AI & Software
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in">
            India-based operations & tech company trusted by businesses in USA, UK, Canada & beyond. Get started in 48 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={() => scrollToElementId('contact')}
            >
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => scrollToElementId('projects')}
            >
              View Our Work
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {HERO_FEATURES.map((feature) => (
              <div key={feature.title} className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-white/20">
                <div className="relative h-32">
                  <OptimizedImage
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full"
                    placeholder="blur"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <feature.icon className={`w-8 h-8 ${feature.color} absolute bottom-3 left-3`} />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-white/80 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
