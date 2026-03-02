import React, { useState } from 'react';
import { ALL_IMAGES, CATEGORIES, getDailyImage, COLOR_PALETTE } from '../data/images';

const DIFF_COLORS = {
  Easy: '#7DCEA0',
  Medium: '#F4D03F',
  Hard: '#E74C3C',
};

export default function Gallery({ onSelectImage, completedImages }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const dailyImage = getDailyImage();

  const filtered = ALL_IMAGES.filter(img =>
    activeCategory === 'All' || img.category === activeCategory
  );

  const getProgressColor = (img) => {
    const prog = completedImages[img.id];
    if (!prog) return null;
    const pct = Math.round((Object.keys(prog).length / img.regions.length) * 100);
    return pct;
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.logoRow}>
            <span style={styles.logoIcon}>◈</span>
            <div>
              <h1 style={styles.appName}>ColorFill</h1>
              <p style={styles.tagline}>Color by Number · Adult Edition</p>
            </div>
          </div>
          <div style={styles.statsRow}>
            <Stat icon="✦" label="Completed" value={Object.values(completedImages).filter(v => v === 'done').length} />
            <Stat icon="◐" label="In Progress" value={Object.values(completedImages).filter(v => v !== 'done' && v).length} />
          </div>
        </div>
      </div>

      {/* Daily Image Banner */}
      <div style={styles.dailyBanner} onClick={() => onSelectImage(dailyImage)}>
        <div style={styles.dailyLeft}>
          <span style={styles.dailyBadge}>✦ TODAY'S IMAGE</span>
          <h2 style={styles.dailyTitle}>{dailyImage.title}</h2>
          <p style={styles.dailyMeta}>{dailyImage.category} · {dailyImage.difficulty} · ~{dailyImage.estimatedMinutes} min</p>
          <button style={styles.dailyBtn}>Start Coloring →</button>
        </div>
        <div style={styles.dailyPreview}>
          <svg viewBox={dailyImage.viewBox} style={styles.dailySvg}>
            {dailyImage.regions.slice(0, 20).map(r => (
              <path key={r.id} d={r.d} fill="#2a2a4a" stroke="#3a3a5c" strokeWidth="0.8" />
            ))}
          </svg>
        </div>
      </div>

      {/* Category filter */}
      <div style={styles.categoryScroll}>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            style={{ ...styles.catChip, ...(activeCategory === cat ? styles.catChipActive : {}) }}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div style={styles.grid}>
        {filtered.map((img, i) => {
          const pct = getProgressColor(img);
          const isDone = completedImages[img.id] === 'done';
          return (
            <div
              key={img.id}
              style={{ ...styles.card, animationDelay: `${i * 0.05}s` }}
              onClick={() => onSelectImage(img)}
            >
              <div style={styles.cardSvgWrap}>
                <svg viewBox={img.viewBox} style={styles.cardSvg}>
                  {img.regions.map(r => {
                    const saved = completedImages[img.id];
                    const filled = saved && saved !== 'done' ? saved[r.id] : (isDone ? r.colorId : null);
                    const color = filled ? COLOR_PALETTE.find(c => c.id === filled)?.hex : null;
                    return <path key={r.id} d={r.d} fill={color || '#2a2a4a'} stroke="#3a3a5c" strokeWidth="0.5" />;
                  })}
                </svg>
                {isDone && <div style={styles.doneOverlay}><span style={styles.doneStar}>★</span></div>}
              </div>
              <div style={styles.cardBody}>
                <div style={styles.cardTitleRow}>
                  <span style={styles.cardTitle}>{img.title}</span>
                  <span style={{ ...styles.diffBadge, color: DIFF_COLORS[img.difficulty] }}>
                    {img.difficulty}
                  </span>
                </div>
                <p style={styles.cardCategory}>{img.category} · {img.estimatedMinutes} min</p>
                {pct !== null && !isDone && (
                  <div style={styles.progressWrap}>
                    <div style={styles.progressBg}>
                      <div style={{ ...styles.progressFill, width: `${pct}%` }} />
                    </div>
                    <span style={styles.progressLabel}>{pct}%</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <p style={styles.footerText}>New image added daily ✦ Progress auto-saved</p>
      </div>
    </div>
  );
}

function Stat({ icon, label, value }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: 20, color: '#D4AC0D' }}>{icon}</div>
      <div style={{ fontSize: 18, fontWeight: 700, color: '#f0ece3', fontFamily: 'Playfair Display, serif' }}>{value}</div>
      <div style={{ fontSize: 10, color: '#7a7a9a', letterSpacing: 1, textTransform: 'uppercase' }}>{label}</div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: '#12122a',
    paddingBottom: 40,
    overflowX: 'hidden',
  },
  header: {
    background: 'linear-gradient(135deg, #1a1a3e 0%, #12122a 100%)',
    borderBottom: '1px solid #2a2a4a',
  },
  headerInner: {
    maxWidth: 700,
    margin: '0 auto',
    padding: '28px 20px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 16,
  },
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
  },
  logoIcon: {
    fontSize: 44,
    color: '#D4AC0D',
    lineHeight: 1,
  },
  appName: {
    fontFamily: 'Playfair Display, serif',
    fontSize: 32,
    fontWeight: 900,
    color: '#f0ece3',
    letterSpacing: -1,
    margin: 0,
  },
  tagline: {
    fontSize: 11,
    color: '#7a7a9a',
    letterSpacing: 2,
    textTransform: 'uppercase',
    margin: '3px 0 0',
  },
  statsRow: {
    display: 'flex',
    gap: 24,
  },
  dailyBanner: {
    maxWidth: 700,
    margin: '24px auto 0',
    padding: '0 20px',
    cursor: 'pointer',
  },
  dailyBannerInner: {
    background: 'linear-gradient(135deg, #1a1a3e, #2a1a4e)',
    borderRadius: 20,
    padding: '24px',
    border: '1px solid #3a3a6a',
    display: 'flex',
    gap: 20,
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
    transition: 'transform 0.2s',
  },
  dailyLeft: {
    flex: 1,
    background: 'linear-gradient(135deg, #1a1a3e, #2a1a4e)',
    borderRadius: 20,
    padding: '24px',
    border: '1px solid #3a3a6a',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    transition: 'transform 0.2s',
  },
  dailyBadge: {
    fontSize: 10,
    letterSpacing: 3,
    color: '#D4AC0D',
    textTransform: 'uppercase',
    fontWeight: 700,
  },
  dailyTitle: {
    fontFamily: 'Playfair Display, serif',
    fontSize: 26,
    fontWeight: 700,
    color: '#f0ece3',
    margin: 0,
    lineHeight: 1.2,
  },
  dailyMeta: {
    fontSize: 12,
    color: '#7a7a9a',
    margin: 0,
  },
  dailyBtn: {
    display: 'inline-block',
    marginTop: 8,
    padding: '10px 20px',
    background: '#D4AC0D',
    color: '#12122a',
    border: 'none',
    borderRadius: 10,
    fontWeight: 700,
    fontSize: 13,
    cursor: 'pointer',
    letterSpacing: 0.5,
    alignSelf: 'flex-start',
    fontFamily: 'Lato, sans-serif',
  },
  dailyPreview: {
    width: 100,
    height: 100,
    flexShrink: 0,
    display: 'none',
  },
  dailySvg: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  categoryScroll: {
    maxWidth: 700,
    margin: '20px auto 0',
    padding: '0 20px',
    display: 'flex',
    gap: 8,
    overflowX: 'auto',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  },
  catChip: {
    flexShrink: 0,
    padding: '7px 16px',
    background: '#1e1e3e',
    color: '#9a9aba',
    border: '1px solid #2a2a4a',
    borderRadius: 20,
    fontSize: 13,
    cursor: 'pointer',
    fontFamily: 'Lato, sans-serif',
    transition: 'all 0.15s',
    whiteSpace: 'nowrap',
  },
  catChipActive: {
    background: '#D4AC0D',
    color: '#12122a',
    border: '1px solid #D4AC0D',
    fontWeight: 700,
  },
  grid: {
    maxWidth: 700,
    margin: '20px auto 0',
    padding: '0 20px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: 16,
  },
  card: {
    background: '#1a1a3e',
    borderRadius: 16,
    overflow: 'hidden',
    border: '1px solid #2a2a4a',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
    animation: 'fadeUp 0.4s ease both',
  },
  cardSvgWrap: {
    aspectRatio: '1',
    background: '#12122a',
    position: 'relative',
    overflow: 'hidden',
  },
  cardSvg: {
    width: '100%',
    height: '100%',
    display: 'block',
  },
  doneOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(212, 172, 13, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  doneStar: {
    fontSize: 36,
    color: '#D4AC0D',
  },
  cardBody: {
    padding: '12px 14px 14px',
  },
  cardTitleRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  cardTitle: {
    fontFamily: 'Playfair Display, serif',
    fontSize: 15,
    fontWeight: 600,
    color: '#f0ece3',
  },
  diffBadge: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  cardCategory: {
    fontSize: 11,
    color: '#5a5a7a',
    margin: 0,
  },
  progressWrap: {
    marginTop: 8,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  progressBg: {
    flex: 1,
    height: 3,
    background: '#2a2a4a',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #D4AC0D, #F39C12)',
    borderRadius: 2,
    transition: 'width 0.5s ease',
  },
  progressLabel: {
    fontSize: 10,
    color: '#D4AC0D',
    fontWeight: 700,
    minWidth: 28,
  },
  footer: {
    textAlign: 'center',
    padding: '32px 20px 0',
  },
  footerText: {
    fontSize: 12,
    color: '#3a3a5a',
    letterSpacing: 1,
  },
};
