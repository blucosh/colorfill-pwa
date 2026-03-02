import React, { useState } from 'react';
import { COLOR_PALETTE } from '../data/images';

export default function PalettePanel({ selectedColor, onSelectColor, recentColors }) {
  const [expanded, setExpanded] = useState(false);

  const selectedDef = COLOR_PALETTE.find(c => c.id === selectedColor);

  return (
    <div style={styles.panel}>
      {/* Selected Color Display */}
      <div style={styles.selectedRow}>
        <div style={{
          ...styles.selectedSwatch,
          background: selectedDef?.hex,
        }} />
        <div style={styles.selectedInfo}>
          <span style={styles.selectedName}>{selectedDef?.name}</span>
          <span style={styles.selectedNum}>#{selectedColor}</span>
        </div>
        <button
          style={styles.expandBtn}
          onClick={() => setExpanded(e => !e)}
          aria-label="Toggle full palette"
        >
          {expanded ? '▲' : '▼'}
        </button>
      </div>

      {/* Recent colors row */}
      {!expanded && (
        <div style={styles.recentRow}>
          <span style={styles.recentLabel}>Recent</span>
          <div style={styles.swatchRow}>
            {recentColors.map(id => {
              const def = COLOR_PALETTE.find(c => c.id === id);
              if (!def) return null;
              return (
                <SwatchButton
                  key={id}
                  def={def}
                  selected={selectedColor === id}
                  onSelect={onSelectColor}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* Full palette grid */}
      {expanded && (
        <div style={styles.fullGrid}>
          {COLOR_PALETTE.map(def => (
            <SwatchButton
              key={def.id}
              def={def}
              selected={selectedColor === def.id}
              onSelect={onSelectColor}
              showLabel
            />
          ))}
        </div>
      )}
    </div>
  );
}

function SwatchButton({ def, selected, onSelect, showLabel }) {
  const isLight = isLightColor(def.hex);
  return (
    <button
      style={{
        ...styles.swatch,
        background: def.hex,
        border: selected ? '3px solid #f0ece3' : '2px solid transparent',
        transform: selected ? 'scale(1.2)' : 'scale(1)',
        boxShadow: selected
          ? `0 0 0 2px #D4AC0D, 0 4px 12px rgba(0,0,0,0.5)`
          : '0 2px 6px rgba(0,0,0,0.3)',
        outline: def.hex === '#ECEFF1' ? '1px solid #3a3a5a' : 'none',
        position: 'relative',
      }}
      onClick={() => onSelect(def.id)}
      title={`${def.name} (#${def.id})`}
    >
      <span style={{
        fontSize: 8,
        fontWeight: 900,
        color: isLight ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.8)',
        pointerEvents: 'none',
      }}>
        {def.id}
      </span>
      {showLabel && (
        <span style={{
          position: 'absolute',
          bottom: -16,
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: 8,
          color: '#7a7a9a',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
        }}>
          {def.name}
        </span>
      )}
    </button>
  );
}

function isLightColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 155;
}

const styles = {
  panel: {
    background: '#1a1a3e',
    borderTop: '1px solid #2a2a5a',
    padding: '10px 16px 12px',
    userSelect: 'none',
  },
  selectedRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  selectedSwatch: {
    width: 32,
    height: 32,
    borderRadius: 8,
    flexShrink: 0,
    border: '2px solid #3a3a6a',
    boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
  },
  selectedInfo: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  selectedName: {
    fontSize: 14,
    fontWeight: 700,
    color: '#f0ece3',
    fontFamily: 'Playfair Display, serif',
  },
  selectedNum: {
    fontSize: 10,
    color: '#D4AC0D',
    fontWeight: 700,
    letterSpacing: 1,
  },
  expandBtn: {
    background: '#12122a',
    border: '1px solid #2a2a4a',
    color: '#7a7a9a',
    borderRadius: 8,
    padding: '6px 10px',
    cursor: 'pointer',
    fontSize: 12,
    fontFamily: 'Lato, sans-serif',
  },
  recentLabel: {
    fontSize: 9,
    letterSpacing: 2,
    color: '#5a5a7a',
    textTransform: 'uppercase',
    marginRight: 10,
    flexShrink: 0,
  },
  recentRow: {
    display: 'flex',
    alignItems: 'center',
  },
  swatchRow: {
    display: 'flex',
    gap: 10,
    flexWrap: 'wrap',
  },
  swatch: {
    width: 32,
    height: 32,
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'transform 0.15s, box-shadow 0.15s, border 0.1s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  fullGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: 8,
    marginTop: 4,
    paddingBottom: 20,
  },
};
