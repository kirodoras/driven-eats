function cardSelectPrato(whichCard) {
    const cardSelecionado = document.querySelector(".pratoSelecionado");

    if(cardSelecionado !== null) {
        cardSelecionado.classList.remove("pratoSelecionado");
    }

    whichCard.classList.add("pratoSelecionado");
}

function cardSelectBebida(whichCard) {
    const cardSelecionado = document.querySelector(".bebidaSelecionado");

    if(cardSelecionado !== null) {
        cardSelecionado.classList.remove("bebidaSelecionado");
    }

    whichCard.classList.add("bebidaSelecionado");
}

function cardSelectSobremesa(whichCard) {
    const cardSelecionado = document.querySelector(".sobremesaSelecionado");

    if(cardSelecionado !== null) {
        cardSelecionado.classList.remove("sobremesaSelecionado");
    }

    whichCard.classList.add("sobremesaSelecionado");
}