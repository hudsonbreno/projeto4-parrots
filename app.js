let parrot = "./img/back.png";
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

srcImg.sort(sortear);

let cartas_jogo =srcImg.slice(0, (quantidade/2));
for(i=0;i<quantidade/2;i++){
    cartas_jogo.push(cartas_jogo[i]);
}
cartas_jogo.sort(sortear);

contCardId=0;
for(contCardId=0;contCardId<quantidade;contCardId++){
    let divverso = document.createElement("divverso");
    divverso.className = "back-face";
    divverso.classList.add('virada','cima');
    divverso.setAttribute("onclick","viradaCards(this)");
    divverso.innerHTML= "<img class='viradaimg' src='" + cartas_jogo[contCardId] + "'><img class='cima' src='" + parrot + "'>";
    document.getElementById("jogo").appendChild(divverso);
}


function viradaCards(){
    let selecionada = document.querySelector("div");
    console.log(seleciona);
}


function cartasIguais(){
    let iguais = primeiraCarta.innerHTML === segundaCarta.innerHTML
    if (iguais){
        fixarCartas();
    } else {
        desvira();
    }
}


function sortear() { 
	return Math.random() - 0.5; 
}