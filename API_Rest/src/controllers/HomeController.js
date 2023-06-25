import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Maria",
      sobrenome: "Miranda",
      email: "teste@teste.com",
      idade: 20,
      peso: 57,
      altura: 1.60,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
