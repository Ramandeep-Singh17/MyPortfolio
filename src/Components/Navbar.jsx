import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Education", href: "education" },
    { name: "Experience", href: "experience" },
    { name: "Contact", href: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    setActive(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-[#0f051db0] border-b border-[#b26eff33]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Name */}
        <h1
          className="text-2xl sm:text-3xl font-extrabold cursor-pointer"
          onClick={() => handleScrollTo("about")}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b26eff] to-[#6dd5fa]">
            Ramandeep
          </span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          {navLinks.map((link) => (
            <li
              key={link.href}
              onClick={() => handleScrollTo(link.href)}
              className={`cursor-pointer transition-all duration-300 hover:text-[#b26eff] ${
                active === link.href ? "text-[#b26eff]" : ""
              }`}
            >
              {link.name}
            </li>
          ))}
        </ul>

        {/* Mobile Dropdown */}
        <div className="md:hidden text-gray-300 flex flex-col">
          <select
            className="bg-transparent text-white border border-[#b26eff50] rounded-md px-2 py-1 focus:outline-none"
            onChange={(e) => handleScrollTo(e.target.value)}
            value={active}
          >
            {navLinks.map((link) => (
              <option
                key={link.href}
                value={link.href}
                className="bg-[#1a083a] text-white"
              >
                {link.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Subtle gradient line under navbar */}
      <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-[#b26eff] via-[#6dd5fa] to-[#b26eff] opacity-40"></div>
    </motion.nav>
  );
};

export default Navbar;
