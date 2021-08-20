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
            <div className="col-md-12">
                <h1 className="display-4 text-center">Top 10 Artistas Mundiais</h1>
            </div>
        </div>
      </div>

      <div className="container ml-5 mb-5">
        <div className="row">
          <div className="col-md-8">
            <form onSubmit={(event) => search(event)}>
                <input 
                  id="nomeArtista"
                  className="form-control"
                  type="text"
                  placeholder="Digite o nome do artista"
                  onChange={(event) => handleSearchChange(event)}
                />
                <button type="submit" className="btn btn-primary">Buscar</button>
            </form>
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
              <a className="btn btn-primary" href={song.preview} target="_blank">play preview</a>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default Home;