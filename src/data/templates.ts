export interface Template {
  id: string;
  name: string;
  caption: string;
  hashtags: string[];
  platforms: string[];
  category: string;
}

export const contentTemplates: Template[] = [
  {
    id: "product-launch",
    name: "Product Launch",
    caption: "🚀 Exciting news! We're thrilled to introduce our latest product that's about to change the game.\n\nAfter months of hard work and dedication, we're finally ready to share this with you. This isn't just another product – it's a solution designed with YOU in mind.\n\n✨ What makes it special:\n• [Feature 1]\n• [Feature 2]\n• [Feature 3]\n\nWho's ready to try it? Drop a 🙌 in the comments!\n\n[Link in bio]",
    hashtags: ["#newproduct", "#productlaunch", "#innovation", "#comingsoon"],
    platforms: ["Instagram", "LinkedIn", "Twitter"],
    category: "Product"
  },
  {
    id: "behind-scenes",
    name: "Behind the Scenes",
    caption: "Ever wondered what goes on behind the scenes? 👀\n\nToday, we're pulling back the curtain to show you the real work that happens to bring our products/services to life.\n\nFrom early morning brainstorming sessions to late-night debugging – this is what dedication looks like. Our team puts their heart and soul into everything we create.\n\nWhat would you like to see more of? Let us know! 👇",
    hashtags: ["#behindthescenes", "#teamwork", "#companyculture", "#transparency"],
    platforms: ["Instagram", "LinkedIn", "Facebook"],
    category: "Brand"
  },
  {
    id: "tip-tuesday",
    name: "Tip Tuesday",
    caption: "💡 Tuesday Tip Alert!\n\nHere's a quick tip that can make a huge difference in your [industry/area]:\n\n[Insert valuable tip here]\n\nPro tip: [Additional insight]\n\nTry this out and let us know how it works for you! Have you tried this before? Share your experience below. 👇\n\nSave this post for later and share it with someone who needs to see this!",
    hashtags: ["#tiptuesday", "#protip", "#productivity", "#lifehack", "#tuesdaytips"],
    platforms: ["Instagram", "Twitter", "LinkedIn"],
    category: "Educational"
  },
  {
    id: "customer-spotlight",
    name: "Customer Spotlight",
    caption: "✨ Customer Spotlight ✨\n\nMeet [Customer Name], one of our amazing customers who has been crushing it!\n\n[Brief story about how they use your product/service]\n\nTheir results speak for themselves:\n📈 [Achievement 1]\n💪 [Achievement 2]\n🎯 [Achievement 3]\n\nWe're so proud to be part of your journey! Thank you for trusting us.\n\nWant to be featured? Tag us in your posts and use our hashtag!",
    hashtags: ["#customerlove", "#testimonial", "#successstory", "#community"],
    platforms: ["Instagram", "Facebook", "LinkedIn"],
    category: "Social Proof"
  },
  {
    id: "motivational-monday",
    name: "Motivational Monday",
    caption: "Happy Monday! 🌟\n\nStarting the week with this powerful reminder:\n\n\"[Inspirational Quote]\"\n\nRemember, every great achievement starts with the decision to try. This week is full of possibilities – what are you going to accomplish?\n\nDrop your goals for this week in the comments! Let's hold each other accountable. 💪",
    hashtags: ["#mondaymotivation", "#motivationalmonday", "#mindset", "#goals", "#inspiration"],
    platforms: ["Instagram", "LinkedIn", "Twitter"],
    category: "Engagement"
  },
  {
    id: "faq-friday",
    name: "FAQ Friday",
    caption: "FAQ Friday! 🙋‍♀️\n\nYou asked, we're answering!\n\nQ: [Common Question]\nA: [Clear, helpful answer]\n\nStill have questions? We're here to help! Drop your questions in the comments and we'll answer them in our next FAQ Friday.\n\nWhat else would you like to know?",
    hashtags: ["#faqfriday", "#askmeanthing", "#qa", "#customercare"],
    platforms: ["Instagram", "Facebook", "Twitter"],
    category: "Educational"
  },
  {
    id: "throwback",
    name: "Throwback Thursday",
    caption: "#ThrowbackThursday 📸\n\nTaking a trip down memory lane today! Here's a look at where we started vs. where we are now.\n\nFrom humble beginnings to [current achievement], it's been quite a journey. None of this would be possible without your incredible support.\n\nWhat's your favorite memory with us? Share in the comments! 💭",
    hashtags: ["#tbt", "#throwbackthursday", "#journey", "#growth", "#memories"],
    platforms: ["Instagram", "Facebook", "LinkedIn"],
    category: "Brand"
  },
  {
    id: "user-generated",
    name: "User Generated Content",
    caption: "📣 Community Love!\n\nCheck out this amazing post from @[username]! We absolutely love seeing how you use [product/service].\n\nThis is exactly what we had in mind when we created this. Seeing it in action makes everything worthwhile!\n\nRepost with permission ❤️\n\nWant to be featured? Tag us and use [your branded hashtag]!",
    hashtags: ["#community", "#ugc", "#customerlove", "#repost"],
    platforms: ["Instagram", "Twitter", "Facebook"],
    category: "Social Proof"
  },
  {
    id: "quick-poll",
    name: "Quick Poll",
    caption: "🗳️ We need your input!\n\nHelp us make better decisions by voting in our quick poll:\n\n[Option A] 🅰️ or [Option B] 🅱️\n\nVote by commenting A or B below!\n\nYour opinion matters to us, and we actually use this feedback to improve. Let's see what wins! 👇",
    hashtags: ["#poll", "#vote", "#engagement", "#community"],
    platforms: ["Instagram", "Twitter", "Facebook"],
    category: "Engagement"
  },
  {
    id: "sale-announcement",
    name: "Sale Announcement",
    caption: "🔥 FLASH SALE ALERT! 🔥\n\nFor the next [time period], get [discount]% OFF everything!\n\nThis is your chance to grab what you've been eyeing. But hurry – this deal won't last long!\n\n⏰ Sale ends: [Date/Time]\n💰 Use code: [COUPONCODE]\n🛍️ [Link in bio]\n\nTag someone who needs to see this!",
    hashtags: ["#sale", "#discount", "#limitedtime", "#shopping", "#deal"],
    platforms: ["Instagram", "Facebook", "Twitter"],
    category: "Promotional"
  }
];
