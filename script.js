let firstMatch = "";
let secondMatch = "";
let thirdMatch = "";
let fourthMatch = "";
let fifthMatch = "";

let attemptArray = "";

let letrecoDoDia = ["v", "a", "s", "c", "o"]

let matchConfig = "";

function match() {
    inputOnefirstMatch = document.getElementById("firstLetter").value;
    inputOneSecondMatch = document.getElementById("secondLetter").value;
    inputOneThirdMatch = document.getElementById("thirdLetter").value;
    inputOneFourthMatch = document.getElementById("fourthLetter").value;
    inputOneFifthMatch = document.getElementById("fifthLetter").value;

    attemptArray = [inputOnefirstMatch, inputOneSecondMatch, inputOneThirdMatch, inputOneFourthMatch, inputOneFifthMatch]
    console.log(attemptArray);

        matchConfig = letrecoDoDia.indexOf(inputOnefirstMatch);
        console.log(matchConfig)

        if (matchConfig <= 0) {
            let element = document.getElementById("firstLetter");
            element.style.backgroundColor = "#00ff00";
            console.log("ok")
    
        }
        else {
            let element = document.getElementById("firstLetter");
            element.style.backgroundColor = "#ff0000";
            console.log("não encontrado")
        }

}

