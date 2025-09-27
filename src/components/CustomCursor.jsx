import React, { useEffect, useRef, useState } from "react";
import HouseOfBerryAssets from "../HouseOfBerryAssets/HouseOfBerryAssets";

const CURSOR_DOT_SIZE = 28;
const CURSOR_OUTLINE_SIZE = 48;
const CURSOR_DOT_OFFSET = CURSOR_DOT_SIZE / 2;
const CURSOR_OUTLINE_OFFSET = CURSOR_OUTLINE_SIZE / 2;

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);

  const [showCursor, setShowCursor] = useState(false);

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
    if (!showCursor) {
      return;
    }

    const handlePointerMove = (event) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    const step = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.18;
      position.current.y += (mouse.current.y - position.current.y) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - CURSOR_DOT_OFFSET}px, ${mouse.current.y - CURSOR_DOT_OFFSET}px, 0)`;
      }

      if (outlineRef.current) {
        outlineRef.current.style.transform = `translate3d(${position.current.x - CURSOR_OUTLINE_OFFSET}px, ${position.current.y - CURSOR_OUTLINE_OFFSET}px, 0)`;
      }

      animationFrameRef.current = requestAnimationFrame(step);
    };

    document.addEventListener("pointermove", handlePointerMove, { passive: true });
    animationFrameRef.current = requestAnimationFrame(step);

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [showCursor]);

  // Detect DevTools
  useEffect(() => {
    if (!showCursor) {
      return;
    }

    const threshold = 160;
    const syncBodyCursor = (open) => {
      document.body.style.cursor = open ? "auto" : "none";
    };

    let lastOpenState = null;
    const checkDevTools = () => {
      const open =
        window.outerWidth - window.innerWidth > threshold ||
        window.outerHeight - window.innerHeight > threshold;

      if (lastOpenState !== open) {
        lastOpenState = open;
        syncBodyCursor(open);
      }
    };

    const intervalId = window.setInterval(checkDevTools, 1500);
    window.addEventListener("resize", checkDevTools);
    checkDevTools();

    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener("resize", checkDevTools);
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
