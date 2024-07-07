import { useContext } from 'react';
import { FavoritosContext } from '../context/FavoritosContext';

const ImageCard = ({ foto }) => {
  const { addFavorito, removeFavorito, isFavorito } = useContext(FavoritosContext);
  const Favorito = isFavorito(foto.id);

  const toggleFavorito = () => {
    if (Favorito) {
      removeFavorito(foto.id);
    } else {
      addFavorito(foto);
    }
  };

  return (
    <div className="image-card">
      <img src={foto.src.medium} alt={foto.alt} />
      <div className="descripcion">{foto.alt}</div>
      <div className="corazon" onClick={toggleFavorito}>
        {Favorito ? '❤️' : '🤍'}
      </div>
    </div>
  );
};

export default ImageCard;

