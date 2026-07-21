'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '../section-wrapper';
import { SectionHeader } from '../section-header';
import { Smartphone, Cpu, Camera, Battery, Zap, Star } from 'lucide-react';

const phones = [
  { brand: 'Apple', model: 'iPhone 15 Pro Max', tag: 'Titanium', color: 'from-gray-300 to-gray-600', price: 'LKR 289,000', specs: { chip: 'A17 Pro', camera: '48MP', battery: '29h', display: '6.7"' } },
  { brand: 'Samsung', model: 'Galaxy S24 Ultra', tag: 'AI Phone', color: 'from-violet-400 to-blue-600', price: 'LKR 245,000', specs: { chip: 'Snapdragon 8 Gen 3', camera: '200MP', battery: '30h', display: '6.8"' } },
  { brand: 'Google', model: 'Pixel 8 Pro', tag: 'Pure Android', color: 'from-blue-300 to-cyan-500', price: 'LKR 198,000', specs: { chip: 'Tensor G3', camera: '50MP', battery: '24h', display: '6.7"' } },
  { brand: 'Nothing', model: 'Phone (2)', tag: 'Glyph Interface', color: 'from-white to-gray-400', price: 'LKR 165,000', specs: { chip: 'Snapdragon 8+', camera: '50MP', battery: '22h', display: '6.7"' } },
  { brand: 'OnePlus', model: '12R', tag: 'Flagship Killer', color: 'from-red-400 to-orange-500', price: 'LKR 145,000', specs: { chip: 'Snapdragon 8 Gen 2', camera: '50MP', battery: '28h', display: '6.78"' } },
  { brand: 'Xiaomi', model: '14 Pro', tag: 'Leica Optics', color: 'from-orange-400 to-amber-500', price: 'LKR 175,000', specs: { chip: 'Snapdragon 8 Gen 3', camera: '50MP', battery: '26h', display: '6.73"' } },
];

export function FlagshipsSection() {
  return (
    <SectionWrapper id="flagships">
      <SectionHeader
        label="Latest Flagships"
        title={<>The <span className="gradient-text-cyan">Future</span> in Your Pocket</>}
        description="The most powerful smartphones on the planet — curated, tested, and ready."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
        {phones.map((phone, i) => (
          <motion.div
            key={phone.model}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            data-cursor="lens"
            className="group relative rounded-3xl glass-strong p-6 overflow-hidden holo-border"
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className={`absolute -inset-20 bg-gradient-to-br ${phone.color} opacity-10 blur-3xl`} />
            </div>

            <div className="relative z-10">
              {/* Phone visual */}
              <div className="relative mb-6 h-56 flex items-center justify-center">
                <motion.div
                  whileHover={{ rotateY: 15, rotateX: -5 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="relative"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className={`w-28 h-56 rounded-[2rem] bg-gradient-to-br ${phone.color} shadow-2xl relative overflow-hidden`}>
                    {/* Screen */}
                    <div className="absolute inset-1 rounded-[1.7rem] bg-black/80 backdrop-blur-sm">
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-3 rounded-full bg-black" />
                      {/* Animated wallpaper */}
                      <motion.div
                        className="absolute inset-0 rounded-[1.7rem] opacity-60"
                        animate={{
                          background: [
                            'radial-gradient(circle at 30% 30%, hsl(199 100% 50%), transparent)',
                            'radial-gradient(circle at 70% 70%, hsl(270 100% 60%), transparent)',
                            'radial-gradient(circle at 30% 30%, hsl(199 100% 50%), transparent)',
                          ],
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                      />
                    </div>
                    {/* Camera module */}
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-black/90 grid grid-cols-2 gap-1 p-1">
                      {[0, 1, 2, 3].map((j) => (
                        <div key={j} className="rounded-full bg-cyan-900/80 ring-1 ring-cyan-400/30" />
                      ))}
                    </div>
                  </div>
                  {/* Reflection */}
                  <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-4 rounded-full bg-gradient-to-br ${phone.color} opacity-20 blur-lg`} />
                </motion.div>
              </div>

              {/* Info */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">{phone.brand}</span>
                <span className="text-xs px-2 py-1 rounded-full glass text-white/60">{phone.tag}</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{phone.model}</h3>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <SpecItem icon={Cpu} label="Chip" value={phone.specs.chip} />
                <SpecItem icon={Camera} label="Camera" value={phone.specs.camera} />
                <SpecItem icon={Battery} label="Battery" value={phone.specs.battery} />
                <SpecItem icon={Smartphone} label="Display" value={phone.specs.display} />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-lg font-bold gradient-text-cyan">{phone.price}</span>
                <button className="text-sm text-white/60 hover:text-white flex items-center gap-1 group/btn">
                  Details
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    →
                  </motion.span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

function SpecItem({ icon: Icon, label, value }: { icon: typeof Cpu; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-lg glass flex items-center justify-center">
        <Icon className="w-4 h-4 text-cyan-400" />
      </div>
      <div>
        <div className="text-[10px] uppercase text-white/40">{label}</div>
        <div className="text-xs font-medium">{value}</div>
      </div>
    </div>
  );
}
