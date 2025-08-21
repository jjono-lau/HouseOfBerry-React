import React, { useRef, useEffect } from "react";

const MenuCard = ({ menuData }) => {
  const [position, setPosition] = React.useState({ x: 150, y: 150 });
  const [visible, setVisible] = React.useState(false);
  const divRef = useRef(null);
  const intervalRef = useRef(null);

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return; // ignore mobile
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setVisible(true);
      const bounds = divRef.current.getBoundingClientRect();
      const radiusX = bounds.width / 2 - 150; // horizontal range
      const centerY = bounds.height / 2; // vertical center
      let x = 0;
      let direction = 1; // 1 = right, -1 = left
      const speed = 2; // pixels per frame

      intervalRef.current = setInterval(() => {
        x += speed * direction;
        if (x > radiusX || x < -radiusX) direction *= -1;
        setPosition({
          x: bounds.width / 2 + x,
          y: centerY,
        });
      }, 16); // ~60fps
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div
      className="flex relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10"
      onMouseEnter={() => window.innerWidth >= 768 && setVisible(true)}
      onMouseLeave={() => window.innerWidth >= 768 && setVisible(false)}
      onMouseMove={handleMouseMove}
      ref={divRef}
    >
      {/* Gradient Background Control */}
      <div
        className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-400 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten ${
          visible ? "opacity-70" : "opacity-0"
        }`}
        style={{ top: position.y - 150, left: position.x - 150 }}
      />

      {/* Card Content */}
      <div className="relative z-10 rounded-[10px] border border-gray-200 dark:border-gray-700 shadow-lg bg-white dark:bg-gray-900 w-[calc(100%-8px)] h-[calc(100%-8px)] p-8 flex items-center gap-6 mx-auto my-1">
        <div className="flex-1">
          <img
            src={menuData.icon}
            alt="Menu Items"
            className="max-w-24 bg-none m-2"
          />
        </div>
        <div className="flex-1">
          <h3 className="font-bold">{menuData.title}</h3>
          <p className="text-sm mt-2">{menuData.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
