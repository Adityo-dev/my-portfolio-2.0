"use client";
import Image from "next/image";
import { useState } from "react";

function FeatureWork() {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      id: 1,
      title: "React E-commerce Website",
      desc: "A modern e-commerce platform built with React.js and Tailwind.",
      img: "/images/image1.avif",
      type: "react",
    },
    {
      id: 2,
      title: "Next.js Portfolio",
      desc: "A personal portfolio website created using Next.js 14.",
      img: "/images/image1.avif",
      type: "next",
    },
    {
      id: 3,
      title: "React Dashboard",
      desc: "Interactive dashboard with charts and authentication.",
      img: "/images/image1.avif",
      type: "react",
    },
    {
      id: 4,
      title: "Next.js Blog Platform",
      desc: "SEO-friendly blog application powered by Next.js.",
      img: "/images/image1.avif",
      type: "next",
    },
  ];

  // Filter projects based on activeTab
  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.type === activeTab);

  return (
    <section id="work" className="container mx-auto px-6 py-20">
      {/* Section Header */}
      <div className="w-full md:w-1/2 flex flex-col items-start">
        <div>
          <p className="space-x-2 mb-7">
            <span className="text-sunsetOrange">{"{"}</span>
            <span>FEATURED WORK</span>
            <span className="text-sunsetOrange">{"}"}</span>
          </p>
          <h2 className="text-5xl uppercase">Latest Insights</h2>
          <p className="mt-4 text-gray-300">
            Explore my latest projects showcasing creativity, performance, and
            user-focused solutions.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 mt-10">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            activeTab === "all"
              ? "bg-orange-500 text-black"
              : "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black"
          }`}
        >
          All Projects
        </button>
        <button
          onClick={() => setActiveTab("react")}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            activeTab === "react"
              ? "bg-orange-500 text-black"
              : "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black"
          }`}
        >
          React.js
        </button>
        <button
          onClick={() => setActiveTab("next")}
          className={`px-4 py-2 rounded-lg font-semibold transition ${
            activeTab === "next"
              ? "bg-orange-500 text-black"
              : "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black"
          }`}
        >
          Next.js
        </button>
      </div>

      {/* Project Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
          >
            <Image
              src={project.img}
              alt={project.title}
              width={400}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.desc}</p>
              <a
                href="#"
                className="text-orange-500 font-semibold hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureWork;
