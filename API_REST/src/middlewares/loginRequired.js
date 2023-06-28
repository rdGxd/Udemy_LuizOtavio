import jwt from "jsonwebtoken";
import User from "../models/User";

// Recebendo o token do usuário e fazendo a verificação
export default async (req, res, next) => {
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
    // Verificando o token
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);

    // Fazendo um destruction -> Pegando o id e o email dentro de dados
    const { id, email } = dados;

    // Checando se o id e email corresponde ao mesmo usuário
    const user = await User.findOne({
      where: { id, email },
    });

    // Se o email ou id não corresponde retornamos um erro
    if (!user) {
      return res.status(401).json({
        errors: ["Usuário inválido"],
      });
    }

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
