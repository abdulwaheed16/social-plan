import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary-glow rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight animate-fade-in-up">
            Ready to Level Up Your Content Game?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Join thousands of creators who plan smarter, not harder
          </p>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-12 h-14 bg-white text-primary hover:bg-white/90 shadow-2xl"
              onClick={() => navigate("/app")}
            >
              Get Started Free
              <ArrowRight className="w-6 h-6" />
            </Button>
          </div>

          <p className="text-white/70 text-sm animate-fade-in" style={{ animationDelay: "0.3s" }}>
            No credit card required • Takes 30 seconds • Free forever
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
