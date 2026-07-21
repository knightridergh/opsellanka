'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionHeaderProps {
  label: string;
  title: ReactNode;
  description?: string;
  align?: 'center' | 'left';
}

export function SectionHeader({ label, title, description, align = 'center' }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className={`flex items-center gap-3 mb-4 ${align === 'center' ? 'justify-center' : ''}`}
      >
        <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400" />
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400/80">{label}</span>
        <div className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-4xl md:text-6xl font-bold tracking-tight text-balance"
        style={{ fontFamily: 'var(--font-display), sans-serif' }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-white/50 text-balance"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
