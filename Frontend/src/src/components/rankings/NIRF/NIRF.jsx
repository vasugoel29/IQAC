import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaLightbulb, 
  FaStar, 
  FaChartBar, 
  FaGlobeAmericas,
  FaUniversity,
  FaUsers,
  FaAward
} from 'react-icons/fa';

const NIRF = () => {
  const nirfLinks = [
    {
      year: '2024',
      categories: [
        { name: 'Engineering 2024', path: 'https://drive.google.com/file/d/1Ca_kOzuK4msIkq0lnR4IpOBJTdod52n1/view?usp=sharing', icon: FaGraduationCap },
        { name: 'Innovation 2024', path: 'https://drive.google.com/file/d/1XRKYEWGOR5ymQZiv1clirmSvEqYQgruD/view?usp=sharing', icon: FaLightbulb },
        { name: 'Overall 2024', path: 'https://drive.google.com/file/d/1qTDYj4t_mXCIWH_Sq86xGcwSrXCxowWL/view?usp=sharing', icon: FaStar },
      ]
    },
    {
      year: '2023',
      categories: [
        { name: 'INDIA Data 2023 - Engineering', path: 'https://drive.google.com/file/d/1rmLVJYAbUNho5H6LWlHpP-JW5nOCe5IU/view?usp=sharing', icon: FaChartBar },
        { name: 'INDIA Data 2023 - University', path: 'https://drive.google.com/file/d/19Gki_uGKlthVZanrbdLipLtYUdzrCotE/view?usp=sharing', icon: FaGlobeAmericas },
        { name: 'NIRF Data 2023 - Overall', path: 'https://drive.google.com/file/d/1tJ_S2rACP8IPYbKP_f2QuMUEtUHjCOTH/view?usp=sharing', icon: FaStar },
        { name: 'NIRF Data 2023 - Engineering', path: 'https://drive.google.com/file/d/1wiEZcDftC0HjsHDXTKZG90IlmKswSQE0/view?usp=sharing', icon: FaGraduationCap },
      ]
    }
  ];

  const assessmentCriteria = [
    {
      title: "Academic Excellence",
      items: [
        "Teaching & Learning Resources",
        "Research & Professional Practice",
        "Graduation Outcomes"
      ],
      icon: FaUniversity
    },
    {
      title: "Institutional Impact",
      items: [
        "Outreach & Inclusivity",
        "Peer Perception",
        "Innovation & Development"
      ],
      icon: FaUsers
    }
  ];

  const LinkWrapper = ({ category, children }) => {
    if (category.path.startsWith('http')) {
      return (
        <a
          href={category.path}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          {children}
        </a>
      );
    }
    return (
      <Link to={category.path} className="group">
        {children}
      </Link>
    );
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">
            NIRF DATA
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore excellence through the National Institutional Ranking Framework, 
            setting the gold standard for academic distinction across India.
          </p>
        </motion.div>

        {/* Rankings Section */}
        <div className="space-y-8">
          {nirfLinks.map((yearGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                {/* Year Header */}
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-5">
                  <h2 className="text-2xl font-bold text-white">
                    {yearGroup.year}
                  </h2>
                </div>

                {/* Categories Grid */}
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {yearGroup.categories.map((category, categoryIndex) => (
                    <LinkWrapper key={categoryIndex} category={category}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          <category.icon className="w-8 h-8 text-blue-500 group-hover:text-indigo-500 transition-colors duration-300" />
                          <div className="flex-1">
                            <p className="font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                              {category.name}
                            </p>
                          </div>
                          <motion.div
                            whileHover={{ x: 3 }}
                            className="text-blue-500 group-hover:text-indigo-500"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </motion.div>
                        </div>
                      </motion.div>
                    </LinkWrapper>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Assessment Criteria Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Excellence Through Assessment
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {assessmentCriteria.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 shadow-md"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <section.icon className="w-7 h-7 text-blue-500" />
                    <h4 className="text-xl font-semibold text-gray-800">
                      {section.title}
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li 
                        key={itemIndex}
                        className="flex items-center space-x-2 text-gray-600"
                      >
                        <FaAward className="w-5 h-5 text-blue-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NIRF;