"use client";
import { useState } from "react";
import HeaderColSection from "../sectionHeader/HeaderColSection";
import ServicesCard from "./ServicesCard";

function Services() {
  const [activeService, setActiveService] = useState(null);

  const servicesData = [
    {
      id: 1,
      serviceName: "UI/UX Design",
      description:
        "Designing intuitive, visually engaging interfaces that provide seamless and enjoyable user experiences across all devices.",
      icon: "🎨",
    },
    {
      id: 2,
      serviceName: "Branding",
      description:
        "Crafting memorable and cohesive brand identities that clearly communicate your value and connect with your audience.",
      icon: "🖌️",
    },
    {
      id: 3,
      serviceName: "Web Development",
      description:
        "Building responsive, high-performance web applications using modern technologies and best coding practices for seamless user experiences.",
      icon: "💻",
    },
    {
      id: 4,
      serviceName: "Motion Design",
      description:
        "Enhancing digital experiences with dynamic animations and interactions that engage users and bring interfaces to life.",
      icon: "🎬",
    },
    {
      id: 5,
      serviceName: "Performance Optimization",
      description:
        "Ensuring fast, reliable, and seamless digital experiences through efficient coding, optimization, and best practices.",
      icon: "⚡",
    },
    {
      id: 6,
      serviceName: "Full-Stack Support",
      description:
        "Bridging frontend and backend to deliver fully functional, scalable, and maintainable web applications.",
      icon: "🛠️",
    },
  ];

  return (
    <section id="services" className="py-8 sm:py-12 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <HeaderColSection
          sectionName={"SERVICES"}
          title={"Service Expertise"}
          description={
            "“I craft high-quality digital solutions by combining creativity, technical expertise, and strategic thinking to deliver engaging, intuitive, and impactful experiences.”"
          }
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {servicesData.map((service, index) => (
            <ServicesCard
              key={index}
              item={service}
              activeService={activeService}
              setActiveService={setActiveService}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <button className="bg-sunsetOrange text-white font-semibold px-6 py-3 rounded-md hover:opacity-90  transition-colors duration-300 flex items-center justify-center mx-auto">
            Start a Project Together
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;
