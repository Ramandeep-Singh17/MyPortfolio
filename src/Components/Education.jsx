import React from "react";
import { motion } from "framer-motion";
import NietLogo from "../assets/education_logo/Niet.png";
import DavLogo from "../assets/education_logo/DAV.png";
import CourseraLogo from "../assets/education_logo/Coursera.png";

const educationData = [
  {
    id: 1,
    degree: "B.Tech in Computer Science (AI & ML)",
    institution: "Noida Institute of Engineering and Technology (NIET)",
    duration: "2023 – 2027",
    grade: "CGPA: 9.0",
    logo: NietLogo,
    color: "#b26eff",
    description:
      "Pursuing specialization in Artificial Intelligence, Machine Learning, and Full Stack Development. Building analytical, programming, and system design expertise through academic and personal projects.",
  },
  {
    id: 2,
    degree: "12th Grade (Science Stream)",
    institution: "DAV College, Muzaffarpur, Bihar",
    duration: "2020 – 2022",
    grade: "Grade: A (84%)",
    logo: DavLogo,
    color: "#6dd5fa",
    description:
      "Studied core subjects like Physics, Chemistry, and Mathematics with a focus on logical reasoning, computer fundamentals, and data interpretation.",
  },
  {
    id: 3,
    degree: "Professional Certifications — Coursera",
    institution: "IBM Skills Network (Coursera)",
    duration: "2024 – 2025",
    grade: "Completed Multiple Courses",
    logo: CourseraLogo,
    color: "#22c55e",
    description:
      "Completed multiple professional certifications focusing on programming, AI, and full stack technologies including:",
    courses: [
      "Python Programming for Everybody",
      "Deep Learning Fundamentals (DeepLearning.AI)",
      "ReactJS Frontend Development",
      "Data Science with Python",
    ],
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative w-full min-h-screen bg-gradient-to-b from-[#0f051d] to-[#050414] text-white py-20 px-6"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-16"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b26eff] to-[#6dd5fa]">
          Education & Certifications
        </span>
      </motion.h2>

      {/* Connected Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Center glowing line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#b26eff] via-[#6dd5fa] to-[#22c55e] opacity-40"></div>

        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className={`relative flex flex-col sm:flex-row ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            } mb-16`}
          >
            <div
              className={`w-full sm:w-[48%] ${
                index % 2 === 0 ? "sm:pr-8" : "sm:pl-8"
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative bg-[#1a1039]/70 border border-[#8e5efc]/20 rounded-2xl p-6 shadow-lg shadow-[#6b21ff33] hover:shadow-[#b26eff55] transition-all duration-300"
              >
                {/* Dot on timeline */}
                <div
                  className={`hidden sm:block absolute top-6 ${
                    index % 2 === 0 ? "-right-10" : "-left-10"
                  } w-4 h-4 rounded-full`}
                  style={{
                    background: edu.color,
                    boxShadow: `0 0 20px ${edu.color}`,
                  }}
                ></div>

                {/* Card Content */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    className="w-14 h-14 object-contain rounded-xl bg-[#0e0a1f] p-2"
                  />
                  <div>
                    <h3
                      className="text-xl font-semibold"
                      style={{ color: edu.color }}
                    >
                      {edu.degree}
                    </h3>
                    <p className="text-gray-400 text-sm">{edu.institution}</p>
                  </div>
                </div>

                <div className="text-sm text-gray-300 space-y-1">
                  <p>
                    <strong>Duration:</strong> {edu.duration}
                  </p>
                  <p>
                    <strong>{edu.grade}</strong>
                  </p>
                </div>

                <p className="mt-3 text-gray-400 leading-relaxed text-sm">
                  {edu.description}
                </p>

                {/* ✅ Show course list if available */}
                {edu.courses && (
                  <ul className="mt-3 list-disc list-inside text-gray-300 text-sm space-y-1">
                    {edu.courses.map((course, i) => (
                      <li key={i}>{course}</li>
                    ))}
                  </ul>
                )}

                {/* Subtle Glow */}
                <div
                  className="absolute inset-0 -z-10 rounded-2xl opacity-10"
                  style={{
                    background: `radial-gradient(circle at top left, ${edu.color}, transparent 70%)`,
                  }}
                ></div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_center,rgba(155,80,255,0.05)_0%,rgba(0,0,0,0)_70%)]"></div>
    </section>
  );
};

export default Education;
