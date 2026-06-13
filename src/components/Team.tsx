import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, ExternalLink } from 'lucide-react';
import { OptimizedImage } from "@/components/OptimizedImage";
import shardulPhoto from "@/assets/shardul-gavit.jpeg";
import pavanPhoto from "@/assets/pavan-gavit.jpeg";

const openMemberEmail = (email: string) => {
  window.location.href = `mailto:${email}`;
};

const TEAM = [
    {
      name: "Shardul Gavit",
      role: "CEO & Director",
      description: "Visionary leader with expertise in business strategy and digital transformation",
      skills: ["Business Strategy", "Digital Transformation", "Leadership", "Innovation"],
      image: shardulPhoto,
      email: "info@gaviteservice.com",
      linkedin: "https://www.linkedin.com/in/shardul-gavit-3b63091b8/"
    },
    {
      name: "Pavan Gavit",
      role: "Co-founder & CTO",
      description: "Technical expert driving innovation and product development initiatives",
      skills: ["Product Development", "Technology Strategy", "Team Building", "Innovation"],
      image: pavanPhoto,
      email: "info@gaviteservice.com",
      linkedin: "https://www.linkedin.com/in/pavan-gavit-1a8b94226/"
    }
] as const;

const Team = () => {
  return (
    <section id="team" className="py-20 relative">
      <div className="absolute inset-0">
        <OptimizedImage
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80" 
          alt="Team background – leadership in IT staffing"
          className="w-full h-full"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/90"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meet the founders driving Gavit E-Services — direct access, no account-manager layers
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {TEAM.map((member) => (
            <Card key={member.name} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-blue-100/80">
              <div className="relative">
                <div className="w-full h-[420px] md:h-[480px] overflow-hidden bg-muted">
                  <img 
                    src={member.image} 
                    alt={`${member.name}, ${member.role} at Gavit E-Services`}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm text-white/70 uppercase tracking-[0.2em] mb-1">{member.role}</p>
                  <h3 className="text-2xl md:text-3xl font-bold">{member.name}</h3>
                </div>
              </div>
              
              <CardContent className="pt-6 space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    onClick={() => openMemberEmail(member.email)}
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </Button>
                  <Button
                    size="sm"
                    className="gap-2 bg-[#0A66C2] hover:bg-[#0A66C2]/90"
                    asChild
                  >
                    <a href={member.linkedin} target="_blank" rel="noreferrer">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn Profile
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
