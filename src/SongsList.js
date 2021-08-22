import React, { useState } from "react";
import Favorite from "./Favorite";

function SongsList(props) {
  const { songs, favoriteSongs, setFavoriteSongs } = props;
 
  return (
    <div className="container">
      
      {songs &&
        songs.data &&
        songs.data.map((song) => (
          <div className="row mb-3" key={song.id}>
            <div className="col-md-2">
              <img src={song.album.cover} />
            </div>

            <div className="col-md-6">
              <h5>
                <strong>Cantor(a): </strong>
                {song.artist.name}
              </h5>
              <h5>
                <strong>Titulo da música: </strong>
                <a href={song.link} target="_blank">
                  {song.title}
                </a>
              </h5>
              <h5>
                <strong>Duração: </strong>
                {song.duration}s
              </h5>
              <a
                className="btn btn-secondary"
                href={song.preview}
                target="_blank"
              >
                <i class="fa fa-play" aria-hidden="true"></i>
              </a>
              <Favorite 
                songId={song.id}
                songs={songs}
                favoriteSongs={favoriteSongs}
                setFavoriteSongs={setFavoriteSongs}
              />
            </div>
          </div>
        ))}
    </div>
  );
}

export default SongsList;
