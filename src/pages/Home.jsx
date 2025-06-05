import { songs } from '../data/songs';
import { SongCard } from '../components/SongCard';
import { Container } from '../components/Container';

export const Home = () => {
  return (
    <Container>
      <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Lista de Canciones</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
        {songs.map(song => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </Container>
  );
};
