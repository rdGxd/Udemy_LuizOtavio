// Calculadora usando função construtora
function Calculadora() {
  const display = document.querySelector(".display");

  this.inicia = () => {
    this.cliqueBotoes();
    this.pressionaEnter();
  };

  this.pressionaEnter = () => {
    document.addEventListener("keyup", (e) => {
      console.log(e);
      if (e.key === "Enter") this.realizaConta();
    });
  };

  this.clearDisplay = () => (display.value = "");
  this.apagaUm = () => (display.value = display.value.slice(0, -1));

  this.realizaConta = () => {
    try {
      const conta = eval(display.value);
      if (!conta) {
        alert("Não é possível realizar essa conta");
        return;
      }
      display.value = conta;
    } catch (error) {
      alert("Não é possível realizar essa conta");
      return;
    }
  };

  this.cliqueBotoes = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;
      if (el.classList.contains("btn-num")) this.btnParaDisplay(el.textContent);
      if (el.classList.contains("btn-clear")) this.clearDisplay();
      if (el.classList.contains("btn-del")) this.apagaUm();
      if (el.classList.contains("btn-eq")) this.realizaConta();
    });

    this.btnParaDisplay = (valor) => {
      display.value += valor;
      display.focus();
    };
  };
}

const calculadora = new Calculadora();
calculadora.inicia();
