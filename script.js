let firstMatch = "";
let secondMatch = "";
let thirdMatch = "";
let fourthMatch = "";
let fifthMatch = "";

let attemptArray = "";

let letrecoDoDia = "vasco"

let matchConfig = "";

function match() {
    inputOnefirstMatch = document.getElementById("firstLetter").value;
    inputOneSecondMatch = document.getElementById("secondLetter").value;
    inputOneThirdMatch = document.getElementById("thirdLetter").value;
    inputOneFourthMatch = document.getElementById("fourthLetter").value;
    inputOneFifthMatch = document.getElementById("fifthLetter").value;

    attemptArray = [inputOnefirstMatch, inputOneSecondMatch, inputOneThirdMatch, inputOneFourthMatch, inputOneFifthMatch]
    
    
    for (i = 0; i < 1; i++) {

        let matchConfig = letrecoDoDia.indexOf(inputOnefirstMatch);

        console.log(matchConfig);
        
    }
    
}

