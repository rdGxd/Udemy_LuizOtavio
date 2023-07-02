import React, { Component } from 'react';

// Importando os componentes
import Form from './Form';
import Tarefas from './Tarefas';

import './Main.css';

/*
  Componentes que são classes precisam do método render()
  Componentes que não tem estados são funções normais eles retornam um jsx
*/
export default class Main extends Component {
  // Criando estados
  state = {
    // Inicializando o state
    // Eu não posso editar o meu estado diretamente
    novaTarefa: '',
    tarefas: [],
    // Se esse estado for diferente de -1 significa que eu estou editando algum index dom eu array
    index: -1,
  };

  // Pegando as tarefas de volta se tiver alguma assim que a página é carregada
  // componentDidMount() {} ele é executado uma vez assim que o componente é montado
  componentDidMount() {
    // Pegando do localStorage as tarefas e transformando em JSON
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    // Checando se existe tarefas salvas
    if (!tarefas) return;

    // Adicionando as tarefas
    this.setState({ tarefas });
  }

  // Salvando Tarefas no localStorage do navegador, toda vez que o componente atualizar
  // componentDidUpdate é executado toda vez que algum componente atualizar
  // o prevState salva o estado anterior
  componentDidUpdate(prevProps, prevState) {
    // Pegando as tarefas
    const { tarefas } = this.state;

    // Checando se a tarefa mudo
    if (tarefas === prevState.tarefas) return;

    // Salvando no navegador -> Transformando em string antes
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  // Para mudar o estado eu preciso usar o setState() -> ele vai receber um Objeto;

  // Pegando o valor do input
  handleChange = (event) => {
    this.setState({
      novaTarefa: event.target.value,
    });
  };

  // Enviando tarefas
  handleSubmit = (event) => {
    // Parando o envio do submit
    event.preventDefault();

    // Pegando os estados
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;

    // Checando se é um valor vazio
    if (!novaTarefa) return;

    // O .trim() vai eliminar os espaços do começo e do final
    novaTarefa = novaTarefa.trim();

    // Checando se a tarefa já existe: index -1 significa que ele não existe
    if (tarefas.indexOf(novaTarefa) !== -1) return;

    // Eu não posso editar o meu estado diretamente, então eu copio o Array
    const novasTarefas = [...tarefas];

    // Se o index for igual a -1 significa que eu to criando
    if (index === -1) {
      // Modificando o estado
      this.setState({
        // Substituindo o array de tarefas por novasTarefas e adicionando uma novaTarefa
        tarefas: [...novasTarefas, novaTarefa],
        // Limpando o input
        novaTarefa: '',
      });
    } else {
      // Se o index for diferente de -1 significa que eu to editando

      // Pegando o índice que to editando e setando o novo valor
      novasTarefas[index] = novaTarefa;

      this.setState({
        // Adicionando a Tarefa editada a tarefas
        tarefas: [...novasTarefas],
        // o index -1 significa que eu já editei
        index: -1,
      });
    }
  };

  // Editando tarefas
  handleEdit = (event, index) => {
    // Pegando as tarefas
    const { tarefas } = this.state;

    // Falando que o index que eu to recebendo é igual o meu estado index
    this.setState({
      // Setando o index como o índice que eu estou editando
      index,
      // Pegando a tarefa que eu quero editar e jogando no input
      novaTarefa: tarefas[index],
    });
  };

  // Apagando tarefas
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

        {/* Enviando as props necessárias para o componente Form */}
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />

        {/* Enviando as props necessárias para o componente Tarefas */}
        <Tarefas
          tarefas={tarefas}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
