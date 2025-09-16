"use client";
import { footerSectionData } from "@/app/data/footerSectionData";
import Link from "next/link";
import { useState } from "react";

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
                  {footerSectionData?.brandInfo?.logoText}
                </span>
              </div>
              <span className="text-white text-xl font-bold">
                {footerSectionData?.brandInfo?.name}
              </span>
            </div>
            <p className="text-gray-400 mb-6 w-full">
              {footerSectionData?.brandInfo?.description}
            </p>
            <div className="flex space-x-4">
              {footerSectionData?.brandInfo?.socialLinks.map((link) => (
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
              {footerSectionData?.quickLinks.map((link) => (
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
              {footerSectionData?.servicesLinks.map((link) => (
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
