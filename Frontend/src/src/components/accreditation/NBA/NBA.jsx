import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';

const NBA = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter function for programs
  const filterPrograms = (programs) => {
    return programs.filter(program => 
      program.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Filtered programs
  const filteredUG = filterPrograms(ugPrograms);
  const filteredPG = filterPrograms(pgPrograms);
  const filteredPhD = filterPrograms(phdPrograms);

  // Total results count
  const totalResults = filteredUG.length + filteredPG.length + filteredPhD.length;

  return (
    <div className="min-h-screen bg-gradient-to-br py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">
            National Board of Accreditation (NBA)
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The National Board of Accreditation (NBA) is an autonomous body established by AICTE to assess and accredit programs in technical education.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative max-w-xl mx-auto">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for programs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 backdrop-blur-sm"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-8"
        >
          <p className="text-gray-700 leading-relaxed">
            The National Board of Accreditation (NBA) is an autonomous body established by the All India Council for Technical Education (AICTE) to assess and accredit programs in engineering and technology, management, pharmacy, architecture, and hotel management. NBA accreditation signifies the quality and standard of the programs offered by our institution.
          </p>
        </motion.div>

        {/* Programs Sections */}
        {[
          { title: "Undergraduate Programs", data: filteredUG },
          { title: "Postgraduate Programs", data: filteredPG },
          { title: "Doctorate Programs", data: filteredPhD }
        ].map((section, index) => (
          section.data.length > 0 && (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (index * 0.2) }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                {section.title}
              </h2>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-blue-500 to-indigo-500">
                      <tr>
                        <th className="text-white p-4 text-left w-3/4">Program</th>
                        <th className="text-white p-4 text-left w-1/4">Valid Upto</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.data.map((program, idx) => (
                        <tr key={idx} className="border-b border-gray-200 hover:bg-blue-50/50 transition-colors">
                          <td className="p-4">{program.name}</td>
                          <td className="p-4">{program.validUpto}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )
        ))}

        {/* No Results Message */}
        {totalResults === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 mt-8 p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg"
          >
            <p className="text-lg">No programs found matching your search criteria.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

// Program data
const ugPrograms = [

  { name: "B.Tech. in COE", validUpto: "[Valid Upto Date]" },
  { name: "B.Tech. in CSE - CSAI", validUpto: "[Valid Upto Date]" },
  { name: "B.Tech. in CSE - CSDS", validUpto: "[Valid Upto Date]" },
  { name: "B.Tech. in CSE - CSDA", validUpto: "[Valid Upto Date]" },
  { name: "B.Tech. in MAC", validUpto: "[Valid Upto Date]" },
  { name: "B.Tech. in Bio-Technology", validUpto: "[Valid Upto Date]" },
  { name: "B.Tech. in ECE - ECAM", validUpto: "[Valid Upto Date]" },
  { name: "B.Tech. in ECE - IOT", validUpto: "[Valid Upto Date]" },
  { name: "B.Tech. in ECE", validUpto: "[Valid Upto Date]" },
  { name: "B.Tech. in EE", validUpto: "[Valid Upto Date]" },
  { name: "B.Tech. in ICE", validUpto: "[Valid Upto Date]" },
  { name: "B.Tech. in IT - IOT", validUpto: "[Valid Upto Date]" },
  { name: "B.Tech. in IT", validUpto: "[Valid Upto Date]" },
  { name: "B.Tech. in IT - ITNS", validUpto: "[Valid Upto Date]" },
  { name: "B.Tech. in ME - MEEV", validUpto: "[Valid Upto Date]" },
  { name: "B.Tech. in MPAE", validUpto: "[Valid Upto Date]" },
  { name: "B.Tech. in ME", validUpto: "[Valid Upto Date]" },
  { name: "B.Tech. in Civil Engineering", validUpto: "[Valid Upto Date]" },
  { name: "B.Tech. in GeoInformatics", validUpto: "[Valid Upto Date]" },
  { name: "Bachelor of Business Administration", validUpto: "[Valid Upto Date]" },
  { name: "Bachelor of Fashion Technology", validUpto: "[Valid Upto Date]" },
];

const pgPrograms = [
  { name: "Master of Technology in Signal Processing", validUpto: "[Valid Upto Date]" },
  { name: "Master of Technology in Embedded System and VLSI", validUpto: "[Valid Upto Date]" },
  { name: "Master of Technology in Biochemical Engineering", validUpto: "[Valid Upto Date]" },
  { name: "Master of Technology in Process Control", validUpto: "[Valid Upto Date]" },
  { name: "Master of Technology in Industrial Electronics", validUpto: "[Valid Upto Date]" },
  { name: "Master of Technology in Engineering Management", validUpto: "[Valid Upto Date]" },
  { name: "Master of Technology in CAD/CAM", validUpto: "[Valid Upto Date]" },
  { name: "Master of Technology in Communications and Network", validUpto: "[Valid Upto Date]" },
  { name: "Master of Technology in Production Engineering", validUpto: "[Valid Upto Date]" },
  { name: "Master of Technology in MECHATRONICS", validUpto: "[Valid Upto Date]" },
  { name: "Master of Technology in Mechanical Engineering", validUpto: "[Valid Upto Date]" },
  { name: "Master of Technology in Environmental Engineering", validUpto: "[Valid Upto Date]" },
  { name: "Master of Technology in Digital Communication", validUpto: "[Valid Upto Date]" },
  { name: "Master of Technology in Electrical Engineering", validUpto: "[Valid Upto Date]" },
  { name: "Master of Business Administration", validUpto: "[Valid Upto Date]" },
  { name: "Master of Business Administration - IEV", validUpto: "[Valid Upto Date]" },
  { name: "Master of Arts (English Literature, Language & Communication)", validUpto: "[Valid Upto Date]" },
  { name: "Master of Arts (Applied Psychology)", validUpto: "[Valid Upto Date]" }
];

const phdPrograms = [
  { name: "Electronics and Communication Engineering", validUpto: "[Valid Upto Date]" },
  { name: "Computer Engineering", validUpto: "[Valid Upto Date]" },
  { name: "Instrumentation and Control Engineering", validUpto: "[Valid Upto Date]" },
  { name: "Manufacturing Process and Automation Engineering", validUpto: "[Valid Upto Date]" },
  { name: "Information Technology", validUpto: "[Valid Upto Date]" },
  { name: "Bio-Technology", validUpto: "[Valid Upto Date]" },
  { name: "Management Studies", validUpto: "[Valid Upto Date]" },
  { name: "Humanities and Social Sciences", validUpto: "[Valid Upto Date]" },
  { name: "Mathematics", validUpto: "[Valid Upto Date]" },
  { name: "Physics", validUpto: "[Valid Upto Date]" },
  { name: "Chemistry", validUpto: "[Valid Upto Date]" },
];

export default NBA;