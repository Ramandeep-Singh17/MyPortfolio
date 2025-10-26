import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-[#0f051d] text-gray-400 py-8 border-t border-[#6b21ff22]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 text-center"
      >
        {/* 🌐 Social Links */}
        <div className="flex justify-center gap-8 mb-6">
          {/* GitHub */}
          <a
            href="https://github.com/Ramandeep-Singh17"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#b26eff] transition-all duration-300 transform hover:scale-110"
            title="GitHub"
          >
            <i className="fab fa-github text-3xl"></i>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ramandeep-singh-317250216"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#6dd5fa] transition-all duration-300 transform hover:scale-110"
            title="LinkedIn"
          >
            <i className="fab fa-linkedin text-3xl"></i>
          </a>

          {/* Gmail */}
          <a
            href="mailto:omraman3333@gmail.com"
            className="hover:text-[#22c55e] transition-all duration-300 transform hover:scale-110"
            title="Send Email"
          >
            <i className="fas fa-envelope text-3xl"></i>
          </a>
        </div>

        {/* ✍️ Footer Text */}
        <p className="text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b26eff] to-[#6dd5fa] font-semibold">
            Ramandeep Singh
          </span>{" "}
          — Built with 💻 React, Tailwind CSS & Framer Motion.
        </p>

        {/* 💫 Optional Personal Touch */}
        <p className="mt-2 text-xs text-gray-500">
          Designed with ❤️ by Ramandeep Singh
        </p>

        {/* 🔮 Gradient Glow Line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#b26eff] via-[#6dd5fa] to-[#b26eff] opacity-40"></div>
      </motion.div>
    </footer>
  );
};

export default Footer;
