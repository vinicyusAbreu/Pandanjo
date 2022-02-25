import DadosCompra from "./dadosCompra.js";

export default class EventoCompra extends DadosCompra {
  constructor(botoes) {
    super();
    this.botoes = document.querySelectorAll(botoes);
    this.inputNumero = document.querySelector(".qtd-compra");
  }

  selecionarOpcao() {
    this.botoes.forEach((elemento) => {
      elemento.addEventListener("click", (e) => {
        this.botoes.forEach((elemento) => {
          elemento.classList.remove("btn-info-ativo");
        });

        e.target.classList.add("btn-info-ativo");

        this.adicinandoValores();
      });
    });
  }

  adicinandoValores() {
    let _btnAtivo = document.querySelector(".btn-info-ativo");
    let opcao = _btnAtivo.getAttribute("data-valor");
    let quantidade = this.inputNumero.value;
    this.montarProduto(opcao, quantidade);
  }

  eventoInput() {
    this.inputNumero.addEventListener("input", (elemento) => {
      elemento.target.value =
        !!elemento.target.value && Math.abs(elemento.target.value) >= 1
          ? Math.abs(elemento.target.value)
          : null;
    });

    this.inputNumero.addEventListener("keypress", (elemento) => {
      if (elemento.key === "Enter") {
        this.adicinandoValores();
      }
    });

    this.inputNumero.addEventListener("blur", (elemento) => {
      this.adicinandoValores();
    });
  }

  incremento() {
    const incrementando = document.querySelector(".btn-aumentar");
    let valor = this.inputNumero;
    incrementando.addEventListener("click", () => {
      valor.value = ++valor.value;
      this.adicinandoValores();
    });
  }

  decremento() {
    const decrementar = document.querySelector(".btn-diminuir");
    let valor = this.inputNumero;
    decrementar.addEventListener("click", () => {
      if (valor.value > 1) {
        valor.value = --valor.value;
        this.adicinandoValores();
      }
    });
  }

  iniciar() {
    this.selecionarOpcao();
    this.eventoInput();
    this.incremento();
    this.decremento();
  }
}
