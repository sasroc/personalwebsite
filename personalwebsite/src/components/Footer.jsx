import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-12 text-center">
      <div className="text-gray-400 text-sm">
        © {currentYear} Rocco Sassani
      </div>
      <div className="mt-2 text-gray-500 text-xs">
        Built with React & Tailwind CSS
      </div>
    </footer>
  );
};

export default Footer; 