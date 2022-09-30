let letrecoDoDia = "vasco";

// let tentativaAtual = document.querySelectorAll(".boxesRow input").value;
// console.logo
// for (let i = 0; i < tentativaAtual.length; ++i) {
//         if (tentativaAtual.length <= 5) {
//             document.getElementById("submitButton").disabled = false;
//         }
//         else if ((i + 1) < inputs.length && this.value.length >= 1) {
//             inputs[i + 1].focus();
//         }

//     }


function teste() {
    //declarando os valores
    let valor1 = document.getElementById("firstLetter").value;
    let valor2 = document.getElementById("secondLetter").value;
    let valor3 = document.getElementById("thirdLetter").value;
    let valor4 = document.getElementById("fourthLetter").value;
    let valor5 = document.getElementById("fifthLetter").value;
    let valorGeral = [valor1, valor2, valor3, valor4, valor5]
    console.log(valorGeral)

    if (valor1 != "" && valor2 != "" && valor3 != "" && valor4 != "" && valor5 != "") {
    } else {
        document.location.reload(true);
        return
    }

    //match dos valores do indexof
    let match1 = letrecoDoDia.indexOf(valor1)
    let match2 = letrecoDoDia.indexOf(valor2)
    let match3 = letrecoDoDia.indexOf(valor3)
    let match4 = letrecoDoDia.indexOf(valor4)
    let match5 = letrecoDoDia.indexOf(valor5)

    if (match1 === -1) {
        let element = document.getElementById("firstLetter");
        element.style.backgroundColor = "#ff0000";
        console.log("não encontrado")
    }

    if (match1 !== -1) {
        if (match1 === 0) {
            let element = document.getElementById("firstLetter");
            element.style.backgroundColor = "#00ff00";
            console.log("encontrado no local certo")
        }
        if (match1 === 1 || match1 === 2 || match1 === 3 || match1 === 4) {
            let element = document.getElementById("firstLetter");
            element.style.backgroundColor = "#ffff00";
            console.log("encontrado mas no local errado")
        }
    }

    if (match2 === -1) {
        let element = document.getElementById("secondLetter");
        element.style.backgroundColor = "#ff0000";
        console.log("não encontrado")
    }

    if (match2 !== -1) {
        if (match2 === 1) {
            let element = document.getElementById("secondLetter");
            element.style.backgroundColor = "#00ff00";
            console.log("encontrado no local certo")
        }
        if (match2 === 0 || match2 === 2 || match2 === 3 || match2 === 4) {
            let element = document.getElementById("secondLetter");
            element.style.backgroundColor = "#ffff00";
            console.log("encontrado mas no local errado")
        }
    }

    if (match3 === -1) {
        let element = document.getElementById("thirdLetter");
        element.style.backgroundColor = "#ff0000";
        console.log("não encontrado")
    }

    if (match3 !== -1) {
        if (match3 === 2) {
            let element = document.getElementById("thirdLetter");
            element.style.backgroundColor = "#00ff00";
            console.log("encontrado no local certo")
        }
        if (match3 === 0 || match3 === 1 || match3 === 3 || match3 === 4) {
            let element = document.getElementById("thirdLetter");
            element.style.backgroundColor = "#ffff00";
            console.log("encontrado mas no local errado")
        }
    }

    if (match4 === -1) {
        let element = document.getElementById("fourthLetter");
        element.style.backgroundColor = "#ff0000";
        console.log("não encontrado")
    }

    if (match4 !== -1) {
        if (match4 === 3) {
            let element = document.getElementById("fourthLetter");
            element.style.backgroundColor = "#00ff00";
            console.log("encontrado no local certo")
        }
        if (match4 === 0 || match4 === 1 || match4 === 2 || match4 === 4) {
            let element = document.getElementById("fourthLetter");
            element.style.backgroundColor = "#ffff00";
            console.log("encontrado mas no local errado")
        }
    }

    if (match5 === -1) {
        let element = document.getElementById("fifthLetter");
        element.style.backgroundColor = "#ff0000";
        console.log("não encontrado")
    }

    if (match5 !== -1) {
        if (match5 === 4) {
            let element = document.getElementById("fifthLetter");
            element.style.backgroundColor = "#00ff00";
            console.log("encontrado no local certo")
        }
        if (match5 === 0 || match5 === 1 || match5 === 2 || match5 === 3) {
            let element = document.getElementById("fifthLetter");
            element.style.backgroundColor = "#ffff00";
            console.log("encontrado mas no local errado")
        }
    }

    let matchGeral = [match1, match2, match3, match4, match5]
    console.log(matchGeral)

}

document.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        let btn = document.getElementById("submitButton");
        btn.click(teste());
    }
});

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

function backspaceButton() {
    myTextarea.value = myTextarea.value.substring(0, myTextarea.value.length - 1);

}






