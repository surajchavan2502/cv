/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  Github,
  Twitter,
  Mail,
  Instagram,
  Send,
  Check,
  X,
  Phone,
  MapPin,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeField, setActiveField] = useState(null);

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/suraj-chavan-68026618b/",
      name: "LinkedIn",
      color: "hover:bg-blue-100/50",
      border: "border-blue-200",
      hoverColor: "hover:text-blue-600",
    },
    {
      icon: <Github size={20} />,
      url: "https://github.com/surajchavan2502",
      name: "GitHub",
      color: "hover:bg-gray-100/50",
      border: "border-gray-200",
      hoverColor: "hover:text-gray-800",
    },
    {
      icon: <Twitter size={20} />,
      url: "https://x.com/_suraj25_",
      name: "Twitter",
      color: "hover:bg-blue-50/50",
      border: "border-blue-100",
      hoverColor: "hover:text-blue-400",
    },
    {
      icon: <Instagram size={20} />,
      url: "https://www.instagram.com/surajchavan25/",
      name: "Instagram",
      color: "hover:bg-pink-50/50",
      border: "border-pink-100",
      hoverColor: "hover:text-pink-600",
    },
  ];

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        "service_wwwk94e",
        "template_s57hzcd",
        form.current,
        "hyYepsSlSaCiRZ2fg"
      );

      setSubmitStatus("success");
      form.current.reset();
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-0 to-gray-40 dark:from-gray-900 dark:to-gray-800"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full mb-4 dark:bg-blue-900/20 dark:text-blue-300"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            LET'S CONNECT
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 dark:text-white">
            Get In{" "}
            <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            Have a project in mind or want to collaborate? Drop me a message and
            I'll get back to you soon.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Contact Info */}
          <motion.div
            className="w-full lg:w-2/5 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50 dark:bg-gray-800/80 dark:border-gray-700"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2 dark:text-white">
              <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
              Contact Information
            </h3>

            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-4 hover:bg-gray-50/50 rounded-xl transition-all dark:hover:bg-gray-700/50"
              >
                <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1 dark:text-gray-400">
                    Email
                  </h4>
                  <a
                    href="mailto:chavansuraj950@gmail.com"
                    className="text-gray-900 hover:text-blue-600 transition-colors font-medium dark:text-white dark:hover:text-blue-400"
                  >
                    chavansuraj950@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-4 hover:bg-gray-50/50 rounded-xl transition-all dark:hover:bg-gray-700/50"
              >
                <div className="flex-shrink-0 bg-purple-50 p-3 rounded-lg text-purple-600 dark:bg-purple-900/20 dark:text-purple-400">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1 dark:text-gray-400">
                    Phone
                  </h4>
                  <a
                    href="tel:+919623407741"
                    className="text-gray-900 hover:text-purple-600 transition-colors font-medium dark:text-white dark:hover:text-purple-400"
                  >
                    +91 9623407741
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-4 hover:bg-gray-50/50 rounded-xl transition-all dark:hover:bg-gray-700/50"
              >
                <div className="flex-shrink-0 bg-green-50 p-3 rounded-lg text-green-600 dark:bg-green-900/20 dark:text-green-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1 dark:text-gray-400">
                    Location
                  </h4>
                  <p className="text-gray-900 font-medium dark:text-white">
                    Kolhapur, India
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2 dark:text-white">
                <span className="w-4 h-4 bg-purple-500 rounded-full"></span>
                Find Me On
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className={`flex items-center gap-2 p-3 rounded-lg border ${social.border} ${social.color} transition-all dark:border-gray-700 dark:hover:bg-gray-700/50`}
                    aria-label={social.name}
                  >
                    <span className={social.hoverColor}>{social.icon}</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="w-full lg:w-3/5 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50 dark:bg-gray-800/80 dark:border-gray-700"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2 dark:text-white">
              <span className="w-4 h-4 bg-green-500 rounded-full"></span>
              Send Me a Message
            </h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <motion.div whileHover={{ scale: 1.01 }} className="relative">
                    <input
                      type="text"
                      name="user_name"
                      id="name"
                      required
                      onFocus={() => setActiveField("name")}
                      onBlur={() => setActiveField(null)}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        activeField === "name"
                          ? "border-blue-500 ring-2 ring-blue-200 dark:ring-blue-900/30"
                          : "border-gray-300 dark:border-gray-600"
                      } focus:outline-none transition-all bg-white/80 dark:bg-gray-700/50 dark:text-white`}
                      placeholder="John Doe"
                    />
                    {activeField === "name" && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <motion.div whileHover={{ scale: 1.01 }} className="relative">
                    <input
                      type="email"
                      name="user_email"
                      id="email"
                      required
                      onFocus={() => setActiveField("email")}
                      onBlur={() => setActiveField(null)}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        activeField === "email"
                          ? "border-blue-500 ring-2 ring-blue-200 dark:ring-blue-900/30"
                          : "border-gray-300 dark:border-gray-600"
                      } focus:outline-none transition-all bg-white/80 dark:bg-gray-700/50 dark:text-white`}
                      placeholder="john@example.com"
                    />
                    {activeField === "email" && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.div>
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Subject <span className="text-red-500">*</span>
                </label>
                <motion.div whileHover={{ scale: 1.01 }} className="relative">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    onFocus={() => setActiveField("subject")}
                    onBlur={() => setActiveField(null)}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      activeField === "subject"
                        ? "border-blue-500 ring-2 ring-blue-200 dark:ring-blue-900/30"
                        : "border-gray-300 dark:border-gray-600"
                    } focus:outline-none transition-all bg-white/80 dark:bg-gray-700/50 dark:text-white`}
                    placeholder="Project Inquiry"
                  />
                  {activeField === "subject" && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Your Message <span className="text-red-500">*</span>
                </label>
                <motion.div whileHover={{ scale: 1.01 }} className="relative">
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    required
                    onFocus={() => setActiveField("message")}
                    onBlur={() => setActiveField(null)}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      activeField === "message"
                        ? "border-blue-500 ring-2 ring-blue-200 dark:ring-blue-900/30"
                        : "border-gray-300 dark:border-gray-600"
                    } focus:outline-none transition-all bg-white/80 dark:bg-gray-700/50 dark:text-white`}
                    placeholder="Hello Suraj, I'd like to discuss..."
                  ></textarea>
                  {activeField === "message" && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              </div>

              <div className="pt-2">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 px-6 rounded-xl font-medium flex items-center justify-center gap-2 transition-all relative overflow-hidden ${
                    isSubmitting
                      ? "bg-gray-300 cursor-not-allowed dark:bg-gray-600"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg text-white"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
                </motion.button>
              </div>

              {/* Submission Status */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-4 rounded-xl flex items-center gap-3 ${
                    submitStatus === "success"
                      ? "bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-200"
                      : "bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-200"
                  }`}
                >
                  {submitStatus === "success" ? (
                    <Check
                      className="text-green-500 dark:text-green-400"
                      size={20}
                    />
                  ) : (
                    <X className="text-red-500 dark:text-red-400" size={20} />
                  )}
                  <span className="font-medium">
                    {submitStatus === "success"
                      ? "Message sent successfully! I'll get back to you soon."
                      : "Failed to send message. Please try again or email me directly."}
                  </span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
