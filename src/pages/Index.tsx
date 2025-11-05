import { Instagram, Globe, MapPin, Phone, Download, UserPlus } from "lucide-react";
import { ActionButton } from "@/components/ActionButton";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import logo from "@/assets/logo.webp";
import farmBackground from "@/assets/farm-background.jpg";

const Index = () => {
  // Edit these values for your business
  const contactInfo = {
    phoneNumber: "91XXXXXXXXXX", // Replace with actual number (country code without +)
    displayPhone: "+91 XXXX-XXXXXX",
    email: "info@arambagh.com",
    instagram: "https://instagram.com/arambagh",
    website: "https://arambagh.com",
    mapsLink: "https://maps.google.com/?q=Aram+Bagh",
    brochureUrl: "/brochure.pdf", // Add your brochure PDF to public folder
    vCardUrl: "/contact.vcf",
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 relative"
      style={{
        backgroundImage: `url(${farmBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />

      {/* Main Card */}
      <main className="relative z-10 w-full max-w-2xl">
        <div className="glass-card rounded-3xl shadow-2xl p-8 md:p-12 border border-border/50 animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src={logo} 
              alt="Aram Bagh Logo" 
              className="h-24 md:h-32 object-contain drop-shadow-lg"
            />
          </div>

          {/* Company Name */}
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Aram Bagh
          </h1>

          {/* Tagline */}
          <p className="text-center text-muted-foreground text-lg md:text-xl mb-10 font-light">
            Experience Tranquility in Nature's Embrace
          </p>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-10" />

          {/* Action Buttons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <ActionButton
              icon={Instagram}
              label="Follow on Instagram"
              href={contactInfo.instagram}
              variant="accent"
            />
            
            <ActionButton
              icon={Globe}
              label="Visit Website"
              href={contactInfo.website}
              variant="primary"
            />
            
            <ActionButton
              icon={Phone}
              label="Call Now"
              href={`tel:${contactInfo.displayPhone}`}
              variant="primary"
            />
            
            <ActionButton
              icon={MapPin}
              label="Get Directions"
              href={contactInfo.mapsLink}
              variant="secondary"
            />
            
            <ActionButton
              icon={Download}
              label="Download Brochure"
              href={contactInfo.brochureUrl}
              variant="secondary"
            />
            
            <ActionButton
              icon={UserPlus}
              label="Save Contact"
              href={contactInfo.vCardUrl}
              variant="accent"
            />
          </div>

          {/* Contact Info */}
          <div className="text-center space-y-2 pt-6 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              <a href={`tel:${contactInfo.displayPhone}`} className="hover:text-primary transition-colors">
                {contactInfo.displayPhone}
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors">
                {contactInfo.email}
              </a>
            </p>
          </div>

          {/* Footer */}
          <footer className="mt-10 pt-6 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Aram Bagh. All rights reserved.
            </p>
          </footer>
        </div>
      </main>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp phoneNumber={contactInfo.phoneNumber} />
    </div>
  );
};

export default Index;
