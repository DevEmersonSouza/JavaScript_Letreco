let letrecoDoDia = "vasco";

function match() {
    firstLetter.style.backgroundColor = "#ff0000";
    secondLetter.style.backgroundColor = "#ff0000";
    thirdLetter.style.backgroundColor = "#ff0000";
    fourthLetter.style.backgroundColor = "#ff0000";
    fifthLetter.style.backgroundColor = "#ff0000";

    let primeiraTentativa = [document.querySelector("#firstLetter").value, document.querySelector("#secondLetter").value, document.querySelector("#thirdLetter").value, document.querySelector("#fourthLetter").value, document.querySelector("#fifthLetter").value]
    console.log(primeiraTentativa)

    let match1 = letrecoDoDia.indexOf(primeiraTentativa[0])
    let match2 = letrecoDoDia.indexOf(primeiraTentativa[1])
    let match3 = letrecoDoDia.indexOf(primeiraTentativa[2])
    let match4 = letrecoDoDia.indexOf(primeiraTentativa[3])
    let match5 = letrecoDoDia.indexOf(primeiraTentativa[4])
    let matchGeral = [match1, match2, match3, match4, match5]
    console.log(matchGeral)
    //ACHANDO A LETRA CERTA NO INDICE [0]
    if (matchGeral.indexOf(0) === 0) {
        let element = document.getElementById("firstLetter");
        element.style.backgroundColor = "#00ff00";
        console.log("encontrado no local certo")
    }
    // //ACHANDO A LETRA CERTA NO INDICE [1]
    if (matchGeral.indexOf(1) === 1) {
        let element = document.getElementById("secondLetter");
        element.style.backgroundColor = "#00ff00";
        console.log("encontrado no local certo")
    }
    //ACHANDO A LETRA CERTA NO INDICE [2]
    if (matchGeral.indexOf(2) === 2) {
        let element = document.getElementById("thirdLetter");
        element.style.backgroundColor = "#00ff00";
        console.log("encontrado no local certo")
    }
    //ACHANDO A LETRA CERTA NO INDICE [3]
    if (matchGeral.indexOf(3) === 3) {
        let element = document.getElementById("fourthLetter");
        element.style.backgroundColor = "#00ff00";
        console.log("encontrado no local certo")
    }
    //ACHANDO A LETRA CERTA NO INDICE [4]
    if (matchGeral.indexOf(4) === 4) {
        let element = document.getElementById("fifthLetter");
        element.style.backgroundColor = "#00ff00";
        console.log("encontrado no local certo")
    }

    //ACHANDO A LETRA ERRADA NO INDICE [0]
    if (matchGeral.indexOf(-1, [0]) === 0) {
        let element = document.getElementById("firstLetter");
        element.style.backgroundColor = "#ff0000";
        console.log("não encontrado")
    }
    //ACHANDO A LETRA ERRADA NO INDICE [1]
    if (matchGeral.indexOf(-1, [1]) === 1) {
        let element = document.getElementById("secondLetter");
        element.style.backgroundColor = "#ff0000";
        console.log("não encontrado")
    }
    //ACHANDO A LETRA ERRADA NO INDICE [2]
    if (matchGeral.indexOf(-1, [2]) === 2) {
        let element = document.getElementById("thirdLetter");
        element.style.backgroundColor = "#ff0000";
        console.log("não encontrado")
    }
    //ACHANDO A LETRA ERRADA NO INDICE [3]
    if (matchGeral.indexOf(-1, [3]) === 3) {
        let element = document.getElementById("fourthLetter");
        element.style.backgroundColor = "#ff0000";
        console.log("não encontrado")
    }
    //ACHANDO A LETRA ERRADA NO INDICE [4]
    if (matchGeral.indexOf(-1, [4]) === 4) {
        let element = document.getElementById("fifthLetter");
        element.style.backgroundColor = "#ff0000";
        console.log("não encontrado")
    }


    //ACHANDO AS LETRAS NEUTRAS NOS INDICES
    if (matchGeral.indexOf(1) === 0 || matchGeral.indexOf(2) === 0 || matchGeral.indexOf(3) === 0 || matchGeral.indexOf(4) === 0) {
        let element = document.getElementById("firstLetter");
        element.style.backgroundColor = "#ffff00";
        console.log("encontrado mas no local errado")
    }
    if (matchGeral.indexOf(0) === 1 || matchGeral.indexOf(2) === 1 || matchGeral.indexOf(3) === 1 || matchGeral.indexOf(4) === 1) {
        let element = document.getElementById("secondLetter");
        element.style.backgroundColor = "#ffff00";
        console.log("encontrado mas no local errado")
    }
    if (matchGeral.indexOf(0) === 2 || matchGeral.indexOf(1) === 2 || matchGeral.indexOf(3) === 2 || matchGeral.indexOf(4) === 2) {
        let element = document.getElementById("thirdLetter");
        element.style.backgroundColor = "#ffff00";
        console.log("encontrado mas no local errado")
    }
    if (matchGeral.indexOf(0) === 3 || matchGeral.indexOf(1) === 3 || matchGeral.indexOf(2) === 3 || matchGeral.indexOf(4) === 3) {
        let element = document.getElementById("fourthLetter");
        element.style.backgroundColor = "#ffff00";
        console.log("encontrado mas no local errado")
    }
    if (matchGeral.indexOf(0) === 4 || matchGeral.indexOf(1) === 4 || matchGeral.indexOf(2) === 4 || matchGeral.indexOf(3) === 4) {
        let element = document.getElementById("fifthLetter");
        element.style.backgroundColor = "#ffff00";
        console.log("encontrado mas no local errado")
    }
}

//CHAMANDO A FUNÇÃO NA TECLA "ENTER" DO TECLADO
document.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        let btn = document.getElementById("submitButton");
        btn.click(match());
    }
});

//CRIANDO A FUNÇÃO BACKSPACE DO TECLADO ENTRE OS INPUTS
document.addEventListener("keypress", function (evento) {
    let inputs = document.querySelectorAll(".boxesRow input");
    for (let i = 0; i < inputs.length; ++i) {
        inputs[i].onkeyup = function (evento) {
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
});

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

function backspaceButton() {
    // myTextarea.value = myTextarea.value.substring(0, myTextarea.value.length - 1);
    let qtd = [document.querySelector("#firstLetter").value, document.querySelector("#secondLetter").value]
    console.log(qtd)

}
