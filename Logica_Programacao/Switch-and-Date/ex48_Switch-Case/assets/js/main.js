const h1 = document.querySelector(".container h1");
const data = new Date();

/*
// Minha tentativa:
function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}
function getDiaSemana(dia) {
  let diaSemanaTexto;
  switch (dia) {
    case 0:
      diaSemanaTexto = "Domingo";
      return diaSemanaTexto;
    case 1:
      diaSemanaTexto = "Segunda-feira";
      return diaSemanaTexto;
    case 2:
      diaSemanaTexto = "Terça-feira";
      return diaSemanaTexto;
    case 3:
      diaSemanaTexto = "Quarta-Feira";
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = "Quinta-feita";
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = "Sexta-Feira";
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = "Sábado";
      return diaSemanaTexto;
    default:
      diaSemanaTexto = "";
      return diaSemanaTexto;
  }
}
function getNomeMes(nomeMes) {
  let mesAno;
  switch (nomeMes) {
    case 0:
      mesAno = "Janeiro";
      return mesAno;
    case 1:
      mesAno = "Fevereiro";
      return mesAno;
    case 2:
      mesAno = "Março";
      return mesAno;
    case 3:
      mesAno = "Abril";
      return mesAno;
    case 4:
      mesAno = "Maio";
      return mesAno;
    case 5:
      mesAno = "Junho";
      return mesAno;
    case 6:
      mesAno = "Julho";
      return mesAno;
    case 7:
      mesAno = "Agosto";
      return mesAno;
    case 8:
      mesAno = "Setembro";
      return mesAno;
    case 9:
      mesAno = "Outubro";
      return mesAno;
    case 10:
      mesAno = "Novembro";
      return mesAno;
    case 11:
      mesAno = "Dezembro";
      return mesAno;
    default:
      break;
  }
}
function createDate(data) {
  const nomeDia = getDiaSemana(data.getDay());
  const dataSemana = data.getDate();
  const nomeMes = getNomeMes(data.getMonth());
  const year = data.getFullYear();
  const hours = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  return `${nomeDia}, ${dataSemana} de ${nomeMes} de ${year} ${hours}:${min}`;
}
h1.innerHTML = createDate(data);
*/

/*
Outra opção 
h1.innerHTML = data.toLocaleDateString("pt-BR", {
  dateStyle: "full",
  timeStyle: "short",
});
*/

// Tentativa sem switch
function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}
function getDiaSemana(dia) {
  const diasSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  return diasSemana[dia];
}
function getNomeMes(nomeMes) {
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return meses[nomeMes];
}
function createDate(data) {
  const nomeDia = getDiaSemana(data.getDay());
  const dataSemana = data.getDate();
  const nomeMes = getNomeMes(data.getMonth());
  const year = data.getFullYear();
  const hours = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  return `${nomeDia}, ${dataSemana} de ${nomeMes} de ${year} ${hours}:${min}`;
}
h1.innerHTML = createDate(data);
