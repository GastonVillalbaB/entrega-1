import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Player from './components/Player';

import Home from './pages/Home';
import SongDetail from './pages/SongDetail';
import Category from './pages/Category';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';  // Esto también hay que crear

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/song/:id" element={<SongDetail />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/favoritos" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Player />
    </BrowserRouter>
  );
}

export default App;

