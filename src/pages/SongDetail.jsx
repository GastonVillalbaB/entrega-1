import { useParams } from 'react-router-dom'
import { useAlbum } from '../hooks/useMusic.js'

export default function SongDetail() {
  const { id } = useParams()
  const { data: album } = useAlbum(id)

  if (!album) {
    return (
      <div style={{ padding: '2rem', color: '#fff', fontFamily: 'Arial, sans-serif', backgroundColor: '#121212', minHeight: '100vh' }}>
        <h2>Canción no encontrada</h2>
      </div>
    )
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', backgroundColor: '#121212', minHeight: '100vh', color: '#fff' }}>
      <h2 style={{ marginBottom: '1rem' }}>{album.title}</h2>
      <img
        src={album.image}
        alt={album.title}
        style={{ width: '300px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.7)', marginBottom: '1.5rem' }}
      />
      <p><strong>Artista:</strong> {album.artist}</p>
      <p><strong>Duración:</strong> {album.duration}</p>
      <p>
        <strong>Categoría:</strong>{' '}
        {album.category
          ? album.category.charAt(0).toUpperCase() + album.category.slice(1)
          : 'Sin categoría'}
      </p>
    </div>
  )
}
