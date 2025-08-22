// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#003262] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
          {/* Quick Links Section */}
          <section className="md:border-r md:border-gray-700 md:pr-8">
            <h2 className="text-lg font-bold mb-4 pb-2  border-gray-700">QUICK LINKS</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="http://nsut.ac.in/en/list-of-faculties" className="hover:underline" target="_blank" rel="noreferrer">
                  Faculties
                </a>
              </li>
              <li>
                <a href="http://nsut.ac.in/en/departments" className="hover:underline" target="_blank" rel="noreferrer">
                  Departments
                </a>
              </li>
              <li>
                <a href="http://nsut.ac.in/en/Centres" className="hover:underline" target="_blank" rel="noreferrer">
                  Centres
                </a>
              </li>
              <li>
                <a href="http://nsut.ac.in/en/Facilities" className="hover:underline" target="_blank" rel="noreferrer">
                  Facilities
                </a>
              </li>
              <li>
                <a href="http://nsut.ac.in/en/notices" className="hover:underline" target="_blank" rel="noreferrer">
                  Notices
                </a>
              </li>
              <li>
                <a href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=649953" 
                   className="hover:underline" target="_blank" rel="noreferrer">
                  Fee Payments Through State Bank Collect
                </a>
              </li>
              <li>
                <a href="https://imsnsit.org/" className="hover:underline" target="_blank" rel="noreferrer">
                  UMS
                </a>
              </li>
              <li>
                <a href="http://nsut.ac.in/en/nsut-kulgeet" className="hover:underline" target="_blank" rel="noreferrer">
                  NSUT Kligeel
                </a>
              </li>
            </ul>
          </section>

          {/* Explore Section */}
          <section className="md:border-r md:border-gray-700 md:px-8">
            <h2 className="text-lg font-bold mb-4 pb-2  border-gray-700">EXPLORE</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="http://nsut.ac.in/en/centre/central-computer-centre" className="hover:underline" target="_blank" rel="noreferrer">
                  Central Computer Centre
                </a>
              </li>
              <li>
                <a href="http://nsut.ac.in/en/campus-life" className="hover:underline" target="_blank" rel="noreferrer">
                  Campus Life
                </a>
              </li>
              <li>
                <a href="http://nsut.ac.in/en/newsletter" className="hover:underline" target="_blank" rel="noreferrer">
                  University Newsletter
                </a>
              </li>
              <li>
                <a href="http://nsut.ac.in/en/programmes" className="hover:underline" target="_blank" rel="noreferrer">
                  Educational Programmes
                </a>
              </li>
              <li>
                <a href="http://nsut.ac.in/en/social-initiatives" className="hover:underline" target="_blank" rel="noreferrer">
                  Social Initiatives
                </a>
              </li>
              <li>
                <a href="http://nsut.ac.in/en/contact-us" className="hover:underline" target="_blank" rel="noreferrer">
                  Contact Us
                </a>
              </li>
            </ul>
          </section>

          {/* Social Media Section */}
          <section className="md:border-r md:border-gray-700 md:px-8">
            <h2 className="text-lg font-bold mb-4 pb-2  border-gray-700">SOCIAL MEDIA (DELHI GOVT)</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.instagram.com/delhigovdigital/" className="hover:underline" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/c/DelhiGovernmentDG" className="hover:underline" target="_blank" rel="noreferrer">
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/DelhiGovDigital/" className="hover:underline" target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com/DelhiGovDigital/" className="hover:underline" target="_blank" rel="noreferrer">
                  Twitter
                </a>
              </li>
            </ul>
          </section>

          {/* University Details Section */}
          <section className="md:pl-8">
            <h2 className="text-lg font-bold mb-4 pb-2  border-gray-700">Netaji Subhas University of Technology (NSUT)</h2>
            <ul className="space-y-2 text-sm">
              <li>Formerly Netaji Subhas Institute of Technology (NSIT)</li>
              <li>(Govt. of NCT of Delhi)</li>
            </ul>
          </section>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-sm">
          © {new Date().getFullYear()} Netaji Subhas University of Technology (NSUT). All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;