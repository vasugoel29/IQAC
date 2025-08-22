import React, { useState } from "react";
import staffData from "./staffData";
import { FaLinkedin, FaGoogle, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

const IQACStaff = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Group staff by position
  const groupedStaff = {
    director: staffData.filter(staff => staff.position.includes("Director")),
    coordinators: staffData.filter(staff => staff.position === "Coordinator"),
    dyCoordinators: staffData.filter(staff => staff.position.includes("Dy. Coordinator"))
  };

  // Filter function for search
  const filterStaff = (staff) =>
    staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.department.toLowerCase().includes(searchTerm.toLowerCase());

  // Filter all groups
  const filteredGroups = {
    director: groupedStaff.director.filter(filterStaff),
    coordinators: groupedStaff.coordinators.filter(filterStaff),
    dyCoordinators: groupedStaff.dyCoordinators.filter(filterStaff)
  };

  const StaffCard = ({ staff, index }) => (
    <motion.div
      key={staff.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 * (index + 1) }}
      className="group h-full" // Added h-full here
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col"> {/* Added h-full and flex flex-col */}
        <div className="p-6 flex flex-col flex-grow"> {/* Added flex flex-col and flex-grow */}
          <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-500">
            <img
              src={staff.photo}
              alt={staff.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "/faculty/default-faculty.jpg";
              }}
            />
          </div>
          <div className="flex-grow flex flex-col"> {/* Added flex-grow and flex flex-col */}
            <h2 className="text-xl font-bold text-gray-800 text-center mb-2 line-clamp-2"> {/* Added line-clamp-2 */}
              {staff.name}
            </h2>
            <p className="text-gray-600 text-center mb-2 line-clamp-2"> {/* Added line-clamp-2 */}
              {staff.role}
            </p>
            <div className="flex justify-center space-x-4 mt-auto"> {/* Added mt-auto */}
              {staff.linkedin && (
                <a
                  href={staff.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <FaLinkedin size={20} />
                </a>
              )}
              {staff.googlescholar && (
                <a
                  href={staff.googlescholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-800 transition-colors"
                >
                  <FaGoogle size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const StaffSection = ({ title, staff }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="mb-12"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {staff.map((member, index) => (
          <StaffCard key={member.id} staff={member} index={index} />
        ))}
      </div>
    </motion.div>
  );

  const totalResults = 
    filteredGroups.director.length + 
    filteredGroups.coordinators.length + 
    filteredGroups.dyCoordinators.length;

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">
            IQAC Staff
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Internal Quality Assurance Cell (IQAC) of NSUT
          </p>
        </motion.div>

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
              placeholder="Search by name, role, or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 backdrop-blur-sm"
            />
          </div>
        </motion.div>

        {filteredGroups.director.length > 0 && (
          <StaffSection title="Director & Deputy Director" staff={filteredGroups.director} />
        )}

        {filteredGroups.coordinators.length > 0 && (
          <StaffSection title="Coordinators" staff={filteredGroups.coordinators} />
        )}

        {filteredGroups.dyCoordinators.length > 0 && (
          <StaffSection title="Deputy Coordinators" staff={filteredGroups.dyCoordinators} />
        )}

        {totalResults === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 mt-8"
          >
            No members found matching your search criteria.
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default IQACStaff;