export class Produto {

    nome: string;
    precoCentavos: number;
    unidade: "kg" | "un";
    categoria: string;

    constructor(nome: string, precoCentavos: number, unidade: "kg" | "un", categoria: string) {

        this.nome = nome;
        this.precoCentavos = precoCentavos;
        this.unidade = unidade;
        this.categoria = categoria;

    }

    precoEmReais(): string {

        return "R$ " + (this.precoCentavos / 100).toFixed(2);

    }

    precoPorQuantidade(produto: string, quantidade: number): number {

        return this.precoCentavos * quantidade;

    }


}

