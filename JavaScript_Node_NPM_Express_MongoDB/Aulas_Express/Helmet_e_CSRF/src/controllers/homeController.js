exports.paginaInicial = (req, res) => {
  /*
  // Criando a chave na session essa sessão vai durar 7 dias
  req.session.usuario = { nome: "Rodrigo", logado: true };
  // Posso mandar quantas msg eu quiser aqui, assim que eu recuperar as msgs elas serão perdidas
  req.flash("info", "Olá mundo!");
  req.flash("error", "Deu ruim");
  req.flash("success", "Deu bom");
  */
  // Falando o nome do arquivo que devera ser renderizado
  res.render("index", {
    titulo: "Este será o título da página.",
    numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  });
  return; // a requisição termina aqui
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
