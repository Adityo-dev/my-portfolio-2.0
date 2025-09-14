// desc: This is the hero section of the home page

import Link from "next/link";

// developer Roles data
const developerRoles = [
  "Front end Developer",
  "React Js Developer",
  "Next Js Developer",
];

function Hero() {
  return (
    <section className="w-full h-screen">
      <div className="relative z-50 container mx-auto px-6 w-full h-screen flex flex-col space-y-44 justify-center ">
        <div className=" w-full flex items-center justify-between uppercase text-sm">
          {developerRoles.map((role, ind) => (
            <p key={ind} className="space-x-2">
              <span className="text-sunsetOrange">{"{"}</span>
              <span>{role}</span>
              <span className="text-sunsetOrange">{"}"}</span>
            </p>
          ))}
        </div>

        <div className="flex items-end justify-between space-x-32">
          <h1 className="text-9xl font-bold uppercase text-defaultWhite flex flex-col tracking-tighter text-nowrap">
            <span>innovate</span>
            <span className="text-sunsetOrange">for design</span>
            <span>code</span>
          </h1>

          <div>
            <p className="text-defaultWhite text-lg">
              Our mission is to elevate your vision through groundbreaking
              design combining artistic flair with strategic insight to create
              memorable eyneriences that leave a lastina imnrecsion.
            </p>

            <Link href={"/"} className="flex items-center mt-20 space-x-1">
              <button className="bg-white text-black font-semibold px-4 py-3 rounded-md text-sm uppercase">
                Let's Contact
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
      </div>

      {/* <Image
        src={"/images/heroImage.jpg"}
        width={800}
        height={800}
        alt=""
        className="absolute w-[900px] right-[10%] top-[10%]"
      /> */}
    </section>
  );
}

export default Hero;
