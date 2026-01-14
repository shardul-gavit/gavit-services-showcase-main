import React, { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Instagram, Linkedin, Globe, CheckCircle, Loader2 } from 'lucide-react';

// API endpoint for contact form submission
// This uses a Vercel serverless function as a proxy to handle CORS
const API_ENDPOINT = "/api/contact";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionData = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.toLowerCase().trim(),
      phone: formData.phone.replace(/\D/g, ''), // Only digits
      service: formData.service.trim(),
      message: formData.message.trim(),
      timestamp: new Date().toISOString(),
    };

    try {
      // Send to Vercel API route (which proxies to Google Apps Script)
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit contact form");
      }

      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission failed:', error);
      // Fallback: Open mailto link
      const subject = encodeURIComponent(`New Inquiry from ${formData.firstName} ${formData.lastName} - ${formData.service}`);
      const body = encodeURIComponent(
        `Name: ${formData.firstName} ${formData.lastName}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Service Interest: ${formData.service}\n\n` +
        `Message:\n${formData.message}`
      );
      window.location.href = `mailto:gaviteservice26@gmail.com?subject=${subject}&body=${body}`;
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:gaviteservice26@gmail.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+918141381255';
  };

  const resetForm = () => {
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1920&q=80" 
          alt="Contact background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-blue-900/90"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can help your business grow
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Office Address</h4>
                    <p className="text-white/80">Vadodara, Gujarat, India</p>
                  </div>
                </div>
                
                <div 
                  className="flex items-start space-x-4 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={handlePhoneClick}
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Phone Number</h4>
                    <p className="text-white/80">+91 81413 81255</p>
                  </div>
                </div>
                
                <div 
                  className="flex items-start space-x-4 cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={handleEmailClick}
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Email Address</h4>
                    <p className="text-white/80">gaviteservice26@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Website</h4>
                    <p className="text-white/80">www.gaviteservice.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/company/gavit-e-services/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-200 transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-blue-600" />
                </a>
                <a 
                  href="https://www.instagram.com/gaviteservices" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center cursor-pointer hover:bg-pink-200 transition-colors"
                >
                  <Instagram className="w-6 h-6 text-pink-600" />
                </a>
                <div 
                  className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center cursor-pointer hover:bg-indigo-200 transition-colors"
                  onClick={handleEmailClick}
                >
                  <Mail className="w-6 h-6 text-indigo-600" />
                </div>
              </div>
            </div>
            
            {/* Office Image */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80" 
                alt="Modern office workspace"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-700 mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-4">
                      Your message has been sent successfully. We've also sent a confirmation to your email.
                    </p>
                    <p className="text-gray-500 text-sm">
                      Our team will review your inquiry and contact you within 24-48 hours.
                    </p>
                  </div>
                  <Button 
                    onClick={resetForm}
                    variant="outline"
                    className="mt-4"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name</label>
                      <Input 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter your first name" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name</label>
                      <Input 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter your last name" 
                        required 
                      />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address" 
                      required 
                    />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone</label>
                    <Input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number" 
                      required 
                    />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Service Interest</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-input rounded-md bg-background" 
                      required
                    >
                    <option value="">Select a service</option>
                      <option value="IT Services & Consulting">IT Services & Consulting</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Staffing & Recruitment">Staffing & Recruitment</option>
                      <option value="Remote Staffing">Remote Staffing</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Business Consulting">Business Consulting</option>
                      <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project requirements" 
                      rows={4} 
                      required 
                    />
                </div>
                
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                </Button>
                  
                  <p className="text-xs text-center text-muted-foreground">
                    By submitting this form, you agree to receive a confirmation email at the address provided.
                  </p>
              </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
