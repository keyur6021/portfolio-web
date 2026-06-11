import React from "react";
import Navbar from "../portfolio/Navbar";
import Hero from "../portfolio/Hero";
import About from "../portfolio/About";
import Experience from "../portfolio/Experience";
import Projects from "../portfolio/Projects";
import Skills from "../portfolio/Skills";
import { Achievements, Process, Education } from "../portfolio/Extras";
import Testimonials from "../portfolio/Testimonials";
import Contact from "../portfolio/Contact";
import Footer from "../portfolio/Footer";
import BackToTop from "../portfolio/BackToTop";

const PortfolioPage = () => (
  <>
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
    >
      Skip to main content
    </a>
    <Navbar />
    <main id="main-content">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Process />
      <Testimonials />
      <Education />
      <Contact />
    </main>
    <Footer />
    <BackToTop />
  </>
);

export default PortfolioPage;
