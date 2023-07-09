//Dentro das barras vem a expressão regular e fora vem as flags
// g - global (encontra todas as ocorrências)
// i - insensitive (case insensitive)
// () - grupos
// | - ou

const { texto } = require("./base");

const regExp1 = /(maria|joão|rodrigo)(, hoje sua esposa)/i;
const found = regExp1.exec(texto);

if (found) {
  console.log(found[0]);
  console.log(found[1]);
  console.log(found[2]);
}
