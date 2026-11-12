import * as fs from "fs";
import { Produto } from "./produto";

interface ProdutoDaApi {

   id: number;
   nome: string;
   preco_centavos: number;
   unidade: "kg" | "un";
   categoria: string;


}

export class Catalogo {


   private produtos: Produto[] = [];
   readonly recusados: string[] = [];


   constructor(caminho: string) {

      const resposta = JSON.parse(fs.readFileSync(caminho, "utf8"));

      for (let i = 0; i < resposta.dados.length; i++) {

         const dado: ProdutoDaApi = resposta.dados[i];

         if (typeof dado.preco_centavos !== "number") {

            this.recusados.push(dado.nome + " preço não é número");

         }

         else if (dado.unidade !== "kg" && dado.unidade !== "un") {

            this.recusados.push(dado.nome + " :unidade " + dado.unidade + " não é kg nem un")


         }

         else {

            try {
               this.produtos.push(new Produto(dado.nome, dado.preco_centavos, dado.unidade, dado.categoria));
            } catch (erro) {
               this.recusados.push(dado.nome + ": " + erro);
            }

         }

      }


   }

   buscar(nome: string): Produto | undefined {

      for (let i = 0; i < this.produtos.length; i++) {

         if (this.produtos[i].nome === nome) {

            return this.produtos[i]

         }

      }

      return undefined;

   }

   precoDe(nome: string): number | undefined {


      const produto = this.buscar(nome);

      if (produto !== undefined) {


         return produto.preco_centavos;

      }

      return undefined;
   }


   quantidade(): number {


      return this.produtos.length;

   }

}
