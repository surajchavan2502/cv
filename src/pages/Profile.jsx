import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code,
  Server,
  Download,
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";
import profilePhoto from "../images/Photo.png";
import cvPdf from "../assets/CV.pdf";

const Profile = () => {
  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const initLenis = async () => {
      const Lenis = (await import("lenis")).default;
      const lenis = new Lenis({
        lerp: 0.1,
        smoothWheel: true,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    };

    initLenis();
  }, []);

  const techSkills = [
    {
      category: "Frontend Development",
      icon: <Code className="w-6 h-6 text-blue-500" />,
      color: "blue",
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript", level: 92 },
        { name: "Tailwind CSS", level: 88 },
        { name: "TypeScript", level: 85 },
      ],
    },
    {
      category: "Backend Development",
      icon: <Server className="w-6 h-6 text-indigo-500" />,
      color: "indigo",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "MongoDB", level: 83 },
        { name: "REST API", level: 90 },
        { name: "Express.js", level: 87 },
      ],
    },
  ];

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvPdf;
    link.download = "Suraj_Chavan_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Animation controls for sections
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white text-gray-900 overflow-hidden">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row items-center gap-12 mb-20"
      >
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img
            src={profilePhoto}
            alt="Suraj Chavan"
            className="w-56 h-56 rounded-full object-cover border-4 border-gray-200 shadow-lg"
          />
          <motion.div
            className="absolute -inset-2 rounded-full border-4 border-blue-500 opacity-0 hover:opacity-100 transition-opacity duration-300"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.div>

        <div className="flex-1">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Suraj Chavan
          </motion.h1>
          <motion.div
            className="flex items-center gap-2 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="h-2 w-2 rounded-full bg-green-500 animate-ping"></span>
            <span className="text-sm text-green-600 font-medium">
              Available for work
            </span>
          </motion.div>
          <motion.h2
            className="text-2xl font-semibold text-gray-600 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Full-Stack Developer
          </motion.h2>
          <motion.button
            onClick={handleDownloadCV}
            className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
            <Download className="w-5 h-5" />
            Download CV
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </motion.div>

      {/* About Me */}
      <motion.div
        className="mb-20 max-w-4xl mx-auto"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.p
          className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed"
          variants={itemVariants}
        >
          I specialize in building{" "}
          <span className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            scalable web applications
          </span>{" "}
          with modern technologies. With 7+ months of professional experience, I
          create solutions that are:
        </motion.p>
        <motion.ul className="space-y-4" variants={containerVariants}>
          {[
            "Secure with JWT authentication and RBAC",
            "Scalable with clean architecture patterns",
            "Responsive across all devices",
            "Maintainable through documented best practices",
          ].map((point, idx) => (
            <motion.li
              key={idx}
              className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100"
              variants={itemVariants}
              whileHover={{ x: 5 }}
            >
              <div className="flex-shrink-0">
                <Check className="text-blue-600 w-5 h-5 mt-1" />
              </div>
              <span className="text-gray-700">{point}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Skills */}
      <motion.div
        className="mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="relative inline-block">
            <span className="relative z-10">Technical Expertise</span>
            <span className="absolute bottom-1 left-0 w-full h-2 bg-blue-100 opacity-70 -z-0"></span>
          </span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techSkills.map((group, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`bg-${group.color}-100 p-3 rounded-lg shadow-inner`}
                >
                  {group.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {group.category}
                </h3>
              </div>
              <ul className="space-y-5">
                {group.skills.map((skill, i) => (
                  <li key={i}>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r from-${group.color}-500 to-${group.color}-400`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Final Call To Action */}
      <motion.div
        className="bg-white border border-gray-200 shadow-lg rounded-2xl p-8 md:p-10 text-center relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-100 rounded-full opacity-20"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-100 rounded-full opacity-20"></div>

        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Sparkles className="inline-block w-6 h-6 text-yellow-500 mr-2" />
          Let's Build Something Amazing Together
          <Sparkles className="inline-block w-6 h-6 text-yellow-500 ml-2" />
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-8 max-w-2xl mx-auto relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Whether you need a full project or expert consultation, I'm ready to
          help bring your ideas to life with cutting-edge solutions.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href="/contact"
            className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-500 hover:to-indigo-500 transition-all shadow-md hover:shadow-lg overflow-hidden"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
            Contact Me
          </motion.a>
          <motion.a
            href="/projects"
            className="group relative border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all overflow-hidden"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity"></span>
            View Projects
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Profile;
