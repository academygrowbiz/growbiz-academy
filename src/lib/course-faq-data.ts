export interface CourseFaq {
  question: string;
  answer: string;
}

export const courseFaqData: Record<string, CourseFaq[]> = {
  "web-design-fundamentals": [
    { question: "Do I need coding experience to start this course?", answer: "No prior coding experience is required. This course starts from absolute basics and progressively builds your HTML, CSS, and responsive design skills step by step." },
    { question: "What tools will I need for this course?", answer: "You will need a modern code editor like VS Code (free), a web browser like Chrome, and a stable internet connection. All other tools used in the course are free." },
    { question: "Will I be able to build real websites after this course?", answer: "Yes! By the end of this course, you will have built multiple responsive websites from scratch and have a portfolio-ready final project to showcase your skills." },
    { question: "How is this different from free YouTube tutorials?", answer: "This course provides a structured curriculum, hands-on assignments with feedback, a certificate of completion, and a clear learning path — unlike scattered tutorials online." },
    { question: "Can I access the course on mobile devices?", answer: "Yes, all course materials including videos and articles are fully accessible on mobile and tablet devices through our responsive platform." },
  ],
  "ui-ux-design": [
    { question: "Do I need to know how to code for UI/UX design?", answer: "No, coding is not required for this course. You will focus on design principles, user research, wireframing, and prototyping using tools like Figma — no programming needed." },
    { question: "What design tools are used in this course?", answer: "We primarily use Figma (free for students) for wireframing, prototyping, and UI design. You will also learn about user research tools and usability testing platforms." },
    { question: "Is this course suitable for career changers?", answer: "Absolutely! Many of our students transition into UX design from unrelated fields. The course covers everything from fundamentals to portfolio building for job applications." },
    { question: "Will I have a portfolio by the end?", answer: "Yes, you will complete a full UX case study project that you can use in your portfolio and job applications immediately after finishing the course." },
    { question: "How long does it take to complete this course?", answer: "The course is designed for 4 weeks at 5 hours per week. However, since it is self-paced, you can take longer or finish sooner based on your schedule." },
  ],
  "graphic-design-for-beginners": [
    { question: "Do I need expensive software to take this course?", answer: "No! We use Figma which is free for students. You won't need Adobe Creative Suite or any paid software to complete this course successfully." },
    { question: "Is artistic talent required for graphic design?", answer: "No natural artistic talent is needed. Graphic design is a learnable skill based on principles like composition, color theory, and typography — all of which we teach systematically." },
    { question: "What types of projects will I create?", answer: "You will create logos, brand identities, social media graphics, posters, and a complete brand identity project — all portfolio-ready work you can show to clients or employers." },
    { question: "Can I freelance after completing this course?", answer: "Yes, many of our graduates start freelancing on platforms like Fiverr and Upwork. The course gives you practical skills and portfolio pieces to attract your first clients." },
    { question: "Is there instructor feedback on my designs?", answer: "Yes, you will receive detailed feedback on your assignments and projects from the instructor, helping you improve your design eye and technical skills." },
  ],
  "front-end-web-development": [
    { question: "What programming languages will I learn?", answer: "You will learn HTML5, CSS3 (including Grid and Flexbox), JavaScript (ES6+), and React. The course also covers TypeScript basics, testing, and deployment." },
    { question: "Is this suitable for someone with only basic HTML/CSS knowledge?", answer: "Yes! The course starts with an HTML/CSS refresher before moving into JavaScript and React. Some basic familiarity with HTML helps, but we don't assume advanced knowledge." },
    { question: "What can I build after completing this course?", answer: "You will be able to build complete, interactive, production-ready web applications with React — including SPAs, dashboards, and e-commerce front-ends." },
    { question: "Is React still relevant in 2026?", answer: "Absolutely. React remains the most widely used front-end framework with massive industry demand. The skills you learn here are directly applicable to job opportunities today." },
    { question: "Will I learn about deployment and hosting?", answer: "Yes, the final module covers deploying your applications to production using modern platforms, along with performance optimization and testing best practices." },
  ],
  "advanced-javascript": [
    { question: "What level of JavaScript knowledge is required?", answer: "You should be comfortable with basic JavaScript — variables, functions, arrays, objects, and DOM manipulation. This course takes you from intermediate to advanced mastery." },
    { question: "How is this different from the Front-End Web Development course?", answer: "This course focuses exclusively on deep JavaScript concepts — closures, prototypes, async patterns, functional programming, and performance. It doesn't cover React or CSS." },
    { question: "Will this help me in technical interviews?", answer: "Yes! The topics covered — closures, the event loop, design patterns, and async programming — are among the most commonly asked questions in JavaScript interviews." },
    { question: "Do I need Node.js experience?", answer: "No, but having Node.js installed is helpful for running exercises. The course focuses on JavaScript language fundamentals that apply to both browser and Node environments." },
    { question: "Is there a final project?", answer: "Yes, you will build a production-ready JavaScript library from scratch, applying design patterns, async programming, and performance optimization techniques learned throughout the course." },
  ],
  "mobile-app-development": [
    { question: "Do I need a Mac to develop mobile apps?", answer: "For Android development, any OS works. For iOS testing on a real device, you will need a Mac. However, most of the course can be completed on Windows or Linux using Android emulators." },
    { question: "Which framework does this course use?", answer: "We use React Native, which allows you to build apps for both iOS and Android from a single codebase. This is the most in-demand cross-platform framework in the industry." },
    { question: "Will I publish a real app to the app stores?", answer: "Yes! The final module guides you through the complete submission process for both the Apple App Store and Google Play Store." },
    { question: "Do I need JavaScript experience first?", answer: "Basic JavaScript knowledge is required. If you are comfortable with functions, arrays, objects, and async/await, you are ready for this course." },
    { question: "Can I build apps for both iOS and Android?", answer: "Yes, React Native allows you to write one codebase that runs on both platforms. You will learn platform-specific optimizations for the best user experience on each." },
  ],
  "business-strategy-masterclass": [
    { question: "Is this course theory-heavy or practical?", answer: "While we cover frameworks like SWOT, Porter's Five Forces, and Business Model Canvas, the focus is on applying them to real scenarios through exercises and case studies." },
    { question: "Who is this course best suited for?", answer: "This course is ideal for mid-level professionals looking to move into leadership, entrepreneurs building strategy, and MBA students wanting practical frameworks." },
    { question: "Will I work on my own business during the course?", answer: "Yes! Many exercises are designed so you can apply strategic frameworks directly to your own business or career goals." },
    { question: "Are the case studies from real companies?", answer: "Yes, we analyze strategies from companies like Apple, Amazon, and emerging startups — giving you diverse perspectives on what works at different scales." },
    { question: "Is there group interaction or discussion?", answer: "The course includes discussion forums where you can share insights, get feedback on your strategy exercises, and network with other professionals." },
  ],
  "entrepreneurship-fundamentals": [
    { question: "Do I need a business idea before starting?", answer: "No! The first module helps you generate and validate business ideas. You will leave with a validated concept, even if you start with nothing." },
    { question: "Is this course suitable for non-technical founders?", answer: "Absolutely. The course focuses on strategy, validation, and business fundamentals — no coding or technical skills required." },
    { question: "Will I learn how to raise funding?", answer: "Yes, the final module covers pitching, fundraising basics, and investor communication. You will create a pitch deck as part of the coursework." },
    { question: "What stage of startup is this for?", answer: "This is for pre-seed and idea-stage founders. If you haven't started yet or are still validating, this course is perfect for you." },
    { question: "Can I apply these concepts to a side project?", answer: "Yes! The lean startup methodology taught in this course works equally well for side projects, freelance businesses, and full-time startup ventures." },
  ],
  "ai-automation-fundamentals": [
    { question: "Do I need programming skills for this course?", answer: "No, this course uses no-code AI tools and platforms. You will learn to leverage AI without writing code, making it accessible to professionals in any field." },
    { question: "Which AI tools are covered?", answer: "We cover ChatGPT, Claude, Zapier AI, Make.com, and other popular automation platforms. The focus is on practical application rather than building AI from scratch." },
    { question: "Is the content up-to-date with latest AI developments?", answer: "Yes, the course is regularly updated to reflect the latest AI tools and capabilities. You will learn principles that remain relevant even as specific tools evolve." },
    { question: "Can I apply AI automation in my current job?", answer: "Absolutely! Most lessons include real-world use cases across marketing, operations, customer service, and content creation that you can implement immediately." },
    { question: "Will this help me understand if AI can replace my job?", answer: "The course helps you understand AI's capabilities and limitations, so you can position yourself to work alongside AI rather than be replaced by it." },
  ],
  "prompt-engineering": [
    { question: "Which AI models does this course cover?", answer: "We cover prompting techniques for ChatGPT (GPT-4), Claude, Gemini, and other major LLMs. The principles taught work across all language models." },
    { question: "Is this useful for developers or non-developers?", answer: "Both! The course covers prompts for coding, content creation, analysis, and business tasks. You will learn techniques applicable to your specific use case." },
    { question: "How quickly will I see results?", answer: "Most students report dramatically better AI outputs within the first week. The techniques are immediately applicable and you will practice with real prompts from day one." },
    { question: "Will prompt engineering remain relevant as AI improves?", answer: "Yes — even as models improve, knowing how to communicate effectively with AI remains a valuable skill. The course teaches principles that adapt as technology evolves." },
    { question: "Do I get a library of ready-to-use prompts?", answer: "Yes, your final project is building a reusable prompt library. You will also get access to our community prompt collection with hundreds of tested examples." },
  ],
  "digital-marketing-growth": [
    { question: "Do I need any marketing experience?", answer: "No prior marketing experience is needed. This course starts with fundamentals and builds up to advanced growth strategies suitable for complete beginners." },
    { question: "Will I need to spend money on ads to practice?", answer: "No! We provide sandbox environments and simulations for ad platforms. You can practice campaign setup and optimization without spending real money." },
    { question: "What platforms are covered?", answer: "We cover Google Ads, Meta (Facebook/Instagram) advertising, Google Analytics 4, email marketing platforms, and social media marketing across major channels." },
    { question: "Can I apply this to my own business immediately?", answer: "Yes! Every module includes actionable exercises designed so you can implement strategies on your own website, business, or client projects right away." },
    { question: "Is there a focus on organic or paid marketing?", answer: "Both! The course covers paid advertising (Google, Meta) and organic growth strategies (social media, email marketing, growth hacking) for a complete skillset." },
  ],
  "seo-content-strategy": [
    { question: "How long does it take to see SEO results?", answer: "SEO typically takes 3-6 months for significant results. This course teaches you how to set up strategies that compound over time and how to measure early indicators of success." },
    { question: "Do I need a website to practice?", answer: "Having a website helps but is not required. We provide practice scenarios and tools you can use. Many students create a blog or portfolio site during the course to practice on." },
    { question: "Is this course focused on Google only?", answer: "Primarily yes, as Google holds 90%+ market share. However, the principles taught apply to Bing, YouTube SEO, and other search platforms as well." },
    { question: "Will I learn technical SEO or just content?", answer: "Both! The course covers on-page SEO, technical SEO (site speed, schema markup, crawling), content strategy, and link building for a complete SEO skillset." },
    { question: "Is AI-generated content covered?", answer: "Yes, we cover how to use AI tools for content creation while maintaining quality and avoiding penalties. You will learn the right balance of AI assistance and human expertise." },
  ],
};
