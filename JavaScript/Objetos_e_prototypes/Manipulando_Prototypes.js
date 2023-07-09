function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

const p1 = new Produto("Camiseta", 50);
// ---------------------------------------------------------------------------------------------
// Literal
const p2 = {
  nome: "Caneca",
  preco: 15,
};
Object.setPrototypeOf(p2, Produto.prototype); // -> Setando o prototype 
// ---------------------------------------------------------------------------------------------
const p3 = Object.create(Produto.prototype, {
  preco: {
    enumerable: true,
    value: 42,
    writable: true,
    configurable: true,
  },
  tamanho: { enumerable: true, value: 43, writable: true, configurable: true },
});

Object.setPrototypeOf(p3, Produto.prototype); // -> Setando o prototype 
p3.aumento(10);
console.log(p3.preco);
