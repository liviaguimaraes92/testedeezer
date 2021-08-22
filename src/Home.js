import React, { useState, useEffect } from "react";
import api from "./api/apideezer";
import SongsList from "./components/SongsList";
import FavoriteSongs from "./components/FavoriteSongs";
import ImagemSlider from "./components/ImageSlider";

function Home() {
  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);
  const [favoriteSongs, setFavoriteSongs] = useState([]);

  useEffect(() => {
    const getSongs = async () => {
      const response = await api.get("chart");
      setSongs(response?.data?.tracks);
      setArtists(response?.data?.artists);
    };

    getSongs();
  }, []);

  async function handleSearchChange(event) {
    const inputValue = event.target.value;
    if (!inputValue) {
      const response = await api.get("chart");
      setSongs(response.data.tracks);
    } else {
      const response = await api.get(`search?q=${inputValue}`);
      setSongs(response.data);
    }
  }

  return (
    <React.Fragment>
      <div className="container titulos">
        <div className="row">
          <div className="col-md-12">
            <h1>Top Artistas</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <ImagemSlider slides={artists?.data} />
      </div>

      <div className="container display: flex; align-items: center titulos">
        <div className="row">
          <div className="col-md-12">
            <div>
              <h1>Favoritos</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container flexContainer">
        <FavoriteSongs favoriteSongs={favoriteSongs} />
      </div>

      <div className="container search">
        <input
          id="nomeArtista"
          className="form-control"
          type="text"
          placeholder="Digite o nome do artista ou música"
          onChange={handleSearchChange}
        />
      </div>

      <SongsList
        songs={songs}
        favoriteSongs={favoriteSongs}
        setFavoriteSongs={setFavoriteSongs}
      />
    </React.Fragment>
  );
}

export default Home;
