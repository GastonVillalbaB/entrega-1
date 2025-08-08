// src/components/SongList.jsx
import { Link } from 'react-router-dom'

export default function SongList({ songs }) {
  if (!songs.length) {
    return <p>No hay canciones para mostrar.</p>
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {songs.map(song => (
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
            marginBottom: '1rem'
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
  )
}
