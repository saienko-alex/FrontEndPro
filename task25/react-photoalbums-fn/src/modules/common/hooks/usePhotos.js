import { useState, useEffect } from 'react';


export default function usePhotos(albumId) {
  const [photos, setPhotos] = useState([]);

  function getPhotoList() {
    return fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + albumId).then(res => res.json())};

  useEffect(() => {
    
      getPhotoList().then(data => setPhotos(data))
    }, [albumId]);

  return photos;
}


