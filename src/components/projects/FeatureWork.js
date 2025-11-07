"use client";

import { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader";
import ProjectCard from "./ProjectCard";

function FeatureWork() {
  const [activeTab, setActiveTab] = useState("all");
  const [projects, setProjects] = useState([]);

  const tabs = [
    { id: "all", label: "All Projects" },
    { id: "nextjs", label: "Next.js" },
    { id: "react", label: "React.js" },
  ];

  // Fetch data from /data/projects.json
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/data/projects.json");
        if (!response.ok) throw new Error("Failed to load projects data");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  // Filter projects based on active tab
  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.type === activeTab);

  return (
    <section
      id="projects"
      className="container mx-auto px-4 py-8 sm:py-12 lg:py-24"
    >
      {/* Section Header */}
      <SectionHeader
        sectionName={"FEATURED WORK"}
        title={"Latest Projects"}
        description={
          "Discover my recent work that combines creativity, functionality, and performance to deliver seamless user experiences."
        }
      />

      {/* Tabs */}
      <div className="flex gap-4 mt-6 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-md font-semibold transition border border-sunsetOrange ${
              activeTab === tab.id
                ? "bg-sunsetOrange text-white"
                : "text-sunsetOrange hover:bg-sunsetOrange/10"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-10">
        {filteredProjects.map((project) => (
          <ProjectCard project={project} key={project.id} />
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
