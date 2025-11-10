import { aboutSectionData } from "@/app/data/aboutSectionData";

import Link from "next/link";
import SectionHeader from "../SectionHeader";
import AboutImage from "./AboutImage";

function AboutMe() {
  return (
    <section
      id="about"
      className="container mx-auto px-4 py-8 sm:py-12 lg:py-24 h-full flex flex-col lg:flex-row justify-between gap-8"
    >
      <div className="xl:w-1/2">
        {/* Section Header */}
        <SectionHeader
          sectionName={aboutSectionData?.sectionName}
          title={aboutSectionData?.title}
          description={aboutSectionData?.description}
        />

        {/* Education Section */}
        <div className="my-6">
          <h3 className="text-xl font-semibold text-white mb-4">
            {aboutSectionData?.educations?.title}
          </h3>
          <ul className="space-y-3 text-gray-300">
            {aboutSectionData?.educations?.education.map((education) => (
              <li key={education?.id}>
                {education?.icon}{" "}
                <span className="font-semibold">{education?.title}</span> –
                {education?.institute} ({education?.duration})
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <Link
          href={"/cv/koushikBarmonCV.pdf"}
          download="/cv/koushikBarmonCV.pdf"
          className="flex items-center space-x-1"
        >
          <button className="bg-white text-black font-semibold px-4 py-3 rounded-md text-sm uppercase">
            {aboutSectionData?.ctaBtn?.name}
          </button>
          <button className="bg-sunsetOrange text-black font-semibold px-4 py-3 rounded-md flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right text-white"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </button>
        </Link>
      </div>

      {/* Right Side - Content */}
      <div className="xl:w-1/2 hidden lg:block">
        <AboutImage />
      </div>
    </section>
  );
}

export default AboutMe;
