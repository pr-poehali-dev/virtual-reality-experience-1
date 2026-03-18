import { useEffect, useRef } from "react";

export function LiquidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      time += 0.003;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const blobs = [
        { x: 0.3, y: 0.4, r: 280, color: "rgba(99, 102, 241, 0.08)", speed: 1 },
        { x: 0.7, y: 0.3, r: 220, color: "rgba(168, 85, 247, 0.06)", speed: 1.3 },
        { x: 0.5, y: 0.7, r: 300, color: "rgba(79, 70, 229, 0.05)", speed: 0.8 },
        { x: 0.2, y: 0.6, r: 180, color: "rgba(139, 92, 246, 0.04)", speed: 1.1 },
      ];

      blobs.forEach((blob) => {
        const cx = canvas.width * blob.x + Math.sin(time * blob.speed) * 60;
        const cy = canvas.height * blob.y + Math.cos(time * blob.speed * 0.7) * 40;
        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, blob.r);
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(cx, cy, blob.r, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
}

export default LiquidBackground;
