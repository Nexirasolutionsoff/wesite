import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Users, Rocket, Activity } from 'lucide-react';
import GlassCard from './GlassCard';

function CountUp({ target, duration = 2.2, decimals = 0, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  useEffect(() => {
    if (!isInView) return;
    const end = parseFloat(target);
    const totalFrames = Math.round((duration * 1000) / 16);
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      setCount(end * (1 - Math.pow(1 - progress, 4))); // ease-out quart
      if (frame >= totalFrames) { setCount(end); clearInterval(timer); }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count.toFixed(decimals)}{suffix}</span>;
}

const stats = [
  { icon: Calendar, value: 2026, decimals: 0, suffix: '', label: 'Founded', sub: 'Varanasi, India', color: '#FF758F' },
  { icon: Users, value: 9, decimals: 0, suffix: '+', label: 'Happy Clients', sub: 'Enterprise partnerships', color: '#8338EC' },
  { icon: Rocket, value: 11, decimals: 0, suffix: '+', label: 'Projects Shipped', sub: 'Cloud-native SaaS', color: '#00B4D8' },
  { icon: Activity, value: 99.9, decimals: 1, suffix: '%', label: 'Uptime', sub: 'Resilient infrastructure', color: '#2EC4B6' }
];

export default function StatsCounter() {
  return (
    <section style={{ padding: '48px 0', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <div className="grid-4">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <GlassCard glowColor={s.color} className="" style={{ padding: 0 }}>
                  <div style={{ padding: 28 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: 14,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: s.color + '12', border: `1px solid ${s.color}25`
                      }}>
                        <Icon size={22} color={s.color} />
                      </div>
                      <span style={{
                        fontSize: '0.62rem', fontFamily: 'var(--font-heading)', fontWeight: 700,
                        padding: '4px 10px', borderRadius: 'var(--radius-full)',
                        background: 'rgba(241,245,249,0.8)', border: '1px solid rgba(226,232,240,0.5)',
                        color: '#94A3B8', letterSpacing: '0.05em', textTransform: 'uppercase'
                      }}>
                        Live
                      </span>
                    </div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5vw, 2.75rem)', fontWeight: 800, color: '#0F172A', lineHeight: 1, marginBottom: 4 }}>
                      <CountUp target={s.value} decimals={s.decimals} suffix={s.suffix} />
                    </div>
                    <p style={{ fontSize: '0.88rem', fontWeight: 600, color: '#334155', margin: '4px 0 2px' }}>{s.label}</p>
                    <p style={{ fontSize: '0.72rem', color: '#94A3B8' }}>{s.sub}</p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
