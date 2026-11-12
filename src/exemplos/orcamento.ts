import { Orcamento } from "../dominio/orcamento";

// -----------------E22-----------------------

// const orcamento = new Orcamento([2490, 799, 749], [1, 2, 2], 6000);

// console.log(orcamento.gasto(), orcamento.saldo(), orcamento.estourou());
// orcamento.mudarLimite("50,00");
// console.log(orcamento.gasto(), orcamento.saldo(), orcamento.estourou());

// -------------------------------------------

// -----------------E23-----------------------

const orcamento = new Orcamento([], 6000);

orcamento.colocar(2490, 1);
orcamento.colocar(799, 2);
orcamento.colocar(749, 2);

console.log("");
console.log("Gasto: " + orcamento.gasto() + " Saldo: " + orcamento.saldo() + " Orcamento estourado: " + orcamento.estourou());

orcamento.mudarLimite(5000);
console.log("");
console.log("Orcamento alterado para: " + (orcamento.limiteCentavos));

console.log("");
console.log("Gasto: " + orcamento.gasto() + " Saldo: " + orcamento.saldo() + " Orcamento estourado: " + orcamento.estourou());
console.log("");

// -------------------------------------------