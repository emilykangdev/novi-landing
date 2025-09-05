import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Code, Palette, Zap } from "lucide-react";

const roles = [
  {
    icon: Code,
    title: "Backend Integration",
    description: "YouTube, RSS, Notion/Docs APIs"
  },
  {
    icon: Zap,
    title: "AI/Agents",
    description: "LLMs, summarization, conversation"
  },
  {
    icon: Palette,
    title: "Frontend/Design",
    description: "Polished user experience"
  }
];

export const CallToActionSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-16">
          <Users className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Join the Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm looking for <strong>2 teammates</strong> to help make this real at the hackathon. 
            Let's build something delightful that turns information overload into something you actually enjoy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {roles.map((role, index) => (
            <Card 
              key={index}
              className="gradient-card border-0 shadow-card hover:shadow-hover transition-smooth group"
            >
              <CardContent className="p-6">
                <role.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-smooth" />
                <h3 className="text-lg font-bold mb-2 text-foreground">
                  {role.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {role.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="gradient-hero rounded-3xl p-12 text-white shadow-primary">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Build the Future of Information?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            ✨ Imagine: instead of doomscrolling, you just ask Novi, "What's new with the channels I follow?" 
            and it gives you quick, clear summaries — in your voice notes, your docs, or even as a daily spoken briefing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass" size="lg" className="text-lg px-8">
              I'm Interested!
            </Button>
            <Button variant="premium" size="lg" className="text-lg px-8 bg-white text-primary hover:bg-white/90">
              Learn More About the Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};