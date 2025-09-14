"use client";
import { useState } from "react";

function ContactFrom() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
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
  );
}

export default ContactFrom;
