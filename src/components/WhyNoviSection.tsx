import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, BookOpen, Sparkles } from "lucide-react";

export const WhyNoviSection = () => {
  return (
    <section className="py-20 px-6 gradient-subtle">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
          Why "Novi"?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="gradient-card border-0 shadow-card">
            <CardContent className="p-8">
              <div className="mb-6">
                <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-2xl font-mono font-bold text-primary mb-2">
                  novus = new
                </div>
              </div>
              <p className="text-lg text-muted-foreground">
                Freshness, novelty, always up to date. Novi keeps you current with 
                the latest information without the overwhelm.
              </p>
            </CardContent>
          </Card>
          
          <Card className="gradient-card border-0 shadow-card">
            <CardContent className="p-8">
              <div className="mb-6">
                <BookOpen className="w-12 h-12 text-accent mx-auto mb-4" />
                <div className="text-2xl font-mono font-bold text-accent mb-2">
                  novi = I know / I learn
                </div>
              </div>
              <p className="text-lg text-muted-foreground">
                Novi learns and remembers for you, becoming smarter about what 
                information matters most to you.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
          <Lightbulb className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
          <p className="text-xl text-foreground font-medium leading-relaxed">
            <strong>Sleek, neutral, and approachable</strong> — perfect for an AI sidekick 
            that turns information overload into something you actually enjoy.
          </p>
        </div>
      </div>
    </section>
  );
};