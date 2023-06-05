// defineProperty() -> Getter e Setters

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;
  Object.defineProperty(this, "estoque", {
    enumerable: true, //  mostra a chave
    configurable: true, // controla se a chave pode ser reconfigurável ou apagada
    // Obtém o valor
    get: function () {
      return estoquePrivado;
    },
    // seta o valor
    set: function (valor) {
      if (typeof valor !== "number") {
        throw new TypeError("Error");
      }
      estoquePrivado = valor;
    },
  });
}

//  Função fabrica
function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },

    set nome(valor) {
      if (typeof valor !== "string") {
        throw new TypeError("Error");
      }
      valor = valor.replace("coisa", "")
      nome = valor;
    },
  };
}

// const p1 = new Produto("Camiseta", 20, 3);
const p2 = criaProduto("Camiseta");
p2.nome = "Qualquer coisa"
console.log(p2.nome)