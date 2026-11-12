export class Orcamento {

    precos: number[] = [];
    quantidades: number[] = [];
    limiteCentavos: number;

    constructor(precos: number[], quantidades: number[], limiteCentavos: number) {
        this.precos = precos;
        this.quantidades = quantidades;
        this.limiteCentavos = limiteCentavos;
    }

    colocar(preco_centavos: number, quantidade: number) {

    }

    gasto(): number {

        let soma = 0;

        for (let i = 0; i < this.precos.length; i++) {

            soma = soma + this.precos[i] * this.quantidades[i];

        }

        return soma;

    }

    saldo() {

        return this.limiteCentavos - this.gasto();

    }

    estourou() {

        return this.gasto() > this.limiteCentavos;

    }

    mudarLimite(novoLimite: number) {

        this.limiteCentavos = novoLimite;

    }

}