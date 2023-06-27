import jwt from "jsonwebtoken";

// Recebendo o token do usuário e fazendo a verificação
export default (req, res, next) => {
  // Checando se a chave de autorização existe
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ["Login required"],
    });
  }

  // Fazendo um destruction -> pegando o token dentro de authorization
  const [, token] = authorization.split(" ");

  try {
    // Verificando o token e recebendo os dados do usuário
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);

    // Fazendo um destruction -> Pegando o id e o email dentro de dados
    const { id, email } = dados;

    // Vinculando o id e o email a requisição
    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (error) {
    return res.status(401).json({
      errors: ["Token expirado ou inválido"],
    });
  }
};
