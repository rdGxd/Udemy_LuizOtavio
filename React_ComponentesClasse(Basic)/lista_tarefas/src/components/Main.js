import React, { Component } from 'react';

// Form
import { FaPlus } from 'react-icons/fa';

// Tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa';

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
    // Eu não posso editar o meu estado diretamente
    novaTarefa: '',
    tarefas: [],
  };

  handleSubmit = (event) => {
    // Parando o envio do submit
    event.preventDefault();
    // Pegando os estados
    const { tarefas } = this.state;
    let { novaTarefa } = this.state;

    // O .trim() vai eliminar os espaços do começo e do final
    novaTarefa = novaTarefa.trim();

    // Checando se a tarefa já existe: index -1 significa que ele não existe
    if (tarefas.indexOf(novaTarefa) !== -1) return;

    // Eu não posso editar o meu estado diretamente, então eu copio o Array
    const novasTarefas = [...tarefas];

    // Copiando o Array e adicionando a novaTarefa
    this.setState({
      tarefas: [...novasTarefas, novaTarefa],
    });
  };

  handleChange = (event) => {
    // Para mudar o estado eu preciso usar o setState() -> ele vai receber um Objeto;
    this.setState({
      novaTarefa: event.target.value,
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        {/* Pegando o evento Submit do form */}
        <form onSubmit={this.handleSubmit} action="#" className="form">
          {/* Se eu quiser escrever JS eu preciso usar o {} */}
          <input onChange={this.handleChange} type="text" value={novaTarefa} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa) => (
            <li key={tarefa}>
              {tarefa}
              <span>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
