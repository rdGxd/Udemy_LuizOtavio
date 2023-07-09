// Retorna um valor por vez
/*
function* geradora1() {
  // Código qualquer...
  yield "valor 1";
  // Código qualquer...
  yield "valor 2";
  // Código qualquer...
  yield "valor 3";
}
const g1 = geradora1();
console.log(g1.next().value); // Retorna valor 1
console.log(g1.next().value); // Retorna valor 2
console.log(g1.next().value); // Retorna valor 3
console.log(g1.next()); // Retorna a chave DONE com TRUE indicando o FIM
for (let valor of g1) {
  console.log(valor);
}
*/
// -------------------------------------------------------------------------------------
/*
function* geradora2() {
  let i = 0;
  // Infinito
  while (true) {
    yield i;
    i++
  }
}
const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
*/
// -------------------------------------------------------------------------------------
/*
function* geradora3() {
  // Deleguei a geradora3 faça apenas 0,1,2
  yield 0;
  yield 1;
  yield 2;
}

function* geradora4() {
  // Aqui faz o resto
  yield* geradora3();
  yield 3;
  yield 4;
  yield 5;
}

const g4 = geradora4();
for (let valor of g4) {
  console.log(valor);
}
*/
// -------------------------------------------------------------------------------------
function* geradora5() {
  yield function () {
    console.log("Vim do y1");
  };
  // Algum código aqui

  // Com o RETURN a função para aqui e nada abaixo disso é executado
  return function () {
    console.log("Vim do return");
  };
}
const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();
