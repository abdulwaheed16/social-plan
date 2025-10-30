import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Is my data private and secure?",
      answer: "Yes! All your data is stored locally in your browser. We don't have access to your content, and nothing is sent to our servers. You have complete control and privacy.",
    },
    {
      question: "Do I need to create an account?",
      answer: "No account needed to get started! Your data is saved automatically in your browser. We'll add optional accounts in the future for cloud sync and team features.",
    },
    {
      question: "Can I use it offline?",
      answer: "Absolutely! SocialPlan Pro works completely offline. Once loaded, you can plan your content anywhere without an internet connection.",
    },
    {
      question: "Which social media platforms are supported?",
      answer: "We support Instagram, Twitter (X), LinkedIn, TikTok, Facebook, Pinterest, and YouTube. Each platform has specific character limits and best practices built-in.",
    },
    {
      question: "How do I export my calendar?",
      answer: "You can export your calendar to CSV for use in Excel/Sheets, or copy individual posts directly to your clipboard. PDF export is available in Pro.",
    },
    {
      question: "Is there a mobile app?",
      answer: "Not yet, but our web app is fully responsive and works great on mobile browsers. A native mobile app is on our roadmap for 2025!",
    },
    {
      question: "Can I share my calendar with my team?",
      answer: "Team collaboration features are coming soon! You'll be able to invite team members, assign posts, and collaborate in real-time.",
    },
    {
      question: "What happens if I exceed free plan limits?",
      answer: "You'll be prompted to upgrade to Pro. During beta, all Pro features are free, so you can test everything without limits!",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about SocialPlan Pro
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
