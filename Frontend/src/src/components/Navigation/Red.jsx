import React, { useState } from "react";
import logo from "./navbarassets/Logo.png";
import loca from "./navbarassets/location.png";
import LoginPage from '../Authentication/Login/Login';
import Modal from "../Modal/Modal";

export default function Red() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const openLoginModal = () => setIsLoginModalOpen(true);
    const closeLoginModal = () => setIsLoginModalOpen(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <div>
            <div className="bg-burgundy py-3 md:py-5  bg-red-800 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <a href="/en" title="Home" rel="home" className="block">
                            <img 
                                src={logo}
                                alt="Home" 
                                className="h-[40px] md:h-[60px] w-auto"
                            />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden absolute right-4  text-white"
                        onClick={toggleMobileMenu}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                            />
                        </svg>
                    </button>

                    {/* Navigation Content */}
                    <div className={`
                        w-full md:w-auto 
                        flex flex-col md:flex-row 
                        items-center gap-4 
                        ${isMobileMenuOpen ? 'flex' : 'hidden md:flex'}
                    `}>
                        {/* Location Section */}
                        <div className="text-center md:text-right relative md:pr-12">
                            <p className="text-white text-sm md:text-base">
                                <a href="/location" className="hover:text-gray-200">
                                    Netaji Subhas University of Technology (NSUT)
                                </a>
                            </p>
                            <p className="text-white text-sm md:text-base">
                                <a href="/location" className="hover:text-gray-200">
                                    Sec-3, Dwarka New Delhi-110078, India
                                </a>
                            </p>
                            <img
                                src={loca}
                                alt="Location Icon"
                                className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 w-8 md:w-10 h-auto"
                            />
                        </div>

                       
                    </div>
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
        </div>
    );
}