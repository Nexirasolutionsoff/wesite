import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Globe, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }
});

export default function ContactPage() {
  return (
    <div style={{ paddingTop: 110, paddingBottom: 90, position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: 800 }}>

        {/* Header */}
        <motion.div {...fadeUp()} style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 48px' }}>
          <span className="section-badge" style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', color: '#10B981' }}>
            Direct Communication
          </span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)' }}>Let's Connect Directly.</h1>
          <p className="section-desc">Reach out to us via Phone, WhatsApp, or Email for instant software support and deployment inquiries.</p>
        </motion.div>

        {/* Centered Direct Contact Glass Card */}
        <motion.div {...fadeUp(0.1)}>
          <GlassCard glowColor="#10B981">
            <div style={{ padding: 'clamp(28px, 5vw, 48px)' }}>

              {/* Direct Phone / WhatsApp Hero Banner */}
              <div style={{
                background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                borderRadius: 24, padding: 'clamp(20px, 4vw, 32px)', color: '#fff',
                marginBottom: 36, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
                boxShadow: '0 20px 40px rgba(0,0,0,0.12)', border: '1px solid rgba(51,65,85,0.5)'
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: '50%',
                  background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16
                }}>
                  <Phone size={24} color="#10B981" />
                </div>
                <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', fontWeight: 700, color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Direct Phone & WhatsApp
                </span>
                <a
                  href="tel:9598898394"
                  style={{
                    fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4.5vw, 2.75rem)',
                    fontWeight: 800, color: '#FFFFFF', textDecoration: 'none', margin: '8px 0 16px',
                    letterSpacing: '-0.02em', transition: 'color 0.2s'
                  }}
                  onMouseEnter={e => e.target.style.color = '#34D399'}
                  onMouseLeave={e => e.target.style.color = '#FFFFFF'}
                >
                  +91 9598898394
                </a>
                <a
                  href="https://wa.me/919598898394"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: '12px 28px', fontSize: '0.85rem', background: 'linear-gradient(135deg, #10B981, #059669)' }}
                >
                  Chat on WhatsApp <ArrowRight size={15} />
                </a>
              </div>

              {/* Grid of Office & Contact Details */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
                {[
                  {
                    icon: MapPin, color: '#00B4D8', bg: 'rgba(0,180,216,0.1)',
                    title: 'Headquarters', sub: 'Varanasi, Uttar Pradesh, India', extra: 'PIN: 221001'
                  },
                  {
                    icon: Mail, color: '#FF758F', bg: 'rgba(255,117,143,0.1)',
                    title: 'Official Email', sub: 'krishna@mantisasolutions.com', link: true
                  },
                  {
                    icon: Globe, color: '#8338EC', bg: 'rgba(131,56,236,0.1)',
                    title: 'Working Hours', sub: 'Mon – Sat: 9:00 AM – 7:00 PM IST'
                  }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <div style={{ width: 44, height: 44, borderRadius: 16, background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon size={20} color={item.color} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.92rem', marginBottom: 2 }}>{item.title}</div>
                        {item.link ? (
                          <a href={`mailto:${item.sub}`} style={{ fontSize: '0.8rem', color: '#FF758F', fontFamily: 'monospace', fontWeight: 600 }}>{item.sub}</a>
                        ) : (
                          <div style={{ fontSize: '0.8rem', color: '#64748B', lineHeight: 1.5 }}>{item.sub}</div>
                        )}
                        {item.extra && <div style={{ fontSize: '0.68rem', fontFamily: 'monospace', color: '#94A3B8', marginTop: 4 }}>{item.extra}</div>}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Media Links Footer */}
              <div style={{ marginTop: 40, pt: 24, borderTop: '1px solid rgba(226,232,240,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94A3B8', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Connect with Mantisa Solutions
                </span>
                <div style={{ display: 'flex', gap: 12 }}>
                  {[
                    { label: 'GitHub', path: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' },
                    { label: 'LinkedIn', path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                    { label: 'Twitter', path: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' }
                  ].map((s, i) => (
                    <a key={i} href="#" aria-label={s.label} style={{
                      width: 40, height: 40, borderRadius: '50%',
                      background: 'rgba(241,245,249,0.9)', border: '1px solid rgba(226,232,240,0.8)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#475569', transition: 'all 0.3s'
                    }}>
                      <svg width={16} height={16} fill="currentColor" viewBox="0 0 24 24"><path d={s.path} /></svg>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </GlassCard>
        </motion.div>

      </div>
    </div>
  );
}
