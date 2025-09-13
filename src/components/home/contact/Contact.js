"use client";
import { useState } from "react";

function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // এখানে তুমি API call / Email service integrate করতে পারো
  };

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Content */}
        <div>
          <p className="space-x-2 mb-6">
            <span className="text-sunsetOrange">{"{"}</span>
            <span>CONTACT</span>
            <span className="text-sunsetOrange">{"}"}</span>
          </p>
          <h2 className="text-5xl uppercase mb-4">Get In Touch</h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            Have a project in mind or just want to say hello? Fill out the form
            and I’ll get back to you as soon as possible.
          </p>

          <ul className="space-y-3 text-gray-300">
            <li>
              📧 <span className="ml-1">adittodev01770@gmail.com</span>
            </li>
            <li>
              📞 <span className="ml-1">+880 1770-365981</span>
            </li>
            <li>
              📍 <span className="ml-1">Dhaka, Bangladesh</span>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-900 rounded-lg p-4 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-white outline-none border border-gray-800 focus:border-sunsetOrange transition-all duration-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-white outline-none border border-gray-800 focus:border-sunsetOrange transition-all duration-300"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-white outline-none border border-gray-800 focus:border-sunsetOrange transition-all duration-300"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-sunsetOrange text-white font-semibold px-6 py-3 rounded-md w-full hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
