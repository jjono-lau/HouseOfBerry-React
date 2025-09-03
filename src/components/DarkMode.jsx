import React, { useEffect } from 'react';
import HouseOfBerryAssets from '../HouseOfBerryAssets/HouseOfBerryAssets';
const DarkMode = ({ theme, setTheme }) => {


  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(theme || (prefersDark ? 'dark' : 'light')); 
  }, [setTheme]);


  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);


  return (
    
    <button
  title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
  className="w-8.5 h-8 p-1.5 ml-3 border border-gray-500 rounded-full flex items-center justify-center"
>
  {theme === "dark" ? (
    <img
      onClick={() => setTheme("light")}
      src={HouseOfBerryAssets.sun_icon}
      className="w-full h-full object-contain"
      alt="Switch to light mode"
    />
  ) : (
    <img
      onClick={() => setTheme("dark")}
      src={HouseOfBerryAssets.moon_icon}
      className="w-full h-full object-contain"
      alt="Switch to dark mode"
    />
  )}
</button>
      
  );
  
};

export default DarkMode;
