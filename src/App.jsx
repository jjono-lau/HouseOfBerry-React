import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Serving from "./components/Serving";
import Offerings from "./components/Offerings";
import About from "./components/About";
import Questions from "./components/Questions";
import TheCart from "./components/Contact";
import TeamCards from "./components/TeamCards";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import HouseOfBerryAssets from "./HouseOfBerryAssets/HouseOfBerryAssets";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // Cursor refs
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  // Show cursor only if device is not mobile/tablet
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const isMobileOrTablet = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

    // Show cursor if it has a fine pointer and is not mobile/tablet
    setShowCursor(hasFinePointer && !isMobileOrTablet);
  }, []);

  // Mouse tracking animation
  useEffect(() => {
    if (!showCursor) return;

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;

      if (dotRef.current) {
        const imgWidth = dotRef.current.offsetWidth;
        dotRef.current.style.transform = `translate3d(${mouse.current.x - imgWidth/2}px, ${mouse.current.y - 6}px, 0)`;
      }
      if (outlineRef.current) {
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [showCursor]);

  return (
    <div className="dark:bg-gray-500">
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Serving />
      <About />
      <Offerings />
      <TeamCards />
      <Questions />
      <TheCart theme={theme} />
      <Footer theme={theme} />

      {showCursor && (
        <>
  
          <div
            ref={outlineRef}
            className="fixed top-0 left-0 h-12 w-12 rounded-full border border-pink-200 pointer-events-none z-[999]"
          ></div>


           <img
      ref={dotRef}
      src={HouseOfBerryAssets.cursor}
      alt="cursor"
      className="fixed top-0 left-0 w-7 h-7 pointer-events-none z-[999]"
    />
        </>
      )}
    </div>
  );
};

export default App;
