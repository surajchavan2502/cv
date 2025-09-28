/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Heart,
  Code,
  Coffee,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      url: "https://github.com/surajchavan2502",
      name: "GitHub",
      color: "hover:text-purple-400",
      hoverBg: "hover:bg-purple-900/20",
    },
    {
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/suraj-chavan-68026618b/",
      name: "LinkedIn",
      color: "hover:text-blue-400",
      hoverBg: "hover:bg-blue-900/20",
    },
    {
      icon: <Twitter size={20} />,
      url: "https://twitter.com/_suraj25_",
      name: "Twitter",
      color: "hover:text-sky-400",
      hoverBg: "hover:bg-sky-900/20",
    },
    {
      icon: <Mail size={20} />,
      url: "mailto:chavansura950@gmail.com",
      name: "Email",
      color: "hover:text-red-400",
      hoverBg: "hover:bg-red-900/20",
    },
  ];

  return (
    <footer className="bg-gray-900/95 backdrop-blur-lg border-t border-gray-800/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-900/10 blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-purple-900/10 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Social Links with Enhanced Animation */}
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.1 },
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                y: -5,
                scale: 1.1,
                backgroundColor: "rgba(255, 255, 255, 0.05)",
              }}
              whileTap={{ scale: 0.95 }}
              className={`relative p-4 rounded-xl bg-gray-800/30 border border-gray-700/50 text-gray-400 ${social.color} ${social.hoverBg} transition-all duration-300 group shadow-lg hover:shadow-xl`}
              aria-label={social.name}
            >
              <div className="relative z-10">
                {social.icon}
                <motion.span
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 text-gray-300 whitespace-nowrap"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {social.name}
                </motion.span>
              </div>
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </motion.a>
          ))}
        </div>

        {/* Footer Content */}
        <div className="max-w-3xl mx-auto">
          {/* Animated Divider */}
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-10"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          />

          {/* Copyright with Heart Animation */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-3">
              <motion.p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Suraj Chavan
              </motion.p>
              <motion.span
                className="mx-2"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 4,
                }}
              >
                <Heart size={16} className="text-red-500 fill-red-500/20" />
              </motion.span>
              <motion.p className="text-sm text-gray-400">
                All rights reserved
              </motion.p>
            </div>

            {/* Tech Stack */}
            <motion.div
              className="flex items-center justify-center space-x-3 text-sm text-gray-500 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span className="flex items-center bg-gray-800/50 px-3 py-1.5 rounded-full border border-gray-700/50">
                <Code size={16} className="mr-2 text-blue-400" />
                <span>React</span>
              </span>
              <span className="flex items-center bg-gray-800/50 px-3 py-1.5 rounded-full border border-gray-700/50">
                <Code size={16} className="mr-2 text-teal-400" />
                <span>Tailwind CSS</span>
              </span>
              <span className="flex items-center bg-gray-800/50 px-3 py-1.5 rounded-full border border-gray-700/50">
                <Code size={16} className="mr-2 text-purple-400" />
                <span>Framer Motion</span>
              </span>
            </motion.div>

            {/* Inspired Text */}
            <motion.div
              className="flex items-center justify-center text-xs text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Coffee size={14} className="mr-1.5 text-amber-500" />
              Crafted with passion and attention to detail
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
