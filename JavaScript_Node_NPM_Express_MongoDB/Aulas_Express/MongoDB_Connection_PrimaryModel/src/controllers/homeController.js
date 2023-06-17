// Criando os dados
/*
const HomeModel = require("../models/HomeModel");
HomeModel.create({
  titulo: "Outra coisa qualquer",
  descricao: "Outra descrição",
})
  .then((dados) => console.log(dados))
  .catch((error) => console.log(error));
*/

exports.paginaInicial = (req, res) => {
  // Falando o nome do arquivo que devera ser renderizado
  res.render("index");
  return; // a requisição termina aqui
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
