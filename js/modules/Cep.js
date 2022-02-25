import Modal from "./Modal.js";

export default class Cep extends Modal {
  _inputCidade = document.querySelector("#cidade");
  _inputRua = document.querySelector("#rua");
  _selectEstado = document.querySelector("#estado");
  constructor(cepInput, enviarCep) {
    super(".modal", ".encontrar-cep", ".fechar-modal");
    this.inputCep = document.querySelector(cepInput);
    this.enviarCep = document.querySelector(enviarCep);
  }
  formatarCep(str) {
    let re = /^([\d]{2})\.*([\d]{3})-?([\d]{3})/;

    if (re.test(str)) {
      return str.replace(re, "$1.$2-$3");
    } else {
      alert("CEP inválido!");
    }

    return "";
  }

  formatarEntradaCep() {
    this.inputCep.addEventListener("blur", (event) => {
      event.target.value = this.formatarCep(event.target.value);
    });
  }

  async buscarCep(cidade, rua, uf) {
    let url = `https://viacep.com.br/ws/${uf}/${cidade}/${rua}/json/`;
    const resposta = await fetch(url);
    const dados = await resposta.json();
    return dados;
  }

  enviarFormulario() {
    this.enviarCep.addEventListener("click", (event) => {
      event.preventDefault();

      if (
        this._inputCidade.value.trim() !== "" &&
        this._inputRua.value.trim() !== "" &&
        this._selectEstado.value.trim() !== ""
      ) {
        const dadosRetornado = this.buscarCep(
          this._inputCidade.value.trim(),
          this._inputRua.value.trim(),
          this._selectEstado.value
        );

        this.mostrarResultadoBusca(dadosRetornado);
      } else {
        alert("Preencha todos os campos!");
      }
    });
  }

  mostrarResultadoBusca(dados) {
    dados
      .then((json) => {
        if (json.length !== 0) {
          const formatarCep = this.formatarCep(json[0].cep);
          this.inputCep.value = formatarCep;
          this.fecharModal();
        } else {
          alert("CEP não encontrado!");
        }
      })
      .catch((erro) => {
        alert("CEP não encontrado!");
      });
  }
  iniciar() {
    this.formatarEntradaCep();
    this.clickAbrirModal();
    this.clickFecharModal();
  }
}
