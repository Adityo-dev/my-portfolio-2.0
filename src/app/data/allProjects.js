const allProjectsData = [
  {
    id: 1,
    title: "React E-commerce Website",
    desc: "A modern e-commerce platform built with React.js and Tailwind.",
    img: "/images/project1.1.png",
    type: "react",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    liveUrl: "https://dinisoftbd.com",
    githubUrl: "https://github.com/example",
    completionDate: "Jan 2024",
    status: "Completed",
    longDescription:
      "This e-commerce platform was built to provide a seamless shopping experience with modern UI/UX principles. The application features user authentication, product filtering, shopping cart functionality, and a secure checkout process. I focused on creating a responsive design that works flawlessly across all device sizes.",
    challenges:
      "Implementing a real-time inventory system was challenging due to the need for immediate updates across multiple user sessions. I solved this by using WebSockets for real-time communication between the server and clients.",
    results:
      "The platform handles over 10,000 monthly users with an average load time of 1.2 seconds. Customer satisfaction increased by 35% compared to the previous solution.",
    images: [
      "/images/project1.1.png",
      "/images/project1.2.png",
      "/images/project1.3.png",
      "/images/project1.4.png",
      "/images/project1.5.png",
    ],
  },
  {
    id: 2,
    title: "Next.js Portfolio",
    desc: "A personal portfolio website created using Next.js 14.",
    img: "/images/project2.1.png",
    type: "next",
    technologies: ["Next.js 14", "TypeScript", "Framer Motion"],
    liveUrl: "https://gadgetgallery-eta.vercel.app",
    githubUrl: "https://github.com/example/portfolio",
    completionDate: "Dec 2023",
    status: "Live",
    longDescription:
      "This portfolio website showcases my work as a developer and designer. Built with Next.js 14 for optimal performance and SEO benefits, it features smooth animations powered by Framer Motion and a clean, modern design.",
    challenges:
      "Achieving the perfect balance between visual appeal and performance was key. I optimized images and implemented lazy loading to maintain high scores on performance metrics.",
    results:
      "The portfolio achieved a perfect 100 score on Google Lighthouse performance tests and helped me secure several client projects.",
    images: [
      "/images/project2.1.png",
      "/images/project2.2.png",
      "/images/project2.3.png",
      "/images/project2.4.png",
      "/images/project2.5.png",
      "/images/project2.6.png",
      "/images/project2.7.png",
      "/images/project2.8.png",
      "/images/project2.png",
    ],
  },
  {
    id: 3,
    title: "React Dashboard",
    desc: "Interactive dashboard with charts and authentication.",
    img: "/images/project2.1.png",
    type: "react",
    technologies: ["React", "Chart.js", "Firebase Auth", "Redux"],
    liveUrl: "https://dashboard.example.com",
    githubUrl: "https://github.com/example/dashboard",
    completionDate: "Feb 2024",
    status: "In Progress",
    longDescription:
      "A comprehensive admin dashboard that provides data visualization for business metrics. The dashboard includes user management, analytics, and reporting features with customizable widgets.",
    challenges:
      "Managing state across multiple chart components and ensuring data consistency was complex. I implemented Redux for state management which significantly simplified data flow.",
    results:
      "The dashboard processes over 50,000 data points daily and provides real-time insights to stakeholders, reducing decision-making time by 40%.",
    images: [
      "/images/project2.1.png",
      "/images/image2.avif",
      "/images/image3.avif",
    ],
  },
  {
    id: 4,
    title: "Next.js Blog Platform",
    desc: "SEO-friendly blog application powered by Next.js.",
    img: "/images/project2.1.png",
    type: "next",
    technologies: ["Next.js", "MDX", "Vercel", "Prisma"],
    liveUrl: "https://blog.example.com",
    githubUrl: "https://github.com/example/blog",
    completionDate: "Mar 2024",
    status: "Live",
    longDescription:
      "A full-featured blog platform with content management capabilities. The application supports MDX for rich content creation and includes features like categories, tags, search, and comment functionality.",
    challenges:
      "Implementing a robust search functionality that works across various content types was challenging. I integrated Next.js API routes with a search library to create a fast and accurate search experience.",
    results:
      "The blog ranks on the first page of Google for several key terms and has a 30% lower bounce rate than industry averages.",
    images: [
      "/images/project2.1.png",
      "/images/project2.1.png",
      "/images/project2.1.png",
    ],
  },
];

export { allProjectsData };
