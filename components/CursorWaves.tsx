"use client";

import { useEffect, useRef } from "react";

type Ripple = {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  hue: number;
  opacity: number;
  lineWidth: number;
};

const COLORS = [170, 280, 210, 30, 55, 320];

export default function CursorWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ripplesRef = useRef<Ripple[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000, lastSpawn: 0 });
  const frameRef = useRef<number>(0);
  const colorIndexRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const spawnRipple = (x: number, y: number) => {
      const hue = COLORS[colorIndexRef.current % COLORS.length];
      colorIndexRef.current += 1;

      ripplesRef.current.push({
        x,
        y,
        radius: 0,
        maxRadius: 60 + Math.random() * 80,
        hue,
        opacity: 0.55,
        lineWidth: 2 + Math.random() * 2,
      });

      if (ripplesRef.current.length > 40) {
        ripplesRef.current.shift();
      }
    };

    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      const now = performance.now();
      if (now - mouseRef.current.lastSpawn > 45) {
        mouseRef.current.lastSpawn = now;
        spawnRipple(e.clientX, e.clientY);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ripplesRef.current = ripplesRef.current.filter((ripple) => {
        ripple.radius += 1.8;
        ripple.opacity *= 0.965;
        ripple.lineWidth *= 0.99;

        if (ripple.opacity < 0.02 || ripple.radius > ripple.maxRadius) {
          return false;
        }

        const gradient = ctx.createRadialGradient(
          ripple.x,
          ripple.y,
          ripple.radius * 0.2,
          ripple.x,
          ripple.y,
          ripple.radius
        );
        gradient.addColorStop(
          0,
          `hsla(${ripple.hue}, 90%, 65%, ${ripple.opacity * 0.15})`
        );
        gradient.addColorStop(
          0.5,
          `hsla(${ripple.hue}, 85%, 55%, ${ripple.opacity * 0.35})`
        );
        gradient.addColorStop(
          1,
          `hsla(${ripple.hue}, 80%, 50%, 0)`
        );

        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(${ripple.hue}, 90%, 62%, ${ripple.opacity})`;
        ctx.lineWidth = ripple.lineWidth;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        return true;
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[1]"
      aria-hidden="true"
    />
  );
}
