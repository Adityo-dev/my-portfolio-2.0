"use client";
import ProjectSinglePageHeader from "@/components/projectsSinglePage/ProjectSinglePageHeader";
import SideBarProjectDetails from "@/components/projectsSinglePage/SideBarProjectDetails";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// This would typically be in a separate data file
const projectData = {
  1: {
    id: 1,
    title: "React E-commerce Website",
    desc: "A modern e-commerce platform built with React.js and Tailwind.",
    img: "/images/image1.avif",
    type: "react",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
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
      "/images/image1.avif",
      "/images/image1.avif",
      "/images/image1.avif",
    ],
  },
  2: {
    id: 2,
    title: "Next.js Portfolio",
    desc: "A personal portfolio website created using Next.js 14.",
    img: "/images/image1.avif",
    type: "next",
    technologies: ["Next.js 14", "TypeScript", "Framer Motion"],
    liveUrl: "https://portfolio.example.com",
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
      "/images/image1.avif",
      "/images/image1.avif",
      "/images/image1.avif",
    ],
  },
  3: {
    id: 3,
    title: "React Dashboard",
    desc: "Interactive dashboard with charts and authentication.",
    img: "/images/image1.avif",
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
      "/images/image1.avif",
      "/images/image2.avif",
      "/images/image3.avif",
    ],
  },
  4: {
    id: 4,
    title: "Next.js Blog Platform",
    desc: "SEO-friendly blog application powered by Next.js.",
    img: "/images/image1.avif",
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
      "/images/image1.avif",
      "/images/image1.avif",
      "/images/image1.avif",
    ],
  },
};

function ProjectDetails() {
  const params = useParams();
  const [project, setProject] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window !== "undefined") {
      const checkIsMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };

      // Initial check
      checkIsMobile();

      // Add event listener for window resize
      window.addEventListener("resize", checkIsMobile);

      // Cleanup
      return () => window.removeEventListener("resize", checkIsMobile);
    }
  }, []);

  useEffect(() => {
    // Simulate fetching project data based on ID
    if (params?.id && projectData[params.id]) {
      setProject(projectData[params.id]);
    }
  }, [params]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sunsetOrange mx-auto"></div>
          <p className="mt-4 text-gray-300">Loading project details...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-4 sm:py-8 lg:py-12 xl:py-16 2xl:py-20 pt-24">
      {/* Header */}
      <ProjectSinglePageHeader project={project} isMobile={isMobile} />

      <section className="container mx-auto px-3 sm:px-4 flex flex-col lg:flex-row gap-6 lg:gap-8">
        <div className="lg:w-[70%]">
          {/* Hero Image */}
          <div className="rounded-lg overflow-hidden mb-6 lg:mb-8 xl:mb-10 shadow-sm">
            <div className="relative h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] w-full">
              <Image
                src={project.images[activeImage]}
                alt={project.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Image Thumbnails */}
            {project.images.length > 1 && (
              <div className="flex gap-2 p-3 sm:p-4 bg-gray-900 rounded-md overflow-x-auto">
                {project.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative h-16 w-16 sm:h-20 sm:w-20 flex-shrink-0 rounded overflow-hidden border-2 transition-all ${
                      activeImage === index
                        ? "border-sunsetOrange scale-105"
                        : "border-gray-700 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${project.title} view ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Main Content */}
          <div>
            <section className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 text-sunsetOrange">
                Project Overview
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {project.longDescription}
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 text-sunsetOrange">
                Challenges & Solutions
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {project.challenges}
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 text-sunsetOrange">
                Results
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {project.results}
              </p>
            </section>
          </div>
        </div>

        <div className="lg:w-[30%] lg:min-w-[300px]">
          <SideBarProjectDetails project={project} />
        </div>
      </section>
    </section>
  );
}

export default ProjectDetails;
