import jwt from "jsonwebtoken";
import User from "../models/User";

// Gerando o token do usuário
class TokenController {
  async store(req, res) {
    const { email = "", password = "" } = req.body;

    // Verificando se o usuário envio o e-mail e password
    if (!email || !password) {
      return res.status(401).json({
        errors: ["Credenciais inválidas"],
      });
    }

    // Verificando se o email do usuário já existe
    const user = await User.findOne({ where: { email } });

    // Verificando se o usuário já existe
    if (!user) {
      return res.status(401).json({
        errors: ["Usuário ou Senha inválida"],
      });
    }

    // Verificando se a senha está correta
    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ["Usuário ou Senha inválida"],
      });
    }

    // Fazendo um destruction -> Pegando o ID do usuário
    const { id } = user;

    // Criando um Token, o payload são os dados que a gente quer recuperar depois
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    // Retornando o token e alguns dados do usuário
    return res.json({ token, user: { nome: user.nome, id, email } });
  }
}

export default new TokenController();
