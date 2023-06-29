import Sequelize from "sequelize";
import databaseConfig from "../config/database";
// Importando os módulos
import Aluno from "../models/Aluno";
import User from "../models/User";
import Foto from "../models/Foto";

// Array com todos os módulos
const models = [Aluno, User, Foto];

// Criando a conexão
const connection = new Sequelize(databaseConfig);

// Mandando a conexão para todos os módulos dentro do Array
models.forEach((model) => model.init(connection));
// Checando se o model tem o método ASSOCIATE
models.forEach(
  (model) => model.associate && model.associate(connection.models),
);
