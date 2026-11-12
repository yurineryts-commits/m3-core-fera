import { Catalogo } from "../dominio/catalogo";

// const catalogo = new Catalogo("dados/produtos.json");

// console.log(catalogo.produtos.length + " produtos carregados");
// console.log(catalogo.precoDe("arroz 5 kg"));
// console.log(catalogo.precoDe("feijão 1 kg"));


// console.log(catalogo.buscar("arroz 5 kg"));
// console.log(catalogo.buscar("feijao 1 kg"));



const catalogo = new Catalogo("dados/produtos.json");
console.log(catalogo.produtos.length + " produtos válidos");
console.log("Recusados:", catalogo.recusados);
const feijao = catalogo.buscar("feijao 1 kg");
if (feijao === undefined) {
  console.log("feijao 1 kg não está no catálogo");
} else {
  console.log(feijao.precoEmReais());
}