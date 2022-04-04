function cardSelectPrato(whichCard) {
    const cardSelecionado = document.querySelector(".pratoSelecionado");

    if(cardSelecionado !== null) {
        cardSelecionado.classList.remove("pratoSelecionado");
        cardSelecionado.querySelector(".card-footerP img").classList.add("hidden");
    }

    whichCard.classList.add("pratoSelecionado");
    whichCard.querySelector(".card-footerP img").classList.remove("hidden");

    checkThree();
}

function cardSelectBebida(whichCard) {
    const cardSelecionado = document.querySelector(".bebidaSelecionado");

    if(cardSelecionado !== null) {
        cardSelecionado.classList.remove("bebidaSelecionado");
        cardSelecionado.querySelector(".card-footerB img").classList.add("hidden");
    }

    whichCard.classList.add("bebidaSelecionado");
    whichCard.querySelector(".card-footerB img").classList.remove("hidden");

    checkThree();
}

function cardSelectSobremesa(whichCard) {
    const cardSelecionado = document.querySelector(".sobremesaSelecionado");

    if(cardSelecionado !== null) {
        cardSelecionado.classList.remove("sobremesaSelecionado");
        cardSelecionado.querySelector(".card-footerS img").classList.add("hidden");
    }

    whichCard.classList.add("sobremesaSelecionado");
    whichCard.querySelector(".card-footerS img").classList.remove("hidden");

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
    let nome = prompt("Qual o seu nome?");
    let cep = prompt("Qual é o seu endereço?");

    const infoPratos = document.querySelector(".pratoSelecionado h4").innerHTML;
    let precoPratos = document.querySelector(".pratoSelecionado strong").innerHTML.replace("," , ".");

    const infoBebida = document.querySelector(".bebidaSelecionado h4").innerHTML;
    let precoBebida = document.querySelector(".bebidaSelecionado strong").innerHTML.replace("," , ".");

    const infoSobremesa = document.querySelector(".sobremesaSelecionado h4").innerHTML;
    let precoSobremesa = document.querySelector(".sobremesaSelecionado strong").innerHTML.replace("," , ".");

    let total = Number(precoPratos) + Number(precoBebida) + Number(precoSobremesa);

    let envioMensagem = "Olá, gostaria de fazer o pedido:\n"+"- Prato: " + infoPratos + "\n- Bebida: " + infoBebida + "\n- Sobremesa: " + infoSobremesa + "\nTotal: R$ " + total.toFixed(2) + "\n\nNome: " + nome + "\nEndereço: " + cep;
    envioMensagem = encodeURIComponent(envioMensagem);
        
    window.open("https://wa.me/+5579998005016?text="+ envioMensagem);
}

function openModal(){
    const buttonStatus = document.querySelector(".buttonActive");
    if(buttonStatus !== null) {
        document.querySelector(".modal").classList.remove("hidden");
        const infoPratos = document.querySelector(".pratoSelecionado h4").innerHTML;
        let precoPratos = document.querySelector(".pratoSelecionado strong").innerHTML.replace("," , ".");

        const infoBebida = document.querySelector(".bebidaSelecionado h4").innerHTML;
        let precoBebida = document.querySelector(".bebidaSelecionado strong").innerHTML.replace("," , ".");

        const infoSobremesa = document.querySelector(".sobremesaSelecionado h4").innerHTML;
        let precoSobremesa = document.querySelector(".sobremesaSelecionado strong").innerHTML.replace("," , ".");

        let total = Number(precoPratos) + Number(precoBebida) + Number(precoSobremesa);
        document.querySelector(".confirmacao-prato span").innerHTML = infoPratos;
        document.querySelector(".confirmacao-bebida span").innerHTML = infoBebida;
        document.querySelector(".confirmacao-sobremesa span").innerHTML = infoSobremesa;
        document.querySelector(".confirmacao-prato strong").innerHTML = precoPratos;
        document.querySelector(".confirmacao-bebida strong").innerHTML = precoBebida;
        document.querySelector(".confirmacao-sobremesa strong").innerHTML = precoSobremesa;
        document.querySelector(".confirmacao-total strong").innerHTML = total.toFixed(2);
    }
}

function closeModal(){
    const buttonStatus = document.querySelector(".modal-cancel");
    if(buttonStatus !== null) {
        document.querySelector(".modal").classList.add("hidden");
    }
}