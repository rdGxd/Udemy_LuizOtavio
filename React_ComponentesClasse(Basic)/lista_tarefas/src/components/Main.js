import React, { Component } from 'react';
import './Main.css';

// Componentes que são classes precisam do método render()
export default class Main extends Component {
  // Criando estados modo 1
  /*
  constructor(props) {
    super(props);
    this.state = {
      // Inicializando o state
      novaTarefa: '',
    };
    // Falando pro React que dentro desse método o THIS é a própria classe
    this.handleChange = this.handleChange.bind(this);
  } */

  // Criando estados modo 2 Com class fields
  state = {
    // Inicializando o state
    novaTarefa: '',
  };

  handleChange = (event) => {
    // Para mudar o estado eu preciso usar o setState() -> ele vai receber um Objeto;
    this.setState({
      novaTarefa: event.target.value,
    });
  };

  render() {
    const { novaTarefa } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form action="#">
          {/* Se eu quiser escrever JS eu preciso usar o */}
          <input onChange={this.handleChange} type="text" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}
