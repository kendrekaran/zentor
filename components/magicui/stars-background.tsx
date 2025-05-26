"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleDirection: number;
}

export const StarsBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };
    
    const initStars = () => {
      starsRef.current = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 17000); // Increased density
      
      for (let i = 0; i < numStars; i++) {
        // Add a small percentage of larger stars
        const isLargeStar = Math.random() < 0.05;
        
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: isLargeStar ? 1.5 + Math.random() * 1.5 : Math.random() * 1.5,
          speedX: (Math.random() - 0.5) * 0.4, // Random horizontal movement
          speedY: 0.1 + Math.random() * 0.3,   // Increased vertical speed
          opacity: 0.2 + Math.random() * 0.8,
          twinkleSpeed: 0.01 + Math.random() * 0.02,
          twinkleDirection: Math.random() > 0.5 ? 1 : -1
        });
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      starsRef.current.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
        
        // Move stars in random directions
        star.x += star.speedX;
        star.y += star.speedY;
        
        // Add twinkling effect
        star.opacity += star.twinkleSpeed * star.twinkleDirection;
        if (star.opacity > 1) {
          star.opacity = 1;
          star.twinkleDirection = -1;
        } else if (star.opacity < 0.2) {
          star.opacity = 0.2;
          star.twinkleDirection = 1;
        }
        
        // Reset star when it moves off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
        
        // Reset star when it moves off the sides
        if (star.x < 0) {
          star.x = canvas.width;
          star.y = Math.random() * canvas.height;
        } else if (star.x > canvas.width) {
          star.x = 0;
          star.y = Math.random() * canvas.height;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    window.addEventListener("resize", handleResize);
    handleResize();
    animate();
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full  pointer-events-none"
      aria-hidden="true"
    />
  );
};