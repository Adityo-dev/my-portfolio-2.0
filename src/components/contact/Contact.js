import Link from "next/link";
import HeaderRowSection from "../sectionHeader/HeaderRowSection";
import ContactFrom from "./ContactFrom";

const contactInfo = [
  {
    id: 1,
    icon: "📧",
    label: "Email",
    value: "adittodev01770@gmail.com",
    link: "mailto:adittodev01770@gmail.com",
  },
  {
    id: 2,
    icon: "📞",
    label: "Phone",
    value: "+880 1770-365981",
    link: "tel:+8801770365981",
  },
  { id: 3, icon: "📍", label: "Location", value: "Dhaka, Bangladesh" },
];

function ContactSection() {
  return (
    <section id="contact" className="py-8 sm:py-12 lg:py-24">
      <div className="container mx-auto px-4 h-full flex flex-col lg:flex-row justify-between gap-8">
        <div>
          {/* Section Header */}
          <HeaderRowSection
            sectionName={"Contact"}
            title={"Get In Touch"}
            description={
              "Have a project, idea, or collaboration in mind? Reach out and I'll respond promptly to bring your vision to life."
            }
          />

          <ul className="space-y-3 text-gray-300 mt-6">
            {contactInfo.map((info) => (
              <li key={info?.label}>
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

        <div className="xl:w-1/2">
          <ContactFrom />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
