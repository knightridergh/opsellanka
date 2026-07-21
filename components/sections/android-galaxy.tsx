'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '../section-wrapper';
import { SectionHeader } from '../section-header';
import { Smartphone, Zap, Camera, Gamepad2, Battery, Layers } from 'lucide-react';

const androidBrands = [
  { name: 'Samsung', tagline: 'Galaxy AI', models: 'S24 Ultra · Z Fold 5 · A55', color: 'from-blue-500 to-violet-600', icon: Smartphone },
  { name: 'Google Pixel', tagline: 'Pure Android', models: '8 Pro · 8 · 7a', color: 'from-cyan-400 to-blue-500', icon: Camera },
  { name: 'Nothing', tagline: 'Glyph Interface', models: 'Phone (2) · (2a) · (1)', color: 'from-white to-gray-400', icon: Layers },
  { name: 'OnePlus', tagline: 'Never Settle', models: '12 · 12R · Nord 3', color: 'from-red-500 to-orange-500', icon: Zap },
  { name: 'Xiaomi', tagline: 'Leica Optics', models: '14 Pro · 14 · 13T', color: 'from-orange-400 to-amber-500', icon: Camera },
  { name: 'Redmi', tagline: 'Flagship Value', models: 'Note 13 Pro · 13 · 12T', color: 'from-amber-400 to-red-500', icon: Battery },
  { name: 'Honor', tagline: 'Beyond Boundaries', models: 'Magic 6 · 100 Pro · 90', color: 'from-emerald-400 to-teal-500', icon: Smartphone },
  { name: 'ASUS ROG', tagline: 'Gaming Beast', models: 'Phone 8 · 7 · 6', color: 'from-red-600 to-pink-600', icon: Gamepad2 },
];

export function AndroidGalaxySection() {
  return (
    <SectionWrapper id="android">
      <SectionHeader
        label="Android Galaxy"
        title={<>The <span className="gradient-text-cyan">Open</span> Universe</>}
        description="From Samsung to Nothing — the entire Android world, one destination."
      />

      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {androidBrands.map((brand, i) => (
          <motion.div
            key={brand.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -8 }}
            data-cursor="lens"
            className="group relative rounded-2xl glass p-5 overflow-hidden holo-border"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

            <div className="relative z-10">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${brand.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <brand.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-1">{brand.name}</h3>
              <p className="text-xs text-cyan-400 mb-2 font-mono uppercase tracking-wider">{brand.tagline}</p>
              <p className="text-xs text-white/40">{brand.models}</p>
            </div>

            {/* Hover line */}
            <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
