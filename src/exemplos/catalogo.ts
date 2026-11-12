import { Catalogo } from "../dominio/catalogo";

const catalogo = new Catalogo("dados/produtos.json");
console.log(catalogo.quantidade() + " produtos válidos");
console.log("Recusados:", catalogo.recusados);
const arroz = catalogo.buscar("arroz 5 kg");
if (arroz !== undefined) {
  console.log(arroz.precoEmReais());
}