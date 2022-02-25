export default class DadosCompra {
  _precoNormal = document.querySelector(".preco-normal");
  _precoDesconto = document.querySelector(".preco-desconto");
  _precoPix = document.querySelector(".pix-preco");
  _precoParcelado = document.querySelector(".preco-parcelado span");
  constructor() {}

  async apiCompra() {
    let url = "js/modules/produto.json";
    const respostaApi = await fetch(url);
    if (!respostaApi.ok) throw Error("Erro de requisição");

    const json = await respostaApi.json();

    return json;
  }

  montarProduto(opcao, quantidade) {
    const respostaApi = this.apiCompra();

    respostaApi.then((res) => {
      let precoNormal = res[opcao] * quantidade;
      let precoDesconto = (precoNormal - precoNormal * 0.3893).toFixed(2);
      let precoPix = (precoNormal - precoNormal * 0.404).toFixed(2);
      let precoParcelado = (precoDesconto / 3).toFixed(2);

      this._precoNormal.textContent = `R$ ${precoNormal}`;
      this._precoDesconto.textContent = `R$ ${precoDesconto}`;
      this._precoPix.textContent = `R$ ${precoPix}`;
      this._precoParcelado.textContent = ` 3x R$ ${precoParcelado} `;
    });
  }
}
