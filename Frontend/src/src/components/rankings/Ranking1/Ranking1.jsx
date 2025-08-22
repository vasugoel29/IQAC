import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaUniversity, FaGraduationCap } from 'react-icons/fa';

const Rankings = () => {
  // Sort top rankings by year (descending) and rank
  const sortedTopRankings = [...topRankings].sort((a, b) => {
    // First sort by year (descending)
    if (b.year !== a.year) {
      return parseInt(b.year) - parseInt(a.year);
    }
    // If years are same, sort by rank
    return parseInt(a.rank) - parseInt(b.rank);
  });

  // Sort all rankings by year (descending) and rank
  const sortedAllRankings = [...allRankings].sort((a, b) => {
    // First sort by year (descending)
    if (b.year !== a.year) {
      return parseInt(b.year) - parseInt(a.year);
    }
    // If years are same, sort by rank (assuming numeric ranks)
    return parseInt(a.rank) - parseInt(b.rank);
  });

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
            NSUT Rankings & Achievements
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our Standing in National and International Rankings
          </p>
        </motion.div>

        {/* Top Rankings Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sortedTopRankings.map((ranking, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + (index * 0.2) }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">#{ranking.rank}</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">{ranking.title}</div>
                <div className="text-sm text-gray-600">{ranking.year}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Complete Rankings Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Comprehensive Rankings</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-100 to-indigo-100">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Ranking Authority</th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Rank</th>
                  <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Year</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {sortedAllRankings.map((ranking, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 text-sm text-gray-700">{ranking.title}</td>
                    <td className="px-6 py-4 text-center text-sm font-semibold text-blue-600">
                      {ranking.rank}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-600">{ranking.year}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
// Rankings data
const topRankings = [
  {
    rank: "2",
    title: "TIMES All India Engineering Institutes",
    year: "2024"
  },
  {
    rank: "5",
    title: "ARIIA Ranking",
    year: "2020"
  },
  {
    rank: "8",
    title: "India Today Colleges",
    year: "2024"
  }
];

const allRankings = [
  {
    title: "India Today Colleges",
    rank: "8",
    year: "2024"
  },
  {
    title: "TIMES All India Engineering Institutes Ranking Survey",
    rank: "2",
    year: "2024"
  },
  {
    title: "NIRF India Rankings: Engineering",
    rank: "57",
    year: "2024"
  },
  {
    title: "NIRF India Rankings: Engineering",
    rank: "60",
    year: "2023"
  },
  {
    title: "NIRF India Rankings: UNIVERSITY Category",
    rank: "95",
    year: "2023"
  },
  {
    title: "CAREERS360: India's Best Engineering Institutes",
    rank: "AAAA",
    year: "2023"
  },
  {
    title: "WorldQuant BRAIN Global IQC University Rankings",
    rank: "14",
    year: "2023"
  },
  {
    title: "OUTLOOK Ranking",
    rank: "125",
    year: "2022"
  },
  {
    title: "NIRF Ranking",
    rank: "79",
    year: "2022"
  },
  {
    title: "ARIIA Ranking",
    rank: "5",
    year: "2020"
  },
  {
    title: "INDIA TODAY Ranking",
    rank: "8",
    year: "2021"
  },
  {
    title: "THE TIMES OF INDIA Ranking",
    rank: "5",
    year: "2021"
  },
  {
    title: "THE WEEK Ranking",
    rank: "22",
    year: "2019"
  }
];

export default Rankings;