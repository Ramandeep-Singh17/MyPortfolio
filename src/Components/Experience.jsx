import React from "react";
import { motion } from "framer-motion";

// ✅ Experiences + Real Projects + Certificates
const experiences = [
  {
    id: "codesoft-python",
    role: "Virtual Intern (Python)",
    company: "CodeSoft — Unpaid Virtual Internship",
    duration: "2024",
    description:
      "Completed a virtual internship focused on Python scripting, data cleaning, and automation. Built Python utilities to strengthen analytical and backend skills.",
    color: "#b26eff",
    certificateLink:
      "https://drive.google.com/file/d/1utfP878_haPy-0gERNQhsemAZw3dtZ7X/view?usp=drivesdk",
    projects: [
      {
        title: "Heart Disease Predictor",
        summary:
          "A Machine Learning web app that predicts the likelihood of heart disease based on user health data. Built with Python, Streamlit, and Scikit-Learn.",
        github: "https://github.com/Ramandeep-Singh17/Heart-Disease-Predictor",
        live: "https://ramandeep-singh-heart-disease-predictor.streamlit.app/",
      },
    ],
  },
  {
    id: "tcs-genai-sim",
    role: "GenAI Job Simulation",
    company: "TCS — Job Simulation Program",
    duration: "2025",
    description:
      "Completed TCS’ Generative AI Job Simulation, exploring prompt engineering, LLM fundamentals, and building simple GenAI-based prototypes.",
    color: "#6dd5fa",
    certificateLink:
      "https://drive.google.com/file/d/1o6z-7GEIqEtpkBLdZ1t15MCuk8yQCd5F/view?usp=drivesdk",
    projects: [
      {
        title: "Movie Recommender System",
        summary:
          "A recommendation engine that suggests movies based on content similarity using Python, Pandas, and Scikit-Learn.",
        github: "https://github.com/Ramandeep-Singh17/movie-recommender-system",
        live: null, // ❌ Not deployed yet — can add later when ready
      },
    ],
  },
  {
    id: "deloitte-data-analyst-sim",
    role: "Data Analyst Job Simulation",
    company: "Deloitte — Job Simulation Program",
    duration: "2025",
    description:
      "Completed Deloitte’s Data Analyst simulation, focusing on EDA, visualization, and business insights generation using Python and Power BI.",
    color: "#a76cff",
    certificateLink:
      "https://drive.google.com/file/d/1Qf_V1yP1Cvh-Dde8xB58VK-23cznuzI8/view?usp=drivesdk",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative w-full min-h-screen bg-gradient-to-b from-[#1a083a] to-[#0f051d] text-white py-20 px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-12"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b26eff] to-[#6dd5fa]">
          Experience & Projects
        </span>
      </motion.h2>

      <div className="relative max-w-5xl mx-auto">
        {/* center line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#b26eff] to-[#6dd5fa] h-full opacity-30" />

        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12, duration: 0.6 }}
            className={`mb-14 flex flex-col sm:flex-row ${
              i % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            <div
              className={`w-full sm:w-[48%] ${
                i % 2 === 0 ? "sm:pr-8" : "sm:pl-8"
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative bg-[#1f103d]/70 p-6 rounded-2xl border border-[#8e5efc]/20 shadow-lg shadow-[#6b21ff33]"
              >
                {/* dot on center line */}
                <div
                  className={`hidden sm:block absolute top-6 ${
                    i % 2 === 0 ? "-right-10" : "-left-10"
                  } w-4 h-4 rounded-full`}
                  style={{
                    background: exp.color,
                    boxShadow: `0 0 18px ${exp.color}`,
                  }}
                />

                <h3 className="text-xl font-semibold mb-1" style={{ color: exp.color }}>
                  {exp.role}
                </h3>

                <p className="text-sm text-gray-400 mb-2">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-4 italic">{exp.duration}</p>
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>

                {/* Projects */}
                {exp.projects && exp.projects.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-200 mb-2">Projects</h4>
                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                      {exp.projects.map((p, idx) => (
                        <li key={idx}>
                          <strong className="text-gray-100">{p.title}</strong>
                          {p.summary && (
                            <span className="text-gray-300"> — {p.summary}</span>
                          )}
                          <div className="flex flex-wrap gap-3 mt-2 ml-2">
                            {p.github && (
                              <a
                                href={p.github}
                                target="_blank"
                                rel="noreferrer"
                                className="px-3 py-1 rounded-md border border-[#6dd5fa]/40 text-xs text-[#6dd5fa] hover:bg-[#6dd5fa]/10 transition"
                              >
                                GitHub
                              </a>
                            )}
                            {p.live && (
                              <a
                                href={p.live}
                                target="_blank"
                                rel="noreferrer"
                                className="px-3 py-1 rounded-md border border-[#b26eff]/40 text-xs text-[#b26eff] hover:bg-[#b26eff]/10 transition"
                              >
                                Live Demo
                              </a>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Certificates */}
                {exp.certificateLink && (
                  <div className="mt-5 flex gap-3 flex-wrap">
                    <a
                      href={exp.certificateLink}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-md bg-[#0b1220]/80 border border-[#6dd5fa]/30 text-sm hover:bg-[#6dd5fa]/10 transition"
                    >
                      View Certificate
                    </a>
                    <a
                      href={exp.certificateLink}
                      download
                      className="px-4 py-2 rounded-md bg-[#0b1220]/80 border border-[#b26eff]/30 text-sm hover:bg-[#b26eff]/10 transition"
                    >
                      Download
                    </a>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(155,80,255,0.04)_0%,rgba(0,0,0,0)_70%)]" />
    </section>
  );
};

export default Experience;
