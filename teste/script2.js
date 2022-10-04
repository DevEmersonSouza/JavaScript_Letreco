let letrecoDoDia = "vasco";


function teste() {
    let primeiraTentativa = [document.querySelector("#firstLetter").value, document.querySelector("#secondLetter").value, document.querySelector("#thirdLetter").value, document.querySelector("#fourthLetter").value, document.querySelector("#fifthLetter").value]
    console.log(primeiraTentativa)

    let match1 = letrecoDoDia.indexOf(primeiraTentativa[0])
    let match2 = letrecoDoDia.indexOf(primeiraTentativa[1])
    let match3 = letrecoDoDia.indexOf(primeiraTentativa[2])
    let match4 = letrecoDoDia.indexOf(primeiraTentativa[3])
    let match5 = letrecoDoDia.indexOf(primeiraTentativa[4])
    let matchGeral = [match1, match2, match3, match4, match5]
    console.log(matchGeral)
    
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
    
    
    //ACHANDO AS LETRAS NEUTRAS NOS INDICES [0]
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
        // if (matchGeral.indexOf(0) === 3) {
        //     let element = document.getElementById("fourthLetter");
        //     element.style.backgroundColor = "#ffff00";
        //     console.log("encontrado mas no local errado")

        // }
        // if (matchGeral.indexOf(0) === 4) {
        //     let element = document.getElementById("fifthLetter");
        //     element.style.backgroundColor = "#ffff00";
        //     console.log("encontrado mas no local errado")
            
    
    
    

    // //ACHANDO AS LETRAS NEUTRAS NO INDICE [1]
    // if (matchGeral.indexOf(1) >= 0) {
    //     if (matchGeral.indexOf(1) === 0) {
    //         let element = document.getElementById("firstLetter");
    //         element.style.backgroundColor = "#ffff00";
    //         console.log("encontrado mas no local errado")

    //     }
    //     if (matchGeral.indexOf(1) === 2) {
    //         let element = document.getElementById("thirdLetter");
    //         element.style.backgroundColor = "#ffff00";
    //         console.log("encontrado mas no local errado")

    //     }
    //     if (matchGeral.indexOf(1) === 3) {
    //         let element = document.getElementById("fourthLetter");
    //         element.style.backgroundColor = "#ffff00";
    //         console.log("encontrado mas no local errado")

    //     }
    //     if (matchGeral.indexOf(1) === 4) {
    //         let element = document.getElementById("fifthLetter");
    //         element.style.backgroundColor = "#ffff00";
    //         console.log("encontrado mas no local errado")
    //     }
    // }


    // //ACHANDO AS LETRAS NEUTRAS NO INDICE [2]
    // if (matchGeral.indexOf(2) >= 0) {
    //     if (matchGeral.indexOf(2) === 0) {
    //         let element = document.getElementById("firstLetter");
    //         element.style.backgroundColor = "#ffff00";
    //         console.log("encontrado mas no local errado")
    //     }
    //     if (matchGeral.indexOf(2) === 1) {
    //         let element = document.getElementById("secondLetter");
    //         element.style.backgroundColor = "#ffff00";
    //         console.log("encontrado mas no local errado")

    //     }
    //     if (matchGeral.indexOf(2) === 3) {
    //         let element = document.getElementById("fourthLetter");
    //         element.style.backgroundColor = "#ffff00";
    //         console.log("encontrado mas no local errado")
    //     }
    //     if (matchGeral.indexOf(2) === 4) {
    //         let element = document.getElementById("fifthLetter");
    //         element.style.backgroundColor = "#ffff00";
    //         console.log("encontrado mas no local errado")
    //     }
    // }


    // //ACHANDO AS LETRAS NEUTRAS NO INDICE [3]
    // if (matchGeral.indexOf(3) >= 0) {
    //     if (matchGeral.indexOf(3) === 0) {
    //         let element = document.getElementById("firstLetter");
    //         element.style.backgroundColor = "#ffff00";
    //         console.log("encontrado mas no local errado")
    //     }
    //     if (matchGeral.indexOf(3) === 1) {
    //         let element = document.getElementById("secondLetter");
    //         element.style.backgroundColor = "#ffff00";
    //         console.log("encontrado mas no local errado")

    //     }
    //     if (matchGeral.indexOf(3) === 2) {
    //         let element = document.getElementById("thirdLetter");
    //         element.style.backgroundColor = "#ffff00";
    //         console.log("encontrado mas no local errado")
    //     }
    //     if (matchGeral.indexOf(3) === 4) {
    //         let element = document.getElementById("fifthLetter");
    //         element.style.backgroundColor = "#ffff00";
    //         console.log("encontrado mas no local errado")
    //     }
    // }


    // //ACHANDO AS LETRAS NEUTRAS NO INDICE [4]
    // if (matchGeral.indexOf(4) >= 0) {
    //     if (matchGeral.indexOf(4) === 0) {
    //         let element = document.getElementById("firstLetter");
    //         element.style.backgroundColor = "#ffff00";
    //         console.log("encontrado mas no local errado")
    //     }
    //     if (matchGeral.indexOf(4) === 1) {
    //         let element = document.getElementById("secondLetter");
    //         element.style.backgroundColor = "#ffff00";
    //         console.log("encontrado mas no local errado")

    //     }
    //     if (matchGeral.indexOf(4) === 2) {
    //         let element = document.getElementById("thirdLetter");
    //         element.style.backgroundColor = "#ffff00";
    //         console.log("encontrado mas no local errado")
    //     }
    //     if (matchGeral.indexOf(4) === 3) {
    //         let element = document.getElementById("fourthLetter");
    //         element.style.backgroundColor = "#ffff00";
    //         console.log("encontrado mas no local errado")
    //     }
    // }

    //ACHANDO A LETRA CERTA NO INDICE [0]
    if (matchGeral.indexOf(0) === 0) {
        let element = document.getElementById("firstLetter");
        element.style.backgroundColor = "#00ff00";
        console.log("encontrado no local certo")
    }

    //ACHANDO A LETRA CERTA NO INDICE [1]
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
    
    // let tirateima = matchGeral.indexOf(-1,[0]) === 0
    // console.log(tirateima)
    //ACHANDO AS LETRAS NEUTRAS

    // //declarando os valores
    // let valor1 = document.getElementById("firstLetter").value;
    // let valor2 = document.getElementById("secondLetter").value;
    // let valor3 = document.getElementById("thirdLetter").value;
    // let valor4 = document.getElementById("fourthLetter").value;
    // let valor5 = document.getElementById("fifthLetter").value;
    // let valorGeral = [valor1, valor2, valor3, valor4, valor5]
    // console.log(valorGeral)

    // if (valor1 != "" && valor2 != "" && valor3 != "" && valor4 != "" && valor5 != "") {
    // } else {
    //     document.location.reload(true);
    //     return
    // }

    // //match dos valores do indexof
    // let match1 = letrecoDoDia.indexOf(valor1)
    // let match2 = letrecoDoDia.indexOf(valor2)
    // let match3 = letrecoDoDia.indexOf(valor3)
    // let match4 = letrecoDoDia.indexOf(valor4)
    // let match5 = letrecoDoDia.indexOf(valor5)

    // if (match1 === -1) {
    //     let element = document.getElementById("firstLetter");
    //     element.style.backgroundColor = "#ff0000";
    //     console.log("não encontrado")
    // }

    // if (match1 !== -1) {
    //     if (match1 === 0) {
    //         let element = document.getElementById("firstLetter");
    //         element.style.backgroundColor = "#00ff00";
    //         console.log("encontrado no local certo")
    //     }
    //     if (match1 === 1 || match1 === 2 || match1 === 3 || match1 === 4) {
    //         let element = document.getElementById("firstLetter");
    //         element.style.backgroundColor = "#ffff00";
    //         console.log("encontrado mas no local errado")
    //     }
    // }

    // if (match2 === -1) {
    //     let element = document.getElementById("secondLetter");
    //     element.style.backgroundColor = "#ff0000";
    //     console.log("não encontrado")
    // }

    // if (match2 !== -1) {
    //     if (match2 === 1) {
    //         let element = document.getElementById("secondLetter");
    //         element.style.backgroundColor = "#00ff00";
    //         console.log("encontrado no local certo")
    //     }
    //     if (match2 === 0 || match2 === 2 || match2 === 3 || match2 === 4) {
    //         let element = document.getElementById("secondLetter");
    //         element.style.backgroundColor = "#ffff00";
    //         console.log("encontrado mas no local errado")
    //     }
    // }

    // if (match3 === -1) {
    //     let element = document.getElementById("thirdLetter");
    //     element.style.backgroundColor = "#ff0000";
    //     console.log("não encontrado")
    // }

    // if (match3 !== -1) {
    //     if (match3 === 2) {
    //         let element = document.getElementById("thirdLetter");
    //         element.style.backgroundColor = "#00ff00";
    //         console.log("encontrado no local certo")
    //     }
    //     if (match3 === 0 || match3 === 1 || match3 === 3 || match3 === 4) {
    //         let element = document.getElementById("thirdLetter");
    //         element.style.backgroundColor = "#ffff00";
    //         console.log("encontrado mas no local errado")
    //     }
    // }

    // if (match4 === -1) {
    //     let element = document.getElementById("fourthLetter");
    //     element.style.backgroundColor = "#ff0000";
    //     console.log("não encontrado")
    // }

    // if (match4 !== -1) {
    //     if (match4 === 3) {
    //         let element = document.getElementById("fourthLetter");
    //         element.style.backgroundColor = "#00ff00";
    //         console.log("encontrado no local certo")
    //     }
    //     if (match4 === 0 || match4 === 1 || match4 === 2 || match4 === 4) {
    //         let element = document.getElementById("fourthLetter");
    //         element.style.backgroundColor = "#ffff00";
    //         console.log("encontrado mas no local errado")
    //     }
    // }

    // if (match5 === -1) {
    //     let element = document.getElementById("fifthLetter");
    //     element.style.backgroundColor = "#ff0000";
    //     console.log("não encontrado")
    // }

    // if (match5 !== -1) {
    //     if (match5 === 4) {
    //         let element = document.getElementById("fifthLetter");
    //         element.style.backgroundColor = "#00ff00";
    //         console.log("encontrado no local certo")
    //     }
    //     if (match5 === 0 || match5 === 1 || match5 === 2 || match5 === 3) {
    //         let element = document.getElementById("fifthLetter");
    //         element.style.backgroundColor = "#ffff00";
    //         console.log("encontrado mas no local errado")
    //     }
    // }

    // let matchGeral = [match1, match2, match3, match4, match5]
    // console.log(matchGeral)

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
    // myTextarea.value = myTextarea.value.substring(0, myTextarea.value.length - 1);
    let qtd = [document.querySelector("#firstLetter").value, document.querySelector("#secondLetter").value]
    console.log(qtd)

}






