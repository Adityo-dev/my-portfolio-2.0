import { MoveUpRight } from "lucide";

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
    <section className="container mx-auto px-6">
      <p className="space-x-2">
        <span className="text-sunsetOrange">(</span>
        <span>Services</span>
        <span className="text-sunsetOrange">)</span>
      </p>

      <div className="w-full h-full flex justify-between gap-[10%] mt-12">
        <div className="w-1/2 flex flex-col justify-between items-start">
          <div>
            <h2 className="text-5xl uppercase">Service expertise</h2>
            <p className="mt-4">
              Our mission is to elevate your vision through groundbreaking
              design combining artistic flair with strategic insight to create
              memorable eyneriences that leave a lastina imnrecsion.
            </p>
          </div>

          <button>Hi</button>
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
              <button className=" bg-defaultWhite">
                {/* Discover <MoveUpRight size={32} strokeWidth={2.5} /> */}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
