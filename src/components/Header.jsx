/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Code,
  Server,
  Mail,
  User,
  GraduationCap,
  ChevronDown,
  Home,
} from "lucide-react";
import { Link, useLocation } from "react-router";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHover, setActiveHover] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "Home",
      path: "/",
      icon: <Home size={18} className="mr-2" />,
      desc: "Back to homepage",
    },
    {
      name: "About",
      path: "/about",
      icon: <User size={18} className="mr-2" />,
      desc: "Learn more about me",
      submenu: [
        { name: "Skills", path: "/about#skills" },
        { name: "Experience", path: "/about#experience" },
        { name: "Testimonials", path: "/about#testimonials" },
      ],
    },
    {
      name: "Education",
      path: "/education",
      icon: <GraduationCap size={18} className="mr-2" />,
      desc: "View my academic background",
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <Code size={18} className="mr-2" />,
      desc: "See my featured work",
      submenu: [
        { name: "Web Apps", path: "/projects#web" },
        { name: "Mobile Apps", path: "/projects#mobile" },
        { name: "Open Source", path: "/projects#opensource" },
      ],
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <Mail size={18} className="mr-2" />,
      desc: "Get in touch with me",
    },
  ];

  const toggleSubmenu = (name) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gray-900/98 backdrop-blur-xl shadow-lg py-2 border-b border-gray-800"
          : "bg-gray-900/90 backdrop-blur-lg py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with animated tech badges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="flex items-center"
          >
            <Link to="/" className="group" aria-label="Home">
              <motion.div
                className="flex flex-col"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center">
                  <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Suraj Chavan
                  </span>
                  <motion.span
                    className="ml-3 px-2.5 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.9, 1, 0.9],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    Full Stack
                  </motion.span>
                </div>
                <motion.span
                  className="text-sm md:text-base text-gray-400 mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Crafting exceptional digital experiences
                </motion.span>
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                onHoverStart={() => setActiveHover(link.name)}
                onHoverEnd={() => {
                  setActiveHover(null);
                  if (!link.submenu) setActiveSubmenu(null);
                }}
                className="relative"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center">
                  <Link
                    to={link.path}
                    className={`flex items-center px-4 py-2.5 rounded-lg transition-all ${
                      location.pathname === link.path ||
                      (link.submenu &&
                        link.submenu.some(
                          (item) => location.pathname === item.path
                        ))
                        ? "bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-white"
                        : activeHover === link.name
                        ? "bg-gray-800/80 text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                    aria-current={
                      location.pathname === link.path ? "page" : undefined
                    }
                  >
                    <span className="mr-2">{link.icon}</span>
                    <span className="font-medium">{link.name}</span>
                    {link.submenu && (
                      <ChevronDown
                        size={16}
                        className={`ml-1 transition-transform duration-200 ${
                          activeSubmenu === link.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>
                </div>

                {/* Description Tooltip */}
                <AnimatePresence>
                  {activeHover === link.name && !link.submenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 p-3 bg-gray-800 rounded-lg shadow-2xl border border-gray-700 z-50"
                    >
                      <p className="text-sm text-gray-300">{link.desc}</p>
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-800 transform rotate-45 border-t border-l border-gray-700" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submenu Dropdown */}
                {link.submenu && (
                  <AnimatePresence>
                    {(activeHover === link.name ||
                      activeSubmenu === link.name) && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-2xl border border-gray-700 z-50 overflow-hidden"
                        onMouseEnter={() => setActiveSubmenu(link.name)}
                        onMouseLeave={() => setActiveSubmenu(null)}
                      >
                        <div className="py-1">
                          {link.submenu.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className={`block px-4 py-2.5 text-sm transition-colors ${
                                location.pathname === item.path
                                  ? "bg-blue-500/10 text-blue-400 font-medium"
                                  : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                              }`}
                              onClick={() => setActiveSubmenu(null)}
                              aria-current={
                                location.pathname === item.path
                                  ? "page"
                                  : undefined
                              }
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white focus:outline-none relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <>
                <Menu size={24} />
                {!isScrolled && (
                  <motion.span
                    className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-blue-500"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </>
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-gray-900/98 backdrop-blur-xl border-t border-gray-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: 0.1 + index * 0.05,
                      type: "spring",
                      stiffness: 100,
                    },
                  }}
                  exit={{ opacity: 0, x: -20 }}
                  className="relative"
                >
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <Link
                        to={link.path}
                        className={`flex-1 flex items-center px-4 py-3 rounded-lg ${
                          location.pathname === link.path
                            ? "bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-white"
                            : "text-gray-300 hover:bg-gray-800/50"
                        } transition-all`}
                        onClick={() =>
                          !link.submenu && setMobileMenuOpen(false)
                        }
                        aria-current={
                          location.pathname === link.path ? "page" : undefined
                        }
                      >
                        <span className="mr-3">{link.icon}</span>
                        <span className="font-medium">{link.name}</span>
                      </Link>
                      {link.submenu && (
                        <button
                          onClick={() => toggleSubmenu(link.name)}
                          className="p-2 rounded-md text-gray-400 hover:text-white"
                          aria-label={`Toggle ${link.name} submenu`}
                        >
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-200 ${
                              activeSubmenu === link.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Mobile Submenu */}
                    {link.submenu && (
                      <AnimatePresence>
                        {activeSubmenu === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-12 mt-1 space-y-1 overflow-hidden"
                          >
                            {link.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.path}
                                className={`block px-3 py-2.5 text-sm rounded-lg ${
                                  location.pathname === subItem.path
                                    ? "bg-blue-500/10 text-blue-400 font-medium"
                                    : "text-gray-400 hover:bg-gray-800/30 hover:text-white"
                                } transition-colors`}
                                onClick={() => setMobileMenuOpen(false)}
                                aria-current={
                                  location.pathname === subItem.path
                                    ? "page"
                                    : undefined
                                }
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Footer */}
            <motion.div
              className="px-4 py-3 border-t border-gray-800 bg-gray-900/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-xs text-gray-500 text-center">
                © {new Date().getFullYear()} Suraj Chavan. All rights reserved.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
