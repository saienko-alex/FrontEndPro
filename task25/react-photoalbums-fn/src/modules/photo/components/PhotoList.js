import React from 'react'
import PhotoListItem from './PhotoListItem';


function PhotoList({ photos }) {
  return (
    <div>{photos.map((item) => (
        <PhotoListItem key={item.id} photo={item} />
        ))}
    </div>
  );
}

export default PhotoList;