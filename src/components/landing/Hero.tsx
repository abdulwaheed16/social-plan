import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Calendar, ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-calendar.png";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-glow rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">Trusted by 10,000+ Creators</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Plan 30 Days of Content in{" "}
              <span className="text-accent">30 Minutes</span>
            </h1>

            <p className="text-xl text-white/90 max-w-2xl">
              The visual content calendar that helps creators stay consistent and grow faster. 
              No more scrambling for post ideas or missing your schedule.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8"
                onClick={() => navigate("/app")}
              >
                Start Planning Free
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-white/80 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                ✓ No Credit Card Required
              </div>
              <div className="flex items-center gap-2">
                ✓ Works Offline
              </div>
              <div className="flex items-center gap-2">
                ✓ Free Forever
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="SocialPlan Pro Calendar Interface" 
                className="w-full rounded-2xl shadow-2xl border border-white/20"
              />
              <div className="absolute -inset-4 bg-gradient-hero rounded-2xl blur-2xl opacity-30 -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
