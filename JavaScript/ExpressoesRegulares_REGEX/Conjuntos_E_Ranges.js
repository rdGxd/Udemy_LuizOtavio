const { alfabeto } = require("./base");

// [abc] -> Conjunto [^qualquercoisa] -> Negação
// [0-9]
console.log(alfabeto);
console.log(alfabeto.match(/[0-9]/g));
console.log(alfabeto.match(/[a-z]/g));
console.log(alfabeto.match(/[A-Z]/g));
console.log(alfabeto.match(/[A-Za-z0-9]+/g));
console.log(alfabeto.match(/[^A-Za-z0-9]+/g)); // Negação
console.log(alfabeto.match(/[\u00A0-\u00BA]+/g)); // Unicode
