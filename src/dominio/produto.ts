export class Produto {

    readonly nome: string;
    readonly preco_centavos: number;
    readonly unidade: "kg" | "un";
    readonly categoria: string;

    constructor(nome: string, preco_centavos: number, unidade: "kg" | "un", categoria: string) {

        if (preco_centavos < 0){

            throw new Error("Preço negativo: " + nome);

        }

        this.nome = nome;
        this.preco_centavos = preco_centavos;
        this.unidade = unidade;
        this.categoria = categoria;

    }

    precoEmReais(): string {

        return "R$ " + (this.preco_centavos / 100).toFixed(2);

    }

    precoPorQuantidade(produto: string, quantidade: number): number {

        return this.preco_centavos * quantidade;

    }


}

