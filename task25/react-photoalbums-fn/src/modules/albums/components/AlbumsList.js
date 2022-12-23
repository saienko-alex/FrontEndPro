import React from 'react'
import AlbumsListItem from './AlbumsListItem';


function AlbumsList({ albums, navigate }) {
  return (
    <div>{albums.map((item) => (
        <AlbumsListItem key={item.id} album={item} navigate={navigate}/>
        ))}
    </div>
  );
}

export default AlbumsList

