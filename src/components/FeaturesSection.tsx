import { Card, CardContent } from "@/components/ui/card";
import { Bot, FolderOpen, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Bot,
    emoji: "🤖",
    title: "24/7 AI Agents",
    description: "Agents run continuously, auto-summarizing content from your RSS feeds and YouTube channels so you never miss what matters."
  },
  {
    icon: FolderOpen,
    emoji: "📂",
    title: "Seamless Integration",
    description: "Summaries drop straight into your Notion or Google Docs — so you're never locked in and can access everything where you work."
  },
  {
    icon: MessageCircle,
    emoji: "🗣️",
    title: "Conversational AI",
    description: "Talk to Novi or ask it questions. Novi can also talk back — like a living, friendly companion that helps you stay informed without stress."
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            How Novi Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Instead of doomscrolling, just ask Novi "What's new with the channels I follow?" 
            and get quick, clear summaries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="gradient-card border-0 shadow-card hover:shadow-hover transition-smooth group cursor-pointer"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  <div className="text-6xl mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                    {feature.emoji}
                  </div>
                  <feature.icon className="w-8 h-8 text-primary mx-auto opacity-50 group-hover:opacity-100 transition-smooth" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};