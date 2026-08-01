import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, MapPin, Building2, Layers } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }
});

const milestones = [
  { year: '2026 Q1', title: 'Company Founded', desc: 'Mantisa Solutions incorporated in Varanasi, India.', color: '#FF758F' },
  { year: '2026 Q2', title: 'First SaaS Launch', desc: 'Mantisa Billing Software v1.0 with GST invoicing.', color: '#8338EC' },
  { year: '2026 Q3', title: '9 Enterprise Clients', desc: 'Rapid adoption across manufacturing and retail.', color: '#00B4D8' },
  { year: '2026 Q4', title: '11 Projects Shipped', desc: 'Crossed 11 deployments with 99.9% uptime.', color: '#2EC4B6' }
];

const values = [
  { icon: Award, title: 'Obsessive Quality', desc: 'Resilient, zero-bloat code with rigorous testing and micro-second response targets.', color: '#FF758F' },
  { icon: Heart, title: 'Client Centricity', desc: 'Every architecture decision starts with understanding user workflows and ROI.', color: '#8338EC' },
  { icon: Layers, title: 'Scalable Architecture', desc: 'Cloud infrastructure that seamlessly expands as your user base grows.', color: '#00B4D8' }
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 100, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
      <div className="container">

        {/* Header */}
        <motion.div {...fadeUp()} style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 60px' }}>
          <span className="section-badge" style={{ background: 'rgba(255,117,143,0.08)', border: '1px solid rgba(255,117,143,0.2)', color: '#FF758F' }}>
            About Mantisa
          </span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            Engineered for Impact from Varanasi, India.
          </h1>
          <p className="section-desc">
            Founded in 2026, we craft automated billing tools and custom enterprise digital products that scale.
          </p>
        </motion.div>

        {/* Who We Are */}
        <motion.div {...fadeUp()}>
          <div className="glass-panel" style={{ padding: 'clamp(24px, 4vw, 48px)', marginBottom: 60, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gap: 36, alignItems: 'center' }} className="about-grid">
              <div style={{ maxWidth: 500 }}>
                <span style={{ fontSize: '0.7rem', fontFamily: 'monospace', fontWeight: 700, color: '#00B4D8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Who We Are</span>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#0F172A', lineHeight: 1.2, margin: '12px 0 16px' }}>
                  Building Digital Products That Scale.
                </h2>
                <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.75 }}>
                  Mantisa Solutions was born with a clear directive: replace clunky, outdated software with sleek, lightning-fast digital products. Our engineering team builds software that empowers business owners to automate invoicing, track inventory, and streamline growth.
                </p>
                <div style={{ display: 'flex', gap: 24, marginTop: 20, fontSize: '0.78rem', fontWeight: 600, color: '#475569' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><MapPin size={14} color="#FF758F" /> Varanasi, India</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Building2 size={14} color="#00B4D8" /> Founded 2026</span>
                </div>
              </div>

              {/* Info card */}
              <div style={{ borderRadius: 20, padding: 24, background: '#0F172A', color: '#fff', boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(51,65,85,0.6)', paddingBottom: 12, marginBottom: 16 }}>
                  <span style={{ fontSize: '0.68rem', fontFamily: 'monospace', fontWeight: 700, color: '#FF758F', textTransform: 'uppercase' }}>Core Matrix</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.72rem', fontFamily: 'monospace' }}>
                  {[
                    ['Headquarters', 'Varanasi, India', '#38BDF8'],
                    ['Founder & CEO', 'Krishna', '#FF758F'],
                    ['Contact', 'krishna@mantisasolutions.com', '#34D399']
                  ].map(([k, v, c], i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', borderRadius: 12, background: 'rgba(30,41,59,0.7)', border: '1px solid rgba(51,65,85,0.4)' }}>
                      <span style={{ color: '#94A3B8' }}>{k}</span>
                      <span style={{ color: c, fontWeight: 700 }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid-2" style={{ marginBottom: 80 }}>
          {[
            { icon: Target, title: 'Our Mission', desc: 'To democratize enterprise-grade billing and cloud software for businesses worldwide, enabling seamless automation and 100% tax compliance.', color: '#FF758F' },
            { icon: Eye, title: 'Our Vision', desc: 'To establish Mantisa Solutions as a premier global software powerhouse recognized for craftsmanship and unwavering customer satisfaction.', color: '#00B4D8' }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={i} {...fadeUp(i * 0.1)}>
                <GlassCard glowColor={item.color}>
                  <div style={{ padding: 32 }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: 16,
                      background: item.color + '12',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: 20
                    }}>
                      <Icon size={24} color={item.color} />
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, color: '#0F172A', marginBottom: 12 }}>{item.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.75 }}>{item.desc}</p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Core Values */}
        <div style={{ marginBottom: 80 }}>
          <div style={{ textAlign: 'center', maxWidth: 480, margin: '0 auto 48px' }}>
            <h2 className="section-title">Core Principles</h2>
            <p className="section-desc">The values guiding how we engineer and support.</p>
          </div>
          <div className="grid-3">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div key={i} {...fadeUp(i * 0.08)}>
                  <GlassCard glowColor={v.color}>
                    <div style={{ padding: 28 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 14, background: v.color + '12', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                        <Icon size={22} color={v.color} />
                      </div>
                      <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 700, color: '#0F172A', marginBottom: 8 }}>{v.title}</h4>
                      <p style={{ fontSize: '0.78rem', color: '#64748B', lineHeight: 1.7 }}>{v.desc}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Milestones */}
        <div>
          <div style={{ textAlign: 'center', maxWidth: 480, margin: '0 auto 48px' }}>
            <span className="section-badge" style={{ background: 'rgba(131,56,236,0.08)', border: '1px solid rgba(131,56,236,0.2)', color: '#8338EC' }}>
              Our Journey
            </span>
            <h2 className="section-title" style={{ marginTop: 12 }}>Milestone Achievements</h2>
          </div>
          <div className="grid-4">
            {milestones.map((m, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)}>
                <GlassCard glowColor={m.color}>
                  <div style={{ padding: 24 }}>
                    <span style={{
                      display: 'inline-block', padding: '4px 12px', borderRadius: 10,
                      background: m.color, color: '#fff',
                      fontSize: '0.65rem', fontFamily: 'monospace', fontWeight: 700,
                      marginBottom: 14
                    }}>
                      {m.year}
                    </span>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 700, color: '#0F172A', marginBottom: 6 }}>{m.title}</h4>
                    <p style={{ fontSize: '0.75rem', color: '#64748B', lineHeight: 1.7 }}>{m.desc}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .about-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
