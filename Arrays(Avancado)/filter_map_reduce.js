// Retorne a soma do dobro de todos os pares
// -> Filtrar pares -> filter
// -> Dobrar os valores -> map
// -> Reduzir (somar tudo) -> reduce
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const resultado = numeros
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((acumulador, valor) => (acumulador += valor));

console.log(resultado);

/*
// Filtrando os pares
const pares = numeros.filter((valor) => valor % 2 === 0);

// Dobrando os valores
const dobrando = pares.map((valor) => valor * 2);

// Somando os valores
const somando = dobrando.reduce((acumulador, valor) => (acumulador += valor));
console.log(somando);
*/
