'use client';

import { useEffect, useRef } from 'react';

export function GlobalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.scale(dpr, dpr);

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const particleCount = isMobile ? 40 : 120;
    const binaryCount = isMobile ? 15 : 40;

    // Particles
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 0.5,
      hue: Math.random() > 0.5 ? 199 : 270,
      alpha: Math.random() * 0.5 + 0.2,
      pulse: Math.random() * Math.PI * 2,
    }));

    // Binary numbers
    const binaries = Array.from({ length: binaryCount }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vy: Math.random() * 0.5 + 0.2,
      text: Math.random() > 0.5 ? '1' : '0',
      alpha: Math.random() * 0.15 + 0.05,
      size: Math.random() * 8 + 8,
    }));

    // Circuit nodes
    const nodes = Array.from({ length: isMobile ? 8 : 20 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      pulse: Math.random() * Math.PI * 2,
    }));

    let raf = 0;
    let t = 0;

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, w, h);

      t += 0.005;

      // Mouse reactive gradient
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const grad = ctx.createRadialGradient(mx, my, 0, mx, my, 400);
      grad.addColorStop(0, 'rgba(0, 180, 255, 0.06)');
      grad.addColorStop(0.5, 'rgba(120, 80, 255, 0.03)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Circuit connections
      ctx.strokeStyle = 'rgba(0, 200, 255, 0.08)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            ctx.globalAlpha = (1 - dist / 200) * 0.3;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      // Circuit nodes
      nodes.forEach((n) => {
        n.pulse += 0.02;
        const s = 2 + Math.sin(n.pulse) * 1;
        ctx.fillStyle = `rgba(0, 200, 255, ${0.3 + Math.sin(n.pulse) * 0.2})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, s, 0, Math.PI * 2);
        ctx.fill();
      });

      // Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.02;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        const a = p.alpha * (0.5 + Math.sin(p.pulse) * 0.5);
        ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${a})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Glow
        ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${a * 0.2})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fill();
      });

      // Binary rain
      binaries.forEach((b) => {
        b.y += b.vy;
        if (b.y > h + 20) {
          b.y = -20;
          b.x = Math.random() * w;
        }
        ctx.font = `${b.size}px monospace`;
        ctx.fillStyle = `rgba(0, 255, 200, ${b.alpha})`;
        ctx.fillText(b.text, b.x, b.y);
      });

      raf = requestAnimationFrame(draw);
    }
    draw();

    function onResize() {
      if (!canvas || !ctx) return;
      w = window.innerWidth;
      h = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.scale(dpr, dpr);
    }

    function onMouse(e: MouseEvent) {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    }

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouse);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[#03030a]" />
      {/* Animated mesh gradient */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse at 20% 30%, rgba(0, 120, 255, 0.12), transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(120, 60, 255, 0.10), transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(0, 200, 255, 0.05), transparent 60%)',
        }}
      />
      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-50" />
      {/* Canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0" />
      {/* Volumetric fog */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 100%, rgba(0, 100, 200, 0.08), transparent 50%)',
        }}
      />
    </div>
  );
}
