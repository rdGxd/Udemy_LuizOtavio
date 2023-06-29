import Sequelize, { Model } from "sequelize";
import appConfig from "../config/appConfig";
// Criando o MODEL Foto

// Passando os campos referente a tabela Fotos
export default class Foto extends Model {
  static init(sequelize) {
    super.init(
      {
        // Recebendo os campos e validando campos
        originalname: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "O campo não pode ser vazio",
            },
          },
        },
        filename: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "O campo não pode ser vazio",
            },
          },
        },
        // Configurando uma URL virtual
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${appConfig.url}/images/${this.getDataValue("filename")}`;
          },
        },
      },
      {
        sequelize,
        tableName: "fotos",
      },
    );
    return this;
  }

  // Falando que a FOTO pertence a um ALUNO
  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: "aluno_id" });
  }
}
