import React, { useState } from 'react';
import { COLOR_PALETTE } from '../data/images';

export default function PalettePanel({ selectedColor, onSelectColor, recentColors }) {
  const [expanded, setExpanded] = useState(false);
  const selectedDef = COLOR_PALETTE.find(c => c.id === selectedColor);

  return (
    <div style={styles.panel}>
      <div style={styles.selectedRow}>
        <div style={{ ...styles.selectedSwatch, background: selectedDef?.hex, border: '2px solid #e0e0e0' }} />
        <div style={styles.selectedInfo}>
          <span style={styles.selectedName}>{selectedDef?.name}</span>
          <span style={styles.selectedNum}>Color #{selectedColor}</span>
        </div>
        <button style={styles.expandBtn} onClick={() => setExpanded(e => !e)}>
          {expanded ? '▲ Less' : '▼ All Colors'}
        </button>
      </div>

      {!expanded && (
        <div style={styles.recentRow}>
          <span style={styles.recentLabel}>Recent</span>
          <div style={styles.swatchRow}>
            {recentColors.map(id => {
              const def = COLOR_PALETTE.find(c => c.id === id);
              if (!def) return null;
              return <SwatchButton key={id} def={def} selected={selectedColor === id} onSelect={onSelectColor} />;
            })}
          </div>
        </div>
      )}

      {expanded && (
        <div style={styles.fullGrid}>
          {COLOR_PALETTE.map(def => (
            <SwatchButton key={def.id} def={def} selected={selectedColor === def.id} onSelect={onSelectColor} showLabel />
          ))}
        </div>
      )}
    </div>
  );
}

function isLightColor(hex) {
  const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
  return (r*299+g*587+b*114)/1000 > 155;
}

function SwatchButton({ def, selected, onSelect, showLabel }) {
  return (
    <button
      style={{
        width: 34, height: 34, borderRadius: '50%', cursor: 'pointer',
        position: 'relative', flexShrink: 0,
        background: def.hex,
        border: selected ? '3px solid #333' : (def.hex === '#ECEFF1' ? '2px solid #ccc' : '2px solid transparent'),
        transform: selected ? 'scale(1.2)' : 'scale(1)',
        boxShadow: selected ? `0 0 0 2px #c0842a, 0 4px 12px rgba(0,0,0,0.2)` : '0 1px 4px rgba(0,0,0,0.15)',
        transition: 'transform 0.15s, box-shadow 0.15s',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
      onClick={() => onSelect(def.id)}
      title={`${def.name} (#${def.id})`}
    >
      <span style={{ fontSize: 8, fontWeight: 900, color: isLightColor(def.hex) ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.8)', pointerEvents: 'none' }}>
        {def.id}
      </span>
      {showLabel && (
        <span style={{ position: 'absolute', bottom: -16, left: '50%', transform: 'translateX(-50%)', fontSize: 8, color: '#aaa', whiteSpace: 'nowrap', pointerEvents: 'none' }}>
          {def.name}
        </span>
      )}
    </button>
  );
}

const styles = {
  panel: {
    background: '#ffffff',
    borderTop: '1px solid #eeeeee',
    padding: '10px 16px 14px',
    userSelect: 'none',
    boxShadow: '0 -4px 20px rgba(0,0,0,0.06)',
  },
  selectedRow: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 },
  selectedSwatch: { width: 32, height: 32, borderRadius: 8, flexShrink: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' },
  selectedInfo: { flex: 1, display: 'flex', flexDirection: 'column' },
  selectedName: { fontSize: 14, fontWeight: 700, color: '#1a1a2e', fontFamily: 'Playfair Display, serif' },
  selectedNum: { fontSize: 10, color: '#c0842a', fontWeight: 700, letterSpacing: 1 },
  expandBtn: {
    background: '#f5f5f5', border: '1px solid #e0e0e0', color: '#666',
    borderRadius: 8, padding: '6px 10px', cursor: 'pointer',
    fontSize: 11, fontFamily: 'Lato, sans-serif', whiteSpace: 'nowrap',
  },
  recentLabel: { fontSize: 9, letterSpacing: 2, color: '#bbb', textTransform: 'uppercase', marginRight: 10, flexShrink: 0 },
  recentRow: { display: 'flex', alignItems: 'center' },
  swatchRow: { display: 'flex', gap: 10, flexWrap: 'wrap' },
  fullGrid: { display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 8, marginTop: 4, paddingBottom: 20 },
};
