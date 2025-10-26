import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ReactTyped } from "react-typed";
import profilePic from "../assets/education_logo/Profile.png";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-10 relative overflow-hidden"
    >
      {/* Soft Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#d00e3b33] to-[#050414] opacity-70"></div>

      {/* Left Side - Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col text-center md:text-left"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight">
          Hi, I’m <span className="text-pink-500">Ramandeep Singh</span>
        </h1>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300 mt-4">
          <ReactTyped
            strings={[
              "Full Stack Developer 💻",
              "Passionate Coder 🧩",
              "UI/UX Enthusiast 🎨",
              "Data Science Explorer 📊",
            ]}
            typeSpeed={55}
            backSpeed={35}
            loop
          />
        </h2>

        <p className="text-gray-400 text-lg mt-6 max-w-xl leading-relaxed">
          I’m a developer who loves solving real-world problems through clean
          code, intuitive design, and intelligent data-driven systems. My goal
          is to build products that merge creativity, logic, and technology
          seamlessly.
        </p>

        <div className="flex gap-5 mt-8 justify-center md:justify-start">
          {/* Contact Me Button */}
          <a
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-transform"
          >
            Contact Me
          </a>

          {/* Download Resume Button */}
          <a
  href="https://drive.google.com/uc?export=download&id=1YVCirfTzG707u_JQ9clZSCJrI9m2Xgxr"
  target="_blank"
  rel="noreferrer"
  className="px-8 py-3 border border-pink-500 text-pink-400 rounded-full font-semibold hover:bg-pink-500 hover:text-white hover:shadow-[0_0_15px_#ff149366] transition-all"
>
  📄 Download Resume
</a>

        </div>
      </motion.div>

      {/* Right Side - Profile Image with Glow + Tilt */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Tilt glareEnable={true} glareMaxOpacity={0.25} scale={1.05}>
          <div className="w-[250px] h-[250px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden border-[3px] border-pink-500 shadow-[0_0_40px_rgba(255,20,147,0.3)] hover:shadow-[0_0_60px_rgba(255,20,147,0.6)] transition-all">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </Tilt>
      </motion.div>
    </section>
  );
};

export default About;
