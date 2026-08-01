import React, { useRef, useState, useCallback } from 'react';

export default function GlassCard({ children, className = '', glowColor = '#FF758F', noTilt = false }) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = useCallback((e) => {
    if (noTilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    const rX = ((y - cy) / cy) * -6;
    const rY = ((x - cx) / cx) * 6;
    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;

    setStyle({
      transform: `perspective(800px) rotateX(${rX}deg) rotateY(${rY}deg) translateY(-8px) scale(1.015)`,
      '--spot-x': `${px}%`,
      '--spot-y': `${py}%`,
      '--spot-opacity': 1
    });
  }, [noTilt]);

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)',
      '--spot-opacity': 0
    });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`glass-card ${className}`}
      style={{
        ...style,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.5s cubic-bezier(0.4,0,0.2,1)'
      }}
    >
      {/* Spotlight overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(500px circle at var(--spot-x, 50%) var(--spot-y, 50%), ${glowColor}15, transparent 50%)`,
        opacity: 'var(--spot-opacity, 0)',
        transition: 'opacity 0.4s',
        pointerEvents: 'none', zIndex: 1,
        borderRadius: 'inherit'
      }} />
      <div style={{ position: 'relative', zIndex: 2, height: '100%' }}>{children}</div>
    </div>
  );
}
