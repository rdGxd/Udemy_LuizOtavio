const validator = require("validator");

export default class Contato {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) return;
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.validate(e);
    });
  }

  validate(e) {
    const el = e.target;
    const nomeInput = el.querySelector("input[name=nome]");
    const emailInput = el.querySelector("input[name=email]");
    const telefoneInput = el.querySelector("input[name=telefone]");
    let error = false;

    // Validação
    if (!nomeInput.value) {
      alert("Nome inválido");
      error = true;
      return;
    }
    if (!emailInput.value && !telefoneInput.value) {
      alert("O Contato precisa de um telefone ou e-mail");
      error = true;
      return;
    }
    if (emailInput.value && !validator.isEmail(emailInput.value)) {
      alert("Email inválido");
      error = true;
      return;
    }
    if (!error) el.submit();
  }
}
