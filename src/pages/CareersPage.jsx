import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, BookOpen, Zap, ArrowRight, Sparkles } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }
});

const benefits = [
  { icon: Clock, title: 'Flexible Work', desc: 'Work from our Varanasi hub or remotely with async schedules focused on output.', color: '#FF758F' },
  { icon: BookOpen, title: 'Learning Culture', desc: 'Generous budget for courses, certifications, and international conferences.', color: '#8338EC' },
  { icon: Zap, title: 'Innovation First', desc: 'Build with cutting-edge tools, AI integrations, and serverless backends.', color: '#00B4D8' }
];

const positions = [
  { id: 1, title: 'Senior Full Stack Engineer', cat: 'Engineering', loc: 'Varanasi / Hybrid', type: 'Full-Time', exp: '3-5 Yrs', pay: '₹14L–22L + Equity', desc: 'Lead Mantisa Billing cloud microservices and responsive liquid UIs.' },
  { id: 2, title: 'Lead UI/UX Designer', cat: 'Design', loc: 'Varanasi / Remote', type: 'Full-Time', exp: '2-4 Yrs', pay: '₹10L–16L + Equity', desc: 'Craft Apple-inspired glassmorphism designs and component libraries.' },
  { id: 3, title: 'Cloud DevOps Engineer', cat: 'Engineering', loc: 'Remote', type: 'Full-Time', exp: '3+ Yrs', pay: '₹12L–18L + Equity', desc: 'Maintain 99.9% uptime across AWS infrastructure and CI/CD pipelines.' },
  { id: 4, title: 'Technical Sales Advocate', cat: 'Product', loc: 'Varanasi', type: 'Full-Time', exp: '1-3 Yrs', pay: '₹8L–14L + Incentive', desc: 'Drive client onboarding for Mantisa Billing across enterprises.' }
];

export default function CareersPage({ onOpenApplyModal }) {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? positions : positions.filter(p => p.cat === filter);

  return (
    <div style={{ paddingTop: 100, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
      <div className="container">

        {/* Header */}
        <motion.div {...fadeUp()} style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 60px' }}>
          <span className="section-badge" style={{ background: 'rgba(255,117,143,0.08)', border: '1px solid rgba(255,117,143,0.2)', color: '#FF758F' }}>
            Careers
          </span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Build the Future With Us.</h1>
          <p className="section-desc">
            Looking for passionate engineers, designers, and thinkers in Varanasi and remotely.
          </p>
        </motion.div>

        {/* Benefits */}
        <div style={{ marginBottom: 72 }}>
          <div style={{ textAlign: 'center', maxWidth: 480, margin: '0 auto 48px' }}>
            <span className="section-badge" style={{ background: 'rgba(0,180,216,0.08)', border: '1px solid rgba(0,180,216,0.2)', color: '#00B4D8' }}>
              Culture & Perks
            </span>
            <h2 className="section-title">Why Join Mantisa?</h2>
          </div>
          <div className="grid-3">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div key={i} {...fadeUp(i * 0.08)}>
                  <GlassCard glowColor={b.color}>
                    <div style={{ padding: 32 }}>
                      <div style={{ width: 48, height: 48, borderRadius: 16, background: b.color + '10', border: `1px solid ${b.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                        <Icon size={24} color={b.color} />
                      </div>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: 10 }}>{b.title}</h3>
                      <p style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: 1.7 }}>{b.desc}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Open Positions */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 36 }}>
            <div>
              <span className="section-badge" style={{ background: 'rgba(131,56,236,0.08)', border: '1px solid rgba(131,56,236,0.2)', color: '#8338EC' }}>
                Current Openings
              </span>
              <h2 className="section-title" style={{ marginTop: 8 }}>Open Positions</h2>
            </div>

            {/* Filter Tabs */}
            <div style={{
              display: 'flex', gap: 4, padding: 5, borderRadius: 'var(--radius-full)',
              background: 'rgba(241,245,249,0.7)', border: '1px solid rgba(226,232,240,0.5)'
            }}>
              {['All', 'Engineering', 'Design', 'Product'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  style={{
                    padding: '8px 18px', borderRadius: 'var(--radius-full)',
                    fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer',
                    background: filter === cat ? '#0F172A' : 'transparent',
                    color: filter === cat ? '#fff' : '#64748B',
                    border: 'none', transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                    boxShadow: filter === cat ? '0 4px 12px rgba(0,0,0,0.1)' : 'none'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {filtered.map((pos) => (
              <motion.div key={pos.id} {...fadeUp()}>
                <GlassCard glowColor="#8338EC">
                  <div style={{ padding: 28, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
                    <div style={{ maxWidth: 560 }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                        <span style={{ padding: '3px 10px', borderRadius: 8, background: 'rgba(255,117,143,0.1)', color: '#FF758F', fontSize: '0.62rem', fontFamily: 'monospace', fontWeight: 700 }}>{pos.cat}</span>
                        <span style={{ padding: '3px 10px', borderRadius: 8, background: 'rgba(241,245,249,0.8)', color: '#64748B', fontSize: '0.62rem', fontWeight: 600 }}>{pos.type}</span>
                        <span style={{ color: '#94A3B8', fontSize: '0.72rem' }}>• {pos.loc}</span>
                      </div>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: 6 }}>{pos.title}</h3>
                      <p style={{ fontSize: '0.78rem', color: '#64748B', lineHeight: 1.7, marginBottom: 8 }}>{pos.desc}</p>
                      <div style={{ fontSize: '0.72rem', fontWeight: 600, color: '#475569' }}>
                        Salary: <span style={{ color: '#10B981', fontWeight: 700 }}>{pos.pay}</span>
                        <span style={{ margin: '0 8px', color: '#CBD5E1' }}>•</span>
                        Experience: <span style={{ fontWeight: 700 }}>{pos.exp}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => onOpenApplyModal(pos.title)}
                      className="btn-primary"
                      style={{ fontSize: '0.78rem', padding: '11px 22px', whiteSpace: 'nowrap' }}
                    >
                      Apply Now <ArrowRight size={14} />
                    </button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div {...fadeUp()}>
          <div className="glass-panel" style={{ padding: 'clamp(24px, 4vw, 40px)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 44, height: 44, borderRadius: 16, background: 'linear-gradient(135deg, #FF758F, #8338EC)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <Sparkles size={22} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: '#0F172A' }}>Don't see your role?</div>
                <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>We're always eager to meet talented people.</div>
              </div>
            </div>
            <a href="mailto:krishna@mantisasolutions.com?subject=Spontaneous%20Application" className="btn-secondary" style={{ fontSize: '0.78rem', padding: '11px 22px' }}>
              Send Resume
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
