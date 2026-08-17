export interface CourseStats {
  hoursOfCourse: number;
  totalAssignments: number;
  videoLessons: number;
  studentsEnrolled: number;
}

export interface CourseLesson {
  title: string;
  duration: string;
  type: "video" | "exercise" | "article" | "quiz" | "assignment";
}

export interface CourseModule {
  title: string;
  lessons: CourseLesson[];
}

export interface CourseAbout {
  heading: string;
  description: string;
  bullets: string[];
}

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
  stats: CourseStats;
  modules: CourseModule[];
  about?: CourseAbout;
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
    stats: { hoursOfCourse: 24, totalAssignments: 12, videoLessons: 36, studentsEnrolled: 1250 },
    modules: [
      { title: "Course Overview & Setup", lessons: [
        { title: "Welcome & Course Introduction", duration: "8 min", type: "video" },
        { title: "Tools & Environment Setup", duration: "12 min", type: "video" },
        { title: "How the Web Works", duration: "15 min", type: "article" },
      ]},
      { title: "HTML Fundamentals", lessons: [
        { title: "HTML Structure & Semantics", duration: "20 min", type: "video" },
        { title: "Working with Forms & Inputs", duration: "18 min", type: "video" },
        { title: "Exercise: Build a Landing Page", duration: "30 min", type: "exercise" },
      ]},
      { title: "CSS & Styling", lessons: [
        { title: "CSS Selectors & Properties", duration: "22 min", type: "video" },
        { title: "Flexbox & Grid Layouts", duration: "25 min", type: "video" },
        { title: "Responsive Design Principles", duration: "20 min", type: "video" },
        { title: "Exercise: Style a Portfolio Page", duration: "35 min", type: "exercise" },
      ]},
      { title: "Responsive Web Design", lessons: [
        { title: "Media Queries & Breakpoints", duration: "18 min", type: "video" },
        { title: "Mobile-First Approach", duration: "15 min", type: "video" },
        { title: "Exercise: Responsive Navigation", duration: "25 min", type: "exercise" },
      ]},
      { title: "Final Project & Wrap-Up", lessons: [
        { title: "Project Brief & Requirements", duration: "10 min", type: "article" },
        { title: "Building Your Final Project", duration: "45 min", type: "exercise" },
        { title: "Course Summary & Next Steps", duration: "8 min", type: "video" },
      ]},
    ],
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
    stats: { hoursOfCourse: 20, totalAssignments: 10, videoLessons: 28, studentsEnrolled: 980 },
    modules: [
      { title: "Introduction to UI/UX", lessons: [
        { title: "What is UI/UX Design?", duration: "10 min", type: "video" },
        { title: "Design Thinking Process", duration: "15 min", type: "video" },
        { title: "User Research Methods", duration: "20 min", type: "article" },
      ]},
      { title: "User Interface Design", lessons: [
        { title: "Visual Hierarchy & Layout", duration: "18 min", type: "video" },
        { title: "Color Theory & Typography", duration: "22 min", type: "video" },
        { title: "Exercise: Design a Dashboard", duration: "35 min", type: "exercise" },
      ]},
      { title: "Prototyping & Testing", lessons: [
        { title: "Wireframing Fundamentals", duration: "15 min", type: "video" },
        { title: "Interactive Prototyping", duration: "25 min", type: "video" },
        { title: "Usability Testing Basics", duration: "18 min", type: "video" },
        { title: "Exercise: Prototype a Mobile App", duration: "40 min", type: "exercise" },
      ]},
      { title: "Portfolio Project", lessons: [
        { title: "Case Study Structure", duration: "12 min", type: "article" },
        { title: "Building Your UX Portfolio", duration: "30 min", type: "exercise" },
      ]},
    ],
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
    stats: { hoursOfCourse: 30, totalAssignments: 15, videoLessons: 42, studentsEnrolled: 1100 },
    modules: [
      { title: "Design Principles", lessons: [
        { title: "Elements of Design", duration: "15 min", type: "video" },
        { title: "Composition & Balance", duration: "18 min", type: "video" },
        { title: "Exercise: Design Composition", duration: "25 min", type: "exercise" },
      ]},
      { title: "Typography & Color", lessons: [
        { title: "Typography Fundamentals", duration: "20 min", type: "video" },
        { title: "Color Theory in Practice", duration: "22 min", type: "video" },
        { title: "Exercise: Create a Color Palette", duration: "20 min", type: "exercise" },
      ]},
      { title: "Digital Design Tools", lessons: [
        { title: "Getting Started with Figma", duration: "25 min", type: "video" },
        { title: "Vector Graphics Basics", duration: "20 min", type: "video" },
        { title: "Exercise: Logo Design", duration: "35 min", type: "exercise" },
      ]},
      { title: "Final Portfolio Project", lessons: [
        { title: "Brand Identity Project", duration: "45 min", type: "exercise" },
        { title: "Presenting Your Work", duration: "12 min", type: "video" },
      ]},
    ],
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
    stats: { hoursOfCourse: 48, totalAssignments: 22, videoLessons: 64, studentsEnrolled: 2100 },
    modules: [
      { title: "HTML & CSS Refresher", lessons: [
        { title: "Modern HTML5 Features", duration: "15 min", type: "video" },
        { title: "CSS Grid & Flexbox Deep Dive", duration: "25 min", type: "video" },
        { title: "Exercise: Responsive Layout", duration: "30 min", type: "exercise" },
      ]},
      { title: "JavaScript Essentials", lessons: [
        { title: "ES6+ Syntax & Features", duration: "20 min", type: "video" },
        { title: "DOM Manipulation", duration: "22 min", type: "video" },
        { title: "Async JavaScript", duration: "25 min", type: "video" },
        { title: "Exercise: Interactive App", duration: "35 min", type: "exercise" },
      ]},
      { title: "React Fundamentals", lessons: [
        { title: "Components & Props", duration: "20 min", type: "video" },
        { title: "State & Lifecycle", duration: "25 min", type: "video" },
        { title: "Hooks in Depth", duration: "30 min", type: "video" },
        { title: "Exercise: Todo Application", duration: "40 min", type: "exercise" },
      ]},
      { title: "Performance & Deployment", lessons: [
        { title: "Web Performance Optimization", duration: "20 min", type: "video" },
        { title: "Testing & Debugging", duration: "18 min", type: "video" },
        { title: "Deploying to Production", duration: "15 min", type: "video" },
        { title: "Final Project: Full Website", duration: "60 min", type: "exercise" },
      ]},
    ],
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
    stats: { hoursOfCourse: 35, totalAssignments: 18, videoLessons: 50, studentsEnrolled: 1800 },
    modules: [
      { title: "Advanced Patterns", lessons: [
        { title: "Closures & Scope", duration: "20 min", type: "video" },
        { title: "Prototypal Inheritance", duration: "22 min", type: "video" },
        { title: "Design Patterns in JS", duration: "25 min", type: "video" },
        { title: "Exercise: Pattern Implementation", duration: "30 min", type: "exercise" },
      ]},
      { title: "Async Programming", lessons: [
        { title: "Promises Deep Dive", duration: "20 min", type: "video" },
        { title: "Async/Await Patterns", duration: "18 min", type: "video" },
        { title: "Event Loop & Concurrency", duration: "25 min", type: "video" },
        { title: "Exercise: Async Data Fetching", duration: "35 min", type: "exercise" },
      ]},
      { title: "Functional Programming", lessons: [
        { title: "Pure Functions & Immutability", duration: "18 min", type: "video" },
        { title: "Higher-Order Functions", duration: "20 min", type: "video" },
        { title: "Composition & Currying", duration: "22 min", type: "video" },
        { title: "Exercise: FP Refactoring", duration: "30 min", type: "exercise" },
      ]},
      { title: "Performance & Security", lessons: [
        { title: "Memory Management", duration: "20 min", type: "video" },
        { title: "Security Best Practices", duration: "18 min", type: "article" },
        { title: "Final Project: Build a Library", duration: "50 min", type: "exercise" },
      ]},
    ],
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
    stats: { hoursOfCourse: 40, totalAssignments: 20, videoLessons: 55, studentsEnrolled: 1650 },
    modules: [
      { title: "Mobile Development Basics", lessons: [
        { title: "Native vs Cross-Platform", duration: "12 min", type: "video" },
        { title: "Setting Up Your Environment", duration: "18 min", type: "video" },
        { title: "Your First Mobile App", duration: "25 min", type: "video" },
      ]},
      { title: "React Native Core", lessons: [
        { title: "Components & Navigation", duration: "22 min", type: "video" },
        { title: "Styling & Layouts", duration: "20 min", type: "video" },
        { title: "State Management", duration: "25 min", type: "video" },
        { title: "Exercise: Build a News App", duration: "40 min", type: "exercise" },
      ]},
      { title: "Advanced Features", lessons: [
        { title: "API Integration", duration: "20 min", type: "video" },
        { title: "Push Notifications", duration: "18 min", type: "video" },
        { title: "Offline Storage", duration: "22 min", type: "video" },
        { title: "Exercise: Chat Application", duration: "45 min", type: "exercise" },
      ]},
      { title: "Publishing & Deployment", lessons: [
        { title: "App Store Submission", duration: "15 min", type: "article" },
        { title: "Play Store Submission", duration: "15 min", type: "article" },
        { title: "Final Project: Full App", duration: "60 min", type: "exercise" },
      ]},
    ],
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
    stats: { hoursOfCourse: 32, totalAssignments: 14, videoLessons: 40, studentsEnrolled: 920 },
    modules: [
      { title: "Strategic Thinking", lessons: [
        { title: "What is Strategy?", duration: "15 min", type: "video" },
        { title: "Competitive Analysis", duration: "20 min", type: "video" },
        { title: "Exercise: SWOT Analysis", duration: "25 min", type: "exercise" },
      ]},
      { title: "Business Models", lessons: [
        { title: "Business Model Canvas", duration: "22 min", type: "video" },
        { title: "Revenue Streams", duration: "18 min", type: "video" },
        { title: "Exercise: Design Your Model", duration: "30 min", type: "exercise" },
      ]},
      { title: "Growth & Scaling", lessons: [
        { title: "Growth Frameworks", duration: "20 min", type: "video" },
        { title: "Scaling Operations", duration: "22 min", type: "video" },
        { title: "Case Studies", duration: "15 min", type: "article" },
      ]},
    ],
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
    stats: { hoursOfCourse: 22, totalAssignments: 10, videoLessons: 30, studentsEnrolled: 1400 },
    modules: [
      { title: "Idea Validation", lessons: [
        { title: "Finding Your Idea", duration: "12 min", type: "video" },
        { title: "Market Research", duration: "18 min", type: "video" },
        { title: "Exercise: Validate Your Idea", duration: "25 min", type: "exercise" },
      ]},
      { title: "Building Your MVP", lessons: [
        { title: "MVP Strategy", duration: "15 min", type: "video" },
        { title: "Lean Startup Methods", duration: "20 min", type: "video" },
        { title: "Exercise: MVP Plan", duration: "30 min", type: "exercise" },
      ]},
      { title: "Go-to-Market", lessons: [
        { title: "Launch Strategy", duration: "18 min", type: "video" },
        { title: "Customer Acquisition", duration: "20 min", type: "video" },
        { title: "Pitching & Fundraising", duration: "22 min", type: "video" },
      ]},
    ],
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
    stats: { hoursOfCourse: 26, totalAssignments: 12, videoLessons: 34, studentsEnrolled: 1550 },
    modules: [
      { title: "AI Fundamentals", lessons: [
        { title: "What is AI?", duration: "12 min", type: "video" },
        { title: "Machine Learning Basics", duration: "20 min", type: "video" },
        { title: "AI Tools Overview", duration: "15 min", type: "article" },
      ]},
      { title: "Automation Tools", lessons: [
        { title: "Workflow Automation", duration: "18 min", type: "video" },
        { title: "No-Code AI Tools", duration: "22 min", type: "video" },
        { title: "Exercise: Automate a Workflow", duration: "30 min", type: "exercise" },
      ]},
      { title: "AI in Business", lessons: [
        { title: "AI for Decision Making", duration: "20 min", type: "video" },
        { title: "Ethics & Responsible AI", duration: "15 min", type: "video" },
        { title: "Final Project: AI Strategy", duration: "35 min", type: "exercise" },
      ]},
    ],
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
    stats: { hoursOfCourse: 16, totalAssignments: 8, videoLessons: 22, studentsEnrolled: 2300 },
    modules: [
      { title: "Prompt Basics", lessons: [
        { title: "How LLMs Work", duration: "12 min", type: "video" },
        { title: "Anatomy of a Good Prompt", duration: "15 min", type: "video" },
        { title: "Exercise: Write Your First Prompts", duration: "20 min", type: "exercise" },
      ]},
      { title: "Advanced Techniques", lessons: [
        { title: "Chain-of-Thought Prompting", duration: "18 min", type: "video" },
        { title: "Few-Shot & Zero-Shot", duration: "20 min", type: "video" },
        { title: "Role-Based Prompting", duration: "15 min", type: "video" },
        { title: "Exercise: Complex Prompts", duration: "25 min", type: "exercise" },
      ]},
      { title: "Real-World Applications", lessons: [
        { title: "Prompts for Coding", duration: "18 min", type: "video" },
        { title: "Prompts for Content", duration: "15 min", type: "video" },
        { title: "Final Project: Prompt Library", duration: "30 min", type: "exercise" },
      ]},
    ],
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
    stats: { hoursOfCourse: 20, totalAssignments: 10, videoLessons: 28, studentsEnrolled: 1750 },
    modules: [
      { title: "Marketing Fundamentals", lessons: [
        { title: "Digital Marketing Overview", duration: "12 min", type: "video" },
        { title: "Marketing Funnels", duration: "18 min", type: "video" },
        { title: "Exercise: Create a Funnel", duration: "25 min", type: "exercise" },
      ]},
      { title: "Channels & Analytics", lessons: [
        { title: "Social Media Marketing", duration: "20 min", type: "video" },
        { title: "Paid Advertising", duration: "22 min", type: "video" },
        { title: "Google Analytics", duration: "18 min", type: "video" },
        { title: "Exercise: Campaign Setup", duration: "30 min", type: "exercise" },
      ]},
      { title: "Growth Strategies", lessons: [
        { title: "Growth Hacking Techniques", duration: "20 min", type: "video" },
        { title: "Email Marketing", duration: "15 min", type: "video" },
        { title: "Final Project: Growth Plan", duration: "35 min", type: "exercise" },
      ]},
    ],
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
    stats: { hoursOfCourse: 22, totalAssignments: 11, videoLessons: 30, studentsEnrolled: 1320 },
    modules: [
      { title: "SEO Fundamentals", lessons: [
        { title: "How Search Engines Work", duration: "15 min", type: "video" },
        { title: "Keyword Research", duration: "20 min", type: "video" },
        { title: "On-Page SEO", duration: "18 min", type: "video" },
        { title: "Exercise: SEO Audit", duration: "25 min", type: "exercise" },
      ]},
      { title: "Content Strategy", lessons: [
        { title: "Content Planning", duration: "18 min", type: "video" },
        { title: "Writing for the Web", duration: "20 min", type: "video" },
        { title: "Content Distribution", duration: "15 min", type: "video" },
        { title: "Exercise: Content Calendar", duration: "25 min", type: "exercise" },
      ]},
      { title: "Advanced SEO & Analytics", lessons: [
        { title: "Technical SEO", duration: "22 min", type: "video" },
        { title: "Link Building Strategies", duration: "18 min", type: "video" },
        { title: "Measuring ROI", duration: "15 min", type: "article" },
        { title: "Final Project: SEO Strategy", duration: "35 min", type: "exercise" },
      ]},
    ],
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
