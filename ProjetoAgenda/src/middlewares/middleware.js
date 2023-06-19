exports.middlewareGlobal = (req, res, next) => {
  // Se precisar injetar algo em todas as rotas use o "res.locals.NOMEVARIVEL = VALOR"
  res.locals.umaVariavelLocal = "Este é o valor da variável local";
  next();
};

// Checando Erros
exports.checkCsrfError = (err, req, res, next) => {
  if (err) {
    return res.render("404");
  }

  next();
};

// Criando token
exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};
