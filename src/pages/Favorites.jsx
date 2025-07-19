import { Link } from 'react-router-dom';
import { songs } from '../data/song';

export default function Favorites() {
  

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Mis Favoritos</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {songs.map(song => (
          <li key={song.id} style={{ marginBottom: '1rem' }}>
            <Link to={`/song/${song.id}`} style={{ textDecoration: 'none', color: '#1DB954' }}>
              {song.title} - {song.artist}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
