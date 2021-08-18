import React, { Component } from "react";
import api from "./api/apideezer";

class App extends Component {

  state = {
    musicas: [],
  }

  async componentDidMount() {
    const response = await api.get('chart/0');
    console.log(response)
    this.setState({ musicas: response.data });

  }

  render() {
    const { musicas } = this.state;

    return (
      <div>
               
        {musicas?.tracks?.data.map(musica => (
          <li key={musica.id}>
            <h3><strong>Cantor(a):</strong>{musica.artista}</h3>
            <h3><strong>Titulo da música:</strong>{musica.title}</h3>
            <p>{musica.link}</p>
          </li>
        ))}
      </div>
    );
  };
};

export default App;
