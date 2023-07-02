import React, { useState, useEffect, useRef } from "react";

export default function MovingBoxEffect() {
  const containerRef = useRef(null);
  const [boxPosition, setBoxPosition] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    const containerSize = containerRef.current.offsetWidth;
    const boxSize = 100;
    const maxOffset = containerSize / 2 - boxSize / 2;
    const sensitivity = 0.1;

    const moveBox = () => {
      const offsetX = (mousePosition.x - containerSize / 2) * sensitivity;
      const offsetY = (mousePosition.y - containerSize / 2) * sensitivity;
      const newX = Math.min(Math.max(-maxOffset, offsetX), maxOffset);
      const newY = Math.min(Math.max(-maxOffset, offsetY), maxOffset);
      setBoxPosition({ x: newX, y: newY });
    };

    moveBox();
  }, [mousePosition]);

  useEffect(() => {
    setMousePosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100vw",
        height: "100vh",
        background: "lightgray",
        position: "relative",
      }}
      onMouseMove={handleMouseMove}
    >
      <div
        style={{
          width: "100px",
          height: "100px",
          background: "red",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: `translate(${boxPosition.x}px, ${boxPosition.y}px)`,
        }}
      ></div>
    </div>
  );
}
