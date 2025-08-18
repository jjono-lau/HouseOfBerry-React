import React from 'react';
import assets from '../assets/assets';

const DarkMode = ({ theme, setTheme }) => {
  return (
    <button
      className="w-8.5 h-8 p-1.5 border border-gray-500 rounded-full flex items-center justify-center"
    >
      {theme === "dark" ? (
        <img
          onClick={() => setTheme('light')}
          src={assets.sun_icon}
          className="w-full h-full object-contain"
          alt="Switch to light mode"
        />
      ) : (
        <img
          onClick={() => setTheme('dark')}
          src={assets.moon_icon}
          className="w-full h-full object-contain"
          alt="Switch to dark mode"
        />
      )}
    </button>
  );
};

export default DarkMode;

