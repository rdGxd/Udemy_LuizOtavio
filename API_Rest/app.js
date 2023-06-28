import dotenv from "dotenv";

dotenv.config();

// Chamando o INDEX dentro do database, ele vai ser executando automaticamente
import "./src/database";

import express from "express";
import homeRoutes from "./src/routes/homeRoutes";
import userRoutes from "./src/routes/userRoutes";
import tokenRoutes from "./src/routes/tokenRoutes";
import alunoRoutes from "./src/routes/alunoRoutes";

class App {
  // Inicializando tudo
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  // Registrando middlewares
  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  // Registrando rotas
  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/users/", userRoutes);
    this.app.use("/tokens/", tokenRoutes);
    this.app.use("/aluno/", alunoRoutes);
  }
}

export default new App().app;
