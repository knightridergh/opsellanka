'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '../section-wrapper';
import { SectionHeader } from '../section-header';
import { Repeat, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  { step: '01', title: 'Get a Quote', desc: 'Tell us your device & condition. Instant valuation.' },
  { step: '02', title: 'Visit Store', desc: 'Bring it in. We inspect on the spot.' },
  { step: '03', title: 'Get Paid', desc: 'Cash or store credit. Your choice.' },
  { step: '04', title: 'Upgrade', desc: 'Walk out with something better.' },
];

const tradeValues = [
  { device: 'iPhone 14 Pro', value: 'LKR 145,000' },
  { device: 'Galaxy S23 Ultra', value: 'LKR 125,000' },
  { device: 'Pixel 7 Pro', value: 'LKR 95,000' },
  { device: 'OnePlus 11', value: 'LKR 78,000' },
];

export function TradeInSection() {
  return (
    <SectionWrapper id="tradein">
      <SectionHeader
        label="Trade-in"
        title={<>Your Old Phone. <span className="gradient-text-cyan">New Value.</span></>}
        description="Turn yesterday's flagship into today's upgrade. Instant valuation. Zero hassle."
      />

      <div className="max-w-6xl w-full">
        {/* Steps */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl glass p-6 text-center group"
            >
              <div className="text-3xl font-bold gradient-text-cyan mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                {s.step}
              </div>
              <h3 className="font-semibold mb-1">{s.title}</h3>
              <p className="text-xs text-white/40">{s.desc}</p>
              {i < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-2 text-cyan-400/30">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Trade values */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl glass-strong p-8 holo-border"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold">Current Trade-In Values</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tradeValues.map((v, i) => (
              <motion.div
                key={v.device}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 rounded-xl glass border border-white/5"
              >
                <div className="text-sm text-white/40 mb-1">{v.device}</div>
                <div className="text-lg font-bold gradient-text-cyan">{v.value}</div>
                <div className="flex items-center gap-1 mt-2 text-xs text-green-400">
                  <CheckCircle className="w-3 h-3" /> Verified
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/50">Ready to trade? Get your instant quote now.</p>
            <button className="px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all flex items-center gap-2">
              <Repeat className="w-4 h-4" /> Get Quote
            </button>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
