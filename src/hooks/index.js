import { useState, useEffect, useCallback, useRef } from 'react';

// ─── useLocalStorage ─────────────────────────────────────────────────────────
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback((value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue];
}

// ─── usePinchZoom ─────────────────────────────────────────────────────────────
export function usePinchZoom(minZoom = 0.5, maxZoom = 5) {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const lastPinchDist = useRef(null);
  const isDragging = useRef(false);
  const lastPointer = useRef({ x: 0, y: 0 });

  const getPinchDistance = (touches) => {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const onTouchStart = useCallback((e) => {
    if (e.touches.length === 2) {
      lastPinchDist.current = getPinchDistance(e.touches);
    } else if (e.touches.length === 1) {
      isDragging.current = true;
      lastPointer.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  }, []);

  const onTouchMove = useCallback((e) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      const dist = getPinchDistance(e.touches);
      if (lastPinchDist.current) {
        const delta = dist / lastPinchDist.current;
        setZoom(z => Math.min(maxZoom, Math.max(minZoom, z * delta)));
      }
      lastPinchDist.current = dist;
    } else if (e.touches.length === 1 && isDragging.current) {
      const dx = e.touches[0].clientX - lastPointer.current.x;
      const dy = e.touches[0].clientY - lastPointer.current.y;
      setPan(p => ({ x: p.x + dx, y: p.y + dy }));
      lastPointer.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  }, [minZoom, maxZoom]);

  const onTouchEnd = useCallback(() => {
    lastPinchDist.current = null;
    isDragging.current = false;
  }, []);

  const onWheel = useCallback((e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setZoom(z => Math.min(maxZoom, Math.max(minZoom, z * delta)));
  }, [minZoom, maxZoom]);

  const resetView = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  return { zoom, pan, setZoom, setPan, resetView, onTouchStart, onTouchMove, onTouchEnd, onWheel };
}

// ─── useImageProgress ─────────────────────────────────────────────────────────
export function useImageProgress(imageId, totalRegions) {
  const [savedProgress, setSavedProgress] = useLocalStorage(`progress_${imageId}`, {});
  const [filledRegions, setFilledRegions] = useState(savedProgress);

  useEffect(() => {
    setFilledRegions(savedProgress);
  }, [imageId]); // eslint-disable-line

  const fillRegion = useCallback((regionId, colorId) => {
    const updated = { ...filledRegions, [regionId]: colorId };
    setFilledRegions(updated);
    setSavedProgress(updated);
    return updated;
  }, [filledRegions, setSavedProgress]);

  const resetProgress = useCallback(() => {
    setFilledRegions({});
    setSavedProgress({});
  }, [setSavedProgress]);

  const progress = totalRegions > 0
    ? Math.round((Object.keys(filledRegions).length / totalRegions) * 100)
    : 0;

  const isComplete = progress === 100;

  return { filledRegions, fillRegion, resetProgress, progress, isComplete };
}

// ─── useCompletedImages ───────────────────────────────────────────────────────
export function useCompletedImages() {
  return useLocalStorage('completed_images', {});
}

// ─── useColorHistory ──────────────────────────────────────────────────────────
export function useColorHistory() {
  const [history, setHistory] = useLocalStorage('color_history', [1, 2, 3, 4, 5]);
  
  const addColor = useCallback((colorId) => {
    setHistory(prev => {
      const filtered = prev.filter(id => id !== colorId);
      return [colorId, ...filtered].slice(0, 8);
    });
  }, [setHistory]);

  return [history, addColor];
}
