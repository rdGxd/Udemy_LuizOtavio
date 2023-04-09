/*
//Solução INTERNET
const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

let contadorSegundos = 0;
let contadorMinutos = 0;
let contadorHoras = 0;

function formataSegundos(segundos) {
  if (segundos <= 9) {
    return `0${segundos}`;
  } else {
    return segundos;
  }
}

iniciar.addEventListener("click", () => {
  relogio.classList.remove("pausado");
  const crono = setInterval(() => {
    contadorSegundos += 1;
    const segundin = formataSegundos(contadorSegundos);
    const minutin = formataSegundos(contadorMinutos);
    const horinhas = formataSegundos(contadorHoras);
    if (contadorSegundos >= 59) {
      contadorSegundos = 0;
      contadorMinutos += 1;
    }
    if (contadorMinutos >= 59) {
      contadorMinutos = 0;
      contadorHoras = 1;
    }
    relogio.textContent = `${horinhas}:${minutin}:${segundin}`;
  }, 1000);
  paraContador(crono);
  zerarContador(crono);
});

function paraContador(para) {
  pausar.addEventListener("click", () => {
    relogio.classList.add("pausado");
    clearInterval(para);
  });
}

function zerarContador(crono) {
  zerar.addEventListener("click", () => {
    relogio.classList.remove("pausado");
    setTimeout(() => {
      clearInterval(crono);
      relogio.textContent = "00:00:00";
    }, 1000);
  });
}
*/

// SOLUÇÃO PROFESSOR
function relogio() {
  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      house12: false,
      timeZone: "UTC",
    });
  }
  
  const relogio = document.querySelector(".relogio");
  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(() => {
      segundos++;
      relogio.textContent = criaHoraDosSegundos(segundos);
    }, 1000);
  }

  document.addEventListener("click", (e) => {
    const el = e.target;
    if (el.classList.contains("zerar")) {
      relogio.classList.remove("pausado");
      clearInterval(timer);
      relogio.textContent = "00:00:00";
      segundos = 0;
    }

    if (el.classList.contains("pausar")) {
      clearInterval(timer);
      relogio.classList.add("pausado");
    }

    if (el.classList.contains("iniciar")) {
      relogio.classList.remove("pausado");
      clearInterval(timer);
      iniciaRelogio();
    }
  });
}

relogio();
