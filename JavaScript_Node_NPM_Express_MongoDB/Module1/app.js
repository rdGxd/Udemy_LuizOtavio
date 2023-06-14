/*
// importei o modulo inteiro
// const mod1 = require("./mod1")

// Importar somente um função
// const falaNome = require("./mod1").falaNome;

// Pegando somente uma função dentro do modulo
// const falaNome = mod1.falaNome;

// Importando mais de um parâmetro separado
const {nome, sobrenome, falaNome} = require("./mod1")
console.log(nome, sobrenome)
console.log(falaNome());
*/

// É possível instalar algo e importar sem precisar falar o caminho completo dele
const path = require("path");
const axios = require("axios");

const { Pessoa } = require("./mod1");
const p1 = new Pessoa("Rodrigo", "Silva");

axios
  .get("https://www.otaviomiranda.com.br/files/json/pessoas.json")
  .then(response => console.log(response.data))
  .catch(e => console.log(e));
