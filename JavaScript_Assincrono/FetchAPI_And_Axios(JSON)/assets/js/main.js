// Fetch API para buscar os dados do JSON
/*
fetch("assets/json/pessoas.json")
  // Carregando o JSON para dentro do JS e retornando uma nova Promise
  .then((response) => response.json())
  // Pegando a nova Promise e enviando para a função
  .then((json) => carregaElementosNaPagina(json))
  .catch((e) => console.log(e));
*/

// AXIOS para buscar os dados do JSON
axios("assets/json/pessoas.json")
  .then((response) => carregaElementosNaPagina(response.data))
  .catch((e) => console.log(e));

function carregaElementosNaPagina(json) {
  // Criando a tabela
  const table = document.createElement("table");

  // Para cada Objeto dentro do Array a gente faz uma interação
  for (let pessoa of json) {
    // Cria uma linha na tabela
    const tr = document.createElement("tr");

    // Cria um TD para cada Coluna
    let td = document.createElement("td");
    // Um TD para NOME
    td.innerHTML = pessoa.nome;
    // Inserindo a TD na linha
    tr.appendChild(td);

    td = document.createElement("td");
    // Um TD para IDADE
    td.innerHTML = pessoa.idade;
    // Inserindo a TD na linha
    tr.appendChild(td);

    td = document.createElement("td");
    // Um TD para SALARIO
    td.innerHTML = pessoa.salario;
    // Inserindo a TD na linha
    tr.appendChild(td);

    // Inserindo a Linha na tabela
    table.appendChild(tr);
  }

  const resultado = document.querySelector(".resultado");
  resultado.appendChild(table);
}
