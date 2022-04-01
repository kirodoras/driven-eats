function cardSelectPrato(whichCard) {
    const cardSelecionado = document.querySelector(".pratoSelecionado");

    if(cardSelecionado !== null) {
        cardSelecionado.classList.remove("pratoSelecionado");
    }

    escolhaPratos = whichCard.classList.add("pratoSelecionado");

    checkThree();
}

function cardSelectBebida(whichCard) {
    const cardSelecionado = document.querySelector(".bebidaSelecionado");

    if(cardSelecionado !== null) {
        cardSelecionado.classList.remove("bebidaSelecionado");
    }

    whichCard.classList.add("bebidaSelecionado");

    checkThree();
}

function cardSelectSobremesa(whichCard) {
    const cardSelecionado = document.querySelector(".sobremesaSelecionado");

    if(cardSelecionado !== null) {
        cardSelecionado.classList.remove("sobremesaSelecionado");
    }

    whichCard.classList.add("sobremesaSelecionado");

    checkThree();
}

function checkThree () {
    const statusPratos = document.querySelector(".pratoSelecionado");
    const statusBebida = document.querySelector(".bebidaSelecionado");
    const statusSobremesa = document.querySelector(".sobremesaSelecionado");
    const buttonClose = document.querySelector("footer div button");
    
    if(statusPratos !== null && statusBebida !== null && statusSobremesa !== null){
            buttonClose.classList.add("buttonActive");
            buttonClose.innerHTML = "Fechar pedido";
    }
}