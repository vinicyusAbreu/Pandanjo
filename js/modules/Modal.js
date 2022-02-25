export default class Modal {
  _sobreposicao = document.querySelector(".sobreposicao");
  constructor(modal, btnAbrir, btnFechar) {
    this.modal = document.querySelector(modal);
    this.btnAbrir = document.querySelector(btnAbrir);
    this.btnFechar = document.querySelector(btnFechar);
  }
  abrirModal() {
    this.modal.classList.remove("esconder");
    this._sobreposicao.classList.remove("esconder");
  }
  fecharModal() {
    this.modal.classList.add("esconder");
    this._sobreposicao.classList.add("esconder");
  }
  clickAbrirModal() {
    this.btnAbrir.addEventListener("click", () => {
      this.abrirModal();
    });
  }

  clickFecharModal() {
    this.btnFechar.addEventListener("click", () => {
      this.fecharModal();
    });
  }
}
