/*
// Criando um Objeto literal
const pessoa = {
  nome: "Rodrigo",
  sobrenome: "Silva"
};

const chave = "nome";
// console.log(pessoa[nome]);
// console.log(pessoa[chave]);
// console.log(pessoa.sobrenome);
*/
/*
// Outra opção de Criação
const pessoa2 = new Object();
pessoa2.nome = "Luiz";
pessoa2.sobrenome = "Otávio";
pessoa2.idade = 25;


// Apagar uma chave do objeto
delete pessoa2.nome;

// Função dentro de Objetos
// Quando as functions estão dentro de Objetos são chamados de métodos
pessoa2.falarNome = function () {
  return `${this.sobrenome}`;
};
pessoa2.getDataNascimento = function () {
  const dataAtual = new Date()
  return dataAtual.getFullYear() - this.idade;
};

for (let chave in pessoa2) {
  console.log(pessoa2[chave])
}
*/

// Criar novos moldes para novos Objetos, Factory function / Constructor Functions / Classes -> Padrão de Projetos
// Factory Functions
/*
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    // Não precisa usar o GET
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`
    }
  };
}

const p1 = criaPessoa("Rodrigo", "Silva");
console.log(p1.nomeCompleto);
*/

// Constructor Functions
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  // return this (ISSO É IMPLÍCITO);  {nome: "Rodrigo", sobrenome: "Silva"}

  // PERIGOSO
  // Object.freeze(this) // Agora nenhum objeto dessa função pode ser alterado;
}

// A palavra NEW vai criar um Objeto vazio e depois vai pegar a palavra THIS(PALAVRA CHAVE DO SISTEMA) e atrelar a palavra THIS dentro dessa função ao Objeto

// {} <- this -> this

// p1 = (ENDEREÇO MEMORIA) -> "VALOR"
// p1.ENDEREÇO MEMORIA = {nome:"Outra coisa"}
// p1 = (NOVO ENDEREÇO)
//  Você pode alterar o valor e não a referencia da memória
const p1 = new Pessoa("Rodrigo", "Silva");
// p1 = "Outra coisa" // TENTATIVA DE ALTERAR REFERENCIA DE MEMORIA IRÁ DA ERRO
Object.freeze(p1); // Você trava o Objeto o Valor dele não ser alterado
// p1.nome = "Luiz" // AQUI VOCÊ ALTERARIA DO VALOR O VALOR DENTRO DELE
console.log(p1);
