function rand(min = 0, max = 3) {
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

/*
esperaAi("Fase 1", rand())
  .then((response) => {
    console.log(response);
    return esperaAi("Fase 2", rand());
  })
  .then((response) => {
    console.log(response);
    return esperaAi("Fase 3", rand());
  })
  .then((response) => {
    console.log(response);
  })
  .catch((e) => console.log(e));
*/

async function executa() {
  try {
    // await só pode ser utilizada se a função for Async
    const fase1 = esperaAi("Fase 1", 1000);
    console.log(fase1);

    setTimeout(() => {
      console.log(`Essa Promise estava pendente `, fase1);
    }, 1100);

    const fase2 = await esperaAi("Fase 2", rand());
    console.log(fase2);

    const fase3 = await esperaAi("Fase 3", rand());
    console.log(fase3);

    console.log(`Terminamos na fase: ${fase3}`);
  } catch (error) {
    console.log(error);
  }
}

executa();

/* 
ESTADOS DE UMA PROMISE
Pendente -> pending
fullFilled -> resolvida
reject -> rejeitada
*/
