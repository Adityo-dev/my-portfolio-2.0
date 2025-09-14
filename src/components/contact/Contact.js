import HeaderRowSection from "../sectionHeader/HeaderRowSection";
import ContactFrom from "./ContactFrom";

function ContactSection() {
  return (
    <section className="py-8 sm:py-12 lg:py-24">
      <div className="container mx-auto px-4 h-full flex flex-col lg:flex-row justify-between gap-8">
        <div>
          {/* Section Header */}
          <HeaderRowSection
            sectionName={"Contact"}
            title={"Get In Touch"}
            description={
              "Have a project in mind or just want to say hello? Fill out the form and I’ll get back to you as soon as possible."
            }
          />

          <ul className="space-y-3 text-gray-300 mt-6">
            <li>
              📧{" "}
              <a
                href="mailto:adittodev01770@gmail.com"
                className="ml-1 hover:underline"
              >
                adittodev01770@gmail.com
              </a>
            </li>
            <li>
              📞{" "}
              <a href="tel:+8801770365981" className="ml-1 hover:underline">
                +880 1770-365981
              </a>
            </li>
            <li>
              📍 <span className="ml-1">Dhaka, Bangladesh</span>
            </li>
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
