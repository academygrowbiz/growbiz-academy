export interface Course {
  slug: string;
  category: string;
  categorySlug: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  instructor: string;
  image: string;
  price: string;
  trending?: boolean;
}

export const allCourses: Course[] = [
  {
    slug: "web-design-fundamentals",
    category: "Design",
    categorySlug: "design",
    title: "Web Design Fundamentals",
    description: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles for creating modern websites.",
    duration: "5 Weeks",
    level: "Beginner",
    instructor: "John Smith",
    image: "/webfund.png",
    price: "₹499",
  },
  {
    slug: "ui-ux-design",
    category: "Design",
    categorySlug: "design",
    title: "UI/UX Design",
    description: "Master the art of creating intuitive user interfaces and user experiences. Learn design principles, prototyping, and usability testing.",
    duration: "4 Weeks",
    level: "Intermediate",
    instructor: "Emily Johnson",
    image: "/ui.png",
    price: "₹499",
    trending: true,
  },
  {
    slug: "graphic-design-for-beginners",
    category: "Design",
    categorySlug: "design",
    title: "Graphic Design for Beginners",
    description: "Discover the fundamentals of graphic design, including typography, color theory, and composition for stunning visual designs.",
    duration: "6 Weeks",
    level: "Beginner",
    instructor: "Sarah Thompson",
    image: "/graphic.png",
    price: "₹499",
    trending: true,
  },
  {
    slug: "front-end-web-development",
    category: "Development",
    categorySlug: "development",
    title: "Front-End Web Development",
    description: "Become proficient in front-end development with modern JavaScript frameworks, responsive layouts, and performance optimization.",
    duration: "10 Weeks",
    level: "Intermediate",
    instructor: "Michael Lee",
    image: "/frontend.png",
    price: "₹999",
  },
  {
    slug: "advanced-javascript",
    category: "Development",
    categorySlug: "development",
    title: "Advanced JavaScript",
    description: "Take your JavaScript skills to the next level with advanced patterns, async programming, and modern ES6+ features.",
    duration: "7 Weeks",
    level: "Advanced",
    instructor: "Rachel Adams",
    image: "/advancejs.png",
    price: "₹999",
    trending: true,
  },
  {
    slug: "mobile-app-development",
    category: "Mobile Development",
    categorySlug: "mobile-development",
    title: "Mobile App Development",
    description: "Dive into the world of mobile app development. Learn to build cross-platform apps for iOS and Android using modern frameworks.",
    duration: "8 Weeks",
    level: "Intermediate",
    instructor: "David Brown",
    image: "/mobileapp.png",
    price: "₹999",
    trending: true,
  },
  {
    slug: "business-strategy-masterclass",
    category: "Business",
    categorySlug: "business",
    title: "Business Strategy Masterclass",
    description: "Master the art of strategic planning, competitive analysis, and building scalable business models for modern markets.",
    duration: "8 Weeks",
    level: "Intermediate",
    instructor: "Sarah Chen",
    image: "/frontend.png",
    price: "₹799",
  },
  {
    slug: "entrepreneurship-fundamentals",
    category: "Business",
    categorySlug: "business",
    title: "Entrepreneurship Fundamentals",
    description: "Learn the foundations of starting and growing a business — from idea validation to go-to-market strategy.",
    duration: "6 Weeks",
    level: "Beginner",
    instructor: "James Carter",
    image: "/webfund.png",
    price: "₹499",
    trending: true,
  },
  {
    slug: "ai-automation-fundamentals",
    category: "AI & Technology",
    categorySlug: "ai-technology",
    title: "AI & Automation Fundamentals",
    description: "Learn how artificial intelligence and automation tools can transform modern workflows and business processes.",
    duration: "6 Weeks",
    level: "Beginner",
    instructor: "Alex Morgan",
    image: "/advancejs.png",
    price: "₹799",
  },
  {
    slug: "prompt-engineering",
    category: "AI & Technology",
    categorySlug: "ai-technology",
    title: "Prompt Engineering Mastery",
    description: "Master the art of crafting effective prompts for AI models to get better results in your work and projects.",
    duration: "4 Weeks",
    level: "Beginner",
    instructor: "Nina Patel",
    image: "/ui.png",
    price: "₹499",
    trending: true,
  },
  {
    slug: "digital-marketing-growth",
    category: "Digital Skills",
    categorySlug: "digital-skills",
    title: "Digital Marketing & Growth",
    description: "Discover the latest digital marketing strategies, analytics tools, and growth frameworks used by top brands.",
    duration: "5 Weeks",
    level: "Beginner",
    instructor: "David Okafor",
    image: "/graphic.png",
    price: "₹499",
  },
  {
    slug: "seo-content-strategy",
    category: "Digital Skills",
    categorySlug: "digital-skills",
    title: "SEO & Content Strategy",
    description: "Learn search engine optimization and content marketing to drive organic growth for any business or brand.",
    duration: "5 Weeks",
    level: "Intermediate",
    instructor: "Maria Lopez",
    image: "/mobileapp.png",
    price: "₹599",
    trending: true,
  },
];

export interface CategoryMeta {
  slug: string;
  label: string;
  banner: string;
  description: string;
  seoText: string;
}

export const categoriesMeta: CategoryMeta[] = [
  {
    slug: "design",
    label: "Design",
    banner: "/designbanner.png",
    description: "Learn graphic design, UI/UX, web design, and visual communication from industry experts.",
    seoText: "GrowBiz Academy's Design courses cover everything from graphic design fundamentals and typography to advanced UI/UX principles and prototyping. Whether you're just starting out or refining your skills, our expert-led courses help you create beautiful, functional designs that make an impact in the real world.",
  },
  {
    slug: "development",
    label: "Development",
    banner: "/webdeveloperbanner.png",
    description: "Master front-end, back-end, and full-stack web development with modern tools and frameworks.",
    seoText: "Our Development courses take you from writing your first line of code to building production-ready applications. Learn JavaScript, React, Node.js, and modern development practices from experienced engineers who've built products used by millions.",
  },
  {
    slug: "mobile-development",
    label: "Mobile Development",
    banner: "/mobileappbanner.png",
    description: "Build native and cross-platform mobile applications for iOS and Android.",
    seoText: "Learn to build mobile apps that users love. Our Mobile Development courses cover React Native, Flutter, and native platform development — teaching you to create performant, beautiful apps from concept to deployment on the App Store and Google Play.",
  },
  {
    slug: "business",
    label: "Business",
    banner: "/businessteambanner.png",
    description: "Develop strategic thinking, leadership skills, and business acumen to grow your career or company.",
    seoText: "GrowBiz Academy's Business courses equip you with the strategic thinking and operational skills needed to lead teams, launch ventures, and scale organizations. From entrepreneurship fundamentals to advanced strategy, learn from leaders who've built successful businesses.",
  },
  {
    slug: "ai-technology",
    label: "AI & Technology",
    banner: "/aibanner.png",
    description: "Explore artificial intelligence, machine learning, automation, and emerging technologies.",
    seoText: "Stay ahead of the curve with our AI & Technology courses. Learn to leverage artificial intelligence, automation tools, and emerging tech to solve real problems. From prompt engineering to AI-powered workflows, gain practical skills that are in high demand across every industry.",
  },
  {
    slug: "digital-skills",
    label: "Digital Skills",
    banner: "/digitalmarketingbanner%20img.png",
    description: "Master digital marketing, SEO, analytics, and modern productivity tools for career growth.",
    seoText: "Our Digital Skills courses cover the essential tools and strategies for thriving in today's digital landscape. Learn SEO, content marketing, social media strategy, analytics, and digital productivity — skills that every modern professional needs to grow their impact and career.",
  },
];
