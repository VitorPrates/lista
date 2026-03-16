import { produtos_exercicio } from "../produtos copy.js";
// import { produtos } from "../produtos.js";
// console.table(produtos_exercicio)

/* ****************************** INSTRUÇÕES ******************************* 

1- Importe o array de produtos do arquivo "produtos.js" para o arquivo "exercicios.js" para realizar as operações necessárias. 
2- Todas as soluções devem ser implementadas utilizando FUNÇÕES (com ou sem parâmetros, de acordo com a necessidade).
3- Ao finalizar os exercícios, você deve criar um repositório público no Github chamado "arrays" e enviar o link no grupo do WhatsApp ou através do email: tiago.guimaraes@sp.senai.br

Data da entrega: até 19/03/2026 */

// ******************************** CENÁRIO *******************************

/* O supermercado Care4 deseja implementar um sistema de gerenciamento de estoque para otimizar suas operações. O sistema deve ser capaz de listar os produtos com base em sua rotatividade (alta, média ou baixa) e curva ABC (A, B ou C). Além disso, o sistema deve identificar quais produtos precisam ser repostos com base em critérios específicos, como rotatividade alta e curva ABC A. O objetivo é garantir que os produtos mais importantes estejam sempre disponíveis para os clientes, evitando faltas e otimizando o espaço de armazenamento.

******************************** Critérios para reposição *******************************
 
- Produtos de alta rotatividade e curva ABC A: Estoque mínimo: 100 unidades.
- Produtos de alta rotatividade e curva ABC B: Estoque mínimo: 80 unidades.
- Produtos de alta rotatividade e curva ABC C: Estoque mínimo: 50 unidades.

- Produtos de média rotatividade e curva ABC A: Estoque mínimo: 80 unidades.
- Produtos de média rotatividade e curva ABC B: Estoque mínimo: 60 unidades.
- Produtos de média rotatividade e curva ABC C: Estoque mínimo: 30 unidades.

- Produtos de baixa rotatividade e curva ABC A: Estoque mínimo: 50 unidades.
- Produtos de baixa rotatividade e curva ABC B: Estoque mínimo: 30 unidades.
- Produtos de baixa rotatividade e curva ABC C: Estoque mínimo: 10 unidades.

*/

// ******************************** EXERCÍCIOS *******************************

// 1- Crie uma função que liste todos id's e os nomes os produtos em estoque.
function listar_nomesid()
{
    let nomeseid = produtos_exercicio.map(produto => ({ id: produto.id, nome: produto.nome }))
    console.table(nomeseid)
}
// listar_nomesid()

// 2- Crie uma função que liste todos os produtos em estoque, de acordo com a curva ABC (A, B ou C) selecionada pelo usuário.
function selecionar_curva()
{
    let curva_selecionada = "C"
    let curva = produtos_exercicio.filter((produtos) => produtos.curva_abc == curva_selecionada)
    console.table(curva)
}
// selecionar_curva()

// 3- Crie uma função que liste todos os produtos em estoque, de acordo com a rotatividade selecionada pelo usuário.
function selecionar_rotatividade(rotat = "baixa")
{
    let rotatividade_selecionada = rotat
    let rotatividade = produtos_exercicio.filter((produtos) => produtos.rotatividade == rotatividade_selecionada)
    console.table(rotatividade)
}
// selecionar_rotatividade()

// 4- Crie uma função que liste todos os produtos com base na seleção de rotatividade (alta, média ou baixa) e curva ABC (A, B ou C) pelo usuário.
function selecionar_rotatividade_curva(rotat = "alta", curv = "A")
{
    let rotatividade_selecionada = rotat
    let curva_selecionada = curv
    let rotatividade_curva = produtos_exercicio.filter((produtos) =>
         produtos.curva_abc == curva_selecionada && produtos.rotatividade == rotatividade_selecionada
    )
    // rotatividade_curva = rotatividade_curva.map(produto => ({ id: produto.id, nome: produto.nome }))
    console.table(rotatividade_curva)
}
// selecionar_rotatividade_curva()

// 5- Crie uma função que identifique quais produtos precisam ser repostos com base nos critérios de rotatividade e curva ABC mencionados acima.
function estoque_ABC(rotat = "baixa", curv = "A")
{
    /*
    - Produtos de alta rotatividade e curva ABC A: Estoque mínimo: 100 unidades.
    - Produtos de alta rotatividade e curva ABC B: Estoque mínimo: 80 unidades.
    - Produtos de alta rotatividade e curva ABC C: Estoque mínimo: 50 unidades.

    - Produtos de média rotatividade e curva ABC A: Estoque mínimo: 80 unidades.
    - Produtos de média rotatividade e curva ABC B: Estoque mínimo: 60 unidades.
    - Produtos de média rotatividade e curva ABC C: Estoque mínimo: 30 unidades.

    - Produtos de baixa rotatividade e curva ABC A: Estoque mínimo: 50 unidades.
    - Produtos de baixa rotatividade e curva ABC B: Estoque mínimo: 30 unidades.
    - Produtos de baixa rotatividade e curva ABC C: Estoque mínimo: 10 unidades.
    */

    // let rotatividade_curva = produtos_exercicio.map(produto => ({ curva: produto.curva_abc, rotacao: produto.rotatividade, nome: produto.nome, estoque:produto.estoque,
    //      reabastecer: (
    //         (((curv == "A" && rotat=="alta") && produto.curva_abc == "A" && produto.rotatividade == "alta" && produto.estoque <= 110)) ||
    //         (((curv == "B" && rotat=="alta") && produto.curva_abc == "B" && produto.rotatividade == "alta" && produto.estoque <= 80)) ||
    //         (((curv == "C" && rotat=="alta") && produto.curva_abc == "C" && produto.rotatividade == "alta" && produto.estoque <= 50)) ||

    //         (((curv == "A" && rotat=="media") && produto.curva_abc == "A" && produto.rotatividade == "media" && produto.estoque <= 80)) ||
    //         (((curv == "B" && rotat=="media") && produto.curva_abc == "B" && produto.rotatividade == "media" && produto.estoque <= 60)) ||
    //         (((curv == "C" && rotat=="media") && produto.curva_abc == "C" && produto.rotatividade == "media" && produto.estoque <= 30)) ||

    //         (((curv == "A" && rotat=="baixa") && produto.curva_abc == "A" && produto.rotatividade == "baixa" && produto.estoque <= 50)) ||
    //         (((curv == "A" && rotat=="baixa") && produto.curva_abc == "B" && produto.rotatividade == "baixa" && produto.estoque <= 30)) ||
    //         (((curv == "A" && rotat=="baixa") && produto.curva_abc == "C" && produto.rotatividade == "baixa" && produto.estoque <= 10))
    //     )
    // }))
    console.log("REABASTECER: ")
    let rotatividade_curva = produtos_exercicio.filter((produto) => 
        (((curv == "A" && rotat=="alta") && produto.curva_abc == "A" && produto.rotatividade == "alta" && produto.estoque <= 100)) ||
        (((curv == "B" && rotat=="alta") && produto.curva_abc == "B" && produto.rotatividade == "alta" && produto.estoque <= 80)) ||
        (((curv == "C" && rotat=="alta") && produto.curva_abc == "C" && produto.rotatividade == "alta" && produto.estoque <= 50)) ||

        (((curv == "A" && rotat=="media") && produto.curva_abc == "A" && produto.rotatividade == "media" && produto.estoque <= 80)) ||
        (((curv == "B" && rotat=="media") && produto.curva_abc == "B" && produto.rotatividade == "media" && produto.estoque <= 60)) ||
        (((curv == "C" && rotat=="media") && produto.curva_abc == "C" && produto.rotatividade == "media" && produto.estoque <= 30)) ||

        (((curv == "A" && rotat=="baixa") && produto.curva_abc == "A" && produto.rotatividade == "baixa" && produto.estoque <= 50)) ||
        (((curv == "B" && rotat=="baixa") && produto.curva_abc == "B" && produto.rotatividade == "baixa" && produto.estoque <= 30)) ||
        (((curv == "C" && rotat=="baixa") && produto.curva_abc == "C" && produto.rotatividade == "baixa" && produto.estoque <= 10))
    )
    console.table(rotatividade_curva)   
}
// estoque_ABC()

// 6- Crie uma função que calcule o valor total do estoque, considerando o preço de compra e a quantidade em estoque de cada produto.
function valor_estoque()
{
    let totalestoque = produtos_exercicio.reduce((acumulator,item) => acumulator + (item.preco_compra*item.estoque),0);
    console.table(totalestoque.toLocaleString("pt-BR",{style:"currency", currency:"BRL"}))
}
// valor_estoque()

// 7- Crie uma função que aplique um desconto de 10% no preço de venda de todos os produtos de baixa rotatividade e curva C e exiba a nova lista de produtos com os preços atualizados.
function aplicar_desconto()
{
    let produtos_desconto = produtos_exercicio.filter((produto) => produto.curva_abc == "C" && produto.rotatividade == "baixa").map(produto =>({...produto, desconto: produto.preco_venda * 0.9}))
    console.table(produtos_desconto)
}
// aplicar_desconto()

// 8- Crie uma função que permita ao usuário adicionar um novo produto ao estoque, solicitando as informações necessárias (nome, preço de compra, preço de venda, quantidade em estoque, rotatividade e curva ABC).
function add_produto(
    input_nome = "",
    input_precovenda = 0,
    input_precocompra = 0,
    input_estoque = 0,
    input_rotatividade = "",
    input_curva_abc = "",
)
{
    produtos_exercicio.push(
      { id: produtos_exercicio.length+1, nome: input_nome, preco_venda: input_precovenda, preco_compra: input_precocompra, estoque: input_estoque, rotatividade: input_rotatividade, curva_abc: input_curva_abc}
    )
    console.table(produtos_exercicio)
}
// add_produto()

// 9- Crie uma função que permita ao usuário remover um produto do estoque, solicitando o id a ser removido.
function deletar_produtoID(id)
{
    console.log("Deletando: "+id)
    let produtoBuscado = produtos_exercicio.find(produto => produto.id == id)
    console.log(produtoBuscado)
    produtos_exercicio.splice(produtos_exercicio.indexOf(produtoBuscado),1)
    console.table(produtos_exercicio)
}
// deletar_produtoID(1)

// 10- Crie uma função que permita ao usuário atualizar as informações de um produto existente no estoque, solicitando o id do produto e as novas informações a serem atualizadas.
function atualizar_produto(
    input_id = 1,
    input_nome = "",
    input_precovenda = 0,
    input_precocompra = 0,
    input_estoque = 0,
    input_rotatividade = "",
    input_curva_abc = "",
)
{
    console.log("Atualizando: "+(produtos_exercicio.find(produto => produto.id == input_id).nome))

    produtos_exercicio.find(produto => produto.id == input_id).nome = input_nome == "" ? produtos_exercicio.find(produto => produto.id == input_id).nome : input_nome
    produtos_exercicio.find(produto => produto.id == input_id).preco_venda = input_precovenda == 0 ? produtos_exercicio.find(produto => produto.id == input_id).preco_venda : input_precovenda
    produtos_exercicio.find(produto => produto.id == input_id).preco_compra = input_precocompra == 0 ? produtos_exercicio.find(produto => produto.id == input_id).preco_compra : input_precocompra
    produtos_exercicio.find(produto => produto.id == input_id).estoque = input_estoque == 0 ? produtos_exercicio.find(produto => produto.id == input_id).estoque : input_estoque
    produtos_exercicio.find(produto => produto.id == input_id).rotatividade = input_rotatividade == "" ? produtos_exercicio.find(produto => produto.id == input_id).rotatividade : input_rotatividade
    produtos_exercicio.find(produto => produto.id == input_id).curva_abc = input_curva_abc == "" ? produtos_exercicio.find(produto => produto.id == input_id).curva_abc : input_curva_abc
    
    // console.log()
    console.table(produtos_exercicio)
}
atualizar_produto(1,"Agua", 4.2, 1.3, 180, "alta", "b")