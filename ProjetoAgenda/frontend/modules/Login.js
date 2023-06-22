const validator = require("validator");

export default class Login {
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
    const emailInput = el.querySelector("input[name=email]");
    const passwordInput = el.querySelector("input[name=password]");
    let error = false;
    if (!validator.isEmail(emailInput.value)) {
      alert("Email inválido");
      error = true;
      return;
    }
    if (passwordInput.value.length < 6 || passwordInput.value.length > 50) {
      alert("Sua senha deve ter entre 6 a 50 caracteres");
      error = true;
      return;
    }
    if(!error) el.submit();
  }
}
