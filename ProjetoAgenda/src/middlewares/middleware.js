exports.middlewareGlobal = (req, res, next) => {
  // Se precisar injetar algo em todas as rotas use o "res.locals.NOMEVARIVEL = VALOR"
  res.locals.errors = req.flash("errors");
  res.locals.success = req.flash("success");
  res.locals.user = req.session.user;
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
