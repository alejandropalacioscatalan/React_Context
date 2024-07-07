import { useEffect, useState } from 'react';
import axios from 'axios';
import ImageCard from '../components/ImageCard';

const Home = () => {
  const [fotos, setfotos] = useState([]);

  useEffect(() => {
    const fetchfotos = async () => {
      const response = await axios.get('https://api.pexels.com/v1/search', {
        params: { query: 'people', per_page: 24 },
        headers: {
          Authorization: 'CWl16S4PInAenienWNJrkAzWmg9Ix5Bs2V79Cpmnbdqx4Lr1zuaJO1be'
        }
      });
      setfotos(response.data.photos);
    };

    fetchfotos();
  }, []);

  return (
    <div className="home">
      {fotos.map(foto => (
        <ImageCard key={foto.id} foto={foto} />
      ))}
    </div>
  );
};

export default Home;
