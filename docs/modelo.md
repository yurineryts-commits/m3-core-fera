```mermaid
classDiagram
    class Produto {
        <<class>>
        +readonly string nome
        +readonly number preco_centavos
        +readonly "kg" | "un" unidade
        +readonly string categoria
        +constructor(string nome, number preco_centavos, unidade, string categoria)
        +precoEmReais() string
        +precoPorQuantidade(string produto, number quantidade) number
    }

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

    class Catalogo {
        -Produto[] produtos
        +string[] recusados
        +constructor(string caminho)
        +buscar(string nome) Produto
        +precoDe(string nome) number
        +quantidade() number
    }

    Catalogo "1" o-- "*" Produto : armazena
    Orcamento "1" o-- "*" ItemCesta : controla

  ```