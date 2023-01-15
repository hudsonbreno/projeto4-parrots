let srcImg = new Array ("./img/bobrossparrot.gif",
                        "./img/explodyparrot.gif",
                        "./img/fiestaparrot.gif",
                        "./img/metalparrot.gif",
                        "./img/revertitparrot.gif",
                        "./img/tripletsparrot.gif",
                        "./img/unicornparrot.gif")

//quantidade = prompt("Digite a quantidade de cartas no jogo");
quantidade = 4;
while(quantidade%2>0 && (quantidade=>2 && quantidade>=16 )){
    alert("Coloque um valor entre 4 e 14 e que seja par.")
    quantidade = prompt("Digite a quantidade de cartas no jogo");
    if(quantidade%2===0 && quantidade>2 && quantidade<16){
        break;
    }
}

srcImg.sort(comparador);

function comparador() { 
	return Math.random() - 0.5; 
}

contCardId=0;
setCards();
function setCards(){
    while (contCardId < quantidade){
        let card = document.getElementById('card${contCardId}');
        let divVerso = document.createElement('div');
        divVerso.className="back-face";
        divVerso.classList.add('virada');
        divVerso.setAttribute("onclick","viraCards(this)");
        card.append(divVerso);
        setaImgVerse(divVerso);
        setFront (card, contCardId);
        contCardId
    }
}

function selecCard(){
    let card = document.querySelector("item")
    card.innerHTML = item;
}


//function cartasIguais(){
//    let iguais = primeiraCarta.innerHTML === segundaCarta.innerHTML
//    if (iguais){
//        fixarCartas();
//    } else {
//        desvira();
//    }
//}