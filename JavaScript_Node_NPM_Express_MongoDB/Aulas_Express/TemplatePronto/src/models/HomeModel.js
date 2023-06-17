const mongoose = require("mongoose");

// O MongoDB não se importa como os dados vão ser jogados la e então cabe a gente tratar eles

// Criando um Schema e configurando os dados que a gente quer
const HomeSchema = new mongoose.Schema({
  titulo: { type: String, required: true }, // Falando que o titulo precisa ser enviado. (required)
  descricao: String,
});

// Criando o model (NOME, Schema)
const HomeModel = mongoose.model("Home", HomeSchema);

// class Home {}

// exportando
module.exports = HomeModel;
