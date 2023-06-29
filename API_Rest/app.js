import dotenv from "dotenv";
import { resolve } from "path";

dotenv.config();

// Chamando o INDEX dentro do database, ele vai ser executando automaticamente
import "./src/database";

import express from "express";
import homeRoutes from "./src/routes/homeRoutes";
import userRoutes from "./src/routes/userRoutes";
import tokenRoutes from "./src/routes/tokenRoutes";
import alunoRoutes from "./src/routes/alunoRoutes";
import fotoRoutes from "./src/routes/fotoRoutes";

class App {
  // Inicializando tudo
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  // Registrando middlewares
  middlewares() {
    // A gente pode postar formulários para dentro da nossa aplicação
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    // Configurando arquivos estáticos
    this.app.use(express.static(resolve(__dirname, "uploads")));
  }

  // Registrando rotas
  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/users/", userRoutes);
    this.app.use("/tokens/", tokenRoutes);
    this.app.use("/alunos/", alunoRoutes);
    this.app.use("/fotos/", fotoRoutes);
  }
}

export default new App().app;
