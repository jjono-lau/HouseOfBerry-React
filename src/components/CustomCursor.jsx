import React, { useEffect, useRef, useState } from "react";
import HouseOfBerryAssets from "../HouseOfBerryAssets/HouseOfBerryAssets";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  const [showCursor, setShowCursor] = useState(false);

  // Detect desktop devices only (fine pointer)
  useEffect(() => {
    const isMobileOrTablet = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (hasFinePointer && !isMobileOrTablet) {
      setShowCursor(true);
    }
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

  if (!showCursor) return null; // fallback: native cursor on mobile/tablet

  return (
    <>
      {/* Outline ring */}
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 h-12 w-12 rounded-full border border-pink-200 pointer-events-none z-[999]"
      />

      {/* Cursor image */}
      <img
        ref={dotRef}
        src={HouseOfBerryAssets.cursor}
        alt="cursor"
        className="fixed top-0 left-0 w-7 h-7 pointer-events-none z-[999]"
      />
    </>
  );
};

export default CustomCursor;
