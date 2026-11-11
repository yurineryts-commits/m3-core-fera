import { Produto } from "../dominio/produto";

// const arroz = criarProduto("arroz 5 kg", 2490, "un", "mercearia");
// const banana = criarProduto("banana", "8,90", "kg", "hortifruti");
// const leite = criarProduto("leite 1 l", 539, "UN", "laticínios");

// console.log(precoEmReais(arroz));
// console.log(precoEmReais(banana));
// console.log(precoPorQuantidade(leite, 3), leite.unidade);

const arroz = new Produto("arroz 5 kg", 2490, "un", "mercearia");
const banana = new Produto("banana", 890, "kg", "hortifruti");
const leite = new Produto("leite 1L", 539, "un", "laticínios");

console.log(arroz.precoEmReais());
console.log(banana.precoEmReais());
console.log(leite.precoEmReais());