import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Favoritos from './pages/Favoritos';
import { FavoritosProvider } from './context/FavoritosContext';

const App = () => {
  return (
    <FavoritosProvider>
      <Router>
        <nav className="navbar">
          <div className="links">
            <Link to="/">Home</Link>
            <div className="separador"></div>
            <Link to="/Favoritos">Favoritos</Link>
          </div>
        </nav>
        <div className="title">Personas Pic</div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favoritos" element={<Favoritos />} />
        </Routes>
      </Router>
    </FavoritosProvider>
  );
};

export default App;
