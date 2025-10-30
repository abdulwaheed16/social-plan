import { Card } from "@/components/ui/card";
import { Star, Instagram, Twitter, Linkedin } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Content Creator",
      handle: "@sarahcreates",
      avatar: "SC",
      quote: "SocialPlan Pro saved me 10 hours a week. I finally have time to actually create content instead of just planning it!",
      platforms: [Instagram, Twitter],
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Social Media Manager",
      handle: "@marcusmarketing",
      avatar: "MR",
      quote: "Managing 5 clients used to be chaos. Now I can see everything at a glance and never miss a deadline. Game changer!",
      platforms: [Linkedin, Twitter],
      rating: 5,
    },
    {
      name: "Emily Thompson",
      role: "Lifestyle Blogger",
      handle: "@emilylifestyle",
      avatar: "ET",
      quote: "The hashtag library alone is worth it. I've seen a 40% increase in engagement since using organized hashtag groups.",
      platforms: [Instagram],
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-gradient-card">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by Content Creators
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of creators who've transformed their content workflow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-white font-bold flex-shrink-0">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-primary">{testimonial.handle}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex gap-2">
                {testimonial.platforms.map((Platform, i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                    <Platform className="w-3 h-3 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
