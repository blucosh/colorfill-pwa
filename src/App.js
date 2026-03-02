import React, { useState } from 'react';
import Gallery from './components/Gallery';
import GameScreen from './components/GameScreen';
import { useLocalStorage } from './hooks';

// Register service worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .catch(() => {}); // Fail silently in dev
  });
}

export default function App() {
  const [screen, setScreen] = useState('gallery'); // 'gallery' | 'game'
  const [activeImage, setActiveImage] = useState(null);
  const [completedImages, setCompletedImages] = useLocalStorage('colorfill_completed', {});
  const [savedProgress, setSavedProgress] = useLocalStorage('colorfill_progress', {});

  const handleSelectImage = (image) => {
    setActiveImage(image);
    setScreen('game');
  };

  const handleBackToGallery = () => {
    setScreen('gallery');
    setActiveImage(null);
  };

  const handleComplete = (imageId) => {
    setCompletedImages(prev => ({ ...prev, [imageId]: 'done' }));
  };

  const handleSaveProgress = (imageId, regions) => {
    setSavedProgress(prev => ({ ...prev, [imageId]: regions }));
  };

  return (
    <>
      <style>{globalStyles}</style>
      <div style={{ height: '100%', overflow: screen === 'gallery' ? 'auto' : 'hidden' }}>
        {screen === 'gallery' && (
          <Gallery
            onSelectImage={handleSelectImage}
            completedImages={completedImages}
          />
        )}
        {screen === 'game' && activeImage && (
          <GameScreen
            image={activeImage}
            onBack={handleBackToGallery}
            onComplete={handleComplete}
            onSaveProgress={handleSaveProgress}
          />
        )}
      </div>
    </>
  );
}

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Lato:wght@300;400;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body {
    background: #12122a;
    color: #f0ece3;
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    overscroll-behavior: none;
  }

  ::-webkit-scrollbar { width: 4px; height: 4px; }
  ::-webkit-scrollbar-track { background: #0e0e24; }
  ::-webkit-scrollbar-thumb { background: #2a2a4a; border-radius: 2px; }

  /* Hide scrollbar for category row */
  .category-scroll::-webkit-scrollbar { display: none; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes particleFloat {
    0%   { transform: translateY(100vh) scale(0); opacity: 0; }
    10%  { opacity: 0.8; }
    90%  { opacity: 0.8; }
    100% { transform: translateY(-20px) scale(1); opacity: 0; }
  }

  @keyframes bounceIn {
    from { transform: translateX(-50%) scale(0.5); opacity: 0; }
    to   { transform: translateX(-50%) scale(1);   opacity: 1; }
  }

  @keyframes pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(212,172,13,0.4); }
    50%       { box-shadow: 0 0 0 8px rgba(212,172,13,0); }
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }

  button { -webkit-tap-highlight-color: transparent; outline: none; }
  
  /* Card hover effect */
  [data-card]:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0,0,0,0.5);
  }

  /* Prevent text selection on canvas interaction */
  svg { -webkit-user-select: none; user-select: none; }

  /* iOS safe area support */
  @supports (padding-bottom: env(safe-area-inset-bottom)) {
    .safe-bottom { padding-bottom: env(safe-area-inset-bottom); }
  }
`;
