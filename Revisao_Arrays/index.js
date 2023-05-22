// Valor por referência
//                        0          1        2         3         4
// const nomes = ["Eduardo", "Maria", "Joana", "Wallace", "Rosa"];
// const removido = nomes.shift(); // Remover no inicio
// const removido = nomes.pop() // Remover no fim
// nomes.push("Rodrigo"); // Adicionar no final do array
// nomes.unshift("Carlos"); // Adicionar no inicio do array
// Fatiar o array passando os índices onde vc quer começar e terminar o índice final não é incluído
// const novo = nomes.slice(1, -2);

/*
// Transformando uma string em um array
const nome = "Rodrigo Silva";
const nomes = nome.split(" ");
console.log(nomes);
*/

// Transformando um array em uma string
const nomes = ["Rodrigo", "Silva"];
const nome = nomes.join(" ");
console.log(nome)