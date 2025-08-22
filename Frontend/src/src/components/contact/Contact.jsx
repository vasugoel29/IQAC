// Contact.jsx

import React from "react";
const Contact = () => {
    return (
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input 
              type="text" 
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea 
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
          </div>
          <button 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  };
  export default Contact;