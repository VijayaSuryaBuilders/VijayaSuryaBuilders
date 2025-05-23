import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const companyDetails = [
    {
      label: "Name of Firm",
      value: "Vijayasurya Builders & Developers Pvt Ltd",
    },
    {
      label: "Year of Establishment",
      value: "2019 (Parent company since 1980)",
    },
    { label: "Concern Type", value: "Private Limited Company" },
    { label: "PAN", value: "ABCDE1234F" },
    { label: "GSTIN", value: "29ABCDE1234F1Z5" },
    { label: "E.P.F. No.", value: "KN/MNG/12345" },
  ];

  return (
    <section id="about" ref={ref} className="section py-20 bg-light">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="section-heading text-center">About Us</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="subheading">Introduction</h3>
              <p className="text-lg">
                We are a Civil Engineering Construction firm with over 40 years
                of expertise in building residential, commercial, and
                institutional structures. Our team has successfully completed
                numerous projects across Karnataka, earning a reputation for
                quality and reliability.
              </p>
              <p className="text-lg">
                Established in 2019, Vijayasurya Builders & Developers Pvt Ltd
                builds on the foundation laid since 1980. Our focus is on
                delivering excellence through integrity, quality materials, and
                skilled craftsmanship.
              </p>
              <div className="pt-4">
                <h3 className="subheading">Vision & Mission</h3>
                <p className="text-lg italic">
                  "To be recognized as a leader in the construction industry,
                  known for integrity, innovation, and exceptional quality while
                  building structures that stand the test of time."
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="brutalist-card">
              <h3 className="subheading mb-6">Company Details</h3>
              <div className="space-y-4">
                {companyDetails.map((detail, index) => (
                  <div
                    key={index}
                    className="flex flex-col border-b border-gray-200 pb-3"
                  >
                    <span className="text-sm font-medium text-gray-500">
                      {detail.label}
                    </span>
                    <span className="text-lg font-medium">{detail.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-16 p-8 bg-secondary text-primary  concrete-texture rounded-lg shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="subheading text-teal">Our Journey</h3>
                <p className="text-lg">
                  From our humble beginnings in 1980 to becoming a trusted name
                  in construction
                </p>
              </div>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="brutalist-button"
              >
                Work With Us
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
