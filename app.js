let parrot = "./img/back.png";
let srcImg = new Array ("./img/bobrossparrot.gif",
                        "./img/explodyparrot.gif",
                        "./img/fiestaparrot.gif",
                        "./img/metalparrot.gif",
                        "./img/revertitparrot.gif",
                        "./img/tripletsparrot.gif",
                        "./img/unicornparrot.gif")

quantidade = prompt("Digite a quantidade de cartas no jogo");
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
    let div = document.createElement("div");
    div.className = "back-face";
    div.classList.add('virada','cima');
    div.setAttribute("onclick","viradaCards(this)");
    div.innerHTML= "<img class='viradaimg' id='carta"+ contCardId +"' src='" + cartas_jogo[contCardId] + "'><img class='frente' src='" + parrot + "'>";
    document.getElementById("jogo").appendChild(div);
}
let quantidadeCartas=0;
let atual;
let anterior;
let elementatual;
let elementanterior;


function viradaCards(element){
    if(element.querySelector(".viradaimg").style.display ==='initial'){

    }else{
        if (elementanterior !== undefined) {
            elementatual = element;
            atual = elementatual.querySelector(".viradaimg").src;
            elementatual.style.transition= "all 300ms linear";
            elementatual.style.transform= "rotateY(180deg)";
            elementatual.querySelector(".frente").style.display="none";
            elementatual.querySelector(".viradaimg").style.display="initial";
        }

        if (elementanterior === undefined) {
            elementanterior = element;
            anterior = elementanterior.querySelector(".viradaimg").src;
        }
        elementanterior.style.transition= "all 300ms linear";
        elementanterior.style.transform= "rotateY(180deg)";
        elementanterior.querySelector(".frente").style.display="none";
        elementanterior.querySelector(".viradaimg").style.display="initial";
        quantidadeCartas++;
        if(anterior === atual){
            elementanterior.removeAttribute("onclick");
            element.removeAttribute("onclick");
            elementanterior = undefined;
        }else if (quantidadeCartas%2==0){
            setTimeout(()=>{desvirar(elementatual)},1000);
            setTimeout(()=>{desviraranteriror(elementanterior)},1000);
        }
    }
}

function desvirar(elementatual){
    elementatual.querySelector(".frente").style.display="initial"; 
    elementatual.querySelector(".viradaimg").style.display="none";
}

function desviraranteriror(elementanterior){
    elementanterior.querySelector(".frente").style.display="initial"; 
    elementanterior.querySelector(".viradaimg").style.display="none";
    elementanterior = undefined;
}

function comparar(){
    if(quantidadeCartas%2==0 && quantidadeCartas>0){
        return(anterior === atual)
   }
}

function sortear() { 
	return Math.random() - 0.5; 
}