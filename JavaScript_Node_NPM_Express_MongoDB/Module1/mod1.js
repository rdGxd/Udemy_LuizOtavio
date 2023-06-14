/*
const nome = "Rodrigo";
const sobrenome = "Silva";

const falaNome = () => `${nome} ${sobrenome}`

// sempre que você exportar dessas maneiras vão retornar objetos

// Uma maneira de exportar
// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

// Segunda maneira
// Uma atalho para exportar
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

// Terceira maneira
// A palavra this aponta para module.exports e também para exports e significa que eu posso.
this.qualquerCoisa = "o que eu quiser exportar.";
*/

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

// É possível sobrescrever a modulo inteiro se necessário (APENAS modules.exports)
module.exports = {
  nome,
  sobrenome,
  Pessoa,
};

exports.Pessoa = Pessoa;
