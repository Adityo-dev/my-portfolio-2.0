"use client";
import Image from "next/image";
import Link from "next/link";
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
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-sunsetOrange hover:text-orange-300 transition-colors mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Projects
        </Link>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
            <p className="text-gray-300 mt-2">{project.desc}</p>
          </div>
          <div className="flex gap-3">
            <Link
              href={project.liveUrl}
              target="_blank"
              className="px-4 py-2 bg-sunsetOrange text-white rounded-md hover:bg-orange-500 transition-colors flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                  clipRule="evenodd"
                />
              </svg>
              Live Demo
            </Link>
            <Link
              href={project.githubUrl}
              target="_blank"
              className="px-4 py-2 border border-gray-700 text-gray-300 rounded-md hover:border-sunsetOrange hover:text-sunsetOrange transition-colors flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              View Code
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 pb-20">
        {/* Hero Image */}
        <div className="rounded-lg overflow-hidden mb-10 shadow-lg">
          <div className="relative h-96 w-full">
            <Image
              src={project.images[activeImage]}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Image Thumbnails */}
          {project.images.length > 1 && (
            <div className="flex gap-2 p-4 bg-gray-900">
              {project.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative h-16 w-16 rounded overflow-hidden ${
                    activeImage === index
                      ? "ring-2 ring-sunsetOrange"
                      : "opacity-70"
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-sunsetOrange">
                Project Overview
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {project.longDescription}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-sunsetOrange">
                Challenges & Solutions
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {project.challenges}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-sunsetOrange">
                Results
              </h2>
              <p className="text-gray-300 leading-relaxed">{project.results}</p>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg p-6 sticky top-6">
              <h3 className="text-xl font-bold mb-4">Project Details</h3>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm">Status</p>
                  <p
                    className={`font-medium ${
                      project.status === "Completed"
                        ? "text-green-400"
                        : project.status === "Live"
                        ? "text-blue-400"
                        : "text-yellow-400"
                    }`}
                  >
                    {project.status}
                  </p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Completion Date</p>
                  <p className="font-medium">{project.completionDate}</p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Technologies</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Category</p>
                  <p className="font-medium uppercase">
                    {project.type} Project
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-800">
                <h3 className="text-xl font-bold mb-4">Project Links</h3>
                <div className="space-y-3">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="flex items-center justify-between p-3 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors group"
                  >
                    <span>Live Website</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 group-hover:text-sunsetOrange"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="flex items-center justify-between p-3 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors group"
                  >
                    <span>GitHub Repository</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 group-hover:text-sunsetOrange"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProjectDetails;
