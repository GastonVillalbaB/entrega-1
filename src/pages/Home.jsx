import { Link } from 'react-router-dom';
import { songs } from '../data/songs';

export default function Home() {
  const categories = [...new Set(songs.map(song => song.category))];

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', backgroundColor: '#121212', minHeight: '100vh', color: '#fff' }}>
      <h1 style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>Categorías</h1>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        {categories.map(category => (
          <li key={category} style={{ backgroundColor: '#1db954', borderRadius: '8px', padding: '1rem 1.5rem', minWidth: '120px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.5)', transition: 'background-color 0.3s' }}>
            <Link
              to={`/category/${category}`}
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                display: 'block',
              }}
              onMouseOver={e => e.currentTarget.style.color = '#000'}
              onMouseOut={e => e.currentTarget.style.color = '#fff'}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


