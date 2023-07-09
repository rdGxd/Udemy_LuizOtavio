// HERANÇA = Você herda tudo dos seus PAIS mas seus PAIS NÃO HERDAM nada de você.

// Pai
class DispositivoEletronico {
  constructor(nome, b) {
    this.nome = nome;
    this.ligado = false;
    this.b = b;
  }

  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} já ligado`);
      return;
    }
    this.ligado = true;
  }
  desligar() {
    if (!this.ligado) {
      console.log(`${this.nome} já desligado`);
      return;
    }
    this.ligado = false;
  }
}

// As Classes SmartPhone e Tablet são irmãs, o que tem em Uma não tem na outra

// -------------------FILHO------------------------------
// Criando uma nova classe e herdando características de outra deve ser usada a palavra EXTENDS para indicar de qual classe você quer herdar
class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    // Acrescentando novas coisas a classe
    super(nome); // Chamar o construtor da classe PAI e executar ele aqui dentro, para que ele execute todo o código que tenha pedido anteriormente
    this.cor = cor; // Especifico da classe SmartPhone
    this.modelo = modelo; // Especifico da classe SmartPhone
  }
}
// const s1 = new Smartphone("Samsung", "Preto", " Galaxy S10");
// console.log(s1);

// -------------------FILHO------------------------------
class Tablet extends DispositivoEletronico {
  constructor(nome, temWifi) {
    super(nome);
    this.temWifi = temWifi;
  }

  // Reescrevendo métodos
  ligar() {
    // quando executar o t1.ligar() ele irá verificar se esse método estar dentro da classe se não estiver ele irá até classe PAI
    console.log("Olha, você altero o método ligar.");
  }

  // Escrevendo novos métodos, esse método só esta dentro dessa classe
  falaOi() {
    console.log("Oi");
  }
}

const t1 = new Tablet("iPad", true);
t1.ligar();
