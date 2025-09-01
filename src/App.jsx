import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Homepage";
import Socials from "./components/Socials";
import Offerings from "./components/Offerings";
import About from "./components/About";
import Questions from "./components/Questions";
import TheCart from "./components/Contact";
import TeamCards from "./components/TeamCards";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";



// import DeveloperTests from "./components/DeveloperTests";


const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  return (
    <div className="dark:bg-gray-500">
      <CustomCursor />
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />

      <About />
      <Offerings />
      <TeamCards />
            <Socials />
      <Questions />
      <TheCart theme={theme} />
      <Footer theme={theme} />


      {/* <DeveloperTests theme={theme} /> */}

      
    </div>
  );
};

export default App;
