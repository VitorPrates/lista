import {produtos_exercicio} from "../produtos copy.js"

const elemento = {
    btnCurva: document.querySelectorAll(".btnCurva"),
    containerDisplay: document.querySelector("#containerDisplay")
}
console.log(elemento.containerDisplay)
elemento.btnCurva.forEach((item) =>{
    item.addEventListener("change",(evento) => {
       listarprodutoscurva(evento.target.id)
    })
})

function listarprodutoscurva(curva)
{
    let filtrados = produtos_exercicio.filter((produto) => produto.curva_abc == curva)
    // console.table(filtrados)
    inserirdadoscurvaABC(filtrados)
}

function inserirdadoscurvaABC(dados)
{
    //criar objeto vazio
    let colunasGRID = {
        id: document.createElement("p"),
        nome: document.createElement("p"),
        preco_venda: document.createElement("p"),
        estoque: document.createElement("p"),
    }
    //devinir campos

    dados.forEach((item) => {
        colunasGRID.id.innerHTML = item.id
        colunasGRID.nome.innerHTML = item.nome
        colunasGRID.preco_venda.innerHTML = item.preco_venda.toLocaleString("pt-BR",{style:"currency", currency:"BRL"})
        colunasGRID.estoque.innerHTML = item.estoque
        elemento.containerDisplay.append(colunasGRID.id, colunasGRID.nome, colunasGRID.preco_venda, colunasGRID.estoque)
    })
    // const display = elemento.containerDisplay
    // display.innerText = "heio"
}
