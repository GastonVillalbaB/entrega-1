import { Link } from 'react-router-dom'
import spotifyIcon from '../assets/spotify-icon.png'

const navStyle = {
  background: '#000',
  color: '#fff',
  padding: '1rem 2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '1200px',
  margin: '0 auto',
  boxSizing: 'border-box',
  boxShadow: '0 2px 5px rgba(0,0,0,0.5)',
}

const logoContainer = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  marginRight: '2rem',
}

const navLinks = {
  listStyle: 'none',
  display: 'flex',
  gap: '1.5rem',
  margin: 0,
  padding: 0,
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: '500',
  fontSize: '1rem',
  transition: 'color 0.3s ease',
  cursor: 'pointer',
}

export default function Navbar() {
  return (
    <nav style={navStyle}>
      <div style={logoContainer}>
        <img src={spotifyIcon} alt="Spotify icon" style={{ width: 30, height: 30 }} />
        <h1 style={{ fontSize: '1.6rem', margin: 0 }}>Spotify</h1>
      </div>
      <ul style={navLinks}>
        <li>
          <Link
            to="/"
            style={linkStyle}
            onMouseOver={e => (e.target.style.color = '#1DB954')}
            onMouseOut={e => (e.target.style.color = 'white')}
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/favoritos"
            style={linkStyle}
            onMouseOver={e => (e.target.style.color = '#1DB954')}
            onMouseOut={e => (e.target.style.color = 'white')}
          >
            Favoritos
          </Link>
        </li>
        <li>
          <Link
            to="/create-song"
            style={linkStyle}
            onMouseOver={e => (e.target.style.color = '#1DB954')}
            onMouseOut={e => (e.target.style.color = 'white')}
          >
            Crear Canción
          </Link>
        </li>
      </ul>
    </nav>
  )
}
