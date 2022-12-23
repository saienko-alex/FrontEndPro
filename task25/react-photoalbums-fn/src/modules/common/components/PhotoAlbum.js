
import { useState, useEffect } from 'react';
import AlbumsList from '../../albums/components/AlbumsList';
import useAlbums from '../hooks/useAlbums';

import PhotoList from '../../photo/components/PhotoList';
import usePhotos from '../hooks/usePhotos';


import './PhotoAlbum.css';


function App() {
  const [albumId, setAlbumId] = useState(null);
  const albums = useAlbums();
  const photos = usePhotos(albumId);

  useEffect(() => {
    if (!albums.length) return;

    setAlbumId(albums[0].id)
  }, [albums]);

  return (
    <div className='container'>
      <AlbumsList albums={albums} navigate={setAlbumId}/>
      <PhotoList photos={photos}/>
    </div>
  )
}

export default App









// import React, { useState } from 'react'
// import Albums from '../../albums/components/Albums'
// import Photos from '../../photo/components/Photos';

// import './App.css';


// function App() {
//   const [albumId, setAlbumId] = useState(null);
//   return (
//     <div className='container'>
//       <Albums />
//       <Photos />
//     </div>
//   )
// }

// export default App


