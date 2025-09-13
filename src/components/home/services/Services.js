import Link from "next/link";

const servicesData = [
  {
    serviceName: "UI/UX designer",
    description:
      "Our mission is to elevate your vision through groundbreaking design combining artistic",
  },
  {
    serviceName: "Branding",
    description:
      "Our mission is to elevate your vision through groundbreaking design combining artistic",
  },
  {
    serviceName: "Development",
    description:
      "Our mission is to elevate your vision through groundbreaking design combining artistic",
  },
  {
    serviceName: "Motion",
    description:
      "Our mission is to elevate your vision through groundbreaking design combining artistic",
  },
];

function Services() {
  return (
    <section className="container mx-auto px-6 h-full flex justify-between gap-[10%]">
      <div className="w-1/2 flex flex-col justify-between items-start">
        <div>
          <p className="space-x-2 mb-7">
            <span className="text-sunsetOrange">{"{"}</span>
            <span>Services</span>
            <span className="text-sunsetOrange">{"}"}</span>
          </p>

          <h2 className="text-5xl uppercase">Service expertise</h2>
          <p className="mt-4 leading-relaxed">
            Our mission is to elevate your vision through groundbreaking design
            combining artistic flair with strategic insight to create memorable
            eyneriences that leave a lastina imnrecsion.
          </p>
        </div>

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

      <div className="w-1/2 space-y-4 group">
        {servicesData.map((product, ind) => (
          <div
            className="w-full flex justify-between items-center border-b border-gray-600 py-6 transition-all duration-300 hover:bg-sunsetOrange hover:px-6 hover:rounded-lg cursor-pointer"
            key={ind}
          >
            <div className="space-y-3 w-[75%]">
              <p className="text-2xl uppercase">{product?.serviceName}</p>
              <p>{product?.description}</p>
            </div>
            <button className=" bg-defaultWhite"></button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
