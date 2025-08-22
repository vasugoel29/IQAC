import React from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaArchive, FaUpload, FaClock, FaCalendarAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Minutes = () => {
  // Animation variants remain the same
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  };

  // Data remains the same
  const recentMinutes = [
    { date: 'March 2023', path: '/reports/Minutes/Minutes_March2023.pdf' },
    { date: 'January 2023', path: '/reports/Minutes/Minutes_January2023.pdf' },
    { date: 'November 2022', path: '/reports/Minutes/Minutes_November2022.pdf' },
  ];

  const archivedYears = ['2021-2022', '2020-2021', '2019-2020'];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen  py-4 xs:py-6 sm:py-8 md:py-12 px-3 xs:px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section - More responsive text sizes */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-6 sm:mb-8 md:mb-12"
        >
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-3 sm:mb-4">
            Minutes of Meetings
          </h1>
          <p className="text-base xs:text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-4">
            Official minutes of meetings held by the Internal Quality Assurance Cell (IQAC)
          </p>
        </motion.div>

        {/* Main Content - Improved grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
          {/* Left Column */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8"
          >
            {/* Overview Card */}
            <motion.div 
              variants={cardHoverVariants}
              whileHover="hover"
              className="bg-white/80  rounded-xl sm:rounded-2xl shadow-lg p-4 xs:p-5 sm:p-6 md:p-8"
            >
              <p className="text-sm xs:text-base sm:text-lg text-gray-700 leading-relaxed">
                This section contains the official minutes of meetings held by the Internal Quality Assurance Cell (IQAC). These documents provide insights into the discussions, decisions, and action plans formulated to enhance the quality standards of our institution.
              </p>
            </motion.div>

            {/* Recent Meeting Minutes Card */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80  rounded-xl sm:rounded-2xl shadow-lg p-4 xs:p-5 sm:p-6 md:p-8"
            >
              <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 sm:mb-6">
                Recent Meetings
              </h2>
              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4">
                {recentMinutes.map((minute, index) => (
                  <motion.a
                    key={index}
                    href={minute.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={cardHoverVariants}
                    whileHover="hover"
                    className="group p-3 xs:p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg 
                      hover:from-blue-100 hover:to-indigo-100 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-2 xs:space-x-3">
                      <FaFileAlt className="text-blue-600 text-lg xs:text-xl group-hover:text-indigo-600" />
                      <div>
                        <span className="text-sm xs:text-base text-gray-800 font-semibold">Minutes</span>
                        <div className="flex items-center text-gray-600 text-xs xs:text-sm">
                          <FaCalendarAlt className="mr-1 xs:mr-2" />
                          {minute.date}
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={itemVariants}
            className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8"
          >
            {/* Archived Minutes Card */}
            <motion.div
              variants={cardHoverVariants}
              whileHover="hover"
              className="bg-white/80  rounded-xl sm:rounded-2xl shadow-lg p-4 xs:p-5 sm:p-6 md:p-8"
            >
              <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 sm:mb-6">
                Archived Minutes
              </h2>
              <p className="text-sm xs:text-base text-gray-600 mb-4">
                For archived minutes, please refer to our institutional repository or contact the IQAC office.
              </p>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 xs:gap-4">
                {archivedYears.map((year, index) => (
                  <motion.div
                    key={index}
                    variants={cardHoverVariants}
                    whileHover="hover"
                    className="p-3 xs:p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg"
                  >
                    <span className="text-sm xs:text-base text-gray-800 font-semibold">{year}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Submit New Minutes Card */}
            <motion.div
              variants={cardHoverVariants}
              whileHover="hover"
              className="bg-white/80  rounded-xl sm:rounded-2xl shadow-lg p-4 xs:p-5 sm:p-6 md:p-8"
            >
              <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 sm:mb-6">
                Submit New Minutes
              </h2>
              <p className="text-sm xs:text-base text-gray-600 mb-4">
                If you have conducted a meeting that needs to be documented, please submit the minutes through the following methods:
              </p>
              <div className="grid grid-cols-1 gap-3 xs:gap-4">
                <motion.a
                  href="mailto:minutes@iqac.example.com"
                  variants={cardHoverVariants}
                  whileHover="hover"
                  className="p-3 xs:p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg 
                    hover:from-blue-100 hover:to-indigo-100 transition-all duration-300
                    flex items-center space-x-2 xs:space-x-3"
                >
                  <FaEnvelope className="text-blue-600 text-sm xs:text-base" />
                  <span className="text-sm xs:text-base text-gray-800">minutes@iqac.example.com</span>
                </motion.a>
                <motion.div
                  variants={cardHoverVariants}
                  whileHover="hover"
                  className="p-3 xs:p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg
                    hover:from-blue-100 hover:to-indigo-100 transition-all duration-300
                    flex items-center space-x-2 xs:space-x-3"
                >
                  <FaPhoneAlt className="text-blue-600 text-sm xs:text-base" />
                  <span className="text-sm xs:text-base text-gray-800">+1 (234) 567-8903</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Minutes;