import {produtos_exercicio} from "../produtos copy.js"

const elemento = {
    btnCurva: document.querySelectorAll(".btnCurva"),
    containerDisplay: document.querySelector("#containerDisplay"),
    btnpesquisatodes: document.querySelector("#listar_todes")
}
// console.log(elemento.containerDisplay)

elemento.btnpesquisatodes.addEventListener("click", () => {
    let todes = produtos_exercicio
    elemento.containerDisplay.innerHTML = "";
    let colunasGRID = {
        id: document.createElement("p"),
        nome: document.createElement("p"),
        preco_venda: document.createElement("p"),
        estoque: document.createElement("p"),
    }
    colunasGRID.id.innerText = "ID"
    colunasGRID.nome.innerText = "NOME"
    colunasGRID.preco_venda.innerText = "PREÇO"
    colunasGRID.estoque.innerText = "ESTOQUE"

    elemento.containerDisplay.append(colunasGRID.id, colunasGRID.nome, colunasGRID.preco_venda, colunasGRID.estoque)

    produtos_exercicio.forEach((item) => {
        let id = document.createElement("p")
        let nome = document.createElement("p")
        let preco_venda = document.createElement("p")
        let estoque = document.createElement("p")

        id.innerText = item.id
        nome.innerText = item.nome
        preco_venda.innerText = item.preco_venda.toLocaleString("pt-BR",{style:"currency", currency:"BRL"})
        estoque.innerText = item.estoque

        elemento.containerDisplay.append(id, nome, preco_venda, estoque)
    })
})

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
    elemento.containerDisplay.innerHTML = "";
    let colunasGRID = {
        id: document.createElement("p"),
        nome: document.createElement("p"),
        preco_venda: document.createElement("p"),
        estoque: document.createElement("p"),
    }
     colunasGRID.id.innerText = "ID"
    colunasGRID.nome.innerText = "NOME"
    colunasGRID.preco_venda.innerText = "PREÇO"
    colunasGRID.estoque.innerText = "ESTOQUE"

    elemento.containerDisplay.append(colunasGRID.id, colunasGRID.nome, colunasGRID.preco_venda, colunasGRID.estoque)

    // console.table(dados)

    //devinir campos
    // dados.forEach((item) => {
    //     console.log(item.id)
    // })

    let dadosfilter = dados

    dadosfilter.forEach((item) => {
        let id = document.createElement("p")
        let nome = document.createElement("p")
        let preco_venda = document.createElement("p")
        let estoque = document.createElement("p")

        id.innerText = item.id
        nome.innerText = item.nome
        preco_venda.innerText = item.preco_venda.toLocaleString("pt-BR",{style:"currency", currency:"BRL"})
        estoque.innerText = item.estoque

        elemento.containerDisplay.append(id, nome, preco_venda, estoque)
    })
    // const display = elemento.containerDisplay
    // display.innerText = "heio"
}
