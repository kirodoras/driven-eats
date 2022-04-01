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

function sendRequest (){
    const buttonStatus = document.querySelector(".buttonActive");

    if(buttonStatus !== null) {
        const infoPratos = document.querySelector(".pratoSelecionado h4").innerHTML;
        let precoPratos = document.querySelector(".pratoSelecionado strong").innerHTML.replace("," , ".");

        const infoBebida = document.querySelector(".bebidaSelecionado h4").innerHTML;
        let precoBebida = document.querySelector(".bebidaSelecionado strong").innerHTML.replace("," , ".");

        const infoSobremesa = document.querySelector(".sobremesaSelecionado h4").innerHTML;
        let precoSobremesa = document.querySelector(".sobremesaSelecionado strong").innerHTML.replace("," , ".");

        let total = Number(precoPratos) + Number(precoBebida) + Number(precoSobremesa );

        let envioMensagem = "Olá, gostaria de fazer o pedido:\n"+"- Prato: " + infoPratos + "\n- Bebida: " + infoBebida + "\n- Sobremesa: " + infoSobremesa + "\nTotal: R$ " + total.toFixed(2);
        envioMensagem = encodeURIComponent(envioMensagem);
        
        window.open("https://wa.me/+5579998005016?text="+ envioMensagem);
    }
}