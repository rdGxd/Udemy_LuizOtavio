const container = document.querySelector(".container");
const elementos = [
  { tag: "p", texto: "Frase1" },
  { tag: "div", texto: "Frase2" },
  { tag: "footer", texto: "Frase3" },
  { tag: "section", texto: "Frase4" },
];

const div = document.createElement("div");
for (let i = 0; i < elementos.length; i++) {
  /*
  // MINHA SOLUÇÃO
  const tag = document.createElement(elementos[i].tag);
  tag.append(elementos[i].texto);
  container.appendChild(tag);
   */
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag);
  let textoCriado = document.createTextNode(texto);
  tagCriada.appendChild(textoCriado);
  div.appendChild(tagCriada);
}

container.appendChild(div);
