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
let elementanterior;


function viradaCards(element){
    if(element.querySelector(".viradaimg").style.display ==='initial'){

    }else{
        anterior = atual;
        element.style.transition= "all 300ms linear";
        element.style.transform= "rotateY(180deg)";
        element.querySelector(".frente").style.display="none";
        element.querySelector(".viradaimg").style.display="initial";
        atual = element.querySelector(".viradaimg").src;
        quantidadeCartas++;
        if(comparar() === true){
            elementanterior.removeAttribute("onclick");
            element.removeAttribute("onclick");
        }else if (quantidadeCartas%2==0){
            setTimeout(()=> {desvirar(element,elementanterior)},1000);
        }
        elementanterior = element;
    }
}

function comparar(){
    if(quantidadeCartas%2==0 && quantidadeCartas>0){
        return(anterior === atual)
   }
}

function desvirar(element, elementanterior){
    elementanterior
    element.style.transition= "all 1000ms linear";
    element.style.transform= "rotateY(180deg)";
    elementanterior.style.transition= "all 1000ms linear";
    elementanterior.style.transform= "rotateY(180deg)";

    elementanterior.querySelector(".frente").style.display="initial";
    elementanterior.querySelector(".viradaimg").style.display="none";
    element.querySelector(".frente").style.display="initial"; 
    element.querySelector(".viradaimg").style.display="none";
}


function sortear() { 
	return Math.random() - 0.5; 
}