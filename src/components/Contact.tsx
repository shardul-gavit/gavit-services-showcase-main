import React, { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Instagram, Linkedin, Globe, CheckCircle, Loader2 } from 'lucide-react';
import { SERVICE_OPTIONS } from "@/constants/serviceOptions";
import { DpdpConsentFields } from "@/components/DpdpConsentFields";
import { trackGenerateLead, trackPhoneClick } from "@/utils/analytics";

// API endpoint for contact form submission
// This uses a Vercel serverless function as a proxy to handle CORS
const API_ENDPOINT = "/api/contact";

const openEmail = () => {
  window.location.href = 'mailto:gaviteservice26@gmail.com';
};

const openPhone = () => {
  trackPhoneClick();
  window.location.href = 'tel:+918141381255';
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    privacyConsent: false,
    marketingConsent: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.privacyConsent) {
      setSubmitError("Please provide consent to process your personal data under our Privacy Policy.");
      return;
    }

    setSubmitError('');
    setIsSubmitting(true);

    const submissionData = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.toLowerCase().trim(),
      phone: formData.phone.replace(/\D/g, ''), // Only digits
      service: formData.service.trim(),
      message: formData.message.trim(),
      privacyConsent: formData.privacyConsent,
      marketingConsent: formData.marketingConsent,
      consentTimestamp: new Date().toISOString(),
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

      trackGenerateLead('contact_form');
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        privacyConsent: false,
        marketingConsent: false,
      });
    } catch (error) {
      console.error('Form submission failed:', error);
      
      setSubmitError('Something went wrong. Please try again or WhatsApp us.');

      // Fallback: Open mailto link
      try {
        const subject = encodeURIComponent(`New Inquiry from ${formData.firstName} ${formData.lastName} - ${formData.service}`);
        const body = encodeURIComponent(
          `Name: ${formData.firstName} ${formData.lastName}\n` +
          `Email: ${formData.email}\n` +
          `Phone: ${formData.phone}\n` +
          `Service Interest: ${formData.service}\n\n` +
          `Message:\n${formData.message}`
        );
        window.location.href = `mailto:gaviteservice26@gmail.com?subject=${subject}&body=${body}`;
      } catch (mailtoError) {
        console.error('Failed to open mailto link:', mailtoError);
      }
      
      setIsSubmitting(false);
    }
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
                
                <button
                  type="button"
                  className="flex items-start space-x-4 cursor-pointer hover:opacity-80 transition-opacity text-left w-full"
                  onClick={openPhone}
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Phone Number</h4>
                    <p className="text-white/80">+91 81413 81255</p>
                  </div>
                </button>
                
                <button
                  type="button"
                  className="flex items-start space-x-4 cursor-pointer hover:opacity-80 transition-opacity text-left w-full"
                  onClick={openEmail}
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Email Address</h4>
                    <p className="text-white/80">gaviteservice26@gmail.com</p>
                  </div>
                </button>
                
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
                <button
                  type="button"
                  className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center cursor-pointer hover:bg-indigo-200 transition-colors"
                  onClick={openEmail}
                  aria-label="Email Gavit E-Services"
                >
                  <Mail className="w-6 h-6 text-indigo-600" />
                </button>
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
                      <label htmlFor="contact-firstName" className="text-sm font-medium mb-2 block">First Name</label>
                      <Input 
                        id="contact-firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter your first name" 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-lastName" className="text-sm font-medium mb-2 block">Last Name</label>
                      <Input 
                        id="contact-lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter your last name" 
                        required 
                      />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="contact-email" className="text-sm font-medium mb-2 block">Email</label>
                    <Input 
                      id="contact-email"
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address" 
                      required 
                    />
                </div>
                
                <div>
                  <label htmlFor="contact-phone" className="text-sm font-medium mb-2 block">Phone</label>
                    <Input 
                      id="contact-phone"
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number" 
                      required 
                    />
                </div>
                
                <div>
                  <label htmlFor="contact-service" className="text-sm font-medium mb-2 block">Service Interest</label>
                    <select 
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-input rounded-md bg-background" 
                      required
                    >
                    <option value="">Select a service</option>
                      {SERVICE_OPTIONS.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="contact-message" className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea 
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project requirements" 
                      rows={4} 
                      required 
                    />
                </div>

                <DpdpConsentFields
                  privacyConsent={formData.privacyConsent}
                  marketingConsent={formData.marketingConsent}
                  onPrivacyChange={(checked) => setFormData((prev) => ({ ...prev, privacyConsent: checked }))}
                  onMarketingChange={(checked) => setFormData((prev) => ({ ...prev, marketingConsent: checked }))}
                />
                
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    disabled={isSubmitting || !formData.privacyConsent}
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

                  {submitError && (
                    <p role="alert" className="text-red-500 text-sm mt-2">{submitError}</p>
                  )}
                  
                  <p className="text-xs text-center text-muted-foreground">
                    Your data is processed per India&apos;s DPDP Act, 2023. See our Privacy Policy for rights and grievance contact.
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
