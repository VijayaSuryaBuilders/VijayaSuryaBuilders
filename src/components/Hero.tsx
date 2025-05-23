import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="section relative min-h-screen flex items-center justify-center pt-16 concrete-bg"
    >
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 py-12 z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bebas tracking-wider mb-4 uppercase">
                Vijayasurya Builders
              </h1>
              <h2 className="text-2xl md:text-3xl font-bebas tracking-wider mb-6 uppercase">
                & Developers Pvt Ltd
              </h2>
              <p className="text-lg md:text-xl mb-8 max-w-2xl">
                Building with Integrity, Delivering Excellence since 1980
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#about"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="brutalist-button"
                >
                  Learn More
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="brutalist-button"
                >
                  Contact Us
                </motion.a>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="md:col-span-5 lg:col-span-4 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="brutalist-card w-full aspect-square flex items-center justify-center">
              <div className="text-center justify-items-center">
                <Award className="w-20 h-20 mx-auto mb-3 justify-items-center text-amber-500" />
                <p className="text-2xl font-bold text-amber-500 mb-4">
                  Licensed with KPWD as
                </p>
                <p className="text-6xl md:text-5xl font-bebas text-amber-500 tracking-wider">
                  CLASS-III
                </p>
                <p className="text-4xl md:text-3xl font-bebas tracking-wider text-amber-500 mt-2">
                  CONTRACTOR
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
