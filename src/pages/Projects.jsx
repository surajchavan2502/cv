/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Code,
  Server,
  Database,
  LayoutTemplate,
  ArrowRight,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Library Management",
      description:
        "A full-stack MERN application for managing library books with user authentication and admin dashboard.",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      githubUrl: "https://github.com/surajchavan2502/mern-backend-library",
      demoUrl: "#",
      icon: <LayoutTemplate className="text-blue-500" size={24} />,
      accentColor: "blue",
    },
    {
      title: "E-Pharmacy",
      description:
        "Online pharmacy platform with medicine inventory, cart functionality, and payment integration.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/surajchavan2502/e-pharmacy",
      demoUrl: "#",
      icon: <Server className="text-green-500" size={24} />,
      accentColor: "green",
    },
    {
      title: "Job Portal",
      description:
        "Job search platform with employer/employee profiles, job postings, and application tracking.",
      tags: ["MERN Stack", "JWT Auth", "Redux", "Tailwind CSS"],
      githubUrl:
        "https://github.com/surajchavan2502/job-portal-mern/tree/backend",
      demoUrl: "#",
      icon: <Database className="text-purple-500" size={24} />,
      accentColor: "purple",
    },
  ];

  const colorVariants = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-100",
      hover: "hover:bg-blue-100",
    },
    green: {
      bg: "bg-green-50",
      text: "text-green-600",
      border: "border-green-100",
      hover: "hover:bg-green-100",
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      border: "border-purple-100",
      hover: "hover:bg-purple-100",
    },
  };

  return (
    <section
      className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full mb-4 shadow-sm"
          >
            MY WORK
          </motion.span>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Here are some of my recent projects built with modern technologies
            to solve real-world problems.
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "96px" }}
            transition={{ delay: 0.5 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const colors = colorVariants[project.accentColor];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className={`group relative overflow-hidden rounded-2xl shadow-lg border ${colors.border} hover:shadow-xl transition-all duration-300`}
              >
                <div
                  className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                <div className="relative z-10 h-full flex flex-col">
                  <div className="p-6 flex-grow">
                    <div className="flex items-center mb-6">
                      <div
                        className={`p-3 rounded-xl ${colors.bg} ${colors.text} shadow-sm mr-4`}
                      >
                        {project.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          whileHover={{ scale: 1.05 }}
                          className={`px-3 py-1 text-xs font-medium ${colors.bg} ${colors.text} rounded-full shadow-sm`}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className={`px-6 pb-6 mt-auto`}>
                    <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                      <div className="flex space-x-4">
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ x: 3 }}
                          className={`flex items-center text-sm font-medium ${colors.text} hover:underline`}
                        >
                          <Github className="mr-2" size={16} />
                          Code
                        </motion.a>
                        {project.demoUrl && (
                          <motion.a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 3 }}
                            className={`flex items-center text-sm font-medium ${colors.text} hover:underline`}
                          >
                            <ExternalLink className="mr-2" size={16} />
                            Demo
                          </motion.a>
                        )}
                      </div>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className={`p-2 rounded-full ${colors.bg} ${colors.text} ${colors.hover} transition-colors`}
                      >
                        <ArrowRight size={16} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/surajchavan2502"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 border border-gray-200 rounded-full text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 shadow-sm hover:shadow-md transition-all"
          >
            <Github className="mr-2" size={16} />
            View All Projects on GitHub
            <ArrowRight className="ml-2" size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
