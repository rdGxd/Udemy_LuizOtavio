// Map -> altera os valores do array

/*
// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Retorna valor, índice e array
const numerosDobrados = numeros.map((valor, indice, array) => valor * 2);
console.log(numerosDobrados);
*/

// Para cada elemento:
// Retorne apenas uma string com nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
  {
    nome: "Luiz",
    idade: 62,
  },
  {
    nome: "Maria",
    idade: 23,
  },
  {
    nome: "Eduardo",
    idade: 55,
  },
  {
    nome: "Letícia",
    idade: 19,
  },
  {
    nome: "Rosana",
    idade: 32,
  },
  {
    nome: "Wallace",
    idade: 47,
  },
];

/*
const pessoasString = pessoas.map((valor) => valor.nome)
console.log(pessoasString)*/

/*
const pessoasRemoveNome = pessoas.map((valor) => ({ idade: valor.idade }));
console.log(pessoasRemoveNome);*/


const addID = pessoas.map((valor, indice) => {
  const newValor = {...valor}
  newValor.id = indice + 1;
  return newValor;
});
console.log(addID);
