import Sequelize, { Model } from "sequelize";
import bcryptjs from "bcryptjs";

// Criando o MODEL User

// Passando os campos referente a tabela Users (NECESSÁRIO PARA A CRIAÇÃO DO USER)
export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        // Recebendo os campos e validando
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
        email: {
          type: Sequelize.STRING,
          defaultValue: "",
          unique: {
            msg: "E-mail já existe",
          },
          validate: {
            isEmail: {
              msg: "Email inválido",
            },
          },
        },
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: "",
          validate: {
            len: {
              args: [6, 50],
              msg: "A senha deve ter entre 6 a 50 caracteres",
            },
          },
        },
      },
      {
        sequelize,
      },
    );

    // Adicionando o hook e criptografando a senha do usuário
    this.addHook("beforeSave", async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hashSync(user.password, 8);
      }
    });
    return this;
  }

  // Verificando se a senha é válida
  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}
