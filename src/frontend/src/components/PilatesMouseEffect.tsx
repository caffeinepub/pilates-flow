import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  radius: number;
  color: string;
  life: number;
  maxLife: number;
  poseIndex: number;
  isPose: boolean;
  breathPhase: number;
}

const COLORS = ["#7c9a7e", "#a8c4a2", "#d4a853", "#c4956a"];
const MAX_PARTICLES = 55;

function drawPose(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  poseIndex: number,
  opacity: number,
) {
  ctx.save();
  ctx.globalAlpha = opacity * 0.6;
  ctx.strokeStyle = "#7c9a7e";
  ctx.fillStyle = "#7c9a7e";
  ctx.lineWidth = 1.2;
  ctx.lineCap = "round";

  const s = 18; // figure scale

  ctx.translate(x, y);

  if (poseIndex === 0) {
    // Standing tall — arms raised overhead
    ctx.beginPath();
    ctx.arc(0, -s * 0.45, s * 0.12, 0, Math.PI * 2);
    ctx.fill();
    // Body
    ctx.beginPath();
    ctx.moveTo(0, -s * 0.33);
    ctx.lineTo(0, s * 0.2);
    ctx.stroke();
    // Arms up
    ctx.beginPath();
    ctx.moveTo(0, -s * 0.15);
    ctx.lineTo(-s * 0.25, -s * 0.45);
    ctx.moveTo(0, -s * 0.15);
    ctx.lineTo(s * 0.25, -s * 0.45);
    ctx.stroke();
    // Legs
    ctx.beginPath();
    ctx.moveTo(0, s * 0.2);
    ctx.lineTo(-s * 0.15, s * 0.5);
    ctx.moveTo(0, s * 0.2);
    ctx.lineTo(s * 0.15, s * 0.5);
    ctx.stroke();
  } else if (poseIndex === 1) {
    // Side bend — body leaning right, left arm arcing over
    ctx.beginPath();
    ctx.arc(0, -s * 0.45, s * 0.12, 0, Math.PI * 2);
    ctx.fill();
    // Body leaning
    ctx.beginPath();
    ctx.moveTo(0, -s * 0.33);
    ctx.lineTo(s * 0.12, s * 0.2);
    ctx.stroke();
    // Left arm arcing over
    ctx.beginPath();
    ctx.moveTo(0, -s * 0.15);
    ctx.quadraticCurveTo(-s * 0.15, -s * 0.55, s * 0.18, -s * 0.38);
    ctx.stroke();
    // Right arm down
    ctx.beginPath();
    ctx.moveTo(0, -s * 0.15);
    ctx.lineTo(s * 0.2, s * 0.0);
    ctx.stroke();
    // Legs
    ctx.beginPath();
    ctx.moveTo(s * 0.12, s * 0.2);
    ctx.lineTo(-s * 0.05, s * 0.5);
    ctx.moveTo(s * 0.12, s * 0.2);
    ctx.lineTo(s * 0.22, s * 0.5);
    ctx.stroke();
  } else if (poseIndex === 2) {
    // Seated forward fold — body bent forward 90°
    ctx.beginPath();
    ctx.arc(-s * 0.25, -s * 0.02, s * 0.1, 0, Math.PI * 2);
    ctx.fill();
    // Torso horizontal
    ctx.beginPath();
    ctx.moveTo(-s * 0.15, 0);
    ctx.lineTo(s * 0.3, 0);
    ctx.stroke();
    // Spine vertical (hip)
    ctx.beginPath();
    ctx.moveTo(s * 0.3, 0);
    ctx.lineTo(s * 0.3, s * 0.35);
    ctx.stroke();
    // Arms reaching forward
    ctx.beginPath();
    ctx.moveTo(-s * 0.05, 0);
    ctx.lineTo(s * 0.45, -s * 0.08);
    ctx.stroke();
    // Legs
    ctx.beginPath();
    ctx.moveTo(s * 0.3, s * 0.35);
    ctx.lineTo(-s * 0.05, s * 0.35);
    ctx.stroke();
  } else {
    // Bridge pose — hips lifted, shoulders and feet on ground
    // Shoulders on ground
    ctx.beginPath();
    ctx.moveTo(-s * 0.35, s * 0.3);
    ctx.lineTo(-s * 0.15, s * 0.3);
    ctx.stroke();
    // Head
    ctx.beginPath();
    ctx.arc(-s * 0.42, s * 0.22, s * 0.1, 0, Math.PI * 2);
    ctx.fill();
    // Curved back up to hips
    ctx.beginPath();
    ctx.moveTo(-s * 0.15, s * 0.3);
    ctx.quadraticCurveTo(0, -s * 0.2, s * 0.2, s * 0.3);
    ctx.stroke();
    // Feet/legs
    ctx.beginPath();
    ctx.moveTo(s * 0.2, s * 0.3);
    ctx.lineTo(s * 0.35, s * 0.3);
    ctx.stroke();
  }

  ctx.restore();
}

export default function PilatesMouseEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const frameRef = useRef(0);

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

    const onMouseMove = (e: MouseEvent) => {
      frameRef.current++;
      const isPose = frameRef.current % 8 === 0;
      const poseIndex = Math.floor(frameRef.current / 8) % 4;
      const colorIndex = particlesRef.current.length % COLORS.length;
      const maxLife = 60;

      const particle: Particle = {
        x: e.clientX,
        y: e.clientY,
        vx: (Math.random() - 0.5) * 0.6,
        vy: -Math.random() * 0.8 - 0.2,
        opacity: 1,
        radius: isPose ? 2.5 : Math.random() * 3 + 2,
        color: COLORS[colorIndex],
        life: maxLife,
        maxLife,
        poseIndex,
        isPose,
        breathPhase: Math.random() * Math.PI * 2,
      };

      particlesRef.current.push(particle);
      if (particlesRef.current.length > MAX_PARTICLES) {
        particlesRef.current.shift();
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const now = performance.now();

      particlesRef.current = particlesRef.current.filter((p) => p.life > 0);

      for (const p of particlesRef.current) {
        p.life--;
        p.x += p.vx;
        p.y += p.vy;
        p.opacity = p.life / p.maxLife;

        const breathScale = 1 + 0.12 * Math.sin(now * 0.003 + p.breathPhase);
        const r = p.radius * breathScale;

        if (p.isPose) {
          drawPose(ctx, p.x, p.y, p.poseIndex, p.opacity);
        } else {
          ctx.save();
          ctx.globalAlpha = p.opacity * 0.85;
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}
