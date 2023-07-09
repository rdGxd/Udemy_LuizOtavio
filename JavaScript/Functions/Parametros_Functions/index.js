// Função definida com a palavra "function" tem uma variável especial "arguments" que sustenta todos os argumentos enviados
function teste() {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  console.log(total);
}
teste( 1, 2, 3, 4, 5, 6);

//---------------------------------------------------------------------
// Para b assumir o valor padrão tem que ser mandado um undefined
function funcao(a, b = 2, c = 4) {
  // b = b || 2 //Maneira antiga;
  console.log(a + b + c);
}
funcao(2, undefined, 20);
//---------------------------------------------------------------------

function funcao1([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}
funcao1(["Rodrigo", "Silva", 24]);
//---------------------------------------------------------------------

// O REST Operator Sempre deve ser o último e funciona em qualquer tipo de função
const conta = function (operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "/") acumulador /= numero;
    if (operador === "*") acumulador *= numero;
  }
  console.log(acumulador);
};
conta("+", 1, 2, 30, 50, 70);
