const fs = require("fs").promises;

// Recebendo o caminho e a codificação
module.exports = (caminho) => fs.readFile(caminho, "utf-8");
