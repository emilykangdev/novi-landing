import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/novi-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI-powered information management visualization"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 gradient-hero opacity-80"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-primary/20 rounded-full animate-float blur-sm"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-accent/30 rounded-full animate-float-delayed blur-sm"></div>
      <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-primary-glow/40 rounded-full animate-float blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <Badge className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 mr-2" />
          Your Voice-First AI Companion
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Stay informed.
          <br />
          <span className="glow-primary">Stay sane.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
          Keeping up with information and media is overwhelming — endless YouTube channels, RSS feeds, 
          and newsletters pile up until you just give up. <strong>Novi makes staying up to date fun.</strong>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Try it out
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="glass" size="lg" className="text-lg px-8 py-6">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};