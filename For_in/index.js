// For in => lê os índices ou chaves do objeto
const frutas = ["Pera", "Maça", "Uva"];
const pessoa = {
  nome: "Rodrigo",
  sobrenome: "Silva",
  idade: 24,
};

for (let chave in pessoa) {
  console.log(chave, pessoa[chave])
}

/*
for (let fruta in frutas) {
  console.log(frutas[fruta]);
}
*/
