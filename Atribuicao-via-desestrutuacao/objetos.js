const pessoa = {
  nome: "Rodrigo",
  sobrenome: "Silva",
  idade: "24",
  endereco: {
    rua: "Vinte e um de Janeiro",
    numero: 191,
  },
};

// Atribuição via desestruturação
const {
  nome = "Não existe",
  sobrenome,
  endereco: { rua: r, numero },
  endereco,
} = pessoa;
console.log(nome, sobrenome, r);
