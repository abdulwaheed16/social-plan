import { X, ArrowRight, Check } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    "Spending hours planning posts",
    "Inconsistent posting schedule",
    "Running out of content ideas",
  ];

  const solutions = [
    "Plan in minutes with templates",
    "Never miss a posting day",
    "Built-in content prompts",
  ];

  return (
    <section className="py-24 bg-gradient-card">
      <div className="container px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Stop Scrambling for Content Ideas
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Problems */}
          <div className="space-y-6">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{problem}</p>
              </div>
            ))}
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center">
            <ArrowRight className="w-12 h-12 text-primary animate-float" />
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-success/10 border border-success/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
