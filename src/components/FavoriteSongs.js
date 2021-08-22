import React from "react";

function FavoriteSongs(props) {
  const { favoriteSongs } = props;
 
  return (
    <React.Fragment>
      {favoriteSongs &&
        favoriteSongs.map((song) => (
          <div className="albumCover" key={song.id}>
            <img src={song.album.cover} alt={song.album.title}/>
            <span>{song.title}</span>
          </div>
        ))}
    </React.Fragment>
  );
}

export default FavoriteSongs;
