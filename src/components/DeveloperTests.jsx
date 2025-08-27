import React, { useEffect, useState } from "react";

const DeveloperTests = ({ theme }) => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [breakpoint, setBreakpoint] = useState("");

  const [viewportCheck, setViewportCheck] = useState(false);
  const [devToolsOpen, setDevToolsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 640) setBreakpoint("XS (<640px)");
    else if (screenSize < 768) setBreakpoint("SM (640px - 767px)");
    else if (screenSize < 1024) setBreakpoint("MD (768px - 1023px)");
    else if (screenSize < 1280) setBreakpoint("LG (1024px - 1279px)");
    else if (screenSize < 1536) setBreakpoint("XL (1280px - 1535px)");
    else setBreakpoint("2XL (>=1536px)");
  }, [screenSize]);

  useEffect(() => {
    const threshold = 160;

    const checkViewport = () => {
      const open =
        window.outerWidth - window.innerWidth > threshold ||
        window.outerHeight - window.innerHeight > threshold;
      setViewportCheck(open);
      setDevToolsOpen(open);
    };

    window.addEventListener("resize", checkViewport);
    window.addEventListener("mousemove", checkViewport);

    checkViewport(); // run on mount

    return () => {
      window.removeEventListener("resize", checkViewport);
      window.removeEventListener("mousemove", checkViewport);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Developer Info Page</h1>

      <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded space-y-2">
        <p><strong>Window Width:</strong> {screenSize}px</p>
        <p><strong>Tailwind Breakpoint:</strong> {breakpoint}</p>
        <p><strong>Current Theme:</strong> {theme}</p>
        <p><strong>Viewport Check:</strong> {viewportCheck ? "True" : "False"}</p>
        <p><strong>DevTools Open (combined):</strong> {devToolsOpen ? "True" : "False"} --{">"} inacurate dev tools testing as it can only base it off sizing </p>
      </div>

      <div className="mt-6">
        <p className="italic text-sm text-gray-600 dark:text-gray-400">
          Use this page to test responsive layouts, themes, and other frontend behaviors.
          <br />
          Remember to remove Developer Test from App.jsx before deployment
        </p>
      </div>
    </div>
  );
};

export default DeveloperTests;







