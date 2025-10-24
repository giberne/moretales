"use client";

import { useEffect, useRef } from "react";

export default function WireframeDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Dots configuration
    const dotSpacing = 32;
    const dotRadius = 1;
    let dots: { x: number; y: number; baseX: number; baseY: number; vx: number; vy: number }[] = [];

    let mouseX = -1000;
    let mouseY = -1000;
    const interactionRadius = 180;
    let animationId: number;

    // Create dots grid
    const createDots = () => {
      dots = [];
      for (let x = 0; x < canvas.width; x += dotSpacing) {
        for (let y = 0; y < canvas.height; y += dotSpacing) {
          dots.push({
            x,
            y,
            baseX: x,
            baseY: y,
            vx: 0,
            vy: 0,
          });
        }
      }
    };

    // Set canvas size and recreate dots
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      // Scale context for high DPI
      ctx.scale(dpr, dpr);

      // Set CSS size
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      createDots();
    };

    setCanvasSize();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) * (canvas.width / rect.width);
      mouseY = (e.clientY - rect.top) * (canvas.height / rect.height);
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        const dx = mouseX - dot.x;
        const dy = mouseY - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < interactionRadius) {
          const force = (interactionRadius - distance) / interactionRadius;
          dot.vx -= (dx / distance) * force * 0.4;
          dot.vy -= (dy / distance) * force * 0.3;
        }

        // Spring back to base position
        dot.vx += (dot.baseX - dot.x) * 0.03;
        dot.vy += (dot.baseY - dot.y) * 0.03;

        // Apply friction
        dot.vx *= 0.55;
        dot.vy *= 0.55;

        // Update position
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Calculate opacity based on distance from mouse
        const opacity = distance < interactionRadius
          ? 0.07 + (1 - distance / interactionRadius) * 0.3
          : 0.08;

        // Draw dot
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2);
        ctx.fill();

        // Draw glow on nearby dots
        if (distance < interactionRadius) {
          const glowOpacity = (1 - distance / interactionRadius) * 0.3;
          ctx.fillStyle = `rgba(0, 217, 255, ${glowOpacity})`;
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dotRadius + 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    // Debounce resize
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setCanvasSize();
      }, 100);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full"
      style={{ zIndex: 1 }}
    />
  );
}
