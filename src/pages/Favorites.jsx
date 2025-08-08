import { Link } from 'react-router-dom'
import { useSongs } from '../hooks/useMusic.js'

export default function Favorites() {
  const { data: songs } = useSongs()

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', backgroundColor: '#121212', minHeight: '100vh', color: '#fff' }}>
      <h1 style={{ marginBottom: '1.5rem' }}>Mis Favoritos</h1>
      {songs.length === 0 ? (
        <p>No tienes canciones favoritas aún.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {songs.map(song => (
            <li key={song.id} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img
                src={song.image}
                alt={song.title}
                style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.5)' }}
              />
              <Link
                to={`/song/${song.id}`}
                style={{ color: '#1DB954', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}
              >
                {song.title} - {song.artist}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
