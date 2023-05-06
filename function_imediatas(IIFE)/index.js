// IIFE -> immediately invoked function expression
(function (idade, peso, altura) {
  const sobrenome = "Silva";
  function criaNome(nome) {
    return nome + " " + sobrenome;
  }

  function falaNome() {
    console.log(criaNome("Rodrigo"));
  }
  falaNome();
  console.log(idade, peso, altura);
})(24, 75, 1.8);

const nome = "Qualquer coisa";
