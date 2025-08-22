import React from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload, FaChartLine, FaRegFilePdf, FaHistory, FaInfoCircle, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const AnnualReport = () => {
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

  const recentReports = [
    { 
      year: '2022-2023',
      title: 'Annual Quality Assurance Report',
      description: 'Comprehensive overview of institutional growth',
      fileSize: '8.5 MB',
      path: '/reports/annual/2022-23.pdf'
    },
    { 
      year: '2021-2022',
      title: 'Annual Quality Assurance Report',
      description: 'Detailed analysis of academic achievements',
      fileSize: '7.2 MB',
      path: '/reports/annual/2021-22.pdf'
    },
    { 
      year: '2020-2021',
      title: 'Annual Quality Assurance Report',
      description: 'Documentation of institutional excellence',
      fileSize: '6.8 MB',
      path: '/reports/annual/2020-21.pdf'
    }
  ];

  const archiveYears = ['2019-2020', '2018-2019', '2017-2018', '2016-2017'];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen  py-4 xs:py-6 sm:py-8 md:py-12 px-3 xs:px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-6 sm:mb-8 md:mb-12"
        >
          <h1 className="text-1xl xs:text-3xl space-y-2 sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-3 sm:mb-4">
            Annual Quality Assurance Reports
          </h1>
          <p className="text-base xs:text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-4">
            Comprehensive documentation of institutional growth and achievements
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
                These comprehensive reports showcase our institution's commitment to excellence, 
                highlighting key achievements, initiatives, and progress in academic, research, 
                and administrative domains throughout each academic year.
              </p>
            </motion.div>

            {/* Recent Reports */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg p-4 xs:p-5 sm:p-6 md:p-8"
            >
              <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 sm:mb-6">
                Recent Reports
              </h2>
              <div className="space-y-3 xs:space-y-4">
                {recentReports.map((report, index) => (
                  <motion.div
                    key={index}
                    variants={cardHoverVariants}
                    whileHover="hover"
                    className="p-3 xs:p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-base xs:text-lg font-semibold text-gray-800">
                          {report.year}
                        </h3>
                        <p className="text-sm xs:text-base text-gray-600">{report.description}</p>
                        <span className="text-xs xs:text-sm text-gray-500">File size: {report.fileSize}</span>
                      </div>
                      <a
                        href={report.path}
                        className="flex items-center space-x-2 bg-blue-600 text-white px-3 py-2 rounded-lg
                          hover:bg-blue-700 transition-colors duration-300"
                      >
                        <FaFileDownload className="text-sm xs:text-base" />
                        <span className="text-sm xs:text-base">Download</span>
                      </a>
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
            {/* Archive Section */}
            <motion.div
              variants={cardHoverVariants}
              whileHover="hover"
              className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg p-4 xs:p-5 sm:p-6 md:p-8"
            >
              <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 sm:mb-6">
                Archived Reports
              </h2>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 xs:gap-4">
                {archiveYears.map((year, index) => (
                  <motion.a
                    key={index}
                    href={`/reports/annual/${year}.pdf`}
                    variants={cardHoverVariants}
                    whileHover="hover"
                    className="p-3 xs:p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg
                      hover:from-blue-100 hover:to-indigo-100 transition-all duration-300
                      flex items-center justify-between"
                  >
                    <span className="text-sm xs:text-base text-gray-800 font-semibold">{year}</span>
                    <FaRegFilePdf className="text-blue-600" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              variants={cardHoverVariants}
              whileHover="hover"
              className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg p-4 xs:p-5 sm:p-6 md:p-8"
            >
              <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 sm:mb-6">
                Contact Information
              </h2>
              <div className="grid grid-cols-1 gap-3 xs:gap-4">
                <motion.a
                  href="mailto:reports@iqac.example.com"
                  variants={cardHoverVariants}
                  whileHover="hover"
                  className="p-3 xs:p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg 
                    flex items-center space-x-2 xs:space-x-3"
                >
                  <FaEnvelope className="text-blue-600 text-sm xs:text-base" />
                  <span className="text-sm xs:text-base text-gray-800">reports@iqac.example.com</span>
                </motion.a>
                <motion.div
                  variants={cardHoverVariants}
                  whileHover="hover"
                  className="p-3 xs:p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg
                    flex items-center space-x-2 xs:space-x-3"
                >
                  <FaPhoneAlt className="text-blue-600 text-sm xs:text-base" />
                  <span className="text-sm xs:text-base text-gray-800">+1 (234) 567-8901</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnnualReport;