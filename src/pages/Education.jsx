/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, ChevronRight } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      program: "Master of Computer Applications (M.C.A.)",
      university: "Sanjay Ghodawat University, Kolhapur",
      score: "8.10 CGPA",
      year: "2025",
      achievements: [
        "Specialization in Full Stack Development",
        "Academic Excellence ",
        "Lead organizer of Tech Fest 2024",
      ],
      backgroundImage:
        "https://www.sguk.ac.in/assets/images/banner-image/new-banner-image1.png",
      universityLogo: "https://www.sguk.ac.in/assets/images/logo.png",
    },
    {
      program: "Bachelor of Science (B.Sc.) (Mathematics)",
      university: "Shivaji University, Kolhapur",
      score: "8.34 CGPA",
      year: "2022",
      achievements: [
        "Minor in Computer Applications",
        "Lead organizer of Tech Fest 2020",
        "Mathematics Olympiad Participant",
      ],
      backgroundImage: "https://willingdoncollege.ac.in/Images/clgimg.jpg",
      universityLogo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Shivaji_University_logo.png/220px-Shivaji_University_logo.png",
    },
  ];

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-10 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full mb-4 shadow-sm"
          >
            ACADEMIC BACKGROUND
          </motion.span>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold  mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Education & Qualifications
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "96px" }}
            transition={{ delay: 0.4 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-300 to-purple-300 top-0 z-0"></div>

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-12 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 z-10 items-center justify-center shadow-lg">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 relative z-20"
                >
                  {/* University logo */}
                  {item.universityLogo && (
                    <div className="absolute top-6 right-6 w-16 h-16 bg-white p-2 rounded-full shadow-md border border-gray-100 overflow-hidden">
                      <img
                        src={item.universityLogo}
                        alt={`${item.university} logo`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    </div>
                  )}

                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Left side */}
                      <div className="lg:w-1/2">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 shadow-inner">
                            <GraduationCap size={28} />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">
                              {item.program}
                            </h3>
                            <p className="text-lg text-gray-600 font-medium">
                              {item.university}
                            </p>

                            {/* Mobile-only year and score */}
                            <div className="lg:hidden flex justify-between mt-4 pt-4 border-t border-gray-100">
                              <div>
                                <span className="text-sm font-medium text-gray-500">
                                  CGPA
                                </span>
                                <p className="text-xl font-bold text-gray-900">
                                  {item.score}
                                </p>
                              </div>
                              <div className="text-right">
                                <span className="text-sm font-medium text-gray-500">
                                  Year Completed
                                </span>
                                <p className="text-lg font-semibold text-gray-900">
                                  {item.year}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right side */}
                      <div className="lg:w-1/2 lg:border-l lg:border-gray-100 lg:pl-8">
                        {/* Desktop year and score */}
                        <div className="hidden lg:flex justify-between items-center mb-6">
                          <div className="flex items-center gap-4">
                            <div className="p-3 rounded-lg bg-gray-50">
                              <span className="text-sm font-medium text-gray-500">
                                CGPA
                              </span>
                              <p className="text-2xl font-bold text-gray-900">
                                {item.score}
                              </p>
                            </div>
                            <div className="p-3 rounded-lg bg-gray-50">
                              <span className="text-sm font-medium text-gray-500">
                                Year
                              </span>
                              <p className="text-xl font-semibold text-gray-900">
                                {item.year}
                              </p>
                            </div>
                          </div>
                        </div>

                        {item.achievements && item.achievements.length > 0 && (
                          <div className="mt-6">
                            <h4 className="flex items-center text-sm font-semibold text-gray-500 mb-4">
                              <Award className="mr-2 h-5 w-5 text-yellow-500" />
                              KEY ACHIEVEMENTS
                            </h4>
                            <ul className="space-y-3">
                              {item.achievements.map((achievement, i) => (
                                <motion.li
                                  key={i}
                                  className="flex items-start group"
                                  whileHover={{ x: 5 }}
                                >
                                  <span className="flex-shrink-0 mt-1 mr-3">
                                    <ChevronRight className="h-4 w-4 text-blue-400 group-hover:text-blue-600 transition-colors" />
                                  </span>
                                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                                    {achievement}
                                  </span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
