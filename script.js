let firstMatch = "";
let secondMatch = "";
let thirdMatch = "";
let fourthMatch = "";
let fifthMatch = "";

let attemptArray = "";

let letrecoDoDia = ["v", "a", "s", "c", "o"]

let matchFirstInput = "";

function match() {
    inputOnefirstMatch = document.getElementById("firstLetter").value;
    inputOneSecondMatch = document.getElementById("secondLetter").value;
    inputOneThirdMatch = document.getElementById("thirdLetter").value;
    inputOneFourthMatch = document.getElementById("fourthLetter").value;
    inputOneFifthMatch = document.getElementById("fifthLetter").value;

    console.log(inputOnefirstMatch)

    matchFirstInput = letrecoDoDia.indexOf(inputOnefirstMatch);
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