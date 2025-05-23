import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Service {
  category: string;
  items: string[];
  icon: string;
}

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState(0);

  const services: Service[] = [
    {
      category: "Earth Work",
      items: [
        "Site clearance and excavation",
        "Land development and grading",
        "Soil stabilization",
        "Erosion control",
        "Foundation preparation",
      ],
      icon: "https://images.pexels.com/photos/29506742/pexels-photo-29506742/free-photo-of-heavy-construction-equipment-in-quarry.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      category: "Civil Work",
      items: [
        "Building construction (residential, commercial, institutional)",
        "Structural engineering",
        "Interior and exterior finishing",
        "Plumbing and electrical systems installation",
        "Quality control and inspection",
      ],
      icon: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      category: "Infrastructure & Landscaping",
      items: [
        "Road construction and maintenance",
        "Drainage systems",
        "Retaining walls",
        "Landscape architecture",
        "Urban planning and development",
      ],
      icon: "https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

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

  return (
    <section id="services" ref={ref} className="section py-20 concrete-bg">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <h2 className="section-heading">Our Services</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto">
              We offer comprehensive construction solutions across various
              domains, ensuring quality and excellence at every step.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`py-2 px-4 md:py-3 md:px-6 font-bebas text-lg md:text-xl tracking-wider transition-all
                  ${
                    activeTab === index
                      ? "bg-primary text-white"
                      : "bg-white text-primary border-2 border-primary hover:bg-gray-100"
                  }`}
                >
                  {service.category}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          >
            <div className="order-2 md:order-1">
              <h3 className="subheading">{services[activeTab].category}</h3>
              <ul className="space-y-4">
                {services[activeTab].items.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="inline-block w-6 h-0.5 bg-primary mt-3 mr-3"></span>
                    <span className="text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8"
              >
                <a href="#contact" className="brutalist-button">
                  I want this
                </a>
              </motion.div>
            </div>
            <div className="order-1 md:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-80 md:h-96 overflow-hidden"
              >
                <img
                  src={services[activeTab].icon}
                  alt={services[activeTab].category}
                  className="w-full h-full object-cover  transition-all duration-500"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 p-6 border-2 border-primary text-center"
          >
            <p className="text-xl md:text-2xl font-bebas tracking-wider">
              Licensed with KPWD as Class-III Contractor
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
