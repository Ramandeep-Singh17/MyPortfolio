// ===================== IMPORTS =====================
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import jsLogo from './assets/tech_logo/js.png';
import reactLogo from './assets/tech_logo/react.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import framerLogo from './assets/tech_logo/framer.png';
import nodeLogo from './assets/tech_logo/nodejs.png';
import expressLogo from './assets/tech_logo/expressjs.png';
import mongoLogo from './assets/tech_logo/mangoDb.png';
import dockerLogo from './assets/tech_logo/Docker.png';
import githubLogo from './assets/tech_logo/Github.png';
import fastapiLogo from './assets/tech_logo/FastAPI.png';
import renderLogo from './assets/tech_logo/Render.png';
import postgresLogo from './assets/tech_logo/Postgres.png';
import pydanticLogo from './assets/tech_logo/Pydantic.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/Figma.png';
import profilePic from "./assets/education_logo/Profile.png";


// Productivity / Office Tools
import excelLogo from './assets/tech_logo/excel.png';
import powerBILogo from './assets/tech_logo/powerBI.png';

// Data Science / ML
import numpyLogo from './assets/tech_logo/NUMPY.png';
import pandasLogo from './assets/tech_logo/Pandas.png';
import matplotlibLogo from './assets/tech_logo/Matplotlib.png';
import seabornLogo from './assets/tech_logo/Seaborn.png';
import scikitLogo from './assets/tech_logo/Scikitlearn.png';
import tensorflowLogo from './assets/tech_logo/Tensorflow.png';
import pytorchLogo from './assets/tech_logo/pytorch.png';
import opencvLogo from './assets/tech_logo/Opencv.png';
import streamlitLogo from './assets/tech_logo/Streamlit.png';
import huggingfaceLogo from './assets/tech_logo/huggingface.png';
import colabLogo from './assets/tech_logo/googlecolab.png';
import kaggleLogo from './assets/tech_logo/kaggle.png';

// Programming Languages
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';

// Education
import davLogo from './assets/education_logo/DAV.png';
import nietLogo from './assets/education_logo/niet.png';

// ===================== SKILLS =====================
export const SkillsInfo = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: jsLogo },
      { name: 'React.js', logo: reactLogo },
      { name: 'Tailwind CSS', logo: cssLogo },
      { name: 'Framer Motion', logo: framerLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
  {
    title: 'Backend & DevOps',
    skills: [
      { name: 'Node.js', logo: nodeLogo },
      { name: 'Express.js', logo: expressLogo },
      { name: 'MongoDB', logo: mongoLogo },
      { name: 'PostgreSQL', logo: postgresLogo },
      { name: 'FastAPI', logo: fastapiLogo },
      { name: 'Pydantic', logo: pydanticLogo },
      { name: 'Docker', logo: dockerLogo },
      { name: 'Render', logo: renderLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'GitHub', logo: githubLogo },
    ],
  },
  {
    title: 'Programming & DSA',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: jsLogo },
    ],
  },
  {
    title: 'Data Science & Machine Learning',
    skills: [
      { name: 'NumPy', logo: numpyLogo },
      { name: 'Pandas', logo: pandasLogo },
      { name: 'Matplotlib', logo: matplotlibLogo },
      { name: 'Seaborn', logo: seabornLogo },
      { name: 'Scikit-Learn', logo: scikitLogo },
      { name: 'TensorFlow', logo: tensorflowLogo },
      { name: 'PyTorch', logo: pytorchLogo },
      { name: 'OpenCV', logo: opencvLogo },
      { name: 'Streamlit', logo: streamlitLogo },
      { name: 'Hugging Face', logo: huggingfaceLogo },
      { name: 'Google Colab', logo: colabLogo },
      { name: 'Kaggle', logo: kaggleLogo },
      { name: 'Power BI', logo: powerBILogo },
      { name: 'Excel', logo: excelLogo },
    ],
  },
  {
    title: 'Tools / IDEs / Platforms',
    skills: [
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Docker', logo: dockerLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Render', logo: renderLogo },
      { name: 'Google Colab', logo: colabLogo },
      { name: 'Kaggle', logo: kaggleLogo },
      { name: 'Excel', logo: excelLogo },
      { name: 'Power BI', logo: powerBILogo },
    ],
  },
];

// ===================== EXPERIENCE =====================
export const experiences = [
  {
    id: 0,
    role: 'Full Stack Developer Intern',
    company: 'AI Coders Hub',
    date: 'May 2024 - Present',
    desc: 'Working on MERN stack projects integrated with AI features like summarization, chatbot modules, and image generation using OpenAI and Hugging Face APIs.',
    skills: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'FastAPI',
      'Tailwind CSS',
      'Docker',
    ],
  },
  {
    id: 1,
    role: 'Machine Learning Intern',
    company: 'DataEdge Analytics',
    date: 'Jan 2024 - Apr 2024',
    desc: 'Implemented ML models for NLP and computer vision tasks. Built data dashboards using Streamlit, Power BI, and Pandas.',
    skills: [
      'Python',
      'TensorFlow',
      'Scikit-Learn',
      'Streamlit',
      'Power BI',
      'Matplotlib',
    ],
  },
];

// ===================== EDUCATION =====================
export const education = [
  {
    id: 0,
    img: nietLogo,
    school: 'Noida Institute of Engineering and Technology (NIET)',
    date: '2023 - 2027',
    grade: '9.0 CGPA',
    degree: 'B.Tech in Computer Science and Engineering (AI & ML)',
    desc: 'Currently pursuing B.Tech focusing on Artificial Intelligence, Machine Learning, and Full Stack Development.',
  },
  {
    id: 1,
    img: davLogo,
    school: 'DAV Public School, Muzaffarpur, Bihar',
    date: '2020 - 2022',
    grade: 'Grade A',
    degree: 'CBSE (Class XII) - Science Stream (PCM with Computer)',
    desc: 'Completed Class 12 with strong focus on Physics, Chemistry, Mathematics, and Computer Science.',
  },
];

// ===================== PROJECTS =====================
export const projects = [
  {
    id: 0,
    title: 'AI Image Caption Generator',
    description:
      'Developed a deep learning model that automatically generates captions for uploaded images using TensorFlow and Hugging Face Transformers.',
    tags: ['Python', 'TensorFlow', 'Hugging Face', 'Streamlit'],
    webapp: 'https://ai-caption-app.vercel.app/',
  },
  {
    id: 1,
    title: 'Personal Portfolio Website',
    description:
      'Built a fully responsive and animated personal portfolio using React.js, TailwindCSS, and Framer Motion.',
    tags: ['React', 'TailwindCSS', 'Framer Motion', 'GSAP'],
    webapp: 'https://yourportfolio.vercel.app/',
  },
  {
    id: 2,
    title: 'Task Manager Web App',
    description:
      'A full-stack application to manage tasks and productivity goals, integrated with MongoDB for cloud storage.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
  },
  {
    id: 3,
    title: 'Data Visualization Dashboard',
    description:
      'Interactive dashboard for data analytics using Power BI and Streamlit for ML model visualization.',
    tags: ['Python', 'Power BI', 'Streamlit', 'Pandas'],
  },
  {
    id: 4,
    title: 'YouTube Sentiment Analyzer',
    description:
      'An ML project that fetches YouTube comments and predicts overall sentiment using NLP and Hugging Face models.',
    tags: ['Python', 'NLP', 'Hugging Face', 'Matplotlib'],
  },
  {
    id: 5,
    title: 'Excel to Insights Converter',
    description:
      'Automated tool that converts uploaded Excel sheets into interactive visual dashboards using Python, Pandas, and Matplotlib.',
    tags: ['Python', 'Excel', 'Pandas', 'Matplotlib'],
  },
];
