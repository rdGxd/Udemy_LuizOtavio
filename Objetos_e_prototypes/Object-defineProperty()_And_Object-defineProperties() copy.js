// Se eu quiser trava apenas uma ou mais propriedade do Objeto usamos:
// defineProperty() -> Para  uma propriedade

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true, //  mostra a chave
    value: estoque, //  mostra o valor
    writable: false, // controla se o valor pode ser alterado ou não
    configurable: false, // controla se a chave pode ser reconfigurável ou apagada
  });

  /*
  Object.defineProperties(this, {
    nome: {
      enumerable: true, //  mostra a chave
      value: nome, //  mostra o valor
      writable: true, // controla se o valor pode ser alterado ou não
      configurable: true, // controla se a chave pode ser reconfigurável ou apagada
    },
    preco: {
      enumerable: true, //  mostra a chave
      value: preco, //  mostra o valor
      writable: true, // controla se o valor pode ser alterado ou não
      configurable: true, // controla se a chave pode ser reconfigurável ou apagada
    },
    
  })*/
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(Object.keys(p1)); // Mostra as chaves do Objeto
for (let chave in p1) {
  console.log(chave); // Mostra as chaves do Objeto também
}
