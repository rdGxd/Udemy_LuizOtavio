const pessoas = [
  { id: 3, nome: "Luiz" },
  { id: 2, nome: "Maria" },
  { id: 1, nome: "Helena" },
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//   const { id } = pessoa;
//   novasPessoas[id] = { ...pessoa };
// }

//----------------------------------------------------------------------------------------------------------------

// A ordem de inserção vai se manter
// Criando um new Map
const novasPessoas = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;
  // Setando valores no Map -> set(chave, valor) ambos podem ser qualquer coisa
  novasPessoas.set(id, { ...pessoa });
}
// Se você quiser eliminar uma chave
novasPessoas.delete(2)
console.log(novasPessoas);

// Resgatando valores no Map -> get(chave)
// console.log(novasPessoas.get(2))
// Recomendado pegar o objeto porque é mas fácil de fazer o que você quiser

//----------------------------------------------------------------------------------------------------------------

// Outra maneira de fazer
// novasPessoas.keys() -> traz apenas as chaves
// novasPessoas.values() -> traz os valores
//   for (const pessoas of novasPessoas) {
//   console.log(pessoas)
// }
