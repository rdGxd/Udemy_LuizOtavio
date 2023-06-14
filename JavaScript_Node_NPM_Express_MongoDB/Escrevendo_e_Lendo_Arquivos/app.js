const path = require("path");

// Caminho do arquivo -> Caminho absoluto dessa pasta e voltando uma pasta e criando o arquivo teste.txt (PATH.RESOLVE não coloca barras)
const caminhoArquivo = path.resolve(__dirname, "teste.json");
const escrever = require("./modules/escrever");
const ler = require("./modules/ler");

// Escrevendo o arquivo
const pessoas = [
  //  Criando um Array de Objetos
  { nome: "Rodrigo" },
  { nome: "João" },
  { nome: "Luiz" },
  { nome: "Mari" },
  { nome: "Julia" },
  { nome: "Isabela" },
];

// Convertendo em json
const json = JSON.stringify(pessoas, "", 2);

// Enviando o caminho e os dados
escrever(caminhoArquivo, json);

// Lendo o arquivo
async function leArquivo(caminho) {
  const dados = await ler(caminho);
  renderizaDados(dados);
}

function renderizaDados(dados) {
  // Transformando de volta em um Objeto JS
  dados = JSON.parse(dados);

  dados.forEach((valor) => console.log(valor.nome));
}

leArquivo(caminhoArquivo);
