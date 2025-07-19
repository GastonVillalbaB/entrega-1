import { Link } from 'react-router-dom';
import spotifyIcon from '../assets/spotify-icon.png';

const navStyle = {
  background: '#000',
  color: '#fff',
  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
};

export default function Navbar() {
  return (
    <nav style={navStyle}>
      <img src={spotifyIcon} alt="Spotify icon" style={{ width: 24, height: 24 }} />
      <h1 style={{ fontSize: '1.5rem' }}>Spotify</h1>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0 }}>
        <li>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Inicio</Link>
        </li>
        <li>
          <Link to="/favoritos" style={{ color: 'white', textDecoration: 'none' }}>Favoritos</Link>
        </li>
        {/* Podés agregar más links como categorías */}
      </ul>
    </nav>
  );
}
