import { Calendar, Palette, Hash, BarChart3, Smartphone, Save } from "lucide-react";
import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Visual Calendar",
      description: "Drag & drop scheduling with month, week, and day views. See your entire content strategy at a glance.",
      gradient: "from-primary to-primary-glow",
    },
    {
      icon: Palette,
      title: "Content Templates",
      description: "50+ ready-to-use post templates for every occasion. From product launches to engagement posts.",
      gradient: "from-secondary to-accent",
    },
    {
      icon: Hash,
      title: "Hashtag Library",
      description: "Organized hashtag groups by niche. Save time with pre-built collections and create your own.",
      gradient: "from-accent to-secondary",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Track your consistency score, posting patterns, and platform distribution. Stay on top of your game.",
      gradient: "from-primary-glow to-primary",
    },
    {
      icon: Smartphone,
      title: "Multi-Platform",
      description: "Plan for Instagram, Twitter, LinkedIn, TikTok, and more. All your content in one place.",
      gradient: "from-secondary to-primary",
    },
    {
      icon: Save,
      title: "Auto-Save",
      description: "Never lose your work. Everything is saved automatically to your browser. Works offline too.",
      gradient: "from-accent to-primary-glow",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to Stay Consistent
          </h2>
          <p className="text-xl text-muted-foreground">
            All the tools you need to plan, organize, and execute your content strategy like a pro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
