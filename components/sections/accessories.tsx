'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '../section-wrapper';
import { SectionHeader } from '../section-header';
import { Battery, Headphones, Watch, Cable, Gamepad2, Smartphone, Mouse } from 'lucide-react';

const accessories = [
  { name: 'Power Banks', desc: '20,000mAh · 100W', icon: Battery, color: '#00ccff', speed: 1 },
  { name: 'Wireless Earbuds', desc: 'ANC · Spatial Audio', icon: Headphones, color: '#9933ff', speed: 0.8 },
  { name: 'Smart Watches', desc: 'AMOLED · GPS', icon: Watch, color: '#ff00aa', speed: 1.2 },
  { name: 'Chargers', desc: 'GaN · 100W Fast', icon: Cable, color: '#00ff99', speed: 0.9 },
  { name: 'Gaming Controllers', desc: 'Pro triggers · RGB', icon: Gamepad2, color: '#ff6600', speed: 1.1 },
  { name: 'Phone Cases', desc: 'Aramid · MagSafe', icon: Smartphone, color: '#ffcc00', speed: 0.7 },
  { name: 'Watch Straps', desc: 'Titanium · Sport', icon: Watch, color: '#00ddff', speed: 1.3 },
  { name: 'Wireless Mice', desc: '8K polling · Ultralight', icon: Mouse, color: '#ff44ff', speed: 1 },
];

export function AccessoriesSection() {
  return (
    <SectionWrapper id="accessories">
      <SectionHeader
        label="Accessories"
        title={<>The <span className="gradient-text">Conveyor</span> of Power</>}
        description="An infinite stream of premium accessories — floating, glowing, ready."
      />

      {/* Infinite conveyor */}
      <div className="max-w-7xl w-full overflow-hidden relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#03030a] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#03030a] to-transparent pointer-events-none" />

        <motion.div
          className="flex gap-6"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {[...accessories, ...accessories].map((item, i) => (
            <div
              key={i}
              data-cursor="charge"
              className="flex-shrink-0 w-64 h-80 rounded-3xl glass-strong p-6 flex flex-col items-center justify-center relative overflow-hidden group holo-border"
            >
              <div
                className="absolute -inset-10 opacity-10 group-hover:opacity-30 transition-opacity blur-3xl"
                style={{ background: item.color }}
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3 / item.speed, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <div
                  className="w-20 h-20 rounded-2xl glass flex items-center justify-center mb-6"
                  style={{ color: item.color, boxShadow: `0 0 30px ${item.color}40` }}
                >
                  <item.icon className="w-10 h-10" />
                </div>
              </motion.div>
              <h3 className="relative z-10 font-bold text-lg">{item.name}</h3>
              <p className="relative z-10 text-sm text-white/40 mt-1">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
