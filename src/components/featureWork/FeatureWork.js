"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

function FeatureWork() {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
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
    },
    {
      id: 2,
      title: "Next.js Portfolio",
      desc: "A personal portfolio website created using Next.js 14.",
      img: "/images/image2.avif",
      type: "next",
      technologies: ["Next.js 14", "TypeScript", "Framer Motion"],
      liveUrl: "https://portfolio.example.com",
      githubUrl: "https://github.com/example/portfolio",
      completionDate: "Dec 2023",
      status: "Live",
    },
    {
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
    },
    {
      id: 4,
      title: "Next.js Blog Platform",
      desc: "SEO-friendly blog application powered by Next.js.",
      img: "/images/image3.avif",
      type: "next",
      technologies: ["Next.js", "MDX", "Vercel", "Prisma"],
      liveUrl: "https://blog.example.com",
      githubUrl: "https://github.com/example/blog",
      completionDate: "Mar 2024",
      status: "Live",
    },
  ];

  // Filter projects based on activeTab
  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.type === activeTab);

  return (
    <section className="container mx-auto px-6 py-20">
      {/* Section Header */}
      <div className="w-full md:w-1/2 flex flex-col items-start">
        <div>
          <p className="space-x-2 mb-7">
            <span className="text-sunsetOrange">{"{"}</span>
            <span>FEATURED WORK</span>
            <span className="text-sunsetOrange">{"}"}</span>
          </p>
          <h2 className="text-5xl uppercase">Latest Insights</h2>
          <p className="mt-4 leading-relaxed text-gray-300">
            Explore my latest projects showcasing creativity, performance, and
            user-focused solutions.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mt-6 flex-wrap">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2 rounded-md font-semibold transition border border-sunsetOrange ${
            activeTab === "all"
              ? "bg-sunsetOrange text-white"
              : "text-sunsetOrange hover:bg-sunsetOrange/10"
          }`}
        >
          All Projects
        </button>
        <button
          onClick={() => setActiveTab("react")}
          className={`px-4 py-2 rounded-md font-semibold transition border border-sunsetOrange ${
            activeTab === "react"
              ? "bg-sunsetOrange text-white"
              : "text-sunsetOrange hover:bg-sunsetOrange/10"
          }`}
        >
          React.js
        </button>
        <button
          onClick={() => setActiveTab("next")}
          className={`px-4 py-2 rounded-md font-semibold transition border border-sunsetOrange ${
            activeTab === "next"
              ? "bg-sunsetOrange text-white"
              : "text-sunsetOrange hover:bg-sunsetOrange/10"
          }`}
        >
          Next.js
        </button>
      </div>

      {/* Project Cards */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
        {filteredProjects.map((project) => (
          <ProjectCard project={project} key={project?.id} />
        ))}
      </div>

      {/* No Projects Message */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">
            No projects found in this category.
          </p>
        </div>
      )}
    </section>
  );
}

export default FeatureWork;
