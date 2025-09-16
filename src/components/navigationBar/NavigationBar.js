"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// navBar data
const navBarData = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "#about" },
  { id: 3, name: "projects", link: "/#projects" },
  { id: 4, name: "Services", link: "#services" },
  { id: 5, name: "Contact", link: "#contact" },
];

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to add background to navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#111625] shadow-md py-2.5" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href={"/"} className="z-50">
          <Image
            src={"/logo/coding.png"}
            width={50}
            height={50}
            alt="Website Logo"
            className="transition-transform duration-300 hover:scale-105 w-12 h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8">
          {navBarData.map((item) => (
            <li key={item.id} className="relative group capitalize">
              <Link
                href={item.link}
                className=" hover:text-sunsetOrange transition-colors duration-300 font-medium"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sunsetOrange transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`bg-sunsetOrange transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
            }`}
          ></span>
          <span
            className={`bg-sunsetOrange transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-1 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-sunsetOrange transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
            }`}
          ></span>
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed md:hidden inset-0 bg-[#111625] z-40 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center justify-center h-full space-y-6">
            {navBarData.map((item) => (
              <li key={item?.id}>
                <Link
                  href={item?.link}
                  className="capitalize text-2xl font-medium hover:text-sunsetOrange transition-colors duration-300"
                  onClick={handleLinkClick}
                >
                  {item?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
