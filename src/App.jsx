import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import Navbar from './components/Navbar'
import Player from './components/Player'

import Home from './pages/Home'
import SongDetail from './pages/SongDetail'
import Category from './pages/Category'
import Favorites from './pages/Favorites'
import NotFound from './pages/NotFound'
import CreateSong from './pages/CreateSong'
import { ErrorBoundary } from './components/ErrorBoundary'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary>
              <Suspense fallback={<div>Cargando...</div>}>
                <Home />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="/song/:id"
          element={
            <ErrorBoundary>
              <Suspense fallback={<div>Cargando canción...</div>}>
                <SongDetail />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route
          path="/category/:id"
          element={
            <ErrorBoundary>
              <Suspense fallback={<div>Cargando categoría...</div>}>
                <Category />
              </Suspense>
            </ErrorBoundary>
          }
        />
        <Route path="/favoritos" element={<Favorites />} />

        {/* Nueva ruta para crear canción */}
        <Route
          path="/create-song"
          element={
            <ErrorBoundary>
              <Suspense fallback={<div>Cargando formulario...</div>}>
                <CreateSong />
              </Suspense>
            </ErrorBoundary>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Player />
    </BrowserRouter>
  )
}

export default App

