import Sequelize from "sequelize";
import databaseConfig from "../config/database";
// Importando os módulos
import Aluno from "../models/Aluno";
import User from "../models/User";

// Array com todos os módulos
const models = [Aluno, User];

// Criando a conexão
const connection = new Sequelize(databaseConfig);

// Mandando a conexão para todos os módulos dentro do Array
models.forEach((model) => model.init(connection));
