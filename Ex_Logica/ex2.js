// Escreva uma função chamada ePaisagem
// que recebe dois argumentos, largura e altura
// de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem.

/*
// Minha Solução
const ePaisagem = (largura, altura) => Number(largura) > Number(altura) ? true : false;
console.log(ePaisagem(1080, 1080))
*/

// SOLUÇÃO PROFESSOR
const ePaisagem = (largura, altura) => largura >= altura;
console.log(ePaisagem(1920, 2080));
