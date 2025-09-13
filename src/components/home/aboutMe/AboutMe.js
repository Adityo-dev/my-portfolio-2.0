import Image from "next/image";
import Link from "next/link";

function AboutMe() {
  return (
    <section className="container mx-auto px-6 h-full flex justify-between gap-[10%]">
      <div className="w-1/2 flex flex-col justify-between items-start">
        <div>
          <p className="space-x-2 mb-7">
            <span className="text-sunsetOrange">{"{"}</span>
            <span>About Me</span>
            <span className="text-sunsetOrange">{"}"}</span>
          </p>

          <h2 className="text-5xl uppercase">WHO I am</h2>
          <p className="mt-4">
            I’m Aditya Deb Barmon Koushik, a passionate Frontend Developer with
            expertise in React.js, Next.js, and modern UI frameworks. I love
            transforming creative ideas into user-friendly, responsive, and
            aesthetic web experiences.
          </p>

          {/* Education Section */}
          <div className="mb-8 mt-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Education
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                🎓{" "}
                <span className="font-semibold">
                  Diploma in Computer Science & Technology
                </span>
                – Kushtia Polytechnic Institute
              </li>
              <li>
                📘{" "}
                <span className="font-semibold">
                  Higher Secondary Certificate (HSC)
                </span>
                – [Your College Name]
              </li>
              <li>
                📗{" "}
                <span className="font-semibold">
                  Secondary School Certificate (SSC)
                </span>
                – [Your School Name]
              </li>
            </ul>
          </div>

          {/* Buttons */}
          <Link href={"/"} className="flex items-center space-x-1">
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
      </div>

      {/* Right Side - Content */}
      <div className="w-1/2 space-y-4 group">
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
