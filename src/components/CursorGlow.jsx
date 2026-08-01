import React, { useEffect, useRef, useState } from 'react';

export default function CursorGlow() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const glowRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const mouse = useRef({ x: -100, y: -100 });
  const pos = useRef({ dot: { x: -100, y: -100 }, ring: { x: -100, y: -100 }, glow: { x: -100, y: -100 } });

  useEffect(() => {
    // Only disable custom cursor on touch-only mobile screens (pointer: coarse)
    const isMobileTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isMobileTouch) return;

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    // Detect hoverable elements
    const onOverCheck = (e) => {
      const el = e.target;
      if (!el || !el.matches) return;
      const isHoverable = el.matches('a, button, [role="button"], input, select, textarea, label, [data-cursor="pointer"]') ||
        el.closest('a, button, [role="button"]');
      setHovering(!!isHoverable);
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);
    document.addEventListener('mouseover', onOverCheck);

    let raf;
    const lerp = (a, b, t) => a + (b - a) * t;
    const animate = () => {
      const m = mouse.current;
      const p = pos.current;

      p.dot.x = lerp(p.dot.x, m.x, 0.35);
      p.dot.y = lerp(p.dot.y, m.y, 0.35);

      p.ring.x = lerp(p.ring.x, m.x, 0.15);
      p.ring.y = lerp(p.ring.y, m.y, 0.15);

      p.glow.x = lerp(p.glow.x, m.x, 0.08);
      p.glow.y = lerp(p.glow.y, m.y, 0.08);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${p.dot.x}px, ${p.dot.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${p.ring.x}px, ${p.ring.y}px, 0) translate(-50%, -50%)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${p.glow.x}px, ${p.glow.y}px, 0) translate(-50%, -50%)`;
      }

      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseover', onOverCheck);
    };
  }, [visible]);

  // Don't render on touch-only mobile devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <>
      {/* Hide default cursor globally */}
      <style>{`
        @media (pointer: fine) {
          *, *::before, *::after {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Ambient glow (slowest) */}
      <div
        ref={glowRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: 400, height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(131,56,236,0.07) 0%, rgba(0,180,216,0.04) 30%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: 9997,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.4s'
        }}
      />

      {/* Ring (delayed follow) */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: hovering ? 48 : 36,
          height: hovering ? 48 : 36,
          borderRadius: '50%',
          border: `2px solid ${hovering ? 'rgba(255,117,143,0.6)' : 'rgba(131,56,236,0.35)'}`,
          background: hovering ? 'rgba(255,117,143,0.06)' : 'transparent',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: visible ? 1 : 0,
          transition: 'width 0.35s cubic-bezier(0.34,1.56,0.64,1), height 0.35s cubic-bezier(0.34,1.56,0.64,1), border-color 0.3s, background 0.3s, opacity 0.3s',
          mixBlendMode: 'normal'
        }}
      />

      {/* Dot (fast follow) */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: clicking ? 6 : 8,
          height: clicking ? 6 : 8,
          borderRadius: '50%',
          background: hovering
            ? 'linear-gradient(135deg, #FF758F, #8338EC)'
            : 'linear-gradient(135deg, #8338EC, #00B4D8)',
          boxShadow: hovering
            ? '0 0 12px rgba(255,117,143,0.5)'
            : '0 0 8px rgba(131,56,236,0.4)',
          pointerEvents: 'none',
          zIndex: 10000,
          opacity: visible ? 1 : 0,
          transition: 'width 0.2s, height 0.2s, box-shadow 0.3s, background 0.3s, opacity 0.3s'
        }}
      />
    </>
  );
}
