import React, { useEffect } from 'react';
import assets from '../assets/assets';

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
      className="w-8.5 h-8 p-1.5 ml-3 border border-gray-500 rounded-full flex items-center justify-center"
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


// import React, { useEffect } from "react";
// import assets from "../assets/assets";

// const DarkMode = ({ theme, setTheme }) => {
//   useEffect(() => {
//     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//     setTheme(theme || (prefersDark ? "dark" : "light"));
//   }, [setTheme]);

//   useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   return (
//     <label className="inline-flex items-center cursor-pointer relative w-12 h-6">
//       {/* hidden checkbox */}
//       <input
//         type="checkbox"
//         checked={theme === "dark"}
//         onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
//         className="sr-only peer"
//       />

//       {/* track */}
//       <div className="absolute inset-0 rounded-full bg-gray-200 dark:bg-gray-700 peer-checked:bg-blue-600 transition-colors"></div>

//       {/* moving knob with icon */}
//       <div
//         className={`absolute top-[2px] left-[2px] w-5 h-5 rounded-full flex items-center justify-center border border-gray-300 dark:border-gray-600 transition-transform ${
//           theme === "dark" ? "translate-x-6" : ""
//         }`}
//       >
//         <img
//           src={theme === "dark" ? assets.sun_icon : assets.moon_icon}
//           alt={theme === "dark" ? "dark mode" : "light mode"}
//           className="w-3 h-3"
//         />
//       </div>
//     </label>
//   );
// };

// export default DarkMode;
