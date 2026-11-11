# Modelo do produto

O mapa das classes do backend. Cada dono acrescenta a sua peça no PR em que ela vira classe. O GitHub desenha o diagrama sozinho.

```mermaid
classDiagram
  class Produto {
    +string nome
    +number precoCentavos
    +string{un, kg} unidade
    +string categoria
    +constructor(nome: string, precoCentavos: number, unidade: string{un, kg}, categoria: string) 
    +precoEmReais() string
    +precoPorQuantidade(produto: string, quantidade: number) number
  }
```
