// Palavra alvo
let letrecoDoDia = "vasco";
console.log(letrecoDoDia)

// function teste() {
//     let valor1 = document.getElementById("firstLetter").value;
//     let valor2 = document.getElementById("secondLetter").value;
//     let valor3 = document.getElementById("thirdLetter").value;
//     let valor4 = document.getElementById("fourthLetter").value;
//     let valor5 = document.getElementById("fifthLetter").value;
//     let valorGeral = [valor1, valor2, valor3, valor4, valor5]
//     console.log(valorGeral)

//     let match1 = letrecoDoDia.indexOf(valor1)
//     let match2 = letrecoDoDia.indexOf(valor2)
//     let match3 = letrecoDoDia.indexOf(valor3)
//     let match4 = letrecoDoDia.indexOf(valor4)
//     let match5 = letrecoDoDia.indexOf(valor5)

//     console.log (match1, match2, match3, match4, match5)
//     if (match1 === -1 || match2 === -1 || match3 === -1 || match4 === -1 || match5 === -1) {
//         document.getElementById("firstLetter").style.backgroundColor = "#ff0000";
//         document.getElementById("secondLetter").style.backgroundColor = "#ff0000";
//         document.getElementById("thirdLetter").style.backgroundColor = "#ff0000";
//         document.getElementById("fourthLetter").style.backgroundColor = "#ff0000";
//         document.getElementById("fifthLetter").style.backgroundColor = "#ff0000";
//         console.log("não encontrado")

//         if (match1 > 0 || match2 > 0 || match3 > 0 || match4 > 0 || match5 > 0)
//             if (match1 === 0 || match2 === 1 || match3 === 2 || match4 === 3|| match5 === 4)
//             document.getElementById("firstLetter").style.backgroundColor = "#00ff00";
//             document.getElementById("secondLetter").style.backgroundColor = "#00ff00";
//             document.getElementById("thirdLetter").style.backgroundColor = "#00ff00";
//             document.getElementById("fourthLetter").style.backgroundColor = "#00ff00";
//             document.getElementById("fifthLetter").style.backgroundColor = "#00ff00";
//             console.log("não encontrado")
//     }
// }
// Função para execução das validações

function match() {
    matchFirst();
    matchSecond();
    matchThird();
    matchFourth();
    matchFifth();
}

// validação dos inputs com o indexOf

function matchFirst() {
    let inputOnefirstMatch = document.getElementById("firstLetter").value;

    console.log(inputOnefirstMatch)

    let matchFirstInput = letrecoDoDia.indexOf(inputOnefirstMatch);
    console.log(matchFirstInput)

    if (matchFirstInput === -1) {
        let element = document.getElementById("firstLetter");
        element.style.backgroundColor = "#ff0000";
        console.log("não encontrado")
    }

    if (matchFirstInput !== -1) {
        if (matchFirstInput === 0) {
            let element = document.getElementById("firstLetter");
            element.style.backgroundColor = "#00ff00";
            console.log("encontrado no local certo")
        }
        if (matchFirstInput === 1 || matchFirstInput === 2 || matchFirstInput === 3 || matchFirstInput === 4) {
            let element = document.getElementById("firstLetter");
            element.style.backgroundColor = "#ffff00";
            console.log("encontrado mas no local errado")
        }
    }
}

function matchSecond() {
    let inputOneSecondMatch = document.getElementById("secondLetter").value;

    console.log(inputOneSecondMatch)

    let matchSecondInput = letrecoDoDia.indexOf(inputOneSecondMatch);
    console.log(matchSecondInput)

    if (matchSecondInput === -1) {
        let element = document.getElementById("secondLetter");
        element.style.backgroundColor = "#ff0000";
        console.log("não encontrado")
    }

    if (matchSecondInput !== -1) {
        if (matchSecondInput === 1) {
            let element = document.getElementById("secondLetter");
            element.style.backgroundColor = "#00ff00";
            console.log("encontrado no local certo")
        }
        if (matchSecondInput === 0 || matchSecondInput === 2 || matchSecondInput === 3 || matchSecondInput === 4) {
            let element = document.getElementById("secondLetter");
            element.style.backgroundColor = "#ffff00";
            console.log("encontrado mas no local errado")
        }
    }
}
function matchThird() {
    let inputOneThirdMatch = document.getElementById("thirdLetter").value;

    console.log(inputOneThirdMatch)

    let matchThirdInput = letrecoDoDia.indexOf(inputOneThirdMatch);
    console.log(matchThirdInput)

    if (matchThirdInput === -1) {
        let element = document.getElementById("thirdLetter");
        element.style.backgroundColor = "#ff0000";
        console.log("não encontrado")
    }

    if (matchThirdInput !== -1) {
        if (matchThirdInput === 2) {
            let element = document.getElementById("thirdLetter");
            element.style.backgroundColor = "#00ff00";
            console.log("encontrado no local certo")
        }
        if (matchThirdInput === 0 || matchThirdInput === 1 || matchThirdInput === 3 || matchThirdInput === 4) {
            let element = document.getElementById("thirdLetter");
            element.style.backgroundColor = "#ffff00";
            console.log("encontrado mas no local errado")
        }
    }

}
function matchFourth() {
    let inputOneFourthMatch = document.getElementById("fourthLetter").value;

    console.log(inputOneFourthMatch)

    let matchFourthInput = letrecoDoDia.indexOf(inputOneFourthMatch);
    console.log(matchFourthInput)

    if (matchFourthInput === -1) {
        let element = document.getElementById("fourthLetter");
        element.style.backgroundColor = "#ff0000";
        console.log("não encontrado")
    }

    if (matchFourthInput !== -1) {
        if (matchFourthInput === 3) {
            let element = document.getElementById("fourthLetter");
            element.style.backgroundColor = "#00ff00";
            console.log("encontrado no local certo")
        }
        if (matchFourthInput === 0 || matchFourthInput === 1 || matchFourthInput === 2 || matchFourthInput === 4) {
            let element = document.getElementById("fourthLetter");
            element.style.backgroundColor = "#ffff00";
            console.log("encontrado mas no local errado")
        }
    }

}
function matchFifth() {
    let inputOneFifthhMatch = document.getElementById("fifthLetter").value;

    console.log(inputOneFifthhMatch)

    let matchFifthInput = letrecoDoDia.indexOf(inputOneFifthhMatch);
    console.log(matchFifthInput)

    if (matchFifthInput === -1) {
        let element = document.getElementById("fifthLetter");
        element.style.backgroundColor = "#ff0000";
        console.log("não encontrado")
    }

    if (matchFifthInput !== -1) {
        if (matchFifthInput === 4) {
            let element = document.getElementById("fifthLetter");
            element.style.backgroundColor = "#00ff00";
            console.log("encontrado no local certo")
        }
        if (matchFifthInput === 0 || matchFifthInput === 1 || matchFifthInput === 2 || matchFifthInput === 3) {
            let element = document.getElementById("fifthLetter");
            element.style.backgroundColor = "#ffff00";
            console.log("encontrado mas no local errado")
        }
    }

}
// Verificação para identificar se a palavra tem 05 letras

function verificarInputs() {

    let val1 = document.getElementById("firstLetter").value;
    let val2 = document.getElementById("secondLetter").value;
    let val3 = document.getElementById("thirdLetter").value;
    let val4 = document.getElementById("fourthLetter").value;
    let val5 = document.getElementById("fifthLetter").value;

    if (val1 != "" && val2 != "" && val3 != "" && val4 != "" && val5 != "") {

    } else {
        alert("Apenas palavras com 5 letras");
        window.location.reload(false);
    }
}

document.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        let btn = document.getElementById("submitButton");
        btn.click(verificarInputs());
    }
});

// Função "backspace"

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






