import { useParams, Link } from 'react-router-dom'
import { useSongs } from '../hooks/useMusic.js'

export default function Category() {
  const { id } = useParams()
  const { data: songs } = useSongs()

  const filteredSongs = songs.filter(song => song.category === id)

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', backgroundColor: '#121212', minHeight: '100vh', color: '#fff' }}>
      <h1 style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>
        Categoría: {id.charAt(0).toUpperCase() + id.slice(1)}
      </h1>

      {filteredSongs.length === 0 ? (
        <p>No hay canciones en esta categoría.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filteredSongs.map(song => (
            <li
              key={song.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#282828',
                borderRadius: '8px',
                padding: '0.75rem 1rem',
                boxShadow: '0 2px 6px rgba(0,0,0,0.7)',
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1DB954')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#282828')}
            >
              <img
                src={song.image}
                alt={song.title}
                style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: '6px', marginRight: '1rem' }}
              />
              <Link
                to={`/song/${song.id}`}
                style={{ fontWeight: '600', textDecoration: 'none', color: '#fff', flexGrow: 1 }}
              >
                {song.title}
              </Link>
              <span style={{ color: '#b3b3b3', marginLeft: 'auto', fontSize: '0.9rem' }}>{song.duration}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
