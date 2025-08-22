import React from 'react';
import { motion } from 'framer-motion';

const Functions = () => {
  return (
    <div className="min-h-screen  py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">
            IQAC Functions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The IQAC is anticipated to carry out several functions to ensure excellence 
            in all aspects of the institution.
          </p>
        </motion.div>

        {/* Functions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {functions.map((func, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * (index + 1) }}
              className="group"
            >
              <div className="h-full relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 group-hover:from-blue-500/10 group-hover:to-indigo-500/10 rounded-2xl transition-all duration-300"></div>
                <div className="relative p-6 md:p-8 flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700 text-lg leading-relaxed group-hover:text-blue-700 transition-colors duration-300">
                      {func}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="mt-16"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-10">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-xl"></div>
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
                  Quality Assurance Commitment
                </h2>
                <p className="text-lg text-gray-600">
                  Through these comprehensive functions, IQAC ensures the maintenance and enhancement 
                  of quality across all institutional processes, fostering continuous improvement 
                  and excellence in higher education.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const functions = [
  "Creating and implementing standards or criteria for evaluating the quality of academic and administrative functions within the institution.",
  "Cultivating an environment centered on learners, promoting quality education, and supporting faculty growth to embrace necessary knowledge and technology for interactive teaching and learning processes.",
  "Establishing mechanisms to gather feedback from students, parents, and other stakeholders on quality-related institutional processes.",
  "Sharing information about diverse quality measures in higher education.",
  "Arranging workshops and seminars within the institution and with other institutions to discuss quality-related topics and fostering quality circles.",
  "Documenting various programs and activities aimed at enhancing quality.",
  "Serving as a central unit within the institution to coordinate activities related to quality, including adopting and disseminating best practices.",
  "Developing and managing an institutional database through Management Information Systems (MIS) to uphold and enhance institutional quality.",
  "Instilling a culture of quality throughout the institution.",
  "Preparing the Annual Quality Assurance Report (AQAR) in accordance with NAAC guidelines and parameters, to be submitted to NAAC."
];

export default Functions;