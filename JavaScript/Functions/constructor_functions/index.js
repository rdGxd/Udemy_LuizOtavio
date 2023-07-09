// Função construtora -> retorna objetos
// Função fabrica -> fabrica objetos
// Construtora -> precisa mudar a convenção como a gente escreve as nossas funções, sempre iniciar com letra MAIÚSCULA e usar a palavra NEW ex: new Pessoa()

function Pessoa(nome, sobrenome) {
  // Atributos ou métodos privados
  let ID = 123456;
  const metodoInterno = () => {};

  // Atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = () => {
    console.log(`${this.nome}: Sou um método`);
  };
}

const p1 = new Pessoa("Rodrigo", "Silva");
const p2 = new Pessoa("Maria", "Oliveira");

p2.metodo();
