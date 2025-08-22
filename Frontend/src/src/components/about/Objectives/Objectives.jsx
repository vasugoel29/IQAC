import React from 'react';
import { motion } from 'framer-motion'; // Make sure to install framer-motion

const Objectives = () => {
  return (
    <div className="min-h-screen  py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        {/* Vision Section */}
        <div className="mb-16">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 text-center mb-8"
          >
            Our Vision
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl transform -rotate-1"></div>
            <div className="relative bg-white/90 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-xl">
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-center">
                "The IQAC strives to lead our institution towards a dynamic realm of academic brilliance, 
                research innovation, and societal impact. We are committed to fostering a culture of 
                continuous improvement, where quality benchmarks guide our endeavors, and innovation 
                propels our progress. Through collaborative engagement and visionary leadership, we aim 
                to position our institution as a global frontrunner in education, research, and holistic 
                development, making a meaningful contribution to the betterment of individuals and society."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Objectives Section */}
        <div>
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 text-center mb-12"
          >
            Our Objectives
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * (index + 4) }}
                className="group"
              >
                <div className="relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 group-hover:from-blue-500/10 group-hover:to-indigo-500/10 transition-all duration-300"></div>
                  <div className="relative p-8">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg">
                          {index + 1}
                        </div>
                      </div>
                      <p className="text-xl text-gray-700 font-medium group-hover:text-indigo-600 transition-colors duration-300">
                        {objective}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const objectives = [
  "Promote a culture of quality assurance",
  "Develop strategies for sustainable growth",
  "Enhance educational standards",
  "Facilitate self-assessment and institutional assessment"
];

export default Objectives;