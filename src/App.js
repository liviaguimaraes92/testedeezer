import React, { Component } from "react";
import api from "./api/apideezer";

class App extends Component {

  state = {
    musicas: [],
  }

  async componentDiMount() {
    const response = await api.get('/0');
    console.log(response)
    this.setState({ musicas: response.data });

  }

  render() {
    const { musicas } = this.state;

    return (
      <div>
        {console.log(musicas)}
        {musicas.map(musica => (
          <li key={musica.tracks.id}>
            <h2><strong>Titulo da música:</strong>{musica.tracks.title}</h2>
            <p>{musica.tracks.link}</p>
          </li>
        ))}
      </div>
    );
  };
};

export default App;
