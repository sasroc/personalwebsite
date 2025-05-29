import React from 'react';

const Profile = ({ name, profilePicture }) => {
  return (
    <div className="flex flex-col items-center justify-center mb-12">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <img
          src={profilePicture}
          alt={`${name}'s profile`}
          className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/20 shadow-2xl"
        />
      </div>
      <h1 className="mt-6 text-3xl md:text-4xl font-bold text-white tracking-tight">
        {name}
      </h1>
      <div className="mt-2 text-gray-300 text-lg text-center">
        Software Developer and Stock Options Trader
      </div>
    </div>
  );
};

export default Profile; 