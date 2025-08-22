// src/components/profile/StatisticalInformation/StatisticalInformation.jsx
import React from 'react';

const StatisticalInformation = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Statistical Information</h1>
      <p className="mb-4">
        This section provides comprehensive statistical data related to the institution's performance, academic achievements, research output, student demographics, and more. The data is presented in an easy-to-understand format to facilitate informed decision-making and continuous improvement.
      </p>

      {/* Academic Performance Statistics */}
      <h2 className="text-xl font-semibold mb-2">Academic Performance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="p-4 bg-white shadow rounded">
          <h3 className="font-semibold">Student Enrollment</h3>
          <p>Undergraduate: 1,200</p>
          <p>Postgraduate: 600</p>
          <p>Doctoral: 200</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h3 className="font-semibold">Graduation Rate</h3>
          <p>Undergraduate: 85%</p>
          <p>Postgraduate: 80%</p>
          <p>Doctoral: 75%</p>
        </div>
      </div>

      {/* Research Output Statistics */}
      <h2 className="text-xl font-semibold mb-2">Research Output</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="p-4 bg-white shadow rounded">
          <h3 className="font-semibold">Published Papers</h3>
          <p>2022: 150</p>
          <p>2021: 130</p>
          <p>2020: 120</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h3 className="font-semibold">Research Projects</h3>
          <p>Ongoing: 25</p>
          <p>Completed: 75</p>
        </div>
      </div>

      {/* Student Demographics */}
      <h2 className="text-xl font-semibold mb-2">Student Demographics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="p-4 bg-white shadow rounded">
          <h3 className="font-semibold">Gender Distribution</h3>
          <p>Male: 55%</p>
          <p>Female: 45%</p>
        </div>
        <div className="p-4 bg-white shadow rounded">
          <h3 className="font-semibold">International Students</h3>
          <p>Total: 300</p>
          <p>Countries Represented: 25</p>
        </div>
      </div>

      {/* Future Plans for Data Collection */}
      <h2 className="text-xl font-semibold mb-2">Future Plans</h2>
      <p>
        We aim to enhance our data collection methods and expand the breadth of statistical information available. Upcoming initiatives include integrating advanced analytics tools and expanding our reporting to include real-time dashboards and interactive visualizations.
      </p>
    </div>
  );
};

export default StatisticalInformation;