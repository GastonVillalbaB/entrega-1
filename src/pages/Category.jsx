import { useParams, Link } from 'react-router-dom';
import { songs } from '../data/song';  

export default function Category() {
  const { id } = useParams();

 
  const filteredSongs = songs.filter(song => song.category === id);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Categoría: {id.charAt(0).toUpperCase() + id.slice(1)}</h1>
      {filteredSongs.length === 0 ? (
        <p>No hay canciones en esta categoría.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {filteredSongs.map(song => (
            <li key={song.id} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img src={song.image} alt={song.title} style={{ width: 50, height: 50, objectFit: 'cover', borderRadius: '4px' }} />
              <Link to={`/song/${song.id}`} style={{ fontWeight: 'bold', textDecoration: 'none', color: '#1DB954' }}>
                {song.title}
              </Link>
              <span style={{ marginLeft: 'auto', color: '#666' }}>{song.duration}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
