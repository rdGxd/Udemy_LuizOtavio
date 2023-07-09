/*
Object.keys -> (Retorna as chaves)
Object.values -> (Retorna os valores)
Object.entries -> (Retorna os valores e as chaves)
Object.assign(des, any) -> (Util para copiar outro objeto e adicionar mais coisas)
Object.getOwnPropertyDescriptor(objeto, "prop") -> (Serve para mostrar se a propriedade pode ser alterada)
... (spread) -> (Util para copiar outro objeto e adicionar mais coisas)
Object.freeze -> (Congela o objeto)
Object.defineProperties -> (Define várias propriedades)
Object.defineProperty -> (Define uma propriedade)
*/

const produto = { nome: "Caneca", preco: 1.8 };
console.log(Object.entries(produto))
