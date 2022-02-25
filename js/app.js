import ZoomImage from "./modules/zoom.js";
import EventoCompra from "./modules/compra.js";
import Cep from "./modules/Cep.js";

const zoom = new ZoomImage(".topo-produto-bg", '[data-zoom="principal"]');
zoom.iniciar();
const compra = new EventoCompra('[data-opcao="button"]');
compra.iniciar();

const cep = new Cep(".cep", ".btn-busca");
cep.iniciar();
cep.enviarFormulario();
