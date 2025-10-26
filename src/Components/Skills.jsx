import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

// 💡 Import all logos directly
import htmlLogo from "../assets/tech_logo/html.png";
import cssLogo from "../assets/tech_logo/css.png";
import javascriptLogo from "../assets/tech_logo/js.png";
import reactjsLogo from "../assets/tech_logo/react.png";
import gsapLogo from "../assets/tech_logo/gsap.png";
import framerLogo from "../assets/tech_logo/framer.png";

import nodejsLogo from "../assets/tech_logo/nodejs.png";
import expressjsLogo from "../assets/tech_logo/expressjs.png";
import fastapiLogo from "../assets/tech_logo/FastAPI.png";
import mongodbLogo from "../assets/tech_logo/mangoDb.png";
import postgresLogo from "../assets/tech_logo/Postgres.png";
import renderLogo from "../assets/tech_logo/Render.png";
import netlifyLogo from "../assets/tech_logo/netlify.png";

import pythonLogo from "../assets/tech_logo/python.png";
import tensorflowLogo from "../assets/tech_logo/Tensorflow.png";
import pandasLogo from "../assets/tech_logo/Pandas.png";
import numpyLogo from "../assets/tech_logo/NUMPY.png";
import matplotlibLogo from "../assets/tech_logo/Matplotlib.png";
import opencvLogo from "../assets/tech_logo/Opencv.png";
import powerbiLogo from "../assets/tech_logo/powerBI.png";
import streamlitLogo from "../assets/tech_logo/Streamlit.png";
import huggingfaceLogo from "../assets/tech_logo/huggingface.png";
import pytorchLogo from "../assets/tech_logo/pytorch.png";
import kaggleLogo from "../assets/tech_logo/kaggle.png";
import pydanticLogo from "../assets/tech_logo/Pydantic.png";

import vscodeLogo from "../assets/tech_logo/vscode.png";
import dockerLogo from "../assets/tech_logo/Docker.png";
import figmaLogo from "../assets/tech_logo/Figma.png";
import excelLogo from "../assets/tech_logo/excel.png";
import javaLogo from "../assets/tech_logo/java.png";

const Skills = () => {
  const categories = [
    {
      title: "🌐 Frontend",
      techs: [
        { name: "HTML", logo: htmlLogo },
        { name: "CSS", logo: cssLogo },
        { name: "JavaScript", logo: javascriptLogo },
        { name: "ReactJS", logo: reactjsLogo },
        { name: "GSAP", logo: gsapLogo },
        { name: "Framer Motion", logo: framerLogo },
      ],
    },
    {
      title: "⚙️ Backend",
      techs: [
        { name: "NodeJS", logo: nodejsLogo },
        { name: "ExpressJS", logo: expressjsLogo },
        { name: "FastAPI", logo: fastapiLogo },
        { name: "MongoDB", logo: mongodbLogo },
        { name: "PostgreSQL", logo: postgresLogo },
        { name: "Render", logo: renderLogo },
        { name: "Netlify", logo: netlifyLogo },
      ],
    },
    {
      title: "🧠 Data Science & AI",
      techs: [
        { name: "Python", logo: pythonLogo },
        { name: "TensorFlow", logo: tensorflowLogo },
        { name: "PyTorch", logo: pytorchLogo },
        { name: "Pandas", logo: pandasLogo },
        { name: "NumPy", logo: numpyLogo },
        { name: "Matplotlib", logo: matplotlibLogo },
        { name: "OpenCV", logo: opencvLogo },
        { name: "Hugging Face", logo: huggingfaceLogo },
        { name: "Pydantic", logo: pydanticLogo },
        { name: "Power BI", logo: powerbiLogo },
        { name: "Streamlit", logo: streamlitLogo },
        { name: "Kaggle", logo: kaggleLogo },
      ],
    },
    {
      title: "🧰 Tools & Languages",
      techs: [
        { name: "VS Code", logo: vscodeLogo },
        { name: "Docker", logo: dockerLogo },
        { name: "Figma", logo: figmaLogo },
        { name: "Excel", logo: excelLogo },
        { name: "Java", logo: javaLogo },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative w-full min-h-screen bg-gradient-to-b from-[#0f051d] to-[#1a083a] text-white py-20 px-6"
    >
      <h2 className="text-4xl font-extrabold text-center mb-12">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b26eff] to-[#6dd5fa]">
          Skills & Technologies
        </span>
      </h2>

      <div className="flex flex-col gap-20 max-w-7xl mx-auto">
        {categories.map((category, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category Title */}
            <h3 className="text-2xl font-semibold mb-6 text-center sm:text-left text-[#c4b5fd]">
              {category.title}
            </h3>

            {/* Grid of Techs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
              {category.techs.map((tech, index) => (
                <Tilt
                  key={index}
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  transitionSpeed={400}
                  glareEnable={true}
                  glareMaxOpacity={0.2}
                  glareColor="#a76cff"
                  glareBorderRadius="20px"
                >
                  <motion.div
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.96 }}
                    className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-[#1a083a]/70
                               border border-[#8e5efc]/30 shadow-md shadow-[#6b21ff55]
                               flex flex-col items-center justify-center
                               hover:border-[#a76cff] hover:shadow-[#a76cff88]
                               transition-all duration-300 backdrop-blur-lg"
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-12 h-12 object-contain mb-2"
                    />
                    <p className="text-sm font-medium text-gray-200">{tech.name}</p>
                  </motion.div>
                </Tilt>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Glow backdrop */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(155,80,255,0.1)_0%,rgba(0,0,0,0)_70%)]"></div>
    </section>
  );
};

export default Skills;
