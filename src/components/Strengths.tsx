import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";

const Strengths: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView && chartRef.current) {
      const bars = chartRef.current.querySelectorAll(".bar");

      gsap.fromTo(
        bars,
        { width: 0 },
        {
          width: "var(--target-width)",
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.2,
        },
      );
    }
  }, [inView]);

  const turnoverData = [
    { year: "2019-20", amount: 2.5 },
    { year: "2020-21", amount: 3.8 },
    { year: "2021-22", amount: 5.2 },
    { year: "2022-23", amount: 7.5 },
  ];

  const maxTurnover = Math.max(...turnoverData.map((d) => d.amount));

  const machinery = [
    "Excavators (2 units)",
    "Concrete Mixers (4 units)",
    "Cranes (2 units)",
    "Bulldozers (1 unit)",
    "Dump Trucks (3 units)",
    "Loaders (2 units)",
    "Compactors (3 units)",
    "Concrete Pumps (2 units)",
  ];

  const management = [
    {
      name: "Mr. Nitin Suvarna",
      role: "Managing Director",
      experience: "20+ years",
    },
    { name: "Mrs. Shobhalatha", role: "Director", experience: "10+ years" },
    {
      name: "Mr. Sachin Shenoy",
      role: "Legal Advisor",
      experience: "10+ years",
    },
    {
      name: "Mr. Ashwath  ",
      role: "Engineer",
      experience: "10+ years",
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
    <section
      id="strengths"
      ref={ref}
      className="section py-20 concrete-texture "
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <h2 className="section-heading">Why Choose Us</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <motion.div
              variants={itemVariants}
              className="md:col-span-6 brutalist-card"
            >
              <h3 className="subheading">Financial Growth</h3>
              <div ref={chartRef} className="mt-8 space-y-6">
                {turnoverData.map((data, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{data.year}</span>
                      <span className="font-bebas">₹{data.amount} Cr</span>
                    </div>
                    <div className="h-6 bg-gray-200 w-full relative">
                      <div
                        className="bar h-full bg-teal absolute top-0 left-0"
                        style={
                          {
                            "--target-width": `${(data.amount / maxTurnover) * 100}%`,
                          } as React.CSSProperties
                        }
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="md:col-span-6 space-y-8">
              <motion.div variants={itemVariants} className="brutalist-card">
                <h3 className="subheading">Plant & Machinery</h3>
                <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                  {machinery.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="inline-block w-2 h-2 bg-primary mr-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={itemVariants} className="brutalist-card">
                <h3 className="subheading">Certifications</h3>
                <div className="mt-4 p-4 border-2 border-primary text-center">
                  <p className="text-2xl font-bebas text-amber-500 tracking-wider">
                    PWD CLASS III LICENSE
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div variants={itemVariants} className="mt-12">
            <h3 className="subheading text-center mb-8">Our Management Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {management.map((person, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white border-2 border-primary text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-2xl font-bebas">
                      {person.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="text-xl font-bebas mb-2">{person.name}</h4>
                  <p className="text-gray-600 mb-1">{person.role}</p>
                  <p className="font-medium text-teal">{person.experience}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Strengths;
