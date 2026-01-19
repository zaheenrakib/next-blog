export type BlogPost = {
  id: number;
  title: string;
  slug: string;
  description: string;
  content: string;
  author: string;
  category: string;
  publishedAt: string;
  image: string;
};

export const blogs: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    description: "Learn the basics of Next.js and why it’s great for modern web apps.",
    content: "Next.js is a React framework for production...",
    author: "Zaheen Rakib",
    category: "Web Development",
    publishedAt: "2025-01-10",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c"
  },
  {
    id: 2,
    title: "TypeScript for Beginners",
    slug: "typescript-for-beginners",
    description: "A beginner-friendly guide to TypeScript.",
    content: "TypeScript adds static typing to JavaScript...",
    author: "Rakib Hasan",
    category: "Programming",
    publishedAt: "2025-01-12",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea"
  },
  {
    id: 3,
    title: "Why React is Still Popular",
    slug: "why-react-is-still-popular",
    description: "Understanding the long-term popularity of React.",
    content: "React remains one of the most popular libraries...",
    author: "John Doe",
    category: "Frontend",
    publishedAt: "2025-01-15",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c"
  },
  {
    id: 4,
    title: "Tailwind CSS Best Practices",
    slug: "tailwind-css-best-practices",
    description: "Write clean and scalable UI with Tailwind CSS.",
    content: "Tailwind CSS is a utility-first CSS framework...",
    author: "Jane Smith",
    category: "UI/UX",
    publishedAt: "2025-01-18",
    image: "https://images.unsplash.com/photo-1508780709619-79562169bc64"
  },
  {
    id: 5,
    title: "Building REST APIs with Node.js",
    slug: "building-rest-apis-nodejs",
    description: "Learn how to build scalable REST APIs using Node.js.",
    content: "Node.js is widely used for backend development...",
    author: "Rakibul Islam",
    category: "Backend",
    publishedAt: "2025-01-20",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: 6,
    title: "MongoDB Schema Design Tips",
    slug: "mongodb-schema-design-tips",
    description: "Best practices for designing MongoDB schemas.",
    content: "Schema design plays a vital role in performance...",
    author: "Zaheen Rakib",
    category: "Database",
    publishedAt: "2025-01-22",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c"
  },
  {
    id: 7,
    title: "Authentication in Next.js",
    slug: "authentication-in-nextjs",
    description: "Implement authentication in Next.js applications.",
    content: "Authentication can be handled in many ways...",
    author: "Hasan Ali",
    category: "Security",
    publishedAt: "2025-01-25",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284"
  },
  {
    id: 8,
    title: "Understanding Server Components",
    slug: "understanding-server-components",
    description: "A deep dive into React Server Components.",
    content: "Server components allow rendering on the server...",
    author: "John Smith",
    category: "React",
    publishedAt: "2025-01-27",
    image: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9"
  },
  {
    id: 9,
    title: "SEO Tips for Next.js",
    slug: "seo-tips-for-nextjs",
    description: "Improve your Next.js site SEO.",
    content: "SEO is critical for visibility...",
    author: "Rakib Hasan",
    category: "SEO",
    publishedAt: "2025-01-28",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    id: 10,
    title: "Deploying Next.js to Vercel",
    slug: "deploying-nextjs-to-vercel",
    description: "Step-by-step guide to deploy Next.js apps.",
    content: "Vercel is the official platform for Next.js...",
    author: "Zaheen Rakib",
    category: "Deployment",
    publishedAt: "2025-01-30",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },

  // 10 more concise blogs
  {
    id: 11,
    title: "Clean Code Principles",
    slug: "clean-code-principles",
    description: "Write readable and maintainable code.",
    content: "Clean code helps teams scale...",
    author: "Jane Doe",
    category: "Best Practices",
    publishedAt: "2025-02-01",
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
  },
  {
    id: 12,
    title: "API Pagination Explained",
    slug: "api-pagination-explained",
    description: "Understand pagination in APIs.",
    content: "Pagination helps handle large datasets...",
    author: "Rakibul Islam",
    category: "API",
    publishedAt: "2025-02-02",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
  },
  {
    id: 13,
    title: "React Performance Optimization",
    slug: "react-performance-optimization",
    description: "Improve React app performance.",
    content: "Memoization and code splitting...",
    author: "John Doe",
    category: "Performance",
    publishedAt: "2025-02-04",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd"
  },
  {
    id: 14,
    title: "Using Axios Effectively",
    slug: "using-axios-effectively",
    description: "Best practices for API calls with Axios.",
    content: "Axios simplifies HTTP requests...",
    author: "Zaheen Rakib",
    category: "HTTP",
    publishedAt: "2025-02-06",
    image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93"
  },
  {
    id: 15,
    title: "What is MERN Stack?",
    slug: "what-is-mern-stack",
    description: "Complete overview of MERN stack.",
    content: "MERN combines MongoDB, Express...",
    author: "Rakib Hasan",
    category: "MERN",
    publishedAt: "2025-02-08",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
  },
  {
    id: 16,
    title: "Frontend vs Backend",
    slug: "frontend-vs-backend",
    description: "Understand frontend and backend roles.",
    content: "Frontend focuses on UI...",
    author: "Jane Smith",
    category: "Career",
    publishedAt: "2025-02-10",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
  },
  {
    id: 17,
    title: "Learning JavaScript in 2025",
    slug: "learning-javascript-2025",
    description: "How to learn JavaScript effectively.",
    content: "JavaScript remains essential...",
    author: "John Smith",
    category: "JavaScript",
    publishedAt: "2025-02-12",
    image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
  },
  {
    id: 18,
    title: "Dark Mode UI Design",
    slug: "dark-mode-ui-design",
    description: "Designing accessible dark mode UI.",
    content: "Dark mode reduces eye strain...",
    author: "Zaheen Rakib",
    category: "Design",
    publishedAt: "2025-02-14",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7"
  },
  {
    id: 19,
    title: "State Management in React",
    slug: "state-management-in-react",
    description: "Different ways to manage state.",
    content: "UseState, Context, Redux...",
    author: "Rakib Hasan",
    category: "React",
    publishedAt: "2025-02-16",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
  },
  {
    id: 20,
    title: "Preparing for Frontend Interviews",
    slug: "frontend-interview-prep",
    description: "Tips to crack frontend interviews.",
    content: "Focus on fundamentals...",
    author: "Jane Doe",
    category: "Interview",
    publishedAt: "2025-02-18",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  }
];
