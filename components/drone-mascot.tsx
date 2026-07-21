'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

// Floating AI drone mascot that appears at random intervals
export function DroneMascot() {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 80, y: 70 });

  useEffect(() => {
    const show = () => {
      setVisible(true);
      setPosition({
        x: 10 + Math.random() * 70,
        y: 15 + Math.random() * 60,
      });
      setTimeout(() => setVisible(false), 6000);
    };

    const interval = setInterval(show, 15000);
    setTimeout(show, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{ opacity: 1, scale: 1, x: 0, y: [0, -15, 0] }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 },
            y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="fixed z-40 pointer-events-none"
          style={{ left: `${position.x}%`, top: `${position.y}%` }}
        >
          <div className="relative">
            {/* Drone body */}
            <svg width="60" height="50" viewBox="0 0 60 50" fill="none">
              {/* Propellers */}
              <motion.circle
                cx="10" cy="8" r="12" fill="none" stroke="rgba(0,200,255,0.2)" strokeWidth="1"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.2, repeat: Infinity, ease: 'linear' }}
                style={{ transformOrigin: '10px 8px' }}
              />
              <motion.circle
                cx="50" cy="8" r="12" fill="none" stroke="rgba(0,200,255,0.2)" strokeWidth="1"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.2, repeat: Infinity, ease: 'linear' }}
                style={{ transformOrigin: '50px 8px' }}
              />
              {/* Body */}
              <ellipse cx="30" cy="28" rx="14" ry="10" fill="#0a0a1a" stroke="rgba(0,200,255,0.5)" strokeWidth="1.5" />
              {/* Eye */}
              <circle cx="30" cy="28" r="4" fill="#00ccff">
                <animate attributeName="r" values="4;3;4" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="30" cy="28" r="2" fill="#fff" />
              {/* Arms */}
              <line x1="18" y1="22" x2="10" y2="8" stroke="rgba(0,200,255,0.4)" strokeWidth="1.5" />
              <line x1="42" y1="22" x2="50" y2="8" stroke="rgba(0,200,255,0.4)" strokeWidth="1.5" />
              {/* Package */}
              <rect x="25" y="36" width="10" height="8" rx="1" fill="rgba(120,80,255,0.3)" stroke="rgba(120,80,255,0.5)" strokeWidth="1" />
            </svg>
            {/* Speech bubble */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 rounded-full glass-strong text-xs text-cyan-300 border border-cyan-400/20"
            >
              Delivering your iPhone...
            </motion.div>
            {/* Glow */}
            <div className="absolute -inset-4 rounded-full bg-cyan-400/10 blur-xl -z-10" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
