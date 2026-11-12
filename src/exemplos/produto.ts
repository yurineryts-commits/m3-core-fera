import { Produto } from "../dominio/produto";

// const arroz = criarProduto("arroz 5 kg", 2490, "un", "mercearia");
// const banana = criarProduto("banana", "8,90", "kg", "hortifruti");
// const leite = criarProduto("leite 1 l", 539, "UN", "laticínios");

// console.log(precoEmReais(arroz));
// console.log(precoEmReais(banana));
// console.log(precoPorQuantidade(leite, 3), leite.unidade);

// -----------------E22-----------------------

// const arroz = new Produto("arroz 5 kg", 2490, "un", "mercearia");
// const banana = new Produto("banana", 890, "kg", "hortifruti");
// const leite = new Produto("leite 1L", 539, "un", "laticínios");

// console.log(arroz.precoEmReais());
// console.log(banana.precoEmReais());
// console.log(leite.precoEmReais());

// -------------------------------------------

// -----------------E23-----------------------

// const arroz = new Produto("arroz 5 kg", 2490, "un", "mercearia");
// const leite = new Produto("leite 1 l", 539, "un", "laticínios");
// // com "UN": TS2345: Argument of type '"UN"' is not assignable to parameter of type '"kg" | "un"'.
// console.log(arroz.precoEmReais(), leite.unidade);

// -------------------------------------------

// -----------------E24-----------------------

const arroz = new Produto("arroz 5 kg", 2490, "un", "mercearia");
console.log(arroz.precoEmReais());
try {
    const errado = new Produto("feijão 1 kg", -799, "un", "mercearia");
    console.log(errado.precoEmReais());
} catch (erro) {
    console.log("Não criou. " + erro);
}

// -------------------------------------------