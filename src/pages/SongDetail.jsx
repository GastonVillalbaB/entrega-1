import { useParams } from 'react-router-dom';
import { songs } from '../data/song'; 

export default function SongDetail() {
  const { id } = useParams();
  const song = songs.find(s => s.id === id);

  if (!song) return <p style={{ padding: '1rem' }}>Canción no encontrada</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>{song.title}</h2>
      <img src={song.image} alt={song.title} style={{ width: 200, borderRadius: '8px' }} />
      <p><strong>Artista:</strong> {song.artist}</p>
      <p><strong>Duración:</strong> {song.duration}</p>
    </div>
  );
}

