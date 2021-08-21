import React, { useState } from 'react';

function Favorite(props) {

  const { songs, songId, favoriteSongs, setFavoriteSongs } = props;

  const unfavorite = "fa-star-o";
  const favorite = "fa-star";
  const [starClass, setStarClass] = useState(unfavorite);

  function favoriteSong() {
    if(starClass == unfavorite) {
      setStarClass(favorite);
      const foundSong = songs.data.find(song => song.id == songId);
      setFavoriteSongs(favoriteSongs.concat(foundSong));
    } else {
      setStarClass(unfavorite);
      const newFavoriteSongs = favoriteSongs.filter(song => song.id != songId);
      setFavoriteSongs(newFavoriteSongs);
    }
  }

  return (
    <i
      onClick={favoriteSong}
      className={`fa ${starClass} star`}
      aria-hidden="true"
    />
  )
}

export default Favorite;