'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '../section-wrapper';
import { SectionHeader } from '../section-header';
import { Apple, Watch, Headphones, Monitor, Cpu } from 'lucide-react';

const ecosystem = [
  { name: 'iPhone 15 Pro', desc: 'Titanium. Action button. A17 Pro.', icon: Apple, color: '#fff' },
  { name: 'Apple Watch Ultra 2', desc: 'Titanium adventure.', icon: Watch, color: '#ff9500' },
  { name: 'AirPods Pro 2', desc: 'Adaptive Audio.', icon: Headphones, color: '#5ac8fa' },
  { name: 'MacBook Pro M3', desc: 'Pro power, portability.', icon: Monitor, color: '#34c759' },
  { name: 'Vision Pro', desc: 'Spatial computing.', icon: Cpu, color: '#bf5af2' },
  { name: 'AirPods Max', desc: 'High-fidelity audio.', icon: Headphones, color: '#ff375f' },
];

export function AppleUniverseSection() {
  return (
    <SectionWrapper id="apple">
      <SectionHeader
        label="Apple Universe"
        title={<>The <span className="gradient-text">Ecosystem</span> Reimagined</>}
        description="Every Apple device, working in perfect harmony. Available now at Opsel."
      />

      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {ecosystem.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              data-cursor="lens"
              className="group relative rounded-2xl glass-strong p-6 overflow-hidden"
            >
              <div
                className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-10 group-hover:opacity-30 transition-opacity blur-2xl"
                style={{ background: item.color }}
              />
              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ color: item.color }}
                >
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-1">{item.name}</h3>
                <p className="text-sm text-white/40">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
