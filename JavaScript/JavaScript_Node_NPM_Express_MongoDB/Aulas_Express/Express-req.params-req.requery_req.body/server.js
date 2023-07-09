const express = require("express");
const app = express();

// Falando pro express para ele tratar o que vem no req.body -> se você nao fizer isso vai retorna undefined
app.use(express.urlencoded({ extended: true }));

// req.params -> São as partes que vem na ROTA da URL ex: /profiles/1

// req.query -> São as query strings ex: /profiles/1/?chave1=valor1&chave2=valor2 (Começa com "?" e se precisar por mais coloque "&" pode colocar quantas você quiser)

// req.body -> Quando vc posta o formulário com o method="post" o formulário vai fazer um post para a requisição, então você deve tratar a rota com POST e dai o que você vai receber no corpo da requisição "REQ.BODY" são os valores que vão dentro de um Objeto "{}" de acordo com o que envio no NAME do formulário, "o NAME do INPUT é a Chave do OBJETO" e o valor vai vim dentro de "req.body.NomeDoInput"

app.get("/", (req, res) => {
  // O name é o que vai ir pro post
  res.send(
    `
  <form action="/" method="post">
    Nome do cliente: <input type="text" name="nome"><br/>
    outroCampo: <input type="text" name="outroCampo">
    <button>Enviar</button>
  </form>
  `
  );
});

// Recebendo parâmetros, query -> Colocando o "?" sinaliza que o parâmetro é opcional
app.get("/testes/:idUsuarios?/:parametro?", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  // res.send(req.params);
  res.send(req.query.facebookprofile);
});

// Recebendo o req.body -> Recebendo o que foi enviado (Dentro da requisição)
app.post("/", (req, res) => {
  console.log(req.body);
  // o req.body.nome -> o NOME é o NAME do INPUT você pega o valor do NAME (Precisa ser o mesmo)
  res.send(`O que você me enviou foi: ${req.body.nome}, ${req.body.outroCampo}`);
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
