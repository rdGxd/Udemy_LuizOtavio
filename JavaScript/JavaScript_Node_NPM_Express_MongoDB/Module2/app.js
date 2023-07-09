/*
const Cachorro = require("./z/mod2");
const a = new Cachorro("Dog")

a.latir()
*/
// Um ponto representa a sua pasta atual
// Para frente -> ./Pasta/arquivo
// Para trás -> ../Pasta/arquivo

/*
// Caminhos Absolutos (RAIZ DO SEU COMPUTADOR)
// nome do arquivo atual
console.log(__filename);
// Nome da pasta atual
console.log(__dirname);
*/

const path = require("path");
console.log(path.resolve(__dirname, "..", "..", "arquivos", "imagens"));

