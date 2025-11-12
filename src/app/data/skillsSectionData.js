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
      projects: "30+ projects",
      icon: "🎨",
    },
    {
      id: 2,
      name: "Tailwind CSS",
      level: 90,
      description:
        "Designing fast, consistent, and mobile-friendly UI using Tailwind CSS utility classes for modern responsive web apps.",
      projects: "20+ projects",
      icon: "💨",
    },
    {
      id: 3,
      name: "JavaScript",
      level: 95,
      description:
        "Writing clean, modular, and efficient JavaScript (ES6+) with asynchronous handling, API integration, and DOM manipulation.",
      projects: "25+ projects",
      icon: "📜",
    },
    {
      id: 4,
      name: "React",
      level: 90,
      description:
        "Building dynamic and interactive UI components using React, with Hooks, Context API, and component-based architecture.",
      projects: "10+ projects",
      icon: "⚛️",
    },
    {
      id: 5,
      name: "Next.js",
      level: 85,
      description:
        "Creating SEO-friendly, fast, and scalable React applications using Next.js with SSR, SSG, and API routes.",
      projects: "18+ projects",
      icon: "▲",
    },
    {
      id: 6,
      name: "Git & GitHub",
      level: 80,
      description:
        "Version controlling projects efficiently using Git and GitHub — managing branches, commits, and collaborative workflows.",
      projects: "50+ repositories",
      icon: "🌿",
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
