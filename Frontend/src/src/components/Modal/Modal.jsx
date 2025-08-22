// Modal.jsx
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Animated Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-all duration-300"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative z-50 w-full max-w-lg transform scale-100 transition-all duration-300">
        <button 
          className="absolute -top-12 right-0 text-white/70 hover:text-white text-sm font-medium flex items-center gap-2 transition-colors duration-300"
          onClick={onClose}
        >
          Close
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;