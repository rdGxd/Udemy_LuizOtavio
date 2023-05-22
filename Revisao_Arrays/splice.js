//                        -5        -4       -3      -2          -1
//                         0         1        2       3           4 
const nomes = ["Rodrigo", "João", "Maria", "Eduardo", "Gabriel"];

// Primeiro argumento é qual o índice você quer começar a mexer e o segundo é quanto elementos você quer remover do seu array e o terceiro em diante é os elementos que você quer adicionar
// nomes.splice(índice atual,delete, elem1, elem2);
// const removidos = nomes.splice(3, 2, "Luiz", "Otávio");

// Simulando o pop()
// const removidos = nomes.splice(-1, 1)

// Simulando o shift()
// const removidos = nomes.splice(0, 1)

// Simulando o push()
// nomes.splice(nomes.length, 0, "Luiz")

// Simulando o unshift()
nomes.splice(0, 0, "Otávio", "Miranda")


console.log(nomes);
