import { Orcamento } from "../dominio/orcamento";

const orcamento = new Orcamento([], 6000);

orcamento.colocar(2490, 1);
orcamento.colocar(799, 2);
orcamento.colocar(749, 2);

console.log("");
console.log(orcamento.mudarLimite(-50) + " | " + orcamento.saldo());
console.log("");