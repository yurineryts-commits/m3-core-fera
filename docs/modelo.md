# Modelo do produto

O mapa das classes do backend. Cada dono acrescenta a sua peça no PR em que ela vira classe. O GitHub desenha o diagrama sozinho.

```mermaid
classDiagram
    class Produto {
        <<class>>
        +readonly string nome
        +readonly number preco_centavos
        +readonly "kg" | "un" unidade
        +readonly string categoria
        +constructor(string nome, number preco_centavos, "kg" | "un" unidade, string categoria)
        +precoEmReais() string
        +precoPorQuantidade(string produto, number quantidade) number
    }
```
```mermaid
classDiagram
    class ItemCesta {
        <<interface>>
        +number preco_centavos
        +number quantidade
    }

    class Orcamento {
        -ItemCesta[] itens
        -number limiteCentavos
        +constructor(ItemCesta[] itens, number limiteCentavos)
        +colocar(number preco_centavos, number quantidade) boolean
        +gasto() number
        +saldo() number
        +estourou() boolean
        +mudarLimite(number novoLimite) boolean
    }
```

```mermaid
classDiagram
  class Catalogo {
    -Produto[] produtos
    +string[] recusados
    +constructor(caminho: string)
    +buscar(nome: string) : Produto | undefined
    +precoDe(nome: string) : number | undefined
    +quantidade() : number
  }
  ```


