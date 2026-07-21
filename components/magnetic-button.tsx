'use client';

import { useRef, useState, type ReactNode, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface MagneticButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  onClick?: () => void;
  cursorVariant?: 'default' | 'charge' | 'lens';
}

export function MagneticButton({
  children,
  variant = 'primary',
  className = '',
  onClick,
  cursorVariant = 'default',
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 20 });
  const sy = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMove = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    x.set(dx * 0.3);
    y.set(dy * 0.3);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
    setHovering(false);
  };

  const styles = {
    primary: 'bg-white text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]',
    secondary: 'glass-strong text-white hover:bg-white/10 border border-white/20',
    ghost: 'text-white/70 hover:text-white',
  };

  return (
    <motion.button
      ref={ref}
      data-cursor={cursorVariant}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onMouseEnter={() => setHovering(true)}
      onClick={onClick}
      style={{ x: sx, y: sy }}
      className={`relative px-8 py-4 rounded-full font-medium text-sm tracking-wide overflow-hidden transition-all duration-300 ${styles[variant]} ${className}`}
    >
      {/* Ripple effect */}
      {hovering && (
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            background:
              variant === 'primary'
                ? 'radial-gradient(circle, rgba(0,200,255,0.3), transparent)'
                : 'radial-gradient(circle, rgba(120,80,255,0.3), transparent)',
          }}
        />
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}
