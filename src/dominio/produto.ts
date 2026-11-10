export class Produto {

    nome: string;
    precoCentavos: number;
    unidades: string;
    categoria: string;
    // id: number;

    constructor(nome: string, precoCentavos: number, unidades: string, categoria: string) {

        this.nome = nome;
        this.precoCentavos = precoCentavos;
        this.unidades = unidades;
        this.categoria = categoria;

    }

    precoEmReais(): string {

        return "R$ " + (this.precoCentavos / 100).toFixed(2);

    }

    precoPorQuantidade(produto: string, quantidade: number): number {

        return this.precoCentavos * quantidade;

        //console.log(this.nome + " X " + quantidade + " = R$ " + (this.precoCentavos*quantidade));

    }


}

