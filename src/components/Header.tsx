import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-bold text-white">Novi</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-white/80 hover:text-white transition-smooth">
            Features
          </a>
          <a href="#why" className="text-white/80 hover:text-white transition-smooth">
            Why Novi?
          </a>
          <a href="#team" className="text-white/80 hover:text-white transition-smooth">
            Join Team
          </a>
        </nav>
        
        <Button variant="glass" size="sm">
          Get Started
        </Button>
      </div>
    </header>
  );
};