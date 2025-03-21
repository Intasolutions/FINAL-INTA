"use client";

import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const addMouseListeners = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", addMouseListeners);

    return () => {
      window.removeEventListener("mousemove", addMouseListeners);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <div className="w-6 h-6 bg-white-200 rounded-full mix-blend-difference transition-transform duration-150 ease-out" />
    </div>
  );
};

export default Cursor;
