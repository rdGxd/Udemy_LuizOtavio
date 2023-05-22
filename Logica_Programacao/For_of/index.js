const nome = "Rodrigo Silva";
const nomes = ["Rodrigo", "Luiz", "Otávio", "Henrique"];
const pessoa = {
  nome: "Luiz",
  sobrenome: "Otávio",
};

for (let valor of nomes) {
  console.log(valor);
}

// For clássico - Geralmente com iteráveis (array ou strings)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)
// For in - Retorna o índice ou chave (strings, arrays ou objetos)