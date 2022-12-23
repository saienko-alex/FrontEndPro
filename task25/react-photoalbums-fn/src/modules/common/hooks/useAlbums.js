import { useState, useEffect } from 'react';
import { getAlbumsList} from '../../albums/services/albumsService';

export default function useAlbums() {
  const [albums, setalbums] = useState([]);

  useEffect(() => {
    getAlbumsList().then(data => setalbums(data))
  }, []);


  return albums;
}

