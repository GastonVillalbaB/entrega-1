export const SongCard = ({ song }) => (
  <div style={{ border: '1px solid #ccc', borderRadius: 8, overflow: 'hidden' }}>
    <img src={song.image} alt={song.title} style={{ width: '100%', height: 150, objectFit: 'cover' }} />
    <div style={{ padding: '1rem' }}>
      <h3>{song.title}</h3>
      <p>{song.artist} • {song.duration}</p>
      <button style={{ marginTop: '0.5rem', padding: '0.5rem 1rem', backgroundColor: '#1DB954', color: '#fff', border: 'none', borderRadius: 4 }}>
        ▶ Play
      </button>
    </div>
  </div>
);
