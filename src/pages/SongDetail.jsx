import { useParams } from 'react-router-dom';
import { songs } from '../data/songs';

export default function SongDetail() {
  const { id } = useParams();
  const song = songs.find(s => s.id === id);

  if (!song) {
    return (
      <div style={{ padding: '2rem', color: '#fff', fontFamily: 'Arial, sans-serif', backgroundColor: '#121212', minHeight: '100vh' }}>
        <h2>Canción no encontrada</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', backgroundColor: '#121212', minHeight: '100vh', color: '#fff' }}>
      <h2 style={{ marginBottom: '1rem' }}>{song.title}</h2>
      <img
        src={song.image}
        alt={song.title}
        style={{ width: '300px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.7)', marginBottom: '1.5rem' }}
      />
      <p><strong>Artista:</strong> {song.artist}</p>
      <p><strong>Duración:</strong> {song.duration}</p>
      <p><strong>Categoría:</strong> {song.category.charAt(0).toUpperCase() + song.category.slice(1)}</p>
    </div>
  );
}

