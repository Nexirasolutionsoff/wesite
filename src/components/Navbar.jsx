import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import MantisaLogo from './MantisaLogo';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'products', label: 'Products' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar({ activePage, setActivePage, onOpenProductDemo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navigate = (id) => {
    setActivePage(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: 3, zIndex: 200,
        background: 'rgba(241,245,249,0.5)'
      }}>
        <div style={{
          height: '100%',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #FF758F, #8338EC, #00B4D8, #2EC4B6)',
          transition: 'width 0.1s linear'
        }} />
      </div>

      <header style={{
        position: 'fixed', top: 10, left: 0, right: 0, zIndex: 100,
        padding: '0 clamp(8px, 3vw, 16px)',
        transition: 'top 0.3s'
      }}>
        <nav style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px clamp(12px, 3vw, 20px)',
          borderRadius: 'var(--radius-full)',
          background: scrolled ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0.7)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: `1px solid ${scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.8)'}`,
          boxShadow: scrolled
            ? '0 8px 32px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)'
            : '0 4px 16px rgba(0,0,0,0.03)',
          transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)'
        }}>
          {/* Logo */}
          <button onClick={() => navigate('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <MantisaLogo size="md" />
          </button>

          {/* Desktop Navigation */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 4,
            background: 'rgba(241,245,249,0.6)',
            padding: '5px 6px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid rgba(226,232,240,0.4)'
          }} className="desktop-nav">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => navigate(item.id)}
                  style={{
                    position: 'relative',
                    padding: '7px 18px',
                    fontSize: '0.82rem',
                    fontWeight: isActive ? 650 : 500,
                    fontFamily: 'var(--font-body)',
                    color: isActive ? '#0F172A' : '#64748B',
                    background: isActive ? '#FFFFFF' : 'transparent',
                    border: isActive ? '1px solid rgba(226,232,240,0.6)' : '1px solid transparent',
                    borderRadius: 'var(--radius-full)',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                    boxShadow: isActive ? '0 2px 8px rgba(0,0,0,0.04)' : 'none'
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* CTA */}
          <button
            onClick={onOpenProductDemo}
            className="btn-primary desktop-nav"
            style={{ padding: '9px 20px', fontSize: '0.78rem', gap: 6 }}
          >
            <Sparkles style={{ width: 14, height: 14 }} />
            <span>Billing Suite</span>
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-nav-btn"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 6,
              color: '#0F172A'
            }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              style={{
                maxWidth: 1100,
                margin: '8px auto 0',
                padding: 16,
                borderRadius: 24,
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.9)',
                boxShadow: '0 16px 40px rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                gap: 6
              }}
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigate(item.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    borderRadius: 14,
                    fontSize: '0.9rem',
                    fontWeight: activePage === item.id ? 700 : 500,
                    color: activePage === item.id ? '#FF758F' : '#475569',
                    background: activePage === item.id ? 'rgba(255,117,143,0.06)' : 'transparent',
                    border: 'none', cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {item.label}
                </button>
              ))}
              <div style={{ height: 1, background: 'rgba(226,232,240,0.6)', margin: '8px 0 12px' }} />
              <button onClick={() => { setMobileOpen(false); onOpenProductDemo(); }} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px 24px', fontSize: '0.9rem' }}>
                <Sparkles size={16} />
                <span>Billing Suite</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Responsive Styles */}
      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-nav-btn { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
