/*
// Minha Solução
const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");
let segundo = 0;
let hora = 0;
let minuto = 0;
let contador;

iniciar.addEventListener("click", () => {
  relogio.classList.remove("pausado");
  clearInterval(contador);
  timer();
});

function timer() {
  contador = setInterval(() => {
    segundo++;
    relogio.textContent = `${formatHoras(hora)}:${formatMinutos(
      minuto
    )}:${formatSegundos(segundo)}`;
  }, 1000);
  pausarTime(contador);
  zerarTime(contador);
}

function pausarTime(tempo) {
  pausar.addEventListener("click", () => {
    relogio.classList.add("pausado");
    clearInterval(tempo);
  });
}

function zerarTime(tempo) {
  zerar.addEventListener("click", () => {
    relogio.classList.remove("pausado");
    clearInterval(tempo);
    relogio.textContent = "00:00:00";
    segundo = 0;
    hora = 0;
    minuto = 0;
  });
}

function formatSegundos(second) {
  if (second < 10) {
    return `0${second}`;
  } else if (second <= 59) {
    return second;
  } else {
    segundo = 0;
    minuto++;
    return formatMinutos(segundo);
  }
}

function formatMinutos(minute) {
  if (minute <= 9) {
    return `0${minute}`;
  } else if (minute <= 59) {
    return minute;
  } else {
    minuto = 0;
    hora++;
    return formatHoras(minute);
  }
}

function formatHoras(hour) {
  if (hour <= 9) {
    return `0${hour}`;
  } else {
    return hour;
  }
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
