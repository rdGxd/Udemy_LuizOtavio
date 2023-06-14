const fs = require("fs").promises;
// Tratar dos caminhos
const path = require("path");

// Listando os diretórios de uma pasta
async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir);
  walk(files, rootDir);
}

// Mostrando os arquivos da pasta
async function walk(files, rootDir) {
  for (let file of files) {
    // Checando se é ou não um diretório
    const fileFullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPath);

    // Se tiver git e node_modules no caminho da pasta você continua e nao exibe
    if (/\.git/g.test(fileFullPath)) continue;
    if (/node_modules/g.test(fileFullPath)) continue;

    // Listando os arquivos do diretório (Recursão mutua)
    if (stats.isDirectory()) {
      readdir(fileFullPath);
      continue;
    }
    // Especificando o arquivo que eu quero encontrar
    if (!/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath))
      continue;

    console.log(fileFullPath);
  }
}

readdir("");
