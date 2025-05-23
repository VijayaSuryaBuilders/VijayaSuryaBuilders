import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Project {
  id: number;
  name: string;
  type: "residential" | "commercial" | "infrastructure";
  status: "completed" | "ongoing";
  location: string;
  year: string;
  area: string;
  value: string;
  image: string;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState<"all" | "completed" | "ongoing">("all");
  const [typeFilter, setTypeFilter] = useState<
    "all" | "residential" | "commercial" | "infrastructure"
  >("all");

  const projects: Project[] = [
    {
      id: 1,
      name: "Coastal Heights",
      type: "residential",
      status: "completed",
      location: "Mangalore",
      year: "2022",
      area: "25,000 SFT",
      value: "₹4.5 Cr",
      image:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "Riverside Plaza",
      type: "commercial",
      status: "completed",
      location: "Udupi",
      year: "2021",
      area: "35,000 SFT",
      value: "₹7.2 Cr",
      image:
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 3,
      name: "Green Valley Residences",
      type: "residential",
      status: "ongoing",
      location: "Manipal",
      year: "Est. 2024",
      area: "42,000 SFT",
      value: "₹8.5 Cr",
      image:
        "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 4,
      name: "Highway Junction",
      type: "infrastructure",
      status: "completed",
      location: "Karkala",
      year: "2020",
      area: "15,000 SFT",
      value: "₹3.2 Cr",
      image:
        "https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 5,
      name: "Ocean View Apartments",
      type: "residential",
      status: "ongoing",
      location: "Surathkal",
      year: "Est. 2023",
      area: "30,000 SFT",
      value: "₹6.7 Cr",
      image:
        "https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 6,
      name: "Tech Hub Office Complex",
      type: "commercial",
      status: "ongoing",
      location: "Mangalore",
      year: "Est. 2024",
      area: "50,000 SFT",
      value: "₹12.5 Cr",
      image:
        "https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter !== "all" && project.status !== filter) return false;
    if (typeFilter !== "all" && project.type !== typeFilter) return false;
    return true;
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

  return (
    <section id="projects" ref={ref} className="section py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <h2 className="section-heading">Our Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto">
              We have successfully completed over 20+ projects, showcasing our
              expertise and commitment to quality.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <button
                onClick={() => setFilter("all")}
                className={`py-2 px-4 text-sm md:text-base transition-all 
                ${filter === "all" ? "bg-primary text-white" : "bg-gray-100 text-primary hover:bg-gray-200"}`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter("completed")}
                className={`py-2 px-4 text-sm md:text-base transition-all 
                ${filter === "completed" ? "bg-primary text-white" : "bg-gray-100 text-primary hover:bg-gray-200"}`}
              >
                Completed
              </button>
              <button
                onClick={() => setFilter("ongoing")}
                className={`py-2 px-4 text-sm md:text-base transition-all 
                ${filter === "ongoing" ? "bg-primary text-white" : "bg-gray-100 text-primary hover:bg-gray-200"}`}
              >
                Ongoing
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setTypeFilter("all")}
                className={`py-2 px-4 text-sm md:text-base transition-all 
                ${typeFilter === "all" ? "bg-primary text-white" : "bg-gray-100 text-primary hover:bg-gray-200"}`}
              >
                All Types
              </button>
              <button
                onClick={() => setTypeFilter("residential")}
                className={`py-2 px-4 text-sm md:text-base transition-all 
                ${typeFilter === "residential" ? "bg-primary text-white" : "bg-gray-100 text-primary hover:bg-gray-200"}`}
              >
                Residential
              </button>
              <button
                onClick={() => setTypeFilter("commercial")}
                className={`py-2 px-4 text-sm md:text-base transition-all 
                ${typeFilter === "commercial" ? "bg-primary text-white" : "bg-gray-100 text-primary hover:bg-gray-200"}`}
              >
                Commercial
              </button>
              <button
                onClick={() => setTypeFilter("infrastructure")}
                className={`py-2 px-4 text-sm md:text-base transition-all 
                ${typeFilter === "infrastructure" ? "bg-primary text-white" : "bg-gray-100 text-primary hover:bg-gray-200"}`}
              >
                Infrastructure
              </button>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="project-card border-2 border-primary overflow-hidden"
              >
                <div className="aspect-video bg-gray-200 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover  transition-all duration-500"
                  />
                </div>
                <div className="p-4 bg-white">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bebas text-xl tracking-wider">
                      {project.name}
                    </h3>
                    <span
                      className={`text-xs px-2 py-1 font-semibold ${project.status === "completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
                    >
                      {project.status === "completed" ? "Completed" : "Ongoing"}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    <div>
                      <span className="text-gray-500">Type:</span>
                      <p className="font-medium capitalize">{project.type}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Location:</span>
                      <p className="font-medium">{project.location}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Area:</span>
                      <p className="font-medium">{project.area}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">
                        {project.status === "completed"
                          ? "Completed:"
                          : "Expected:"}
                      </span>
                      <p className="font-medium">{project.year}</p>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <span className="text-gray-500 text-sm">
                      Project Value:
                    </span>
                    <p className="font-bebas text-xl tracking-wide">
                      {project.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div variants={itemVariants} className="text-center py-12">
              <p className="text-lg">
                No projects match your current filters. Please try a different
                selection.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
