// return
// Retorna um valor
// Termina a função
function soma(a, b) {
  return a + b;
}

function soma2(a, b) {
  console.log(a + b);
}

// -------------------------------------------------------------------------
function criaPessoa(nome, sobrenome) {
  return {
    nome: nome,
    sobrenome: sobrenome,
  };
}
// fazem a mesma coisa a única diferença que a p1 chama uma vez para criar os objetos e não é preciso criar manualmente
const p1 = criaPessoa("Rodrigo", "Silva");
const p2 = {
  nome: "João",
  sobrenome: "Rodrigues",
};

// -------------------------------------------------------------------------
function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + " " + resto;
  }
  return falaResto;
}

const fala = falaFrase("Olá");
const resto = fala("mundo!");
console.log(resto);

// -------------------------------------------------------------------------
function criaMultiplicador(multiplicador) {
  // multiplicador
  return function (n) {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadruplica(2));
