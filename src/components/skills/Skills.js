"use client";
import { skillsSectionData } from "@/app/data/skillsSectionData";
import { useState } from "react";
import SectionHeader from "../SectionHeader";
import SkillsCard from "./SkillsCard";
import SkillsSummary from "./SkillsSummary";

function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section id="skills" className="py-8 sm:py-12 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <SectionHeader
          sectionName={skillsSectionData?.sectionName}
          title={skillsSectionData?.title}
          description={skillsSectionData?.description}
          isCenter={true}
        />

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillsSectionData?.frontendSkills.map((skill) => (
            <SkillsCard
              key={skill?.id}
              item={skill}
              activeSkill={activeSkill}
              setActiveSkill={setActiveSkill}
            />
          ))}
        </div>

        {/* Skills Summary */}
        <SkillsSummary skills={skillsSectionData?.summarySkills} />
      </div>
    </section>
  );
}

export default Skills;
