import React, { useState, useEffect } from "react";
import api from "./apideezer";
import SongsList from "./SongsList";
import FavoriteSongs from "./FavoriteSongs"; 
import ImagemSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";

function Home() {
  const [songs, setSongs] = useState([]);
  const [favoriteSongs, setFavoriteSongs] = useState([]);

  useEffect(() => {
    const getSongs = async () => {
      const response = await api.get("chart");
      console.log(response.data)
      setSongs(response?.data?.tracks);
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

      <div className="row">
        <div className="col-md-12">
        <ImagemSlider slides={SliderData} />
        </div>
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

          <br></br>

          <div className="flexContainer">
        <FavoriteSongs favoriteSongs={favoriteSongs} />
          </div>

      <div></div>

      <div className="container search">
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
  );
}

export default Home;
