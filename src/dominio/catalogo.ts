// legado/catalogo.js · lê os produtos que "a API" mandou
// const fs = require("fs");

import * as fs from "fs";

// interface ProdutoDaApi{

//     id: number;
//     nome: string;
//     precos_centavos: number;
//     unidade: "kg" | "un";
//     categoria: string;


// }


export class Catalogo{

       
        produtos: any[];



        constructor(caminho: string){

         const texto = fs.readFileSync(caminho, "utf8"); 

         this.produtos = JSON.parse(texto).dados;
        }
        
        buscar(nome: string){

              for(let i =0; i< this.produtos.length; i++){

                if (this.produtos[i].nome===nome){

                  return this.produtos[i]

                }

              }

        }


        precoDe(nome: string): number{

        return this.buscar(nome).preco_centavos;  
        }


}

const catalogo = new Catalogo("dados/produtos.json")



// console.log(produtos.length + " produtos carregados");
// console.log(precoDe(produtos, "arroz 5 kg"));
// console.log(precoDe(produtos, "feijao 1 kg"));


// module.exports = { carregar, buscar, precoDe };

