"use client";
import Link from "next/link";
import { useState } from "react";

// যদি তুমি চাইলে icon কে আলাদা component বানাতে পারো, অথবা সরাসরি JSX icon বসাতে পারো

const brandInfo = {
  logoText: "D",
  name: "Developer",
  description:
    "Creating beautiful, functional web experiences with a focus on user satisfaction and performance.",
  socialLinks: [
    {
      id: 1,
      name: "Facebook",
      href: "https://www.facebook.com/koushik.barmon.79",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      ),
    },
    {
      id: 2,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/aditto-dev",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.791-1.75-1.767s.784-1.767 1.75-1.767c.965 0 1.75.791 1.75 1.767s-.785 1.767-1.75 1.767zm13.25 11.268h-3v-5.604c0-1.338-.026-3.065-1.867-3.065-1.868 0-2.155 1.459-2.155 2.967v5.702h-3v-10h2.881v1.367h.041c.401-.757 1.379-1.554 2.838-1.554 3.033 0 3.594 1.996 3.594 4.59v5.597z" />
        </svg>
      ),
    },
    {
      id: 3,
      name: "GitHub",
      href: "https://github.com/Adityo-dev",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
  ],
};

// Quick Links
const quickLinks = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "Skills", href: "#skills" },
  { id: 3, name: "Services", href: "#services" },
  { id: 4, name: "Projects", href: "#projects" },
  { id: 5, name: "About", href: "#about" },
  { id: 6, name: "Contact", href: "#contact" },
];

// Services Links
const servicesLinks = [
  { id: 1, name: "UI/UX Design", href: "#services" },
  { id: 2, name: "Web Development", href: "#services" },
  { id: 3, name: "Branding", href: "#services" },
  { id: 4, name: "Motion Design", href: "#services" },
  { id: 5, name: "Consultation", href: "#services" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-sunsetOrange flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">
                  {brandInfo?.logoText}
                </span>
              </div>
              <span className="text-white text-xl font-bold">
                {brandInfo?.name}
              </span>
            </div>
            <p className="text-gray-400 mb-6 w-full">
              {brandInfo?.description}
            </p>
            <div className="flex space-x-4">
              {brandInfo?.socialLinks.map((link) => (
                <Link
                  key={link?.id}
                  href={link?.href}
                  target="_blank"
                  className="text-gray-400 hover:text-sunsetOrange transition-colors"
                >
                  {link?.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link?.id}>
                  <Link
                    href={link?.href}
                    className="text-gray-400 hover:text-sunsetOrange transition-colors"
                  >
                    {link?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link?.id}>
                  <Link
                    href={link?.href}
                    className="text-gray-400 hover:text-sunsetOrange transition-colors"
                  >
                    {link?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to my newsletter for the latest updates and insights.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-lg bg-green-900/30 border border-green-800 text-green-400">
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-md bg-gray-800 text-white outline-none border border-gray-800 focus:border-sunsetOrange transition-all duration-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-3 bg-sunsetOrange text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Developer. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="#"
              className="text-gray-500 hover:text-sunsetOrange text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-sunsetOrange text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-sunsetOrange text-sm transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
