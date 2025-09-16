const skillsSectionData = {
  sectionName: "frontend skills",
  title: "frontend expertise",
  description:
    "Technologies and frameworks I use to create engaging, responsive, and high-performance web applications.",
  frontendSkills: [
    {
      id: 1,
      name: "HTML/CSS",
      level: 95,
      description:
        "Crafting semantic, accessible, and responsive layouts using HTML5 and modern CSS techniques including Flexbox and Grid.",
      projects: "40+ projects",
      icon: "🎨",
    },
    {
      id: 2,
      name: "Tailwind CSS",
      level: 90,
      description:
        "Building fast, custom, and mobile-friendly UI designs with utility-first Tailwind CSS framework.",
      projects: "20+ projects",
      icon: "💨",
    },
    {
      id: 3,
      name: "JavaScript",
      level: 95,
      description:
        "Writing clean, modular, and modern JavaScript (ES6+) with DOM manipulation, asynchronous programming, and event-driven patterns.",
      projects: "30+ projects",
      icon: "📜",
    },
    {
      id: 4,
      name: "React",
      level: 90,
      description:
        "Developing dynamic, component-based user interfaces using React with Hooks, Context API, and modern best practices.",
      projects: "15+ projects",
      icon: "⚛️",
    },
    {
      id: 5,
      name: "Next.js",
      level: 85,
      description:
        "Implementing server-side rendering, static site generation, and API routes to build performant React-based applications.",
      projects: "10+ projects",
      icon: "▲",
    },
    {
      id: 6,
      name: "TypeScript",
      level: 80,
      description:
        "Ensuring type safety and maintainable code through TypeScript with interfaces, generics, and gradual adoption in projects.",
      projects: "8+ projects",
      icon: "🔷",
    },
  ],

  summarySkills: {
    title: "Frontend Development Focus",
    skills: [
      {
        id: 1,
        title: "Responsive Design",
        description:
          "Creating layouts that work flawlessly on all device sizes",
        svg: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        ),
      },
      {
        id: 2,
        title: "Performance",
        description: "Optimizing for fast load times and smooth interactions",
        svg: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        ),
      },
      {
        id: 3,
        title: "UI/UX Focus",
        description:
          "Building intuitive interfaces with exceptional user experience",
        svg: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          />
        ),
      },
    ],
  },
};

export { skillsSectionData };
