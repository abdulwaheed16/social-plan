const SocialProof = () => {
  const stats = [
    { value: "50K+", label: "Posts Planned" },
    { value: "5K+", label: "Hours Saved" },
    { value: "10K+", label: "Happy Creators" },
    { value: "4.9★", label: "Average Rating" },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-muted-foreground mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
