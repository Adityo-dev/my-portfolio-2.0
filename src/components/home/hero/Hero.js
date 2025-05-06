// desc: This is the hero section of the home page

// developer Roles data
const developerRoles = [
  "Front end Developer",
  "Backend Developer",
  "Full stack Developer",
];

function Hero() {
  return (
    <section className="w-full h-screen">
      <div className="relative container mx-auto px-6 w-full h-screen flex flex-col space-y-44 justify-center ">
        <div className=" w-full flex items-center justify-between uppercase text-xs">
          {developerRoles.map((role, ind) => (
            <p key={ind} className="space-x-2">
              <span className="text-sunsetOrange">[</span>
              <span>{role}</span>
              <span className="text-sunsetOrange">]</span>
            </p>
          ))}
        </div>

        <div className="flex items-center justify-between space-x-32">
          <h1 className="text-9xl font-bold  uppercase text-defaultWhite flex flex-col tracking-tighter text-nowrap">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
