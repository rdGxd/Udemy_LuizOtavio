/*
SYMBOL
Isso é só pra dificultar o acesso ao atributo velocidade... Já que a cada vez que chamados Symbol, ele gera um valor único e aleatório. Fazendo isso, acessar o atributo velocidade fora da classe é praticamente impossível.

Essa é uma maneira de contornar o "problema" do javascript não possuir membros de classe privados (que não podem ser acessados fora da classe).
*/
/*
const _velocidade = Symbol("Velocidade") // ;
class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0;
  }

  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  // Setando a velocidade
  set velocidade(valor) {
    console.log("SETTER");
    if (typeof valor !== "number") return;
    if (valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }

  // Acessando a velocidade
  get velocidade() {
    console.log("GETTER");
    return this[_velocidade];
  }

  freiar() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

const c1 = new Carro("Fusca");
c1.velocidade = 99;
console.log(c1.velocidade);
*/

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }

  set nomeCompleto(valor) {
    valor = valor.split(" ");
    this.nome = valor.shift();
    this.sobrenome = valor.join();
  }
}

const p1 = new Pessoa("Rodrigo", "Silva");
p1.nomeCompleto = "Luiz Miranda";
console.log(p1.nomeCompleto);
