import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Cpu, Zap, Headphones, CheckCircle2, ChevronRight, Play } from 'lucide-react';
import LiquidGlassCanvas from '../components/LiquidGlassCanvas';
import GlassCard from '../components/GlassCard';
import StatsCounter from '../components/StatsCounter';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }
});

const whyCards = [
  { icon: ShieldCheck, title: 'Secure Solutions', desc: 'Bank-grade AES-256 encryption with zero-trust cloud architecture and ISO/SOC standards.', color: '#FF758F' },
  { icon: Cpu, title: 'Modern Technology', desc: 'Built with React, microservices, AI automation, and ultra-fast resilient cloud infrastructure.', color: '#8338EC' },
  { icon: Zap, title: 'Fast Delivery', desc: 'Rapid sprint cycles with CI/CD automated pipelines and frictionless time-to-market execution.', color: '#00B4D8' },
  { icon: Headphones, title: 'Long-Term Support', desc: '24/7 continuous monitoring, dedicated engineering support, and proactive SLA maintenance.', color: '#2EC4B6' }
];

const processSteps = [
  { n: '01', title: 'Discover', desc: 'Business audit, architecture mapping, and requirement scoping.' },
  { n: '02', title: 'Design', desc: 'Modern glass UI design system, interactive prototypes, and UX testing.' },
  { n: '03', title: 'Develop', desc: 'Clean modular code, microservices backend, and automated testing.' },
  { n: '04', title: 'Deploy', desc: 'Zero-downtime cloud staging, load balancing, and production launch.' },
  { n: '05', title: 'Support', desc: '24/7 infrastructure telemetry, updates, and ongoing scaling.' }
];

export default function HomePage({ setActivePage, onOpenProductDemo }) {
  const nav = (id) => { setActivePage(id); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <div style={{ paddingTop: 100, paddingBottom: 60, position: 'relative', overflow: 'hidden' }}>

      {/* ===== HERO ===== */}
      <section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', padding: '40px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48, alignItems: 'center' }} className="hero-grid">
            
            {/* Left Content */}
            <motion.div {...fadeUp()} style={{ maxWidth: 640 }}>
              {/* Badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '8px 16px', borderRadius: 'var(--radius-full)',
                background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)',
                border: '1px solid rgba(226,232,240,0.7)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                fontSize: '0.7rem', fontWeight: 700,
                marginBottom: 28
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF758F', animation: 'pulse 2s infinite' }} />
                <span className="gradient-text" style={{ letterSpacing: '0.08em', textTransform: 'uppercase' }}>Next-Gen Software Engineering</span>
                <span style={{ color: '#CBD5E1' }}>•</span>
                <span style={{ color: '#94A3B8', fontFamily: 'monospace' }}>Est. 2026</span>
              </div>

              <h1 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
                fontWeight: 800,
                color: '#0F172A',
                lineHeight: 1.08,
                letterSpacing: '-0.035em',
                marginBottom: 24
              }} className="text-balance">
                Software That{' '}
                <span className="gradient-text">Powers Modern</span>{' '}
                Businesses.
              </h1>

              <p style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                color: '#475569',
                lineHeight: 1.7,
                maxWidth: 520,
                marginBottom: 32
              }}>
                We build scalable billing software and custom digital solutions that help businesses automate operations and grow faster.
              </p>

              {/* Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center', marginBottom: 36 }}>
                <button onClick={() => nav('products')} className="btn-primary">
                  <span>Explore Products</span>
                  <ArrowRight size={16} />
                </button>
                <button onClick={() => nav('contact')} className="btn-secondary">
                  <span>Contact Us</span>
                  <ChevronRight size={16} style={{ color: '#94A3B8' }} />
                </button>
                <button
                  onClick={onOpenProductDemo}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '8px 14px', background: 'none', border: 'none',
                    cursor: 'pointer', fontSize: '0.82rem', fontWeight: 700,
                    color: '#475569', transition: 'color 0.2s'
                  }}
                >
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%',
                    background: 'rgba(255,117,143,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <Play size={12} fill="#FF758F" color="#FF758F" style={{ marginLeft: 1 }} />
                  </div>
                  Watch Demo
                </button>
              </div>

              {/* Trust Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, paddingTop: 20, borderTop: '1px solid rgba(226,232,240,0.6)', fontSize: '0.78rem', fontWeight: 500, color: '#64748B' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <CheckCircle2 size={15} color="#10B981" /> 100% GST Compliant
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <CheckCircle2 size={15} color="#00B4D8" /> Enterprise Ready
                </span>
              </div>
            </motion.div>

            {/* Right: 3D Liquid Glass Interactive Showcase */}
            <motion.div {...fadeUp(0.2)}>
              <GlassCard glowColor="#8338EC" noTilt={false}>
                <div style={{
                  position: 'relative', width: '100%', minHeight: 400, height: 'auto',
                  padding: 'clamp(18px, 4vw, 32px)',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  background: 'rgba(255,255,255,0.45)', backdropFilter: 'blur(32px) saturate(180%)',
                  borderRadius: 28, overflow: 'hidden'
                }}>
                  {/* Top Bar inside glass card */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 2 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <img src="/logo.png" alt="Mantisa" style={{ height: 32, width: 'auto', objectFit: 'contain' }} />
                      <div>
                        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1rem', color: '#0F172A' }}>
                          Mantisa Ecosystem
                        </div>
                        <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 500 }}>
                          Automated Digital Infrastructure
                        </div>
                      </div>
                    </div>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      padding: '6px 14px', borderRadius: 'var(--radius-full)',
                      background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)',
                      fontSize: '0.65rem', fontFamily: 'monospace', fontWeight: 700, color: '#10B981'
                    }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', animation: 'pulse 2s infinite' }} />
                      SYSTEM ONLINE
                    </span>
                  </div>

                  {/* Middle Feature Showcase */}
                  <div style={{ position: 'relative', zIndex: 2, margin: '24px 0' }}>
                    <div style={{
                      borderRadius: 20, padding: 20,
                      background: '#0F172A', color: '#fff',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                        <span style={{ fontSize: '0.68rem', fontFamily: 'monospace', color: '#38BDF8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                          Flagship Engine
                        </span>
                        <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', color: '#FF758F', fontWeight: 700 }}>
                          GST READY v2.6
                        </span>
                      </div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, marginBottom: 8, color: '#FFFFFF' }}>
                        Mantisa Billing SaaS
                      </div>
                      <p style={{ fontSize: '0.78rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: 16 }}>
                        Cloud invoicing, stock management, GST auto-calculation & customer ledgers in one seamless hub.
                      </p>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                        <div style={{ padding: '10px 14px', borderRadius: 12, background: 'rgba(30,41,59,0.8)', border: '1px solid rgba(51,65,85,0.4)' }}>
                          <div style={{ fontSize: '0.58rem', color: '#64748B', fontFamily: 'monospace', textTransform: 'uppercase' }}>Daily Billing</div>
                          <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#34D399', fontFamily: 'var(--font-heading)', marginTop: 2 }}>₹1.84L+</div>
                        </div>
                        <div style={{ padding: '10px 14px', borderRadius: 12, background: 'rgba(30,41,59,0.8)', border: '1px solid rgba(51,65,85,0.4)' }}>
                          <div style={{ fontSize: '0.58rem', color: '#64748B', fontFamily: 'monospace', textTransform: 'uppercase' }}>Invoice Speed</div>
                          <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#38BDF8', fontFamily: 'var(--font-heading)', marginTop: 2 }}>&lt; 3 Sec</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Interactive CTA trigger */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 2 }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#475569', display: 'flex', alignItems: 'center', gap: 6 }}>
                      <CheckCircle2 size={15} color="#8338EC" /> 24/7 Cloud Sync
                    </div>
                    <button
                      onClick={onOpenProductDemo}
                      className="btn-primary"
                      style={{ padding: '9px 18px', fontSize: '0.78rem', gap: 6 }}
                    >
                      <span>Interactive Demo</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <StatsCounter />

      {/* ===== WHY CHOOSE US ===== */}
      <section style={{ padding: '80px 0', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 56px' }}>
            <span className="section-badge" style={{ background: 'rgba(255,117,143,0.08)', border: '1px solid rgba(255,117,143,0.2)', color: '#FF758F' }}>
              Core Strengths
            </span>
            <h2 className="section-title">Why Modern Enterprises Choose Mantisa</h2>
            <p className="section-desc">Solutions designed for speed, resilience, and effortless long-term scalability.</p>
          </div>

          <div className="grid-4">
            {whyCards.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div key={i} {...fadeUp(i * 0.08)}>
                  <GlassCard glowColor={c.color}>
                    <div style={{ padding: 32, display: 'flex', flexDirection: 'column', height: '100%' }}>
                      <div style={{
                        width: 48, height: 48, borderRadius: 16,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: c.color + '10', border: `1px solid ${c.color}22`,
                        marginBottom: 24
                      }}>
                        <Icon size={24} color={c.color} />
                      </div>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 700, color: '#0F172A', marginBottom: 10 }}>{c.title}</h3>
                      <p style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: 1.7, flex: 1 }}>{c.desc}</p>
                      <div style={{ marginTop: 24, paddingTop: 16, borderTop: '1px solid rgba(241,245,249,0.8)', display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.75rem', fontWeight: 600, color: c.color }}>
                        Learn more <ArrowRight size={13} />
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== PRODUCT PREVIEW ===== */}
      <section style={{ padding: '60px 0', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <motion.div {...fadeUp()}>
            <div className="glass-panel" style={{ padding: 'clamp(24px, 4vw, 48px)', overflow: 'hidden' }}>
              <div style={{ display: 'grid', gap: 40, alignItems: 'center' }} className="product-grid">

                <div style={{ maxWidth: 480 }}>
                  <span style={{
                    display: 'inline-block', padding: '6px 14px', borderRadius: 'var(--radius-full)',
                    background: 'linear-gradient(135deg, #FF758F, #8338EC)',
                    color: '#fff', fontSize: '0.68rem', fontWeight: 700,
                    letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20
                  }}>
                    Flagship Product
                  </span>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', fontWeight: 800, color: '#0F172A', lineHeight: 1.15, marginBottom: 16 }}>
                    Mantisa Billing Software
                  </h2>
                  <p style={{ fontSize: '0.92rem', color: '#64748B', lineHeight: 1.7, marginBottom: 20 }}>
                    Complete GST invoicing, inventory tracking, customer ledger management, and financial analytics for modern enterprises.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 20px', fontSize: '0.78rem', fontWeight: 600, color: '#334155', marginBottom: 28 }}>
                    {['Automated GST Filing', 'Real-time Inventory', 'WhatsApp Invoices', 'Cloud Backup'].map((f, i) => (
                      <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <CheckCircle2 size={14} color="#10B981" /> {f}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                    <button onClick={() => nav('products')} className="btn-primary" style={{ fontSize: '0.82rem', padding: '12px 24px' }}>
                      View Details <ArrowRight size={14} />
                    </button>
                  </div>
                </div>

                {/* Dashboard mockup */}
                <div style={{
                  borderRadius: 20, overflow: 'hidden',
                  background: '#0F172A', border: '1px solid rgba(51,65,85,0.4)',
                  boxShadow: '0 24px 48px -12px rgba(0,0,0,0.15)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 16px', borderBottom: '1px solid rgba(51,65,85,0.5)' }}>
                    <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#F43F5E' }} />
                    <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#F59E0B' }} />
                    <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#10B981' }} />
                    <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', color: '#64748B', marginLeft: 8 }}>app.mantisasolutions.com/billing</span>
                  </div>
                  <div style={{ padding: 20, fontFamily: 'monospace', fontSize: '0.72rem', color: '#CBD5E1' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 14, borderRadius: 14, background: 'rgba(30,41,59,0.8)', marginBottom: 12 }}>
                      <div>
                        <div style={{ fontSize: '0.6rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Today's Sales</div>
                        <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#34D399', fontFamily: 'var(--font-heading)', marginTop: 4 }}>₹1,84,500</div>
                      </div>
                      <span style={{ padding: '4px 10px', borderRadius: 8, background: 'rgba(52,211,153,0.15)', color: '#34D399', fontSize: '0.6rem', fontWeight: 700 }}>+18.4%</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {[{ name: 'Royal Traders', amt: '₹42,000' }, { name: 'Kashi Enterprises', amt: '₹18,500' }].map((inv, i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', borderRadius: 10, background: 'rgba(30,41,59,0.5)', fontSize: '0.68rem' }}>
                          <span>Inv #{9042 + i} • {inv.name}</span>
                          <span style={{ color: '#38BDF8', fontWeight: 700 }}>{inv.amt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== PROCESS TIMELINE ===== */}
      <section style={{ padding: '80px 0', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 56px' }}>
            <span className="section-badge" style={{ background: 'rgba(0,180,216,0.08)', border: '1px solid rgba(0,180,216,0.2)', color: '#00B4D8' }}>
              Our Process
            </span>
            <h2 className="section-title">Development Lifecycle</h2>
            <p className="section-desc">A structured 5-phase pipeline ensuring fast delivery and robust architecture.</p>
          </div>

          <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto' }}>
            <div className="timeline-line desktop-only" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              {processSteps.map((step, i) => (
                <motion.div key={i} {...fadeUp(i * 0.08)}
                  style={{ display: 'flex', alignItems: 'center', gap: 24, flexDirection: i % 2 === 0 ? 'row' : 'row-reverse' }}
                  className="timeline-row"
                >
                  <div style={{ flex: 1 }}>
                    <GlassCard>
                      <div style={{ padding: 24 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                          <span style={{
                            padding: '4px 10px', borderRadius: 10,
                            background: 'rgba(255,117,143,0.1)', color: '#FF758F',
                            fontSize: '0.65rem', fontFamily: 'monospace', fontWeight: 700
                          }}>
                            PHASE {step.n}
                          </span>
                          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: '#0F172A' }}>{step.title}</h3>
                        </div>
                        <p style={{ fontSize: '0.78rem', color: '#64748B', lineHeight: 1.7 }}>{step.desc}</p>
                      </div>
                    </GlassCard>
                  </div>

                  {/* Node */}
                  <div className="timeline-node" style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: '#0F172A', color: '#fff',
                    fontFamily: 'monospace', fontWeight: 700, fontSize: '0.75rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: '4px solid #fff', boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                    flexShrink: 0, zIndex: 2
                  }}>
                    {step.n}
                  </div>
                  <div style={{ flex: 1 }} className="timeline-spacer" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{ padding: '60px 0', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <motion.div {...fadeUp()}>
            <div style={{
              position: 'relative', borderRadius: 32, padding: 'clamp(40px, 6vw, 80px)',
              textAlign: 'center', color: '#fff', overflow: 'hidden',
              background: 'linear-gradient(135deg, #0F172A, #1E293B)',
              boxShadow: '0 32px 64px -16px rgba(0,0,0,0.2)',
              border: '1px solid rgba(51,65,85,0.4)'
            }}>
              {/* Ambient glow */}
              <div style={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
                width: 500, height: 300,
                background: 'radial-gradient(circle, rgba(255,117,143,0.2), rgba(131,56,236,0.15), rgba(0,180,216,0.1), transparent 70%)',
                filter: 'blur(60px)', pointerEvents: 'none'
              }} />

              <div style={{ position: 'relative', zIndex: 1, maxWidth: 540, margin: '0 auto' }}>
                <span style={{
                  display: 'inline-block', padding: '8px 16px', borderRadius: 'var(--radius-full)',
                  background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
                  fontSize: '0.7rem', fontFamily: 'monospace', color: 'rgba(255,183,178,0.9)',
                  marginBottom: 24
                }}>
                  Ready to Accelerate?
                </span>

                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4.5vw, 3rem)', fontWeight: 800, lineHeight: 1.12, marginBottom: 20 }}>
                  Ready to Build Your Next Software?
                </h2>
                <p style={{ fontSize: '0.95rem', color: 'rgba(203,213,225,0.9)', lineHeight: 1.7, marginBottom: 32 }}>
                  Partner with Mantisa Solutions to deploy custom SaaS or our flagship GST Billing platform.
                </p>
                <button onClick={() => nav('contact')} className="btn-primary" style={{ padding: '16px 36px', fontSize: '1rem' }}>
                  Let's Talk <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Responsive Styles */}
      <style>{`
        .hero-grid { grid-template-columns: 1fr 1fr; }
        .product-grid { grid-template-columns: 1fr 1fr; }
        .desktop-only { display: block; }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .product-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .timeline-row { flex-direction: column !important; }
          .timeline-spacer { display: none !important; }
          .timeline-node { order: -1; }
        }
      `}</style>
    </div>
  );
}
