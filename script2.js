let letrecoDoDia = "talco";
let count = 5;
let inputs = document.querySelectorAll("#inputsRow input");
let tentativas = [];

// VERIFICAÇÃO PARA IDENTIFICAR SE A PALAVRA TEM 5 LETRAS
function verificarInputs() {

    let val1 = document.getElementById("firstLetter").value;
    let val2 = document.getElementById("secondLetter").value;
    let val3 = document.getElementById("thirdLetter").value;
    let val4 = document.getElementById("fourthLetter").value;
    let val5 = document.getElementById("fifthLetter").value;

    if (val1 != "" && val2 != "" && val3 != "" && val4 != "" && val5 != "") {

    } else {
        firstLetter.style.backgroundColor = "#ffffff";
        secondLetter.style.backgroundColor = "#ffffff";
        thirdLetter.style.backgroundColor = "#ffffff";
        fourthLetter.style.backgroundColor = "#ffffff";
        fifthLetter.style.backgroundColor = "#ffffff";
        alert("Apenas palavras com 5 letras");
        window.location.reload(false);

        firstLetter.focus();
    }
}

function clearButton() {
    firstLetter.value = "";
    secondLetter.value = "";
    thirdLetter.value = "";
    fourthLetter.value = "";
    fifthLetter.value = "";


    firstLetter.style.backgroundColor = "#ffffff";
    secondLetter.style.backgroundColor = "#ffffff";
    thirdLetter.style.backgroundColor = "#ffffff";
    fourthLetter.style.backgroundColor = "#ffffff";
    fifthLetter.style.backgroundColor = "#ffffff";

    firstLetter.disabled = false;
    secondLetter.disabled = false;
    thirdLetter.disabled = false;
    fourthLetter.disabled = false;
    fifthLetter.disabled = false;

    firstLetter.focus();
}

//PASSAR AUTOMATICAMENTE PARA O PROXIMO INPUT
function proximoInput() {
    if (firstLetter.maxlength === 1) {
        secondLetter.focus();
        if (secondLetter.maxlength === 1) {
            thirdLetter.focus();
            if (thirdLetter.maxlength === 1) {
                fourthLetter.focus();
                if (fourthLetter.maxlength === 1) {
                    fifthLetter.focus();
                    if (fourthLetter.maxlength === 1) {
                        fifthLetter.focus();
                    }
                }
            }
        }
    }
}



function match() {
    let primeiraTentativa = [document.querySelector("#firstLetter").value.toLowerCase(), document.querySelector("#secondLetter").value.toLowerCase(), document.querySelector("#thirdLetter").value.toLowerCase(), document.querySelector("#fourthLetter").value.toLowerCase(), document.querySelector("#fifthLetter").value.toLowerCase()];
    console.log(primeiraTentativa);
    firstLetter.style.backgroundColor = "#ff0000";
    secondLetter.style.backgroundColor = "#ff0000";
    thirdLetter.style.backgroundColor = "#ff0000";
    fourthLetter.style.backgroundColor = "#ff0000";
    fifthLetter.style.backgroundColor = "#ff0000";

    let match1 = letrecoDoDia.indexOf(primeiraTentativa[0]);
    let match2 = letrecoDoDia.indexOf(primeiraTentativa[1]);
    let match3 = letrecoDoDia.indexOf(primeiraTentativa[2]);
    let match4 = letrecoDoDia.indexOf(primeiraTentativa[3]);
    let match5 = letrecoDoDia.indexOf(primeiraTentativa[4]);
    let matchGeral = [match1, match2, match3, match4, match5];
    console.log(matchGeral);

    if (firstLetter.value === "t" && secondLetter.value === "a" && thirdLetter.value === "l" && fourthLetter.value === "c" && fifthLetter.value === "o") {
        Swal.fire(
            'Parabéns!',
            'voce ganhou um bombom<br>(e o jogo também)<br>(mas nao me pergunte quem vai dar ele, sou apens um alert :))',
        );
    }
    if (matchGeral.includes(-1)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Para de fracassar e tenta de novo!',
        });

        setTimeout(clearButton(),3000);
    }

    //ACHANDO A LETRA CERTA NO INDICE [0]
    if (matchGeral.indexOf(0) === 0) {
        let element = document.getElementById("firstLetter");
        element.style.backgroundColor = "#00ff00";
        console.log("encontrado no local certo");
    }
    // //ACHANDO A LETRA CERTA NO INDICE [1]
    if (matchGeral.indexOf(1) === 1) {
        let element = document.getElementById("secondLetter");
        element.style.backgroundColor = "#00ff00";
        console.log("encontrado no local certo");
    }
    //ACHANDO A LETRA CERTA NO INDICE [2]
    if (matchGeral.indexOf(2) === 2) {
        let element = document.getElementById("thirdLetter");
        element.style.backgroundColor = "#00ff00";
        console.log("encontrado no local certo");
    }
    //ACHANDO A LETRA CERTA NO INDICE [3]
    if (matchGeral.indexOf(3) === 3) {
        let element = document.getElementById("fourthLetter");
        element.style.backgroundColor = "#00ff00";
        console.log("encontrado no local certo");
    }
    //ACHANDO A LETRA CERTA NO INDICE [4]
    if (matchGeral.indexOf(4) === 4) {
        let element = document.getElementById("fifthLetter");
        element.style.backgroundColor = "#00ff00";
        console.log("encontrado no local certo");
    }

    //ACHANDO A LETRA ERRADA NO INDICE [0]
    if (matchGeral.indexOf(-1, [0]) === 0) {
        let element = document.getElementById("firstLetter");
        element.style.backgroundColor = "#ff0000";
        console.log("não encontrado");
    }
    //ACHANDO A LETRA ERRADA NO INDICE [1]
    if (matchGeral.indexOf(-1, [1]) === 1) {
        let element = document.getElementById("secondLetter");
        element.style.backgroundColor = "#ff0000";
        console.log("não encontrado");
    }
    //ACHANDO A LETRA ERRADA NO INDICE [2]
    if (matchGeral.indexOf(-1, [2]) === 2) {
        let element = document.getElementById("thirdLetter");
        element.style.backgroundColor = "#ff0000";
        console.log("não encontrado");
    }
    //ACHANDO A LETRA ERRADA NO INDICE [3]
    if (matchGeral.indexOf(-1, [3]) === 3) {
        let element = document.getElementById("fourthLetter");
        element.style.backgroundColor = "#ff0000";
        console.log("não encontrado");
    }
    //ACHANDO A LETRA ERRADA NO INDICE [4]
    if (matchGeral.indexOf(-1, [4]) === 4) {
        let element = document.getElementById("fifthLetter");
        element.style.backgroundColor = "#ff0000";
        console.log("não encontrado");
    }


    //ACHANDO AS LETRAS NEUTRAS NOS INDICES
    if (matchGeral.indexOf(1) === 0 || matchGeral.indexOf(2) === 0 || matchGeral.indexOf(3) === 0 || matchGeral.indexOf(4) === 0) {
        let element = document.getElementById("firstLetter");
        element.style.backgroundColor = "#ffff00";
        console.log("encontrado mas no local errado");
    }
    if (matchGeral.indexOf(0) === 1 || matchGeral.indexOf(2) === 1 || matchGeral.indexOf(3) === 1 || matchGeral.indexOf(4) === 1) {
        let element = document.getElementById("secondLetter");
        element.style.backgroundColor = "#ffff00";
        console.log("encontrado mas no local errado");
    }
    if (matchGeral.indexOf(0) === 2 || matchGeral.indexOf(1) === 2 || matchGeral.indexOf(3) === 2 || matchGeral.indexOf(4) === 2) {
        let element = document.getElementById("thirdLetter");
        element.style.backgroundColor = "#ffff00";
        console.log("encontrado mas no local errado");
    }
    if (matchGeral.indexOf(0) === 3 || matchGeral.indexOf(1) === 3 || matchGeral.indexOf(2) === 3 || matchGeral.indexOf(4) === 3) {
        let element = document.getElementById("fourthLetter");
        element.style.backgroundColor = "#ffff00";
        console.log("encontrado mas no local errado");
    }
    if (matchGeral.indexOf(0) === 4 || matchGeral.indexOf(1) === 4 || matchGeral.indexOf(2) === 4 || matchGeral.indexOf(3) === 4) {
        let element = document.getElementById("fifthLetter");
        element.style.backgroundColor = "#ffff00";
        console.log("encontrado mas no local errado");
    }
    firstLetter.disabled = true;
    secondLetter.disabled = true;
    thirdLetter.disabled = true;
    fourthLetter.disabled = true;
    fifthLetter.disabled = true;

    
}



//função para adicionar mais um nome à lista
function adicionar() {
    let primeiraTentativa = [document.querySelector("#firstLetter").value.toLowerCase(),document.querySelector("#secondLetter").value.toLowerCase(), document.querySelector("#thirdLetter").value.toLowerCase(), document.querySelector("#fourthLetter").value.toLowerCase(), document.querySelector("#fifthLetter").value.toLowerCase()]
    let nomeDig = document.createElement('li');
    let primeiraTentativaArray = primeiraTentativa[0] + primeiraTentativa[1] + primeiraTentativa[2] + primeiraTentativa[3] + primeiraTentativa[4] ;

    nomeDig.innerHTML = primeiraTentativaArray;
    lista.appendChild(nomeDig);

    let backgroundColor = document.querySelector("#firstLetter").style.backgroundColor,    
    targets = document.querySelectorAll("nomeDig");

for(var i = 0; i < targets.length; i++)
  targets[i].style.color = backgroundColor;
}


function contador() {
    let btn = document.getElementById("submitButton");
    let disp = document.getElementById("display");
    btn.onclick
    count--;
    disp.innerHTML = count;

    if (count === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Suas Tentativas Acabaram(GAME OVER)',
        });
        firstLetter.disabled = true;
        secondLetter.disabled = true;
        thirdLetter.disabled = true;
        fourthLetter.disabled = true;
        fifthLetter.disabled = true;
        
    }

}

function keyboard(value) {
    if (inputs[0].value === "") {
        inputs[0].value = inputs[0].value + value;
        inputs[1].focus();
        return
    }
    if (inputs[1].value === "") {
        inputs[1].value = inputs[1].value + value;
        inputs[2].focus();
        return
    }
    if (inputs[2].value === "") {
        inputs[2].value = inputs[2].value + value;
        inputs[3].focus();
        return
    }
    if (inputs[3].value === "") {
        inputs[3].value = inputs[3].value + value;
        inputs[4].focus();
        return
    }
    if (inputs[4].value === "") {
        inputs[4].value = inputs[4].value + value;
    }
    if (inputs[4].value != "") {
        inputs[4].focus();
    }
}

//CHAMANDO A FUNÇÃO NA TECLA "ENTER" DO TECLADO
document.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        match()
        verificarInputs()
    }
});

//CRIANDO A FUNÇÃO BACKSPACE DO TECLADO ENTRE OS INPUTS
document.addEventListener("keypress", function () {
    let inputs = document.querySelectorAll(".inputsRow input");
    for (let i = 0; i < inputs.length; ++i) {
        inputs[i].onkeydown = function (evento) {
            if (evento.key == "Backspace") {
                if (i > 0 && this.value.length == 0) {
                    inputs[i - 1].focus();
                }
            }
            else if ((i + 1) < inputs.length && this.value.length >= 1) {
                inputs[i + 1].focus();
            }
        }
    }
}
);
document.addEventListener("click", function () {
    let inputs = document.querySelectorAll(".inputsRow input");
    for (let i = 0; i < inputs.length; ++i) {
        inputs[i].onkeydown = function (evento) {
            if (evento.key == "Backspace") {
                if (i > 0 && this.value.length == 0) {
                    inputs[i - 1].focus();
                }
            }
            else if ((i + 1) < inputs.length && this.value.length >= 1) {
                inputs[i + 1].focus();
            }
        }
    }
}
);







