function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("CAIU NO ERRO");
        return;
      }
      resolve(`${msg.toUpperCase()} - Passei na promise`);
      return;
    }, tempo);
  });
}

// Promise.all, Promise.race, Promise.resolve, Promise.reject
const promises = [
  // "Primeiro valor",
  esperaAi("Promise 1", rand(1, 3)),
  esperaAi("Promise 2", rand(1, 3)),
  esperaAi("Promise 3", rand(1, 3)),
  esperaAi(1000, 1000),
  // "Outro valor",
];

// Promise.all ->  Se uma der é errado vai rejeitar todas
/*
// Promise.all -> você vai passar um array com promessas ou com valores já resolvidos e ele vai te entregar uma promessa só com os valores dentro de um array.
// Se uma rejeitar ele vai sempre cair no erro, no caso vai rejeitar todas

Promise.all(promises)
  .then((response) => {
    console.log(response);
  })
  .catch((e) => {
    console.log(e);
  });
*/

// Promise.race -> vai tenter resolver uma a uma a primeira que resolver ele vai te entregar, se a primeira que resolver nao rejeitar ele vai te entregar o valor mas se a primeira que resolver rejeitar ele vai te entregar o erro
/*
// Promise.race -> O primeiro que resolver me entrega o valor
Promise.race(promises)
  .then((response) => {
    console.log(response);
  })
  .catch((e) => {
    console.log(e);
  });
*/

// Promise.resolve -> Ela espera que seja retornado dela é uma promessa, você não precisa esperar, você pode entrega uma promessa já resolvida ( RETORNAR UMA PROMESSA JÁ RESOLVIDA DE CARA). A função estática Promise.resolve retorna uma Promise de que será resolvida.;

// Promise.reject -> O método estático Promise.reject() retorna um objeto que é rejeitado com um determinado motivo.
function baixaPagina() {
  const emCache = true;

  // Resolve
  // if (emCache) {
  //   return Promise.resolve("Página em cache");
  // } else {
  //   return esperaAi("Baixei a página", rand(1, 3));
  // }

  if (emCache) {
    return Promise.reject("Página em cache");
  } else {
    return esperaAi("Baixei a página", 3000);
  }
}
baixaPagina()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((e) => console.log("ERRO", e));
