export interface ItemCesta {

    preco_centavos: number;
    quantidade: number;

}

export class Orcamento {

    private itens: ItemCesta[] = [];
    private limiteCentavos: number;

    constructor(itens: ItemCesta[], limiteCentavos: number) {

        if (limiteCentavos <= 0) {

            throw new Error("O limite precisa ser maior que zero.");

        }

        this.itens = itens;
        this.limiteCentavos = limiteCentavos;

    }

    colocar(preco_centavos: number, quantidade: number): boolean {

        if (preco_centavos < 0 || quantidade <= 0) {

            return false

        }

        let item: ItemCesta = { preco_centavos, quantidade };

        this.itens.push(item);

        return true;

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

    mudarLimite(novoLimite: number): boolean {

        if (novoLimite <= 0){

            return false;

        }

        this.limiteCentavos = novoLimite;

        return true;

    }

}