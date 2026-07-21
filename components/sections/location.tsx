'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '../section-wrapper';
import { SectionHeader } from '../section-header';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: 'Visit', value: 'Opsel Lanka, Malabe, Sri Lanka' },
  { icon: Phone, label: 'Call', value: '+94 11 234 5678' },
  { icon: Mail, label: 'Email', value: 'hello@opsel.lk' },
  { icon: Clock, label: 'Hours', value: 'Mon–Sat: 9AM – 8PM · Sun: 10AM – 6PM' },
];

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: MessageCircle, label: 'WhatsApp', href: '#' },
];

export function LocationSection() {
  return (
    <SectionWrapper id="location">
      <SectionHeader
        label="Location"
        title={<>Find Us in <span className="gradient-text">Malabe</span></>}
        description="The future of mobile retail is closer than you think."
      />

      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Map placeholder with stylized look */}
          <div className="relative rounded-3xl glass-strong p-1 overflow-hidden holo-border min-h-[300px]">
            <div className="relative w-full h-full rounded-[calc(0.75rem-1px)] overflow-hidden bg-[#050510]">
              {/* Stylized map grid */}
              <div className="absolute inset-0 cyber-grid opacity-40" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(ellipse at 50% 50%, rgba(0,200,255,0.15), transparent 60%)',
                }}
              />
              {/* Location pin */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-cyan-400" style={{ boxShadow: '0 0 30px #00ccff' }} />
                  <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-ping" />
                </div>
              </motion.div>
              {/* Road lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none">
                <path d="M0 150 L400 150" stroke="rgba(0,200,255,0.2)" strokeWidth="2" />
                <path d="M200 0 L200 300" stroke="rgba(0,200,255,0.2)" strokeWidth="2" />
                <path d="M0 80 Q200 120 400 80" stroke="rgba(120,80,255,0.15)" strokeWidth="1.5" />
                <path d="M0 220 Q200 180 400 220" stroke="rgba(120,80,255,0.15)" strokeWidth="1.5" />
              </svg>
              <div className="absolute bottom-4 left-4 text-xs font-mono text-cyan-400/60">
                6.9042° N, 79.9553° E
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-2xl glass hover:glass-strong transition-all"
              >
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/40 mb-1">{info.label}</div>
                  <div className="text-sm font-medium">{info.value}</div>
                </div>
              </motion.div>
            ))}

            {/* Socials */}
            <div className="flex gap-3 pt-2">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="w-12 h-12 rounded-xl glass-strong flex items-center justify-center hover:bg-cyan-400/10 transition-all"
                  aria-label={s.label}
                >
                  <s.icon className="w-5 h-5 text-white/70" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
