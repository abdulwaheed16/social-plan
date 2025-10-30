import { Calendar, Edit, Download } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Pick a Date",
      description: "Click any day on the calendar to start planning your content.",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: Edit,
      title: "Create Post",
      description: "Write your caption, add hashtags, select platforms, and set posting time.",
      color: "text-secondary",
      bg: "bg-secondary/10",
    },
    {
      icon: Download,
      title: "Export & Schedule",
      description: "Download your calendar or copy posts to your favorite scheduling tool.",
      color: "text-accent",
      bg: "bg-accent/10",
    },
  ];

  return (
    <section className="py-24 bg-gradient-card">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Three Steps to Content Success
          </h2>
          <p className="text-xl text-muted-foreground">
            Our intuitive workflow makes content planning a breeze
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection lines - hidden on mobile */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-30 -z-10" />

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-20 h-20 rounded-full ${step.bg} flex items-center justify-center mb-6 relative z-10 bg-background border-4 border-background shadow-lg`}>
                      <Icon className={`w-10 h-10 ${step.color}`} />
                    </div>
                    <div className="absolute top-6 -left-4 text-6xl font-bold text-muted/20 -z-10">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
