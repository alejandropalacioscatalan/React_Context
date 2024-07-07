import { useContext } from 'react';
import { FavoritosContext } from '../context/FavoritosContext';
import ImageCard from '../components/ImageCard';

const Favoritos = () => {
  const { Favoritos } = useContext(FavoritosContext);

  return (
    <div className="Favoritos">
      {Favoritos.map(foto => (
        <ImageCard key={foto.id} foto={foto} />
      ))}
    </div>
  );
};

export default Favoritos;
