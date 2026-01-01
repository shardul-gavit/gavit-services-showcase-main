
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const WhatsAppChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello! I'm interested in your services. Can you help me?");
    window.open(`https://wa.me/918141381255?text=${message}`, '_blank');
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleChat}
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
          size="icon"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-6 h-6 text-white" />
          )}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-lg shadow-xl border z-50 overflow-hidden">
          <div className="bg-green-500 text-white p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <h3 className="font-semibold">Gavit E-Services</h3>
                <p className="text-sm opacity-90">We're here to help!</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 space-y-4">
            <div className="bg-gray-100 rounded-lg p-3">
              <p className="text-sm text-gray-700">
                👋 Hello! Welcome to Gavit E-Services. How can we help you today?
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700">Quick Actions:</p>
              <div className="space-y-2">
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full text-left p-2 text-sm bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
                >
                  💬 Chat with us on WhatsApp
                </button>
                <button
                  onClick={() => {
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                    setIsOpen(false);
                  }}
                  className="w-full text-left p-2 text-sm bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                >
                  🔍 Explore Our Services
                </button>
                <button
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    setIsOpen(false);
                  }}
                  className="w-full text-left p-2 text-sm bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
                >
                  📞 Get in Touch
                </button>
              </div>
            </div>
            
            <div className="text-center">
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white"
              >
                Start WhatsApp Chat
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppChatbot;
