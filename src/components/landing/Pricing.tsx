import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "1 month calendar view",
        "20 posts per month",
        "2 social platforms",
        "Basic templates",
        "Auto-save to browser",
      ],
      cta: "Start Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "$9",
      period: "/month",
      yearlyPrice: "$49/year",
      description: "For serious content creators",
      features: [
        "Unlimited calendar view",
        "Unlimited posts",
        "All social platforms",
        "100+ premium templates",
        "Advanced analytics",
        "Priority support",
        "Export to CSV/PDF",
        "Team collaboration (coming soon)",
      ],
      cta: "Go Pro",
      popular: true,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Start Free, Upgrade When Ready
          </h2>
          <p className="text-xl text-muted-foreground">
            No credit card required. Upgrade anytime to unlock premium features.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 relative animate-fade-in-up ${
                plan.popular 
                  ? "border-2 border-primary shadow-glow" 
                  : "border-border"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-hero rounded-full text-white text-sm font-medium flex items-center gap-1 shadow-lg">
                  <Sparkles className="w-4 h-4" />
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                {plan.yearlyPrice && (
                  <p className="text-sm text-muted-foreground">
                    or {plan.yearlyPrice} (save 54%)
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                className="w-full"
                size="lg"
                onClick={() => navigate("/app")}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        <p className="text-center mt-8 text-muted-foreground">
          ✨ <span className="font-semibold">Currently FREE during beta!</span> Pro features unlocked for all users.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
