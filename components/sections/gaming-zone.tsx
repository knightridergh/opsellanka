'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '../section-wrapper';
import { SectionHeader } from '../section-header';
import { Gamepad2, Cpu, Fan, Thermometer, Zap, Trophy } from 'lucide-react';

const gamingPhones = [
  { name: 'ASUS ROG Phone 8 Pro', chip: 'Snapdragon 8 Gen 3', refresh: '165Hz', cooling: 'Active AeroActive', price: 'LKR 285,000' },
  { name: 'RedMagic 9 Pro', chip: 'Snapdragon 8 Gen 3', refresh: '120Hz', cooling: 'ICE 13.0', price: 'LKR 195,000' },
  { name: 'OnePlus 12R', chip: 'Snapdragon 8 Gen 2', refresh: '120Hz', cooling: 'Vapor Chamber', price: 'LKR 145,000' },
  { name: 'Poco F6 Pro', chip: 'Snapdragon 8 Gen 2', refresh: '120Hz', cooling: 'LiquidCool 4.0', price: 'LKR 115,000' },
];

const features = [
  { icon: Zap, label: '100W+ Fast Charge' },
  { icon: Fan, label: 'Active Cooling' },
  { icon: Cpu, label: 'Snapdragon Elite' },
  { icon: Trophy, label: 'Esports Ready' },
];

export function GamingZoneSection() {
  return (
    <SectionWrapper id="gaming">
      <SectionHeader
        label="Gaming Zone"
        title={<>Enter the <span className="gradient-text-cyan">Arena</span></>}
        description="Phones built for victory. No lag. No limits."
      />

      <div className="max-w-6xl w-full">
        {/* Features bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-red-500/20"
            >
              <f.icon className="w-4 h-4 text-red-400" />
              <span className="text-sm text-white/70">{f.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gamingPhones.map((phone, i) => (
            <motion.div
              key={phone.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              data-cursor="charge"
              className="group relative rounded-2xl glass-strong p-6 overflow-hidden"
            >
              {/* Red glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-red-500/10 group-hover:bg-red-500/20 blur-3xl transition-all" />

              <div className="relative z-10 flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">{phone.name}</h3>
                  <p className="text-sm text-white/40">{phone.chip}</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center glow-cyan">
                  <Gamepad2 className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="relative z-10 grid grid-cols-3 gap-3 mb-4">
                <div className="rounded-lg glass p-3 text-center">
                  <Zap className="w-4 h-4 text-red-400 mx-auto mb-1" />
                  <div className="text-xs text-white/40">Refresh</div>
                  <div className="text-sm font-bold">{phone.refresh}</div>
                </div>
                <div className="rounded-lg glass p-3 text-center">
                  <Fan className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                  <div className="text-xs text-white/40">Cooling</div>
                  <div className="text-xs font-bold truncate">{phone.cooling}</div>
                </div>
                <div className="rounded-lg glass p-3 text-center">
                  <Thermometer className="w-4 h-4 text-orange-400 mx-auto mb-1" />
                  <div className="text-xs text-white/40">Temp</div>
                  <div className="text-sm font-bold">Low</div>
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-lg font-bold text-red-400">{phone.price}</span>
                <button className="text-sm text-white/60 hover:text-white flex items-center gap-1">
                  Configure →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
