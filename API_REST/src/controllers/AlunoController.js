import Aluno from "../models/Aluno";

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  }

  async store(req, res) {
    try {
      // Recebendo os dados do aluno e criando ele utilizando o req.body
      const aluno = await Aluno.create(req.body);
      return res.json(aluno);
    } catch (error) {
      return res.status(400).json({
        erros: error.errors.map((erro) => erro.message),
      });
    }
  }

  async show(req, res) {
    try {
      // Recebendo o ID
      const { id } = req.params;

      // Checando se o ID existe
      if (!id) {
        return res.status(400).json({
          errors: ["Faltando ID"],
        });
      }

      // Buscando o Aluno no banco de dados pelo ID
      const aluno = await Aluno.findByPk(id);

      // Checando se o Aluno existe
      if (!aluno) {
        return res.status(400).json({
          errors: ["Aluno não existe"],
        });
      }

      const { email, nome } = aluno;

      // Retornando o aluno
      return res.json({ id, nome, email });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      // Recebendo o ID
      const { id } = req.params;

      // Checando se o ID existe
      if (!id) {
        return res.status(400).json({
          errors: ["Faltando ID"],
        });
      }

      // Buscando o Aluno no banco de dados pelo ID
      const aluno = await Aluno.findByPk(id);

      // Checando se o Aluno existe
      if (!aluno) {
        return res.status(400).json({
          errors: ["Aluno não existe"],
        });
      }

      // Apagando o Aluno
      await aluno.destroy();

      return res.json({
        Apagado: true,
      });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      // Recebendo o ID
      const { id } = req.params;

      // Checando se o ID existe
      if (!id) {
        return res.status(400).json({
          errors: ["Faltando ID"],
        });
      }

      // Buscando o Aluno no banco de dados pelo ID
      const aluno = await Aluno.findByPk(id);

      // Checando se o Aluno existe
      if (!aluno) {
        return res.status(400).json({
          errors: ["Aluno não existe"],
        });
      }

      // Atualizando o aluno
      const alunoAtualizado = await aluno.update(req.body);

      const { email, nome } = alunoAtualizado;

      return res.json({ id, email, nome });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController();
