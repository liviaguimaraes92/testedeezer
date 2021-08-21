import React, { useState, useEffect } from "react";
import api from "./api/apideezer";
import SongsList from "./SongsList";
import FavoriteSongs from "./FavoriteSongs";

function Home() {
  const [songs, setSongs] = useState([]);
  const [favoriteSongs, setFavoriteSongs] = useState([]);

  useEffect(() => {
    const getSongs = async () => {
      const response = await api.get('chart');

      setSongs(response?.data?.tracks);
    }

    getSongs();
  }, []);

  async function handleSearchChange(event) {
    const inputValue = event.target.value;
    if (!inputValue) {
      const response = await api.get('chart');
      setSongs(response.data.tracks);
    }

    else {
      const response = await api.get(`search?q=${inputValue}`);
      setSongs(response.data);
    }
  }

  // https://api.deezer.com/search?q=eminem
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-4">
            <div className="photo">
              <h1 className="display-4">Favoritos</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <FavoriteSongs favoriteSongs={favoriteSongs} />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-4">
            <div className="photo">
              <h1 className="display-4">Top 10 Artistas</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container ml-5 mb-5">
        <div className="row">
          <div className="col-md-12">
            <form>
              <input
                id="nomeArtista"
                className="form-control"
                type="text"
                placeholder="Digite o nome do artista ou música"
                onChange={(event) => handleSearchChange(event)}
              />
            </form>
          </div>
        </div>
      </div>

      <SongsList 
        songs={songs} 
        favoriteSongs={favoriteSongs}
        setFavoriteSongs={setFavoriteSongs}
      />
    </React.Fragment>
  )
}

export default Home;