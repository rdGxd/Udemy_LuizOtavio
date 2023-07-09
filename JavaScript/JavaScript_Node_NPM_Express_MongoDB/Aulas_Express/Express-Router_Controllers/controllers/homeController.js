exports.paginaInicial = (req, res) => {
  res.send(
    `
  <form action="/" method="post">
    Nome do cliente: <input type="text" name="nome"><br/>
    outroCampo: <input type="text" name="outroCampo">
    <button>Enviar</button>
  </form>
  `
  );
};

exports.trataPost = (req, res) => {
  res.send("Ei, sou sua nova rota de POST.")
}