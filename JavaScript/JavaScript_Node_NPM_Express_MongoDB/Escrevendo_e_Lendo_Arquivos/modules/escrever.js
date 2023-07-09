const fs = require("fs").promises; // -> utilizando apenas promises

// Recebendo o caminho mas o conteúdo que eu quero colocar nesse arquivo e por fim mandando uma flag("w") que é para apagar tudo que estiver dentro desse arquivo caso ele ja exista e escreve o que eu to pedindo
// flag: "a", serve para criar uma nova frase no arquivo sem precisar apagar a anterior -> appending
module.exports = (caminho, dados) => {
  fs.writeFile(caminho, dados, {
    flag: "w",
  });
};
