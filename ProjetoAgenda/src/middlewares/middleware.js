exports.middlewareGlobal = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken(); // Criando token
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

exports.loginRequired = (req, res, next) => {
  if (!req.session.user) {
    req.flash("errors", "Você precisa fazer login.");
    req.session.save(() => res.redirect("/"));
    return;
  }
  next();
};
