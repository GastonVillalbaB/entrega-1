import { Link } from 'react-router-dom';
import { songs } from '../data/song';

export default function Home() {

  const categories = [...new Set(songs.map(song => song.category))];

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Categorías</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {categories.map(category => (
          <li key={category} style={{ marginBottom: '1rem' }}>
            <Link to={`/category/${category}`} style={{ fontSize: '1.2rem', color: '#1DB954', textDecoration: 'none' }}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


