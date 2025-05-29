import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ label, url, icon, iconPosition = 'left' }) => {
  const renderIcon = () => {
    if (!icon) return null;
    
    if (typeof icon === 'string') {
      return (
        <img
          src={icon}
          alt={`${label} icon`}
          className="w-6 h-6"
        />
      );
    }
    
    return icon;
  };

  const isInternal = url.startsWith('/');

  const buttonContent = (
    <>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative flex items-center justify-between px-8 py-4 bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg transition duration-200 hover:bg-black/60">
        {icon && iconPosition === 'left' && renderIcon()}
        <span className="text-white font-medium text-lg flex-grow text-center">{label}</span>
        {icon && iconPosition === 'right' && renderIcon()}
      </div>
    </>
  );

  return isInternal ? (
    <Link to={url} className="group w-full max-w-md relative">
      {buttonContent}
    </Link>
  ) : (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group w-full max-w-md relative"
    >
      {buttonContent}
    </a>
  );
};

export default LinkButton; 