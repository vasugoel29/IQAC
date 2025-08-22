import React from 'react';
import { motion } from 'framer-motion';

const Strategies = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
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
            IQAC Strategies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The IQAC will develop strategies and protocols to achieve the following objectives
          </p>
        </motion.div>

        {/* Strategies List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {strategies.map((strategy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * (index + 1) }}
              className="group"
            >
              <div className="h-full relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-indigo-500"></div>
                <div className="relative p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <p className="text-lg text-gray-700 leading-relaxed group-hover:text-indigo-600 transition-colors duration-300">
                        {strategy}
                      </p>
                    </div>
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
          transition={{ delay: 1.6 }}
          className="mt-16"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-10">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-xl"></div>
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
                  Our Commitment
                </h2>
                <p className="text-lg text-gray-600">
                  Through these strategic initiatives, we are committed to fostering academic excellence, 
                  promoting research innovation, and ensuring inclusive education while maintaining the 
                  highest standards of quality in all our endeavors.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const strategies = [
  "Facilitating prompt, effective, and forward-moving execution of academic, administrative, and financial responsibilities",
  "Upholding the significance and excellence of academic and research initiatives",
  "Ensuring fair availability and affordability of academic programs to diverse societal segments",
  "Incorporating and harmonizing contemporary techniques of teaching and learning",
  "Maintaining the integrity of evaluation methodologies",
  "Securing the sufficiency, upkeep, and effectiveness of support infrastructure and services",
  "Promoting research collaboration and global networking with institutions both within India and internationally"
];

export default Strategies;