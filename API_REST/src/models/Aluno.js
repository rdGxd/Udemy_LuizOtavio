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
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "Campo sobrenome deve ter entre 3 a 255 caracteres",
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: "",
          unique: {
            msg: "E-mail já registrado",
          },
          validate: {
            isEmail: {
              msg: "E-mail inválido",
            },
          },
        },
        idade: {
          type: Sequelize.INTEGER,
          defaultValue: "",
          validate: {
            isInt: {
              msg: "Idade precisa ser um número inteiro",
            },
          },
        },
        peso: {
          type: Sequelize.FLOAT,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "Peso precisa ser um número inteiro ou de ponto flutuante",
            },
          },
        },
        altura: {
          type: Sequelize.FLOAT,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "Altura precisa ser um número inteiro ou de ponto flutuante",
            },
          },
        },
      },
      {
        sequelize,
      },
    );
    return this;
  }

  // Falando que o ALUNO tem uma FOTO
  // hasOne -> 1,
  // hasMany -> Muitos
  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: "aluno_id" });
  }
}
