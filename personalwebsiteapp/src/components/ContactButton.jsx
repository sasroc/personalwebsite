import React, { useState } from 'react';

const ContactButton = ({ email }) => {
  const [showCopied, setShowCopied] = useState(false);

  const copyToClipboard = (text) => {
    const textField = document.createElement('textarea');
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  const handleClick = () => {
    copyToClipboard(email);
    // Try to open mail client after copying
    try {
      window.location.href = `mailto:${email}`;
    } catch (error) {
      console.error('Failed to open mail client:', error);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="group absolute top-4 right-4 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg transition-all duration-200 hover:scale-105"
    >
      <div className="flex items-center space-x-2">
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <span className="text-white font-medium">
          {showCopied ? 'Email Copied!' : 'Contact Me'}
        </span>
      </div>
    </button>
  );
};

export default ContactButton; 