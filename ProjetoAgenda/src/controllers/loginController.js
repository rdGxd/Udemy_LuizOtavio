exports.index = (req, res) => {
  res.render("login");
  return;
};

exports.register = (req, res, next) => {
  console.log(res.locals.csrfToken);
  res.render("register")
  return
};
