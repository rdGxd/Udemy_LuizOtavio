exports.paginaInicial = (req, res) => {
  // Falando o nome do arquivo que devera ser renderizado
  res.render("index");
};

exports.trataPost = (req, res) => {
  res.send("Ei, sou sua nova rota de POST.")
}