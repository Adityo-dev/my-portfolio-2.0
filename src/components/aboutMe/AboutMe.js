import Image from "next/image";
import Link from "next/link";
import HeaderRowSection from "../sectionHeader/HeaderRowSection";

function AboutMe() {
  return (
    <section
      id="about"
      className="container mx-auto px-4 py-8 sm:py-12 lg:py-24 h-full flex flex-col lg:flex-row justify-between gap-8"
    >
      <div className="xl:w-1/2">
        {/* Section Header */}
        <HeaderRowSection
          sectionName={"About Me"}
          title={"WHO I am"}
          description={
            "I’m Aditya Deb Barmon Koushik, a passionate Frontend Developer with expertise in React.js, Next.js, and modern UI frameworks. I love transforming creative ideas into user-friendly, responsive, and aesthetic web experiences."
          }
        />

        {/* Education Section */}
        <div className="my-6">
          <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              🎓{" "}
              <span className="font-semibold">
                Diploma in Computer Science & Technology
              </span>{" "}
              – Kushtia Polytechnic Institute (KPI) (2021–2026)
            </li>
            <li>
              📗{" "}
              <span className="font-semibold">
                Secondary School Certificate (SSC)
              </span>{" "}
              – Chatmohar Govt. RCN and BSN Model Pilot High School (2016–2021)
            </li>
            <li>
              📘 <span className="font-semibold">Primary Education</span> –
              Chatmohar Model Govt. Primary School (2010–2015)
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <Link
          href="/cv.pdf"
          download="aditto-cv.pdf"
          className="flex items-center space-x-1"
        >
          <button className="bg-white text-black font-semibold px-4 py-3 rounded-md text-sm uppercase">
            Download CV
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
      <div className="xl:w-1/2">
        <Image
          src={`/images/image3.avif`}
          alt={`Project `}
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

export default AboutMe;
