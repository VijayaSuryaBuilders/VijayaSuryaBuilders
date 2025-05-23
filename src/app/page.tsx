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
import { AnimatedTestimonials } from "@/components/blocks/animated-testimonials";
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
        <About />
        <Services />
        <Projects />
        <Strengths />

        <AnimatedTestimonials
          testimonials={[
            {
              id: 1,

              name: "Rahul Sharma",

              role: "Villa Owner, Kudroli",

              company: "Mangalore",

              content:
                "Vijayasurya Builders transformed my dream home into reality. Their attention to detail and commitment to quality is unmatched. I couldn't be happier with the results!",

              rating: 5,

              avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            },

            {
              id: 2,

              name: "Priya Nayak",

              role: "Commercial Project",

              company: "Mangalore",

              content:
                "Professional, reliable, and efficient! Vijayasurya Builders delivered our commercial project on time and within budget. Their team is knowledgeable and easy to work with.",

              rating: 4,

              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            },

            {
              id: 3,

              name: "Suresh Kamath",

              role: "Villa Client",

              company: "Kotekar",

              content:
                "The team at Vijayasurya Builders is exceptional. They guided us through every step of the construction process, ensuring our vision was realized. Highly recommend!",

              rating: 5,

              avatar: "https://randomuser.me/api/portraits/men/46.jpg",
            },
          ]}
          trustedCompanies={[]}
        />

        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}
export default App;
