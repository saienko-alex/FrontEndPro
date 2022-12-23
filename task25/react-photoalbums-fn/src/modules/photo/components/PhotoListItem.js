import React from 'react'

function PhotoListItem({ photo: {thumbnailUrl} }) {
  return (
    <div>
        <img src={thumbnailUrl} width={100}  height={100}></img>
    </div>
  )
}

export default PhotoListItem;