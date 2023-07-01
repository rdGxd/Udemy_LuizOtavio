import React, { Component } from 'react';

// Form
import { FaPlus } from 'react-icons/fa';

// Tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

/*
  Componentes que são classes precisam do método render()
  Componentes que não tem estados são funções normais eles retornam um jsx
*/
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

  handleChange = (event) => {
    // Para mudar o estado eu preciso usar o setState() -> ele vai receber um Objeto;
    this.setState({
      novaTarefa: event.target.value,
    });
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

  handleEdit = (event, index) => {
    console.log('Edit', index);
  };

  handleDelete = (event, index) => {
    // Pegando as tarefas
    const { tarefas } = this.state;

    // Copiando as tarefas para um novo Array
    const novasTarefas = [...tarefas];

    // Eliminando um elemento
    novasTarefas.splice(index, 1);

    // Adicionando as novasTarefas em tarefas
    this.setState({
      tarefas: [...novasTarefas],
    });
  };

  // render() é necessário por que isso é uma Classe
  render() {
    // Pegando os estados
    const { novaTarefa, tarefas } = this.state;

    /*
    Se eu quiser retornar mais de 1 elemento preciso criar 1 ELEMENTO PAI para envolver os outros elementos.
    Se eu não quiser usar uma <div></div> eu posso usar um fragmento <> </>
    Lembre de colocar tudo dentro de um RETURN()
    */
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
          {/* Exibindo a tarefa e Pegando o index */}
          {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
              {tarefa}
              <span>
                {/* Pegando o evento do click e do index e enviando ambos */}
                <FaEdit
                  onClick={(event) => this.handleEdit(event, index)}
                  className="edit"
                />
                <FaWindowClose
                  onClick={(event) => this.handleDelete(event, index)}
                  className="delete"
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
