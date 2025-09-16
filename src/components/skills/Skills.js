"use client";
import { useState } from "react";

import HeaderColSection from "../sectionHeader/HeaderColSection";
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
  ];

  return (
    <section id="skills" className="py-8 sm:py-12 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <HeaderColSection
          sectionName={"FRONTEND SKILLS"}
          title={"Frontend Expertise"}
          description={
            "Technologies and frameworks I use to create engaging, responsive, and high-performance web applications."
          }
        />

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
