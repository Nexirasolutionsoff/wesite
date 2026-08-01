import React from 'react';

export default function MantisaLogo({ size = 'md', className = '' }) {
  const sizeMap = {
    sm: { mark: 36, logoHeight: 24, gap: 10 },
    md: { mark: 48, logoHeight: 32, gap: 12 },
    lg: { mark: 64, logoHeight: 44, gap: 14 },
    xl: { mark: 84, logoHeight: 58, gap: 16 }
  };

  const s = sizeMap[size] || sizeMap.md;

  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: s.gap,
        userSelect: 'none'
      }}
    >
      {/* Brand Emblem Mark */}
      <img
        src="/G.png"
        alt="Mantisa Mark"
        width={s.mark}
        height={s.mark}
        style={{
          objectFit: 'contain',
          display: 'block',
          transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1)'
        }}
      />

      {/* Brand Logo Graphic */}
      <img
        src="/logo.png"
        alt="Mantisa Solutions"
        style={{
          height: s.logoHeight,
          width: 'auto',
          objectFit: 'contain',
          display: 'block',
          transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1)'
        }}
      />
    </div>
  );
}
