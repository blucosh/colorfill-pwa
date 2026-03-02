import React, { useState, useCallback } from 'react';
import ColorCanvas from './ColorCanvas';
import PalettePanel from './PalettePanel';
import CompleteScreen from './CompleteScreen';
import { useImageProgress, usePinchZoom, useColorHistory } from '../hooks';
import { COLOR_PALETTE } from '../data/images';

export default function GameScreen({ image, onBack, onComplete, onSaveProgress }) {
  const { filledRegions, fillRegion, resetProgress, progress, isComplete } = useImageProgress(image.id, image.regions.length);
  const [selectedColor, setSelectedColor] = useState(1);
  const [showNumbers, setShowNumbers] = useState(true);
  const [showComplete, setShowComplete] = useState(false);
  const [wrongHint, setWrongHint] = useState(null); // colorId of the correct color
  const [recentColors, addToRecent] = useColorHistory();

  const { zoom, pan, setZoom, setPan, resetView, onTouchStart, onTouchMove, onTouchEnd, onWheel } = usePinchZoom(0.4, 6);

  const handleFillRegion = useCallback((regionId, colorId) => {
    fillRegion(regionId, colorId);
    addToRecent(colorId);
  }, [fillRegion, addToRecent]);

  const handleWrongColor = useCallback((correctColorId) => {
    setWrongHint(correctColorId);
    setTimeout(() => setWrongHint(null), 2500);
  }, []);

  const correctColorDef = wrongHint ? COLOR_PALETTE.find(c => c.id === wrongHint) : null;

  if (showComplete) {
    return (
      <CompleteScreen
        image={image}
        filledRegions={filledRegions}
        onBackToGallery={onBack}
        onRedo={() => { resetProgress(); setShowComplete(false); }}
      />
    );
  }

  return (
    <div style={styles.screen}>
      {/* Top Bar */}
      <div style={styles.topBar}>
        <button style={styles.backBtn} onClick={onBack}>‹</button>
        <div style={styles.titleArea}>
          <span style={styles.imageTitle}>{image.title}</span>
          <span style={styles.imageCategory}>{image.category} · {image.difficulty}</span>
        </div>
        <div style={styles.topActions}>
          <button
            style={{ ...styles.iconBtn, color: showNumbers ? '#c0842a' : '#ccc', borderColor: showNumbers ? '#c0842a' : '#e0e0e0' }}
            onClick={() => setShowNumbers(v => !v)}
            title="Toggle numbers"
          >
            #
          </button>
          {isComplete && (
            <button style={styles.doneBtn} onClick={() => { setShowComplete(true); onComplete(image.id); }}>
              ★ Done!
            </button>
          )}
        </div>
      </div>

      {/* Progress bar */}
      <div style={styles.progressBar}>
        <div style={styles.progressTrack}>
          <div style={{ width: `${progress}%`, height: '100%', background: 'linear-gradient(90deg, #c0842a, #e8a030)', borderRadius: 2, transition: 'width 0.4s ease' }} />
        </div>
        <span style={styles.progressText}>{progress}%</span>
      </div>

      {/* Wrong color hint toast */}
      {wrongHint && correctColorDef && (
        <div style={styles.wrongToast}>
          <div style={{ width: 20, height: 20, borderRadius: 4, background: correctColorDef.hex, border: '1px solid rgba(0,0,0,0.15)', flexShrink: 0 }} />
          <span>This area needs <strong>{correctColorDef.name} (#{wrongHint})</strong></span>
        </div>
      )}

      {/* Canvas */}
      <ColorCanvas
        image={image}
        filledRegions={filledRegions}
        selectedColor={selectedColor}
        onFillRegion={handleFillRegion}
        showNumbers={showNumbers}
        zoom={zoom}
        pan={pan}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onWheel={onWheel}
        onWrongColor={handleWrongColor}
      />

      {/* Zoom controls */}
      <div style={styles.zoomBar}>
        <button style={styles.zBtn} onClick={() => setZoom(z => Math.min(6, z + 0.4))}>＋</button>
        <button style={styles.zBtn} onClick={resetView} title="Reset view">⊙</button>
        <button style={styles.zBtn} onClick={() => setZoom(z => Math.max(0.4, z - 0.4))}>－</button>
        <div style={styles.zoomLabel}>{Math.round(zoom * 100)}%</div>
      </div>

      {/* Color Palette */}
      <PalettePanel
        selectedColor={selectedColor}
        onSelectColor={setSelectedColor}
        recentColors={recentColors}
      />
    </div>
  );
}

const styles = {
  screen: {
    height: '100vh', display: 'flex', flexDirection: 'column',
    background: '#ffffff', overflow: 'hidden',
  },
  topBar: {
    display: 'flex', alignItems: 'center', gap: 10,
    padding: '10px 16px',
    background: '#ffffff',
    borderBottom: '1px solid #eeeeee',
    flexShrink: 0,
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  backBtn: {
    background: 'none', border: '1px solid #e0e0e0', color: '#666',
    borderRadius: 8, width: 36, height: 36, fontSize: 20,
    cursor: 'pointer', display: 'flex', alignItems: 'center',
    justifyContent: 'center', flexShrink: 0, fontFamily: 'Lato, sans-serif',
  },
  titleArea: { flex: 1, display: 'flex', flexDirection: 'column' },
  imageTitle: {
    fontFamily: 'Playfair Display, serif', fontSize: 16,
    fontWeight: 700, color: '#1a1a2e', lineHeight: 1.2,
  },
  imageCategory: { fontSize: 10, color: '#aaa', letterSpacing: 1, textTransform: 'uppercase' },
  topActions: { display: 'flex', gap: 8, alignItems: 'center' },
  iconBtn: {
    background: 'none', border: '1px solid #e0e0e0',
    borderRadius: 8, width: 36, height: 36, fontSize: 14,
    fontWeight: 900, cursor: 'pointer', display: 'flex',
    alignItems: 'center', justifyContent: 'center',
    fontFamily: 'Lato, sans-serif', transition: 'color 0.2s',
  },
  doneBtn: {
    background: '#c0842a', border: 'none', borderRadius: 8,
    padding: '0 12px', height: 36, fontSize: 13, fontWeight: 700,
    color: '#ffffff', cursor: 'pointer', fontFamily: 'Lato, sans-serif',
    animation: 'pulse 1.5s infinite',
  },
  progressBar: {
    display: 'flex', alignItems: 'center', gap: 8,
    padding: '0 16px', height: 20,
    background: '#fafafa', borderBottom: '1px solid #f0f0f0',
    flexShrink: 0,
  },
  progressTrack: {
    flex: 1, height: 4, background: '#eee', borderRadius: 2, overflow: 'hidden',
  },
  progressText: { fontSize: 10, color: '#c0842a', fontWeight: 700, width: 32, textAlign: 'right', flexShrink: 0 },
  wrongToast: {
    position: 'absolute', top: 80, left: '50%',
    transform: 'translateX(-50%)',
    background: '#fff', border: '1px solid #e0e0e0',
    borderLeft: '4px solid #e53935',
    borderRadius: 10, padding: '10px 16px',
    fontSize: 13, color: '#333',
    boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
    zIndex: 100, whiteSpace: 'nowrap',
    display: 'flex', alignItems: 'center', gap: 10,
    fontFamily: 'Lato, sans-serif',
    animation: 'bounceIn 0.3s ease',
  },
  zoomBar: {
    display: 'flex', gap: 6, justifyContent: 'center', alignItems: 'center',
    padding: '6px 16px', background: '#fafafa',
    borderTop: '1px solid #f0f0f0', flexShrink: 0,
  },
  zBtn: {
    background: '#fff', border: '1px solid #e0e0e0', color: '#666',
    borderRadius: 6, width: 30, height: 28, fontSize: 14,
    fontWeight: 900, cursor: 'pointer', display: 'flex',
    alignItems: 'center', justifyContent: 'center', fontFamily: 'Lato, sans-serif',
  },
  zoomLabel: { fontSize: 10, color: '#aaa', width: 36, textAlign: 'center' },
};
