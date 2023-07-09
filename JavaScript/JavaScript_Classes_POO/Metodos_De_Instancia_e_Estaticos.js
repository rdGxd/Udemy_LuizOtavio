// Método estático é uma função que esta dentro de uma classe por questão de organização, mas você poderia criar uma função separada e usar ela na sua classe também.

// No método estático a classe já seta o this para você, o this vai ser referente a classe (NÃO INSTANCIA)

// Os métodos estáticos não tem acesso aos dados da instância

function teste() {
  console.log("Meu teste"); // o THIS aqui é o Objetivo global do node
}

class ControleRemoto {
  // Quando iniciar a classe com a palavra NEW o método constructor vai ser chamado
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
    teste();
  }

  // Método de instância -> o THIS é instância
  aumentarVolume() {
    this.volume += 2;
  }
  diminuirVolume() {
    this.volume -= 2;
  }

  // Método estático -> o THIS é a classe
  static trocaPilha() {
    console.log("Ok, vou trocar.");
  }
  static soma(x, y) {
    return x + y;
  }
}

const controle1 = new ControleRemoto("LG");
controle1.aumentarVolume();
ControleRemoto.trocaPilha();
console.log(controle1);
console.log(ControleRemoto.soma(10, 10));
