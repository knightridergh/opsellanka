'use client';

import { motion } from 'framer-motion';
import { Zap, ArrowUp } from 'lucide-react';

const footerLinks = {
  Devices: ['iPhone', 'Samsung Galaxy', 'Google Pixel', 'Nothing Phone', 'OnePlus', 'Xiaomi'],
  Services: ['Repairs', 'Trade-in', 'Accessories', 'After-Sales Support', 'Bulk Orders'],
  Company: ['About Opsel', 'Visit Store', 'Reviews', 'Careers', 'Contact'],
};

export function Footer() {
  return (
    <footer className="relative py-20 px-6 border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-cyan-400/5 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Ready to <span className="gradient-text">Upgrade?</span>
          </h2>
          <p className="text-white/40 mb-8 max-w-xl mx-auto">
            Visit us in Malabe or browse our collection. The future is waiting.
          </p>
          <a
            href="#hero"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-strong hover:bg-white/10 transition-all"
          >
            <ArrowUp className="w-4 h-4" /> Back to Top
          </a>
        </motion.div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#hero" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" fill="white" />
              </div>
              <span className="font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                OPSEL<span className="text-cyan-400">.</span>
              </span>
            </a>
            <p className="text-sm text-white/40">Sri Lanka's Premium Mobile Destination. Malabe.</p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold mb-4 text-white/60">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/40 hover:text-cyan-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 font-mono">
            © {new Date().getFullYear()} OPSEL LANKA · MALABE · SRI LANKA
          </p>
          <p className="text-xs text-white/30">
            Experience Tomorrow. Today.
          </p>
        </div>
      </div>
    </footer>
  );
}
