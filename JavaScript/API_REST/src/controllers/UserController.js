import User from "../models/User";

class UserController {
  // INDEX -> listar todos os usuários
  async index(req, res) {
    try {
      // Mostrando quais atributos podem ser exibidos
      const users = await User.findAll({ attributes: ["id", "nome", "email"] });
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  // STORE/CREATE -> Cria um novo usuário
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      // Fazendo destruction
      const { id, nome, email } = novoUser;
      // Retornando apenas algumas informações do usuário
      return res.json({ id, nome, email });
    } catch (error) {
      return res.status(400).json({
        erros: error.errors.map((erro) => erro.message),
      });
    }
  }

  // SHOW -> Mostra um usuário
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      // Fazendo destruction
      const { id, nome, email } = user;
      // Retornando apenas algumas informações do usuário
      return res.json({ id, nome, email });
    } catch (error) {
      return res.json(null);
    }
  }

  // UPDATE -> Atualiza um usuário
  async update(req, res) {
    try {
      // Pegando o ID do usuário logado
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ["Usuário não existe."],
        });
      }

      const novosDados = await user.update(req.body);
      // Fazendo destruction
      const { id, nome, email } = novosDados;
      // Retornando apenas algumas informações do usuário
      return res.json({ id, nome, email });
    } catch (error) {
      return res.status(400).json({
        erros: error.errors.map((err) => err.message),
      });
    }
  }

  // DELETE -> Apaga um usuário
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ["Usuário não existe."],
        });
      }

      await user.destroy();
      return res.json(null);
    } catch (error) {
      return res.status(400).json({
        erros: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
