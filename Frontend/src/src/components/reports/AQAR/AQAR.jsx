import React from 'react';
import { motion } from 'framer-motion';
import {
  FaDownload,
  FaFileAlt,
  FaClipboardList,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBuilding,
  FaUsers,
  FaChalkboardTeacher,
  FaHandshake
} from 'react-icons/fa';

const AQAR = () => {
  // Animation variants
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

  // Data
  const highlights = [
    { icon: <FaFileAlt className="text-white" />, text: "Academic Achievements" },
    { icon: <FaClipboardList className="text-white" />, text: "Research and Development" },
    { icon: <FaBuilding className="text-white" />, text: "Infrastructure Enhancements" },
    { icon: <FaUsers className="text-white" />, text: "Student Support Services" },
    { icon: <FaChalkboardTeacher className="text-white" />, text: "Faculty Development" },
    { icon: <FaHandshake className="text-white" />, text: "Community Engagement" },
  ];

  const reports = [
    { year: "AQAR 2019-20", link: "https://drive.google.com/file/d/1QT5E--cA9tjP6i1eFuQWbqjsz7nY6Vrt/view?usp=sharing" },
    { year: "AQAR 2018-19", link: "https://drive.google.com/file/d/1YjcY5Ou8EH5S_j3Rq7jE03FWDqwJeO_v/view?usp=sharing" },
  ];

  const submissionSteps = [
    "Data Collection and Analysis",
    "Report Drafting and Review",
    "Internal and External Validations",
    "Final Submission to NAAC",
  ];

  return (
    <motion.div
    initial="hidden"
    animate="visible"
    variants={containerVariants}
    className="min-h-screen py-4 xs:py-6 sm:py-8 md:py-12 px-3 xs:px-4 sm:px-6 lg:px-8"
  >
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <motion.div variants={itemVariants} className="text-center mb-6 sm:mb-8 md:mb-12">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-3 sm:mb-4">
          Annual Quality Assurance Report (AQAR)
        </h1>
        <p className="text-base xs:text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-4">
          A comprehensive document detailing our commitment to excellence in education
        </p>
      </motion.div>

      {/* Main Content */}
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
            className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg p-4 xs:p-5 sm:p-6 md:p-8"
          >
            <p className="text-sm xs:text-base sm:text-lg text-gray-700 leading-relaxed">
              The Annual Quality Assurance Report (AQAR) serves as a comprehensive document detailing the institution's efforts towards maintaining and enhancing quality in education, research, infrastructure, and overall governance. It aligns with the guidelines provided by the National Assessment and Accreditation Council (NAAC).
            </p>
          </motion.div>

          {/* Report Highlights */}
          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg p-4 xs:p-5 sm:p-6 md:p-8"
          >
            <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 sm:mb-6">
              Report Highlights
            </h2>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 xs:gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardHoverVariants}
                  whileHover="hover"
                  className="flex items-center space-x-3 p-3 xs:p-4 rounded-lg xs:rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50"
                >
                  <div className="w-8 h-8 xs:w-10 xs:h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xs xs:text-sm sm:text-base text-gray-700">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Submission Process */}
          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg p-4 xs:p-5 sm:p-6 md:p-8"
          >
            <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 sm:mb-6">
              AQAR Submission Process
            </h2>
            <div className="space-y-3 xs:space-y-4">
              {submissionSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={cardHoverVariants}
                  whileHover="hover"
                  className="flex items-start space-x-3 xs:space-x-4"
                >
                  <div className="w-6 h-6 xs:w-8 xs:h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white text-xs xs:text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-grow">
                    <p className="text-xs xs:text-sm sm:text-base text-gray-700">{step}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          variants={itemVariants}
          className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8"
        >
          {/* Download Reports */}
          <motion.div
            variants={cardHoverVariants}
            whileHover="hover"
            className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg p-4 xs:p-5 sm:p-6 md:p-8"
          >
            <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 sm:mb-6">
              Download AQAR
            </h2>
            <div className="space-y-3 xs:space-y-4">
              {reports.map((report, index) => (
                <motion.a
                  key={index}
                  href={report.link}
                  variants={cardHoverVariants}
                  whileHover="hover"
                  className="flex items-center space-x-3 p-3 xs:p-4 rounded-lg xs:rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDownload className="text-blue-600 text-sm xs:text-base" />
                  <span className="text-xs xs:text-sm sm:text-base text-gray-700">{report.year}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={cardHoverVariants}
            whileHover="hover"
            className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg p-4 xs:p-5 sm:p-6 md:p-8"
          >
            <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 sm:mb-6">
              Contacts
            </h2>
            <div className="space-y-4 xs:space-y-6">
              <div className="p-3 xs:p-4 sm:p-6 rounded-lg xs:rounded-xl">
                
                <div className="space-y-3 xs:space-y-4 ">
                  <motion.div
                    variants={cardHoverVariants}
                    whileHover="hover"
                    className="flex items-start space-x-3  bg-gradient-to-r from-blue-50 to-indigo-50 p-3 xs:p-4 rounded-lg xs:rounded-xl bg-white/50"
                  >
                    <FaMapMarkerAlt className="text-blue-600  mt-1 flex-shrink-0 text-sm xs:text-base" />
                    <span className="text-xs xs:text-sm sm:text-base  text-gray-700">
                      Academic Section<br />
                      NSUT Sector 3 Dwarka<br />
                      New Delhi-110078
                    </span>
                  </motion.div>
                  <motion.div
                    variants={cardHoverVariants}
                    whileHover="hover"
                    className="flex items-center  bg-gradient-to-r from-blue-50 to-indigo-50 space-x-3 p-3 xs:p-4 rounded-lg xs:rounded-xl bg-white/50"
                  >
                    <FaPhoneAlt className="text-blue-600 flex-shrink-0 text-sm xs:text-base" />
                    <div>
                      <span className="text-gray-600 block text-xs xs:text-sm">Landline No.</span>
                      <span className="text-gray-700 font-medium text-xs xs:text-sm sm:text-base">011-25000268</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </motion.div>
  );
};

export default AQAR;