import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-b from-[#050414] to-[#0b051a] px-6 py-20 relative overflow-hidden"
    >
      {/* Glow effect background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(178,110,255,0.15),transparent_70%)]"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-10 text-center"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b26eff] to-[#6dd5fa]">
          Contact Me
        </span>
      </motion.h2>

      {/* Info Text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-gray-400 text-center max-w-lg leading-relaxed mb-12"
      >
        Have an idea, project, or opportunity? Let’s connect!  
        Feel free to reach out through email or social links below.
      </motion.p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Email button */}
        <a
          href="mailto:omraman3333@gmail.com"
          className="px-8 py-3 border border-[#b26eff]/30 bg-[#1f103d]/60 text-[#b26eff] rounded-md font-semibold hover:bg-[#b26eff]/10 hover:shadow-[0_0_15px_#b26eff88] transition-all duration-300"
        >
          ✉️ Send Email
        </a>

        {/* Resume button for easy access */}
        <a
          href="https://drive.google.com/uc?export=download&id=1YVCirfTzG707u_JQ9clZSCJrI9m2Xgxr"
          target="_blank"
          rel="noreferrer"
          className="px-8 py-3 border border-[#6dd5fa]/30 bg-[#1f103d]/60 text-[#6dd5fa] rounded-md font-semibold hover:bg-[#6dd5fa]/10 hover:shadow-[0_0_15px_#6dd5fa88] transition-all duration-300"
        >
          📄 Download Resume
        </a>
      </div>

      {/* Divider Line */}
      <div className="mt-16 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#b26eff40] to-transparent"></div>

      {/* Footer Text */}
      <p className="mt-8 text-sm text-gray-500 text-center">
        Made with ❤️ by{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b26eff] to-[#6dd5fa] font-semibold">
          Ramandeep Singh
        </span>
      </p>
    </section>
  );
};

export default Contact;

