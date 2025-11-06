"use client";

import ProjectSinglePageHeader from "@/components/projectsSinglePage/ProjectSinglePageHeader";
import SideBarProjectDetails from "@/components/projectsSinglePage/SideBarProjectDetails";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function ProjectDetails() {
  const params = useParams();

  const [project, setProject] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  // Fetch project data from /data/projects.json
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch("/data/projects.json");
        if (!res.ok) throw new Error("Failed to load project data");
        const data = await res.json();

        const projectId = parseInt(params?.id, 10);
        const foundProject = data.find((p) => p.id === projectId);

        if (foundProject) {
          setProject(foundProject);
        } else {
          console.warn("Project not found:", projectId);
        }
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };

    if (params?.id) fetchProject();
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
    <section className="py-4 sm:py-8 lg:py-12 xl:py-16 2xl:py-20">
      {/* Header */}
      <ProjectSinglePageHeader project={project} />

      <section className="container mx-auto px-3 sm:px-4 flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Left side - Main Content */}
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

          {/* Main Project Description */}
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

        {/* Right side - Sidebar Details */}
        <div className="lg:w-[30%] lg:min-w-[300px]">
          <SideBarProjectDetails project={project} />
        </div>
      </section>
    </section>
  );
}

export default ProjectDetails;
