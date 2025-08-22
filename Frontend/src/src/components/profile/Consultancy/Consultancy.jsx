// src/components/profile/Consultancy/Consultancy.jsx
import React from 'react';

const Consultancy = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Consultancy Services</h1>
      <p className="mb-4">
        Our institution offers a wide range of consultancy services tailored to meet the diverse needs of industries and organizations. Our experts provide insights and solutions in various domains to foster growth and innovation.
      </p>

      {/* Consultancy Services List */}
      <h2 className="text-xl font-semibold mb-2">Our Services:</h2>
      <ul className="list-disc ml-5 mb-4">
        <li>Business Process Optimization</li>
        <li>Educational Program Development</li>
        <li>Technology Integration</li>
        <li>Quality Assurance and Accreditation</li>
        <li>Research and Development Consultancy</li>
      </ul>

      {/* Contact for Consultancy */}
      <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
      <p>
        For more information or to avail our consultancy services, please contact:
      </p>
      <ul className="list-none mt-2">
        <li>Email: <a href="mailto:consultancy@iqac.example.com" className="text-blue-500 underline">consultancy@iqac.example.com</a></li>
        <li>Phone: +1 (234) 567-8901</li>
        <li>Address: 123 Consultancy Street, University City</li>
      </ul>
    </div>
  );
};

export default Consultancy;