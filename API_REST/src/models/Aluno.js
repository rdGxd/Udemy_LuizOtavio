import Sequelize, { Model } from "sequelize";

// Criando o MODEL Aluno

// Passando os campos referente a tabela Alunos (NECESSÁRIO PARA A CRIAÇÃO DO ALUNO)
export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        // Recebendo os campos e validando campos
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "Campo nome deve ter entre 3 a 255 caracteres",
            },
          },
        },
        sobrenome: Sequelize.STRING,
        email: Sequelize.STRING,
        idade: Sequelize.INTEGER,
        peso: Sequelize.FLOAT,
        altura: Sequelize.FLOAT,
      },
      {
        sequelize,
      },
    );
    return this;
  }
}
