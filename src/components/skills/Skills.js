"use client";
import { useState } from "react";

import SkillsCard from "./SkillsCard";
import SkillsSummary from "./SkillsSummary";

function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);

  const frontendSkills = [
    {
      id: 1,
      name: "HTML/CSS",
      level: 95,
      description:
        "Semantic HTML, CSS Grid, Flexbox, animations, and responsive design principles.",
      projects: "40+ projects",
      icon: "🎨",
    },
    {
      id: 2,
      name: "Tailwind CSS",
      level: 90,
      description:
        "Utility-first CSS framework for rapidly building custom designs without writing CSS.",
      projects: "20+ projects",
      icon: "💨",
    },
    {
      id: 3,
      name: "JavaScript",
      level: 95,
      description:
        "ES6+ features, asynchronous programming, DOM manipulation, and modern JS patterns.",
      projects: "30+ projects",
      icon: "📜",
    },
    {
      id: 4,
      name: "React",
      level: 90,
      description:
        "Building dynamic user interfaces with hooks, context API, and modern React patterns.",
      projects: "15+ projects",
      icon: "⚛️",
    },
    {
      id: 5,
      name: "Next.js",
      level: 85,
      description:
        "Server-side rendering, static site generation, and full-stack applications with API routes.",
      projects: "10+ projects",
      icon: "▲",
    },
    {
      id: 6,
      name: "TypeScript",
      level: 80,
      description:
        "Type-safe development, interfaces, generics, and gradual adoption in existing projects.",
      projects: "8+ projects",
      icon: "🔷",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sunsetOrange mb-2">
            <span className="text-sunsetOrange">{"{"} </span>
            FRONTEND SKILLS
            <span className="text-sunsetOrange"> {"}"}</span>
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frontend Expertise
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Technologies and frameworks I use to create engaging, responsive,
            and high-performance web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {frontendSkills.map((skill) => (
            <SkillsCard
              key={skill?.id}
              item={skill}
              activeSkill={activeSkill}
              setActiveSkill={setActiveSkill}
            />
          ))}
        </div>

        {/* Skills Summary */}
        <SkillsSummary />
      </div>
    </section>
  );
}

export default Skills;
