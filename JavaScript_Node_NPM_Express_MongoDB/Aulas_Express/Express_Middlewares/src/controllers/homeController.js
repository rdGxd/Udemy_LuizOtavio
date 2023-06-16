exports.paginaInicial = (req, res) => {
  // Falando o nome do arquivo que devera ser renderizado
  res.render("index");
  return; // a requisição termina aqui
};

exports.trataPost = (req, res) => {
  res.send(req.body)
  return;
}