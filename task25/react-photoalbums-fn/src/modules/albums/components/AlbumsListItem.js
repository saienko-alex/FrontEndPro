import React from 'react'

function AlbumsListItem({ album: {id, title}, navigate }) {
  return (
    <div onClick={() => navigate(id)}>{title}</div>
  )
}

export default AlbumsListItem