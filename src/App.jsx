import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import LiquidGlassCanvas from './components/LiquidGlassCanvas';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import BillingDemoModal from './components/BillingDemoModal';
import MantisaLogo from './components/MantisaLogo';

const pageTransition = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
};

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [loading, setLoading] = useState(true);
  const [demoOpen, setDemoOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  const pages = {
    home: <HomePage setActivePage={setActivePage} onOpenProductDemo={() => setDemoOpen(true)} />,
    about: <AboutPage setActivePage={setActivePage} />,
    products: <ProductsPage onOpenProductDemo={() => setDemoOpen(true)} setActivePage={setActivePage} />,
    contact: <ContactPage />
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-main)', overflow: 'hidden', fontFamily: 'var(--font-body)' }}>

      {/* Preloader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed', inset: 0, zIndex: 10000,
              background: '#FFFFFF',
              display: 'flex',
              alignItems: 'center', justifyContent: 'center'
            }}
          >
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              src="/preloader.gif"
              alt="Loading..."
              style={{ width: 180, height: 180, objectFit: 'contain', display: 'block' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-Screen Liquid Glass Background */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0,
        opacity: 0.55,
        pointerEvents: 'none'
      }}>
        <LiquidGlassCanvas className="" />
      </div>

      {/* Financial Ledger Grid Pattern */}
      <div className="billing-grid-bg" />

      {/* Soft gradient blobs layered on top of canvas */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <div className="blob blob-4" />

      {/* Cursor Glow (desktop only) */}
      <CursorGlow />

      {/* Navigation */}
      <Navbar activePage={activePage} setActivePage={setActivePage} onOpenProductDemo={() => setDemoOpen(true)} />

      {/* Page Content */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        <AnimatePresence mode="wait">
          <motion.div key={activePage} {...pageTransition}>
            {pages[activePage]}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer setActivePage={setActivePage} />

      {/* Modals */}
      <BillingDemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
}
