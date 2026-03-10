import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin } from 'lucide-react';
import { OptimizedImage } from "@/components/OptimizedImage";
import shardulPhoto from "@/assets/shardul-gavit.jpeg";
import pavanPhoto from "@/assets/pavan-gavit.jpeg";

const Team = () => {
  const team = [
    {
      name: "Shardul Gavit",
      role: "CEO & Director",
      description: "Visionary leader with expertise in business strategy and digital transformation",
      skills: ["Business Strategy", "Digital Transformation", "Leadership", "Innovation"],
      image: shardulPhoto,
      email: "shardul@gaviteservices.com",
      linkedin: "https://www.linkedin.com/in/shardul-gavit-3b63091b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Pavan Gavit",
      role: "Co-founder",
      description: "Technical expert driving innovation and product development initiatives",
      skills: ["Product Development", "Technology Strategy", "Team Building", "Innovation"],
      image: pavanPhoto,
      email: "pavan@gaviteservices.com",
      linkedin: "https://www.linkedin.com/in/pavan-gavit-1a8b94226?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    }
  ];

  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section id="team" className="py-20 relative">
      {/* Background Image */}
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
            Meet the passionate professionals driving Gavit E-Services forward
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
              <div className="relative">
                <div className="w-full h-96 md:h-[450px] overflow-hidden bg-muted">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.description}</p>
                
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {member.skills.slice(0, 2).map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex justify-center space-x-3">
                  <button 
                    type="button"
                    className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
                    onClick={() => handleEmailClick(member.email)}
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-4 h-4 text-blue-600" />
                  </button>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors"
                    aria-label={`Connect with ${member.name} on LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4 text-slate-700" />
                  </a>
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
