/*
Escreva uma função que recebe um número e retorne o seguinte:
Número é divisível por 3 = Fizz
Número é divisível por 5 = Buzz
Número é divisível por 3 e 5 = FizzBuzz
Número NÃO é divisível por 3 e 5 = Retorna o próprio Número
Checar se o número é realmente um Número = Retorna o próprio Número
Use a função com números de 0 a 100
*/


/*
// Minha Solução
function fizzBuzz(number) {
  const number1 = Number(number);
  if (!number1) {
    return number;
  } else if (number1 % 3 === 0 && number1 % 5 === 0) {
    return "FizzBuzz";
  } else if (number1 % 5 === 0) {
    return "Buzz";
  } else if (number1 % 3 === 0) {
    return "Fizz";
  } else {
    return number1;
  }
}
for (let i = 0; i <= 100; ++i) {
  console.log(i, fizzBuzz(i))
}
*/


// SOLUÇÃO PROFESSOR
function fizzBuzz(number) {
  if (typeof number !== "number") return number;
  if (number % 3 === 0 && number % 5 === 0) return "FizzBuzz";
  if (number % 3 === 0) return "Fizz";
  if (number % 5 === 0) return "Buzz";
  return number;
}
for (let i = 0; i <= 100; ++i) {
  console.log(i, fizzBuzz(i));
}
