// src/components/Navigation/Navbar.jsx
import React , { useState}from 'react';
import { Link } from 'react-router-dom';

import Modal from '../Modal/Modal';
import LoginPage from '../Authentication/Login/Login';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHindi, setIsHindi] = useState(false);
  const toggleLanguage = () => {
    setIsHindi(!isHindi); 
  };

      const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
      const openLoginModal = () => setIsLoginModalOpen(true);
      const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <nav className="w-full">
      {/* Top navigation bar */}
      <div className="bg-[#003262] text-white font-[system-ui,-apple-system,BlinkMacSystemFont,Segoe_UI,Roboto,Helvetica_Neue,Arial,Noto_Sans,sans-serif,Apple_Color_Emoji,Segoe_UI_Emoji,Segoe_UI_Symbol,Noto_Color_Emoji]">
        <div className="max-w-[1400px] mx-auto px-4">
          {/* Mobile top bar */}
          <div className="flex justify-between items-center md:hidden py-2">
            {/* Jobs and Tenders links */}
            <div className="flex items-center space-x-4">
              <a href="http://nsut.ac.in/hi/jobs-nsut" className="text-[14px] hover:underline">Jobs@NSUT</a>
              <a href="http://nsut.ac.in/hi/tenders" className="text-[14px] hover:underline">Tenders</a>
            </div>
            
            {/* Language toggle and mobile menu button */}
            <div className="flex items-center space-x-4">
              <a href="#" onClick={toggleLanguage} className="text-[14px] hover:underline">
                {isHindi ? "हिन्दी" : "English"}
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex justify-between items-center py-1.5 px-4 mx-3">
            <div className="flex items-center gap-[25px] text-[14px]">
              <ul className="flex items-center gap-[25px] text-[14px]">
                <li><a href="http://nsut.ac.in/hi/jobs-nsut" className="hover:underline">Jobs@NSUT</a></li>
                <li><a href="http://nsut.ac.in/hi/tenders" className="hover:underline">Tenders</a></li>
                <li><a href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=649953" className="hover:underline">Fee Payment Gateway</a></li>
                <li><a href="https://www.tnpnsut.in/" className="hover:underline">Training & Placement</a></li>
                <li><a href="http://nsut.ac.in/hi/node/706" className="hover:underline">RTI</a></li>
                <li><a href="http://nsut.ac.in/hi/node/1003" className="hover:underline">ARIIA</a></li>
                <li><a href="http://nsut.ac.in/hi/node/1247" className="hover:underline">IQAC</a></li>
                <li><a href="http://nsut.ac.in/hi/node/616" className="hover:underline">NIRF</a></li>
                <li><a href="http://nsut.ac.in/hi/node/1281" className="hover:underline">ICC</a></li>
                <li><a href="http://nsut.ac.in/hi/node/1589" className="hover:underline">TBI</a></li>
                <li><a href="https://www.imsnsit.org/imsnsit/" className="hover:underline">UMS</a></li>
                <li><a href="http://nsut.ac.in/hi/node/47" className="hover:underline">Contact Us</a></li>
                
                  {/* Login Button */}
                 <div className="mt-4 md:mt-0 md:ml-4">
                            <button 
                                className=" text-burgundy px-4 md:px-6 py-2 rounded-md font-semibold 
                                          transition duration-300   hover: underline-offset-auto
                                         text-sm md:text-base
                                         w-full md:w-auto"
                                onClick={openLoginModal}
                            >
                                Admin Login
                            </button>
                        </div>

              </ul>
            </div>
            <div className="ml-[25px] text-[14px]">
              <a href="#" onClick={toggleLanguage} className="hover:underline">
                {isHindi ? "हिन्दी" : "English"}
              </a>
            </div>
          </div>

          {/* Mobile dropdown menu */}
          {isOpen && (
            <div className="md:hidden py-2">
              <ul className="space-y-2 text-[14px]">
                <li><a href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=649953" className="hover:underline">Fee Payment Gateway</a></li>
                <li><a href="https://www.tnpnsut.in/" className="hover:underline">Training & Placement</a></li>
                <li><a href="http://nsut.ac.in/hi/node/706" className="hover:underline">RTI</a></li>
                <li><a href="http://nsut.ac.in/hi/node/1003" className="hover:underline">ARIIA</a></li>
                <li><a href="http://nsut.ac.in/hi/node/1247" className="hover:underline">IQAC</a></li>
                <li><a href="http://nsut.ac.in/hi/node/616" className="hover:underline">NIRF</a></li>
                <li><a href="http://nsut.ac.in/hi/node/1281" className="hover:underline">ICC</a></li>
                <li><a href="http://nsut.ac.in/hi/node/1589" className="hover:underline">TBI</a></li>
                <li><a href="https://www.imsnsit.org/imsnsit/" className="hover:underline">UMS</a></li>
                 {/* Login Button */}
                 <div className="mt-4 md:mt-0 md:ml-4">
                            <button 
                                className=" text-burgundy px-4 md:px-6 py-2 rounded-md font-semibold 
                                         transition duration-300 
                                         text-sm md:text-base
                                         w-full md:w-auto"
                                onClick={openLoginModal}
                            >
                                Admin Login
                            </button>
                        </div>
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* Login Modal */}
      <Modal 
                isOpen={isLoginModalOpen} 
                onClose={closeLoginModal}
                className="w-[90%] md:w-auto max-w-md mx-auto"
            >
                <LoginPage />
            </Modal>
    </nav>
  );
};

export default Navbar;