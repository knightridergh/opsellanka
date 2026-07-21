'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { MagneticButton } from '@/components/magnetic-button';
import { ArrowRight, Wrench, Repeat } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroPhone3D = dynamic(() => import('@/components/hero-phone-3d').then((m) => m.HeroPhone3D), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-32 h-64 rounded-3xl glass animate-pulse" />
    </div>
  ),
});

export function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* 3D Phone */}
      <div className="absolute inset-0 z-0">
        <HeroPhone3D />
      </div>

      {/* Holographic light beams */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full"
          style={{
            background: 'linear-gradient(180deg, transparent, rgba(0,200,255,0.3), transparent)',
            filter: 'blur(40px)',
          }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 pt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-cyan-400/20">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-300">Malabe · Sri Lanka</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.95] text-balance"
          style={{ fontFamily: 'var(--font-display), sans-serif' }}
        >
          <span className="gradient-text">Experience</span>
          <br />
          <span className="text-white">Tomorrow. </span>
          <span className="gradient-text-cyan">Today.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-lg md:text-xl text-white/50 max-w-xl text-balance"
        >
          Sri Lanka&apos;s Premium Mobile Destination
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <MagneticButton variant="primary" cursorVariant="charge">
            Explore Devices <ArrowRight className="w-4 h-4" />
          </MagneticButton>
          <MagneticButton variant="secondary" cursorVariant="lens">
            <Wrench className="w-4 h-4" /> Book Repair
          </MagneticButton>
          <MagneticButton variant="ghost">
            <Repeat className="w-4 h-4" /> Trade Your Phone
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/30">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-cyan-400/50 to-transparent animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}
