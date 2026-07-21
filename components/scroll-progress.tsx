'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 origin-left z-[60]"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, hsl(199 100% 50%), hsl(270 100% 65%), hsl(330 100% 60%))',
      }}
    />
  );
}
