// src/pages/CreateSong.jsx
import { useState } from 'react'
import { useCreateSong } from '../hooks/useMusic.js'

export default function CreateSong() {
  const [title, setTitle] = useState('')
  const [artist, setArtist] = useState('')
  const [category, setCategory] = useState('')
  const mutation = useCreateSong()

  const handleSubmit = (e) => {
    e.preventDefault()
    mutation.mutate({
      title,
      artist,
      category,
      // agregá más campos según el schema que tenga el servicio
    })
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', backgroundColor: '#121212', minHeight: '100vh', color: '#fff' }}>
      <h2>Crear nueva canción</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          style={{ padding: '0.5rem', borderRadius: '6px', border: 'none' }}
        />
        <input
          type="text"
          placeholder="Artista"
          value={artist}
          onChange={e => setArtist(e.target.value)}
          required
          style={{ padding: '0.5rem', borderRadius: '6px', border: 'none' }}
        />
        <input
          type="text"
          placeholder="Categoría"
          value={category}
          onChange={e => setCategory(e.target.value)}
          required
          style={{ padding: '0.5rem', borderRadius: '6px', border: 'none' }}
        />
        <button
          type="submit"
          disabled={mutation.isLoading}
          style={{ padding: '0.75rem', backgroundColor: '#1db954', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          {mutation.isLoading ? 'Creando...' : 'Crear Canción'}
        </button>
      </form>
      {mutation.isError && <p style={{ color: 'red' }}>Error al crear la canción.</p>}
      {mutation.isSuccess && <p style={{ color: 'lightgreen' }}>Canción creada con éxito!</p>}
    </div>
  )
}
