const { cpfs } = require("./base");
// ^ -> Fora do conjunto -> Começa com
// $ -> Termina com
// [^] -> Dentro do conjunto -> Negação
// m  -> multiline

const cpf = "254.224.877-45";
// Validando o CPF
const cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;
console.log(cpf.match(cpfRegExp));
console.log(cpfs.match(cpfRegExp));
