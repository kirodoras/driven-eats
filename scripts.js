function cardSelect(whichCard) {
    const cardSelecionado = document.querySelector(".Selecionado");

    if(cardSelecionado !== null) {
        cardSelecionado.classList.remove("Selecionado");
    }

    whichCard.classList.add("Selecionado");
}