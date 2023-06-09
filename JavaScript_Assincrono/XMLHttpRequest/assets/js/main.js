const request = (obj) => {
  return new Promise((resolve, rejected) => {
    // Utilizando o construtor do XMLHttpRequest()
    const xhr = new XMLHttpRequest();
    // Enviando o Open com o objeto que estou recebendo que vai conter o method e o url
    xhr.open(obj.method, obj.url, true);
    xhr.send(null);

    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        rejected({
          code: xhr.status,
          msg: xhr.statusText,
        });
      }
    });
  });
};

// Pegando o link a partir do click
document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  try {
    const href = el.getAttribute("href");

    const objConfig = {
      method: "GET", // Enviando o method
      url: href,
    };

    const response = await request(objConfig);
    carregaResultado(response);
  } catch (error) {
    console.log(error);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}
