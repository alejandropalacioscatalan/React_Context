import { createContext, useState, useEffect } from 'react';

export const FavoritosContext = createContext();

export const FavoritosProvider = ({ children }) => {
  const [Favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const savedFavoritos = JSON.parse(localStorage.getItem('Favoritos')) || [];
    setFavoritos(savedFavoritos);
  }, []);

  useEffect(() => {
    localStorage.setItem('Favoritos', JSON.stringify(Favoritos));
  }, [Favoritos]);

  const addFavorito = (foto) => {
    setFavoritos((prevFavoritos) => [...prevFavoritos, foto]);
  };

  const removeFavorito = (fotoId) => {
    setFavoritos((prevFavoritos) => prevFavoritos.filter(foto => foto.id !== fotoId));
  };

  const isFavorito = (fotoId) => {
    return Favoritos.some(foto => foto.id === fotoId);
  };

  return (
    <FavoritosContext.Provider value={{ Favoritos, addFavorito, removeFavorito, isFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
};
