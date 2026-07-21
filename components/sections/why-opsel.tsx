'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '../section-wrapper';
import { SectionHeader } from '../section-header';
import { Shield, Clock, Award, Headphones, Truck, Sparkles } from 'lucide-react';

const reasons = [
  { icon: Award, title: 'Authorized Dealer', desc: 'Officially authorized for Apple, Samsung, Google & more.' },
  { icon: Shield, title: 'Genuine Warranty', desc: 'Every device backed by manufacturer warranty + our guarantee.' },
  { icon: Clock, title: 'Same-Day Repairs', desc: 'Most repairs completed within 60 minutes. No appointment needed.' },
  { icon: Headphones, title: 'After-Sales Support', desc: 'Lifetime technical support. We don\'t disappear after the sale.' },
  { icon: Truck, title: 'Island-Wide Delivery', desc: 'Free delivery across Sri Lanka. Next-day in Colombo area.' },
  { icon: Sparkles, title: 'Premium Experience', desc: 'A store that feels like the future. Because it is.' },
];

export function WhyOpselSection() {
  return (
    <SectionWrapper id="why">
      <SectionHeader
        label="Why Opsel"
        title={<>Not Just a Store. <span className="gradient-text">A Standard.</span></>}
        description="Six reasons why Sri Lanka trusts Opsel with their most important devices."
      />

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative rounded-2xl glass-strong p-6 overflow-hidden holo-border"
          >
            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-cyan-400/10 group-hover:bg-cyan-400/20 blur-3xl transition-all" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <r.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="font-bold text-lg mb-2">{r.title}</h3>
              <p className="text-sm text-white/40">{r.desc}</p>
            </div>

            <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
