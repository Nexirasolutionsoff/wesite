import React from 'react';
import { motion } from 'framer-motion';
import { Receipt, ShieldCheck, Database, Users, BarChart3, Cloud, Lock, Server, ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }
});

const features = [
  { id: 'gst', title: 'GST Billing', icon: Receipt, desc: '100% compliant invoicing with auto CGST/SGST calculation and GST portal export.', color: '#FF758F', metric: 'Zero Errors' },
  { id: 'inv', title: 'Instant Invoices', icon: Receipt, desc: 'Professional branded PDF invoices in under 5 seconds via WhatsApp and Email.', color: '#8338EC', metric: '< 5 Sec' },
  { id: 'stock', title: 'Inventory Management', icon: Database, desc: 'Auto stock tracking, low-stock alerts, barcode scanning, and multi-warehouse sync.', color: '#00B4D8', metric: 'Real-time' },
  { id: 'crm', title: 'Customer CRM', icon: Users, desc: 'Credit/debit ledgers, purchase history, payment reminders, and credit limits.', color: '#2EC4B6', metric: '+35% Collections' },
  { id: 'analytics', title: 'Reports & BI', icon: BarChart3, desc: 'Interactive P&L graphs, GSTR summaries, top-seller analysis, and expense tracking.', color: '#FF758F', metric: 'Live Insights' },
  { id: 'multi', title: 'Multi-User Access', icon: Server, desc: 'Granular role permissions for cashiers, accountants, and managers with audit logs.', color: '#8338EC', metric: 'Role-Based' },
  { id: 'cloud', title: 'Cloud Backup', icon: Cloud, desc: 'Triple-redundant AWS cloud replication ensuring continuous data availability.', color: '#00B4D8', metric: '99.9% Uptime' },
  { id: 'security', title: 'AES-256 Security', icon: Lock, desc: 'End-to-end encrypted storage, 2FA, and SOC2-certified infrastructure.', color: '#2EC4B6', metric: 'Bank-Grade' }
];

export default function ProductsPage({ onOpenProductDemo, setActivePage }) {
  const nav = (id) => { setActivePage(id); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <div style={{ paddingTop: 100, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
      <div className="container">

        {/* Header */}
        <motion.div {...fadeUp()} style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 56px' }}>
          <span className="section-badge" style={{ background: 'rgba(255,117,143,0.08)', border: '1px solid rgba(255,117,143,0.2)', color: '#FF758F' }}>
            SaaS Product Suite
          </span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Mantisa Billing Software</h1>
          <p className="section-desc">The flagship automated billing platform for modern enterprises.</p>
          <div style={{ marginTop: 28 }}>
            <button onClick={() => nav('contact')} className="btn-primary" style={{ fontSize: '0.88rem' }}>
              Get Started <ArrowRight size={15} />
            </button>
          </div>
        </motion.div>

        {/* Dashboard Showcase */}
        <motion.div {...fadeUp()}>
          <div className="glass-panel" style={{ padding: 'clamp(20px, 3vw, 40px)', marginBottom: 72, overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, borderBottom: '1px solid rgba(226,232,240,0.7)', paddingBottom: 16, marginBottom: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <img src="/logo.png" alt="Mantisa" style={{ height: 30, width: 'auto', objectFit: 'contain' }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', color: '#0F172A' }}>Mantisa Billing Cloud</div>
                  <div style={{ fontSize: '0.68rem', color: '#94A3B8' }}>Live Dashboard Preview</div>
                </div>
              </div>
              <span style={{ padding: '5px 14px', borderRadius: 'var(--radius-full)', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', fontSize: '0.65rem', fontFamily: 'monospace', fontWeight: 700, color: '#10B981' }}>
                v2.6 ACTIVE
              </span>
            </div>

            {/* Dark Dashboard */}
            <div style={{ borderRadius: 20, background: '#0F172A', border: '1px solid rgba(51,65,85,0.4)', overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.12)' }}>
              <div style={{ display: 'grid', padding: 24, gap: 20 }} className="dash-grid">
                {/* Sidebar Mock */}
                <div style={{ borderRight: '1px solid rgba(51,65,85,0.5)', paddingRight: 20, fontSize: '0.7rem', fontFamily: 'monospace' }} className="dash-sidebar">
                  <div style={{ fontSize: '0.58rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>Navigation</div>
                  {[
                    { icon: BarChart3, label: 'Dashboard', active: true },
                    { icon: Receipt, label: 'GST Invoices' },
                    { icon: Database, label: 'Inventory' },
                    { icon: Users, label: 'Customers' }
                  ].map(({ icon: I, label, active }, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'center', gap: 8,
                      padding: '8px 12px', borderRadius: 12, marginBottom: 4,
                      background: active ? 'rgba(255,117,143,0.15)' : 'transparent',
                      border: active ? '1px solid rgba(255,117,143,0.25)' : '1px solid transparent',
                      color: active ? '#FF758F' : '#64748B',
                      fontWeight: active ? 700 : 400
                    }}>
                      <I size={14} /> {label}
                    </div>
                  ))}
                </div>

                {/* Main */}
                <div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12, marginBottom: 16 }}>
                    {[
                      { label: 'Revenue (Q3)', value: '₹42,85,900', change: '+32.4%', color: '#34D399' },
                      { label: 'GST Collected', value: '₹7,71,462', change: 'GSTR-1 Ready', color: '#38BDF8' },
                      { label: 'Total Invoices', value: '3,490', change: '100% Synced', color: '#A78BFA' }
                    ].map((s, i) => (
                      <div key={i} style={{ padding: 16, borderRadius: 14, background: 'rgba(30,41,59,0.7)', border: '1px solid rgba(51,65,85,0.4)' }}>
                        <div style={{ fontSize: '0.58rem', color: '#64748B', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
                        <div style={{ fontSize: '1.3rem', fontWeight: 700, color: s.color, fontFamily: 'var(--font-heading)', marginTop: 4 }}>{s.value}</div>
                        <div style={{ fontSize: '0.58rem', color: s.color, marginTop: 4, fontWeight: 600 }}>{s.change}</div>
                      </div>
                    ))}
                  </div>
                  {/* Graph */}
                  <div style={{ padding: 16, borderRadius: 14, background: 'rgba(30,41,59,0.7)', border: '1px solid rgba(51,65,85,0.4)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                      <span style={{ fontSize: '0.68rem', fontFamily: 'monospace', color: '#CBD5E1', fontWeight: 600 }}>Weekly Volume</span>
                      <span style={{ fontSize: '0.58rem', fontFamily: 'monospace', color: '#FF758F' }}>LIVE</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 100 }}>
                      {[35, 55, 45, 75, 85, 65, 95, 110].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: h }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                          style={{
                            flex: 1, borderRadius: '6px 6px 0 0',
                            background: 'linear-gradient(180deg, #FF758F, #8338EC, #00B4D8)'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div style={{ marginBottom: 72 }}>
          <div style={{ textAlign: 'center', maxWidth: 480, margin: '0 auto 48px' }}>
            <span className="section-badge" style={{ background: 'rgba(0,180,216,0.08)', border: '1px solid rgba(0,180,216,0.2)', color: '#00B4D8' }}>
              Capabilities
            </span>
            <h2 className="section-title">8 Built-In Modules</h2>
          </div>
          <div className="grid-4">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.id} {...fadeUp(i * 0.05)}>
                  <GlassCard glowColor={f.color}>
                    <div style={{ padding: 28, display: 'flex', flexDirection: 'column', height: '100%' }}>
                      <div style={{ width: 44, height: 44, borderRadius: 14, background: f.color + '10', border: `1px solid ${f.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                        <Icon size={22} color={f.color} />
                      </div>
                      <span style={{ fontSize: '0.6rem', fontFamily: 'monospace', fontWeight: 700, padding: '3px 8px', borderRadius: 8, background: 'rgba(241,245,249,0.8)', color: '#64748B', display: 'inline-block', marginBottom: 10, width: 'fit-content' }}>
                        {f.metric}
                      </span>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: 8 }}>{f.title}</h3>
                      <p style={{ fontSize: '0.78rem', color: '#64748B', lineHeight: 1.7, flex: 1 }}>{f.desc}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div {...fadeUp()}>
          <div style={{
            borderRadius: 28, padding: 'clamp(36px, 5vw, 64px)', textAlign: 'center', color: '#fff',
            background: 'linear-gradient(135deg, #0F172A, #1E293B)',
            boxShadow: '0 24px 48px rgba(0,0,0,0.15)', border: '1px solid rgba(51,65,85,0.4)',
            position: 'relative', overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 400, height: 250, background: 'radial-gradient(circle, rgba(255,117,143,0.15), rgba(131,56,236,0.1), transparent)', filter: 'blur(60px)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 1, maxWidth: 480, margin: '0 auto' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 800, marginBottom: 16 }}>Deploy for Your Business</h2>
              <p style={{ fontSize: '0.88rem', color: 'rgba(203,213,225,0.9)', marginBottom: 28, lineHeight: 1.7 }}>
                Full cloud access with unlimited invoicing and 24/7 support.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
                <button onClick={() => nav('contact')} className="btn-primary" style={{ padding: '14px 28px' }}>
                  Contact Sales <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      <style>{`
        .dash-grid { grid-template-columns: 200px 1fr; }
        @media (max-width: 768px) {
          .dash-grid { grid-template-columns: 1fr !important; }
          .dash-sidebar { display: none !important; }
        }
      `}</style>
    </div>
  );
}
