import React, { useState, useEffect } from "react";
import api from "./api/apideezer";

function Home() {
  const [songs, setSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getSongs = async () => {
      const response = await api.get('chart/0');
      console.log(response);

      setSongs(response.data);
    }

    getSongs();
  }, []);

  function handleSearchChange(event) {
    const inputValue = event.target.value;

    setSearchTerm(inputValue);
  }

  function search(event) {
    event.preventDefault();

    console.log('pesquisou: ', searchTerm);
  }

  // https://api.deezer.com/search?q=eminem
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-4">
            <div className="zoom">
              <h1 className="display-4">Top 10 Artistas</h1>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-4">
            <section class="photo container">
              <div class="photo__card">
                <img class="photo__item" src="" alt="Imagem do artista">
                  <div class="photo__overlay">
                    <p class="overlay-text">nome do artista</p>
                  </div>
                </img>
              </div>
            </section>
          </div>
        </div>
      </div> */}



      <div className="container ml-5 mb-5">
        <div className="row">
          <div className="col-md-12 searchBar">
            <form onSubmit={(event) => search(event)}>
              <input
                id="nomeArtista"
                className="form-control"
                type="text"
                placeholder="Digite o nome do artista ou música"
                onChange={(event) => handleSearchChange(event)}
              />
            </form>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-5">
                <div>
                  <button type="submit" className="btn btn-secondary buttonSearch">Buscar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">

        {songs?.tracks?.data.map(song => (
          <div className="row mb-3" key={song.id}>
            <div className="col-md-2">
              <img src={song.album.cover} />
            </div>

            <div className="col-md-6">
              <h5><strong>Cantor(a):</strong>{song.artist.name}</h5>
              <h5><strong>Titulo da música:</strong>{song.title}</h5>
              <h5><strong>Duração:</strong>{song.duration}s</h5>
              <a className="btn btn-secondary" href={song.preview} target="_blank">play preview</a>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default Home;