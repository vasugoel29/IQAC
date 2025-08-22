import React, { useState, useCallback, memo } from 'react';
import { Link } from 'react-router-dom';
import {
  FaBars, FaTimes, FaInfoCircle, FaCertificate, FaUser,
  FaChartLine, FaFileAlt, FaGraduationCap, FaHandshake,
  FaComments, FaBook, FaUniversity, FaClipboardList
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

// LinkItem Component
const LinkItem = memo(({ to, children }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <Link
      to={to}
      className="block p-2 sm:p-3 rounded-xl 
       hover:bg-gradient-to-r from-blue-50 to-indigo-50
        text-slate-700 hover:text-blue-700
        transition-all duration-300 
        border border-slate-200
        hover:border-blue-200
        shadow-sm hover:shadow-md
        hover:shadow-blue-100
        sm:text-blue-950"
    >
      <motion.div
        initial={{ x: 0 }}
        whileHover={{ x: 8 }}
        className="flex items-center space-x-2"
      >
        {children}
      </motion.div>
    </Link>
  </motion.div>
));

// SectionTitle Component
const SectionTitle = memo(({ icon: Icon, children, isExpanded, onToggle }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onToggle}
    className="w-full py-2 sm:py-3 px-3 sm:px-4 rounded-xl font-bold text-blue-950 sm:text-lg mb-2 sm:mb-3 
      flex items-center justify-between bg-gradient-to-rg-gradient-to-r from-blue-500 to-indigo-500
       cursor-pointer transition-all 
      duration-300 shadow-md hover:shadow-lg bg-blue-300
      hover:from-blue-600 hover:to-indigo-600 curssor-pointer"
  >
    <span className="flex items-center space-x-2 sm:space-x-3">
      <Icon className="text-blue-950" size={16} />
      <span className="">{children}</span>
    </span>
    <motion.span
      animate={{ rotate: isExpanded ? 180 : 0 }}
      transition={{ duration: 0.3 }}
      className="text-amber-800"
    >
      ▼
    </motion.span>
  </motion.button>
));

// Section Component
const Section = memo(({ title, icon, section, isExpanded, onToggle, children }) => {
  const submenuVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    visible: {
      height: 'auto',
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
  };

  return (
    <div className="mb-4 sm:mb-6">
      <SectionTitle
        icon={icon}
        isExpanded={isExpanded}
        onToggle={() => onToggle(section)}
      >
        {title}
      </SectionTitle>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.ul
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={submenuVariants}
            className="space-y-2 border-l-2 border-blue-600 pl-3 sm:pl-4 ml-2"
          >
            {children}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
});
// MenuButton Component
const MenuButton = memo(({ isOpen, toggle }) => (
  <motion.button
    onClick={toggle}
    className="fixed lg:hidden left-4 z-50 p-2 rounded-xl
      bg-gradient-to-r from-amber-300/30 to-amber-500/30
       border border-amber-400/40
      hover:border-amber-500/50 shadow-lg hover:shadow-amber-400/30
      transition-all duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="relative w-6 h-5">
      <motion.span
        className="absolute top-0 left-0 w-full h-0.5 bg-amber-600 rounded-full"
        animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="absolute top-1/2 left-0 w-full h-0.5 bg-amber-600 rounded-full"
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 rounded-full"
        animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.2 }}
      />
    </div>
  </motion.button>
));

// Main Sidebar Component
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  const toggleSection = useCallback((section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  }, []);

  const sidebarVariants = {
    hidden: {
      x: '-100%',
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    visible: {
      x: '0%',
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <MenuButton isOpen={isSidebarOpen} toggle={toggleSidebar} />

      {/* Mobile Overlay */}
      <AnimatePresence>
        {(isSidebarOpen || isDesktop) && (
          <motion.div
            className="fixed inset-0 bg-amber-950/40 z-40 lg:hidden "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleSidebar}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        variants={sidebarVariants}
        initial="hidden"
        animate={(isSidebarOpen || isDesktop) ? "visible" : "hidden"}
        exit="hidden"
        className={`
          fixed lg:sticky top-0 left-0 h-screen
          w-[85vw] sm:w-[60vw] md:w-[40vw] lg:w-80 2xl:w-96
          bg-gradient-to-b from-white to-slate-50
          text-blue-950 p-4 sm:p-6 z-50
          overflow-y-auto scrollbar-thin
          transform transition-transform duration-300
           shadow-xl
          left-scrollbar  
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <nav className="h-full flex flex-col">
          <div className="flex-1 space-y-4">
            {/* About Section */}
            <Section
              title="About"
              icon={FaInfoCircle}
              section="about"
              isExpanded={expandedSections.about}
              onToggle={toggleSection}
            >
              <li><LinkItem to="/about/introduction">Introduction</LinkItem></li>
              <li><LinkItem to="/about/objectives">Objectives</LinkItem></li>
              <li><LinkItem to="/about/functions">Functions</LinkItem></li>
              <li><LinkItem to="/about/strategies">Strategies</LinkItem></li>
              <li><LinkItem to="/about/iqacstaff">IQAC Staff</LinkItem></li>
              <li><LinkItem to="/about/members">Members</LinkItem></li>
            </Section>

            {/* NEP Section */}
            <Section
              title="NEP"
              icon={FaBook}
              section="nep"
              isExpanded={expandedSections.nep}
              onToggle={toggleSection}
            >
              <li><LinkItem to="/nep/curriculum">Course Curriculum Updates</LinkItem></li>
              <li><LinkItem to="/nep/best-practices">Best Practices</LinkItem></li>
              <li><LinkItem to="/nep/utsah">UTSAH</LinkItem></li>
              <li><LinkItem to="/nep/sarthi">SARTHI</LinkItem></li>
              <li><LinkItem to="/nep/samarth">SAMARTH</LinkItem></li>
            </Section>
            {/* Profile Section */}
            <Section
              title="Profile"
              icon={FaUser}
              section="profile"
              isExpanded={expandedSections.profile}
              onToggle={toggleSection}
            >
              <li><LinkItem to="/profile/academic-research">Academic Research</LinkItem></li>
              <li><LinkItem to="/profile/consultancy">Consultancy</LinkItem></li>
              <li><LinkItem to="/profile/patents">Patents</LinkItem></li>
              <li><LinkItem to="/profile/mou">MOU</LinkItem></li>
              <li><LinkItem to="/profile/collaborations">Collaborations</LinkItem></li>
              <li><LinkItem to="/profile/workshops">Workshops</LinkItem></li>
              <li><LinkItem to="/profile/fdp">FDP</LinkItem></li>
              <li><LinkItem to="/profile/conferences">Conferences</LinkItem></li>
              <li><LinkItem to="/profile/aishe">AISHE</LinkItem></li>
              <li><LinkItem to="/profile/policies">University Policies</LinkItem></li>
            </Section>

            {/* Accreditation Section */}
            <Section
              title="Accreditation"
              icon={FaCertificate}
              section="accreditation"
              isExpanded={expandedSections.accreditation}
              onToggle={toggleSection}
            >
              <li><LinkItem to="/accreditation/naac">NAAC</LinkItem></li>
              <li><LinkItem to="/accreditation/nba">NBA</LinkItem></li>
              <li><LinkItem to="/accreditation/ssr">SSR</LinkItem></li>
              <li><LinkItem to="/accreditation/peer-team">Peer Team Report</LinkItem></li>
              <li><LinkItem to="/accreditation/certificate">Certificates</LinkItem></li>
            </Section>

            {/* Rankings Section */}
            <Section
              title="Rankings"
              icon={FaChartLine}
              section="rankings"
              isExpanded={expandedSections.rankings}
              onToggle={toggleSection}
            >
              <li><LinkItem to="/rankings/nirf">NIRF</LinkItem></li>
              <li><LinkItem to="/rankings/india-today">India Today</LinkItem></li>
              <li><LinkItem to="/rankings/outlook">Outlook</LinkItem></li>
              <li><LinkItem to="/rankings/times">Times Ranking</LinkItem></li>
              <li><LinkItem to="/rankings/ariia">ARIIA</LinkItem></li>
            </Section>

            {/* Reports Section */}
            <Section
              title="Reports"
              icon={FaFileAlt}
              section="reports"
              isExpanded={expandedSections.reports}
              onToggle={toggleSection}
            >
              <li><LinkItem to="/reports/aqar">AQAR</LinkItem></li>
              <li><LinkItem to="/reports/annual-report">Annual Report</LinkItem></li>
              <li><LinkItem to="/reports/minutes">Minutes</LinkItem></li>
              <li><LinkItem to="/reports/audit">Academic Audit</LinkItem></li>
              <li><LinkItem to="/reports/feedback">Feedback Analysis</LinkItem></li>
              <li><LinkItem to="/reports/best-practices">Best Practices</LinkItem></li>
            </Section>

            {/* Incentive Schemes Section */}
            <Section
              title="Incentive Schemes"
              icon={FaHandshake}
              section="incentives"
              isExpanded={expandedSections.incentives}
              onToggle={toggleSection}
            >
              <li><LinkItem to="/incentives/faculty">Faculty Incentives</LinkItem></li>
              <li><LinkItem to="/incentives/staff">Staff Incentives</LinkItem></li>
              <li><LinkItem to="/incentives/students">Student Incentives</LinkItem></li>
            </Section>

            {/* Feedback Section */}
            <Section
              title="Feedback"
              icon={FaComments}
              section="feedback"
              isExpanded={expandedSections.feedback}
              onToggle={toggleSection}
            >
              <li><LinkItem to="/feedback/students">Student Feedback</LinkItem></li>
              <li><LinkItem to="/feedback/faculty">Faculty Feedback</LinkItem></li>
              <li><LinkItem to="/feedback/alumni">Alumni Feedback</LinkItem></li>
            </Section>
          </div>
        </nav>
      </motion.aside>
    </>
  );
};


const styles = `
  /* Custom Scrollbar */
  .scrollbar-thin {
    scrollbar-width: thin;
    scrollbar-color: rgba(251, 191, 36, 0.6) rgba(251, 191, 36, 0.1);
  }

  .scrollbar-thin::-webkit-scrollbar {
    width: 6px;
  }

  .scrollbar-thin::-webkit-scrollbar-track {
    background: rgba(251, 191, 36, 0.1);
    border-radius: 3px;
  }

  .scrollbar-thin::-webkit-scrollbar-thumb {
    background-color: rgba(251, 191, 36, 0.6);
    border-radius: 3px;
  }

  // /* Amber Gradient Text */
  // .amber-gradient-text {
  //   background: linear-gradient(to right, #92400e, #d97706);
  //   -webkit-background-clip: text;
  //   background-clip: text;
  //   -webkit-text-fill-color: transparent;
  //   color: transparent;
  // }

  /* Custom Animations */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideIn {
    from { transform: translateX(-10px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }

  /* Hover Effects */
  .hover-lift {
    transition: transform 0.2s ease;
  }

  .hover-lift:hover {
    transform: translateY(-2px);
  }

  /* Custom Shadow */
  .amber-shadow {
    box-shadow: 0 4px 6px -1px rgba(251, 191, 36, 0.1),
                0 2px 4px -1px rgba(251, 191, 36, 0.06);
  }
`;


const styleTag = document.createElement('style');
styleTag.textContent = styles;
document.head.appendChild(styleTag);

export default memo(Sidebar);