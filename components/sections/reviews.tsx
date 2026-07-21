'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '../section-wrapper';
import { SectionHeader } from '../section-header';
import { Star, Quote } from 'lucide-react';

const reviews = [
  { name: 'Dilshan Perera', role: 'Software Engineer', text: 'Best phone buying experience in Sri Lanka. The store feels like an Apple keynote. Got my iPhone 15 Pro the same day.', rating: 5 },
  { name: 'Nimasha Fernando', role: 'Content Creator', text: 'Their repair service is unreal. Cracked screen fixed in 30 minutes while I waited. Genuine parts, fair price.', rating: 5 },
  { name: 'Kavindu Silva', role: 'Gamer', text: 'Got my ROG Phone 8 here. The team knows their stuff. They set up gaming mode for me. Unreal service.', rating: 5 },
  { name: 'Amaya Jayawardena', role: 'Designer', text: 'Traded my old Pixel for a new Nothing Phone. The trade-in value was the best I found anywhere.', rating: 5 },
  { name: 'Roshan Wickramasinghe', role: 'Business Owner', text: 'Bought 5 phones for my team. Bulk pricing, delivered to our office. Opsel made it effortless.', rating: 5 },
  { name: 'Tharindu Bandara', role: 'Student', text: 'Found a mid-range Redmi that fits my budget. No pushy upselling. Honest advice. Will come back.', rating: 5 },
];

export function ReviewsSection() {
  return (
    <SectionWrapper id="reviews">
      <SectionHeader
        label="Reviews"
        title={<>Loved by <span className="gradient-text-cyan">Thousands</span></>}
        description="Real people. Real devices. Real experiences."
      />

      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl glass-strong p-6 relative overflow-hidden"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-white/5" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                ))}
              </div>

              <p className="text-sm text-white/70 mb-6 leading-relaxed">"{review.text}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-sm font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-sm">{review.name}</div>
                  <div className="text-xs text-white/40">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: '10,000+', label: 'Happy Customers' },
            { value: '4.9★', label: 'Average Rating' },
            { value: '50+', label: 'Phone Models' },
            { value: '5 yrs', label: 'Trusted Service' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl glass"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text-cyan mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                {stat.value}
              </div>
              <div className="text-sm text-white/40">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
