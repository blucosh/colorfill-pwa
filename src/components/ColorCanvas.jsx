import React, { useRef, useEffect, useCallback, useState } from 'react';
import { COLOR_PALETTE } from '../data/images';

export default function ColorCanvas({
  image,
  filledRegions,
  selectedColor,
  onFillRegion,
  showNumbers,
  zoom,
  pan,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
  onWheel,
  onWrongColor,
}) {
  const containerRef = useRef(null);
  const [hoveredRegion, setHoveredRegion] = useState(null);
  const [shakenRegion, setShakenRegion] = useState(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [onWheel]);

  const getColor = (colorId) => COLOR_PALETTE.find(c => c.id === colorId)?.hex || '#f0f0f0';

  const handleRegionClick = useCallback((e, region) => {
    e.stopPropagation();
    if (filledRegions[region.id]) return;
    if (selectedColor === region.colorId) {
      onFillRegion(region.id, selectedColor);
    } else {
      setShakenRegion(region.id);
      setTimeout(() => setShakenRegion(null), 600);
      onWrongColor && onWrongColor(region.colorId);
    }
  }, [selectedColor, filledRegions, onFillRegion, onWrongColor]);

  return (
    <div ref={containerRef} style={styles.canvas}
      onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
      <div style={{
        ...styles.svgWrapper,
        transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
        transformOrigin: 'center center',
        willChange: 'transform',
      }}>
        <svg viewBox={image.viewBox} style={styles.svg}>
          {image.regions.map((region) => {
            const filled = filledRegions[region.id];
            const fillColor = filled ? getColor(filled) : '#ffffff';
            const isShaken = shakenRegion === region.id;
            const isHovered = hoveredRegion === region.id;

            const nums = (region.d.match(/-?\d+\.?\d*/g) || []).map(Number);
            const xs = nums.filter((_, i) => i % 2 === 0).filter(n => n > 0 && n < 2000);
            const ys = nums.filter((_, i) => i % 2 === 1).filter(n => n > 0 && n < 2000);
            const cx = xs.length ? (Math.min(...xs) + Math.max(...xs)) / 2 : 0;
            const cy = ys.length ? (Math.min(...ys) + Math.max(...ys)) / 2 : 0;

            return (
              <g key={region.id} style={isShaken ? { animation: 'shake 0.5s ease' } : {}}>
                <path
                  d={region.d}
                  fill={isShaken ? '#ffe0e0' : fillColor}
                  stroke={filled ? 'rgba(0,0,0,0.1)' : '#bbb'}
                  strokeWidth={filled ? '0.5' : '0.8'}
                  style={{
                    cursor: filled ? 'default' : 'pointer',
                    transition: 'fill 0.2s ease',
                    filter: isHovered && !filled ? 'brightness(0.93)' : 'none',
                  }}
                  onClick={(e) => handleRegionClick(e, region)}
                  onMouseEnter={() => !filled && setHoveredRegion(region.id)}
                  onMouseLeave={() => setHoveredRegion(null)}
                />
                {showNumbers && !filled && cx > 0 && cy > 0 && (
                  <text x={cx} y={cy + 3.5} textAnchor="middle"
                    style={{ fontSize: '9px', fontWeight: '700',
                      fill: isShaken ? '#e53935' : '#999',
                      pointerEvents: 'none', userSelect: 'none', fontFamily: 'Lato, sans-serif' }}>
                    {region.label || region.colorId}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

const styles = {
  canvas: {
    flex: 1, background: '#f0f0f0', overflow: 'hidden',
    position: 'relative', cursor: 'crosshair', touchAction: 'none',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  svgWrapper: {
    width: '100%', height: '100%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  svg: {
    maxWidth: '90vw', maxHeight: '60vh', width: '100%', height: '100%',
    filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.15))',
    background: '#ffffff', borderRadius: 4,
  },
};
