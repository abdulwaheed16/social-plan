import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const screenshots = [
    {
      title: "Calendar View",
      description: "See your entire month at a glance with color-coded posts",
    },
    {
      title: "Post Editor",
      description: "Intuitive editor with platform-specific character limits",
    },
    {
      title: "Analytics Dashboard",
      description: "Track your consistency and identify posting patterns",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See It in Action
          </h2>
          <p className="text-xl text-muted-foreground">
            Explore the features that make SocialPlan Pro the best content calendar
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Screenshot placeholder with annotation */}
          <div className="relative bg-gradient-card rounded-2xl p-8 border border-border shadow-xl">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
              <div className="relative z-10 text-center p-8">
                <h3 className="text-3xl font-bold mb-3">{screenshots[currentSlide].title}</h3>
                <p className="text-lg text-muted-foreground">{screenshots[currentSlide].description}</p>
              </div>
              
              {/* Feature annotations */}
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-float">
                ✨ Key Feature
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <Button 
                variant="outline" 
                size="icon"
                onClick={prevSlide}
                className="rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex gap-2">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide 
                        ? "bg-primary w-8" 
                        : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <Button 
                variant="outline" 
                size="icon"
                onClick={nextSlide}
                className="rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
