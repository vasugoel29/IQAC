import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Introduction = () => {
  return (
    <div className="min-h-screen  py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">
            Internal Quality Assurance Cell
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Committed to Excellence in Higher Education
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 relative overflow-hidden"
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-br-full"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-l from-blue-500/10 to-indigo-500/10 rounded-tl-full"></div>

            {/* Quote Icon */}
            <FaQuoteLeft className="text-4xl text-blue-500/20 absolute top-4 left-4" />
            <FaQuoteRight className="text-4xl text-indigo-500/20 absolute bottom-4 right-4" />


            {/* Content */}
            <div className="relative z-10">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-700 leading-relaxed mb-6 text-lg"
              >
                The UGC has established the National Assessment and Accreditation Council (NAAC) as an independent entity under section 12(ccc) of its Act in September 1994, with the purpose of overseeing the standards of Higher Educational Institutions. In a bid to enhance the quality of these institutions, NAAC has formulated guidelines for the establishment of internal Quality Assurance Cells (IQACs) within Higher Educational Institutions, serving as a post-accreditation measure for sustaining quality. Following NAAC's directives, the NSUT-IQAC came into existence in 2015.
              </motion.p>


              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="relative"
              >
                <div className="absolute left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                <p className="text-gray-700 leading-relaxed pl-6 text-lg">
                  Given that the pursuit of quality enhancement is a continuous endeavour, the IQAC will seamlessly integrate itself into the institution's fabric and diligently work towards fulfilling the goals of elevating and upholding quality standards. The core responsibility of the IQAC entails constructing a mechanism that facilitates purposeful, consistent, and transformative improvements in the overall performance of the institution.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Key Points Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
          >
            {keyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + (index * 0.2) }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white mb-4">
                  {point.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Key points data
const keyPoints = [
  {
    icon: "🎯",
    title: "Quality Assurance",
    description: "Ensuring consistent quality standards across all academic and administrative processes."
  },
  {
    icon: "🔄",
    title: "Continuous Improvement",
    description: "Facilitating ongoing enhancement of institutional performance and educational standards."
  },
  {
    icon: "🌟",
    title: "Excellence",
    description: "Striving for excellence in every aspect of higher education delivery and management."
  }
];

export default Introduction;