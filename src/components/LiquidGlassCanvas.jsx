import React, { useEffect, useRef } from 'react';

export default function LiquidGlassCanvas({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let tick = 0;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const parent = canvas.parentElement || document.body;
      const w = parent.clientWidth || window.innerWidth;
      const h = parent.clientHeight || window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const w = () => canvas.width / dpr;
    const h = () => canvas.height / dpr;

    // Track mouse globally across window
    const mouse = { x: w() / 2, y: h() / 2, active: false, speed: 0, px: 0, py: 0 };
    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const nx = e.clientX - rect.left;
      const ny = e.clientY - rect.top;

      // Calculate speed for particle spawning
      const dx = nx - mouse.x;
      const dy = ny - mouse.y;
      mouse.speed = Math.sqrt(dx * dx + dy * dy);

      mouse.x = nx;
      mouse.y = ny;
      mouse.active = true;

      // Spawn trail sparkles when cursor moves
      if (mouse.speed > 2 && Math.random() < 0.65) {
        trailParticles.push({
          x: nx + (Math.random() - 0.5) * 12,
          y: ny + (Math.random() - 0.5) * 12,
          vx: (Math.random() - 0.5) * 1.5 - dx * 0.05,
          vy: (Math.random() - 0.5) * 1.5 - dy * 0.05 - 0.5,
          r: Math.random() * 5 + 2.5,
          life: 1,
          decay: Math.random() * 0.02 + 0.015,
          ci: Math.floor(Math.random() * colors.length)
        });
      }
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        const t = e.touches[0];
        onMove({ clientX: t.clientX, clientY: t.clientY });
      }
    }, { passive: true });

    const colors = [
      { r: 16, g: 185, b: 129 },  // Emerald Money Green (#10B981)
      { r: 99, g: 102, b: 241 },  // Enterprise Indigo (#6366F1)
      { r: 6, g: 182, b: 212 },   // Cyber Cyan (#06B6D4)
      { r: 245, g: 158, b: 11 },  // Tax Amber (#F59E0B)
      { r: 236, g: 72, b: 153 }   // Electric Pink (#EC4899)
    ];

    // Main Floating Billing Orbs
    const orbs = [
      { xr: 0.18, yr: 0.25, r: 150, sx: 0.5, sy: 0.35, c1: 0, c2: 2, curX: 0, curY: 0 }, // Emerald-Cyan
      { xr: 0.8, yr: 0.4, r: 170, sx: -0.4, sy: 0.45, c1: 1, c2: 0, curX: 0, curY: 0 },  // Indigo-Emerald
      { xr: 0.45, yr: 0.78, r: 140, sx: 0.45, sy: -0.3, c1: 2, c2: 3, curX: 0, curY: 0 }, // Cyan-Amber
      { xr: 0.85, yr: 0.82, r: 120, sx: -0.55, sy: -0.45, c1: 3, c2: 1, curX: 0, curY: 0 } // Amber-Indigo
    ];

    // Background Constellation / Ledger Node Particles
    const N = 45;
    const particles = Array.from({ length: N }, () => ({
      x: Math.random() * (window.innerWidth || 1200),
      y: Math.random() * (window.innerHeight || 800),
      br: Math.random() * 3.5 + 1.5,
      r: 0,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      ci: Math.floor(Math.random() * colors.length),
      a: Math.random() * 0.4 + 0.2,
      ps: Math.random() * 0.02 + 0.008,
      po: Math.random() * Math.PI * 2
    }));

    // Floating Billing Currency & Invoice Symbols
    const billingSymbolsList = ['₹', '$', '%', 'GST', 'INV', '↗', '₹', 'SOC2', '₹', '%', '₹', 'TAX'];
    const floatingSymbols = Array.from({ length: 22 }, () => ({
      x: Math.random() * (window.innerWidth || 1200),
      y: Math.random() * (window.innerHeight || 800),
      symbol: billingSymbolsList[Math.floor(Math.random() * billingSymbolsList.length)],
      fontSize: Math.floor(Math.random() * 8) + 12,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      rot: (Math.random() - 0.5) * 0.4,
      rotSpeed: (Math.random() - 0.5) * 0.008,
      ci: Math.floor(Math.random() * colors.length),
      a: Math.random() * 0.22 + 0.08,
      ps: Math.random() * 0.015 + 0.005,
      po: Math.random() * Math.PI * 2
    }));

    // Interactive Cursor Trail Particles
    const trailParticles = [];

    const render = () => {
      tick += 0.01;
      const W = w();
      const H = h();
      ctx.clearRect(0, 0, W, H);

      // 1. DYNAMIC CURSOR LIGHT GLOW (BILLING ACCENT)
      if (mouse.active) {
        const glowG = ctx.createRadialGradient(mouse.x, mouse.y, 10, mouse.x, mouse.y, 280);
        glowG.addColorStop(0, 'rgba(16, 185, 129, 0.14)');  // Emerald glow
        glowG.addColorStop(0.35, 'rgba(99, 102, 241, 0.08)'); // Indigo
        glowG.addColorStop(0.7, 'rgba(6, 182, 212, 0.04)');  // Cyan
        glowG.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = glowG;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 280, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. ORBS WITH CURSOR GRAVITY REPULSION
      orbs.forEach((o) => {
        const targetX = o.xr * W + Math.sin(tick * o.sx + o.r) * 50;
        const targetY = o.yr * H + Math.cos(tick * o.sy + o.r) * 40;

        // Smooth follow
        o.curX += (targetX - o.curX) * 0.05;
        o.curY += (targetY - o.curY) * 0.05;

        // Mouse repulsion
        const dx = mouse.x - o.curX;
        const dy = mouse.y - o.curY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 220 && dist > 0) {
          const force = (220 - dist) / 220;
          o.curX -= (dx / dist) * force * 15;
          o.curY -= (dy / dist) * force * 15;
        }

        const c1 = colors[o.c1];
        const c2 = colors[o.c2];

        const g = ctx.createRadialGradient(o.curX - o.r * 0.3, o.curY - o.r * 0.3, o.r * 0.05, o.curX, o.curY, o.r);
        g.addColorStop(0, `rgba(255,255,255,0.85)`);
        g.addColorStop(0.3, `rgba(${c1.r},${c1.g},${c1.b},0.55)`);
        g.addColorStop(0.75, `rgba(${c2.r},${c2.g},${c2.b},0.35)`);
        g.addColorStop(1, `rgba(255,255,255,0)`);

        ctx.save();
        ctx.beginPath();
        ctx.arc(o.curX, o.curY, o.r, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.shadowColor = `rgba(${c1.r},${c1.g},${c1.b},0.25)`;
        ctx.shadowBlur = 30;
        ctx.fill();

        // Specular highlight
        ctx.beginPath();
        ctx.ellipse(o.curX - o.r * 0.3, o.curY - o.r * 0.35, o.r * 0.22, o.r * 0.12, -0.6, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ctx.fill();
        ctx.restore();
      });

      // 3. FINANCIAL LEDGER CONSTELLATION LINES WITH MOUSE HIGHLIGHT
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 125) {
            // Distance to mouse center
            const mx = (particles[i].x + particles[j].x) / 2 - mouse.x;
            const my = (particles[i].y + particles[j].y) / 2 - mouse.y;
            const mDist = Math.sqrt(mx * mx + my * my);

            const isNearMouse = mDist < 160;
            const lineAlpha = (1 - d / 125) * (isNearMouse ? 0.45 : 0.12);
            const lineColor = isNearMouse ? 'rgba(16,185,129,' : 'rgba(99,102,241,';

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `${lineColor}${lineAlpha})`;
            ctx.lineWidth = isNearMouse ? 1.2 : 0.7;
            ctx.stroke();
          }
        }
      }

      // 4. FLOATING BILLING SYMBOLS (₹, $, %, GST, INV)
      floatingSymbols.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;
        s.rot += s.rotSpeed;

        if (s.x < 0) s.x = W;
        if (s.x > W) s.x = 0;
        if (s.y < 0) s.y = H;
        if (s.y > H) s.y = 0;

        // Push away from mouse
        const dx = mouse.x - s.x;
        const dy = mouse.y - s.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 150 && d > 0) {
          const angle = Math.atan2(dy, dx);
          const force = (150 - d) / 150;
          s.x -= Math.cos(angle) * force * 3.5;
          s.y -= Math.sin(angle) * force * 3.5;
        }

        const c = colors[s.ci];
        const isNear = d < 150;
        const alpha = isNear ? Math.min(0.65, s.a * 2.2) : (s.a + Math.sin(tick * s.ps * 40 + s.po) * 0.05);

        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rot);
        ctx.font = `700 ${s.fontSize * (isNear ? 1.25 : 1)}px 'Sora', sans-serif`;
        ctx.fillStyle = `rgba(${c.r},${c.g},${c.b},${Math.max(0.05, alpha)})`;
        ctx.shadowColor = `rgba(${c.r},${c.g},${c.b},0.4)`;
        ctx.shadowBlur = isNear ? 14 : 6;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(s.symbol, 0, 0);
        ctx.restore();
      });

      // 5. BACKGROUND PARTICLES WITH CURSOR INTERACTION
      particles.forEach((p) => {
        p.r = p.br + Math.sin(tick * p.ps * 60 + p.po) * 1.2;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        // Push away from mouse
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 140 && d > 0) {
          const angle = Math.atan2(dy, dx);
          const force = (140 - d) / 140;
          p.x -= Math.cos(angle) * force * 3;
          p.y -= Math.sin(angle) * force * 3;
        }

        const c = colors[p.ci];
        const isNear = d < 140;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(1, p.r * (isNear ? 1.4 : 1)), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c.r},${c.g},${c.b},${isNear ? Math.min(1, p.a * 1.8) : p.a})`;
        ctx.shadowColor = `rgba(${c.r},${c.g},${c.b},0.5)`;
        ctx.shadowBlur = isNear ? 12 : 6;
        ctx.fill();
      });

      // 6. INTERACTIVE CURSOR TRAIL SPARKLES (CURRENCY / CASH SPARKLES)
      for (let i = trailParticles.length - 1; i >= 0; i--) {
        const tp = trailParticles[i];
        tp.x += tp.vx;
        tp.y += tp.vy;
        tp.life -= tp.decay;
        tp.r *= 0.98;

        if (tp.life <= 0 || tp.r <= 0.5) {
          trailParticles.splice(i, 1);
          continue;
        }

        const c = colors[tp.ci];
        ctx.beginPath();
        ctx.arc(tp.x, tp.y, tp.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c.r},${c.g},${c.b},${tp.life * 0.75})`;
        ctx.shadowColor = `rgba(${c.r},${c.g},${c.b},0.6)`;
        ctx.shadowBlur = 10;
        ctx.fill();
      }

      raf = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <div className={className} style={{ position: 'relative', width: '100%', height: '100%', pointerEvents: 'none' }}>
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', display: 'block', pointerEvents: 'none' }}
      />
    </div>
  );
}
