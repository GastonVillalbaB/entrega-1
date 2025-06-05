import spotifyIcon from '../assets/spotify-icon.png';

export const Navbar = () => (
  <nav style={{ background: '#000', color: '#fff', padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
    <img src={spotifyIcon} alt="Spotify icon" style={{ width: 24, height: 24 }} />
    <h1 style={{ fontSize: '1.5rem' }}>Spotify</h1>
  </nav>
);

