const { texto } = require("./base");
const regExp1 = /João|Maria/gi;

console.log(texto.match(regExp1));
// Irá substituir todos os joão que encontrar por Rodrigo
// $1 representa o primeiro grupo
//  $1      $2      $3
// (...)  (....)  (....)
// Você também pode usar grupos dentro de grupos
//  $1            $4
// (  ($2($3))) (....)
// console.log(texto.replace(/João|Maria/gi, "<b>$1</b>"));
console.log(texto.replace(/João|Maria/gi, function(input) {
  return  "######################################" + input.toUpperCase() * "######################################";
}));
