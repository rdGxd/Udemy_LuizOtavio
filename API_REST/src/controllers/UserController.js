import User from "../models/User";

class UserController {
  // INDEX -> listar todos os usuários
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  // STORE/CREATE -> Cria um novo usuário
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
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
      return res.json(user);
    } catch (error) {
      return res.json(null);
    }
  }

  // UPDATE -> Atualiza um usuário
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ["ID não enviado."],
        });
      }

      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({
          errors: ["Usuário não existe."],
        });
      }

      const novosDados = await user.update(req.body);
      return res.json(novosDados);
    } catch (error) {
      return res.status(400).json({
        erros: error.errors.map((err) => err.message),
      });
    }
  }

  // DELETE -> Apaga um usuário
  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ["ID não enviado."],
        });
      }

      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(400).json({
          errors: ["Usuário não existe."],
        });
      }

      await user.destroy();
      return res.json(user);
    } catch (error) {
      return res.status(400).json({
        erros: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
