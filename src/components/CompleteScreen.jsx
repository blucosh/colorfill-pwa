import React, { useEffect, useRef } from 'react';
import { COLOR_PALETTE } from '../data/images';

export default function CompleteScreen({ image, filledRegions, onBackToGallery, onRedo, onShare }) {
  const canvasRef = useRef(null);

  const getColor = (colorId) => COLOR_PALETTE.find(c => c.id === colorId)?.hex || '#1a1a3e';

  // Draw artwork to canvas for sharing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // The canvas is just for display; actual share uses SVG blob
  }, []);

  const handleShare = async () => {
    try {
      // Build SVG string
      const svgNS = 'http://www.w3.org/2000/svg';
      const [w, h] = image.viewBox.split(' ').slice(2).map(Number);

      let svgStr = `<svg xmlns="${svgNS}" viewBox="${image.viewBox}" width="${w}" height="${h}" style="background:#12122a">`;
      image.regions.forEach(r => {
        const filled = filledRegions[r.id];
        const fill = filled ? getColor(filled) : '#1a1a3e';
        svgStr += `<path d="${r.d}" fill="${fill}" stroke="rgba(255,255,255,0.08)" stroke-width="0.5"/>`;
      });
      // Watermark
      svgStr += `<text x="${w/2}" y="${h - 10}" text-anchor="middle" font-family="serif" font-size="12" fill="rgba(212,172,13,0.5)">ColorFill App</text>`;
      svgStr += `</svg>`;

      const blob = new Blob([svgStr], { type: 'image/svg+xml' });
      const file = new File([blob], `${image.title.replace(/\s+/g, '_')}.svg`, { type: 'image/svg+xml' });

      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          title: `My ColorFill: ${image.title}`,
          text: 'I just finished this color-by-number artwork! 🎨',
          files: [file],
        });
      } else {
        // Fallback: download
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${image.title.replace(/\s+/g, '_')}.svg`;
        a.click();
        URL.revokeObjectURL(url);
      }
    } catch (err) {
      console.error('Share failed:', err);
    }
  };

  return (
    <div style={styles.screen}>
      <div style={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <div key={i} style={{
            ...styles.particle,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }} />
        ))}
      </div>

      <div style={styles.content}>
        <div style={styles.badge}>✦ MASTERPIECE COMPLETE ✦</div>
        <h1 style={styles.title}>{image.title}</h1>
        <p style={styles.subtitle}>Your artwork is stunning</p>

        {/* Finished artwork preview */}
        <div style={styles.artworkFrame}>
          <div style={styles.artworkInner}>
            <svg viewBox={image.viewBox} style={styles.artworkSvg}>
              {image.regions.map(r => {
                const filled = filledRegions[r.id];
                return (
                  <path
                    key={r.id}
                    d={r.d}
                    fill={filled ? getColor(filled) : '#1a1a3e'}
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="0.5"
                  />
                );
              })}
            </svg>
          </div>
          <div style={styles.frameCorner} data-pos="tl" />
          <div style={styles.frameCorner} data-pos="tr" />
          <div style={styles.frameCorner} data-pos="bl" />
          <div style={styles.frameCorner} data-pos="br" />
        </div>

        {/* Stats */}
        <div style={styles.statsRow}>
          <StatBox label="Regions" value={image.regions.length} />
          <StatBox label="Colors Used" value={new Set(Object.values(filledRegions)).size} />
          <StatBox label="Difficulty" value={image.difficulty} />
        </div>

        {/* Actions */}
        <div style={styles.actions}>
          <button style={styles.btnShare} onClick={handleShare}>
            ↗ Save / Share
          </button>
          <button style={styles.btnRedo} onClick={onRedo}>
            ↺ Color Again
          </button>
          <button style={styles.btnGallery} onClick={onBackToGallery}>
            ◈ Gallery
          </button>
        </div>
      </div>
    </div>
  );
}

function StatBox({ label, value }) {
  return (
    <div style={{ textAlign: 'center', flex: 1 }}>
      <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, fontWeight: 700, color: '#D4AC0D' }}>
        {value}
      </div>
      <div style={{ fontSize: 10, color: '#5a5a7a', letterSpacing: 1, textTransform: 'uppercase', marginTop: 2 }}>
        {label}
      </div>
    </div>
  );
}

const styles = {
  screen: {
    minHeight: '100vh',
    background: 'radial-gradient(ellipse at center, #1a1a4e 0%, #0a0a1e 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    padding: '20px',
  },
  particles: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
  },
  particle: {
    position: 'absolute',
    width: 4,
    height: 4,
    borderRadius: '50%',
    background: '#D4AC0D',
    animation: 'particleFloat 3s ease-in-out infinite',
    opacity: 0.6,
  },
  content: {
    maxWidth: 480,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
    zIndex: 1,
  },
  badge: {
    fontSize: 10,
    letterSpacing: 4,
    color: '#D4AC0D',
    textTransform: 'uppercase',
    fontWeight: 700,
    background: 'rgba(212,172,13,0.1)',
    border: '1px solid rgba(212,172,13,0.3)',
    borderRadius: 20,
    padding: '6px 16px',
  },
  title: {
    fontFamily: 'Playfair Display, serif',
    fontSize: 36,
    fontWeight: 900,
    color: '#f0ece3',
    textAlign: 'center',
    margin: 0,
    lineHeight: 1.2,
  },
  subtitle: {
    fontSize: 14,
    color: '#7a7a9a',
    margin: 0,
    fontStyle: 'italic',
  },
  artworkFrame: {
    position: 'relative',
    width: '100%',
    maxWidth: 360,
    padding: 16,
    background: '#12122a',
    borderRadius: 4,
    border: '1px solid #D4AC0D',
    boxShadow: '0 0 60px rgba(212,172,13,0.2), 0 20px 60px rgba(0,0,0,0.6)',
  },
  artworkInner: {
    background: '#0e0e24',
    borderRadius: 2,
    overflow: 'hidden',
  },
  artworkSvg: {
    width: '100%',
    display: 'block',
    maxHeight: '50vh',
  },
  frameCorner: {
    position: 'absolute',
    width: 12,
    height: 12,
    border: '2px solid #D4AC0D',
  },
  statsRow: {
    display: 'flex',
    width: '100%',
    background: '#1a1a3e',
    border: '1px solid #2a2a4a',
    borderRadius: 12,
    padding: '16px 0',
    gap: 0,
  },
  actions: {
    display: 'flex',
    gap: 10,
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
  btnShare: {
    flex: 1,
    minWidth: 140,
    padding: '14px 20px',
    background: '#D4AC0D',
    color: '#12122a',
    border: 'none',
    borderRadius: 12,
    fontWeight: 700,
    fontSize: 15,
    cursor: 'pointer',
    fontFamily: 'Lato, sans-serif',
    letterSpacing: 0.5,
    boxShadow: '0 4px 20px rgba(212,172,13,0.4)',
  },
  btnRedo: {
    flex: 1,
    minWidth: 130,
    padding: '14px 20px',
    background: 'transparent',
    color: '#f0ece3',
    border: '1px solid #3a3a6a',
    borderRadius: 12,
    fontWeight: 600,
    fontSize: 15,
    cursor: 'pointer',
    fontFamily: 'Lato, sans-serif',
  },
  btnGallery: {
    padding: '14px 20px',
    background: 'transparent',
    color: '#7a7a9a',
    border: '1px solid #2a2a4a',
    borderRadius: 12,
    fontWeight: 600,
    fontSize: 15,
    cursor: 'pointer',
    fontFamily: 'Lato, sans-serif',
  },
};
