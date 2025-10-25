import { useEffect, useRef } from 'react';

interface DotGridProps {
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  activeColor?: string;
  proximity?: number;
  shockRadius?: number;
  shockStrength?: number;
  resistance?: number;
  returnDuration?: number;
}

const DotGrid = ({
  dotSize = 2,
  gap = 15,
  baseColor = '#5227FF',
  activeColor = '#5227FF',
  proximity = 120,
  shockRadius = 250,
  shockStrength = 5,
  resistance = 750,
  returnDuration = 1.5
}: DotGridProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let mouseX = -1000;
    let mouseY = -1000;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const cols = Math.ceil(canvas.width / gap);
    const rows = Math.ceil(canvas.height / gap);

    interface Dot {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
    }

    const dots: Dot[] = [];

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const x = j * gap + gap / 2;
        const y = i * gap + gap / 2;
        dots.push({ x, y, baseX: x, baseY: y, vx: 0, vy: 0 });
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        const dx = mouseX - dot.x;
        const dy = mouseY - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < shockRadius) {
          const force = (shockRadius - distance) / shockRadius;
          const angle = Math.atan2(dy, dx);
          dot.vx -= Math.cos(angle) * force * shockStrength;
          dot.vy -= Math.sin(angle) * force * shockStrength;
        }

        const returnForceX = (dot.baseX - dot.x) / resistance;
        const returnForceY = (dot.baseY - dot.y) / resistance;
        dot.vx += returnForceX * returnDuration;
        dot.vy += returnForceY * returnDuration;

        dot.vx *= 0.95;
        dot.vy *= 0.95;

        dot.x += dot.vx;
        dot.y += dot.vy;

        const distToMouse = Math.sqrt(
          (mouseX - dot.x) ** 2 + (mouseY - dot.y) ** 2
        );
        const isActive = distToMouse < proximity;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = isActive ? activeColor : baseColor;
        ctx.globalAlpha = isActive ? 0.8 : 0.3;
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [dotSize, gap, baseColor, activeColor, proximity, shockRadius, shockStrength, resistance, returnDuration]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
};

export default DotGrid;
