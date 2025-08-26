import React, { useEffect, useRef, useState } from "react";
import HouseOfBerryAssets from "../HouseOfBerryAssets/HouseOfBerryAssets";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  const [showCursor, setShowCursor] = useState(false);
  const [devToolsOpen, setDevToolsOpen] = useState(false);

  useEffect(() => {
    const isMobileOrTablet = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (hasFinePointer && !isMobileOrTablet) {
      setShowCursor(true);
      // Hide native cursor by default
      document.body.style.cursor = "none";
    }
  }, []);

  // Mouse tracking
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
        const w = dotRef.current.offsetWidth;
        const h = dotRef.current.offsetHeight;
        dotRef.current.style.transform = `translate3d(${mouse.current.x - w / 2}px, ${mouse.current.y - h / 2}px, 0)`;
      }

      if (outlineRef.current) {
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [showCursor]);

  // Detect DevTools
  useEffect(() => {
    if (!showCursor) return;

    const checkDevTools = () => {
      const threshold = 160;
      const open =
        window.outerWidth - window.innerWidth > threshold ||
        window.outerHeight - window.innerHeight > threshold;

      setDevToolsOpen(open);

      // If DevTools is open, show the native cursor
      document.body.style.cursor = open ? "auto" : "none";
    };

    window.addEventListener("resize", checkDevTools);
    window.addEventListener("mousemove", checkDevTools);
    checkDevTools();

    return () => {
      window.removeEventListener("resize", checkDevTools);
      window.removeEventListener("mousemove", checkDevTools);
      document.body.style.cursor = "auto";
    };
  }, [showCursor]);

  if (!showCursor) return null;

  return (
    <>
      {/* Always render custom cursor */}
      <div
        ref={outlineRef}
        className="fixed top-2 left-0.5 h-12 w-12 rounded-full border border-pink-200 pointer-events-none z-[999]"
      />
      <img
        ref={dotRef}
        src={HouseOfBerryAssets.cursor}
        alt="cursor"
        className="fixed top-2 left-0.5 w-7 h-7 pointer-events-none z-[999]"
      />
    </>
  );
};

export default CustomCursor;
