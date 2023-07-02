import React, { useState } from "react";

export default function MousePositionEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        background: "red",
        position: "relative",
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        transition: "transform 0.2s ease",
      }}
      onMouseMove={handleMouseMove}
    ></div>
  );
}
