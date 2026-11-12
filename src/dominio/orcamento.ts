export interface ItemCesta {

    preco_centavos: number;
    quantidade: number;

}

export class Orcamento {

    itens: ItemCesta[] = [];
    limiteCentavos: number;

    constructor(itens: ItemCesta[], limiteCentavos: number) {

        this.itens = itens;
        this.limiteCentavos = limiteCentavos;
    
    }

    colocar(preco_centavos: number, quantidade: number): void {
        
        let item: ItemCesta = {preco_centavos, quantidade};

        this.itens.push(item);

    }

    gasto(): number {

        let soma = 0;

        for (let i = 0; i < this.itens.length; i++) {

            soma = soma + this.itens[i].preco_centavos * this.itens[i].quantidade;

        }

        return soma;

    }

    saldo(): number {

        return this.limiteCentavos - this.gasto();

    }

    estourou(): boolean {

        return this.gasto() > this.limiteCentavos;

    }

    mudarLimite(novoLimite: number): void {

        this.limiteCentavos = novoLimite;

    }

}