import ContactFrom from "./ContactFrom";

function ContactSection() {
  return (
    <section className="container mx-auto px-6 h-full flex justify-between gap-[10%]">
      <div className="w-1/2 flex flex-col justify-between items-start">
        <div>
          <p className="space-x-2 mb-7">
            <span className="text-sunsetOrange">{"{"}</span>
            <span>Contact</span>
            <span className="text-sunsetOrange">{"}"}</span>
          </p>

          <h2 className="text-5xl uppercase">Get In Touch</h2>
          <p className="mt-4 leading-relaxed">
            Have a project in mind or just want to say hello? Fill out the form
            and I’ll get back to you as soon as possible.
          </p>

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
      </div>

      <div className="w-1/2">
        <ContactFrom />
      </div>
    </section>
  );
}

export default ContactSection;
