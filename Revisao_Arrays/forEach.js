// forEach só está disponível dentro de arrays
// Ele só iterar sobre os valores ele  NÃO VAI RETORNAR UM NOVO VALOR
// (ELE FAZ A MESMA COISA QUE UM FOR)
// OUTRAS OPÇÕES: FOR OF, FOR IN, FOR CLÁSSICO
const a1 = [10, 20, 30];
let total = 0;

// Retorna valor, índice e array
a1.forEach((valor, indice, array) => (total += valor));
console.log(total);

/*
// Faz a mesma coisa
for (let number of a1) {
  console.log(number)
}
*/
