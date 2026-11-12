import { Catalogo } from "./catalogo";
import { Orcamento } from "./orcamento";
import { Produto } from "./produto";

const catalogo = new Catalogo("dados/produtos.json");

console.log(catalogo.buscar("arroz 5 kg")?.precoEmReais());