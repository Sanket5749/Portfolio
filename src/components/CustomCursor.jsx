import React, { useEffect } from "react";
import "./style.css"; 

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("cursor-circle");
    document.body.appendChild(cursor);

    let mouseX = 0,
      mouseY = 0;
    let currentX = 0,
      currentY = 0;

    const mouseMoveHandler = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    document.addEventListener("mousemove", mouseMoveHandler);

    const animate = () => {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;
      cursor.style.left = `${currentX}px`;
      cursor.style.top = `${currentY}px`;
      requestAnimationFrame(animate);
    };
    animate();

  
    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      cursor.remove();
    };
  }, []);

  return null; 
}