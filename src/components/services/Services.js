"use client";
import { servicesSectionData } from "@/app/data/servicesSectionData";
import { useState } from "react";
import SectionHeader from "../SectionHeader";
import ServicesCard from "./ServicesCard";

function Services() {
  const [activeService, setActiveService] = useState(null);

  return (
    <section id="services" className="py-8 sm:py-12 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <SectionHeader
          sectionName={servicesSectionData?.sectionName}
          title={servicesSectionData?.title}
          description={servicesSectionData?.description}
          isCenter={true}
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {servicesSectionData?.services.map((service) => (
            <ServicesCard
              key={service?.id}
              item={service}
              activeService={activeService}
              setActiveService={setActiveService}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <button className="bg-sunsetOrange text-white font-semibold px-6 py-3 rounded-md hover:opacity-90  transition-colors duration-300 flex items-center justify-center mx-auto">
            {servicesSectionData?.ctaBtn?.name}
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
