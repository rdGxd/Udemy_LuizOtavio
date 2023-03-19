// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000
// const data = new Date();
// const data = new Date() // ANO, MES, DIA, HORA, MINUTO, SEGUNDO, MS
const data = new Date("2023-01-20 20:20:59");
const dia = data.getDate();
console.log("Dia", data.getDate());
console.log("Mês", data.getMonth() + 1); // Mês começa do zero
console.log("Ano", data.getFullYear());
console.log("Hora", data.getHours());
console.log("Minuto", data.getMinutes());
console.log("Segundos", data.getSeconds());
console.log("MS", data.getMilliseconds());
console.log("Dia semana", data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data.toString(""));

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());
}
const dataBrasil = formataData(data);
console.log(dataBrasil);
