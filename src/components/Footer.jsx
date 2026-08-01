import React from 'react';
import { Mail, MapPin, Heart, Phone } from 'lucide-react';
import MantisaLogo from './MantisaLogo';

export default function Footer({ setActivePage }) {
  const nav = (id) => { setActivePage(id); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  return (
    <footer style={{
      marginTop: 60,
      marginBottom: 24,
      padding: '0 clamp(16px, 4vw, 32px)',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Sleek, Ultra-Thin Floating Glass Bar matching Header Navbar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 14,
          padding: '12px clamp(14px, 3vw, 24px)',
          borderRadius: 'clamp(20px, 4vw, 9999px)',
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.9)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>

          {/* Left: Brand Emblem */}
          <button onClick={() => nav('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <MantisaLogo size="sm" />
          </button>

          {/* Center: Email & Location Info */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 14, fontSize: '0.78rem', color: '#475569' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <MapPin size={14} color="#00B4D8" />
              <span style={{ fontWeight: 600, color: '#0F172A' }}>Varanasi, India</span>
            </span>
            <span style={{ color: '#CBD5E1' }}>•</span>
            <a
              href="tel:9598898394"
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                color: '#10B981', fontWeight: 700, fontFamily: 'monospace', fontSize: '0.75rem'
              }}
            >
              <Phone size={13} color="#10B981" />
              +91 9598898394
            </a>
            <span style={{ color: '#CBD5E1' }}>•</span>
            <a
              href="mailto:krishna@mantisasolutions.com"
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                color: '#475569', fontWeight: 500, fontFamily: 'monospace', fontSize: '0.75rem',
                transition: 'color 0.2s'
              }}
              onMouseEnter={e => e.target.style.color = '#FF758F'}
              onMouseLeave={e => e.target.style.color = '#475569'}
            >
              <Mail size={13} color="#FF758F" />
              krishna@mantisasolutions.com
            </a>
          </div>

          {/* Right: Copyright & Status */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: '0.72rem', color: '#64748B', fontWeight: 500 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '4px 10px', borderRadius: 'var(--radius-full)',
              background: 'rgba(241, 245, 249, 0.8)',
              border: '1px solid rgba(226, 232, 240, 0.8)',
              fontSize: '0.65rem', fontWeight: 600, color: '#10B981'
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981' }} />
              © 2026 Mantisa
            </div>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              Made with <Heart size={12} color="#FF758F" fill="#FF758F" />
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}
