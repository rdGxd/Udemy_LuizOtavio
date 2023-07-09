// Importando express
const express = require("express");
const app = express();

//       | Criar   Ler   Atualizar   Apagar
// CRUD -| CREATE, READ, UPDATE,     DELETE
//       | POST    GET   PUT         DELETE

// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato

// Rotadas da aplicação -> A mesma pode receber mais de um verbo HTTP

// A requisição é o que o usuário pediu e resposta é o que o servidor envio
app.get("/", (req, res) => {
  res.send(`
  <form action="/" method="post">
    Nome do cliente: <input type="text" name="nome">
    <button>Enviar</button>
  </form>
  `);
});

app.post("/", (req, res) => {
  res.send("Enviado com sucesso");
});

app.get("/contato", (req, res) => {
  res.send("Obrigado por entrar em contato com a gente.");
});

// Pedindo para o express escutar na porta:3000 tudo que chegar
app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
