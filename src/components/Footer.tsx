import { Sparkles, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-bold text-foreground">Novi</span>
        </div>
        
        <p className="text-muted-foreground mb-4">
          Making information consumption delightful, one summary at a time.
        </p>
        
        <div className="mb-4">
          <Link 
            to="/privacy-policy" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline"
          >
            Privacy Policy
          </Link>
        </div>
        
        <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground">
          <span>Built with</span>
          <Heart className="w-4 h-4 text-red-500 mx-1" />
          <span>for the hackathon</span>
        </div>
      </div>
    </footer>
  );
};