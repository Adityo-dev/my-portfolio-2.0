import { contactSectionData } from "@/app/data/contactSectionData";
import Link from "next/link";
import HeaderRowSection from "../sectionHeader/HeaderRowSection";
import ContactFrom from "./ContactFrom";

function ContactSection() {
  return (
    <section id="contact" className="py-8 sm:py-12 lg:py-24">
      <div className="container mx-auto px-4 h-full flex flex-col lg:flex-row justify-between gap-8">
        <div>
          {/* Section Header */}
          <HeaderRowSection
            sectionName={contactSectionData?.sectionName}
            title={contactSectionData?.title}
            description={contactSectionData?.description}
          />

          {/* Contacts Info */}
          <ul className="space-y-3 text-gray-300 mt-6">
            {contactSectionData?.contactInfo.map((info) => (
              <li key={info?.id}>
                {info?.icon}{" "}
                {info?.link ? (
                  <Link href={info?.link} className="ml-1 hover:underline">
                    {info?.value}
                  </Link>
                ) : (
                  <span className="ml-1">{info?.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact From */}
        <div className="xl:w-1/2">
          <ContactFrom />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
