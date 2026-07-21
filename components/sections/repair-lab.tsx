'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SectionWrapper } from '../section-wrapper';
import { SectionHeader } from '../section-header';
import { Wrench, Cpu, Scan, Zap, CheckCircle, Clock } from 'lucide-react';

const repairServices = [
  { name: 'Screen Replacement', time: '30 min', price: 'from LKR 8,000', icon: Scan },
  { name: 'Battery Replacement', time: '20 min', price: 'from LKR 5,000', icon: Zap },
  { name: 'Camera Repair', time: '45 min', price: 'from LKR 12,000', icon: CheckCircle },
  { name: 'Water Damage', time: '24 hrs', price: 'Diagnostic first', icon: Cpu },
  { name: 'Charging Port', time: '30 min', price: 'from LKR 4,500', icon: Wrench },
  { name: 'Logic Board', time: '48 hrs', price: 'Diagnostic first', icon: Cpu },
];

export function RepairLabSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Exploded view layers
  const screenY = useTransform(scrollYProgress, [0.3, 0.7], [0, -80]);
  const bodyY = useTransform(scrollYProgress, [0.3, 0.7], [0, 0]);
  const batteryY = useTransform(scrollYProgress, [0.3, 0.7], [0, 40]);
  const boardY = useTransform(scrollYProgress, [0.3, 0.7], [0, 80]);
  const backY = useTransform(scrollYProgress, [0.3, 0.7], [0, 120]);

  return (
    <SectionWrapper id="repair">
      <SectionHeader
        label="Repair Lab"
        title={<>The <span className="gradient-text">Repair</span> Lab</>}
        description="Watch your phone come apart — and come back better. Microscopic precision. Laser accuracy."
      />

      <div ref={containerRef} className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Exploded phone visual */}
        <div className="relative h-[500px] flex items-center justify-center perspective-container">
          {/* Scanner line */}
          <motion.div
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            style={{ top: '50%' }}
            animate={{ top: ['10%', '90%', '10%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Repair robots (dots) */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-cyan-400"
              style={{ boxShadow: '0 0 20px #00ccff' }}
              animate={{
                x: [Math.cos(i) * 150, Math.cos(i + 2) * 150, Math.cos(i) * 150],
                y: [Math.sin(i) * 100, Math.sin(i + 2) * 100, Math.sin(i) * 100],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}

          {/* Exploded layers */}
          <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
            {/* Screen */}
            <motion.div
              style={{ y: screenY }}
              className="absolute left-1/2 -translate-x-1/2 w-32 h-56 rounded-[2rem] glass-strong border border-cyan-400/30"
            >
              <div className="absolute inset-1 rounded-[1.7rem] bg-gradient-to-br from-cyan-500/20 to-violet-500/20" />
            </motion.div>

            {/* Body frame */}
            <motion.div
              style={{ y: bodyY }}
              className="absolute left-1/2 -translate-x-1/2 w-32 h-56 rounded-[2rem] border-2 border-white/20"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-black/40 backdrop-blur-sm" />
            </motion.div>

            {/* Battery */}
            <motion.div
              style={{ y: batteryY }}
              className="absolute left-1/2 -translate-x-1/2 w-24 h-32 rounded-xl bg-gradient-to-b from-green-500/30 to-emerald-700/30 border border-green-400/30"
            >
              <div className="absolute top-2 left-2 text-[8px] font-mono text-green-400">BATT</div>
            </motion.div>

            {/* Logic board */}
            <motion.div
              style={{ y: boardY }}
              className="absolute left-1/2 -translate-x-1/2 w-28 h-20 rounded-lg bg-gradient-to-r from-cyan-900/40 to-violet-900/40 border border-cyan-400/30"
            >
              <div className="absolute inset-2 grid grid-cols-4 gap-1">
                {Array.from({ length: 8 }).map((_, j) => (
                  <div key={j} className="rounded-sm bg-cyan-400/20 animate-pulse" style={{ animationDelay: `${j * 0.1}s` }} />
                ))}
              </div>
            </motion.div>

            {/* Back glass */}
            <motion.div
              style={{ y: backY }}
              className="absolute left-1/2 -translate-x-1/2 w-32 h-56 rounded-[2rem] glass border border-violet-400/20"
            >
              <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-black/60 grid grid-cols-2 gap-1 p-1">
                {[0, 1, 2, 3].map((j) => (
                  <div key={j} className="rounded-full bg-violet-900/50 ring-1 ring-violet-400/30" />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Labels */}
          <div className="absolute top-8 right-8 text-xs font-mono text-cyan-400/60">SCREEN</div>
          <div className="absolute bottom-8 left-8 text-xs font-mono text-violet-400/60">BACK GLASS</div>
        </div>

        {/* Services list */}
        <div className="space-y-3">
          {repairServices.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              data-cursor="charge"
              className="group flex items-center gap-4 p-4 rounded-2xl glass hover:glass-strong transition-all border border-white/5 hover:border-cyan-400/20"
            >
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:scale-110 transition-transform">
                <service.icon className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{service.name}</h3>
                <div className="flex items-center gap-3 text-sm text-white/40">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {service.time}</span>
                  <span>·</span>
                  <span>{service.price}</span>
                </div>
              </div>
              <motion.div
                className="w-8 h-8 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100"
                whileHover={{ rotate: 45 }}
              >
                →
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
