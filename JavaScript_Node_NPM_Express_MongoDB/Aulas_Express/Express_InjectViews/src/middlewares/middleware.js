// NÃO PODE ESQUECER DO NEXT DENTRO O MIDDLEWARE
/*
module.exports = (req, res, next) => {
  if (req.body.cliente) {
    req.body.cliente = req.body.cliente.replace("Silva", "NÃO USE")
    console.log();
    console.log(`Vi que você postou ${req.body.cliente}`);
    console.log();
  }
  next();
};
*/

exports.middlewareGlobal = (req, res, next) => {
  // Se precisar injetar algo em todas as rotas use o "res.locals.NOMEVARIVEL = VALOR"
  res.locals.umaVariavelLocal = "Este é o valor da variável local"
  next();
};

exports.outroMiddleware = (req, res, next) => {
  console.log();
  console.log("OUTRO MIDDLEWARE");
  console.log();
  next();
};
