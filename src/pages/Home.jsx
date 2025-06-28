import { useState } from 'react';
import { songs as songList } from '../data/songs';
import { SongCard } from '../components/SongCard';
import { Container } from '../components/Container';

export const Home = () => {
  const [search, setSearch] = useState('');

  const filteredSongs = songList.filter(song =>
    song.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <input
        type="text"
        placeholder="Buscar canciones..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: '100%', padding: '0.75rem', marginBottom: '1rem', fontSize: '1rem' }}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
        {filteredSongs.map(song => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </Container>
  );
};

