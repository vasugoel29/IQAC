import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaInfoCircle, FaCertificate, FaUser, FaChartLine, FaFileAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const sidebarVariants = {
    hidden: {
      x: '-100%',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    visible: {
      x: '0%',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const LinkItem = ({ to, children }) => (
    <Link
      to={to}
      className="block p-2 rounded-lg hover:bg-gradient-to-r from-blue-600/20 to-indigo-600/20 text-gray-200 hover:text-white transition-all duration-300 hover:translate-x-1"
    >
      {children}
    </Link>
  );

  const SectionTitle = ({ icon: Icon, children }) => (
    <h2 className="font-bold text-lg mb-3 flex items-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
      <Icon className="mr-2 text-blue-400" /> {children}
    </h2>
  );

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 p-2"
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed bg-black bg-opacity-50 z-40 md:hidden backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleSidebar}
          />
        )}
      </AnimatePresence>

      <motion.aside
        className={`top-0 left-0 overflow-y-auto  bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6 z-50 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } transition-transform duration-300 shadow-xl`}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={sidebarVariants}
      >
        <nav className="h-full flex flex-col">
          <div className="flex-1 space-y-6">
            <div>
              <SectionTitle icon={FaInfoCircle}>About</SectionTitle>
              <ul className="space-y-1 border-l-2 border-blue-500/20 pl-2">
                <li><LinkItem to="/about/introduction">Introduction</LinkItem></li>
                <li><LinkItem to="/about/objectives">Objectives</LinkItem></li>
                <li><LinkItem to="/about/functions">Functions</LinkItem></li>
                <li><LinkItem to="/about/strategies">Strategies</LinkItem></li>
                <li><LinkItem to="/about/iqacstaff">IQAC Staff</LinkItem></li>
                <li><LinkItem to="/about/members">Members</LinkItem></li>
              </ul>
            </div>

            <div>
              <SectionTitle icon={FaCertificate}>Accreditation</SectionTitle>
              <ul className="space-y-1 border-l-2 border-blue-500/20 pl-2">
                <li><LinkItem to="/accreditation/naac">NAAC</LinkItem></li>
                <li><LinkItem to="/accreditation/nba">NBA</LinkItem></li>
              </ul>
            </div>

            <div>
              <SectionTitle icon={FaUser}>Profile</SectionTitle>
              <ul className="space-y-1 border-l-2 border-blue-500/20 pl-2">
                <li><LinkItem to="/profile/academic-research">Academic Research</LinkItem></li>
                <li><LinkItem to="/profile/consultancy">Consultancy</LinkItem></li>
                <li><LinkItem to="/profile/patents">Patents</LinkItem></li>
                <li><LinkItem to="/profile/statistical-information">Statistical Information</LinkItem></li>
              </ul>
            </div>

            <div>
              <SectionTitle icon={FaChartLine}>Rankings</SectionTitle>
              <ul className="space-y-1 border-l-2 border-blue-500/20 pl-2">
                <li><LinkItem to="/rankings/nirf">NIRF</LinkItem></li>
                <li><LinkItem to="/rankings/ranking1">Ranking 1</LinkItem></li>
                <li><LinkItem to="/rankings/ranking2">Ranking 2</LinkItem></li>
              </ul>
            </div>

            <div>
              <SectionTitle icon={FaFileAlt}>Reports</SectionTitle>
              <ul className="space-y-1 border-l-2 border-blue-500/20 pl-2">
                <li><LinkItem to="/reports/aqar">AQAR</LinkItem></li>
                <li><LinkItem to="/reports/annual-report">Annual Report</LinkItem></li>
                <li><LinkItem to="/reports/minutes">Minutes</LinkItem></li>
              </ul>
            </div>
          </div>
        </nav>
      </motion.aside>
    </>
  );
};

export default Sidebar;