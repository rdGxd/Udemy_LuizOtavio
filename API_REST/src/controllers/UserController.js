import User from "../models/User";

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      res.json(novoUser);
    } catch (error) {
      res.status(400).json({
        erros: error.errors.map((erro) => erro.message),
      });
    }
  }
}

export default new UserController();
