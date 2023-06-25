import Sequelize from "sequelize";
import databaseConfig from "../config/database";
import Aluno from "../models/Aluno";
import User from "../models/User";

// Carregando o modulo dentro do Array
const models = [Aluno, User];

// Conectando a base de dados
const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
