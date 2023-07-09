"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
// Criando o MODEL Aluno

// Passando os campos referente a tabela Alunos (NECESSÁRIO PARA A CRIAÇÃO DO ALUNO)
 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        // Recebendo os campos e validando campos
        nome: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "Campo nome deve ter entre 3 a 255 caracteres",
            },
          },
        },
        sobrenome: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "Campo sobrenome deve ter entre 3 a 255 caracteres",
            },
          },
        },
        email: {
          type: _sequelize2.default.STRING,
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
          type: _sequelize2.default.INTEGER,
          defaultValue: "",
          validate: {
            isInt: {
              msg: "Idade precisa ser um número inteiro",
            },
          },
        },
        peso: {
          type: _sequelize2.default.FLOAT,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "Peso precisa ser um número inteiro ou de ponto flutuante",
            },
          },
        },
        altura: {
          type: _sequelize2.default.FLOAT,
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
} exports.default = Aluno;
