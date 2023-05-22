// Reduce -> é mais utilizado para reduzir um array em um único elemento

// Some todos os valores (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/*
// Uso Original
// Retorna acumulador, valor, índice e array
const total = numeros.reduce(
  (acumulador, valor, indice, array) => (acumulador += valor),
  0
);
console.log(total);
*/

/*
const pares = numeros.reduce((acumulador, valor) => {
  if (valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []);
console.log(pares);*/

/*
const dobroValor = numeros.reduce((acumulador, valor) => {
  acumulador.push(valor * 2);
  return acumulador;
}, []);
console.log(dobroValor);*/

// Retorne a pessoa mais velha
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
    idade: 85,
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

// Se você não der um valor inicial o acumulador vai ser o seu primeiro elemento
const pessoaMaisVelha = pessoas.reduce((acumulador, valor) => {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
});
console.log(pessoaMaisVelha);
