function randomNumber(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}
// Você cria uma Promise usando o construtor da Promise você vai receber 2 parâmetros (resolve, reject)
// resolve() -> Sempre que você quiser resolver uma promessa em qualquer lugar do código, essa promessa vai ficar pendente até que chegue no resolve essa promessa vai cair no .then(), TODO RESOLVE VAI CAIR NO .then()
// reject() -> vai direto pro .catch() e ai você trata o erro da maneira que você quiser.

// Promises são promessas de algo que você não sabe quando vai acontecer.
function esperaAi(msg, tempo) {
  // Chamando o construtor da Promise(resolve, reject):
  // resolve: Esse código executou com sucesso então resolve ele pra mim.
  // reject: Deu um erro aqui no código rejeita isso pra mim.
  return new Promise((resolve, reject) => {
    // Posso rejeitar como eu quiser -> new Erro, false, reject(MSG DE ERRO AQUI)
    if (typeof msg !== "string") {
      reject(new Erro("Error"));
      return;
    }
    setTimeout(() => {
      resolve(msg); // <- Parâmetro único;
      return;
    }, tempo);
  });
}

// o .then() será executado quando resolver a Promise; -> resolve();
// o .catch() será executado quando a Promise for rejeitada; -> reject();
// .then() e .catch() Recebem uma função;
// Dentro de .then() eu posso colocar outra Promise;
esperaAi("Conexão com a BD", randomNumber(1, 3))
  .then((response) => {
    console.log(response);
    return esperaAi("Buscando dados da BASE", randomNumber(1, 3));
  })
  .then((response) => {
    console.log(response);
    return esperaAi(11232131, randomNumber(1, 3));
    // return esperaAi("Tratando os dados da BASE", randomNumber(1, 3));
  })
  .then((response) => {
    console.log(response);
  })
  .then(() => {
    console.log("Exibe dados na tela");
  })
  // o .catch() é ERRO sempre vai ser o ERRO
  .catch((e) => {
    console.log(`ERROR: ${e}`);
  });

console.log("Isso aqui será exibido antes de qualquer Promise");
