// Declaração de função (Function hoisting)
function falaOi() {
  console.log("Oi");
}

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function () {
  console.log("Sou um dado.");
};
souUmDado();
/*
function executaFuncao(funcao) {
  console.log("Vou executar sua função abaixo");
  funcao();
}
executaFuncao(souUmDado)
*/

// Arrow function
const functionArrow = () => {
  console.log("Sou uma arrow function");
};
functionArrow();

// Dentro de um Objeto
const obj = {
  /*
  falar: function() {
    console.log("Estou falando...")
  }
  */
  falar() {
    console.log("Estou falando...");
  },
};
obj.falar();
