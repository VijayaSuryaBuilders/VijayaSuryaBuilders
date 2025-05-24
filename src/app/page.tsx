/* eslint-disable */
// @ts-nocheck
"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Strengths from "@/components/Strengths";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedTestimonials from "@/components/blocks/animated-testimonials";
import ThreeHero from "@/components/ThreeHero";
function App() {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    // Initialize smooth scrolling
    const smoother = gsap.utils.toArray(".section");
    smoother.forEach((section: any) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top-=100",
        end: "bottom top-=100",
        toggleClass: { targets: section, className: "active" },
      });
    });
    // Clean up on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-x-hidden"
    >
      <Navbar />
      <main>
        <Hero />
        <ThreeHero/>
        <About />
        <Services />
        <Projects />
        <Strengths />

        <AnimatedTestimonials />

        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}
export default App;
