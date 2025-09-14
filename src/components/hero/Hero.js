import Link from "next/link";

// developer Roles data
const developerRoles = [
  "Front end Developer",
  "React Js Developer",
  "Next Js Developer",
];

function Hero() {
  return (
    <section className="w-full flex flex-col justify-center py-8 sm:py-12 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 w-full flex flex-col justify-center space-y-16 md:space-y-44">
        {/* Roles Section - Stack on mobile, row on larger screens */}
        <div className="w-full flex flex-wrap items-center justify-center sm:justify-between uppercase text-sm gap-4 md:gap-0">
          {developerRoles.map((role, ind) => (
            <p key={ind} className="space-x-2 text-center md:text-left">
              <span className="text-sunsetOrange">{"{"}</span>
              <span>{role}</span>
              <span className="text-sunsetOrange">{"}"}</span>
            </p>
          ))}
        </div>

        {/* Main Content - Stack on mobile, row on larger screens */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-16 xl:gap-32">
          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-9xl font-bold uppercase text-defaultWhite flex flex-col tracking-tight">
            <span>innovate</span>
            <span className="text-sunsetOrange text-nowrap">for design</span>
            <span>code</span>
          </h1>

          {/* Description and Button */}
          <div className="w-full">
            <p className="text-defaultWhite text-base sm:text-lg xl:text-xl">
              Our mission is to elevate your vision through groundbreaking
              design combining artistic flair with strategic insight to create
              memorable experiences that leave a lasting impression.
            </p>

            <Link href={"/"} className="flex items-center mt-10 md:mt-20 gap-2">
              <button className="bg-white text-black font-semibold px-4 py-3 rounded-md text-sm uppercase flex-1 sm:flex-none">
                Let's Contact
              </button>
              <button className="bg-sunsetOrange text-white font-semibold px-4 py-3 rounded-md flex items-center justify-center w-12 h-12">
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
                  className="lucide lucide-arrow-up-right"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* If you want to add the image back later, use this responsive approach:
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 max-w-2xl hidden xl:block">
        <Image
          src={"/images/heroImage.jpg"}
          width={800}
          height={800}
          alt="Hero image"
          className="w-full h-auto"
        />
      </div>
      */}
    </section>
  );
}

export default Hero;
