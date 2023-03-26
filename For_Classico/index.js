const frutas = ["Maça", "Morango", "Uva"];

/*
// Valor
for (const fruta of frutas) {
  console.log(fruta);
}
*/

/*
// Índice
for (const fruta in frutas) {
  console.log(fruta);
}
*/

/*
// Índice e Valor
for (let i = 0; i < frutas.length; i++) {
  console.log(`Índice ${i}`frutas[i]);
}
*/

// Valor
frutas.forEach(fruta => {
  console.log(fruta)
});

/*
for (let i = 0; i <= 10; i++) {
  const par = i % 2 === 0 ? "Par" : "Ímpar";
  console.log(i, par);
}
*/