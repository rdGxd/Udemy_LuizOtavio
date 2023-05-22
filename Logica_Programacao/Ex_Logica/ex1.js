// Escreva uma função que recebe 2 números e retorne o maior deles

/*
// MINHA SOLUÇÃO
function maiorNumber(Number1, Number2) {
  if (Number1 > Number2) {
    return Number1;
  } else {
    return Number2;
  }
}
console.log(maiorNumber(2, 20));
*/

// SOLUÇÃO PROFESSOR
const max2 = (x, y) => x > y ? x : y;
console.log(max2(10, 2));
