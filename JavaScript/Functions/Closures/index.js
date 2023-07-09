function returnFunction(nome) {
  return function () {
    return nome;
  };
}

const funcao = returnFunction("Rodrigo");
const funcao2 = returnFunction("Luiz");
console.dir(funcao);
console.dir(funcao2);
