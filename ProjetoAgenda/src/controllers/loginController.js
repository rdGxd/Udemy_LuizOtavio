const Login = require("../models/LoginModel");
exports.index = (req, res) => {
  return res.render("login");
};

exports.register = async function (req, res) {
  try {
    const login = new Login(req.body);
    await login.register();

    if (login.errors.length > 0) {
      req.flash("errors", login.errors);
      req.session.save(() => {
        return res.redirect("/login/");
      });
      return;
    }

    req.flash("success", "Sua conta foi criada com sucesso.");
    req.session.save(() => {
      return res.redirect("/login/");
    });
  } catch (error) {
    console.log(error);
    return res.render("404");
  }
};
