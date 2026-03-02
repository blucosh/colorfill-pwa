import React, { useState, useCallback } from 'react';
import ColorCanvas from './ColorCanvas';
import PalettePanel from './PalettePanel';
import CompleteScreen from './CompleteScreen';
import { useImageProgress, usePinchZoom, useColorHistory } from '../hooks';

export default function GameScreen({ image, onBack, onComplete, onSaveProgress }) {
  const {
    filledRegions,
    fillRegion,
    resetProgress,
    progress,
    isComplete,
  } = useImageProgress(image.id, image.regions.length);

  const [selectedColor, setSelectedColor] = useState(1);
  const [showNumbers, setShowNumbers] = useState(true);
  const [showComplete, setShowComplete] = useState(false);
  const [recentColors, addToRecent] = useColorHistory();

  const {
    zoom, pan, setZoom, setPan, resetView,
    onTouchStart, onTouchMove, onTouchEnd, onWheel,
  } = usePinchZoom(0.4, 6);

  const handleFillRegion = useCallback((regionId, colorId) => {
    fillRegion(regionId, colorId);
    addToRecent(colorId);
  }, [fillRegion, addToRecent]);

  const handleSelectColor = useCallback((colorId) => {
    setSelectedColor(colorId);
  }, []);

  // Show complete screen when done
  const handleCheckComplete = () => {
    if (isComplete && !showComplete) {
      setShowComplete(true);
      onComplete(image.id);
    }
  };

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
          <span style={styles.imageCategory}>{image.category}</span>
        </div>
        <div style={styles.topActions}>
          <button
            style={{ ...styles.iconBtn, color: showNumbers ? '#D4AC0D' : '#5a5a7a' }}
            onClick={() => setShowNumbers(v => !v)}
            title="Toggle numbers"
          >
            #
          </button>
          {isComplete && (
            <button style={styles.doneBtn} onClick={() => setShowComplete(true)}>
              ★ Done!
            </button>
          )}
        </div>
      </div>

      {/* Progress bar */}
      <div style={styles.progressBar}>
        <div style={styles.progressFill} data-progress={progress}>
          <div style={{ width: `${progress}%`, height: '100%', background: 'linear-gradient(90deg, #D4AC0D, #F39C12)', borderRadius: 2, transition: 'width 0.4s ease' }} />
        </div>
        <span style={styles.progressText}>{progress}%</span>
      </div>

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
      />

      {/* Zoom controls (desktop helper) */}
      <div style={styles.zoomBar}>
        <button style={styles.zBtn} onClick={() => setZoom(z => Math.min(6, z + 0.4))}>＋</button>
        <button style={styles.zBtn} onClick={resetView} title="Reset view">⊙</button>
        <button style={styles.zBtn} onClick={() => setZoom(z => Math.max(0.4, z - 0.4))}>－</button>
        <div style={styles.zoomLabel}>{Math.round(zoom * 100)}%</div>
      </div>

      {/* Color Palette */}
      <PalettePanel
        selectedColor={selectedColor}
        onSelectColor={handleSelectColor}
        recentColors={recentColors}
      />

      {/* Complete check (triggered on each fill) */}
      {isComplete && !showComplete && (
        <div style={styles.completeToast} onClick={() => setShowComplete(true)}>
          ★ Artwork complete! Tap to celebrate →
        </div>
      )}
    </div>
  );
}

const styles = {
  screen: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: '#0e0e24',
    overflow: 'hidden',
  },
  topBar: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '10px 16px',
    background: '#12122a',
    borderBottom: '1px solid #2a2a4a',
    flexShrink: 0,
  },
  backBtn: {
    background: 'none',
    border: '1px solid #2a2a4a',
    color: '#7a7a9a',
    borderRadius: 8,
    width: 36,
    height: 36,
    fontSize: 20,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    fontFamily: 'Lato, sans-serif',
  },
  titleArea: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  imageTitle: {
    fontFamily: 'Playfair Display, serif',
    fontSize: 16,
    fontWeight: 700,
    color: '#f0ece3',
    lineHeight: 1.2,
  },
  imageCategory: {
    fontSize: 10,
    color: '#5a5a7a',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  topActions: {
    display: 'flex',
    gap: 8,
    alignItems: 'center',
  },
  iconBtn: {
    background: 'none',
    border: '1px solid #2a2a4a',
    borderRadius: 8,
    width: 36,
    height: 36,
    fontSize: 14,
    fontWeight: 900,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Lato, sans-serif',
    transition: 'color 0.2s',
  },
  doneBtn: {
    background: '#D4AC0D',
    border: 'none',
    borderRadius: 8,
    padding: '0 12px',
    height: 36,
    fontSize: 13,
    fontWeight: 700,
    color: '#12122a',
    cursor: 'pointer',
    fontFamily: 'Lato, sans-serif',
    animation: 'pulse 1.5s infinite',
  },
  progressBar: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '0 16px',
    height: 20,
    background: '#12122a',
    flexShrink: 0,
  },
  progressFill: {
    flex: 1,
    height: 3,
    background: '#2a2a4a',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressText: {
    fontSize: 10,
    color: '#D4AC0D',
    fontWeight: 700,
    width: 32,
    textAlign: 'right',
    flexShrink: 0,
  },
  zoomBar: {
    display: 'flex',
    gap: 6,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '6px 16px',
    background: '#12122a',
    borderTop: '1px solid #2a2a4a',
    flexShrink: 0,
  },
  zBtn: {
    background: '#1e1e3e',
    border: '1px solid #2a2a4a',
    color: '#9a9aba',
    borderRadius: 6,
    width: 30,
    height: 28,
    fontSize: 14,
    fontWeight: 900,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Lato, sans-serif',
  },
  zoomLabel: {
    fontSize: 10,
    color: '#5a5a7a',
    width: 36,
    textAlign: 'center',
  },
  completeToast: {
    position: 'fixed',
    bottom: 200,
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#D4AC0D',
    color: '#12122a',
    padding: '12px 24px',
    borderRadius: 24,
    fontWeight: 700,
    fontSize: 14,
    cursor: 'pointer',
    boxShadow: '0 8px 30px rgba(212,172,13,0.5)',
    zIndex: 100,
    whiteSpace: 'nowrap',
    fontFamily: 'Lato, sans-serif',
    animation: 'bounceIn 0.5s cubic-bezier(0.68,-0.55,0.27,1.55)',
  },
};
