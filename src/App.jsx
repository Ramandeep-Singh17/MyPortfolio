import React from "react";
import "./App.css";
import About from "./Components/about";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Work from "./Components/Work";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white bg-[#050414]">
      {/* Background Grid + Glow */}
      <div
        className="absolute inset-0 -z-10 
        bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),
        linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] 
        bg-[size:22px_22px] 
        before:content-[''] before:absolute before:inset-0 
        before:bg-[radial-gradient(circle_at_50%_0%,rgba(208,14,59,0.3),transparent_70%)]"
      ></div>

      <Navbar />

     <main className="relative z-10 pt-28">
  <section id="about"><About /></section>
  <section id="skills"><Skills /></section>
  <section id="education"><Education /></section>
  <section id="experience"><Experience /></section>
  <section id="projects"><Work /></section>
  <section id="contact"><Contact /></section>
</main>


      <Footer />
    </div>
  );
}

export default App;
