import { useState } from 'react';

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#121212',
        color: '#fff',
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.7)',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div style={{ flex: 1 }}>
        <strong>Ocean Drive</strong> - Duke Dumont
      </div>
      <input
        type="range"
        min="0"
        max="100"
        defaultValue="0"
        style={{ flex: 3, cursor: 'pointer' }}
      />
      <button
        onClick={togglePlay}
        style={{
          background: '#1DB954',
          border: 'none',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '1rem',
          userSelect: 'none',
        }}
      >
        {isPlaying ? '⏸ Pausar' : '▶ Reproducir'}
      </button>
    </div>
  );
}
