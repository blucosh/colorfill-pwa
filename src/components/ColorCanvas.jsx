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
}) {
  const containerRef = useRef(null);
  const [hoveredRegion, setHoveredRegion] = useState(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [onWheel]);

  const getColor = useCallback((colorId) => {
    return COLOR_PALETTE.find(c => c.id === colorId)?.hex || '#2a2a4a';
  }, []);

  const handleRegionClick = useCallback((e, regionId) => {
    e.stopPropagation();
    onFillRegion(regionId, selectedColor);
  }, [selectedColor, onFillRegion]);

  const selectedHex = COLOR_PALETTE.find(c => c.id === selectedColor)?.hex;

  return (
    <div
      ref={containerRef}
      style={styles.canvas}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        style={{
          ...styles.svgWrapper,
          transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
          transformOrigin: 'center center',
          willChange: 'transform',
        }}
      >
        <svg
          viewBox={image.viewBox}
          style={styles.svg}
          aria-label={`${image.title} coloring canvas`}
        >
          <defs>
            <filter id="hoverGlow">
              <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor={selectedHex} floodOpacity="0.8" />
            </filter>
          </defs>

          {image.regions.map((region) => {
            const filled = filledRegions[region.id];
            const fillColor = filled ? getColor(filled) : '#1a1a3e';
            const isHovered = hoveredRegion === region.id;
            const isFilled = !!filled;

            // Compute text position from path bounding box approximation
            const nums = (region.d.match(/-?\d+\.?\d*/g) || []).map(Number);
            const xs = nums.filter((_, i) => i % 2 === 0).filter(n => n > 0 && n < 2000);
            const ys = nums.filter((_, i) => i % 2 === 1).filter(n => n > 0 && n < 2000);
            const cx = xs.length ? (Math.min(...xs) + Math.max(...xs)) / 2 : 0;
            const cy = ys.length ? (Math.min(...ys) + Math.max(...ys)) / 2 : 0;

            return (
              <g key={region.id}>
                <path
                  d={region.d}
                  fill={fillColor}
                  stroke={isFilled ? 'rgba(255,255,255,0.1)' : '#3a3a6a'}
                  strokeWidth={isFilled ? '0.5' : '0.8'}
                  style={{
                    cursor: 'pointer',
                    transition: 'fill 0.2s ease',
                    filter: isHovered ? 'url(#hoverGlow)' : 'none',
                  }}
                  onClick={(e) => handleRegionClick(e, region.id)}
                  onMouseEnter={() => setHoveredRegion(region.id)}
                  onMouseLeave={() => setHoveredRegion(null)}
                />
                {showNumbers && !isFilled && cx > 0 && cy > 0 && (
                  <text
                    x={cx}
                    y={cy + 3.5}
                    textAnchor="middle"
                    style={{
                      fontSize: '9px',
                      fontWeight: '700',
                      fill: '#8080c0',
                      pointerEvents: 'none',
                      userSelect: 'none',
                      fontFamily: 'Lato, sans-serif',
                    }}
                  >
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
    flex: 1,
    background: '#0e0e24',
    overflow: 'hidden',
    position: 'relative',
    cursor: 'crosshair',
    touchAction: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  svgWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  svg: {
    maxWidth: '90vw',
    maxHeight: '60vh',
    width: '100%',
    height: '100%',
    filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.8))',
  },
};
