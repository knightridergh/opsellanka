'use client';

import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [variant, setVariant] = useState<'default' | 'hover' | 'charge' | 'lens'>('default');
  const [clicking, setClicking] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) return;

    let raf = 0;
    let mouseX = -100, mouseY = -100;
    let trailX = -100, trailY = -100;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement;
      if (target.closest('[data-cursor="charge"]')) setVariant('charge');
      else if (target.closest('[data-cursor="lens"]')) setVariant('lens');
      else if (target.closest('a, button, [role="button"]')) setVariant('hover');
      else setVariant('default');
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const animate = () => {
      trailX += (mouseX - trailX) * 0.18;
      trailY += (mouseY - trailY) * 0.18;
      setPos({ x: mouseX, y: mouseY });
      setTrail({ x: trailX, y: trailY });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, [visible]);

  if (!visible) return null;

  const sizes = {
    default: 12,
    hover: 48,
    charge: 36,
    lens: 40,
  };

  const size = sizes[variant] * (clicking ? 0.8 : 1);

  return (
    <>
      {/* Trail glow */}
      <div
        className="pointer-events-none fixed z-[9998] rounded-full"
        style={{
          left: trail.x,
          top: trail.y,
          width: 60,
          height: 60,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, hsl(199 100% 50% / 0.15), transparent 70%)',
          transition: 'width 0.3s, height 0.3s',
        }}
      />
      {/* Main cursor */}
      <div
        className="pointer-events-none fixed z-[9999] mix-blend-difference"
        style={{
          left: pos.x,
          top: pos.y,
          width: size,
          height: size,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.25s cubic-bezier(0.34,1.56,0.64,1), height 0.25s cubic-bezier(0.34,1.56,0.64,1)',
        }}
      >
        {variant === 'default' && (
          <div className="w-full h-full rounded-full bg-white" />
        )}
        {variant === 'hover' && (
          <div className="w-full h-full rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
          </div>
        )}
        {variant === 'charge' && (
          <svg viewBox="0 0 24 24" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M13 2L4.09 12.97a1 1 0 0 0 .77 1.64H11l-1 7 9-11.1a1 1 0 0 0-.77-1.64H12l1-7z" fill="currentColor" />
          </svg>
        )}
        {variant === 'lens' && (
          <svg viewBox="0 0 24 24" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.3" />
            <line x1="12" y1="3" x2="12" y2="6" />
            <line x1="12" y1="18" x2="12" y2="21" />
            <line x1="3" y1="12" x2="6" y2="12" />
            <line x1="18" y1="12" x2="21" y2="12" />
          </svg>
        )}
      </div>
    </>
  );
}
