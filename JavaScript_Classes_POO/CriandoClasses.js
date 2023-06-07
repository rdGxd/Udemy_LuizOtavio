// Para criar um classe é mesma coisa que uma função construtora
class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  // Não é necessário criar os prototypes a Função Classe já faz isso
  falar() {
    console.log(`${this.nome} está falando`);
  }
  comer() {
    console.log(`${this.nome} está comendo`);
  }
  beber() {
    console.log(`${this.nome} está bebendo`);
  }
}

// Na hora de instancia uma classe não pode esquecer a palavra NEW
const p1 = new Pessoa("Rodrigo", "Silva");
p1.falar();

// Função construtora
function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}
Pessoa2.prototype.falar = function () {
  console.log(`${this.nome} está falando`);
};
const p2 = new Pessoa2("Luiz", "Miranda");
p2.falar();
