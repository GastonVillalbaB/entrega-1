import { usePlayer } from '../context/PlayerContext';
import { useState, useEffect } from 'react';

export const Player = () => {
  const { currentSong, isPlaying, setIsPlaying } = usePlayer();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 1 : 100));
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  if (!currentSong) return null;

  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: '#111', color: '#fff', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <strong>{currentSong.title}</strong> - {currentSong.artist}
      </div>
      <input
        type="range"
        value={progress}
        onChange={(e) => setProgress(Number(e.target.value))}
        min="0"
        max="100"
        style={{ flex: 1, margin: '0 1rem' }}
      />
      <button onClick={() => setIsPlaying(!isPlaying)} style={{ background: '#1DB954', color: '#fff', border: 'none', padding: '0.5rem 1rem' }}>
        {isPlaying ? '⏸ Pausar' : '▶ Reproducir'}
      </button>
    </div>
  );
};
