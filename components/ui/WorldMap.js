"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const WorldMap = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mapRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!mapRef.current) return;
      const rect = mapRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    mapRef.current?.addEventListener("mousemove", handleMouseMove);
    return () => {
      mapRef.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={mapRef} className="relative w-full h-[400px] overflow-hidden rounded-2xl">
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(249, 115, 22, 0.15), transparent 80%)`,
        }}
      />
      <svg
        className="w-full h-full text-neutral-900 dark:text-white/20"
        fill="currentColor"
        viewBox="0 0 1027 631"
      >
        {/* Add world map SVG paths here */}
      </svg>
      
      {/* Hotspots */}
      <div className="absolute left-[20%] top-[30%] size-2 bg-orange-500 rounded-full animate-ping" />
      <div className="absolute left-[60%] top-[40%] size-2 bg-orange-500 rounded-full animate-ping" />
      <div className="absolute left-[80%] top-[20%] size-2 bg-orange-500 rounded-full animate-ping" />
    </div>
  );
};