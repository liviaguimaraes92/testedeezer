import React, { useState } from "react";

function FavoriteSongs(props) {
  const { favoriteSongs } = props;
 
  return (




    <div className="container">
      {favoriteSongs &&
        favoriteSongs.map((song) => (
          <div className="row mb-3" key={song.id}>
            <div className="row mb-3">
              <img src={song.album.cover} />
            </div>
          </div>
        ))}
    </div>
  );
}

export default FavoriteSongs;
